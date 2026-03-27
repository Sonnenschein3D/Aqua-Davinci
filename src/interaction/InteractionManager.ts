import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ViewManager } from '../managers/ViewManager';

export interface InteractionEvent {
    originalEvent: PointerEvent;
    pointer: THREE.Vector2;
    intersection: THREE.Vector3 | null;
    type: 'down' | 'move' | 'up';
}

export class InteractionManager {
    private eventBus: EventBus;
    private viewManager: ViewManager;
    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;
    // private plane: THREE.Plane;

    constructor(eventBus: EventBus, viewManager: ViewManager) {
        this.eventBus = eventBus;
        this.viewManager = viewManager;
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        // this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        this.initListeners();
    }

    private initListeners() {
        const canvas = this.viewManager.getCanvas();
        canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));
        window.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', (e) => this.onPointerUp(e));
    }

    private updatePointer(event: PointerEvent) {
        const canvas = this.viewManager.getCanvas();
        const rect = canvas.getBoundingClientRect();
        this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        const camera = this.viewManager.getActiveCamera();
        if (camera) this.raycaster.setFromCamera(this.pointer, camera);
    }

    private getIntersection(): THREE.Vector3 | null {
        const target = new THREE.Vector3();
        const camera = this.viewManager.getActiveCamera();
        if (!camera) return null;

        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);

        let normal = new THREE.Vector3();
        
        // Präzise Achsenwahl für orthogonale Ansichten
        if (Math.abs(dir.z) > 0.9) {
            normal.set(0, 0, 1); // Front/Back -> XY Ebene bei Z=0
        } else if (Math.abs(dir.x) > 0.9) {
            normal.set(1, 0, 0); // Left/Right -> ZY Ebene bei X=0
        } else if (Math.abs(dir.y) > 0.9) {
            normal.set(0, 1, 0); // Top/Bottom -> XZ Ebene bei Y=0
        } else {
            // Perspektive: XZ Ebene bei Y=0
            normal.set(0, 1, 0);
        }

        const plane = new THREE.Plane(normal, 0);
        
        // Falls der Ray die Ebene nicht trifft (paralell), geben wir null zurück
        if (Math.abs(this.raycaster.ray.direction.dot(normal)) < 0.0001) {
            return null;
        }

        return this.raycaster.ray.intersectPlane(plane, target);
    }

    private onPointerDown(e: PointerEvent) {
        this.updatePointer(e);
        const event: InteractionEvent = {
            originalEvent: e,
            pointer: this.pointer.clone(),
            intersection: this.getIntersection(),
            type: 'down'
        };
        this.eventBus.emit('interaction-pointer-down', event);
    }

    private onPointerMove(e: PointerEvent) {
        this.updatePointer(e);
        const event: InteractionEvent = {
            originalEvent: e,
            pointer: this.pointer.clone(),
            intersection: this.getIntersection(),
            type: 'move'
        };
        this.eventBus.emit('interaction-pointer-move', event);
    }

    private onPointerUp(e: PointerEvent) {
        this.updatePointer(e);
        const event: InteractionEvent = {
            originalEvent: e,
            pointer: this.pointer.clone(),
            intersection: this.getIntersection(),
            type: 'up'
        };
        this.eventBus.emit('interaction-pointer-up', event);
    }
}
