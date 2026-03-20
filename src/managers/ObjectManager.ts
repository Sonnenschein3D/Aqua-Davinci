import * as THREE from 'three';
import { EventBus } from '../core/EventBus';

export class ObjectManager {
    private eventBus: EventBus;
    private scene: THREE.Scene;
    private objects: THREE.Object3D[] = [];
    private selectedObjects: Set<THREE.Object3D> = new Set();

    constructor(eventBus: EventBus, scene: THREE.Scene) {
        this.eventBus = eventBus;
        this.scene = scene;
        console.log("ObjectManager initialized");
        
        // Periodic check to rescue "exploded" objects
        setInterval(() => this.sanitizeObjects(), 500); // Faster check

        this.eventBus.on('object-added', (obj: THREE.Object3D) => {
            this.updateObjectVisuals(obj); // Ensure initial materialParams (like wireframe) are applied immediately
        });

        this.eventBus.on('delete-selected-object', () => {
             const selected = this.getSelectedObjects();
             selected.forEach(obj => this.removeObject(obj));
             this.selectObject(null); // Clear selection state
             this.eventBus.emit('selection-changed', []);
        });

        this.eventBus.on('update-object-geometry', (object: THREE.Object3D) => {
            // Only handle if ModifierManager didn't pick it up (i.e., no modifiers)
            if (!object.userData.modifiers || object.userData.modifiers.length === 0) {
                this.updateObjectVisuals(object);
            }
        });
    }

    private updateObjectVisuals(object: THREE.Object3D) {
        const params = object.userData.materialParams;
        if (!params) return;

        const wfName = 'Visual_Wireframe_Overlay';

        // Helper function to process each mesh found
        const processMesh = (mesh: THREE.Mesh) => {
            // Skip helpers, wireframes themselves, or selection highlights
            if (mesh.userData.isHelper || mesh.name === wfName || mesh.userData.isControlPoint || mesh.userData.isAnchor) return;

            // Update Material
            const mat = mesh.material as any;
            if (mat && (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial)) {
                if (params.color) mat.color.set(params.color);
                if (params.roughness !== undefined && mat.roughness !== undefined) mat.roughness = params.roughness;
                if (params.metalness !== undefined && mat.metalness !== undefined) mat.metalness = params.metalness;
                if (params.flatShading !== undefined) {
                    mat.flatShading = params.flatShading;
                    mat.needsUpdate = true;
                }
            }

            // Update Wireframe
            let wfObj = mesh.children.find(c => c.name === wfName);
            
            if (params.wireframe) {
                if (!wfObj) {
                    const geo = mesh.geometry;
                    // Safety check for empty or invalid geometry
                    if (!geo || !geo.attributes || !geo.attributes.position || geo.attributes.position.count === 0) return;

                    const wireGeo = new THREE.EdgesGeometry(geo, 1); // 1 Grad Schwellenwert
                    const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }); 
                    wfObj = new THREE.LineSegments(wireGeo, wireMat);
                    wfObj.name = wfName;
                    wfObj.userData.isGeneratedVisual = true;
                    wfObj.renderOrder = 1; 
                    mesh.add(wfObj);
                }
                wfObj.visible = true;
            } else {
                if (wfObj) {
                    mesh.remove(wfObj);
                    if ((wfObj as any).geometry) (wfObj as any).geometry.dispose();
                    if ((wfObj as any).material) (wfObj as any).material.dispose();
                }
            }
        };

        // Recursive traversal to catch all parts of the Group
        object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                processMesh(child);
            }
        });
    }

    private sanitizeObjects() {
        const LIMIT = 50000;
        this.objects.forEach(obj => {
            // FIX: Force scale reset to prevent distortion (Oval issue)
            if (obj.scale.x !== 1 || obj.scale.y !== 1 || obj.scale.z !== 1) {
                obj.scale.set(1, 1, 1);
                obj.updateMatrixWorld();
            }

            let corrupted = false;
            if (!Number.isFinite(obj.position.x) || Math.abs(obj.position.x) > LIMIT) { obj.position.x = 0; corrupted = true; }
            if (!Number.isFinite(obj.position.y) || Math.abs(obj.position.y) > LIMIT) { obj.position.y = 0; corrupted = true; }
            if (!Number.isFinite(obj.position.z) || Math.abs(obj.position.z) > LIMIT) { obj.position.z = 0; corrupted = true; }
            
            if (corrupted) {
                console.warn(`ObjectManager: Rescued corrupted object "${obj.name}" from extreme coordinates.`);
                obj.updateMatrixWorld();
            }
        });
    }

    public selectObject(object: THREE.Object3D | null, multi: boolean = false) {
        if (!multi) {
            // Deselect all
            this.selectedObjects.forEach(obj => {
                this.setObjectHelperVisibility(obj, false);
                this.setAnchorColor(obj, 0xCCCCCC); // Light Gray when unselected
            });
            this.selectedObjects.clear();
        }

        if (object) {
            if (multi && this.selectedObjects.has(object)) {
                // Toggle off
                this.selectedObjects.delete(object);
                this.setObjectHelperVisibility(object, false);
                this.setAnchorColor(object, 0xCCCCCC);
            } else {
                // Select
                this.selectedObjects.add(object);
                this.setObjectHelperVisibility(object, true);
                this.setAnchorColor(object, 0xff0000); // Red for selected
            }
        }

        this.eventBus.emit('selection-changed', Array.from(this.selectedObjects));
    }

    public deselectAll() {
        this.objects.forEach(obj => {
            this.setObjectHelperVisibility(obj, false);
            this.setAnchorColor(obj, 0xCCCCCC);
        });
        this.selectedObjects.clear();
        this.eventBus.emit('selection-changed', []);
    }

    private setObjectHelperVisibility(object: THREE.Object3D, visible: boolean) {
        object.traverse((child) => {
            if (child.userData.isControlPoint || child.userData.isHelperLine) {
                child.visible = visible;
            } else if (child.userData.isAnchor) {
                if (child.userData.isMainAnchor) {
                    child.visible = true; // Main anchor always visible
                } else {
                    // Sub-anchors (Nodes) follow selection visibility
                    child.visible = visible; 
                }
            }
        });
    }

    private setAnchorColor(parent: THREE.Object3D, color: number) {
        const anchor = parent.children.find(c => c.userData.isAnchor && c.userData.isMainAnchor);
        if (anchor) {
            // Check for SpriteMaterial (new) or MeshBasicMaterial (legacy/fallback)
            const mat = (anchor as any).material;
            if (mat && mat.color) {
                mat.color.setHex(color);
            }
        }
    }

    public getSelectedObjects(): THREE.Object3D[] {
        return Array.from(this.selectedObjects);
    }

    public getObjects(): THREE.Object3D[] {
        return this.objects;
    }

    addObject(object: THREE.Object3D, select: boolean = true) {
        if (!object.name || object.name.startsWith('Object') || object.name.startsWith('Circle') || object.name.startsWith('Square') || object.name.startsWith('Line')) {
             const type = object.userData.type;
             let prefix = 'Objekt';
             if (type === 'line') prefix = 'Linie';
             else if (type === 'square') prefix = 'Rechteck';
             else if (type === 'circle') prefix = 'Kreis';
             else if (type === 'background_image') prefix = 'Bild';
             else if (type === 'bezier_path') prefix = object.userData.isClosed ? 'Form' : 'Pfad';
             
             // Count existing objects of this type to determine number
             const count = this.objects.filter(o => o.userData.type === type).length + 1;
             object.name = `${prefix} ${count}`;
        }
        this.scene.add(object);
        this.objects.push(object);
        if (select) {
            this.selectObject(object); // Auto-select new object (single)
        }
        this.eventBus.emit('object-added', object);
    }

    removeObject(object: THREE.Object3D) {
        if (!object) return;

        // Tiefenreinigung: Alle Kinder (auch versteckte weiße Meshes) zerstören
        object.traverse((child: any) => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach((m: any) => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });

        this.scene.remove(object);
        
        // Aus internen Listen löschen
        const index = this.objects.indexOf(object);
        if (index > -1) {
            this.objects.splice(index, 1);
        }
        this.selectedObjects.delete(object);

        console.log(`ObjectManager: Object "${object.name}" and its visuals permanently removed.`);
        this.eventBus.emit('object-removed', object);
    }

    clearAll() {
        // Clear all objects from scene and internal tracking
        this.objects.forEach(obj => {
            this.scene.remove(obj);
            // Dispose of geometry and materials to free up memory
            obj.traverse((child: any) => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((material: any) => material.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
            });
        });
        this.objects = [];
        this.selectedObjects.clear();
        this.eventBus.emit('selection-changed', []); // Notify selection is cleared
        this.eventBus.emit('objects-cleared', null); // Notify all objects are cleared
    }
}
