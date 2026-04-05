import * as THREE from 'three';
import { ShapeUtils } from '../ShapeUtils';

export class BasicShapes {
    public static createLineFromPoints(start: THREE.Vector3, end: THREE.Vector3): THREE.Object3D {
        const group = new THREE.Group();
        group.userData.type = 'line';
        const nStart = ShapeUtils.createBezierPathNode(start);
        const nEnd = ShapeUtils.createBezierPathNode(end);
        group.add(nStart, nEnd);
        group.add(ShapeUtils.createLinkedBezierSegment(nStart, nEnd));
        ShapeUtils.addAnchor(group);
        return group;
    }

    public static createRectangle(p1: THREE.Vector3, p2: THREE.Vector3): THREE.Object3D {
        const group = new THREE.Group();
        group.userData.type = 'square';
        group.userData.isClosed = true;
        const y = p1.y;
        const minX = Math.min(p1.x, p2.x);
        const maxX = Math.max(p1.x, p2.x);
        const minZ = Math.min(p1.z, p2.z);
        const maxZ = Math.max(p1.z, p2.z);
        const centerX = (minX + maxX) / 2;
        const centerZ = (minZ + maxZ) / 2;
        group.position.set(centerX, y, centerZ);
        const width = parseFloat(((maxX - minX)).toFixed(2));
        const length = parseFloat(((maxZ - minZ)).toFixed(2));
        group.userData.baseSize = { width, length };
        const halfWidth = width / 2;
        const halfDepth = length / 2;
        const tlPos = new THREE.Vector3(-halfWidth, 0, -halfDepth); 
        const trPos = new THREE.Vector3(halfWidth, 0, -halfDepth);
        const brPos = new THREE.Vector3(halfWidth, 0, halfDepth);
        const blPos = new THREE.Vector3(-halfWidth, 0, halfDepth);
        const nodeTL = ShapeUtils.createBezierPathNode(tlPos);
        const nodeTR = ShapeUtils.createBezierPathNode(trPos);
        const nodeBR = ShapeUtils.createBezierPathNode(brPos);
        const nodeBL = ShapeUtils.createBezierPathNode(blPos);
        group.add(nodeTL, nodeTR, nodeBR, nodeBL);
        group.add(ShapeUtils.createLinkedBezierSegment(nodeTL, nodeTR), ShapeUtils.createLinkedBezierSegment(nodeTR, nodeBR), ShapeUtils.createLinkedBezierSegment(nodeBR, nodeBL), ShapeUtils.createLinkedBezierSegment(nodeBL, nodeTL));
        ShapeUtils.addAnchor(group); 
        return group;
    }

    public static createSquare(size: number = 50): THREE.Object3D {
        const group = new THREE.Group();
        group.userData.type = 'square';
        group.userData.isClosed = true;
        group.userData.baseSize = { width: size, length: size };
        const halfSize = size / 2; 
        const tlPos = new THREE.Vector3(-halfSize, 0, -halfSize);
        const trPos = new THREE.Vector3(halfSize, 0, -halfSize);
        const brPos = new THREE.Vector3(halfSize, 0, halfSize);
        const blPos = new THREE.Vector3(-halfSize, 0, halfSize);
        const nodeTL = ShapeUtils.createBezierPathNode(tlPos);
        const nodeTR = ShapeUtils.createBezierPathNode(trPos);
        const nodeBR = ShapeUtils.createBezierPathNode(brPos);
        const nodeBL = ShapeUtils.createBezierPathNode(blPos);
        group.add(nodeTL, nodeTR, nodeBR, nodeBL);
        group.add(ShapeUtils.createLinkedBezierSegment(nodeTL, nodeTR), ShapeUtils.createLinkedBezierSegment(nodeTR, nodeBR), ShapeUtils.createLinkedBezierSegment(nodeBR, nodeBL), ShapeUtils.createLinkedBezierSegment(nodeBL, nodeTL));
        ShapeUtils.addAnchor(group); 
        return group;
    }

    public static updateRectangle(obj: THREE.Object3D) {
        const width = obj.userData.baseSize?.width || 50;
        const length = obj.userData.baseSize?.length || width;
        const halfW = width / 2;
        const halfL = length / 2;
        
        const borderRadius = obj.userData.borderRadius;
        const isRounded = borderRadius && borderRadius.enabled && borderRadius.radius > 0;
        const radius = isRounded ? Math.min(borderRadius.radius, Math.min(halfW, halfL)) : 0;
        const K = 0.5522847 * radius;

        // --- Helper: Build Contour ---
        const updateContour = (isOffset: boolean) => {
            const filterNodes = (c: THREE.Object3D) => c.userData.isNode && (isOffset ? c.userData.isOffsetNode : !c.userData.isOffsetNode);
            const filterSegs = (c: THREE.Object3D) => c.userData.type === 'bezier_line' && (isOffset ? c.userData.isOffset : !c.userData.isOffset);
            
            let nodes = obj.children.filter(filterNodes);
            let segments = obj.children.filter(filterSegs);
            
            const targetCount = isRounded ? 8 : 4;

            // Rebuild if topology mismatch
            if (nodes.length !== targetCount || segments.length !== targetCount) {
                // Cleanup
                for (let i = obj.children.length - 1; i >= 0; i--) {
                    const c = obj.children[i];
                    if (filterNodes(c) || filterSegs(c)) obj.remove(c);
                }

                nodes = [];
                segments = [];
                for(let i=0; i<targetCount; i++) {
                    const n = ShapeUtils.createBezierPathNode(new THREE.Vector3());
                    if (isOffset) { n.userData.isOffsetNode = true; n.visible = false; }
                    obj.add(n);
                    nodes.push(n);
                }
                
                for(let i=0; i<targetCount; i++) {
                    const start = nodes[i];
                    const end = nodes[(i+1)%targetCount];
                    const seg = ShapeUtils.createLinkedBezierSegment(start, end);
                    if (isOffset) {
                        seg.userData.isOffset = true;
                        const curve = seg.children.find(c => c.userData.isCurve) as THREE.Line;
                        if (curve && curve.material) {
                            (curve.material as THREE.LineBasicMaterial).color.setHex(0xffaa00);
                            (curve.material as THREE.LineBasicMaterial).opacity = 0.5;
                        }
                    }
                    obj.add(seg);
                    segments.push(seg);
                }
            }

            // Calculate Dimensions
            let curHalfW = halfW;
            let curHalfL = halfL;
            let curR = radius;
            let curK = K;

            if (isOffset) {
                const off = obj.userData.offset;
                const offX = off ? off.x : 0;
                const offZ = off ? off.z : 0;
                const uniformOff = (offX + offZ) / 2; 
                
                curHalfW += offX;
                curHalfL += offZ;
                
                if (isRounded) {
                    curR += uniformOff;
                    if (curR < 0) curR = 0; // Degenerate corner
                    curK = 0.5522847 * curR;
                }
            }

            // Update Positions
            if (!isRounded) {
                // Sharp (4 points)
                nodes[0].position.set(-curHalfW, 0, -curHalfL);
                nodes[1].position.set(curHalfW, 0, -curHalfL);
                nodes[2].position.set(curHalfW, 0, curHalfL);
                nodes[3].position.set(-curHalfW, 0, curHalfL);
                
                segments.forEach(seg => ShapeUtils.linearizeBezierSegment(seg));
            } else {
                // Rounded (8 points)
                nodes[0].position.set(-curHalfW + curR, 0, -curHalfL);
                nodes[1].position.set(curHalfW - curR, 0, -curHalfL); 
                nodes[2].position.set(curHalfW, 0, -curHalfL + curR);
                nodes[3].position.set(curHalfW, 0, curHalfL - curR); 
                nodes[4].position.set(curHalfW - curR, 0, curHalfL);
                nodes[5].position.set(-curHalfW + curR, 0, curHalfL); 
                nodes[6].position.set(-curHalfW, 0, curHalfL - curR);
                nodes[7].position.set(-curHalfW, 0, -curHalfL + curR); 

                // Linear Segments (0, 2, 4, 6)
                ShapeUtils.linearizeBezierSegment(segments[0]); 
                ShapeUtils.linearizeBezierSegment(segments[2]); 
                ShapeUtils.linearizeBezierSegment(segments[4]); 
                ShapeUtils.linearizeBezierSegment(segments[6]); 

                // Arc Segments (1, 3, 5, 7)
                const updateArc = (idx: number, dx1: number, dz1: number, dx2: number, dz2: number) => {
                    const seg = segments[idx];
                    const helpers = seg.userData.helpers;
                    if (helpers) {
                        helpers.cp1.position.copy(nodes[idx].position).add(new THREE.Vector3(dx1, 0, dz1));
                        helpers.cp2.position.copy(nodes[(idx+1)%8].position).add(new THREE.Vector3(dx2, 0, dz2));
                        ShapeUtils.updateBezierSegmentGeometry(seg);
                    }
                };

                updateArc(1, curK, 0, 0, -curK);
                updateArc(3, 0, curK, curK, 0);
                updateArc(5, -curK, 0, 0, curK);
                updateArc(7, 0, -curK, -curK, 0);
            }
        };

        // 1. Main
        updateContour(false);

        // 2. Offset
        const offset = obj.userData.offset;
        if (offset && offset.enabled) {
            updateContour(true);
        } else {
            // Remove offset if disabled
            for (let i = obj.children.length - 1; i >= 0; i--) {
                const c = obj.children[i];
                if (c.userData.isOffsetNode || c.userData.isOffset) obj.remove(c);
            }
        }
    }

    public static createCircle(radius: number = 25): THREE.Object3D {
        const group = new THREE.Group();
        group.name = 'Circle';
        group.userData.type = 'circle';
        group.userData.isClosed = true;
        group.userData.baseSize = { radius: radius };
        const R = radius; 
        const K = 0.5522847 * R; 
        const pTop = new THREE.Vector3(0, 0, -R);
        const pRight = new THREE.Vector3(R, 0, 0);
        const pBottom = new THREE.Vector3(0, 0, R);
        const pLeft = new THREE.Vector3(-R, 0, 0);
        const nTop = ShapeUtils.createBezierPathNode(pTop);
        const nRight = ShapeUtils.createBezierPathNode(pRight);
        const nBottom = ShapeUtils.createBezierPathNode(pBottom);
        const nLeft = ShapeUtils.createBezierPathNode(pLeft);
        group.add(nTop, nRight, nBottom, nLeft);
        const buildSeg = (start: THREE.Object3D, end: THREE.Object3D, cp1Off: THREE.Vector3, cp2Off: THREE.Vector3) => {
            const seg = ShapeUtils.createLinkedBezierSegment(start, end, cp1Off, cp2Off);
            ShapeUtils.updateBezierSegmentGeometry(seg);
            group.add(seg);
        };
        buildSeg(nTop, nRight, new THREE.Vector3(K, 0, -R), new THREE.Vector3(R, 0, -K));
        buildSeg(nRight, nBottom, new THREE.Vector3(R, 0, K), new THREE.Vector3(K, 0, R));
        buildSeg(nBottom, nLeft, new THREE.Vector3(-K, 0, R), new THREE.Vector3(-R, 0, K));
        buildSeg(nLeft, nTop, new THREE.Vector3(-R, 0, -K), new THREE.Vector3(-K, 0, -R));
        ShapeUtils.addAnchor(group);
        return group;
    }

    public static updateCircleRadius(obj: THREE.Object3D, radius: number) {
        if (!obj) return;
        if (obj.userData.type !== 'circle') return;
        if (!obj.userData.baseSize) obj.userData.baseSize = {};
        obj.userData.baseSize.radius = radius;
        const R = radius;
        const K = 0.5522847 * R;
        obj.scale.set(1, 1, 1);
        
        // --- 1. Main Circle Update ---
        const nodes = obj.children.filter(c => c.userData.isNode && !c.userData.isOffsetNode);
        if (nodes.length === 4) {
            nodes[0].position.set(0, 0, -R);
            nodes[1].position.set(R, 0, 0);
            nodes[2].position.set(0, 0, R);
            nodes[3].position.set(-R, 0, 0);
            const segments = obj.children.filter(c => c.userData.type === 'bezier_line' && !c.userData.isOffset);
            if (segments.length === 4) {
                const setCP = (seg: THREE.Object3D, cp1: THREE.Vector3, cp2: THREE.Vector3) => {
                    const helpers = seg.userData.helpers;
                    if (helpers) {
                        helpers.cp1.position.copy(cp1);
                        helpers.cp2.position.copy(cp2);
                        ShapeUtils.updateBezierSegmentGeometry(seg);
                    }
                };
                setCP(segments[0], new THREE.Vector3(K, 0, -R), new THREE.Vector3(R, 0, -K));
                setCP(segments[1], new THREE.Vector3(R, 0, K), new THREE.Vector3(K, 0, R));
                setCP(segments[2], new THREE.Vector3(-K, 0, R), new THREE.Vector3(-R, 0, K));
                setCP(segments[3], new THREE.Vector3(-R, 0, -K), new THREE.Vector3(-K, 0, -R));
            }
        }

        // --- 2. Offset Contour Update ---
        const offset = obj.userData.offset;
        const offsetEnabled = offset && offset.enabled;

        const removeOffset = () => {
             for (let i = obj.children.length - 1; i >= 0; i--) {
                 const c = obj.children[i];
                 if (c.userData.isOffsetNode || c.userData.isOffset) {
                     obj.remove(c);
                 }
             }
        };

        if (offsetEnabled) {
             const offR = R + (offset.radius || 0);
             const offK = 0.5522847 * offR;
             
             let offNodes = obj.children.filter(c => c.userData.isNode && c.userData.isOffsetNode);
             let offSegments = obj.children.filter(c => c.userData.type === 'bezier_line' && c.userData.isOffset);

             if (offNodes.length !== 4 || offSegments.length !== 4) {
                 removeOffset();
                 
                 const pTop = new THREE.Vector3(0, 0, -offR);
                 const pRight = new THREE.Vector3(offR, 0, 0);
                 const pBottom = new THREE.Vector3(0, 0, offR);
                 const pLeft = new THREE.Vector3(-offR, 0, 0);
                 
                 const nTop = ShapeUtils.createBezierPathNode(pTop);
                 const nRight = ShapeUtils.createBezierPathNode(pRight);
                 const nBottom = ShapeUtils.createBezierPathNode(pBottom);
                 const nLeft = ShapeUtils.createBezierPathNode(pLeft);
                 
                 [nTop, nRight, nBottom, nLeft].forEach(n => { n.userData.isOffsetNode = true; n.visible = false; obj.add(n); });
                 offNodes = [nTop, nRight, nBottom, nLeft];

                 const buildSeg = (start: THREE.Object3D, end: THREE.Object3D) => {
                    const seg = ShapeUtils.createLinkedBezierSegment(start, end);
                    seg.userData.isOffset = true;
                    // Color
                    const curve = seg.children.find(c => c.userData.isCurve) as THREE.Line;
                     if (curve && curve.material) {
                        (curve.material as THREE.LineBasicMaterial).color.setHex(0xffaa00);
                        (curve.material as THREE.LineBasicMaterial).opacity = 0.5;
                     }
                    obj.add(seg);
                    return seg;
                 };
                 
                 // Order matters for chaining logic! Top->Right->Bottom->Left->Top
                 const s1 = buildSeg(nTop, nRight);
                 const s2 = buildSeg(nRight, nBottom);
                 const s3 = buildSeg(nBottom, nLeft);
                 const s4 = buildSeg(nLeft, nTop);
                 offSegments = [s1, s2, s3, s4];
             }

             // Update Positions
             offNodes[0].position.set(0, 0, -offR);
             offNodes[1].position.set(offR, 0, 0);
             offNodes[2].position.set(0, 0, offR);
             offNodes[3].position.set(-offR, 0, 0);

             // Update Curves
             const setCP = (seg: THREE.Object3D, cp1: THREE.Vector3, cp2: THREE.Vector3) => {
                const helpers = seg.userData.helpers;
                if (helpers) {
                    helpers.cp1.position.copy(cp1);
                    helpers.cp2.position.copy(cp2);
                    ShapeUtils.updateBezierSegmentGeometry(seg);
                }
             };
             
             if (offSegments.length === 4) {
                setCP(offSegments[0], new THREE.Vector3(offK, 0, -offR), new THREE.Vector3(offR, 0, -offK));
                setCP(offSegments[1], new THREE.Vector3(offR, 0, offK), new THREE.Vector3(offK, 0, offR));
                setCP(offSegments[2], new THREE.Vector3(-offK, 0, offR), new THREE.Vector3(-offR, 0, offK));
                setCP(offSegments[3], new THREE.Vector3(-offR, 0, -offK), new THREE.Vector3(-offK, 0, -offR));
             }

        } else {
            removeOffset();
        }
    }
}