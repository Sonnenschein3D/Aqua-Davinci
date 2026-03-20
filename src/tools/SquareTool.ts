import * as THREE from 'three';
import { Tool } from './Tool';
import { BaseTool } from './BaseTool';
import { EventBus } from '../core/EventBus';
import { ViewManager } from '../managers/ViewManager';
import { ObjectManager } from '../managers/ObjectManager';
import { InteractionEvent } from '../interaction/InteractionManager';
import { ShapeFactory } from '../geometries/ShapeFactory';

export class SquareTool extends BaseTool implements Tool {
    id = 'square';
    
    private viewManager: ViewManager;
    private drawing: boolean = false;
    private startPoint: THREE.Vector3 = new THREE.Vector3();
    private previewObject: THREE.Object3D | null = null;

    constructor(eventBus: EventBus, viewManager: ViewManager, objectManager: ObjectManager) {
        super(eventBus, objectManager);
        this.viewManager = viewManager;
    }

    activate() {
        this.drawing = false;
        this.removePreview();
    }

    deactivate() {
        this.drawing = false;
        this.setCameraLock(false);
        this.removePreview();
    }

    onPointerDown(event: InteractionEvent) {
        if (event.originalEvent.button !== 0) return;

        const cam = this.viewManager.getActiveCamera();
        if (!cam) return;

        const point = this.getIntersectionPoint(event);
        if (!point) return;

        if (!this.drawing) {
            // First Click: Start Drawing
            this.drawing = true;
            this.setCameraLock(true); 
            this.startPoint.copy(point);
            this.createPreview(point);
        } else {
            // Second Click: Finish Drawing
            this.drawing = false;
            this.setCameraLock(false);
            
            // Finalize
            if (this.previewObject) {
                this.previewObject.userData.type = 'square';
                // Update BaseSize for Properties Panel logic
                this.updateBaseSize(this.previewObject, this.startPoint, point);
                
                // Select it
                const finalObj = this.previewObject;
                this.previewObject = null; // Detach so removePreview doesn't kill it
                this.eventBus.emit('preview-object-updated', null); // Clear preview mode
                
                // Switch back to Select Tool
                this.eventBus.emit('tool-selected', 'select');
                setTimeout(() => {
                    this.objectManager.selectObject(finalObj);
                    this.eventBus.emit('selection-changed', [finalObj]);
                }, 50);
            } else {
                this.removePreview();
            }
        }
    }

    onPointerMove(event: InteractionEvent) {
        if (!this.drawing || !this.previewObject) return;

        const point = this.getIntersectionPoint(event);
        if (!point) return;

        this.updatePreview(point);
    }

    onPointerUp(_event: InteractionEvent) {
    }

    private getIntersectionPoint(event: InteractionEvent): THREE.Vector3 | null {
        const cam = this.viewManager.getActiveCamera();
        if (!cam) return null;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(event.pointer, cam);

        const planeY = this.drawing ? this.startPoint.y : 0;
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -planeY);
        const target = new THREE.Vector3();
        
        if (raycaster.ray.intersectPlane(plane, target)) {
            this.applySnap(target);
            return target;
        }
        return null;
    }

    private createPreview(current: THREE.Vector3) {
        this.previewObject = ShapeFactory.createRectangle(this.startPoint, current);
        if (this.previewObject) {
            this.previewObject.userData.type = 'square'; // Fake type for preview props
            this.updateBaseSize(this.previewObject, this.startPoint, current);
            this.objectManager.addObject(this.previewObject, false); // Don't select yet
            this.eventBus.emit('preview-object-updated', this.previewObject);
        }
    }

    private updatePreview(current: THREE.Vector3) {
        if (!this.previewObject) return;
        
        const p1 = this.startPoint;
        const p2 = current;
        
        const y = p1.y;
        const minX = Math.min(p1.x, p2.x);
        const maxX = Math.max(p1.x, p2.x);
        const minZ = Math.min(p1.z, p2.z);
        const maxZ = Math.max(p1.z, p2.z);
        const centerX = (minX + maxX) / 2;
        const centerZ = (minZ + maxZ) / 2;
        
        this.previewObject.position.set(centerX, y, centerZ);
        
        const width = maxX - minX;
        const length = maxZ - minZ;
        const halfW = width / 2;
        const halfL = length / 2;

        const nodes = this.previewObject.children.filter(c => c.userData.isNode);
        if (nodes.length === 4) {
            // TL, TR, BR, BL order assumed from creation
            // Local coordinates!
            nodes[0].position.set(-halfW, 0, -halfL);
            nodes[1].position.set(halfW, 0, -halfL);
            nodes[2].position.set(halfW, 0, halfL);
            nodes[3].position.set(-halfW, 0, halfL);
            
            
            const segments = this.previewObject.children.filter(c => c.userData.type === 'bezier_line');
            segments.forEach(seg => ShapeFactory.linearizeBezierSegment(seg));
        }
        
        // Show only the main anchor (cross) during preview, hide nodes and control points
        this.previewObject.traverse((child) => {
            if (child.userData.isMainAnchor) {
                child.visible = true;
            } else if (child.userData.isNode || child.userData.isControlPoint || child.userData.isHelperLine) {
                child.visible = false;
            }
        });
        
        this.updateBaseSize(this.previewObject, p1, p2);
        this.eventBus.emit('preview-object-updated', this.previewObject);
    }
    
    private updateBaseSize(obj: THREE.Object3D, p1: THREE.Vector3, p2: THREE.Vector3) {
        const width = Math.abs(p1.x - p2.x);
        const length = Math.abs(p1.z - p2.z);
        if (!obj.userData.baseSize) obj.userData.baseSize = {};
        obj.userData.baseSize.width = width;
        obj.userData.baseSize.length = length;
    }

    private removePreview() {
        if (this.previewObject) {
            this.objectManager.removeObject(this.previewObject);
            this.previewObject = null;
            this.eventBus.emit('preview-object-updated', null);
        }
    }
}