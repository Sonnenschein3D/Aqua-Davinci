import * as THREE from 'three';
import { mergeVertices, mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export class MeshConverter {
    public static convert(object: THREE.Object3D): THREE.Object3D | null {
        const geometries: THREE.BufferGeometry[] = [];

        console.log(`MeshConverter: Starte Umwandlung für "${object.name}"...`);

        // 1. Vorbereitung der Matrizen
        object.updateMatrixWorld(true);
        const worldToLocal = new THREE.Matrix4().copy(object.matrixWorld).invert();

        // 2. Alle Meshes sammeln (Sichtbarkeit ignorieren, um wiederholte Konvertierung zu ermöglichen)
        object.traverse(c => {
            if (c instanceof THREE.Mesh && !c.userData.isGeneratedVisual && !c.name.includes('Helper') && c.name !== 'Viz_Boundary' && !c.userData.isHighlight) {
                if (c.geometry && c.geometry.attributes.position && c.geometry.attributes.position.count > 0) {
                    const g = c.geometry.clone();
                    
                    const relMatrix = new THREE.Matrix4().multiplyMatrices(worldToLocal, c.matrixWorld);
                    g.applyMatrix4(relMatrix);
                    
                    const det = relMatrix.determinant();
                    if (det < 0 && g.index) {
                        const idx = g.index;
                        for (let i = 0; i < idx.count; i += 3) {
                            const v1 = idx.getX(i);
                            const v2 = idx.getX(i + 1);
                            idx.setX(i, v2);
                            idx.setX(i + 1, v1);
                        }
                    }

                    this.snapGeometryToGrid(g);
                    
                    // BEHALTE ALLE ATTRIBUTE BEI, INSBESONDERE NORMALEN FÜR RAYCASTING
                    const clean = new THREE.BufferGeometry();
                    clean.setAttribute('position', g.getAttribute('position'));
                    if (g.index) clean.setIndex(g.index);
                    if (g.attributes.normal) clean.setAttribute('normal', g.getAttribute('normal'));
                    if (g.attributes.uv) clean.setAttribute('uv', g.getAttribute('uv'));
                    
                    // MERGE VERTICES PRO TEIL (Minimiert Löcher innerhalb von Komponenten)
                    geometries.push(mergeVertices(clean, 0.001));
                    console.log(`  -> Teil gefunden: ${c.name || 'Hauptmesh'} (${g.attributes.position.count} Vertices, Mirrored: ${det < 0})`);
                }
            }
        });

        if (geometries.length === 0) {
            console.warn("MeshConverter: Keine gültigen Geometrien gefunden!");
            return null;
        }

        // 3. Alles verschmelzen
        let finalGeo = geometries.length === 1 ? geometries[0] : mergeGeometries(geometries, false);
        
        // FIX: Entferne Attribute, die das Verschweißen verhindern könnten.
        // Bei ExtrudeGeometry haben Deckflächen und Seitenwände oft unterschiedliche UVs/Normalen an den Kanten.
        // Damit 'mergeVertices' sie als denselben Vertex erkennt, müssen wir diese Unterschiede ignorieren.
        // Wir löschen sie temporär und berechnen Normalen neu. UVs gehen dabei an den Nähten verloren, was für reine Geometrie (CNC/Druck) okay ist.
        finalGeo.deleteAttribute('normal');
        finalGeo.deleteAttribute('uv');

        // Finales Verschweißen der Nahtstellen (0.1 Toleranz) und Normalen neu berechnen
        // Erhöhte Toleranz (0.1 statt 0.01), um unsaubere Boolesche Kanten zu schließen.
        finalGeo = mergeVertices(finalGeo, 0.1); 
        finalGeo.computeVertexNormals();

        // --- DIAGNOSE ---
        const holeCount = this.countHoles(finalGeo);
        console.log(`MeshConverter: Umwandlung abgeschlossen.`);
        console.log(`- Teile verschmolzen: ${geometries.length}`);
        console.log(`- Finale Vertices: ${finalGeo.attributes.position.count}`);
        console.log(`- Löcher gefunden: ${holeCount} ${holeCount === 0 ? "(Wasserdicht ✔)" : "(WARNUNG ⚠)"}`);

        // --- FARBE ÜBERNEHMEN ---
        let originalColor = '#ff0000';
        if (object.userData.materialParams?.color) {
            originalColor = object.userData.materialParams.color;
        }

        // --- MATERIAL ERSTELLEN ---
        const params = object.userData.materialParams || {};
        const opacity = Math.round((params.opacity !== undefined ? params.opacity : 1) * 100) / 100;
        const material = new THREE.MeshStandardMaterial({ 
            color: new THREE.Color(params.color || originalColor), 
            side: THREE.DoubleSide,
            wireframe: params.wireframe !== undefined ? params.wireframe : false,
            roughness: params.roughness !== undefined ? params.roughness : 0.5,
            metalness: params.metalness !== undefined ? params.metalness : 0.1,
            flatShading: params.flatShading !== undefined ? params.flatShading : false,
            opacity: opacity,
            transparent: opacity < 1,
            depthWrite: opacity >= 1
        });

        const newMesh = new THREE.Mesh(finalGeo, material);
        newMesh.name = object.name + "_Mesh";
        
        // WICHTIG: Da die Geometrie bereits im lokalen Raum der Gruppe 'object' liegt,
        // darf das Mesh-Kind keine eigene Transformation haben (Identität).
        newMesh.position.set(0, 0, 0);
        newMesh.rotation.set(0, 0, 0);
        newMesh.scale.set(1, 1, 1);
        
        newMesh.userData.type = 'converted_mesh';
        newMesh.userData.isMesh = true;
        newMesh.userData.openEdgeCount = holeCount; // Loch-Anzahl speichern
        
        newMesh.userData.materialParams = {
            color: params.color || originalColor,
            wireframe: params.wireframe !== undefined ? params.wireframe : false,
            roughness: params.roughness !== undefined ? params.roughness : 0.5,
            metalness: params.metalness !== undefined ? params.metalness : 0.1,
            flatShading: params.flatShading !== undefined ? params.flatShading : false,
            opacity: opacity
        };

        return newMesh;
    }

    private static snapGeometryToGrid(geometry: THREE.BufferGeometry) {
        if (!geometry || !geometry.attributes || !geometry.attributes.position) return;
        const pos = geometry.attributes.position, precision = 100;
        for (let i = 0; i < pos.count; i++) {
            pos.setXYZ(i, 
                Math.round(pos.getX(i) * precision) / precision, 
                Math.round(pos.getY(i) * precision) / precision, 
                Math.round(pos.getZ(i) * precision) / precision
            );
        }
        pos.needsUpdate = true;
    }

    public static mergeAndCountHoles(geo: THREE.BufferGeometry): number {
        const tempGeo = geo.clone();
        tempGeo.deleteAttribute('normal');
        tempGeo.deleteAttribute('uv');
        
        // Merge to close seams
        const mergedGeo = mergeVertices(tempGeo, 0.1);
        
        // Count holes
        return this.countHoles(mergedGeo);
    }

    public static countHoles(geo: THREE.BufferGeometry): number {
        if (!geo.index) return 0;
        const edgeCount = new Map<string, number>();
        const idx = geo.index;
        for (let i = 0; i < idx.count; i += 3) {
            const a = idx.getX(i), b = idx.getX(i+1), c = idx.getX(i+2);
            [[a, b], [b, c], [c, a]].forEach(([v1, v2]) => {
                const key = v1 < v2 ? `${v1}_${v2}` : `${v2}_${v1}`;
                edgeCount.set(key, (edgeCount.get(key) || 0) + 1);
            });
        }
        let holes = 0;
        edgeCount.forEach(count => { if (count === 1) holes++; });
        return holes;
    }
}