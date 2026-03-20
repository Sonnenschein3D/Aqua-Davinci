import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ObjectManager } from '../managers/ObjectManager';

export abstract class BaseTool {
    protected eventBus: EventBus;
    protected objectManager: ObjectManager;
    protected gridStep: number = 10;
    protected isSnapEnabled: boolean = false;

    constructor(eventBus: EventBus, objectManager: ObjectManager) {
        this.eventBus = eventBus;
        this.objectManager = objectManager;

        this.eventBus.on('toggle-snap', (enabled: boolean) => {
            this.isSnapEnabled = enabled;
        });
        this.eventBus.on('settings-grid-changed', (data: { step: number }) => {
            this.gridStep = data.step;
        });
    }

    protected applySnap(point: THREE.Vector3) {
        const snap = this.isSnapEnabled ? Math.max(0.1, this.gridStep) : 0;
        if (snap > 0) {
            point.x = Math.round(point.x / snap) * snap;
            point.z = Math.round(point.z / snap) * snap;
            point.y = Math.round(point.y / snap) * snap;
        }
    }

    protected getNextName(baseName: string): string {
        return `${baseName} ${Date.now()}`;
    }

    protected setCameraLock(locked: boolean) {
        this.eventBus.emit('camera-controls-lock', locked);
    }
}
