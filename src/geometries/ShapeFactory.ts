import * as THREE from 'three';
import { ShapeUtils } from './ShapeUtils';
import { BasicShapes } from './shapes/BasicShapes';
import { BackgroundImageShape } from './shapes/BackgroundImageShape';

export type ShapeType = 'line' | 'square' | 'circle' | 'background_image';

export class ShapeFactory {
    static createShape(type: ShapeType, position?: THREE.Vector3, initialProps?: any): THREE.Object3D | null {
        let object: THREE.Object3D | null = null;
        
        switch (type) {
            case 'line':
                object = BasicShapes.createLineFromPoints(
                    initialProps?.start || new THREE.Vector3(0, 0, 0),
                    initialProps?.end || new THREE.Vector3(50, 0, 0)
                );
                break;
            case 'square':
                object = BasicShapes.createSquare(initialProps?.size || 50);
                break;
            case 'circle':
                object = BasicShapes.createCircle(initialProps?.radius || 25);
                break;
            case 'background_image':
                if (initialProps?.texture) {
                    object = BackgroundImageShape.create(initialProps.texture, initialProps.width, initialProps.height);
                }
                break;
        }

        if (object) {
            object.userData.type = type;
            if (position) object.position.copy(position);
            if (initialProps?.position) object.position.set(initialProps.position[0], initialProps.position[1], initialProps.position[2]);
            if (initialProps?.rotation) object.rotation.set(initialProps.rotation[0], initialProps.rotation[1], initialProps.rotation[2]);
            if (initialProps?.scale) object.scale.set(initialProps.scale[0], initialProps.scale[1], initialProps.scale[2]);

            if (type === 'line' && !object.userData.baseSize) object.userData.baseSize = { width: 50 }; 
            else if (type === 'square' && !object.userData.baseSize) object.userData.baseSize = { width: 50, length: 50 };
            else if (type === 'circle' && !object.userData.baseSize) object.userData.baseSize = { radius: 25 };

            if (!object.userData.isMainAnchor && type !== 'background_image') {
                ShapeUtils.addAnchor(object);
            }
        }

        return object;
    }

    public static createBrush(radius: number = 5, height: number = 60): THREE.Object3D {
        const group = new THREE.Group();
        group.name = 'Neuer Pinsel';
        group.userData.type = 'bezier_path';
        
        // Schaft (Oben): Radius X, Y=0
        const pTop = new THREE.Vector3(radius, 0, 0);      
        // Spitze (Unten): Radius 0, Y=-height
        const pBottom = new THREE.Vector3(0, -height, 0); 
        
        const nodeTop = ShapeUtils.createBezierPathNode(pTop);
        const nodeBottom = ShapeUtils.createBezierPathNode(pBottom);
        
        group.add(nodeTop, nodeBottom);
        
        const seg = ShapeUtils.createLinkedBezierSegment(nodeTop, nodeBottom);
        
        // Kontrollpunkte für eine EXTREM schlanke, spitze Form
        // Radius ist z.B. 5. Wir setzen CP-X nur minimal darüber.
        seg.userData.helpers.cp1.position.set(radius * 1.05, -height * 0.2, 0); 
        seg.userData.helpers.cp2.position.set(radius * 0.8, -height * 0.4, 0); 
        
        ShapeUtils.updateBezierSegmentGeometry(seg);
        group.add(seg);
        
        group.traverse(child => {
            if (child.userData.isNode || child.userData.isControlPoint || child.userData.isHelperLine) {
                child.visible = true;
            }
        });
        
        group.userData.modifiers = [
            { type: 'lathe', name: 'Rotation', params: { segments: 32, phiStart: 0, phiLength: Math.PI * 2 }, active: true }
        ];

        ShapeUtils.addAnchor(group);
        return group;
    }

    public static updateRectangle(obj: THREE.Object3D) {
        BasicShapes.updateRectangle(obj);
    }

    public static describeObject(obj: THREE.Object3D): any | null {
        if (!obj.userData.type) return null;

        const description: any = {
            type: obj.userData.type,
            name: obj.name,
            position: obj.position.toArray(),
            rotation: obj.rotation.toArray(),
            scale: obj.scale.toArray(),
            userData: { ...obj.userData } 
        };
        
        // Ensure baseSize is explicitly copied for serialization
        if (obj.userData.baseSize) {
            description.userData.baseSize = { ...obj.userData.baseSize };
        }

        if (obj.userData.type === 'line') {
            const nodes = obj.children.filter(c => c.userData.isNode);
            if (nodes.length >= 2) {
                description.start = nodes[0].position.toArray();
                description.end = nodes[1].position.toArray();
            }
        } else if (obj.userData.type === 'background_image') {
             const mesh = obj.children.find(c => c.userData.isMesh) as THREE.Mesh;
             if (mesh && mesh.material) {
                 const mat = mesh.material as THREE.MeshBasicMaterial;
                 if (mat.map && mat.map.image) {
                     description.imageData = ShapeUtils.imageToDataURL(mat.map.image);
                     description.width = obj.userData.baseSize?.width;
                     description.height = obj.userData.baseSize?.height;
                 }
             }
        }
        
        return description;
    }

    public static recreateShape(desc: any): THREE.Object3D | null {
        const type = desc.type;
        const position = new THREE.Vector3().fromArray(desc.position);
        
        const initialProps: any = {
            position: desc.position,
            rotation: desc.rotation,
            scale: desc.scale,
            ...desc.userData 
        };

        if (type === 'line') {
            if (desc.start) initialProps.start = new THREE.Vector3().fromArray(desc.start);
            if (desc.end) initialProps.end = new THREE.Vector3().fromArray(desc.end);
        } else if (type === 'square') {
            if (desc.userData?.baseSize?.width) initialProps.size = desc.userData.baseSize.width; 
        } else if (type === 'circle') {
             if (desc.userData?.baseSize?.radius) initialProps.radius = desc.userData.baseSize.radius;
        } else if (type === 'background_image') {
            if (desc.imageData) {
                const img = new Image();
                img.src = desc.imageData;
                const texture = new THREE.Texture(img);
                img.onload = () => { texture.needsUpdate = true; };
                initialProps.texture = texture;
                initialProps.width = desc.width;
                initialProps.height = desc.height;
            }
        }

        const obj = this.createShape(type, position, initialProps);
        
        if (obj) {
             if (desc.name) obj.name = desc.name;
             if (desc.userData) {
                 // Make sure to deep copy baseSize if it exists
                 if (desc.userData.baseSize) {
                    obj.userData.baseSize = { ...desc.userData.baseSize };
                 }
                 Object.assign(obj.userData, desc.userData);
             }
             if (type === 'square') {
                 this.updateRectangle(obj);
             }
        }
        return obj;
    }

    public static createModulationPath(minZ: number = -20, maxZ: number = 35): THREE.Object3D {
        const group = new THREE.Group();
        group.name = 'Modulation_Path';
        group.userData.type = 'bezier_path';
        group.userData.isHelper = true;

        const node1 = ShapeUtils.createBezierPathNode(new THREE.Vector3(0, 15, minZ));
        const node2 = ShapeUtils.createBezierPathNode(new THREE.Vector3(0, 15, maxZ));

        group.add(node1, node2);

        const seg = ShapeUtils.createLinkedBezierSegment(node1, node2);
        
        seg.userData.helpers.cp1.position.set(0, 15, minZ + (maxZ - minZ) * 0.33);
        seg.userData.helpers.cp2.position.set(0, 15, minZ + (maxZ - minZ) * 0.66);
        ShapeUtils.updateBezierSegmentGeometry(seg);
        
        const curveMesh = seg.children.find(c => c.userData.isCurve) as THREE.Line;
        if (curveMesh) (curveMesh.material as THREE.LineBasicMaterial).color.setHex(0xFF00FF); 

        group.add(seg);
        return group;
    }

    public static createBackgroundImage(texture: THREE.Texture, width: number, height: number): THREE.Object3D {
        return BackgroundImageShape.create(texture, width, height);
    }

    public static updateBackgroundImage(group: THREE.Object3D) {
        BackgroundImageShape.update(group);
    }

    public static createPath(points: THREE.Vector3[], closed: boolean = false): THREE.Object3D | null {
        return ShapeUtils.createPath(points, closed);
    }

    public static createLineFromPoints(start: THREE.Vector3, end: THREE.Vector3): THREE.Object3D {
        return BasicShapes.createLineFromPoints(start, end);
    }

    public static createBezierSegment(start: THREE.Vector3, end: THREE.Vector3, cp1Pos?: THREE.Vector3, cp2Pos?: THREE.Vector3): THREE.Object3D {
        return ShapeUtils.createBezierSegment(start, end, cp1Pos, cp2Pos);
    }

    public static linearizeBezierSegment(segment: THREE.Object3D) {
        ShapeUtils.linearizeBezierSegment(segment);
    }

    public static updateBezierSegmentGeometry(group: THREE.Object3D) {
        ShapeUtils.updateBezierSegmentGeometry(group);
    }

    public static addAnchor(parent: THREE.Object3D) {
        ShapeUtils.addAnchor(parent);
    }

    public static createControlPoint(pos: THREE.Vector3, name: string): THREE.Object3D {
        return ShapeUtils.createControlPoint(pos, name);
    }

    public static createHelperLine(p1: THREE.Vector3, p2: THREE.Vector3): THREE.Line {
        return ShapeUtils.createHelperLine(p1, p2);
    }

    public static createRectangle(p1: THREE.Vector3, p2: THREE.Vector3): THREE.Object3D {
        return BasicShapes.createRectangle(p1, p2);
    }

    public static createSquare(size: number = 50): THREE.Object3D {
        return BasicShapes.createSquare(size);
    }

    public static createCircle(radius: number = 25): THREE.Object3D {
        return BasicShapes.createCircle(radius);
    }

    public static updateCircleRadius(obj: THREE.Object3D, radius: number) {
        BasicShapes.updateCircleRadius(obj, radius);
    }
}

