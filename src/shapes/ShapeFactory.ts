import * as THREE from 'three';

export type ShapeType = 'line' | 'square' | 'circle';

export class ShapeFactory {
    static createShape(type: ShapeType, position: THREE.Vector3): THREE.Object3D | null {
        let object: THREE.Object3D | null = null;
        
        switch (type) {
            case 'line':
                // Default line centered at position, length 2
                object = this.createLineFromPoints(
                    new THREE.Vector3(position.x - 1, 0, position.z),
                    new THREE.Vector3(position.x + 1, 0, position.z)
                );
                break;
            case 'square':
                object = this.createSquare();
                if (object) object.position.copy(position);
                break;
            case 'circle':
                object = this.createCircle();
                if (object) object.position.copy(position);
                break;
        }

        if (object) {
            object.userData.type = type;
            this.addAnchor(object);
        }

        return object;
    }

    static createLineFromPoints(start: THREE.Vector3, end: THREE.Vector3): THREE.Object3D {
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        
        // Center the object
        const center = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        line.position.copy(center);
        
        // Local points
        const localStart = new THREE.Vector3().subVectors(start, center);
        const localEnd = new THREE.Vector3().subVectors(end, center);
        geometry.setFromPoints([localStart, localEnd]);
        
        return line;
    }

    private static addAnchor(parent: THREE.Object3D) {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
        const anchor = new THREE.Mesh(geometry, material);
        anchor.userData.isAnchor = true;
        parent.add(anchor);
    }

    private static createSquare(): THREE.Object3D {
        // 2D Square using LineLoop for clean outline
        const size = 1; // Half size (width=2)
        const points = [];
        points.push(new THREE.Vector3(-size, 0, -size));
        points.push(new THREE.Vector3(size, 0, -size));
        points.push(new THREE.Vector3(size, 0, size));
        points.push(new THREE.Vector3(-size, 0, size));
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0x00aaff });
        return new THREE.LineLoop(geometry, material);
    }

    private static createCircle(): THREE.Object3D {
        // Circle using LineLoop
        const segments = 64;
        const radius = 1;
        const points = [];
        for (let i = 0; i < segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0xffaa00 });
        return new THREE.LineLoop(geometry, material);
    }
}