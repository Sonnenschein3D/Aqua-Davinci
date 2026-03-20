import * as THREE from 'three';

export class DavinciPinsel1 {
    private scene: THREE.Scene;
    private brushMesh: THREE.Mesh | null = null;
    private wireframe: THREE.LineSegments | null = null;
    public group: THREE.Group;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.group = new THREE.Group();
        this.group.name = 'DavinciPinsel1_Group';
        this.scene.add(this.group);
    }

    private profile = {
        p1: new THREE.Vector2(0, 0),    // Schaft (Oben) - Bleibt am Anker
        cp1: new THREE.Vector2(10, -15),
        cp2: new THREE.Vector2(15, -45),
        p0: new THREE.Vector2(0, -60)   // Spitze (Unten)
    };

    public update(state: any, currentPos?: THREE.Vector3, movementDelta?: THREE.Vector3) {
        this.clear();
        
        if (state.bezierProfile) {
            this.profile = state.bezierProfile;
        }

        this.createBezierLatheBrush(state, currentPos, movementDelta);
    }

                    private createBezierLatheBrush(state: any, currentPos?: THREE.Vector3, movementDelta?: THREE.Vector3) {

                        const color = state.color || '#cccccc';

                        const opacity = state.transparency !== undefined ? state.transparency : 1.0;

                        

                        const originalLength = Math.abs(this.profile.p0.y - this.profile.p1.y); 

                

                        let compression = 0;

                        let visibleHeight = originalLength;

                        

                        if (currentPos && currentPos.y < originalLength) {

                            visibleHeight = Math.max(2, currentPos.y); 

                            compression = (originalLength - visibleHeight) / originalLength;

                        }

                

                // --- SCHRITT 1: VERFORMTE MITTELLINIE BERECHNEN (3D) ---
                const dragScale = 20.0; 
                let drag = new THREE.Vector3();
                if (movementDelta && movementDelta.length() > 0.001) {
                    drag.copy(movementDelta).multiplyScalar(-dragScale);
                }
                
                const isTouching = compression > 0;
                if (!isTouching) drag.set(0,0,0);

                const curveLength = originalLength;
                const m1 = new THREE.Vector3(0, 0, 0); // Oben (Anker)
                
                // --- PHYSIKALISCHE LÄNGENBEGRENZUNG (STRIKT) ---
                // Der maximale horizontale Versatz (D) ergibt sich aus: D^2 + H^2 = L^2
                // D_max = Wurzel(L^2 - H^2)
                const maxDragDist = Math.sqrt(Math.max(0, Math.pow(curveLength, 2) - Math.pow(visibleHeight, 2)));
                
                // Wir limitieren den Drag auf diesen Wert, um Dehnung zu vermeiden
                if (drag.length() > maxDragDist) {
                    drag.setLength(maxDragDist);
                }

                // mc1 (oberes Drittel): EXTREM steif
                const mc1 = new THREE.Vector3(drag.x * 0.005, -curveLength * 0.4, drag.z * 0.005);
                
                // mc2 (unteres Drittel): Knickbildung
                // const flatFactor = isTouching ? (1.2 + compression * 2.5) : 1.0;
                // mc2 folgt dem Drag, bleibt aber innerhalb des physischen Radius
                const mc2 = new THREE.Vector3(drag.x * 0.4, -curveLength * 0.8, drag.z * 0.4);
                
                // m0 (Spitze): Am Boden fixiert, exakt auf der maximal möglichen Entfernung
                const m0 = new THREE.Vector3(drag.x, -visibleHeight, drag.z); 

                const centerCurve = new THREE.CubicBezierCurve3(m1, mc1, mc2, m0);
                const centerPoints = centerCurve.getPoints(24);

                                // --- SCHRITT 2: RADIALES PROFIL ---

                                // Symmetrische Stauchung komplett deaktiviert (auskommentiert/Null)

                                // const effectiveBulge = 0; 

                                

                                                // const tipRadius = this.profile.p0.x; // Bleibt absolut profil-treu

                                

                                

                                

                                                // Calculate normalized Y values based on the overall length of the profile

                                

                                                const dy = this.profile.p0.y - this.profile.p1.y;

                                

                                                const normY = (y: number) => dy === 0 ? 0 : (y - this.profile.p1.y) / dy;

                                

                                

                                

                                                const profileCurve2D = new THREE.CubicBezierCurve(

                                

                                                    new THREE.Vector2(this.profile.p1.x, normY(this.profile.p1.y)), // Should be 0

                                

                                                    new THREE.Vector2(this.profile.cp1.x, normY(this.profile.cp1.y)),

                                

                                                    new THREE.Vector2(this.profile.cp2.x, normY(this.profile.cp2.y)),

                                

                                                    new THREE.Vector2(this.profile.p0.x, normY(this.profile.p0.y))  // 1

                                

                                                );

                                

                                            

                            

                                    // --- SCHRITT 3: GEOMETRIE ---

                                    const radialSegments = 16;

                                    const tubePoints: THREE.Vector3[] = [];

                                    const indices: number[] = [];

                            

                                    // Wir nutzen eine feste Referenz für die Ring-Rotation, um Sprünge zu vermeiden

                                    // let lastNormal = new THREE.Vector3(1, 0, 0);

                            

                                    for (let i = 0; i < centerPoints.length; i++) {

                                        const t = i / (centerPoints.length - 1); // Parameter for centerCurve

                                        

                                        // Evaluate the 2D profile curve at this parameter

                                        const profilePoint = profileCurve2D.getPoint(t);

                                        

                                        // Get the radius from the X component of the profile point

                                        const radius = profilePoint.x;

                                        

                                        // Get the normalized Y position from the Y component of the profile point

                                        // This 't_center' will dictate where along the 3D centerline the radius is applied

                                        const t_center = profilePoint.y; 

                

                                        // Evaluate the 3D centerCurve at t_center

                                        const center = centerCurve.getPoint(t_center);

                                        const tangent = centerCurve.getTangent(t_center).normalize();

                            

                                        // Berechne ein stabiles Koordinatensystem (Normal/Binormal) für den Ring

                                        const helper = Math.abs(tangent.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);

                        const binormal = new THREE.Vector3().crossVectors(tangent, helper).normalize();

                        const normal = new THREE.Vector3().crossVectors(binormal, tangent).normalize();

            

                        for (let j = 0; j < radialSegments; j++) {

                            const angle = (j / radialSegments) * Math.PI * 2;

                            const p = center.clone()

                                .add(normal.clone().multiplyScalar(Math.cos(angle) * radius))

                                .add(binormal.clone().multiplyScalar(Math.sin(angle) * radius));

                            

                            tubePoints.push(p);

            

                            if (i < centerPoints.length - 1) {

                                const nextLine = i + 1;

                                const nextSeg = (j + 1) % radialSegments;

                                const a = i * radialSegments + j;

                                const b = nextLine * radialSegments + j;

                                const c = nextLine * radialSegments + nextSeg;

                                const d = i * radialSegments + nextSeg;

                                indices.push(a, b, d, b, c, d);

                            }

                        }

                    }

            

                    const geometry = new THREE.BufferGeometry().setFromPoints(tubePoints);

                    geometry.setIndex(indices);

                    geometry.computeVertexNormals();

            

                    this.brushMesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({

                        color: new THREE.Color(color),

                        transparent: opacity < 1.0,

                        opacity: opacity,

                        roughness: 0.6, metalness: 0.1, side: THREE.DoubleSide

                    }));

            

                    this.brushMesh.position.set(0, 0, 0);

                    const edges = new THREE.EdgesGeometry(geometry);

                    this.wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }));

                    this.brushMesh.add(this.wireframe);

                    this.group.add(this.brushMesh);

                }

    private clear() {
        while (this.group.children.length > 0) {
            const child = this.group.children[0] as any;
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) child.material.forEach((m: any) => m.dispose());
                else child.material.dispose();
            }
            this.group.remove(child);
        }
        this.brushMesh = null;
        this.wireframe = null;
    }

    public setVisible(visible: boolean) {
        this.group.visible = visible;
    }
}
