import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { MeshConverter } from '../utils/MeshConverter';

export class ModifierManager {
    private eventBus: EventBus;

    constructor(eventBus: EventBus) {
        this.eventBus = eventBus;
        this.eventBus.on('update-object-geometry', (obj: THREE.Object3D) => this.applyModifiers(obj));
        this.eventBus.on('object-added', (obj: THREE.Object3D) => {
            setTimeout(() => this.applyModifiers(obj), 10);
        });
        
        this.eventBus.on('convert-to-mesh', (obj: THREE.Object3D) => {
            this.addModifier(obj, 'mesh_convert');
        });
    }

    public addModifier(object: THREE.Object3D, type: string) {
        if (!object.userData.modifiers) object.userData.modifiers = [];
        
        if (object.userData.modifiers.find((m: any) => m.type === type)) return;

        let params = {};
        if (type === 'extrude') params = { height: 50 };
        else if (type === 'lathe') params = { segments: 32, phiStart: 0, phiLength: Math.PI * 2 };
        else if (type === 'face_delete') params = { faces: [] };
        
        object.userData.modifiers.push({ type, name: this.getModifierName(type), params, active: true });
        this.applyModifiers(object);
        this.eventBus.emit('modifier-changed', object);
    }

    private getModifierName(type: string): string {
        switch (type) {
            case 'extrude': return 'Extrudieren';
            case 'lathe': return 'Rotation';
            case 'mesh_convert': return 'In Mesh umwandeln';
            case 'face_delete': return 'Flächen entfernen';
            default: return 'Unbekannter Modifikator';
        }
    }

    public updateModifierParam(object: THREE.Object3D, index: number, key: string, value: any) {
        if (object.userData.modifiers?.[index]) {
            object.userData.modifiers[index].params[key] = value;
            this.applyModifiers(object);
            this.eventBus.emit('modifier-param-changed', object);
        }
    }

    public removeModifier(object: THREE.Object3D, index: number) {
        if (object.userData.modifiers && object.userData.modifiers[index]) {
            object.userData.modifiers.splice(index, 1);
            this.applyModifiers(object);
            this.eventBus.emit('modifier-changed', object);
        }
    }

        private applyModifiers(object: THREE.Object3D) {
            this.cleanup(object);
            
            const modifiers = object.userData.modifiers || [];
            const extrudeMod = modifiers.find((m: any) => m.type === 'extrude' && m.active);
            const latheMod = modifiers.find((m: any) => m.type === 'lathe' && m.active);
            let meshMod = modifiers.find((m: any) => m.type === 'mesh_convert' && m.active);
    
            // Update 2D Shape color
            const matParams = object.userData.materialParams;
            if (matParams && matParams.color) {
                const color = new THREE.Color(matParams.color);
                object.children.forEach(c => {
                    if (c.userData.type === 'bezier_line') {
                        const curveMesh = c.children.find(cc => cc.userData.isCurve) as THREE.Line;
                        if (curveMesh && curveMesh.material) {
                            (curveMesh.material as THREE.LineBasicMaterial).color.copy(color);
                        }
                    }
                });
            }
    
            // Boolean results are static unless they have modifiers added manually afterwards
            if (object.userData.type === 'boolean_result' && modifiers.length === 0) return;
    
            // This function will contain the main logic for creating a mesh
            const createMesh = (source: THREE.Object3D) => {
                const converted = MeshConverter.convert(source);
                if (converted) {
                    // Now that we have a converted mesh, check for face deletion
                    const faceDeleteMod = modifiers.find((m: any) => m.type === 'face_delete' && m.active);
                    if (faceDeleteMod && (faceDeleteMod.params.faces as THREE.Vector3[]).length > 0) {
                        const geo = (converted as THREE.Mesh).geometry;
                        const facesToDeleteIndices = new Set<number>();
                        const storedCentroids = faceDeleteMod.params.faces as THREE.Vector3[];
    
                        if (geo.index) {
                            // Find face indices matching stored centroids
                            for (let i = 0; i < geo.index.count / 3; i++) {
                                const currentFaceCentroid = ModifierManager._getFaceCentroid(geo, i);
                                if (currentFaceCentroid) {
                                    for (const storedCentroid of storedCentroids) {
                                        if (storedCentroid.distanceTo(currentFaceCentroid) < 0.01) { // Tolerance for centroid comparison
                                            facesToDeleteIndices.add(i);
                                            break;
                                        }
                                    }
                                }
                            }
    
                            const newIndices = [];
                            for (let i = 0; i < geo.index.count; i += 3) {
                                const faceIndex = i / 3;
                                if (!facesToDeleteIndices.has(faceIndex)) {
                                    newIndices.push(geo.index.getX(i), geo.index.getY(i), geo.index.getZ(i));
                                }
                            }
                            const newGeo = new THREE.BufferGeometry();
                            newGeo.setAttribute('position', geo.attributes.position);
                            if (geo.attributes.normal) newGeo.setAttribute('normal', geo.attributes.normal);
                            if (geo.attributes.uv) newGeo.setAttribute('uv', geo.attributes.uv);
                            newGeo.setIndex(newIndices);
                            (converted as THREE.Mesh).geometry.dispose();
                            (converted as THREE.Mesh).geometry = newGeo;
                            
                            // Force update
                            (converted as THREE.Mesh).geometry.attributes.position.needsUpdate = true;
                            if ((converted as THREE.Mesh).geometry.attributes.normal) (converted as THREE.Mesh).geometry.attributes.normal.needsUpdate = true;
                            if ((converted as THREE.Mesh).geometry.attributes.uv) (converted as THREE.Mesh).geometry.attributes.uv.needsUpdate = true;
                            if ((converted as THREE.Mesh).geometry.index) { (converted as THREE.Mesh).geometry.index!.needsUpdate = true; } // Use non-null assertion
                            ((converted as THREE.Mesh).material as THREE.Material).needsUpdate = true; // Material needs update
                        }
                    }
                }
                return converted;
            };
    
            if (extrudeMod) {
                const shape = this.getShape(object);
                if(shape){
                    const g = new THREE.ExtrudeGeometry(shape, { depth: extrudeMod.params.height, bevelEnabled: false });
                    g.rotateX(-Math.PI / 2);
                    
                    const tempGroup = new THREE.Group();
                    // Pass material params to temp group so MeshConverter picks them up
                    tempGroup.userData.materialParams = object.userData.materialParams;
                    
                    const baseMesh = new THREE.Mesh(g); // mergeVertices removed to avoid vertex sharing
                    tempGroup.add(baseMesh);
    
                    const finalMesh = createMesh(tempGroup) as THREE.Mesh;
                     if (finalMesh) {
                        this.setOriginalVisibility(object, false);
                        finalMesh.userData.isGeneratedVisual = true;
                        object.add(finalMesh);
    
                        // Add Edges Overlay for "Solid + Wire" look
                        if (matParams && !matParams.wireframe) {
                            const edges = new THREE.EdgesGeometry(finalMesh.geometry);
                            const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 }));
                            line.userData.isGeneratedVisual = true;
                            object.add(line);
                        }
    
                        object.userData.openEdgeCount = finalMesh.userData.openEdgeCount; // Loch-Anzahl übertragen
                    }
                }
    
                    } else if (latheMod) {
    
                        const points = this.getPointsForLathe(object);
    
                        if (points.length > 1) {
    
                            const g = new THREE.LatheGeometry(points, latheMod.params.segments, latheMod.params.phiStart, latheMod.params.phiLength);
    
                            
    
                            const isWireframe = matParams?.wireframe === true;
    
                            const latheOpacity = matParams?.opacity !== undefined ? matParams.opacity : 1;
    
                            const material = new THREE.MeshStandardMaterial({
    
                                color: new THREE.Color(matParams?.color || 0xcccccc),
    
                                side: THREE.DoubleSide,
    
                                roughness: matParams?.roughness || 0.5,
    
                                metalness: matParams?.metalness || 0.1,
    
                                wireframe: isWireframe,
    
                                opacity: latheOpacity,
    
                                transparent: latheOpacity < 1
    
                            });
    
            
    
                            const finalMesh = new THREE.Mesh(g, material);
    
                            finalMesh.userData.isGeneratedVisual = true;
    
                            this.setOriginalVisibility(object, false);
    
                            object.add(finalMesh);
    
            
    
                            // Add Edges Overlay only for "Solid" look (NOT in wireframe mode)
    
                            if (matParams && !matParams.wireframe) {
    
                                const edges = new THREE.EdgesGeometry(finalMesh.geometry);
    
                                const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 }));
    
                                line.userData.isGeneratedVisual = true;
    
                                object.add(line);
    
                            }
    
                            
    
                            object.userData.openEdgeCount = MeshConverter.countHoles(g);
    
                        }
    
                    } else if (meshMod) {            const finalMesh = createMesh(object) as THREE.Mesh;
            if (finalMesh) {
                this.setOriginalVisibility(object, false);
                finalMesh.userData.isGeneratedVisual = true;
                object.add(finalMesh);

                // Add Edges Overlay for "Solid + Wire" look
                if (matParams && !matParams.wireframe) {
                    const edges = new THREE.EdgesGeometry(finalMesh.geometry);
                    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3 }));
                    line.userData.isGeneratedVisual = true;
                    object.add(line);
                }

                object.userData.openEdgeCount = finalMesh.userData.openEdgeCount; // Loch-Anzahl übertragen
            }
        } else {
            const faceDeleteMod = modifiers.find((m: any) => m.type === 'face_delete' && m.active);
            if (faceDeleteMod) {
                const existingMesh = object.children.find(c => c.userData.isMesh && !c.userData.isGeneratedVisual) as THREE.Mesh;
                if(existingMesh) {
                    const newGeo = existingMesh.geometry.clone();
                    const facesToDeleteIndices = new Set<number>();
                    const storedCentroids = faceDeleteMod.params.faces as THREE.Vector3[];

                     if (newGeo.index) {
                        // Find face indices matching stored centroids
                        for (let i = 0; i < newGeo.index.count / 3; i++) {
                            const currentFaceCentroid = ModifierManager._getFaceCentroid(newGeo, i);
                            if (currentFaceCentroid) {
                                for (const storedCentroid of storedCentroids) {
                                    if (storedCentroid.distanceTo(currentFaceCentroid) < 0.01) {
                                        facesToDeleteIndices.add(i);
                                        break;
                                    }
                                }
                            }
                        }

                        const newIndices = [];
                        for (let i = 0; i < newGeo.index.count; i += 3) {
                            const faceIndex = i / 3;
                            if (!facesToDeleteIndices.has(faceIndex)) {
                                newIndices.push(newGeo.index.getX(i), newGeo.index.getY(i), newGeo.index.getZ(i));
                            }
                        }
                        newGeo.setIndex(newIndices);
                        newGeo.computeVertexNormals();
                        
                        // Force update
                        newGeo.attributes.position.needsUpdate = true;
                        if (newGeo.attributes.normal) newGeo.attributes.normal.needsUpdate = true;
                        if (newGeo.attributes.uv) newGeo.attributes.uv.needsUpdate = true;
                        if (newGeo.index) { newGeo.index!.needsUpdate = true; } 
                        (existingMesh.material as THREE.Material).needsUpdate = true; 
                        
                        const newMesh = new THREE.Mesh(newGeo, existingMesh.material);
                        newMesh.userData.isGeneratedVisual = true;
                        this.setOriginalVisibility(object, false);
                        object.add(newMesh);
                        
                        // Loch-Analyse auch hier durchführen
                        object.userData.openEdgeCount = MeshConverter.countHoles(newGeo);
                    }
                } else {
                     this.setOriginalVisibility(object, true);
                     object.userData.openEdgeCount = 0;
                }
            } else {
                this.setOriginalVisibility(object, true);
                object.userData.openEdgeCount = 0;

                // --- 2D SOLID FILL LOGIC ---
                // If not extruded but "Solid" is checked, show a filled 2D shape
                if (matParams && !matParams.wireframe) {
                    const shape = this.getShape(object);
                    if (shape) {
                        const geo = new THREE.ShapeGeometry(shape);
                        geo.rotateX(-Math.PI / 2);
                        
                        const material = new THREE.MeshStandardMaterial({
                            color: new THREE.Color(matParams.color || 0xcccccc),
                            side: THREE.DoubleSide,
                            roughness: matParams.roughness || 0.5,
                            metalness: matParams.metalness || 0.1,
                            polygonOffset: true,
                            polygonOffsetFactor: 1,
                            polygonOffsetUnits: 1
                        });
                        
                        const fillMesh = new THREE.Mesh(geo, material);
                        fillMesh.userData.isGeneratedVisual = true;
                        object.add(fillMesh);
                    }
                }
            }
        }
        object.updateMatrixWorld(true);
    }

    private getPointsForLathe(obj: THREE.Object3D): THREE.Vector2[] {
        const rawSegments = obj.children.filter(c => c.userData.type === 'bezier_line');
        if (rawSegments.length === 0) return [];

        const points: THREE.Vector2[] = [];
        
        // Da wir LatheGeometry um die Y-Achse machen:
        // Radius = X
        // Höhe = Y
        
        rawSegments.forEach(seg => {
            const curveChild = seg.children.find(c => c.userData.isCurve);
            if (!curveChild) return;
            
            const curve = (curveChild.userData as any).curve;
            if (curve) {
                const isStraight = curve.type === 'LineCurve3'; 
                const pts = curve.getPoints(isStraight ? 1 : 20);
                pts.forEach((p: THREE.Vector3) => {
                    points.push(new THREE.Vector2(p.x, p.y));
                });
            }
        });

        return points;
    }

    private getShape(obj: THREE.Object3D): THREE.Shape | null {
        const rawSegments = obj.children.filter(c => c.userData.type === 'bezier_line');
        if (rawSegments.length === 0) return null;

        const segmentsPool = [...rawSegments];
        const loops: THREE.Path[] = [];

        // Extract loops
        while (segmentsPool.length > 0) {
            const currentLoopSegments: THREE.Object3D[] = [];
            let currentSeg = segmentsPool.shift();
            if (!currentSeg) break;
            currentLoopSegments.push(currentSeg);

            // Chain until closed or stuck
            while (true) {
                const lastSeg = currentLoopSegments[currentLoopSegments.length - 1];
                const lastEndNodeId = lastSeg.userData.nodes?.end;
                
                // Check if closed (connected back to start of this loop)
                if (currentLoopSegments.length > 1 && lastEndNodeId === currentLoopSegments[0].userData.nodes?.start) {
                    break; // Closed loop found
                }
                
                // Sanity check for single segment loop (unlikely but possible)
                if (currentLoopSegments.length === 1 && lastEndNodeId === currentLoopSegments[0].userData.nodes?.start) {
                     break;
                }

                if (!lastEndNodeId) break; 

                const nextIndex = segmentsPool.findIndex(s => s.userData.nodes?.start === lastEndNodeId);
                if (nextIndex !== -1) {
                    currentLoopSegments.push(segmentsPool[nextIndex]);
                    segmentsPool.splice(nextIndex, 1);
                } else {
                    // End of chain (broken loop or open path)
                    break;
                }
            }
            
            // Build Path
            const path = new THREE.Path();
            let first = true;
            
            currentLoopSegments.forEach(seg => {
                const curveChild = seg.children.find(c => c.userData.isCurve);
                if (!curveChild) return;
                
                const curve = (curveChild.userData as any).curve;
                if (curve) {
                    const isStraight = curve.type === 'LineCurve3'; 
                    const pts = curve.getPoints(isStraight ? 1 : 20);
                    
                    if (first) { 
                        path.moveTo(pts[0].x, -pts[0].z); 
                        first = false; 
                    }
                    for (let i = 1; i < pts.length; i++) {
                        path.lineTo(pts[i].x, -pts[i].z);
                    }
                }
            });
            path.closePath();
            loops.push(path);
        }

        if (loops.length === 0) return null;

        // Sort by Area (approximated by Bounding Box) Descending
        loops.sort((a, b) => {
            const getArea = (p: THREE.Path) => {
               const pts = p.getPoints();
               if (pts.length === 0) return 0;
               let minX=Infinity, maxX=-Infinity, minY=Infinity, maxY=-Infinity;
               pts.forEach(v => {
                   if(v.x < minX) minX = v.x;
                   if(v.x > maxX) maxX = v.x;
                   if(v.y < minY) minY = v.y;
                   if(v.y > maxY) maxY = v.y;
               });
               return (maxX-minX) * (maxY-minY);
            };
            return getArea(b) - getArea(a);
        });

        // Main Shape = Largest Loop
        const shape = new THREE.Shape(loops[0].getPoints());
        
        // Holes = All other loops
        for(let i=1; i<loops.length; i++) {
            shape.holes.push(new THREE.Path(loops[i].getPoints()));
        }

        return shape;
    }

    private cleanup(obj: THREE.Object3D) {
        for (let i = obj.children.length - 1; i >= 0; i--) {
            if (obj.children[i].userData.isGeneratedVisual) {
                const mesh = obj.children[i] as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) {
                    if (Array.isArray(mesh.material)) mesh.material.forEach(m => m.dispose());
                    else mesh.material.dispose();
                }
                obj.remove(obj.children[i]);
            }
        }
    }

    private setOriginalVisibility(obj: THREE.Object3D, vis: boolean) {
        obj.traverse(c => { 
            if (c !== obj && !c.userData.isGeneratedVisual) {
                // Steuerelemente (Handles) NIEMALS durch Modifikatoren verstecken
                if (c.userData.isNode || c.userData.isControlPoint || c.userData.isHelperLine || c.userData.isAnchor) {
                    return;
                }

                // Nur die eigentliche visuelle Repräsentation (die 2D-Linie/das Mesh) verstecken
                if (c.userData.generated || c.userData.isCurve || c.userData.isOffset) {
                    c.visible = vis;
                }

                // Gruppen (wie bezier_line) müssen sichtbar bleiben, damit ihre Kinder (Handles) sichtbar sein können
                if (c.userData.type === 'bezier_line') {
                    c.visible = true; 
                }
            }
        });
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



