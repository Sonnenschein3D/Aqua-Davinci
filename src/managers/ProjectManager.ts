import { EventBus } from "../core/EventBus";
import { ObjectManager } from "./ObjectManager";
import { ShapeFactory } from "../geometries/ShapeFactory";
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { mergeVertices, mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import * as THREE from 'three';

// Type definition for the File System Access API
declare global {
    interface Window {
        showSaveFilePicker?(options?: any): Promise<FileSystemFileHandle>;
        showOpenFilePicker?(options?: any): Promise<FileSystemFileHandle[]>;
    }
}

export class ProjectManager {
    private eventBus: EventBus;
    private objectManager: ObjectManager;
    private fileHandle: FileSystemFileHandle | null = null;
    private currentProjectName: string = 'Unbenanntes Projekt';
    private dbName = 'KonstruktionDB';
    private storeName = 'AutoSave';
    private brushProfiles: Record<string, any> = {};

    constructor(eventBus: EventBus, objectManager: ObjectManager) {
        this.eventBus = eventBus;
        this.objectManager = objectManager;

        this.loadGlobalBrushProfiles(); // Lade Pinsel beim Start

        this.eventBus.on('new-project', () => this.newProject());
        this.eventBus.on('save-project', () => this.saveProject());
        this.eventBus.on('save-project-as', () => this.saveProjectAs());
        this.eventBus.on('load-project', (file: File) => this.loadProject(file));
        this.eventBus.on('load-project-from-handle', (handle: FileSystemFileHandle) => this.loadProjectFromHandle(handle));
        this.eventBus.on('export-stl', () => this.exportSTL());
        
        // Brush Profile Management
        this.eventBus.on('save-brush-profile', ({ name, profile }) => {
            if (name && profile) {
                this.brushProfiles[name] = profile;
                this.saveGlobalBrushProfiles();
                console.log(`Brush profile "${name}" saved.`);
                this.eventBus.emit('brush-profiles-updated', this.brushProfiles);
            }
        });
        this.eventBus.on('request-brush-profiles', (callback: (profiles: Record<string, any>) => void) => {
            if (callback) {
                callback(this.brushProfiles);
            }
        });

        this.eventBus.on('save-brush-profile-current-state', ({ name, profile }) => {
            if (name && profile) {
                // Ensure bezierProfile is converted to a plain object for JSON serialization
                const serializableProfile = { ...profile };
                if (serializableProfile.bezierProfile) {
                    serializableProfile.bezierProfile = {
                        p1: { x: serializableProfile.bezierProfile.p1.x, y: serializableProfile.bezierProfile.p1.y },
                        cp1: { x: serializableProfile.bezierProfile.cp1.x, y: serializableProfile.bezierProfile.cp1.y },
                        cp2: { x: serializableProfile.bezierProfile.cp2.x, y: serializableProfile.bezierProfile.cp2.y },
                        p0: { x: serializableProfile.bezierProfile.p0.x, y: serializableProfile.bezierProfile.p0.y },
                    };
                }
                this.brushProfiles[name] = serializableProfile;
                this.saveGlobalBrushProfiles();
                console.log(`Current brush state saved as profile "${name}".`);
                this.eventBus.emit('brush-profiles-updated', this.brushProfiles);
            }
        });

        this.eventBus.on('delete-brush-profile', (name: string) => {
            if (name && this.brushProfiles[name]) {
                delete this.brushProfiles[name];
                this.saveGlobalBrushProfiles();
                console.log(`Brush profile "${name}" deleted.`);
                this.eventBus.emit('brush-profiles-updated', this.brushProfiles);
            }
        });

        // Request for current name (e.g. from UI on init)
        this.eventBus.on('request-project-name', () => {
            this.eventBus.emit('project-name-changed', this.currentProjectName);
        });

        window.addEventListener('beforeunload', () => this.saveAutoSave());
        this.loadAutoSave();

        console.log("ProjectManager initialized");
    }

    private updateProjectName(name: string) {
        this.currentProjectName = name;
        this.eventBus.emit('project-name-changed', name);
    }

    private saveGlobalBrushProfiles() {
        try {
            localStorage.setItem('aquaDavinci_brushProfiles', JSON.stringify(this.brushProfiles));
        } catch (e) {
            console.warn("Failed to save global brush profiles", e);
        }
    }

    private loadGlobalBrushProfiles() {
        try {
            const saved = localStorage.getItem('aquaDavinci_brushProfiles');
            if (saved) {
                this.brushProfiles = JSON.parse(saved);
            }
        } catch (e) {
            console.warn("Failed to load global brush profiles", e);
        }
    }

    private newProject() {
        if (confirm('Möchten Sie wirklich ein neues Projekt starten? Alle ungespeicherten Änderungen gehen verloren.')) {
            this.objectManager.clearAll();
            this.fileHandle = null;
            this.updateProjectName('Unbenanntes Projekt');
            this.clearAutoSave();
            this.eventBus.emit('ui-focus-clicked', null); 
        }
    }

    private async saveAutoSave() {
        const data = this.getProjectDataAsString();
        const request = indexedDB.open(this.dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(this.storeName)) {
                db.createObjectStore(this.storeName);
            }
        };

        request.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            store.put(data, 'lastProject');
            store.put(this.currentProjectName, 'lastProjectName');
        };
    }

    private clearAutoSave() {
        const request = indexedDB.open(this.dbName, 1);
        request.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction(this.storeName, 'readwrite');
            const store = transaction.objectStore(this.storeName);
            store.delete('lastProject');
            store.delete('lastProjectName');
        };
    }

    private loadAutoSave() {
        const request = indexedDB.open(this.dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(this.storeName)) {
                db.createObjectStore(this.storeName);
            }
        };

        request.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            
            const nameReq = store.get('lastProjectName');
            nameReq.onsuccess = () => {
                if (nameReq.result) {
                    this.updateProjectName(nameReq.result);
                }
            };

            const dataReq = store.get('lastProject');
            dataReq.onsuccess = () => {
                if (dataReq.result) {
                    try {
                        const projectData = JSON.parse(dataReq.result);
                        this.loadProjectData(projectData);
                        console.log("AutoSave loaded.");
                    } catch (e) {
                        console.error("Failed to parse AutoSave", e);
                    }
                }
            };
        };
    }

    private async saveProject() {
        if (this.fileHandle) {
            // We have a handle, just save to it
            await this.writeDataToFile(this.fileHandle);
            this.saveAutoSave();
        } else {
            // No handle, this is a "Save As" operation
            await this.saveProjectAs();
        }
    }

    private async saveProjectAs() {
        const projectDataString = this.getProjectDataAsString();

        if (window.showSaveFilePicker) {
            // Modern API: True "Save As" dialog
            try {
                const handle = await window.showSaveFilePicker({
                    suggestedName: `${this.currentProjectName}.json`,
                    types: [{
                        description: 'JSON-Projektdateien',
                        accept: { 'application/json': ['.json'] },
                    }],
                });
                this.fileHandle = handle; // Store handle for future saves
                this.updateProjectName(handle.name.replace('.json', ''));
                await this.writeDataToFile(this.fileHandle);
                this.saveAutoSave();
            } catch (err) {
                // User cancelled the dialog, which is not an error
                if ((err as DOMException).name === 'AbortError') {
                    return;
                }
                console.error("Error saving file:", err);
            }
        } else {
            // Fallback: Prompt for name and download
            const fileName = prompt("Bitte geben Sie einen Dateinamen ein:", this.currentProjectName);
            if (fileName) {
                this.updateProjectName(fileName);
                const blob = new Blob([projectDataString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${fileName}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                this.saveAutoSave();
            }
        }
    }

    private async exportSTL() {
        const selectedObjects = this.objectManager.getSelectedObjects();
        if (selectedObjects.length === 0) {
            alert("Bitte wähle ein Objekt aus, das exportiert werden soll.");
            return;
        }

        const objectToExport = selectedObjects[0];
        let meshToExport: THREE.Object3D | null = null;
        
        // Check if the object has any exportable geometry (Meshes)
        let hasMeshes = false;
        objectToExport.traverse((c) => {
            if (c instanceof THREE.Mesh && c.visible && !c.userData.isHelper && !c.userData.isGuide) {
                hasMeshes = true;
            }
        });

        if (hasMeshes) {
            meshToExport = objectToExport;
        }
        
        if (!meshToExport) {
            alert("Das ausgewählte Objekt enthält kein exportierbares 3D-Mesh. Hast du 'In Mesh umwandeln' oder 'Extrudieren' verwendet?");
            return;
        }

        // Check for Watertightness
        // Collect all geometries to check as ONE body
        const geometriesToCheck: THREE.BufferGeometry[] = [];
        
        meshToExport.updateMatrixWorld(true);
        meshToExport.traverse((c) => {
            if (c instanceof THREE.Mesh && c.geometry && c.visible && !c.userData.isHelper) {
                const clone = c.geometry.clone();
                clone.applyMatrix4(c.matrixWorld); // Bake transform
                geometriesToCheck.push(clone);
            }
        });

        let checkMesh: THREE.Mesh | null = null;
        if (geometriesToCheck.length > 0) {
            try {
                // Merge all parts into one geometry for the check
                let mergedGeo = mergeGeometries(geometriesToCheck, false);
                
                // Aggressive merge to fuse seams between parts (like heart halves)
                if (mergedGeo) {
                    // FIX: Remove attributes that prevent merging of split vertices (flat shading / UV seams)
                    mergedGeo.deleteAttribute('normal');
                    mergedGeo.deleteAttribute('uv');
                    
                    mergedGeo = mergeVertices(mergedGeo, 0.1); // Increased tolerance for multi-part objects
                    checkMesh = new THREE.Mesh(mergedGeo);
                }
            } catch (e) {
                console.warn("Geometry merge failed during check preparation", e);
            }
        }

        const openEdges = checkMesh ? this.getOpenEdges(checkMesh) : null;

        if (openEdges) {
            // Visualize Open Edges on the object
            // We need to transform lines back or just add to scene? 
            // Since we baked world matrix, adding to scene root is easiest, but let's try adding to object with inverse transform
            // Or simpler: Just warn. Visualization on a merged temp mesh is hard to map back to original structure.
            
            // Try to map visualization back to local space of objectToExport for display
            const invMatrix = objectToExport.matrixWorld.clone().invert();
            openEdges.applyMatrix4(invMatrix);
            
            objectToExport.add(openEdges);
            setTimeout(() => {
                if (openEdges.parent) openEdges.parent.remove(openEdges);
            }, 10000);

            // Warn and ask for Fix
            const closeHoles = confirm("Warnung: Das Modell ist nicht wasserdicht! Die offenen Kanten wurden ROT markiert.\n\nMöchtest du versuchen, die Löcher automatisch zu schließen (z.B. durch Vertex-Merge)?");
            
            if (closeHoles) {
                // Attempt to fix by merging vertices with tolerance on the EXPORT mesh clone
                
                // If it was a group, we might need to flatten it to fix it properly, 
                // but STLExporter handles groups. Fixing holes in a group of separate meshes is hard without merging them.
                // So if we choose to fix, we essentially convert the group to a single mesh.
                
                let fixedGeo = checkMesh!.geometry.clone(); // This is the merged geometry from check
                
                // Remove attributes that block merging
                if (fixedGeo.attributes.normal) fixedGeo.deleteAttribute('normal');
                if (fixedGeo.attributes.uv) fixedGeo.deleteAttribute('uv');

                // Apply aggressive merge to close the detected holes
                fixedGeo = mergeVertices(fixedGeo, 0.6);
                fixedGeo.computeVertexNormals();
                
                // Replace meshToExport with this new fixed single mesh
                meshToExport = new THREE.Mesh(fixedGeo, new THREE.MeshBasicMaterial());
                
            } else {
                const proceed = confirm("Möchtest du das Modell trotzdem (defekt) exportieren?");
                if (!proceed) {
                    if (openEdges.parent) openEdges.parent.remove(openEdges);
                    return;
                }
            }
        }

        // Prepare for Export (Coordinate System Correction)
        // THREE.js is Y-Up. STL/Slicers are usually Z-Up.
        // We need to rotate -90 degrees around X to lay the XZ plane flat on the slicer bed.
        
        const exportPivot = new THREE.Group();
        exportPivot.rotation.x = -Math.PI / 2;
        
        let objectForExport: THREE.Object3D;
        
        // If we fixed the mesh, meshToExport is already a new detached instance
        // If we didn't, meshToExport is the scene object, so we must clone it
        if (meshToExport.parent === null && meshToExport.uuid !== objectToExport.uuid) {
             // It's likely our new fixed mesh
             objectForExport = meshToExport;
        } else {
             // It's a scene object
             objectForExport = meshToExport.clone();
        }
        
        exportPivot.add(objectForExport);
        
        // Mirror Y axis as requested
        objectForExport.scale.y = -1;
        
        // Fix winding order for mirrored geometry to prevent inside-out normals
        objectForExport.traverse((c) => {
            if (c instanceof THREE.Mesh && c.geometry && c.geometry.index) {
                const idx = c.geometry.index;
                for (let i = 0; i < idx.count; i += 3) {
                    const v1 = idx.getX(i);
                    const v2 = idx.getX(i + 1);
                    idx.setX(i, v2);
                    idx.setX(i + 1, v1);
                }
                c.geometry.index.needsUpdate = true;
                c.geometry.computeVertexNormals();
            }
        });

        exportPivot.updateMatrixWorld(true);

        const exporter = new STLExporter();
        const options = { binary: true };
        const result = exporter.parse(exportPivot, options);
        
        const blob = new Blob([result], { type: 'application/octet-stream' });
        
        if (window.showSaveFilePicker) {
            try {
                const handle = await window.showSaveFilePicker({
                    suggestedName: `${objectToExport.name || 'Model'}.stl`,
                    types: [{
                        description: 'STL 3D Modell',
                        accept: { 'model/stl': ['.stl'] },
                    }],
                });
                const writable = await handle.createWritable();
                await writable.write(blob);
                await writable.close();
            } catch (err) {
                 if ((err as DOMException).name !== 'AbortError') console.error(err);
            }
        } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${objectToExport.name || 'Model'}.stl`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }

    private getOpenEdges(mesh: THREE.Mesh): THREE.LineSegments | null {
        if (!mesh.geometry) return null;
        
        let geo = mesh.geometry.clone();
        
        // Ensure indexed
        if (!geo.index) {
             try {
                 geo = mergeVertices(geo);
             } catch (e) {
                 console.warn("Merge vertices failed during check", e);
             }
        }
        
        if (!geo.index) return null; 
        
        const index = geo.index;
        const edges: { [key: string]: number } = {};
        
        for (let i = 0; i < index.count; i += 3) {
            const a = index.getX(i);
            const b = index.getY(i);
            const c = index.getZ(i);
            
            const addEdge = (v1: number, v2: number) => {
                const key = v1 < v2 ? `${v1}_${v2}` : `${v2}_${v1}`;
                edges[key] = (edges[key] || 0) + 1;
            };
            
            addEdge(a, b);
            addEdge(b, c);
            addEdge(c, a);
        }
        
        const pos = geo.attributes.position;
        const vertices: number[] = [];
        
        for (const key in edges) {
            if (edges[key] === 1) { // Boundary / Hole
                const parts = key.split('_');
                const v1 = parseInt(parts[0]);
                const v2 = parseInt(parts[1]);
                
                vertices.push(pos.getX(v1), pos.getY(v1), pos.getZ(v1));
                vertices.push(pos.getX(v2), pos.getY(v2), pos.getZ(v2));
            }
        }

        if (vertices.length === 0) return null;

        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const lineMat = new THREE.LineBasicMaterial({ color: 0xFF0000, linewidth: 2, depthTest: false }); // Red
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        lines.renderOrder = 9999;
        
        return lines;
    }

    private getProjectDataAsString(): string {
        const objects = this.objectManager.getObjects();
        const descriptions = objects.map(obj => ShapeFactory.describeObject(obj)).filter(d => d !== null);
        
        // Pinseleinstellungen synchron abfragen
        let brushState = null;
        this.eventBus.emit('request-brush-state-sync', (state: any) => {
            brushState = state;
        });

        const projectData = {
            version: '1.0',
            objects: descriptions,
            brushState: brushState,
            brushProfiles: this.brushProfiles
        };

        return JSON.stringify(projectData, null, 2);
    }
    
    private async writeDataToFile(handle: FileSystemFileHandle) {
        try {
            const projectDataString = this.getProjectDataAsString();
            const writable = await handle.createWritable();
            await writable.write(projectDataString);
            await writable.close();
            console.log("Project saved successfully.");
        } catch (err) {
            console.error("Failed to write to file:", err);
        }
    }

    private async loadProjectFromHandle(handle: FileSystemFileHandle) {
        if (!confirm('Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren.')) {
            return;
        }
        try {
            const file = await handle.getFile();
            this.fileHandle = handle; // STORE THE HANDLE FOR DIRECT SAVING
            this.updateProjectName(handle.name.replace('.json', ''));
            this.processProjectFile(file);
        } catch (err) {
            console.error("Failed to load project from handle:", err);
        }
    }

    private loadProject(file: File) {
        if (!confirm('Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren.')) {
            return;
        }
        
        this.updateProjectName(file.name.replace('.json', ''));
        this.fileHandle = null; // Reset file handle for legacy uploads
        this.processProjectFile(file);
    }

    private processProjectFile(file: File) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonString = e.target?.result as string;
                const projectData = JSON.parse(jsonString);
                this.loadProjectData(projectData);
            } catch (err) {
                alert('Fehler beim Laden der Projektdatei. Ist die Datei korrekt?');
                console.error(err);
            }
        };
        reader.readAsText(file);
    }

    private loadProjectData(projectData: any) {
        if (!projectData.objects || projectData.version !== '1.0') {
            throw new Error('Incompatible or invalid project file.');
        }

        this.objectManager.clearAll();
        
        // Load brush profiles if they exist and merge with global ones
        if (projectData.brushProfiles) {
            this.brushProfiles = { ...this.brushProfiles, ...projectData.brushProfiles };
            this.saveGlobalBrushProfiles(); // Save merged profiles globally
        }
        this.eventBus.emit('brush-profiles-updated', this.brushProfiles);

        setTimeout(() => {
            if (projectData.brushState) {
                this.eventBus.emit('load-brush-state', projectData.brushState);
            }
            projectData.objects.forEach((desc: any) => {
                const newObj = ShapeFactory.recreateShape(desc);
                if (newObj) {
                    this.objectManager.addObject(newObj, false); 
                }
            });
            this.objectManager.deselectAll();
            this.eventBus.emit('tool-selected', 'select'); // Reset to default tool
            this.eventBus.emit('camera-change', null);
            this.saveAutoSave(); // Update AutoSave after loading
        }, 100);
    }
}
