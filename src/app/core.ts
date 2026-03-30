import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ViewManager } from '../managers/ViewManager';
import { ObjectManager } from '../managers/ObjectManager';

export function createCore() {
    // Main Application setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333);

    // Initialize Core Managers
    const eventBus = new EventBus();
    const objectManager = new ObjectManager(eventBus, scene);
    const viewManager = new ViewManager(eventBus, 'app', scene);

    return { scene, eventBus, objectManager, viewManager };
}
