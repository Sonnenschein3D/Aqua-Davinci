import { EventBus } from '../core/EventBus';
import { ObjectManager } from '../managers/ObjectManager';
import { ViewManager } from '../managers/ViewManager';
import { ToolManager } from '../tools/ToolManager';
import { ShapeFactory } from '../geometries/ShapeFactory';
import { ImageProcessor } from '../image-processing/imageProcessor';
import * as THREE from 'three';

export function setupImageProcessing(
    eventBus: EventBus,
    objectManager: ObjectManager,
    viewManager: ViewManager,
    toolManager: ToolManager
) {

    eventBus.on('image-analysis-start', async (data: { layers: number, columns?: number }) => {
        console.log("Image analysis event triggered with layers:", data.layers);
        const originalBgObject = objectManager.getObjects().find(o => o.name === 'Background Image');

        if (!originalBgObject) {
            alert("Fehler: Originales Hintergrundbild nicht gefunden!");
            return;
        }
        
        const mesh = originalBgObject.children.find(c => c instanceof THREE.Mesh) as THREE.Mesh;
        if (!mesh || !(mesh.material instanceof THREE.MeshBasicMaterial) || !mesh.material.map) {
            console.error("Invalid background image object for analysis.");
            return;
        }

        const imageElement = mesh.material.map.image as HTMLImageElement;
        if (!imageElement) return;

        try {
            // Hier könnten zukünftig die Bildfilter angewendet werden, bevor `process` aufgerufen wird.
            const layerTextures = await ImageProcessor.process(imageElement, data.layers);
            
            // Alte Analyse-Schichten entfernen
            const previousLayers = objectManager.getObjects().filter(o => o.name.startsWith('Analyse-Schicht'));
            previousLayers.forEach(layer => objectManager.removeObject(layer));

            // Grid-Layout berechnen
            const imgWidth = originalBgObject.userData.baseSize.width;
            const imgHeight = originalBgObject.userData.baseSize.height;
            const gap = 10;
            const cols = data.columns || 1;
            const totalWidth = cols * imgWidth + (cols - 1) * gap;
            const startX = originalBgObject.position.x - (totalWidth / 2) + (imgWidth / 2);
            const startZ = originalBgObject.position.z + (imgHeight / 2) + gap + (imgHeight / 2);

            // Neue Schichten erstellen
            layerTextures.forEach((texture, index) => {
                const layerObject = ShapeFactory.createBackgroundImage(texture, imgWidth, imgHeight);
                if (layerObject) {
                    layerObject.name = `Analyse-Schicht ${index + 1}`;
                    const col = index % cols;
                    const row = Math.floor(index / cols);
                    const xPos = startX + col * (imgWidth + gap);
                    const zPos = startZ + row * (imgHeight + gap);
                    layerObject.position.set(xPos, originalBgObject.position.y, zPos);
                    layerObject.position.y += (index + 1) * 0.1; // Slight z-fighting prevention
                    objectManager.addObject(layerObject);
                }
            });
        } catch (error) {
            console.error("Image analysis failed:", error);
        }
    });

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

    console.log('Image Processing module initialized.');
}
