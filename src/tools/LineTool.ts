import * as THREE from 'three';
import { Tool } from './Tool';
import { BaseTool } from './BaseTool';
import { EventBus } from '../core/EventBus';
import { InteractionEvent } from '../interaction/InteractionManager';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager } from '../managers/ViewManager';
import { ShapeFactory } from '../geometries/ShapeFactory';
import { ShapeUtils } from '../geometries/ShapeUtils';

export class LineTool extends BaseTool implements Tool {
    id = 'line';
    
    // Draft State
    private points: THREE.Vector3[] = [];
    private draftGroup: THREE.Group | null = null;
    private draftMovingNode: THREE.Object3D | null = null;
    private lastFixedNode: THREE.Object3D | null = null;
    private viewManager: ViewManager;

    constructor(eventBus: EventBus, viewManager: ViewManager, objectManager: ObjectManager) {
        super(eventBus, objectManager);
        this.viewManager = viewManager;
    }

    activate() { this.resetState(); }
    deactivate() { 
        this.finishPath();
        this.viewManager.setControlsEnabled(true);
    }

    onPointerDown(event: InteractionEvent) {
        // Right Click -> Finish
        if (event.originalEvent.button !== 0) {
            this.finishPath();
            return;
        }

        if (!event.intersection) return;
        const pos = event.intersection.clone();
        this.applySnap(pos);

        // Add point to our list
        this.points.push(pos);

        // Update visual feedback (Draft)
        this.updateDraft(pos);
        
        if (this.points.length === 1) {
             this.viewManager.setControlsEnabled(false);
        }
    }

    onPointerMove(event: InteractionEvent) {
        if (this.points.length === 0) return;
        if (!event.intersection) return;

        const pos = event.intersection.clone();
        this.applySnap(pos);

        // Update the moving preview node/segment
        if (this.draftMovingNode && this.draftGroup) {
            this.draftMovingNode.position.copy(pos);
            
            // Update the last segment in the draft group
            const lastSegment = this.draftGroup.children[this.draftGroup.children.length - 1];
            if (lastSegment && lastSegment.userData.type === 'bezier_line') {
                ShapeFactory.updateBezierSegmentGeometry(lastSegment);
            }
        }
    }

    onPointerUp(_event: InteractionEvent) {}

    private updateDraft(lastFixedPos: THREE.Vector3) {
        // If first point, initialize draft group
        if (!this.draftGroup) {
            this.draftGroup = new THREE.Group();
            this.draftGroup.userData.type = 'draft_path';
            this.objectManager.addObject(this.draftGroup);
            
            // First Node
            const startNode = ShapeUtils.createBezierPathNode(lastFixedPos);
            this.draftGroup.add(startNode);
            this.lastFixedNode = startNode; // Track explicitly
        } else {
             // We just added a new fixed point.
             // The "moving node" from before is now fixed at 'lastFixedPos'.
             
             if (this.draftMovingNode) {
                 this.draftMovingNode.position.copy(lastFixedPos);
                 this.lastFixedNode = this.draftMovingNode; // The moving node becomes the last fixed node
                 this.draftMovingNode = null;
             }
        }

        // Create NEW Moving Node and Segment preview
        this.draftMovingNode = ShapeUtils.createBezierPathNode(lastFixedPos.clone());
        this.draftGroup.add(this.draftMovingNode);

        if (this.lastFixedNode) {
            const segment = ShapeUtils.createLinkedBezierSegment(this.lastFixedNode, this.draftMovingNode);
            this.draftGroup.add(segment);
        }
    }

    private finishPath() {
        // Remove draft
        if (this.draftGroup) {
            this.objectManager.removeObject(this.draftGroup);
            this.draftGroup = null;
            this.draftMovingNode = null;
        }

        if (this.points.length >= 2) {
            // Use the clean Factory method!
            const finalObject = ShapeFactory.createPath(this.points, false);
            
            if (finalObject) {
                finalObject.userData.type = 'line';
                this.objectManager.addObject(finalObject);

                this.viewManager.setControlsEnabled(true);
                this.resetState();

                // Select it
                this.eventBus.emit('tool-selected', 'select');
                setTimeout(() => {
                    this.objectManager.selectObject(finalObject);
                    this.eventBus.emit('selection-changed', [finalObject]);
                }, 50);
                return;
            }
        }

        this.viewManager.setControlsEnabled(true);
        this.resetState();
    }

    private resetState() {
        this.points = [];
        this.draftGroup = null;
        this.draftMovingNode = null;
        this.lastFixedNode = null;
    }
}