import * as THREE from 'three';
import { Tool } from './Tool';
import { BaseTool } from './BaseTool';
import { EventBus } from '../core/EventBus';
import { InteractionEvent } from '../interaction/InteractionManager';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager } from '../managers/ViewManager';
import { ShapeFactory } from '../geometries/ShapeFactory';

export class CircleTool extends BaseTool implements Tool {
    id = 'circle';
    private startPoint: THREE.Vector3 | null = null;
    private previewObject: THREE.Object3D | null = null;

    constructor(eventBus: EventBus, _viewManager: ViewManager, objectManager: ObjectManager) {
        super(eventBus, objectManager);
    }

    activate() { this.resetState(); }
    deactivate() { 
        this.cancel();
        this.setCameraLock(false);
    }

    onPointerDown(event: InteractionEvent) {
        if (event.originalEvent.button !== 0) { 
            this.cancel(); 
            this.setCameraLock(false);
            return; 
        }
        if (!event.intersection) return;

        const pos = event.intersection.clone();
        this.applySnap(pos);

        if (!this.previewObject) {
            this.startPoint = pos;
            this.createPreviewObject(pos);
            this.setCameraLock(true);
        } else {
            const radius = pos.distanceTo(this.startPoint!);
            const center = this.previewObject.position.clone();
            
            // Remove preview
            // console.log("Finishing Circle - Removing preview:", this.previewObject?.uuid);
            this.objectManager.removeObject(this.previewObject);
            this.previewObject = null;
            this.startPoint = null;
            this.setCameraLock(false);
            
            // Create final clean object
            const finalObj = ShapeFactory.createShape('circle', center);
            if (finalObj) {
                // console.log("Created Final Circle:", finalObj.uuid);
                ShapeFactory.updateCircleRadius(finalObj, Math.max(0.1, radius));
                finalObj.userData.type = 'circle';
                this.objectManager.addObject(finalObj);

                // Select it
                this.eventBus.emit('tool-selected', 'select');
                setTimeout(() => {
                    this.objectManager.selectObject(finalObj);
                    this.eventBus.emit('selection-changed', [finalObj]);
                }, 50);
            }
        }
    }

    onPointerMove(event: InteractionEvent) {
        if (!this.previewObject || !this.startPoint) return;
        if (!event.intersection) return;

        const pos = event.intersection.clone();
        this.applySnap(pos);
        this.updatePreview(pos);
    }

    onPointerUp(_event: InteractionEvent) {}

    private cancel() {
        if (this.previewObject) {
            this.objectManager.removeObject(this.previewObject);
            this.previewObject = null;
        }
        this.startPoint = null;
        this.eventBus.emit('preview-object-updated', null);
    }

    private resetState() {
        this.startPoint = null;
        this.previewObject = null;
    }

    private createPreviewObject(pos: THREE.Vector3) {
        // Use standard creation
        this.previewObject = ShapeFactory.createShape('circle', pos);
        if (this.previewObject) {
            // this.previewObject.name = this.getNextName('Circle'); // Let ObjectManager handle name
            this.previewObject.userData.type = 'circle';
            this.objectManager.addObject(this.previewObject, false);
            this.eventBus.emit('preview-object-updated', this.previewObject);
        }
    }

    private updatePreview(currentPos: THREE.Vector3) {
        if (!this.previewObject || !this.startPoint) return;

        const radius = currentPos.distanceTo(this.startPoint);
        const safeRadius = Math.max(0.1, radius);
        
        ShapeFactory.updateCircleRadius(this.previewObject, safeRadius);
        this.eventBus.emit('preview-object-updated', this.previewObject);
    }
}
