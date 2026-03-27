import * as THREE from 'three';

export class GizmoHelper {
    public static createTranslateGizmo(): THREE.Object3D {
        const gizmo = new THREE.Group();
        gizmo.userData.isGizmo = true;
        gizmo.userData.mode = 'translate';

        const arrowRadius = 0.4; 
        const pickRadius = 5.0; 
        const arrowLen = 20.0;
        const headRadius = 2.0;
        const headLen = 6.0;
        const planeSize = 6.0; // Reduced from 12.0 to make axes easier to pick

        const createAxis = (axis: 'x' | 'y' | 'z', color: number, labelText: string) => {
            const group = new THREE.Group();
            
            const lineGeo = new THREE.CylinderGeometry(arrowRadius, arrowRadius, arrowLen, 8);
            lineGeo.translate(0, arrowLen / 2, 0);
            
            const coneGeo = new THREE.ConeGeometry(headRadius, headLen, 16);
            coneGeo.translate(0, arrowLen + headLen / 2, 0);

            const pickStart = planeSize; 
            const totalLen = arrowLen + headLen;
            const pickLen = totalLen - pickStart;
            
            const pickGeo = new THREE.CylinderGeometry(pickRadius, pickRadius, pickLen, 8);
            pickGeo.translate(0, pickStart + pickLen / 2, 0);
            
            const pickMesh = new THREE.Mesh(pickGeo, new THREE.MeshBasicMaterial({ visible: false, transparent: true, opacity: 0 }));
            pickMesh.userData = { axis, mode: 'translate' };

            const mat = new THREE.MeshBasicMaterial({ color, depthTest: false, depthWrite: false, transparent: true, opacity: 1.0 });
            
            const line = new THREE.Mesh(lineGeo, mat);
            const cone = new THREE.Mesh(coneGeo, mat);
            line.userData = { axis, mode: 'translate' };
            cone.userData = { axis, mode: 'translate' };
            
            line.renderOrder = 100;
            cone.renderOrder = 100;

            group.add(line);
            group.add(cone);
            group.add(pickMesh);

            const label = this.createLabel(labelText, '#' + new THREE.Color(color).getHexString());
            label.position.set(0, totalLen + 4, 0);
            label.userData = { axis, mode: 'translate' };
            label.renderOrder = 100;
            group.add(label);

            if (axis === 'x') group.rotateZ(-Math.PI / 2);
            if (axis === 'z') group.rotateX(Math.PI / 2);

            return group;
        };

        gizmo.add(createAxis('x', 0xff4444, 'X'));
        gizmo.add(createAxis('y', 0x44ff44, 'Y'));
        gizmo.add(createAxis('z', 0x6666ff, 'Z'));

        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(planeSize, 0);
        shape.lineTo(0, planeSize);
        shape.lineTo(0, 0);
        
        const createPlane = (axis: string, color: number, rotation?: {x?: number, y?: number}) => {
            const group = new THREE.Group();
            const geo = new THREE.ShapeGeometry(shape);
            
            if (rotation?.x) geo.rotateX(rotation.x);
            if (rotation?.y) geo.rotateY(rotation.y);

            // Make planes slightly visible (opacity 0.2) to show they are interactive
            const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.2, depthTest: false });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.renderOrder = 99;
            mesh.userData = { axis, mode: 'translate' };
            
            const hypoPoints = [new THREE.Vector2(planeSize, 0), new THREE.Vector2(0, planeSize)];
            const lineGeo = new THREE.BufferGeometry().setFromPoints(hypoPoints);
            if (rotation?.x) lineGeo.rotateX(rotation.x);
            if (rotation?.y) lineGeo.rotateY(rotation.y);
            const lineMat = new THREE.LineBasicMaterial({ color: color, depthTest: false, transparent: true, opacity: 0.4 }); // Slightly show border line
            const line = new THREE.Line(lineGeo, lineMat);
            line.renderOrder = 99;
            line.userData = { axis, noPick: true };

            group.add(mesh);
            group.add(line);
            return group;
        };

        gizmo.add(createPlane('xz', 0xffff00, { x: Math.PI / 2 }));
        gizmo.add(createPlane('xy', 0xffff00));
        gizmo.add(createPlane('zy', 0xffff00, { y: Math.PI / 2 }));

        return gizmo;
    }

    public static createRotateGizmo(): THREE.Object3D {
        const gizmo = new THREE.Group();
        gizmo.userData.isGizmo = true;
        gizmo.userData.mode = 'rotate';

        const radius = 30.0; 
        const tube = 0.5;
        const pickTube = 4.0;

        const createRing = (axis: 'x' | 'y' | 'z', color: number) => {
            const group = new THREE.Group();
            
            const geo = new THREE.TorusGeometry(radius, tube, 8, 64);
            const mat = new THREE.MeshBasicMaterial({ color, depthTest: false, transparent: true, opacity: 1.0 });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.renderOrder = 100;
            mesh.userData = { axis, mode: 'rotate' };

            const pickGeo = new THREE.TorusGeometry(radius, pickTube, 8, 32);
            const pickMat = new THREE.MeshBasicMaterial({ visible: false, transparent: true, opacity: 0 });
            const pickMesh = new THREE.Mesh(pickGeo, pickMat);
            pickMesh.userData = { axis, mode: 'rotate' };

            group.add(mesh);
            group.add(pickMesh);

            if (axis === 'x') group.rotateY(Math.PI / 2);
            if (axis === 'y') group.rotateX(Math.PI / 2);

            return group;
        }

        gizmo.add(createRing('x', 0xff4444));
        gizmo.add(createRing('y', 0x44ff44));
        gizmo.add(createRing('z', 0x6666ff));

        return gizmo;
    }

    private static createLabel(text: string, color: string): THREE.Sprite {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = 'white'; 
        ctx.font = 'Bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true, color: new THREE.Color(color) });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(6, 6, 1); 
        return sprite;
    }
}
