import * as THREE from 'three';
import { ShapeUtils } from '../ShapeUtils';

export class BackgroundImageShape {
    public static create(texture: THREE.Texture, width: number, height: number): THREE.Object3D {
        const group = new THREE.Group();
        group.name = 'BackgroundImage';
        group.userData.type = 'background_image';
        group.userData.baseSize = { width, height };

        const geometry = new THREE.PlaneGeometry(width, height);
        geometry.rotateX(-Math.PI / 2);
        
        const material = new THREE.MeshBasicMaterial({ 
            map: texture, 
            side: THREE.DoubleSide, 
            transparent: false,
            opacity: 1.0,
            depthWrite: true
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData.isMesh = true;
        mesh.userData.generated = true;
        group.add(mesh);

        const halfW = width / 2;
        const halfH = height / 2;
        
        const createHandle = (x: number, z: number, name: string) => {
            const h = ShapeUtils.createSprite('#FFFF00', 1.5);
            h.position.set(x, 0, z);
            h.userData.isControlPoint = true; 
            h.userData.pointType = name;
            return h;
        };

        const tl = createHandle(-halfW, -halfH, 'tl');
        const tr = createHandle(halfW, -halfH, 'tr');
        const bl = createHandle(-halfW, halfH, 'bl');
        const br = createHandle(halfW, halfH, 'br');

        group.add(tl, tr, bl, br);
        group.userData.handles = { tl, tr, bl, br };

        ShapeUtils.addAnchor(group);
        return group;
    }

    public static update(group: THREE.Object3D) {
        if (group.userData.type !== 'background_image') return;
        
        const mesh = group.children.find(c => c.userData.isMesh) as THREE.Mesh;
        if (!mesh) return;

        const handles = group.userData.handles;
        if (!handles) return;

        const box = new THREE.Box3();
        box.expandByPoint(handles.tl.position);
        box.expandByPoint(handles.tr.position);
        box.expandByPoint(handles.bl.position);
        box.expandByPoint(handles.br.position);

        const min = box.min;
        const max = box.max;
        const width = max.x - min.x;
        const height = max.z - min.z; 
        const center = new THREE.Vector3();
        box.getCenter(center);

        mesh.geometry.dispose();
        const newGeo = new THREE.PlaneGeometry(width, height);
        newGeo.rotateX(-Math.PI / 2); 
        newGeo.translate(center.x, 0, center.z);
        mesh.geometry = newGeo;
    }
}