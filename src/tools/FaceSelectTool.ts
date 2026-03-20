import * as THREE from 'three';
import { Tool } from './Tool';
import { BaseTool } from './BaseTool';
import { EventBus } from '../core/EventBus';
import { InteractionEvent } from '../interaction/InteractionManager';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager } from '../managers/ViewManager';

export class FaceSelectTool extends BaseTool implements Tool {
    id = 'face_select';
    
    private viewManager: ViewManager;
    private raycaster: THREE.Raycaster = new THREE.Raycaster();
    private selectedObject: THREE.Object3D | null = null;
    private highlightMeshes: Map<string, THREE.Mesh> = new Map(); // Store centroid.toJSON() -> highlightMesh
    private originalWireframeState: Map<string, boolean> = new Map(); // Store uuid -> wireframe state

    constructor(eventBus: EventBus, viewManager: ViewManager, objectManager: ObjectManager) {
        super(eventBus, objectManager);
        this.viewManager = viewManager;

        this.eventBus.on('selection-changed', (selected: THREE.Object3D[]) => {
            this.selectedObject = selected.length === 1 ? selected[0] : null;
            // Clear highlights if object changes
            this._clearHighlights(); 
        });
        
        // Listener to clear highlights if modifier is removed while tool is active
        this.eventBus.on('modifier-changed', (object: THREE.Object3D) => {
            if (this.selectedObject && this.selectedObject.uuid === object.uuid) {
                const hasFaceDelete = object.userData.modifiers?.some((m: any) => m.type === 'face_delete');
                if (!hasFaceDelete) {
                    this._clearHighlights();
                }
            }
        });

        this.eventBus.on('execute-face-delete', (object: THREE.Object3D) => {
            if (this.selectedObject && this.selectedObject.uuid === object.uuid) {
                console.log('FaceSelectTool: "execute-face-delete" empfangen. Geometrie wird aktualisiert.');
                this._clearHighlights(); // Clear highlights FIRST

                // Introduce a small delay to allow potential GPU resource disposal to complete
                // before the ModifierManager attempts to rebuild the geometry.
                setTimeout(() => {
                    this.eventBus.emit('update-object-geometry', this.selectedObject);
                }, 50); // 50ms delay
            }
        });
    }

    private _getVisualMesh(): THREE.Mesh | null {
        if (!this.selectedObject) return null;
        const mesh = this.selectedObject.children.find(c => c.userData.isGeneratedVisual);
        return (mesh instanceof THREE.Mesh) ? mesh : null;
    }

    activate() {
        this.viewManager.getCanvas().style.cursor = 'crosshair';
        console.log('FaceSelectTool: Aktiviert. Klicke auf eine Fläche, um sie auszuwählen/abzuwählen.');
        this._clearHighlights(); // Clear highlights on activation

        const mesh = this._getVisualMesh();
        if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
            // Only store if not already stored
            if (!this.originalWireframeState.has(mesh.uuid)) {
                this.originalWireframeState.set(mesh.uuid, mesh.material.wireframe);
            }
            mesh.material.wireframe = false; // Turn off wireframe to show solid faces
        }
    }

    deactivate() {
        this.viewManager.getCanvas().style.cursor = 'default';
        this._clearHighlights(); // Clear highlights on deactivation

        const mesh = this._getVisualMesh();
        if (mesh && mesh.material instanceof THREE.MeshStandardMaterial) {
            // Restore original wireframe state
            if (this.originalWireframeState.has(mesh.uuid)) {
                mesh.material.wireframe = this.originalWireframeState.get(mesh.uuid)!;
                this.originalWireframeState.delete(mesh.uuid);
            }
        }
    }

    private _clearHighlights() {
        this.highlightMeshes.forEach(mesh => {
            if (mesh.parent) {
                mesh.parent.remove(mesh);
                mesh.geometry.dispose();
                (mesh.material as THREE.Material).dispose();
            }
        });
        this.highlightMeshes.clear();
    }

    onPointerDown(event: InteractionEvent) {
        if (event.originalEvent.button !== 0 || !this.selectedObject) return;

        console.log("FaceSelectTool: PointerDown auf ausgewähltem Objekt:", this.selectedObject.name);

        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;

        this.raycaster.setFromCamera(event.pointer, cam);
        
        // Prioritize finding the generated visual mesh
        let visualMesh: THREE.Object3D | undefined = this.selectedObject.children.find(c => c.userData.isGeneratedVisual);

        if (!visualMesh) {
            visualMesh = this.selectedObject.children.find(c => c.userData.isMesh);
             if (!visualMesh && this.selectedObject instanceof THREE.Mesh) {
                visualMesh = this.selectedObject;
            }
        }

        if (!visualMesh || !(visualMesh instanceof THREE.Mesh)) {
            console.error('FaceSelectTool: Kein Mesh zum Intersecten gefunden.');
            return;
        }

        // IMPROVEMENT: Temporarily set DoubleSide to catch inverted faces from boolean ops
        const originalSide = (visualMesh.material as THREE.Material).side;
        (visualMesh.material as THREE.Material).side = THREE.DoubleSide;

        console.log("FaceSelectTool: Teste Raycast gegen:", visualMesh.name);
        const intersects = this.raycaster.intersectObject(visualMesh, true);
        
        // Restore original side
        (visualMesh.material as THREE.Material).side = originalSide;

        console.log(`FaceSelectTool: ${intersects.length} Treffer gefunden.`);

        if (intersects.length > 0) {
            const hit = intersects[0];
            const hitVisualMesh = hit.object as THREE.Mesh; // Rename to avoid conflict
            
            if (hit.faceIndex !== undefined && hit.faceIndex !== null && hitVisualMesh.geometry) {
                const faceIndex = hit.faceIndex;
                const hitCentroid = FaceSelectTool._getFaceCentroid(hitVisualMesh.geometry as THREE.BufferGeometry, faceIndex);
                if (!hitCentroid) return;
                const centroidKey = hitCentroid.toArray().map(n => n.toFixed(3)).join(','); // Unique string key for map
                
                const faceDeleteMod = this.selectedObject.userData.modifiers?.find((m: any) => m.type === 'face_delete' && m.active);
                if (!faceDeleteMod) {
                    alert('Bitte fügen Sie zuerst den "Flächen entfernen"-Modifikator hinzu.');
                    console.warn('FaceSelectTool: "Flächen entfernen" Modifikator nicht auf dem Objekt gefunden.');
                    this.eventBus.emit('tool-selected', 'select');
                    return;
                }

                // faceDeleteMod.params.faces now stores centroids (Vector3), not faceIndex (number)
                const storedCentroids = faceDeleteMod.params.faces as THREE.Vector3[];
                const foundIndex = this._findCentroidInArray(storedCentroids, hitCentroid);
                
                if (foundIndex > -1) {
                    // Deselect: Remove highlight
                    storedCentroids.splice(foundIndex, 1);
                    const highlightMesh = this.highlightMeshes.get(centroidKey);
                    if (highlightMesh) {
                        if (highlightMesh.parent) highlightMesh.parent.remove(highlightMesh);
                        highlightMesh.geometry.dispose();
                        (highlightMesh.material as THREE.Material).dispose();
                        this.highlightMeshes.delete(centroidKey);
                    }
                    console.log(`FaceSelectTool: Face mit Centroid ${centroidKey} abgewählt.`);
                } else {
                    // Select: Add highlight
                    storedCentroids.push(hitCentroid);
                    const faceGeo = FaceSelectTool._extractFaceGeometry(hitVisualMesh.geometry as THREE.BufferGeometry, faceIndex);
                    const highlightMaterial = new THREE.MeshBasicMaterial({ 
                        color: 0xff0000, 
                        transparent: true, 
                        opacity: 0.5, 
                        depthTest: false 
                    });
                    const highlightMesh = new THREE.Mesh(faceGeo, highlightMaterial);
                    highlightMesh.renderOrder = 999; // Render on top
                    highlightMesh.userData.isHighlight = true; // Mark as highlight mesh
                    this.selectedObject.add(highlightMesh);
                    this.highlightMeshes.set(centroidKey, highlightMesh);
                    console.log(`FaceSelectTool: Face mit Centroid ${centroidKey} ausgewählt und hervorgehoben.`);
                }
                
                console.log('FaceSelectTool: Neue Liste zu löschender Faces (Centroids):', storedCentroids.map(c => c.toArray().map(n => n.toFixed(3)).join(',')));
            }
        }
    }

    onPointerMove() {
        // TODO: Implement face highlighting on hover
    }

    onPointerUp() {
        // Nothing to do here for now
    }

    private _findCentroidInArray(centroids: THREE.Vector3[], targetCentroid: THREE.Vector3, tolerance: number = 0.01): number {
        for (let i = 0; i < centroids.length; i++) {
            if (centroids[i].distanceTo(targetCentroid) < tolerance) {
                return i;
            }
        }
        return -1;
    }

    private static _extractFaceGeometry(sourceGeometry: THREE.BufferGeometry, faceIndex: number): THREE.BufferGeometry {
        const newGeometry = new THREE.BufferGeometry();
        const positionAttribute = sourceGeometry.attributes.position;
        const normalAttribute = sourceGeometry.attributes.normal;
        const uvAttribute = sourceGeometry.attributes.uv;

        const indices = sourceGeometry.index ? sourceGeometry.index.array : null;
        if (!indices) return newGeometry;

        const newPositions: number[] = [];
        const newNormals: number[] = [];
        const newUvs: number[] = [];
        const newIndices: number[] = [];

        const vA = indices[faceIndex * 3];
        const vB = indices[faceIndex * 3 + 1];
        const vC = indices[faceIndex * 3 + 2];

        newPositions.push(positionAttribute.getX(vA), positionAttribute.getY(vA), positionAttribute.getZ(vA));
        newPositions.push(positionAttribute.getX(vB), positionAttribute.getY(vB), positionAttribute.getZ(vB));
        newPositions.push(positionAttribute.getX(vC), positionAttribute.getY(vC), positionAttribute.getZ(vC));

        if (normalAttribute) {
            newNormals.push(normalAttribute.getX(vA), normalAttribute.getY(vA), normalAttribute.getZ(vA));
            newNormals.push(normalAttribute.getX(vB), normalAttribute.getY(vB), normalAttribute.getZ(vB));
            newNormals.push(normalAttribute.getX(vC), normalAttribute.getY(vC), normalAttribute.getZ(vC));
        }

        if (uvAttribute) {
            newUvs.push(uvAttribute.getX(vA), uvAttribute.getY(vA));
            newUvs.push(uvAttribute.getX(vB), uvAttribute.getY(vB));
            newUvs.push(uvAttribute.getX(vC), uvAttribute.getY(vC));
        }

        newIndices.push(0, 1, 2);
        newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(newPositions, 3));
        if (newNormals.length > 0) newGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(newNormals, 3));
        if (newUvs.length > 0) newGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(newUvs, 2));
        newGeometry.setIndex(newIndices);

        return newGeometry;
    }

    private static _getFaceCentroid(geometry: THREE.BufferGeometry, faceIndex: number): THREE.Vector3 | null {
        const positionAttribute = geometry.attributes.position;
        const indices = geometry.index ? geometry.index.array : null;
        if (!indices) return null;

        const vA = indices[faceIndex * 3];
        const vB = indices[faceIndex * 3 + 1];
        const vC = indices[faceIndex * 3 + 2];

        const pA = new THREE.Vector3(positionAttribute.getX(vA), positionAttribute.getY(vA), positionAttribute.getZ(vA));
        const pB = new THREE.Vector3(positionAttribute.getX(vB), positionAttribute.getY(vB), positionAttribute.getZ(vB));
        const pC = new THREE.Vector3(positionAttribute.getX(vC), positionAttribute.getY(vC), positionAttribute.getZ(vC));

        return pA.add(pB).add(pC).divideScalar(3);
    }
}