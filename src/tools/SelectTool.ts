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
    private dragMode: 'none' | 'object' | 'sub-object' | 'gizmo' = 'none';
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
        
        this.lastPointer.copy(event.pointer); // Store initial pointer
        this.updateRaycasterThresholds();

        const objects = this.objectManager.getObjects();
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        this.raycaster.setFromCamera(event.pointer, cam);

        // 1. Check for Machine Brush first - HIGHEST PRIORITY
        const machineBrushHit = this.raycaster.intersectObject(this.machineBrush.group, true);
        if (machineBrushHit.length > 0) {
            this.eventBus.emit('open-brush-properties', null);
            // Prevent any other selection from happening
            return; 
        }
        
        // Screen-Space Picking for Handles (Anchors/ControlPoints)
        // This avoids issues with huge world-scale sprites overlapping.
        let hitPoint: { object: THREE.Object3D, point: THREE.Vector3 } | undefined;
        let minDistSq = Infinity;
        const screenThresholdSq = 0.0001; // Reduced to ~1% screen width (very precise)

        const pointer3 = new THREE.Vector3(event.pointer.x, event.pointer.y, 0.5);

        objects.forEach(root => {
            // Skip hidden objects completely
            if (!root.visible) return;

            root.traverse(obj => {
                if ((obj.userData.isAnchor || obj.userData.isControlPoint || obj.userData.isNode) && obj.visible) {
                    const pos = new THREE.Vector3();
                    obj.getWorldPosition(pos);
                    pos.project(cam); // To NDC (-1 to 1)
                    
                    // Check if inside frustum
                    if (pos.z > -1 && pos.z < 1) {
                        const dSq = ((pos.x - pointer3.x) ** 2 + (pos.y - pointer3.y) ** 2);
                        if (dSq < screenThresholdSq && dSq < minDistSq) {
                            minDistSq = dSq;
                            const worldHit = new THREE.Vector3();
                            obj.getWorldPosition(worldHit);
                            
                            // Sanity Check: World Distance
                            // Even if screen pos is close, world pos shouldn't be crazy far (in XY plane)
                            // Unproject pointer to get world line
                            const vec = new THREE.Vector3(event.pointer.x, event.pointer.y, 0);
                            vec.unproject(cam);
                            
                            hitPoint = { object: obj, point: worldHit };
                        }
                    }
                }
            });
        });

        // SAFETY: Verify Hit
        if (hitPoint) {
             const worldPos = new THREE.Vector3();
             hitPoint.object.getWorldPosition(worldPos);
             // Verify visually? No, screen check is visual.
        }

        if (hitPoint) {
            const obj = hitPoint.object;
            if (obj.userData.isAnchor || obj.userData.isControlPoint || obj.userData.isNode) {
                if (obj.userData.isMainAnchor) {
                    let parent = obj.parent;
                    while(parent && parent.parent && parent.parent.type !== 'Scene') parent = parent.parent;
                    if (parent) {
                        this.objectManager.selectObject(parent);
                        this.startObjectDrag(parent);
                        this.activeAnchor = obj as THREE.Mesh;
                        if (this.activeAnchor.material instanceof THREE.SpriteMaterial) {
                            this.activeAnchor.material.color.setHex(0xFFFF00);
                        }
                    }
                } else {
                    this.startSubObjectDrag(obj, hitPoint.point);
                    let parent = obj.parent;
                    while(parent && parent.parent && parent.parent.type !== 'Scene') parent = parent.parent;
                    if (parent && parent !== this.selectedObject) {
                        this.objectManager.selectObject(parent);
                    }
                }
                return; 
            }
        }

        // 2. Check for Gizmo (Axes) - MEDIUM PRIORITY
        const gizmo = this.activeGizmoMode === 'translate' ? this.translateGizmo : this.rotateGizmo;
        if (gizmo.visible) {
            const hitGizmo = this.raycastObject(event, gizmo);
            if (hitGizmo && hitGizmo.object.userData.axis) {
                this.startGizmoDrag(hitGizmo.object.userData.axis, hitGizmo.point);
                return;
            }
        }

        // 3. Check for the Shape itself - LOW PRIORITY
        // We need standard raycasting for this (meshes/lines)
        const intersects = this.raycaster.intersectObjects(objects, true);
        if (intersects.length > 0) {
             let hit = intersects[0];
             let target = hit.object;
             while(target.parent && target.parent.type !== 'Scene') target = target.parent;
             this.objectManager.selectObject(target);
             this.startObjectDrag(target);
             
             const anchor = target.children.find(c => c.userData.isMainAnchor) as THREE.Mesh;
             if (anchor) {
                 this.activeAnchor = anchor;
                 if (this.activeAnchor.material instanceof THREE.SpriteMaterial) {
                     this.activeAnchor.material.color.setHex(0xFFFF00);
                 }
             }
        } else {
             this.objectManager.deselectAll();
        }
    }
    
    onPointerMove(event: InteractionEvent) {
        this.updateRaycasterThresholds();
        if (this.isDragging) {
            if (this.dragMode === 'gizmo') this.handleGizmoDrag(event);
            else if (this.dragMode === 'sub-object') this.handleSubObjectDrag(event);
            else if (this.dragMode === 'object') this.handleObjectDrag(event);
        } else {
            this.handleHover(event);
        }
    }

    private handleHover(event: InteractionEvent) {
        const objects = this.objectManager.getObjects();
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;
        
        // Screen-Space Picking for Hover
        let hitPoint: { object: THREE.Object3D } | undefined;
        let minDistSq = Infinity;
        const screenThresholdSq = 0.0001; 
        const pointer3 = new THREE.Vector3(event.pointer.x, event.pointer.y, 0.5);

        objects.forEach(root => {
            if (!root.visible) return; // Skip hidden objects
            
            root.traverse(obj => {
                if ((obj.userData.isAnchor || obj.userData.isControlPoint || obj.userData.isNode) && obj.visible) {
                    const pos = new THREE.Vector3();
                    obj.getWorldPosition(pos);
                    pos.project(cam);
                    if (pos.z > -1 && pos.z < 1) {
                        const dSq = ((pos.x - pointer3.x) ** 2 + (pos.y - pointer3.y) ** 2);
                        if (dSq < screenThresholdSq && dSq < minDistSq) {
                            minDistSq = dSq;
                            hitPoint = { object: obj };
                        }
                    }
                }
            });
        });
        
        if (hitPoint) {
            const obj = hitPoint.object as THREE.Mesh;
            
            if (obj.userData.isMainAnchor) {
                this.setGizmoHighlight('all');
            } else {
                this.setGizmoHighlight(null);
            }

            if (this.hoveredSubObject !== obj) {
                this.resetHover();
                this.hoveredSubObject = obj;
                if (obj.material instanceof THREE.SpriteMaterial || obj.material instanceof THREE.MeshBasicMaterial) {
                    // CLONE MATERIAL to prevent shared-material artifacts
                    if (!obj.userData.uniqueMat) {
                        obj.material = obj.material.clone();
                        obj.userData.uniqueMat = true;
                    }
                    this.hoveredOriginalColor = (obj.material as any).color.getHex();
                    (obj.material as any).color.setHex(0xFFFF00);
                    (obj.material as any).needsUpdate = true;
                }
            }
            return; 
        }

        const gizmo = this.activeGizmoMode === 'translate' ? this.translateGizmo : this.rotateGizmo;
        let hoveredGizmoAxis: string | null = null;
        
        if (gizmo.visible) {
            const hitGizmo = this.raycastObject(event, gizmo);
            if (hitGizmo && hitGizmo.object.userData.axis) {
                hoveredGizmoAxis = hitGizmo.object.userData.axis;
            }
        }
        
        if (hoveredGizmoAxis) {
            this.setGizmoHighlight(hoveredGizmoAxis);
            this.resetHover();
        } else {
            this.setGizmoHighlight(null);
            this.resetHover();
        }
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

    onPointerUp(_event: InteractionEvent) {
        this.isDragging = false;
        this.dragMode = 'none';
        
        // Re-enable orbit controls
        this.setCameraLock(false);

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

    private raycastObject(event: InteractionEvent, object: THREE.Object3D): THREE.Intersection | null {
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return null;
        this.raycaster.setFromCamera(event.pointer, cam);
        const intersects = this.raycaster.intersectObject(object, true);
        return intersects.length > 0 ? intersects[0] : null;
    }

    private startGizmoDrag(axis: string, hitPoint: THREE.Vector3) {
        this.isDragging = true;
        this.dragMode = 'gizmo';
        this.dragAxis = axis;
        this.dragStartPoint.copy(hitPoint);
        if (this.selectedObject) this.objectStartPos.copy(this.selectedObject.position);

        this.setCameraLock(true);
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
        this.setCameraLock(true);

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
        this.setCameraLock(true);

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

        let newPos: THREE.Vector3 | null = null;

        if (cam instanceof THREE.OrthographicCamera) {
            // --- Direct Screen-to-World Dragging for 2D Views ---
            const delta = new THREE.Vector2().copy(event.pointer).sub(this.lastPointer);
            this.lastPointer.copy(event.pointer);

            const viewSize = {
                width: cam.right - cam.left,
                height: cam.top - cam.bottom
            };
            const worldDelta = new THREE.Vector3(
                delta.x * viewSize.width / cam.zoom,
                delta.y * viewSize.height / cam.zoom,
                0
            );
            worldDelta.applyQuaternion(cam.quaternion);
            
            const currentPos = new THREE.Vector3();
            this.selectedSubObject.getWorldPosition(currentPos);
            newPos = currentPos.add(worldDelta);

        } else {
            // --- Raycast-based Dragging for Perspective ---
            this.raycaster.setFromCamera(event.pointer, cam);
            const target = new THREE.Vector3();
            if (this.raycaster.ray.intersectPlane(this.dragPlane, target)) {
                newPos = target.add(this.dragOffset);
            }
        }
        
        if (newPos) {
            // Enforce 2D view constraint for points too
            this.constrainToViewPlane(newPos, this.subObjectStartPos);

            if (this.viewManager.getActiveView() === ViewType.TOP) {
                newPos.y = this.subObjectStartPos.y;
            }

            this.applySnap(newPos);
            
            // Allow bypassing snap with ALT key for fine control
            if (event.originalEvent.altKey) {
                // Re-calculate pos without snap for perspective
                if (!(cam instanceof THREE.OrthographicCamera)) {
                    const rawTarget = new THREE.Vector3();
                    if (this.raycaster.ray.intersectPlane(this.dragPlane, rawTarget)) {
                        newPos.copy(rawTarget.add(this.dragOffset));
                    }
                } else {
                    // For direct dragging, we need to re-add the non-snapped delta
                    const nonSnappedDelta = new THREE.Vector2().copy(event.pointer).sub(this.lastPointer);
                    const viewSize = { width: cam.right - cam.left, height: cam.top - cam.bottom };
                    const nonSnappedWorldDelta = new THREE.Vector3(
                        nonSnappedDelta.x * viewSize.width / cam.zoom,
                        nonSnappedDelta.y * viewSize.height / cam.zoom,
                        0
                    ).applyQuaternion(cam.quaternion);
                    
                    const currentPos = new THREE.Vector3();
                    this.selectedSubObject.getWorldPosition(currentPos);
                    newPos = currentPos.add(nonSnappedWorldDelta);
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



                const oldNodePos = this.selectedSubObject.position.clone();
                const delta = newLocalPos.clone().sub(oldNodePos);
                
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
                            const helpers = child.userData.helpers;
                            
                            const isStart = nodes.start === this.selectedSubObject;
                            const isEnd = nodes.end === this.selectedSubObject;
                            
                            if (isStart || isEnd) {
                                const startPos = nodes.start === this.selectedSubObject ? newLocalPos : nodes.start.position;
                                const endPos = nodes.end === this.selectedSubObject ? newLocalPos : nodes.end.position;
                                
                                const startPosOld = nodes.start === this.selectedSubObject ? oldNodePos : nodes.start.position;
                                const endPosOld = nodes.end === this.selectedSubObject ? oldNodePos : nodes.end.position;
                                
                                const vecSegOld = new THREE.Vector3().subVectors(endPosOld, startPosOld);
                                const lenOld = vecSegOld.length();
                                
                                let wasLinear = false;
                                if (lenOld > 0.001) {
                                    vecSegOld.normalize();
                                    const dist1 = helpers.cp1 ? new THREE.Vector3().subVectors(helpers.cp1.position, startPosOld).cross(vecSegOld).length() : 0;
                                    const dist2 = helpers.cp2 ? new THREE.Vector3().subVectors(helpers.cp2.position, startPosOld).cross(vecSegOld).length() : 0;
                                    wasLinear = (dist1 < 0.1 && dist2 < 0.1); 
                                }

                                if (wasLinear) {
                                    const vecSegNew = new THREE.Vector3().subVectors(endPos, startPos);
                                    const lenNew = vecSegNew.length();
                                    
                                    if (helpers.cp1) {
                                        helpers.cp1.position.copy(startPos).add(vecSegNew.clone().normalize().multiplyScalar(lenNew * 0.333));
                                    }
                                    if (helpers.cp2) {
                                        helpers.cp2.position.copy(startPos).add(vecSegNew.clone().normalize().multiplyScalar(lenNew * 0.666));
                                    }
                                } else {
                                    if (isStart && helpers.cp1) helpers.cp1.position.add(delta);
                                    if (isEnd && helpers.cp2) helpers.cp2.position.add(delta);
                                }
                                ShapeFactory.updateBezierSegmentGeometry(child);
                            }
                        }
                    });
                } else {
                     ShapeFactory.updateBezierSegmentGeometry(parent);
                }
                
                if (parent.userData.type === 'background_image') {
                    ShapeFactory.updateBackgroundImage(parent);
                }

                if (parent.userData.type === 'bezier_path' && !this.selectedSubObject.userData.isNode) {
                     parent.children.forEach(child => {
                         if (child.userData.type === 'bezier_line' && child.userData.isLinked) {
                             ShapeFactory.updateBezierSegmentGeometry(child);
                         }
                     });
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