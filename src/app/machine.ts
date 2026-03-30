
import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ViewManager } from '../managers/ViewManager';
import { Robot } from '../core/Robot';
import { DavinciPinsel1 } from '../ui/DavinciPinsel1';
import { CustomAxesHelper } from '../helpers/CustomAxesHelper';
import { GridManager } from '../managers/GridManager';
import { ToolManager } from '../tools/ToolManager';

// Define the structure for the brush state
interface BrushState {
    type: string;
    diameter: number;
    length: number;
    color: string;
    transparency: number;
    isProfileActive: boolean;
    showMachineBrush: boolean;
    bezierProfile: any; 
}

export function setupMachine(
    scene: THREE.Scene,
    eventBus: EventBus,
    viewManager: ViewManager
) {
    // --- ROBOT / CNC SETUP ---
    const robot = new Robot("192.168.1.123"); // Placeholder IP
    const machineBrush = new DavinciPinsel1(scene);
    machineBrush.setVisible(false); // Start invisible

    let currentBrushState: BrushState = {
        type: 'Rundpinsel',
        diameter: 10,
        length: 30,
        color: '#cccccc',
        transparency: 0.8,
        isProfileActive: false,
        showMachineBrush: false,
        bezierProfile: null
    };

    const brushPos = new THREE.Vector3(0, 30, 0);
    const lastBrushPos = new THREE.Vector3(0, 30, 0);
    const smoothedDelta = new THREE.Vector3(0, 0, 0);

    // --- LIGHTS AND HELPERS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(50, 100, 70);
    scene.add(dirLight);

    const customAxes = new CustomAxesHelper(1);
    scene.add(customAxes);
    new GridManager(eventBus, viewManager, scene);

    // --- EVENT LISTENERS ---

    const defaultBrushProfile = () => ({
        p1: new THREE.Vector2(0, 0),
        cp1: new THREE.Vector2(10, -15),
        cp2: new THREE.Vector2(15, -45),
        p0: new THREE.Vector2(0, -60)
    });

    eventBus.on('request-brush-state-sync', (callback: Function) => {
        callback(currentBrushState);
    });

    eventBus.on('load-brush-state', (state: any) => {
        if (!state) return;
        Object.assign(currentBrushState, state);

        if (state.bezierProfile === null) {
            currentBrushState.bezierProfile = defaultBrushProfile();
        } else if (state.bezierProfile) {
            currentBrushState.bezierProfile = {
                p1: new THREE.Vector2(state.bezierProfile.p1.x, state.bezierProfile.p1.y),
                cp1: new THREE.Vector2(state.bezierProfile.cp1.x, state.bezierProfile.cp1.y),
                cp2: new THREE.Vector2(state.bezierProfile.cp2.x, state.bezierProfile.cp2.y),
                p0: new THREE.Vector2(state.bezierProfile.p0.x, state.bezierProfile.p0.y),
            };
        }
        
        machineBrush.update(currentBrushState, brushPos);
        eventBus.emit('brush-state-changed', currentBrushState);
    });

    eventBus.on('brush-state-changed', (state: Partial<BrushState>) => {
        Object.assign(currentBrushState, state);

        // Ask the UI module for the active tool
        eventBus.emit('request-active-tool-id', (activeToolId: string | null) => {
            const isDrawing = activeToolId && activeToolId !== 'select';

            if (isDrawing || !currentBrushState.showMachineBrush) {
                machineBrush.setVisible(false);
            } else {
                machineBrush.setVisible(true);
                machineBrush.update(currentBrushState, brushPos);
            }
        });
    });

    eventBus.on('save-brush-profile', (obj: THREE.Object3D) => {
        const rawSegments = obj.children.filter(c => c.userData.type === 'bezier_line');
        if (rawSegments.length > 0) {
            const seg = rawSegments[0];
            const nodes = seg.userData.nodes;
            const helpers = seg.userData.helpers;

            if (nodes && helpers) {
                const p1 = new THREE.Vector2(nodes.start.position.x, nodes.start.position.y);
                const cp1 = new THREE.Vector2(helpers.cp1.position.x, helpers.cp1.position.y);
                const cp2 = new THREE.Vector2(helpers.cp2.position.x, helpers.cp2.position.y);
                const p0 = new THREE.Vector2(nodes.end.position.x, nodes.end.position.y);

                currentBrushState.bezierProfile = { p1, cp1, cp2, p0 };
                currentBrushState.color = '#' + (obj.userData.materialParams?.color || 'cccccc').replace('#', '');
                currentBrushState.isProfileActive = true;

                machineBrush.update(currentBrushState, brushPos);
                if (currentBrushState.showMachineBrush) {
                    machineBrush.setVisible(true);
                }
            }
        }
    });

    eventBus.on('interaction-pointer-move', (event: any) => {
        eventBus.emit('request-active-tool-id', (activeToolId: string | null) => {
            const isDrawing = activeToolId && activeToolId !== 'select';

            if (isDrawing || !currentBrushState.showMachineBrush) {
                machineBrush.setVisible(false);
                return;
            }
            machineBrush.setVisible(true);

            if (event.intersection) {
                const { x: tx, y: ty, z: tz } = event.intersection;
                let targetH = 30;
                const activeView = viewManager.getActiveView();

                if (activeView === 'PERSPECTIVE' || activeView === 'TOP') {
                    targetH = (event.pointer.y + 1) * 30;
                } else {
                    targetH = ty;
                }

                lastBrushPos.copy(brushPos);
                brushPos.set(tx, targetH, tz);

                const rawDelta = new THREE.Vector3().subVectors(brushPos, lastBrushPos);
                rawDelta.y = 0;

                if (rawDelta.length() < 0.01) {
                    rawDelta.set(0, 0, 0);
                }

                smoothedDelta.lerp(rawDelta, 0.15);
                const currentDelta = smoothedDelta.clone().multiplyScalar(2.0).clampLength(0, 20);

                machineBrush.group.position.set(tx, targetH, tz);
                machineBrush.update(currentBrushState, brushPos, currentDelta);
            }
        });
    });

    eventBus.on('camera-change', () => {
        const cam = viewManager.getActiveCamera();
        if (cam) {
            customAxes.update(cam);
        }
    });
    
    // Initial updates
    const initialCam = viewManager.getActiveCamera();
    if (initialCam) {
        customAxes.update(initialCam);
    }
    machineBrush.update(currentBrushState, brushPos);

    console.log('Machine and Simulation module initialized.');
    
    // Return robot instance and the brush for other modules
    return { robot, machineBrush };
}
