import * as THREE from 'three';

/**
 * @class ImageProcessor
 * Verantwortlich für die Analyse und Verarbeitung von Bilddateien.
 * Wandelt Rastergrafiken in eine für den Roboter verständliche Form um (z.B. Vektorpfade, Farbschichten).
 */
export class ImageProcessor {

    /**
     * Zerlegt ein Bild in eine definierte Anzahl von Graustufen-Schichten.
     * @param {HTMLImageElement} image - Das zu analysierende Bild.
     * @param {number} numLayers - Die Anzahl der zu erstellenden Graustufen-Schichten (z.B. 4).
     * @returns {Promise<THREE.Texture[]>} Ein Array von Texturen, jede Textur eine Schicht.
     */
    public static async process(image: HTMLImageElement, numLayers: number): Promise<THREE.Texture[]> {
        // 1. Bild auf einen internen Canvas zeichnen, um an Pixel zu kommen
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return [];
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // 2. Schwellenwert-basierte Zerlegung (Bucket-Methode)
        // Wir teilen den Bereich von 0 bis 255 in numLayers Bereiche auf.
        const layerTextures: THREE.Texture[] = [];
        const step = 255 / numLayers;

        for (let l = 0; l < numLayers; l++) {
            const minThreshold = l * step;
            const maxThreshold = (l + 1) * step;

            const layerCanvas = document.createElement('canvas');
            layerCanvas.width = canvas.width;
            layerCanvas.height = canvas.height;
            const layerCtx = layerCanvas.getContext('2d');
            if (!layerCtx) continue;

            const layerImageData = layerCtx.createImageData(canvas.width, canvas.height);
            const layerPixels = layerImageData.data;

            for (let i = 0; i < pixels.length; i += 4) {
                const r = pixels[i];
                const g = pixels[i + 1];
                const b = pixels[i + 2];
                const a = pixels[i + 3];

                // Umrechnung in Graustufen (Luminanz-Methode)
                const gray = 0.299 * r + 0.587 * g + 0.114 * b;

                // Falls der Pixel in den aktuellen Intensitätsbereich fällt UND nicht weiß/transparent ist
                // Wir ignorieren alles, was sehr hell ist (> 250), da dies meist der Hintergrund ist.
                if (a > 10 && gray < 250) {
                    if (gray >= minThreshold && gray < maxThreshold) {
                        layerPixels[i] = 0;
                        layerPixels[i + 1] = 0;
                        layerPixels[i + 2] = 0;
                        layerPixels[i + 3] = 255; 
                    }
                }
            }
            layerCtx.putImageData(layerImageData, 0, 0);
            
            const texture = new THREE.CanvasTexture(layerCanvas);
            layerTextures.push(texture);
        }

        console.log(`Image processed into ${layerTextures.length} layers using thresholding.`);
        return layerTextures;

        console.log(`Image processed into ${layerTextures.length} layers.`);
        return layerTextures;
    }
}
