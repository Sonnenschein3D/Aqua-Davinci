import * as THREE from 'three';

export class CustomAxesHelper extends THREE.Object3D {
    constructor(size: number = 1) {
        super();
        this.initAxes(size);
    }

    private initAxes(size: number) {
        const origin = new THREE.Vector3(0, 0, 0);

        // X Axis (Red)
        const dirX = new THREE.Vector3(1, 0, 0);
        const arrowX = new THREE.ArrowHelper(dirX, origin, size, 0xff0000, 0.2 * size, 0.1 * size);
        this.makeOnTop(arrowX);
        this.add(arrowX);
        this.addLabel(size + 0.1 * size, 0, 0, 'X', 'red');

        // Y Axis (Green)
        const dirY = new THREE.Vector3(0, 1, 0);
        const arrowY = new THREE.ArrowHelper(dirY, origin, size, 0x00ff00, 0.2 * size, 0.1 * size);
        this.makeOnTop(arrowY);
        this.add(arrowY);
        this.addLabel(0, size + 0.1 * size, 0, 'Y', 'green');

        // Z Axis (Blue)
        const dirZ = new THREE.Vector3(0, 0, 1);
        const arrowZ = new THREE.ArrowHelper(dirZ, origin, size, 0x6666ff, 0.2 * size, 0.1 * size);
        this.makeOnTop(arrowZ);
        this.add(arrowZ);
        this.addLabel(0, 0, size + 0.1 * size, 'Z', '#6666ff');
    }

    private makeOnTop(arrow: THREE.ArrowHelper) {
        // Replace materials with fresh instances so all settings are correct from the first compile.
        if (arrow.line) {
            arrow.line.renderOrder = 999;
            const prevLineMat = arrow.line.material as THREE.LineBasicMaterial;
            arrow.line.material = new THREE.LineBasicMaterial({
                color: prevLineMat.color,
                depthTest: false,
                depthWrite: false,
                transparent: true,
                opacity: 1.0,
                toneMapped: false,
            });
            prevLineMat.dispose();
        }

        if (arrow.cone) {
            arrow.cone.renderOrder = 999;
            const prevConeMat = arrow.cone.material as THREE.MeshBasicMaterial;
            arrow.cone.material = new THREE.MeshBasicMaterial({
                color: prevConeMat.color,
                depthTest: false,
                depthWrite: false,
                transparent: true,
                opacity: 1.0,
                toneMapped: false,
            });
            prevConeMat.dispose();
        }
    }

    private addLabel(x: number, y: number, z: number, text: string, color: string) {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        if (context) {
            context.font = 'Bold 48px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = color;
            context.fillText(text, 32, 32);
        }

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            depthTest: false, // Ensure label is always visible
            depthWrite: false 
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(x, y, z);
        sprite.scale.set(0.5, 0.5, 1);
        this.add(sprite);
    }

    public update(camera: THREE.Camera) {
        let factor = 1;
        // Adjust these constants to change the visual size of the axes
        const perspectiveFactor = 0.04; // Reduced from 0.08
        const orthoFactor = 50.0;    // Increased to make visible in ViewManager (viewSize=500)

        if (camera instanceof THREE.PerspectiveCamera) {
             const dist = this.position.distanceTo(camera.position);
             factor = dist * perspectiveFactor;
        } else if (camera instanceof THREE.OrthographicCamera) {
             factor = (1 / camera.zoom) * orthoFactor;
        }
        
        // Prevent it from becoming too small
        factor = Math.max(0.1, factor);
        
        this.scale.set(factor, factor, factor);
    }
}
