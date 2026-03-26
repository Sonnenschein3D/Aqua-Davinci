import './style.css'
import * as THREE from 'three';
import { EventBus } from './core/EventBus';
import { ViewManager } from './managers/ViewManager';
import { ObjectManager } from './managers/ObjectManager';
import { UIManager } from './managers/UIManager';
import { GridManager } from './managers/GridManager';
import { RulerManager } from './managers/RulerManager';
import { CustomAxesHelper } from './helpers/CustomAxesHelper';
import { InteractionManager } from './interaction/InteractionManager';
import { ToolManager } from './tools/ToolManager';
import { LineTool } from './tools/LineTool';
import { SelectTool } from './tools/SelectTool';
import { SquareTool } from './tools/SquareTool';
import { CircleTool } from './tools/CircleTool';
import { ProjectManager } from './managers/ProjectManager'; // New import
import { ShapeFactory } from './geometries/ShapeFactory'; // New import
import { HandleUtils } from './helpers/HandleUtils'; // New import
import { Robot } from './core/Robot'; // CNC Robot
import { GcodeExporter } from './cam/gcodeExporter'; // CNC G-Code
import { ImageProcessor } from './image-processing/imageProcessor'; // Image Analysis
import { DavinciPinsel1 } from './ui/DavinciPinsel1'; // Global Machine Brush

// Main Application setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);

// --- ROBOT / CNC SETUP ---
const robot = new Robot("192.168.1.123"); // Placeholder IP
let generatedGcode: string | null = null;
const machineBrush = new DavinciPinsel1(scene);
machineBrush.setVisible(false); // Startet unsichtbar

let currentBrushState: any = {
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

// Add some lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(50, 100, 70); 
scene.add(dirLight);

// Helper Grid
const customAxes = new CustomAxesHelper(1);
scene.add(customAxes);

// Initialize Core & Managers
const eventBus = new EventBus();
const objectManager = new ObjectManager(eventBus, scene);
const viewManager = new ViewManager(eventBus, 'app', scene); 
const interactionManager = new InteractionManager(eventBus, viewManager);
const toolManager = new ToolManager(eventBus);
const projectManager = new ProjectManager(eventBus, objectManager);

// Visual Managers
const gridManager = new GridManager(eventBus, viewManager, scene);
const rulerManager = new RulerManager(eventBus, viewManager);

// --- CNC Event Listeners ---
eventBus.on('request-brush-state-sync', (callback: Function) => {
    callback(currentBrushState);
});

const defaultBrushProfile = () => ({
    p1: new THREE.Vector2(0, 0),
    cp1: new THREE.Vector2(10, -15),
    cp2: new THREE.Vector2(15, -45),
    p0: new THREE.Vector2(0, -60)
});

eventBus.on('load-brush-state', (state: any) => {
    if (!state) return;
    Object.assign(currentBrushState, state);
    
    // Vector2 Objekte aus JSON-Daten wiederherstellen oder auf Standard zurücksetzen
    if (state.bezierProfile === null) {
        // Reset to default
        currentBrushState.bezierProfile = defaultBrushProfile();
    } else if (state.bezierProfile) {
        // Load from profile
        currentBrushState.bezierProfile = {
            p1: new THREE.Vector2(state.bezierProfile.p1.x, state.bezierProfile.p1.y),
            cp1: new THREE.Vector2(state.bezierProfile.cp1.x, state.bezierProfile.cp1.y),
            cp2: new THREE.Vector2(state.bezierProfile.cp2.x, state.bezierProfile.cp2.y),
            p0: new THREE.Vector2(state.bezierProfile.p0.x, state.bezierProfile.p0.y),
        };
    }
    
    machineBrush.update(currentBrushState, brushPos);
    
    // UI ggf. benachrichtigen, falls offen
    eventBus.emit('brush-state-changed', currentBrushState);
});

eventBus.on('brush-state-changed', (state: any) => {
    Object.assign(currentBrushState, state);
    
    // Sofortige Sichtbarkeitsprüfung
    const activeTool = toolManager.getActiveToolId();
    const isDrawing = activeTool && activeTool !== 'select';
    
    if (isDrawing || !currentBrushState.showMachineBrush) {
        machineBrush.setVisible(false);
    } else {
        machineBrush.setVisible(true);
        machineBrush.update(currentBrushState, brushPos);
    }
});

eventBus.on('save-brush-profile', (obj: THREE.Object3D) => {
    // Extrahiere Bézier-Daten aus dem Objekt
    const rawSegments = obj.children.filter(c => c.userData.type === 'bezier_line');
    if (rawSegments.length > 0) {
        const seg = rawSegments[0]; 
        const nodes = seg.userData.nodes;
        const helpers = seg.userData.helpers;

        if (nodes && helpers) {
            // Konvertiere in unser 2D-Profil-Format
            // p1 = Schaft (Startpunkt der Kurve)
            // p0 = Spitze (Endpunkt der Kurve)
            const p1 = new THREE.Vector2(nodes.start.position.x, nodes.start.position.y);
            const cp1 = new THREE.Vector2(helpers.cp1.position.x, helpers.cp1.position.y);
            const cp2 = new THREE.Vector2(helpers.cp2.position.x, helpers.cp2.position.y);
            const p0 = new THREE.Vector2(nodes.end.position.x, nodes.end.position.y);

            currentBrushState.bezierProfile = { p1, cp1, cp2, p0 };
            currentBrushState.color = '#' + (obj.userData.materialParams?.color || 'cccccc').replace('#', '');
            currentBrushState.isProfileActive = true;
            
            machineBrush.update(currentBrushState, brushPos);
            
            // Falls Checkbox aktiv, sofort anzeigen
            if (currentBrushState.showMachineBrush) {
                machineBrush.setVisible(true);
            }
        }
    }
});

eventBus.on('interaction-pointer-move', (event: any) => {
    // Nur ausblenden, wenn ein spezielles Werkzeug (außer Selektion) aktiv ist
    const activeTool = toolManager.getActiveToolId();
    const isDrawing = activeTool && activeTool !== 'select';

    // Anzeige nur wenn: Profil aktiv UND Checkbox "Pinsel anzeigen" gesetzt UND kein Zeichenwerkzeug aktiv
    if (isDrawing || !currentBrushState.showMachineBrush) {
        machineBrush.setVisible(false);
        return;
    }
    machineBrush.setVisible(true);

    if (event.intersection) {
        // Die Welt-Position der Maus (abhängig von der Ansicht via InteractionManager)
        const tx = event.intersection.x;
        const ty = event.intersection.y;
        const tz = event.intersection.z;

        // Bestimme die Höhe (targetH)
        let targetH = 30;
        const activeView = viewManager.getActiveView();

        if (activeView === 'PERSPECTIVE') {
            // In Perspektive: Vertikale Mausposition auf dem Bildschirm steuert Druck
            targetH = (event.pointer.y + 1) * 30; 
        } else if (activeView === 'TOP') {
            // In Top-Ansicht: Feste Standardhöhe oder Steuerung via Bildschirm
            targetH = (event.pointer.y + 1) * 30;
        } else {
            // In Front/Links-Ansicht: Die Höhe ist direkt der Y-Wert der Maus-Intersection!
            targetH = ty;
        }

        lastBrushPos.copy(brushPos);
        brushPos.set(tx, targetH, tz);

        // Berechne rohes Delta
        const rawDelta = new THREE.Vector3().subVectors(brushPos, lastBrushPos);
        rawDelta.y = 0; // Vertikale Bewegung ignorieren
        
        // Stabilisierung: Nur signifikante Bewegungen beachten, um Zittern zu vermeiden
        if (rawDelta.length() < 0.01) {
            rawDelta.set(0,0,0);
        }

        // Glättung (Smoothing): Etwas träger für mehr Richtungsstabilität
        smoothedDelta.lerp(rawDelta, 0.15); 
        
        const currentDelta = smoothedDelta.clone();
        currentDelta.multiplyScalar(2.0); // Etwas mehr Kraft
        currentDelta.clampLength(0, 20);

        // Die gesamte Gruppe sitzt auf der Höhe des Roboterarms (targetH)
        machineBrush.group.position.set(tx, targetH, tz);
        
        // Update das Pinsel-Mesh mit dem stabilisierten Delta
        machineBrush.update(currentBrushState, brushPos, currentDelta);
    }
});

// Initial machine brush update (bleibt unsichtbar)
machineBrush.update(currentBrushState, brushPos);

eventBus.on('cnc-generate-gcode', () => {
    // In the future, this would take the scene objects from objectManager
    console.log("Generating G-Code...");
    generatedGcode = GcodeExporter.generate();
    console.log("--- Generated G-Code ---");
    console.log(generatedGcode);
    alert("G-Code wurde in der Konsole ausgegeben.");
});

eventBus.on('cnc-start-painting', () => {
    if (generatedGcode) {
        console.log("Starting painting process...");
        robot.paint(generatedGcode);
        alert("Malprozess wurde gestartet (siehe Konsole für Details).");
    } else {
        alert("Bitte zuerst G-Code generieren!");
        console.warn("Paint process aborted: No G-Code generated yet.");
    }
});


// --- Image Analysis Event Listener ---
eventBus.on('image-analysis-start', async (data: { layers: number, columns?: number }) => {
    console.log("Image analysis event triggered with layers:", data.layers);
    // Always find the original background image to prevent cumulative offsetting
    const originalBgObject = objectManager.getObjects().find(o => o.name === 'Background Image');

    if (!originalBgObject) {
        console.error("DEBUG: Could not find the original 'Background Image' to analyze.");
        alert("Fehler: Originales Hintergrundbild nicht gefunden!");
        return;
    }

    console.log(`DEBUG: Found original background image: '${originalBgObject.name}'. Starting analysis.`);
    
    const mesh = originalBgObject.children.find(c => c instanceof THREE.Mesh) as THREE.Mesh;
    if (!mesh || !(mesh.material instanceof THREE.MeshBasicMaterial) || !mesh.material.map) {
        console.error("Invalid background image object for analysis.");
        return;
    }

    const imageElement = mesh.material.map.image as HTMLImageElement;
    if (!imageElement) {
        console.error("No image data found in texture.");
        return;
    }

    try {
        const layerTextures = await ImageProcessor.process(imageElement, data.layers);
        const previousLayers = objectManager.getObjects().filter(o => o.name.startsWith('Analyse-Schicht'));
        previousLayers.forEach(layer => objectManager.removeObject(layer));

        const imgWidth = originalBgObject.userData.baseSize.width;
        const imgHeight = originalBgObject.userData.baseSize.height;
        const gap = 10; // 10 units gap between layers

        const cols = data.columns || 1;

        // Calculate the total width of the grid
        const totalWidth = cols * imgWidth + (cols - 1) * gap;

        // Calculate starting offset to center the grid relative to the original image's position
        // Assuming the original image is positioned at its center
        const startX = originalBgObject.position.x - (totalWidth / 2) + (imgWidth / 2);
        // Position the grid *below* the original image (along the Z/Y axis depending on orientation). 
        // Background images are usually on XZ plane. So we offset along Z.
        // In Three.js Top view (XZ plane), +Z is "Down" on the screen.
        // To place the grid below the original, we start at original.z + offset and increment.
        const startZ = originalBgObject.position.z + (imgHeight / 2) + gap + (imgHeight / 2);

        layerTextures.forEach((texture, index) => {
            const layerObject = ShapeFactory.createBackgroundImage(texture, imgWidth, imgHeight);
            if (layerObject) {
                layerObject.name = `Analyse-Schicht ${index + 1}`;
                
                const col = index % cols;
                const row = Math.floor(index / cols);

                // Calculate position for this specific layer in the grid
                const xPos = startX + col * (imgWidth + gap);
                const zPos = startZ + row * (imgHeight + gap);

                layerObject.position.set(xPos, originalBgObject.position.y, zPos);
                // Slight Z-offset just in case they overlap with something else, but they are in a grid now
                layerObject.position.y += (index + 1) * 0.1; 

                const layerMesh = layerObject.children.find(c => c instanceof THREE.Mesh) as THREE.Mesh;
                if(layerMesh && layerMesh.material instanceof THREE.MeshBasicMaterial) {
                    layerMesh.material.color.set(0x000000);
                    layerMesh.material.transparent = true;
                }
                objectManager.addObject(layerObject);
            }
        });
    } catch (error) {
        console.error("Image analysis failed:", error);
    }
});

// Handle Background Image Creation
eventBus.on('create-background-image', (data: { texture: THREE.Texture, width: number, height: number }) => {
    const bgObject = ShapeFactory.createBackgroundImage(data.texture, data.width, data.height);
    if (bgObject) {
        bgObject.name = 'Background Image';
        objectManager.addObject(bgObject);
        viewManager.focusOnObject(bgObject);
    }
});

eventBus.on('add-mesh-to-scene', (mesh: THREE.Object3D) => {
    objectManager.addObject(mesh);
    toolManager.selectTool('select');
    objectManager.selectObject(mesh);
});


// Update axes scale on camera change
eventBus.on('camera-change', () => {
    const cam = viewManager.getActiveCamera();
    if (cam) {
        customAxes.update(cam);
        HandleUtils.updateScales(scene, cam);
    }
});
// Initial update
const initialCam = viewManager.getActiveCamera();
if (initialCam) {
    customAxes.update(initialCam);
    HandleUtils.updateScales(scene, initialCam);
}

// Settings
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
    // Use a default reasonable value for UI, e.g. #444444 
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

// Tools
const selectTool = new SelectTool(eventBus, viewManager, objectManager, machineBrush);
const lineTool = new LineTool(eventBus, viewManager, objectManager);
const squareTool = new SquareTool(eventBus, viewManager, objectManager);
const circleTool = new CircleTool(eventBus, viewManager, objectManager);
toolManager.registerTool(selectTool);
toolManager.registerTool(lineTool);
toolManager.registerTool(squareTool);
toolManager.registerTool(circleTool);

eventBus.on('tool-selected', (id: string) => {
    if (id === 'brush_create') {
        const radius = (currentBrushState.diameter || 10) / 2;
        const height = currentBrushState.length || 60;
        
        const brush = ShapeFactory.createBrush(radius, height);
        
        // Positioniere den Pinsel so, dass die Spitze auf y=0 steht
        // Da der Anker oben bei 0 ist und die Geometrie nach -height geht:
        brush.position.set(0, height, 0);
        
        objectManager.addObject(brush);
        toolManager.selectTool('select');
        objectManager.selectObject(brush);
    }
});

// Select default
toolManager.selectTool('select');

// UIManager
const uiManager = new UIManager(eventBus, objectManager, viewManager, scene);

// Expose for debugging
(window as any).app = {
    scene,
    eventBus,
    objectManager,
    viewManager,
    toolManager,
    uiManager,
    interactionManager,
    gridManager,
    rulerManager,
    projectManager,
    robot // Expose robot instance
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
    const gm = (window as any).app.gridManager;
    if (gm && gm.gridFine) {
        console.log("Grid Fine Pos:", gm.gridFine.position.x, gm.gridFine.position.y, gm.gridFine.position.z);
        console.log("Grid Fine Rot:", gm.gridFine.rotation.x, gm.gridFine.rotation.y, gm.gridFine.rotation.z);
        console.log("Grid Fine RenderOrder:", gm.gridFine.renderOrder);
    }
    console.log("--- END DUMP ---");
};

console.log('Konstruktion app started (Modular Rebuild Fixed)');
