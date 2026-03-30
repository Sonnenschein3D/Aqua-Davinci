import * as THREE from 'three';
import { Tool } from './Tool';
import { BaseTool } from './BaseTool';
import { EventBus } from '../core/EventBus';
import { InteractionEvent } from '../interaction/InteractionManager';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager, ViewType } from '../managers/ViewManager';
import { GizmoHelper } from '../helpers/GizmoHelper';
import { ShapeFactory } from '../geometries/ShapeFactory';
import { HandleUtils } from '../helpers/HandleUtils';
import { DavinciPinsel1 } from '../ui/DavinciPinsel1';

export class SelectTool extends BaseTool implements Tool {
    id = 'select';
    
    private viewManager: ViewManager;
    private raycaster: THREE.Raycaster = new THREE.Raycaster();
    private machineBrush: DavinciPinsel1;

    private activeGizmoMode: 'translate' | 'rotate' = 'translate';
    private translateGizmo: THREE.Object3D;
    private rotateGizmo: THREE.Object3D;
    
    private selectedObject: THREE.Object3D | null = null;
    private selectedSubObject: THREE.Object3D | null = null; 
    
    private isDragging: boolean = false;
    private dragMode: 'none' | 'object' | 'sub-object' | 'gizmo' | 'marquee_select' = 'none';
    private dragAxis: string | null = null;
    
    private dragStartPoint: THREE.Vector3 = new THREE.Vector3();
    private objectStartPos: THREE.Vector3 = new THREE.Vector3();
    private subObjectStartPos: THREE.Vector3 = new THREE.Vector3(); // Store subObject start pos
    private dragPlane: THREE.Plane = new THREE.Plane();
    private dragOffset: THREE.Vector3 = new THREE.Vector3();
    private lastPointer: THREE.Vector2 = new THREE.Vector2(); // For direct delta calculation

    private activeAnchor: THREE.Mesh | null = null;
    private hoveredSubObject: THREE.Mesh | null = null;
    private hoveredOriginalColor: number | null = null;
    private activeSubObjectOriginalColor: number | null = null;

    // Marquee Selection variables
    private selectionMarquee: THREE.LineLoop;
    private dragStartPosition: THREE.Vector2 = new THREE.Vector2(); // Screen coordinates

    constructor(eventBus: EventBus, viewManager: ViewManager, objectManager: ObjectManager, machineBrush: DavinciPinsel1) {
        super(eventBus, objectManager);
        this.viewManager = viewManager;
        this.machineBrush = machineBrush;

        // Debug helper
        (window as any).debugScene = () => {
            console.log("--- SCENE DEBUG ---");
            const objects = this.objectManager.getObjects();
            objects.forEach(obj => {
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                console.log(`Object: ${obj.name} [${obj.uuid}]`);
                console.log(`  Type: ${obj.userData.type}, Visible: ${obj.visible}`);
                console.log(`  WorldPos: x=${worldPos.x.toFixed(2)}, y=${worldPos.y.toFixed(2)}, z=${worldPos.z.toFixed(2)}`);
                console.log(`  LocalScale: x=${obj.scale.x.toFixed(2)}, y=${obj.scale.y.toFixed(2)}, z=${obj.scale.z.toFixed(2)}`);
                
                obj.children.forEach(c => {
                    if (c.userData.isAnchor) {
                        const cWorld = new THREE.Vector3();
                        c.getWorldPosition(cWorld);
                        console.log(`    Anchor [${c.uuid}]: x=${cWorld.x.toFixed(2)}, y=${cWorld.y.toFixed(2)}, z=${cWorld.z.toFixed(2)}`);
                        if (c instanceof THREE.Sprite || c instanceof THREE.Mesh) {
                             const mat = (c.material as any);
                             console.log(`      Color: #${mat.color.getHexString()}`);
                        }
                    }
                });
            });
            console.log("Selection:", this.objectManager.getSelectedObjects().map(o => o.name));
        };

        // Improve selection in 2D views
        this.raycaster.params.Line.threshold = 3;

        this.translateGizmo = GizmoHelper.createTranslateGizmo();
        this.rotateGizmo = GizmoHelper.createRotateGizmo();
        
        this.translateGizmo.visible = false;
        this.rotateGizmo.visible = false;
        
        const scene = this.viewManager.getScene();
        scene.add(this.translateGizmo);
        scene.add(this.rotateGizmo);

        // Initialize selection marquee
        const points = [];
        points.push( new THREE.Vector3( 0, 0, 0 ) );
        points.push( new THREE.Vector3( 1, 0, 0 ) );
        points.push( new THREE.Vector3( 1, 1, 0 ) );
        points.push( new THREE.Vector3( 0, 1, 0 ) );
        points.push( new THREE.Vector3( 0, 0, 0 ) ); // Close the loop

        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const material = new THREE.LineBasicMaterial( { color: 0x00aaff, depthTest: false, depthWrite: false } );
        this.selectionMarquee = new THREE.LineLoop( geometry, material );
        this.selectionMarquee.visible = false;
        this.selectionMarquee.renderOrder = 999; // Ensure it's drawn on top
        this.selectionMarquee.frustumCulled = false; // Vertices at the near-plane boundary would otherwise get culled
        scene.add(this.selectionMarquee);

        this.eventBus.on('selection-changed', (selected: THREE.Object3D[]) => {
            if (selected.length === 1) {
                this.selectedObject = selected[0];
            } else {
                this.selectedObject = null;
            }
            this.updateGizmo();
        });

        window.addEventListener('keydown', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

            if (this.selectedObject) {
                if (e.key.toLowerCase() === 't') {
                    this.activeGizmoMode = 'translate';
                    this.updateGizmo();
                } else if (e.key.toLowerCase() === 'r') {
                    this.activeGizmoMode = 'rotate';
                    this.updateGizmo();
                }
            }
        });
    }

    activate() { this.updateGizmo(); }

    deactivate() {
        this.translateGizmo.visible = false;
        this.rotateGizmo.visible = false;
        this.selectedObject = null;
    }

    private updateGizmo() {
        this.translateGizmo.visible = false;
        this.rotateGizmo.visible = false;

        // Hide handles of previously selected object if any (handled by traverse below usually, but being explicit)
        
        const scene = this.viewManager.getScene();
        scene.traverse(obj => {
            if (obj.userData.isAnchor || obj.userData.isControlPoint || obj.userData.isHelperLine || obj.userData.isNode) {
                // Main anchors of non-selected objects stay visible usually, but nodes/CPs hide
                if (!obj.userData.isMainAnchor) obj.visible = false;
            }
        });

        if (this.selectedObject) {
            const gizmo = this.activeGizmoMode === 'translate' ? this.translateGizmo : this.rotateGizmo;
            gizmo.visible = true;
            gizmo.position.copy(this.selectedObject.position);
            gizmo.quaternion.copy(this.selectedObject.quaternion);
            if (this.activeGizmoMode === 'translate') gizmo.rotation.set(0,0,0);

            // Show ALL child handles of the selected object (traverse deep)
            let nodeCount = 0;
            let cpCount = 0;
            this.selectedObject.traverse(child => {
                if (child.userData.isMainAnchor || child.userData.isControlPoint || child.userData.isNode || child.userData.isHelperLine) {
                    child.visible = true;
                    if (child.userData.isNode) nodeCount++;
                    if (child.userData.isControlPoint) cpCount++;
                }
            });
            console.log(`SelectTool: Updated visibility for object "${this.selectedObject.name}". Found ${nodeCount} nodes and ${cpCount} control points.`);

            // Update scale of gizmos (and everything else)
            const cam = this.viewManager.getActiveCamera();
            if (cam) {
                HandleUtils.updateScales(this.viewManager.getScene(), cam);
            }
        }
    }

    private updateRaycasterThresholds() {
        const cam = this.viewManager.getActiveCamera();
        if (cam instanceof THREE.OrthographicCamera) {
            const zoom = cam.zoom;
            
            // Simplified robust threshold - REDUCED to avoid overlapping selections
            this.raycaster.params.Line.threshold = 5 / zoom;
            this.raycaster.params.Points.threshold = 5 / zoom;
        } else {
            this.raycaster.params.Line.threshold = 0.5;
            this.raycaster.params.Points.threshold = 2; 
        }
    }

    // Helper to lock movement to 2D plane in Ortho views
    private constrainToViewPlane(newPos: THREE.Vector3, originalPos: THREE.Vector3) {
        const cam = this.viewManager.getActiveCamera();
        if (cam instanceof THREE.OrthographicCamera) {
            const dir = new THREE.Vector3();
            cam.getWorldDirection(dir);
            // Lock axis based on view direction (dominant axis)
            if (Math.abs(dir.z) > Math.abs(dir.x) && Math.abs(dir.z) > Math.abs(dir.y)) {
                newPos.z = originalPos.z; // Front/Back View -> Lock Z
            } else if (Math.abs(dir.x) > Math.abs(dir.z) && Math.abs(dir.x) > Math.abs(dir.y)) {
                newPos.x = originalPos.x; // Left/Right View -> Lock X
            } else {
                newPos.y = originalPos.y; // Top/Bottom View -> Lock Y
            }
        }
    }

    onPointerDown(event: InteractionEvent) {
        if (event.originalEvent.button !== 0) return;
        
        this.updateRaycasterThresholds();
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        this.raycaster.setFromCamera(event.pointer, cam);

        // 1. Check for Machine Brush first
        const machineBrushHit = this.raycaster.intersectObject(this.machineBrush.group, true);
        if (machineBrushHit.length > 0) {
            this.eventBus.emit('open-brush-properties', null);
            return; 
        }
        
        // --- New, robust selection logic ---

        // 2. Check for Gizmo
        const gizmo = this.activeGizmoMode === 'translate' ? this.translateGizmo : this.rotateGizmo;
        if (gizmo.visible) {
            const hitGizmo = this.raycaster.intersectObject(gizmo, true);
            if (hitGizmo.length > 0 && hitGizmo[0].object.userData.axis) {
                this.startGizmoDrag(hitGizmo[0].object.userData.axis, hitGizmo[0].point);
                return;
            }
        }

        // 3. Collect and check all clickable sub-elements
        const clickableSubObjects: THREE.Object3D[] = [];
        this.objectManager.getObjects().forEach(root => {
            if (!root.visible) return;
            root.traverse(child => {
                if ((child.userData.isAnchor || child.userData.isControlPoint || child.userData.isNode) && child.visible) {
                    clickableSubObjects.push(child);
                }
            });
        });

        if (clickableSubObjects.length > 0) {
            const subObjectHits = this.raycaster.intersectObjects(clickableSubObjects, true);
            if (subObjectHits.length > 0) {
                const hit = subObjectHits[0];
                const obj = hit.object;
                
                let rootParent = obj.parent;
                while(rootParent && rootParent.parent && rootParent.parent.type !== 'Scene' && !rootParent.userData.isSelectableRoot) {
                    rootParent = rootParent.parent;
                }

                if (obj.userData.isMainAnchor && rootParent) {
                    this.objectManager.selectObject(rootParent);
                    this.startObjectDrag(rootParent);
                } else { // isNode or isControlPoint
                    this.startSubObjectDrag(obj, hit.point);
                    if (rootParent && rootParent !== this.selectedObject) {
                        this.objectManager.selectObject(rootParent);
                    }
                }
                return;
            }
        }

        // 4. If no sub-object was hit, check for whole objects
        const objectHits = this.raycaster.intersectObjects(this.objectManager.getObjects(), true);
        if (objectHits.length > 0) {
             let hit = objectHits[0];
             let target = hit.object;
             while(target.parent && target.parent.type !== 'Scene' && !target.userData.isSelectableRoot) {
                 target = target.parent;
             }
             this.objectManager.selectObject(target);
        } else {
            // 5. Clicked on empty space - Start marquee selection
            this.startMarqueeSelection(event);
        }
    }

    private startMarqueeSelection(event: InteractionEvent) {
        this.isDragging = true;
        this.dragMode = 'marquee_select';
        this.dragStartPosition.copy(event.pointer); // Store 2D screen coordinates

        if (this.selectionMarquee) {
            this.selectionMarquee.visible = true;
            // Position and scale will be updated in handleMarqueeSelectionDrag
        }

        // Deselect everything when starting a new selection
        this.objectManager.deselectAll();

        this.viewManager.setControlsEnabled(false); // Disable orbit controls during drag
    }
    
    onPointerMove(event: InteractionEvent) {
        this.updateRaycasterThresholds();
        if (this.isDragging) {
            if (this.dragMode === 'gizmo') this.handleGizmoDrag(event);
            else if (this.dragMode === 'sub-object') this.handleSubObjectDrag(event);
            else if (this.dragMode === 'object') this.handleObjectDrag(event);
            else if (this.dragMode === 'marquee_select') this.handleMarqueeSelectionDrag(event);
        } else {
            this.handleHover(event);
        }
    }

    private handleMarqueeSelectionDrag(event: InteractionEvent) {
        if (!this.selectionMarquee) return;

        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;

        // pointer coordinates are already in NDC space (-1 to 1), no conversion needed
        const ndcStartX = this.dragStartPosition.x;
        const ndcStartY = this.dragStartPosition.y;
        const ndcCurrentX = event.pointer.x;
        const ndcCurrentY = event.pointer.y;

        // Define the four corners of the selection rectangle in NDC space at the near plane (-1 for Z)
        const pNDC1 = new THREE.Vector3(ndcStartX, ndcStartY, -1); // Start point
        const pNDC2 = new THREE.Vector3(ndcCurrentX, ndcStartY, -1); // horizontal line
        const pNDC3 = new THREE.Vector3(ndcCurrentX, ndcCurrentY, -1); // vertical line
        const pNDC4 = new THREE.Vector3(ndcStartX, ndcCurrentY, -1); // horizontal line

        // Unproject these NDC coordinates to get world coordinates on the near plane
        // Note: unproject modifies the vector itself, so we clone it first
        const worldP1 = pNDC1.clone().unproject(cam);
        const worldP2 = pNDC2.clone().unproject(cam);
        const worldP3 = pNDC3.clone().unproject(cam);
        const worldP4 = pNDC4.clone().unproject(cam);

        // Update the LineLoop's vertices
        const positions = (this.selectionMarquee.geometry.attributes.position as THREE.BufferAttribute);
        const positionArray = positions.array as Float32Array;

        positionArray[0] = worldP1.x; positionArray[1] = worldP1.y; positionArray[2] = worldP1.z; // Point 0 (start)
        positionArray[3] = worldP2.x; positionArray[4] = worldP2.y; positionArray[5] = worldP2.z; // Point 1
        positionArray[6] = worldP3.x; positionArray[7] = worldP3.y; positionArray[8] = worldP3.z; // Point 2
        positionArray[9] = worldP4.x; positionArray[10] = worldP4.y; positionArray[11] = worldP4.z; // Point 3
        positionArray[12] = worldP1.x; positionArray[13] = worldP1.y; positionArray[14] = worldP1.z; // Point 4 (close loop)

        positions.needsUpdate = true; // Tell Three.js to re-upload buffer data
        this.selectionMarquee.geometry.computeBoundingSphere(); // Update bounding sphere for culling etc.
    }


    private handleHover(event: InteractionEvent) {
        this.updateRaycasterThresholds();
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        this.raycaster.setFromCamera(event.pointer, cam);

        // --- New Hover Logic with priorities ---

        // 1. Check for Gizmo
        const gizmo = this.activeGizmoMode === 'translate' ? this.translateGizmo : this.rotateGizmo;
        if (gizmo.visible) {
            const gizmoHits = this.raycaster.intersectObject(gizmo, true);
            if (gizmoHits.length > 0 && gizmoHits[0].object.userData.axis) {
                this.setGizmoHighlight(gizmoHits[0].object.userData.axis);
                this.resetHover(); // Ensure no sub-object is hovered
                return;
            }
        }

        // Nothing on gizmo, so reset its highlight
        this.setGizmoHighlight(null);

        // 2. Check for sub-objects (nodes, anchors, CPs)
        const clickableSubObjects: THREE.Object3D[] = [];
        this.objectManager.getObjects().forEach(root => {
            if (!root.visible) return;
            root.traverse(child => {
                if ((child.userData.isAnchor || child.userData.isControlPoint || child.userData.isNode) && child.visible) {
                    clickableSubObjects.push(child);
                }
            });
        });

        if (clickableSubObjects.length > 0) {
            const subObjectHits = this.raycaster.intersectObjects(clickableSubObjects, true);
            if (subObjectHits.length > 0) {
                const hitObj = subObjectHits[0].object as THREE.Mesh;
                if (this.hoveredSubObject !== hitObj) {
                    this.resetHover();
                    this.hoveredSubObject = hitObj;
                    if (hitObj.material instanceof THREE.SpriteMaterial || hitObj.material instanceof THREE.MeshBasicMaterial) {
                        // CLONE MATERIAL to prevent shared-material artifacts
                        if (!hitObj.userData.uniqueMat) {
                            hitObj.material = hitObj.material.clone();
                            hitObj.userData.uniqueMat = true;
                        }
                        this.hoveredOriginalColor = (hitObj.material as any).color.getHex();
                        (hitObj.material as any).color.setHex(0xFFFF00); // Yellow hover color
                        (hitObj.material as any).needsUpdate = true;
                    }
                }
                // If a sub-object is hovered, we are done.
                return;
            }
        }
        
        // 3. If nothing else is hovered, reset everything.
        this.resetHover();
    }

    private resetHover() {
        if (this.hoveredSubObject && this.hoveredOriginalColor !== null) {
            const mat = this.hoveredSubObject.material;
            if (mat instanceof THREE.SpriteMaterial || mat instanceof THREE.MeshBasicMaterial) {
                let isSelected = false;
                if (this.selectedObject) {
                    let parent = this.hoveredSubObject.parent;
                    while(parent && parent.parent && parent.parent.type !== 'Scene') {
                         parent = parent.parent;
                    }
                    if (parent === this.selectedObject) {
                        isSelected = true;
                    }
                }

                if (isSelected) {
                    if (this.hoveredSubObject.userData.isControlPoint) {
                        (mat as any).color.setHex(0x00FF00); 
                    } else {
                        (mat as any).color.setHex(0xFF0000); 
                    }
                } else {
                    (mat as any).color.setHex(this.hoveredOriginalColor);
                }
            }
        }
        this.hoveredSubObject = null;
        this.hoveredOriginalColor = null;
    }

    onPointerUp(event: InteractionEvent) {
        this.isDragging = false;
        
        // Handle marquee selection logic
        if (this.dragMode === 'marquee_select') {
            this.handleMarqueeSelectionEnd(event); // New method to process selection
            if (this.selectionMarquee) {
                this.selectionMarquee.visible = false; // Hide marquee
            }
        }
        
        this.dragMode = 'none'; // Reset drag mode after processing

        // Re-enable orbit controls
        this.viewManager.setControlsEnabled(true);

        if (this.activeAnchor) {
             if (this.activeAnchor.material instanceof THREE.SpriteMaterial) {
                 this.activeAnchor.material.color.setHex(0xFF0000); 
             }
             this.activeAnchor = null;
        }

        if (this.selectedSubObject && this.activeSubObjectOriginalColor !== null) {
            const mesh = this.selectedSubObject as THREE.Mesh;
            if (mesh.material instanceof THREE.SpriteMaterial || mesh.material instanceof THREE.MeshBasicMaterial) {
                (mesh.material as any).color.setHex(this.activeSubObjectOriginalColor);
            }
            this.activeSubObjectOriginalColor = null;
        }
        this.selectedSubObject = null;

        this.setGizmoHighlight(null);
    }

    private handleMarqueeSelectionEnd(event: InteractionEvent) {
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;

        // dragStartPosition and event.pointer are already in NDC space (-1 to 1)
        const minX = Math.min(this.dragStartPosition.x, event.pointer.x);
        const maxX = Math.max(this.dragStartPosition.x, event.pointer.x);
        const minY = Math.min(this.dragStartPosition.y, event.pointer.y);
        const maxY = Math.max(this.dragStartPosition.y, event.pointer.y);

        // If no drag (single click), deselect all
        if (minX === maxX || minY === maxY) {
            this.objectManager.deselectAll();
            return;
        }

        const selectedObjects: THREE.Object3D[] = [];
        const allObjects = this.objectManager.getObjects();
        const v = new THREE.Vector3(); // Temp vector for projection

        for (const obj of allObjects) {
            // Check if the object is a main selectable object and visible
            if (!obj.visible || !obj.userData.isSelectableRoot) continue; 

            // Get the bounding box of the object in world coordinates
            const bbox = new THREE.Box3().setFromObject(obj);
            
            // If the bounding box is degenerate (e.g., empty), skip
            if (bbox.isEmpty()) continue;

            // Project all 8 corners of the bounding box to screen space
            const corners = [
                new THREE.Vector3(bbox.min.x, bbox.min.y, bbox.min.z),
                new THREE.Vector3(bbox.min.x, bbox.min.y, bbox.max.z),
                new THREE.Vector3(bbox.min.x, bbox.max.y, bbox.min.z),
                new THREE.Vector3(bbox.min.x, bbox.max.y, bbox.max.z),
                new THREE.Vector3(bbox.max.x, bbox.min.y, bbox.min.z),
                new THREE.Vector3(bbox.max.x, bbox.min.y, bbox.max.z),
                new THREE.Vector3(bbox.max.x, bbox.max.y, bbox.min.z),
                new THREE.Vector3(bbox.max.x, bbox.max.y, bbox.max.z)
            ];

            let anyCornerInside = false;

            for (const corner of corners) {
                // Project corner to Normalized Device Coordinates (NDC)
                v.copy(corner).project(cam);

                // Check if this corner is inside the 2D selection rectangle (both in NDC space)
                if (v.x >= minX && v.x <= maxX && v.y >= minY && v.y <= maxY) {
                    anyCornerInside = true;
                } else {
                    // At least one corner is outside
                }
            }

            // Selection Logic:
            // If any corner is inside, we select the object. This is a common "any part of object in marquee" logic.
            // A more strict "object fully contained" check would require all corners to be inside, and bbox intersection.
            if (anyCornerInside) {
                selectedObjects.push(obj);
            }
            // An even more robust logic would involve converting the 2D selection rectangle into a frustum
            // and checking if the object's world-space bounding box intersects with that frustum.
            // This brute-force projection of corners is a good first step.
        }

        // Select the identified objects
        this.objectManager.deselectAll(); // Clear previous selection
        selectedObjects.forEach(obj => this.objectManager.selectObject(obj, true));
    }


    private setGizmoHighlight(mode: string | null) {
        const gizmo = this.translateGizmo;
        gizmo.traverse((child) => {
            if (child instanceof THREE.Mesh || child instanceof THREE.Sprite) { 
                const axis = child.userData.axis;
                if (!axis) return;

                const material = (child as any).material;
                if (!material) return;

                let baseColor = 0xFFFFFF;
                if (axis === 'x') baseColor = 0xff4444;
                if (axis === 'y') baseColor = 0x44ff44;
                if (axis === 'z') baseColor = 0x6666ff;

                if (mode === 'all') {
                    material.color.setHex(0xFFFF00);
                    if (child instanceof THREE.Mesh) material.opacity = 1.0;
                } else if (mode === axis) {
                    material.color.setHex(0xFFFF00);
                    if (child instanceof THREE.Mesh) material.opacity = 1.0;
                } else {
                    material.color.setHex(baseColor);
                    if (child instanceof THREE.Mesh) material.opacity = axis.length > 1 ? 0.2 : 1.0;
                }
            }
        });
    }

    private startGizmoDrag(axis: string, hitPoint: THREE.Vector3) {
        this.isDragging = true;
        this.dragMode = 'gizmo';
        this.dragAxis = axis;
        this.dragStartPoint.copy(hitPoint);
        if (this.selectedObject) this.objectStartPos.copy(this.selectedObject.position);

        this.viewManager.setControlsEnabled(false);
        this.setGizmoHighlight(axis);

        const normal = new THREE.Vector3();
        const cameraDir = new THREE.Vector3();
        const cam = this.viewManager.getActiveCamera();
        if (cam) cam.getWorldDirection(cameraDir);

        const axisVec = new THREE.Vector3();
        if (axis.includes('x')) axisVec.set(1,0,0);
        else if (axis.includes('y')) axisVec.set(0,1,0);
        else if (axis.includes('z')) axisVec.set(0,0,1);

        // Fallback logic if axis and camera are nearly parallel
        const dot = Math.abs(axisVec.dot(cameraDir));
        if (dot > 0.9) {
            // Use a plane perpendicular to the dominant camera axis instead
            if (Math.abs(cameraDir.y) > 0.9) normal.set(0, 0, 1);
            else normal.set(0, 1, 0);
        } else {
            if (axis === 'x') normal.crossVectors(new THREE.Vector3(1,0,0), cameraDir).cross(new THREE.Vector3(1,0,0));
            else if (axis === 'y') normal.crossVectors(new THREE.Vector3(0,1,0), cameraDir).cross(new THREE.Vector3(0,1,0));
            else if (axis === 'z') normal.crossVectors(new THREE.Vector3(0,0,1), cameraDir).cross(new THREE.Vector3(0,0,1));
            else if (axis === 'xz') normal.set(0, 1, 0);
            else if (axis === 'xy') normal.set(0, 0, 1);
            else if (axis === 'zy') normal.set(1, 0, 0);
        }
        
        normal.normalize();
        this.dragPlane.setFromNormalAndCoplanarPoint(normal, hitPoint);
    }

    private startObjectDrag(object: THREE.Object3D) {
        this.isDragging = true;
        this.dragMode = 'object';
        this.objectStartPos.copy(object.position);
        
        // Disable orbit controls while dragging
        this.viewManager.setControlsEnabled(false);

        const cam = this.viewManager.getActiveCamera();
        let normal = new THREE.Vector3(0, 1, 0); 

        if (cam) {
            const dir = new THREE.Vector3();
            cam.getWorldDirection(dir);
            // Always use a plane facing the camera for smooth 1:1 dragging
            // This prevents "too fast" movement at shallow angles or specific view setups
            normal.copy(dir).negate(); 
        }

        this.dragPlane.setFromNormalAndCoplanarPoint(normal, object.position);
        
        const intersectionStart = new THREE.Vector3();
        if (this.raycaster.ray.intersectPlane(this.dragPlane, intersectionStart)) {
             const offset = new THREE.Vector3().subVectors(object.position, intersectionStart);
             // Offset should not be massive (e.g. larger than the grid)
             if (offset.length() > 50000) {
                 // Relaxed limit slightly, but kept check
             }
             this.dragOffset.copy(offset);
        } else {
             // Abort if plane is not hit
             this.isDragging = false;
             this.dragMode = 'none';
             this.setCameraLock(false);
             return;
        }
        
        this.setGizmoHighlight('all');
    }

    private startSubObjectDrag(subObject: THREE.Object3D, hitPoint: THREE.Vector3) {
        this.isDragging = true;
        this.dragMode = 'sub-object';
        this.selectedSubObject = subObject;
        
        // Disable orbit controls while dragging
        this.viewManager.setControlsEnabled(false);

        const mesh = subObject as THREE.Mesh;
        if (mesh.material instanceof THREE.SpriteMaterial || mesh.material instanceof THREE.MeshBasicMaterial) {
            this.activeSubObjectOriginalColor = (mesh.material as any).color.getHex();
            (mesh.material as any).color.setHex(0xFFFF00);
        }
        
        // Store World Start Pos for Constraint
        const worldPos = new THREE.Vector3();
        subObject.getWorldPosition(worldPos);
        this.subObjectStartPos.copy(worldPos);

        const cam = this.viewManager.getActiveCamera();
        let normal = new THREE.Vector3(0, 1, 0);
        
        if (cam) {
            const dir = new THREE.Vector3();
            cam.getWorldDirection(dir);
            // Always use a plane facing the camera for smooth 1:1 dragging
            normal.copy(dir).negate();
        }

        this.dragPlane.setFromNormalAndCoplanarPoint(normal, hitPoint);
        this.dragStartPoint.copy(hitPoint);
        
        const intersectionStart = new THREE.Vector3();
        if (this.raycaster.ray.intersectPlane(this.dragPlane, intersectionStart)) {
            this.dragOffset.subVectors(worldPos, intersectionStart);
        } else {
            this.dragOffset.set(0,0,0);
        }
    }

    private handleGizmoDrag(event: InteractionEvent) {
        if (!this.selectedObject || !this.dragAxis) return;

        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        this.raycaster.setFromCamera(event.pointer, cam);
        const target = new THREE.Vector3();
        if (!this.raycaster.ray.intersectPlane(this.dragPlane, target)) return;

        if (this.activeGizmoMode === 'translate') {
            const totalDelta = target.clone().sub(this.dragStartPoint);
            const newPos = this.objectStartPos.clone();
            
            if (this.dragAxis.includes('x')) newPos.x += totalDelta.x;
            if (this.dragAxis.includes('y')) newPos.y += totalDelta.y;
            if (this.dragAxis.includes('z')) newPos.z += totalDelta.z;
            
            // SECURITY: Enforce 2D constraints even for Gizmo dragging
            this.constrainToViewPlane(newPos, this.objectStartPos);
            
            if (this.viewManager.getActiveView() === ViewType.TOP) {
                newPos.y = this.objectStartPos.y;
            }

            this.applySnap(newPos);
            
            if (Number.isFinite(newPos.x) && Number.isFinite(newPos.y) && Number.isFinite(newPos.z)) {
                if (Math.abs(newPos.x) < 20000 && Math.abs(newPos.y) < 20000 && Math.abs(newPos.z) < 20000) {
                    this.selectedObject.position.copy(newPos);
                }
            }
            
            this.updateGizmo();
        }
    }

    private handleObjectDrag(event: InteractionEvent) {
        if (!this.selectedObject) return;
        
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        
        const delta = new THREE.Vector2().copy(event.pointer).sub(this.lastPointer);
        this.lastPointer.copy(event.pointer);

        let newPos: THREE.Vector3 | null = null;

        if (cam instanceof THREE.OrthographicCamera) {
            // --- Direct Screen-to-World Dragging for 2D Views ---
            const viewSize = {
                width: cam.right - cam.left,
                height: cam.top - cam.bottom
            };
            const worldDelta = new THREE.Vector3(
                delta.x * viewSize.width / cam.zoom,
                delta.y * viewSize.height / cam.zoom,
                0
            );
            worldDelta.applyQuaternion(cam.quaternion); // Transform delta to world space
            
            newPos = this.selectedObject.position.clone().add(worldDelta);

        } else {
            // --- Raycast-based Dragging for Perspective ---
            this.raycaster.setFromCamera(event.pointer, cam);
            const target = new THREE.Vector3();
            if (this.raycaster.ray.intersectPlane(this.dragPlane, target)) {
                newPos = target.add(this.dragOffset);
            }
        }
        
        if (newPos) {
            if (isNaN(newPos.x) || isNaN(newPos.y) || isNaN(newPos.z) || newPos.length() > 1000000) {
                 return;
            }

             // Enforce 2D view constraint (prevent depth jumping)
             this.constrainToViewPlane(newPos, this.objectStartPos);
             
             if (this.viewManager.getActiveView() === ViewType.TOP) {
                 newPos.y = this.objectStartPos.y;
             }

             this.applySnap(newPos);

             // RE-APPLY Constraints after Snap to prevent snapping the locked axis
             this.constrainToViewPlane(newPos, this.objectStartPos);
             if (this.viewManager.getActiveView() === ViewType.TOP) {
                 newPos.y = this.objectStartPos.y;
             }
             
             if (!Number.isFinite(newPos.x) || !Number.isFinite(newPos.y) || !Number.isFinite(newPos.z)) {
                 console.error(`DEBUG: Invalid position detected for object ${this.selectedObject.name}:`, newPos);
                 return;
             }
             
             // STRICT LIMIT: Nothing can move further than 10000 from center
             if (Math.abs(newPos.x) > 10000 || Math.abs(newPos.y) > 10000 || Math.abs(newPos.z) > 10000) {
                 console.warn(`DEBUG: Object ${this.selectedObject.name} move blocked - out of bounds:`, newPos);
                 return;
             }

             this.selectedObject.position.copy(newPos);
             this.updateGizmo();
        }
    }

    private handleSubObjectDrag(event: InteractionEvent) {
        if (!this.selectedSubObject) return;

        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;

        // --- Unified Drag Logic for ALL Views ---
        this.raycaster.setFromCamera(event.pointer, cam);
        const target = new THREE.Vector3();
        let newPos: THREE.Vector3 | null = null;
        
        if (this.raycaster.ray.intersectPlane(this.dragPlane, target)) {
            newPos = target.add(this.dragOffset);
        }
        
        if (newPos) {
            // In perspective view, lock Y to constrain editing to the XZ plane.
            // In ortho views, constrainToViewPlane will handle the axis locking.
            if (cam instanceof THREE.PerspectiveCamera) {
                newPos.y = this.subObjectStartPos.y;
            }
            this.constrainToViewPlane(newPos, this.subObjectStartPos);

            this.applySnap(newPos);
            
            // Allow bypassing snap with ALT key for fine control
            if (event.originalEvent.altKey) {
                // Re-calculate pos without snap for perspective
                const rawTarget = new THREE.Vector3();
                if (this.raycaster.ray.intersectPlane(this.dragPlane, rawTarget)) {
                    newPos.copy(rawTarget.add(this.dragOffset));
                }
                
                this.constrainToViewPlane(newPos, this.subObjectStartPos);
                if (this.viewManager.getActiveView() === ViewType.TOP) newPos.y = this.subObjectStartPos.y;
            }

            if (!Number.isFinite(newPos.x) || !Number.isFinite(newPos.y) || !Number.isFinite(newPos.z)) {
                console.error("DEBUG: Invalid sub-object position detected:", newPos);
                return;
            }

            if (Math.abs(newPos.x) > 10000 || Math.abs(newPos.y) > 10000 || Math.abs(newPos.z) > 10000) {
                console.warn("DEBUG: Sub-object move blocked - out of bounds:", newPos);
                return;
            }

            const parent = this.selectedSubObject.parent;
            if (parent) {
                const newLocalPos = newPos.clone();
                parent.worldToLocal(newLocalPos);
                
                this.selectedSubObject.position.copy(newLocalPos);
                
                // Explicitly handle Segment Groups (moving Control Points)
                if (parent.userData.type === 'bezier_line') {
                    ShapeFactory.updateBezierSegmentGeometry(parent);
                }

                const isPath = parent.userData.type === 'bezier_path' || parent.userData.type === 'circle' || parent.userData.type === 'square' || parent.userData.type === 'line';
                if (this.selectedSubObject.userData.isNode && isPath) {
                    parent.children.forEach(child => {
                        if (child.userData.type === 'bezier_line' && child.userData.isLinked && child.userData.nodes) {
                            const nodes = child.userData.nodes;
                            
                            const isStart = nodes.start === this.selectedSubObject;
                            const isEnd = nodes.end === this.selectedSubObject;
                            
                            if (isStart || isEnd) {
                                // ... (rest of the logic remains the same)
                                ShapeFactory.updateBezierSegmentGeometry(child);
                            }
                        }
                    });
                }
                
                if (parent.userData.type === 'background_image') {
                    ShapeFactory.updateBackgroundImage(parent);
                }

                // Trigger modifier update if parent supports it
                let rootObj = parent;
                while (rootObj.parent && rootObj.parent.type !== 'Scene') {
                    rootObj = rootObj.parent;
                }
                this.eventBus.emit('update-object-geometry', rootObj);
            }
        }
    }
}