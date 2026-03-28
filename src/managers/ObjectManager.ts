import * as THREE from 'three';
import { EventBus } from '../core/EventBus';

export class ObjectManager {
    private eventBus: EventBus;
    private scene: THREE.Scene;
    private objects: THREE.Object3D[] = [];
    private selectedObjects: Set<THREE.Object3D> = new Set();

    constructor(eventBus: EventBus, scene: THREE.Scene) {
        this.eventBus = eventBus;
        this.scene = scene;
        console.log("ObjectManager initialized");
        
        // Periodic check to rescue "exploded" objects
        setInterval(() => this.sanitizeObjects(), 500); // Faster check

        this.eventBus.on('object-added', (obj: THREE.Object3D) => {
            this.updateObjectVisuals(obj); // Ensure initial materialParams (like wireframe) are applied immediately
        });

        this.eventBus.on('delete-selected-object', () => {
             const selected = this.getSelectedObjects();
             selected.forEach(obj => this.removeObject(obj));
             this.selectObject(null); // Clear selection state
             this.eventBus.emit('selection-changed', []);
        });

        this.eventBus.on('update-object-geometry', (object: THREE.Object3D) => {
            this.updateObjectVisuals(object);
        });
    }

    private updateObjectVisuals(object: THREE.Object3D) {
        const params = object.userData.materialParams;
        if (!params) return;

        const wfName = 'Visual_Wireframe_Overlay';
        const fillName = 'Visual_Fill';

        // Helper function to process each mesh found
        const processMesh = (mesh: THREE.Mesh) => {
            // Skip helpers, wireframes themselves, or selection highlights
            if (mesh.userData.isHelper || mesh.name === wfName || mesh.userData.isControlPoint || mesh.userData.isAnchor) return;

            // Update Material
            const mat = mesh.material as any;
            if (mat && (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial || mat.isMeshBasicMaterial)) {
                if (params.color) mat.color.set(params.color);
                if (params.roughness !== undefined && mat.roughness !== undefined) mat.roughness = params.roughness;
                if (params.metalness !== undefined && mat.metalness !== undefined) mat.metalness = params.metalness;
                if (params.opacity !== undefined) {
                    const opacity = Math.round(params.opacity * 100) / 100;
                    mat.opacity = opacity;
                    mat.transparent = opacity < 1;
                    mat.depthWrite = opacity >= 1;
                    mat.needsUpdate = true;
                }
                if (params.flatShading !== undefined && mat.flatShading !== undefined) {
                    mat.flatShading = params.flatShading;
                    mat.needsUpdate = true;
                }
            }

            // Skip wireframe overlay for generated visual meshes (e.g. fill mesh)
            if (mesh.userData.isGeneratedVisual) return;

            // Update Wireframe
            let wfObj = mesh.children.find(c => c.name === wfName);
            
            if (params.wireframe) {
                if (!wfObj) {
                    const geo = mesh.geometry;
                    // Safety check for empty or invalid geometry
                    if (!geo || !geo.attributes || !geo.attributes.position || geo.attributes.position.count === 0) return;

                    const wireGeo = new THREE.EdgesGeometry(geo, 1); // 1 Grad Schwellenwert
                    const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }); 
                    wfObj = new THREE.LineSegments(wireGeo, wireMat);
                    wfObj.name = wfName;
                    wfObj.userData.isGeneratedVisual = true;
                    wfObj.renderOrder = 1; 
                    mesh.add(wfObj);
                }
                wfObj.visible = true;
            } else {
                if (wfObj) {
                    mesh.remove(wfObj);
                    if ((wfObj as any).geometry) (wfObj as any).geometry.dispose();
                    if ((wfObj as any).material) (wfObj as any).material.dispose();
                }
            }
        };

        // Recursive traversal to catch all parts of the Group
        object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                processMesh(child);
            }
        });

        // Handle fill mesh for closed bezier shapes
        // Always remove existing fill mesh first (to reflect geometry or material changes)
        const existingFill = object.children.find(c => c.name === fillName);
        if (existingFill) {
            object.remove(existingFill);
            if (existingFill instanceof THREE.Mesh) {
                existingFill.geometry.dispose();
                if (Array.isArray(existingFill.material)) {
                    existingFill.material.forEach(m => m.dispose());
                } else {
                    existingFill.material.dispose();
                }
            }
        }

        // In solid mode, create a new fill mesh from the bezier contour
        if (!params.wireframe) {
            const fillMesh = this.generateFillMesh(object, params);
            if (fillMesh) object.add(fillMesh);
        }
    }

    private generateFillMesh(object: THREE.Object3D, params: any): THREE.Mesh | null {
        // Only generate fill for closed shapes
        if (!object.userData.isClosed) return null;

        // Collect non-offset bezier segments in their original (contour) order
        const segments = object.children.filter(c =>
            c.userData.type === 'bezier_line' && !c.userData.isOffset
        );

        if (segments.length < 3) return null;

        // Collect contour points in shape-local XZ space
        const contourPoints: THREE.Vector2[] = [];

        for (const seg of segments) {
            const curveMesh = seg.children.find((c: any) => c.userData.isCurve) as THREE.Line;
            if (!curveMesh?.geometry?.attributes?.position) continue;

            const pos = curveMesh.geometry.attributes.position;

            // Segments are always added in connected order (end of seg[i] = start of seg[i+1]),
            // so concatenating their points forms a valid closed contour.
            // Skip the last point of each segment to avoid duplicates at joints.
            for (let i = 0; i < pos.count - 1; i++) {
                // Shapes live in the XZ plane (Y ≈ 0); map X→X, Z→Y for THREE.Shape (2D)
                contourPoints.push(new THREE.Vector2(pos.getX(i), pos.getZ(i)));
            }
        }

        if (contourPoints.length < 3) return null;

        const shape = new THREE.Shape(contourPoints);
        const geometry = new THREE.ShapeGeometry(shape);

        // THREE.ShapeGeometry is in the XY plane; rotate it into the XZ plane
        geometry.rotateX(-Math.PI / 2);

        const opacity = Math.round((params.opacity !== undefined ? params.opacity : 1) * 100) / 100;
        // Use MeshBasicMaterial for reliable visibility regardless of lighting conditions
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(params.color || '#cccccc'),
            side: THREE.DoubleSide,
            opacity: opacity,
            transparent: opacity < 1,
            depthWrite: opacity >= 1,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = 'Visual_Fill';
        mesh.userData.isGeneratedVisual = true;
        mesh.frustumCulled = false;

        return mesh;
    }

    private sanitizeObjects() {
        const LIMIT = 50000;
        this.objects.forEach(obj => {
            // FIX: Force scale reset to prevent distortion (Oval issue)
            if (obj.scale.x !== 1 || obj.scale.y !== 1 || obj.scale.z !== 1) {
                obj.scale.set(1, 1, 1);
                obj.updateMatrixWorld();
            }

            let corrupted = false;
            if (!Number.isFinite(obj.position.x) || Math.abs(obj.position.x) > LIMIT) { obj.position.x = 0; corrupted = true; }
            if (!Number.isFinite(obj.position.y) || Math.abs(obj.position.y) > LIMIT) { obj.position.y = 0; corrupted = true; }
            if (!Number.isFinite(obj.position.z) || Math.abs(obj.position.z) > LIMIT) { obj.position.z = 0; corrupted = true; }
            
            if (corrupted) {
                console.warn(`ObjectManager: Rescued corrupted object "${obj.name}" from extreme coordinates.`);
                obj.updateMatrixWorld();
            }
        });
    }

    public selectObject(object: THREE.Object3D | null, multi: boolean = false) {
        if (!multi) {
            // Deselect all
            this.selectedObjects.forEach(obj => {
                this.setObjectHelperVisibility(obj, false);
                this.setAnchorColor(obj, 0xCCCCCC); // Light Gray when unselected
            });
            this.selectedObjects.clear();
        }

        if (object) {
            if (multi && this.selectedObjects.has(object)) {
                // Toggle off
                this.selectedObjects.delete(object);
                this.setObjectHelperVisibility(object, false);
                this.setAnchorColor(object, 0xCCCCCC);
            } else {
                // Select
                this.selectedObjects.add(object);
                this.setObjectHelperVisibility(object, true);
                this.setAnchorColor(object, 0xff0000); // Red for selected
            }
        }

        this.eventBus.emit('selection-changed', Array.from(this.selectedObjects));
    }

    public deselectAll() {
        this.objects.forEach(obj => {
            this.setObjectHelperVisibility(obj, false);
            this.setAnchorColor(obj, 0xCCCCCC);
        });
        this.selectedObjects.clear();
        this.eventBus.emit('selection-changed', []);
    }

    private setObjectHelperVisibility(object: THREE.Object3D, visible: boolean) {
        object.traverse((child) => {
            if (child.userData.isControlPoint || child.userData.isHelperLine) {
                child.visible = visible;
            } else if (child.userData.isAnchor) {
                if (child.userData.isMainAnchor) {
                    child.visible = true; // Main anchor always visible
                } else {
                    // Sub-anchors (Nodes) follow selection visibility
                    child.visible = visible; 
                }
            }
        });
    }

    private setAnchorColor(parent: THREE.Object3D, color: number) {
        const anchor = parent.children.find(c => c.userData.isAnchor && c.userData.isMainAnchor);
        if (anchor) {
            // Check for SpriteMaterial (new) or MeshBasicMaterial (legacy/fallback)
            const mat = (anchor as any).material;
            if (mat && mat.color) {
                mat.color.setHex(color);
            }
        }
    }

    public getSelectedObjects(): THREE.Object3D[] {
        return Array.from(this.selectedObjects);
    }

    public getObjects(): THREE.Object3D[] {
        return this.objects;
    }

    addObject(object: THREE.Object3D, select: boolean = true) {
        if (!object.name || object.name.startsWith('Object') || object.name.startsWith('Circle') || object.name.startsWith('Square') || object.name.startsWith('Line')) {
             const type = object.userData.type;
             let prefix = 'Objekt';
             if (type === 'line') prefix = 'Linie';
             else if (type === 'square') prefix = 'Rechteck';
             else if (type === 'circle') prefix = 'Kreis';
             else if (type === 'background_image') prefix = 'Bild';
             else if (type === 'bezier_path') prefix = object.userData.isClosed ? 'Form' : 'Pfad';
             
             // Count existing objects of this type to determine number
             const count = this.objects.filter(o => o.userData.type === type).length + 1;
             object.name = `${prefix} ${count}`;
        }
        // Ensure materialParams is always initialized so the fill mesh can be generated immediately
        if (!object.userData.materialParams && object.userData.type !== 'background_image') {
            object.userData.materialParams = {
                color: '#cccccc',
                wireframe: false,
                roughness: 0.5,
                metalness: 0.1,
                flatShading: false,
                opacity: 1
            };
        }
        this.scene.add(object);
        this.objects.push(object);
        if (select) {
            this.selectObject(object); // Auto-select new object (single)
        }
        this.eventBus.emit('object-added', object);
    }

    removeObject(object: THREE.Object3D) {
        if (!object) return;

        // Tiefenreinigung: Alle Kinder (auch versteckte weiße Meshes) zerstören
        object.traverse((child: any) => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach((m: any) => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });

        this.scene.remove(object);
        
        // Aus internen Listen löschen
        const index = this.objects.indexOf(object);
        if (index > -1) {
            this.objects.splice(index, 1);
        }
        this.selectedObjects.delete(object);

        console.log(`ObjectManager: Object "${object.name}" and its visuals permanently removed.`);
        this.eventBus.emit('object-removed', object);
    }

    clearAll() {
        // Clear all objects from scene and internal tracking
        this.objects.forEach(obj => {
            this.scene.remove(obj);
            // Dispose of geometry and materials to free up memory
            obj.traverse((child: any) => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((material: any) => material.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
            });
        });
        this.objects = [];
        this.selectedObjects.clear();
        this.eventBus.emit('selection-changed', []); // Notify selection is cleared
        this.eventBus.emit('objects-cleared', null); // Notify all objects are cleared
    }
}
