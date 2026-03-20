import * as THREE from 'three';

export class ShapeUtils {
    private static textureCache: { [key: string]: THREE.Texture } = {};

    public static getCircleTexture(): THREE.Texture {
        const key = 'white_circle'; 
        if (this.textureCache[key]) return this.textureCache[key];
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error("Could not create canvas context");
        }
        const center = size / 2;
        const radius = size / 2 - 2;
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter; 
        this.textureCache[key] = texture;
        return texture;
    }

    public static createSprite(color: string, scale: number): THREE.Sprite {
        const texture = this.getCircleTexture(); 
        const material = new THREE.SpriteMaterial({ 
            map: texture, 
            color: new THREE.Color(color), 
            depthTest: false, 
            sizeAttenuation: true 
        });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(scale, scale, 1);
        sprite.frustumCulled = false;
        sprite.renderOrder = 9999;
        return sprite;
    }

    public static createAnchor(pos: THREE.Vector3, name: string): THREE.Object3D {
        const mesh = this.createSprite('#FF3333', 2.0);
        mesh.position.copy(pos);
        mesh.userData.isAnchor = true;
        mesh.userData.pointType = name;
        mesh.visible = false;
        return mesh;
    }

    public static addAnchor(parent: THREE.Object3D) {
        for (let i = parent.children.length - 1; i >= 0; i--) {
            if (parent.children[i].userData.isMainAnchor) {
                parent.remove(parent.children[i]);
            }
        }

        const anchor = this.createSprite('#FF3333', 2.5);
        anchor.name = `Anchor_${parent.userData.type || 'Unknown'}`;
        anchor.userData.isAnchor = true;
        anchor.userData.isMainAnchor = true; 
        anchor.renderOrder = 9999;
        parent.add(anchor);
    }

    public static createControlPoint(pos: THREE.Vector3, name: string): THREE.Object3D {
        const mesh = this.createSprite('#00FF00', 1.5);
        mesh.position.copy(pos);
        mesh.userData.isControlPoint = true;
        mesh.userData.pointType = name;
        mesh.visible = false;
        return mesh;
    }

    public static createHelperLine(p1: THREE.Vector3, p2: THREE.Vector3): THREE.Line {
        const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const mat = new THREE.LineDashedMaterial({ color: 0x888888, dashSize: 2, gapSize: 1, depthTest: false });
        const line = new THREE.Line(geo, mat);
        line.computeLineDistances();
        line.userData.isHelperLine = true;
        line.visible = false;
        line.frustumCulled = false;
        return line;
    }

    public static createBezierPathNode(pos: THREE.Vector3): THREE.Object3D {
        const mesh = this.createSprite('#FF3333', 2.0);
        mesh.position.copy(pos);
        mesh.userData.isAnchor = true;
        mesh.userData.isNode = true;
        mesh.userData.pointType = 'node';
        mesh.visible = false;
        return mesh;
    }

    public static createBezierSegment(start: THREE.Vector3, end: THREE.Vector3, cp1Pos?: THREE.Vector3, cp2Pos?: THREE.Vector3): THREE.Object3D {
        const group = new THREE.Group();
        group.userData.type = 'bezier_line';
        const vDir = new THREE.Vector3().subVectors(end, start);
        const len = vDir.length();
        const cp1 = cp1Pos ? cp1Pos : new THREE.Vector3().copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.333));
        const cp2 = cp2Pos ? cp2Pos : new THREE.Vector3().copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.666));

        const curve = new THREE.CubicBezierCurve3(start, cp1, cp2, end);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false, depthWrite: false });
        const curveMesh = new THREE.Line(geometry, material);
        curveMesh.userData.isCurve = true;
        curveMesh.frustumCulled = false;
        curveMesh.renderOrder = 999;
        group.add(curveMesh);
        const center = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        group.position.copy(center);
        const lStart = new THREE.Vector3().subVectors(start, center);
        const lEnd = new THREE.Vector3().subVectors(end, center);
        const lCp1 = new THREE.Vector3().subVectors(cp1, center);
        const lCp2 = new THREE.Vector3().subVectors(cp2, center);
        const localCurve = new THREE.CubicBezierCurve3(lStart, lCp1, lCp2, lEnd);
        curveMesh.geometry.setFromPoints(localCurve.getPoints(50));
        curveMesh.userData.curve = localCurve; 
        const anchorStart = this.createAnchor(lStart, 'start');
        const anchorEnd = this.createAnchor(lEnd, 'end');
        const cpMesh1 = this.createControlPoint(lCp1, 'cp1');
        const cpMesh2 = this.createControlPoint(lCp2, 'cp2');
        const line1 = this.createHelperLine(lStart, lCp1);
        const line2 = this.createHelperLine(lEnd, lCp2);
        group.add(anchorStart, anchorEnd, cpMesh1, cpMesh2, line1, line2);
        group.userData.helpers = { start: anchorStart, end: anchorEnd, cp1: cpMesh1, cp2: cpMesh2, line1: line1, line2: line2 };
        this.addAnchor(group); 
        return group;
    }

    public static createLinkedBezierSegment(nodeA: THREE.Object3D, nodeB: THREE.Object3D, cp1Pos?: THREE.Vector3, cp2Pos?: THREE.Vector3): THREE.Object3D {
        const group = new THREE.Group();
        group.userData.type = 'bezier_line';
        group.userData.isLinked = true;
        group.userData.nodes = { start: nodeA, end: nodeB };
        const start = nodeA.position;
        const end = nodeB.position;
        const vDir = new THREE.Vector3().subVectors(end, start);
        const len = vDir.length();
        const cp1 = cp1Pos ? cp1Pos : new THREE.Vector3().copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.333));
        const cp2 = cp2Pos ? cp2Pos : new THREE.Vector3().copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.666));
        const curve = new THREE.CubicBezierCurve3(start, cp1, cp2, end);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false, depthWrite: false });
        const curveMesh = new THREE.Line(geometry, material);
        curveMesh.userData.isCurve = true;
        curveMesh.frustumCulled = false;
        curveMesh.renderOrder = 999;
        group.add(curveMesh);
        const cpMesh1 = this.createControlPoint(cp1, 'cp1');
        const cpMesh2 = this.createControlPoint(cp2, 'cp2');
        const line1 = this.createHelperLine(start, cp1);
        const line2 = this.createHelperLine(end, cp2);
        group.add(cpMesh1, cpMesh2, line1, line2);
        group.userData.helpers = { cp1: cpMesh1, cp2: cpMesh2, line1: line1, line2: line2 };
        return group;
    }

    public static linearizeBezierSegment(segment: THREE.Object3D) {
        if (segment.userData.type !== 'bezier_line' || !segment.userData.isLinked || !segment.userData.nodes) return;
        const nodes = segment.userData.nodes;
        const helpers = segment.userData.helpers;
        if (!nodes.start || !nodes.end || !helpers.cp1 || !helpers.cp2) return;
        const start = nodes.start.position;
        const end = nodes.end.position;
        const vDir = new THREE.Vector3().subVectors(end, start);
        const len = vDir.length();
        helpers.cp1.position.copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.333));
        helpers.cp2.position.copy(start).add(vDir.clone().normalize().multiplyScalar(len * 0.666));
        this.updateBezierSegmentGeometry(segment);
    }

    public static updateBezierSegmentGeometry(group: THREE.Object3D) {
        if (group.userData.type !== 'bezier_line') return;
        let start: THREE.Vector3, end: THREE.Vector3;
        let cp1: THREE.Vector3, cp2: THREE.Vector3;
        const helpers = group.userData.helpers;
        if (group.userData.isLinked && group.userData.nodes) {
            const nodes = group.userData.nodes;
            start = nodes.start.position;
            end = nodes.end.position;
            cp1 = helpers.cp1.position;
            cp2 = helpers.cp2.position;
        } else if (helpers) {
            start = helpers.start.position;
            end = helpers.end.position;
            cp1 = helpers.cp1.position;
            cp2 = helpers.cp2.position;
        } else { return; }
        const updateLineGeo = (line: THREE.Line, p1: THREE.Vector3, p2: THREE.Vector3) => {
            if (!line) return;
            line.geometry.setFromPoints([p1, p2]);
            line.computeLineDistances(); 
            line.geometry.attributes.position.needsUpdate = true;
            line.geometry.computeBoundingSphere();
        };
        updateLineGeo(helpers.line1, start, cp1);
        updateLineGeo(helpers.line2, end, cp2);
        const curveMesh = group.children.find(c => c.userData.isCurve) as THREE.Line;
        if (curveMesh) {
            let curve;
            let points;

            // Check if straight (collinear)
            const vDir = new THREE.Vector3().subVectors(end, start);
            const len = vDir.length();
            
            let isStraight = false;
            if (len > 0.0001) {
                const dir = vDir.clone().normalize();
                const vCP1 = new THREE.Vector3().subVectors(cp1, start);
                const vCP2 = new THREE.Vector3().subVectors(cp2, start);
                
                const dist1 = new THREE.Vector3().crossVectors(vCP1, dir).length();
                const dist2 = new THREE.Vector3().crossVectors(vCP2, dir).length();
                
                if (dist1 < 0.01 && dist2 < 0.01) {
                    isStraight = true;
                }
            } else {
                // Zero length, treat as straight point
                isStraight = true;
            }

            if (isStraight) {
                curve = new THREE.LineCurve3(start, end);
                points = [start, end];
            } else {
                curve = new THREE.CubicBezierCurve3(start, cp1, cp2, end);
                points = curve.getPoints(50);
            }

            if (curveMesh.geometry.attributes.position && curveMesh.geometry.attributes.position.count !== points.length) {
                curveMesh.geometry.dispose();
                curveMesh.geometry = new THREE.BufferGeometry();
            }
            curveMesh.geometry.setFromPoints(points);
            curveMesh.userData.curve = curve;
            if (curveMesh.geometry.attributes.position) curveMesh.geometry.attributes.position.needsUpdate = true;
            curveMesh.geometry.computeBoundingSphere();
        }
    }

    public static createPath(points: THREE.Vector3[], closed: boolean = false): THREE.Object3D | null {
        if (points.length < 2) return null;
        const group = new THREE.Group();
        group.userData.type = 'bezier_path';
        group.userData.isClosed = closed;
        const center = new THREE.Vector3();
        points.forEach(p => center.add(p));
        center.divideScalar(points.length);
        group.position.copy(center);
        const nodes: THREE.Object3D[] = [];
        points.forEach((worldPos, index) => {
            const localPos = new THREE.Vector3().subVectors(worldPos, center);
            const node = this.createBezierPathNode(localPos);
            node.name = `Node_${index}`;
            group.add(node);
            nodes.push(node);
        });
        for (let i = 0; i < nodes.length; i++) {
            if (!closed && i === nodes.length - 1) break;
            const nextIndex = (i + 1) % nodes.length;
            const nodeA = nodes[i];
            const nodeB = nodes[nextIndex];
            const segment = this.createLinkedBezierSegment(nodeA, nodeB);
            segment.name = `Segment_${i}`;
            group.add(segment);
        }
        this.addAnchor(group);
        return group;
    }

    public static imageToDataURL(image: any): string {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return '';
            ctx.drawImage(image, 0, 0);
            return canvas.toDataURL('image/png');
        } catch (e) {
            console.warn('Could not serialize image', e);
            return '';
        }
    }

    public static serializeBezierGroup(group: THREE.Object3D | undefined): any {
        if (!group) return null;
        const nodes = group.children.filter(c => c.userData.isNode).map(n => n.position.toArray());
        const segments = group.children.filter(c => c.userData.type === 'bezier_line').map(s => {
             const h = s.userData.helpers;
             return {
                 cp1: h.cp1.position.toArray(),
                 cp2: h.cp2.position.toArray()
             };
        });
        return { nodes, segments };
    }

    public static applyBezierData(group: THREE.Object3D | undefined, data: any) {
        if (!group || !data) return;
        const nodes = group.children.filter(c => c.userData.isNode);
        if (data.nodes && nodes.length === data.nodes.length) {
            nodes.forEach((n, i) => n.position.fromArray(data.nodes[i]));
        }
        const segments = group.children.filter(c => c.userData.type === 'bezier_line');
        if (data.segments && segments.length === data.segments.length) {
            segments.forEach((s, i) => {
                const d = data.segments[i];
                const h = s.userData.helpers;
                if (h) {
                    h.cp1.position.fromArray(d.cp1);
                    h.cp2.position.fromArray(d.cp2);
                    this.updateBezierSegmentGeometry(s); 
                }
            });
        }
    }
}