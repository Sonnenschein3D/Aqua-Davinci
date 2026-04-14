import './style.css'
import { createCore } from './app/core';
import { setupMachine } from './app/machine';
import { setupUI } from './app/ui';
import { setupCAM } from './app/cam';
import { setupImageProcessing } from './app/image';

// --- APPLICATION START ---

// 1. Initialize Core Components
const { scene, eventBus, objectManager, viewManager } = createCore();

// 2. Initialize Machine and Simulation
const { robot, machineBrush } = setupMachine(scene, eventBus, viewManager);

// 3. Initialize UI Components
const { uiManager, interactionManager, toolManager, rulerManager, projectManager } = setupUI(scene, eventBus, objectManager, viewManager, machineBrush);

// 4. Initialize CAM functionality
setupCAM(eventBus, robot);

// 5. Initialize Image Processing functionality
setupImageProcessing(eventBus, objectManager, viewManager, toolManager);


// --- DEBUGGING ---
// Expose core modules to the window for easy debugging
(window as any).app = {
    scene,
    eventBus,
    objectManager,
    viewManager,
    toolManager,
    uiManager,
    interactionManager,
    rulerManager,
    projectManager,
    robot
};

(window as any).dumpScene = () => {
    const cam = (window as any).app.viewManager.getActiveCamera();
    const vm = (window as any).app.viewManager;
    console.log("--- SCENE DUMP ---");
    console.log("Active View:", vm.getActiveView());
    if (cam) {
        console.log("Camera Pos:", cam.position.x, cam.position.y, cam.position.z);
        console.log("Camera Near/Far:", cam.near, cam.far);
        if (cam.zoom) console.log("Camera Zoom:", cam.zoom);
    }
};

// Auto-start in fullscreen on first user interaction (browsers strictly require a gesture)
const goFullscreen = () => {
    if (!document.fullscreenElement) {
        const docEl = document.documentElement;
        const requestMethod = docEl.requestFullscreen || (docEl as any).webkitRequestFullscreen || (docEl as any).mozRequestFullScreen || (docEl as any).msRequestFullscreen;
        if (requestMethod) {
            requestMethod.call(docEl).catch((err: any) => {
                console.warn(`Vollbild-Anfrage fehlgeschlagen: ${err.message}`);
            });
        }
    }
    // Clean up all listeners once triggered
    // Removed the removal of listeners here as 'once: true' handles it.
    // If this needs to be re-triggerable, this removal logic might be needed.
};

// Trigger fullscreen on common interaction events, including touch events reliable on mobile
['click', 'mousedown', 'keydown', 'touchstart', 'touchend', 'pointerup'].forEach(type => {
    document.addEventListener(type, goFullscreen, { once: true });
});

console.log('Aqua-Davinci App started (Modular Build)');