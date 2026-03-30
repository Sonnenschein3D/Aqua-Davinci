import { EventBus } from '../core/EventBus';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager } from '../managers/ViewManager';
import * as THREE from 'three';
import { Scene } from 'three';
import { UIManager } from '../managers/UIManager';
import { RulerManager } from '../managers/RulerManager';
import { InteractionManager } from '../interaction/InteractionManager';
import { ToolManager } from '../tools/ToolManager';
import { ProjectManager } from '../managers/ProjectManager';
import { SelectTool } from '../tools/SelectTool';
import { LineTool } from '../tools/LineTool';
import { SquareTool } from '../tools/SquareTool';
import { CircleTool } from '../tools/CircleTool';
import { DavinciPinsel1 } from '../ui/DavinciPinsel1';
import { HandleUtils } from '../helpers/HandleUtils';

export function setupUI(
    scene: Scene,
    eventBus: EventBus,
    objectManager: ObjectManager,
    viewManager: ViewManager,
    machineBrush: DavinciPinsel1
) {
    // --- MANAGERS ---
    const interactionManager = new InteractionManager(eventBus, viewManager);
    const toolManager = new ToolManager(eventBus);
    const projectManager = new ProjectManager(eventBus, objectManager);
    const rulerManager = new RulerManager(eventBus, viewManager);
    const uiManager = new UIManager(eventBus, objectManager, viewManager, scene);

    // --- TOOLS ---
    const selectTool = new SelectTool(eventBus, viewManager, objectManager, machineBrush);
    const lineTool = new LineTool(eventBus, viewManager, objectManager);
    const squareTool = new SquareTool(eventBus, viewManager, objectManager);
    const circleTool = new CircleTool(eventBus, viewManager, objectManager);
    toolManager.registerTool(selectTool);
    toolManager.registerTool(lineTool);
    toolManager.registerTool(squareTool);
    toolManager.registerTool(circleTool);
    
    // Select default tool
    toolManager.selectTool('select');

    // --- EVENT LISTENERS ---
    
    // Respond to requests from other modules about the active tool
    eventBus.on('request-active-tool-id', (callback: (id: string | null) => void) => {
        callback(toolManager.getActiveToolId());
    });

    eventBus.on('tool-selected', (id: string) => {
        if (id === 'brush_create') {
            // This needs currentBrushState, which is now in machine.ts.
            // We need a better way to handle this dependency. For now, we request it.
            eventBus.emit('request-brush-state-sync', (brushState: any) => {
                 if (brushState) {
                    // const radius = (brushState.diameter || 10) / 2;
                    // const height = brushState.length || 60;
                    // const brush = ShapeFactory.createBrush(radius, height);
                    // brush.position.set(0, height, 0);
                    // objectManager.addObject(brush);
                    // toolManager.selectTool('select');
                    // objectManager.selectObject(brush);
                    console.warn("Creating brush from UI not fully implemented after refactor. Needs ShapeFactory.");
                 }
            });
        }
    });

    eventBus.on('camera-change', () => {
        const cam = viewManager.getActiveCamera();
        if (cam) {
            HandleUtils.updateScales(scene, cam);
        }
    });
    const initialCam = viewManager.getActiveCamera();
    if (initialCam) {
        HandleUtils.updateScales(scene, initialCam);
    }

    eventBus.on('open-settings', () => {
        // Modal Overlay
        const overlay = document.createElement('div');
        Object.assign(overlay.style, {
            position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        });

        // Modal Container
        const modal = document.createElement('div');
        Object.assign(modal.style, {
            background: '#222', border: '1px solid #444', borderRadius: '8px',
            padding: '20px', width: '300px', color: 'white', fontFamily: 'sans-serif'
        });
        
        const title = document.createElement('h3');
        title.innerText = 'Einstellungen';
        title.style.marginTop = '0';
        modal.appendChild(title);

        // Background Color Picker
        const bgRow = document.createElement('div');
        bgRow.style.display = 'flex'; bgRow.style.justifyContent = 'space-between'; bgRow.style.marginBottom = '10px';
        const bgLabel = document.createElement('span'); bgLabel.innerText = 'Hintergrundfarbe:';
        const bgInput = document.createElement('input'); bgInput.type = 'color';
        let currentColor = '#333333';
        if (scene.background && scene.background instanceof THREE.Color) {
            currentColor = '#' + scene.background.getHexString();
        }
        bgInput.value = currentColor;
        bgInput.onchange = (e) => {
            scene.background = new THREE.Color((e.target as HTMLInputElement).value);
        };
        bgRow.appendChild(bgLabel); bgRow.appendChild(bgInput);
        modal.appendChild(bgRow);

        // Grid Color Picker
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex'; gridRow.style.justifyContent = 'space-between'; gridRow.style.marginBottom = '20px';
        const gridLabel = document.createElement('span'); gridLabel.innerText = 'Gitterfarbe:';
        const gridInput = document.createElement('input'); gridInput.type = 'color';
        gridInput.value = '#444444'; 
        gridInput.onchange = (e) => {
            eventBus.emit('settings-grid-color-changed', { color: (e.target as HTMLInputElement).value });
        };
        gridRow.appendChild(gridLabel); gridRow.appendChild(gridInput);
        modal.appendChild(gridRow);

        // Debug Console Button
        const debugRow = document.createElement('div');
        debugRow.style.marginBottom = '10px';
        const debugBtn = document.createElement('button');
        debugBtn.innerText = 'Debug-Konsole öffnen/schließen';
        Object.assign(debugBtn.style, {
            width: '100%', padding: '8px', background: '#333', color: '#aaa',
            border: '1px solid #555', borderRadius: '4px', cursor: 'pointer', fontSize: '13px'
        });
        debugBtn.onclick = () => {
            eventBus.emit('toggle-debug-console', null);
            document.body.removeChild(overlay);
        };
        debugRow.appendChild(debugBtn);
        modal.appendChild(debugRow);

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.innerText = 'Schließen';
        Object.assign(closeBtn.style, {
            width: '100%', padding: '8px', background: '#444', color: 'white',
            border: 'none', borderRadius: '4px', cursor: 'pointer'
        });
        closeBtn.onclick = () => document.body.removeChild(overlay);
        modal.appendChild(closeBtn);

        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    });

    console.log('UI module initialized.');

    return {
        interactionManager,
        toolManager,
        projectManager,
        rulerManager,
        uiManager
    };
}
