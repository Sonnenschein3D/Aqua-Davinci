import { EventBus } from '../core/EventBus';
import * as THREE from 'three';
import { ObjectManager } from '../managers/ObjectManager';
import { SpinCtrl } from './components/SpinCtrl';
import { ShapeFactory } from '../geometries/ShapeFactory';
// import { BrushVisualizer } from './BrushVisualizer';

export class PropertiesPanel {
    private eventBus: EventBus;
    private objectManager: ObjectManager;
    private container: HTMLElement;
    private currentObject: THREE.Object3D | null = null;
    private openSections: Set<string> = new Set(['Geometrie', 'Aktionen', 'Pinsel 1']);

    private brushState = {
        type: 'Rundpinsel',
        diameter: 5,
        length: 20,
        color: '#ff0000',
        grayscale: false,
        grayValue: 128, // 0-255
        transparency: 1.0,
        showMachineBrush: false
    };

    constructor(eventBus: EventBus, objectManager: ObjectManager, _scene: THREE.Scene) {
        this.eventBus = eventBus;
        this.objectManager = objectManager;
        this.container = document.createElement('div');
        this.setupContainer();
        this.initListeners();
    }

    private setupContainer() {
        Object.assign(this.container.style, {
            position: 'absolute',
            top: '40px', 
            right: '0',
            width: '150px', 
            height: 'calc(100% - 70px)', 
            background: '#222', 
            color: 'white',
            padding: '10px',
            borderLeft: '1px solid #444',
            fontFamily: 'Arial, sans-serif',
            fontSize: '12px', 
            zIndex: '1000',
            boxSizing: 'border-box',
            overflowY: 'auto'
        });
        this.container.id = 'properties-panel';
        this.container.style.display = 'none';
        
        // Prevent events from bubbling
        ['mousedown', 'mouseup', 'mousemove', 'wheel', 'keydown', 'keyup'].forEach(evt => 
            this.container.addEventListener(evt, (e) => e.stopPropagation())
        );

        document.body.appendChild(this.container);
    }

    private initListeners() {
        this.eventBus.on('open-brush-properties', () => {
            this.showBrushProperties();
        });

        this.eventBus.on('brush-state-changed', (state: any) => {
            Object.assign(this.brushState, state);
            if (this.container.dataset.objUuid === 'brush-settings') {
                this.showBrushProperties();
            }
        });

        this.eventBus.on('selection-changed', (selected: THREE.Object3D[]) => {
            if (selected.length === 1) {
                this.showProperties(selected[0]);
            } else {
                this.showEmpty();
            }
        });

        this.eventBus.on('object-added', () => {
            if (this.currentObject) this.renderPanel(this.currentObject);
            else this.showEmpty();
        });

        this.eventBus.on('object-removed', () => {
            if (this.currentObject) this.renderPanel(this.currentObject);
            else this.showEmpty();
        });
        
        this.eventBus.on('object-modified', (object: THREE.Object3D) => {
            if (this.currentObject && this.currentObject.uuid === object.uuid) {
                this.refreshContent(object);
            }
        });

        this.eventBus.on('preview-object-updated', (object: THREE.Object3D | null) => {
            if (object) {
                this.showProperties(object);
            } else if (this.currentObject && this.currentObject === object) {
                this.showEmpty();
            }
        });
    }

    private showBrushProperties() {
        try {
            this.currentObject = null;
            this.container.style.display = 'block';
            this.container.innerHTML = '';
            this.container.dataset.objUuid = 'brush-settings';

            const updateBrush = () => {
                this.eventBus.emit('brush-state-changed', this.brushState);
            };

            // --- Header ---
            const headerRow = document.createElement('div');
            headerRow.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;";
            const title = document.createElement('h3');
            title.innerText = "Pinsel Einstellungen";
            title.style.cssText = "margin: 0; font-size: 12px; font-weight: normal; color: #ccc;";
            headerRow.appendChild(title);
            this.container.appendChild(headerRow);

            // --- MAIN CONTENT ---
            const brushContent = document.createElement('div');
            this.container.appendChild(brushContent);

            // 1. Sub-Section: Geometrie
            const geoHeader = document.createElement('div');
            geoHeader.innerText = "Geometrie";
            geoHeader.style.cssText = "font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;";
            brushContent.appendChild(geoHeader);

            // Visibility Checkbox
            const visibilityRow = document.createElement('div');
            visibilityRow.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";
            const visibilityLabel = document.createElement('span');
            visibilityLabel.innerText = "Pinsel anzeigen";
            visibilityRow.appendChild(visibilityLabel);

            const visibilityCheck = document.createElement('input');
            visibilityCheck.type = 'checkbox';
            visibilityCheck.checked = this.brushState.showMachineBrush;
            visibilityCheck.onchange = () => {
                this.brushState.showMachineBrush = visibilityCheck.checked;
                updateBrush();
            };
            visibilityRow.appendChild(visibilityCheck);
            brushContent.appendChild(visibilityRow);

            // Profile Select (replaces Type Select)
            const profileContent = document.createElement('div');
            const profileLabel = document.createElement('span');
            profileLabel.innerText = "Profil";
            profileLabel.style.fontSize = "11px";

            const profileSelect = document.createElement('select');
            profileSelect.style.cssText = "width: 100%; margin: 2px 0 5px 0; background: #111; color: white; border: 1px solid #444;";
            
            profileContent.appendChild(profileLabel);
            profileContent.appendChild(profileSelect);
            // Removed loadBtn creation and appending
            
            const updateProfileList = (profiles: Record<string, any>) => {
                profileSelect.innerHTML = '';
                // Add default option
                const defaultOption = document.createElement('option');
                defaultOption.value = "__default_round__";
                defaultOption.innerText = "Standard Rundpinsel";
                profileSelect.appendChild(defaultOption);

                Object.keys(profiles).forEach(name => {
                    const option = document.createElement('option');
                    option.value = name;
                    option.innerText = name;
                    profileSelect.appendChild(option);
                });
            };

            profileSelect.onchange = () => { // Changed from loadBtn.onclick to profileSelect.onchange
                const selectedName = profileSelect.value;
                if (selectedName === "__default_round__") {
                    this.eventBus.emit('load-brush-state', {
                        // This needs to be the default bezier profile for a round brush
                        // I will have to find these default values.
                        // For now, let's just emit an event that main.ts can interpret.
                        type: 'Rundpinsel',
                        bezierProfile: null // Signal to reset to default
                    });
                    return;
                }

                this.eventBus.emit('request-brush-profiles', (profiles: Record<string, any>) => {
                    const selectedProfile = profiles[selectedName];
                    if (selectedProfile) {
                        this.eventBus.emit('load-brush-state', { ...this.brushState, ...selectedProfile });
                    }
                });
            };

            this.eventBus.on('brush-profiles-updated', updateProfileList);
            this.eventBus.emit('request-brush-profiles', updateProfileList); // Initial population

            brushContent.appendChild(profileContent);

            // --- Save Current Brush Profile Button ---
            const saveCurrentProfileBtn = document.createElement('button');
            saveCurrentProfileBtn.innerText = "Aktuelles Profil speichern";
            saveCurrentProfileBtn.style.cssText = "width: 100%; padding: 5px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 10px; margin-bottom: 10px;";
            saveCurrentProfileBtn.onclick = () => {
                const name = prompt("Bitte geben Sie einen Namen für das aktuelle Pinselprofil ein:");
                if (name) {
                    this.eventBus.emit('request-brush-state-sync', (mainBrushState: any) => {
                        // Ensure bezierProfile is taken from the mainBrushState as it's the source of truth
                        // brushState in PropertiesPanel only holds UI-editable values, not the full bezier profile data
                        const profileToSave = { ...this.brushState, bezierProfile: mainBrushState.bezierProfile };
                        this.eventBus.emit('save-brush-profile-current-state', { name, profile: profileToSave });
                        alert(`Profil "${name}" wurde gespeichert.`);
                    });
                }
            };
            brushContent.appendChild(saveCurrentProfileBtn);


            // Diameter SpinCtrl
            new SpinCtrl(brushContent, 'Durchm.', this.brushState.diameter, 0.5, (val) => {
                this.brushState.diameter = val;
                updateBrush();
            }, 0.1, 50);

            // Length SpinCtrl
            new SpinCtrl(brushContent, 'Länge', this.brushState.length, 1, (val) => {
                this.brushState.length = val;
                updateBrush();
            }, 1, 200);

            // Spacer
            const spacer = document.createElement('div');
            spacer.style.height = "15px";
            brushContent.appendChild(spacer);

            // 2. Sub-Section: Farbe
            const colorHeader = document.createElement('div');
            colorHeader.innerText = "Farbe";
            colorHeader.style.cssText = "font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;";
            brushContent.appendChild(colorHeader);

            // Grayscale Checkbox
            const grayRow = document.createElement('div');
            grayRow.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";
            const grayLabel = document.createElement('span');
            grayLabel.innerText = "Graustufen";
            grayRow.appendChild(grayLabel);

            const grayCheck = document.createElement('input');
            grayCheck.type = 'checkbox';
            grayCheck.checked = this.brushState.grayscale;
            grayRow.appendChild(grayCheck);
            brushContent.appendChild(grayRow);

            // Container for either Color Picker or Grayscale Slider
            const colorValueContainer = document.createElement('div');
            brushContent.appendChild(colorValueContainer);

            // Transparency/Opacity SpinCtrl (Always visible)
            new SpinCtrl(brushContent, 'Deckkraft', this.brushState.transparency, 0.1, (val) => {
                this.brushState.transparency = val;
                updateBrush();
            }, 0, 1, 2);

            // Logic to swap color inputs
            const renderColorInput = () => {
                colorValueContainer.innerHTML = ''; 

                if (this.brushState.grayscale) {
                    new SpinCtrl(colorValueContainer, 'Grauwert', this.brushState.grayValue, 1, (val) => {
                        this.brushState.grayValue = Math.round(val);
                        const grayHex = Math.round(this.brushState.grayValue).toString(16).padStart(2, '0');
                        this.brushState.color = `#${grayHex}${grayHex}${grayHex}`;
                        updateBrush();
                    }, 0, 255, 0);
                } else {
                    const colorRow = document.createElement('div');
                    colorRow.style.cssText = "display: flex; align-items: center; justify-content: space-between; font-size: 11px; margin-bottom: 5px;";
                    const colorLabel = document.createElement('span');
                    colorLabel.innerText = "Pinsel-Farbe";
                    colorRow.appendChild(colorLabel);

                    const colorInput = document.createElement('input');
                    colorInput.type = 'color';
                    colorInput.value = this.brushState.color;
                    colorInput.style.cssText = "background: none; border: none; width: 30px; height: 20px; cursor: pointer;";
                    colorInput.onchange = () => { 
                        this.brushState.color = colorInput.value; 
                        updateBrush();
                    };
                    colorRow.appendChild(colorInput);
                    colorValueContainer.appendChild(colorRow);
                }
            };

            renderColorInput();

            grayCheck.onchange = () => { 
                this.brushState.grayscale = grayCheck.checked; 
                renderColorInput(); 
                updateBrush();
            };

        } catch (e) {
            console.error("PropertiesPanel: Error in showBrushProperties", e);
        }
    }

    private showEmpty() {
        this.currentObject = null;
                // if (this.brushVisualizer) this.brushVisualizer.setVisible(false);
        this.container.style.display = 'none';
    }

    private showProperties(obj: THREE.Object3D) {
                // if (this.brushVisualizer) this.brushVisualizer.setVisible(false);
        this.container.style.display = 'block';
        if (this.currentObject === obj) {
            this.refreshContent(obj);
            return;
        }
        this.currentObject = obj;
        this.renderPanel(obj);
    }

    private refreshContent(obj: THREE.Object3D) {
        // Re-render but try to keep scroll position or accordion state?
        // For simplicity, just re-render now. A real app would save state.
        this.renderPanel(obj);
    }

    private renderPanel(obj: THREE.Object3D) {
                // if (this.brushVisualizer) this.brushVisualizer.setVisible(false);
        this.container.innerHTML = '';
        this.container.dataset.objUuid = obj.uuid;

        // --- Header ---
        const headerRow = document.createElement('div');
        headerRow.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;";
        const title = document.createElement('h3');
        title.innerText = "Eigenschaften";
        title.style.cssText = "margin: 0; font-size: 13px;";
        headerRow.appendChild(title);
        
        // --- Object Counter ---
        const allObjects = this.objectManager.getObjects();
        const visibleObjects = allObjects.filter((o: THREE.Object3D) => o.visible).length;
        const counterDiv = document.createElement('div');
        counterDiv.style.cssText = "font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;";
        counterDiv.innerText = `Objekte: ${allObjects.length} (${visibleObjects} sichtbar)`;
        
        this.container.appendChild(headerRow);
        this.container.appendChild(counterDiv);
        
        // --- Name ---
        const nameRow = document.createElement('div');
        nameRow.style.cssText = "display: flex; align-items: center; margin-bottom: 10px;";
        const nameLabel = document.createElement('div');
        nameLabel.innerText = "Name:";
        nameLabel.style.cssText = "width: 35px; margin-right: 2px; font-size: 11px; font-weight: bold;";
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = obj.name;
        nameInput.style.cssText = "flex: 1; min-width: 0; background: #333; color: white; border: 1px solid #444; padding: 2px 5px; font-size: 11px;";
        nameInput.onchange = () => { obj.name = nameInput.value; };
        nameRow.appendChild(nameLabel);
        nameRow.appendChild(nameInput);
        this.container.appendChild(nameRow);

        // --- SECTIONS ---

        // 1. Material (Accordion)
        const matContent = this.createMaterialEditor(obj);
        this.container.appendChild(this.createAccordionSection("Material", matContent)); // Default closed via logic

        // 2. Geometrie (Accordion)
        const geoContent = document.createElement('div');
        this.renderGeometryControls(obj, geoContent);
        this.container.appendChild(this.createAccordionSection("Geometrie", geoContent)); // Default open via logic

        // 3. Aktionen (Accordion)
        const isBooleanResult = obj.userData.type === 'boolean_result';

        if (isBooleanResult) {
            const modContent = document.createElement('div');
            
            const info = document.createElement('div');
            info.style.cssText = "color: #888; font-style: italic; font-size: 10px; padding: 5px;";
            info.innerText = "Boolesches Objekt";
            modContent.appendChild(info);

            // --- General Status Indicator ---
            const statusDiv = document.createElement('div');
            statusDiv.id = `status-manifold-${obj.uuid}`;
            statusDiv.style.cssText = "padding: 5px; margin-top: 10px; background: #333; border-radius: 3px; font-size: 10px; border: 1px solid #444; border-left: 3px solid #888;";
            const edgeCount = obj.userData.openEdgeCount || 0;
            if (edgeCount === 0) {
                statusDiv.style.borderLeftColor = "#88ff88";
                statusDiv.innerHTML = `<span style="color:#88ff88;">✔ Modell ist wasserdicht</span>`;
            } else {
                statusDiv.style.borderLeftColor = "#ff4444";
                statusDiv.innerHTML = `<span style="color:#ff4444;">⚠ Warnung: ${edgeCount} Löcher gefunden!</span><br><span style="color:#aaa;">Modell ist nicht geschlossen.</span>`;
            }
            modContent.appendChild(statusDiv);
            
            this.container.appendChild(this.createAccordionSection("Aktionen", modContent));
        }

        // 4. Image Analysis (For background images)
        if (obj.userData.type === 'background_image') {
            const analysisContent = document.createElement('div');
            let layerCount = 4;
            let columnsCount = 1;

            new SpinCtrl(analysisContent, 'Anzahl Schichten', layerCount, 1, (val) => {
                layerCount = Math.max(2, Math.floor(val));
            }, 2, 16);

            new SpinCtrl(analysisContent, 'Spalten', columnsCount, 1, (val) => {
                columnsCount = Math.max(1, Math.floor(val));
            }, 1, 16);

            const analyzeBtn = document.createElement('button');
            analyzeBtn.innerText = "Analyse starten";
            analyzeBtn.style.cssText = "background:#007acc; border:1px solid #00aaff; color:white; cursor:pointer; padding: 5px; font-size: 11px; margin-top: 10px; width: 100%;";
            analyzeBtn.onclick = () => {
                this.eventBus.emit('image-analysis-start', { layers: layerCount, columns: columnsCount });
            };
            analysisContent.appendChild(analyzeBtn);
            
            this.container.appendChild(this.createAccordionSection("Bildanalyse", analysisContent));
        }
    }

    private createAccordionSection(title: string, content: HTMLElement): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = "margin-bottom: 5px; border: 1px solid #444; border-radius: 3px; overflow: hidden;";

        const header = document.createElement('div');
        header.style.cssText = "background: #333; color: #ddd; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; justify-content: space-between; align-items: center;";
        
        const titleSpan = document.createElement('span');
        titleSpan.innerText = title;
        
        // Use persisted state or fallback to default
        const isOpen = this.openSections.has(title);
        // Logic: if not in set, check default. Wait, constructor initializes Set with defaults.
        // So checking set is sufficient.
        // Actually, if user closes a default-open one, it's removed from set.
        // If user opens a default-closed one, it's added.
        // So 'isOpenDefault' param is only useful if we haven't initialized the set yet?
        // But we initialized it in constructor.
        // Let's rely on the set.
        
        const arrow = document.createElement('span');
        arrow.innerText = isOpen ? "▼" : "▶";
        arrow.style.fontSize = "10px";

        header.appendChild(titleSpan);
        header.appendChild(arrow);

        const body = document.createElement('div');
        body.style.cssText = `padding: 5px; background: #222; display: ${isOpen ? 'block' : 'none'};`;
        body.appendChild(content);

        header.onclick = () => {
            const isVisible = body.style.display === 'block';
            if (isVisible) {
                body.style.display = 'none';
                arrow.innerText = "▶";
                this.openSections.delete(title);
            } else {
                body.style.display = 'block';
                arrow.innerText = "▼";
                this.openSections.add(title);
            }
        };

        wrapper.appendChild(header);
        wrapper.appendChild(body);
        return wrapper;
    }

    private createMaterialEditor(obj: THREE.Object3D): HTMLElement {
        const container = document.createElement('div');
        
        // Init default params if missing
        if (!obj.userData.materialParams) {
            // Try to infer from current mesh
            let color = '#cccccc';
            // Traverse to find existing props
            obj.traverse(c => {
                if (c instanceof THREE.Mesh && (c.material as any).color) {
                    color = '#' + (c.material as any).color.getHexString();
                }
            });
            
            obj.userData.materialParams = {
                color: color,
                wireframe: false,
                roughness: 0.5,
                metalness: 0.1,
                flatShading: false,
                opacity: 1
            };
        }
        
        const params = obj.userData.materialParams;

        // Color Picker
        const colorRow = document.createElement('div');
        colorRow.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";
        const colLabel = document.createElement('span'); colLabel.innerText = "Farbe";
        const colInput = document.createElement('input');
        colInput.type = 'color';
        colInput.value = params.color;
        colInput.style.cssText = "border: none; width: 40px; height: 20px; cursor: pointer; background: none;";
        colInput.oninput = () => {
            params.color = colInput.value;
            this.eventBus.emit('update-object-geometry', obj);
        };
        colorRow.appendChild(colLabel);
        colorRow.appendChild(colInput);
        container.appendChild(colorRow);

        // Solid Checkbox (replaces Wireframe and Flat Shading)
        // Solid = true means wireframe = false
        const solidRow = document.createElement('div');
        solidRow.style.cssText = "display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";
        const solidCheck = document.createElement('input');
        solidCheck.type = 'checkbox';
        solidCheck.checked = !params.wireframe; // If wireframe is false, it is solid
        solidCheck.onchange = () => {
            params.wireframe = !solidCheck.checked;
            this.eventBus.emit('update-object-geometry', obj);
        };
        const solidLabel = document.createElement('span'); solidLabel.innerText = "Solid (Gefüllt)"; solidLabel.style.marginLeft = "5px";
        solidRow.appendChild(solidCheck); solidRow.appendChild(solidLabel);
        container.appendChild(solidRow);

        // Deckkraft (0 = fully transparent, 1 = fully opaque) – consistent with brush Deckkraft
        if (params.opacity === undefined) params.opacity = 1;
        new SpinCtrl(container, 'Deckkraft', params.opacity, 0.1, (val) => {
            params.opacity = Math.max(0, Math.min(1, val));
            this.eventBus.emit('update-object-geometry', obj);
        }, 0, 1);

        // Sync material state immediately when the panel opens
        this.eventBus.emit('update-object-geometry', obj);

        return container;
    }

    private renderGeometryControls(obj: THREE.Object3D, container: HTMLElement) {
        const type = obj.userData.type;
        
        // Stats Info (Vertices/Faces)
        if (obj instanceof THREE.Mesh || (obj instanceof THREE.Group && obj.children[0] instanceof THREE.Mesh)) {
            const mesh = obj instanceof THREE.Mesh ? obj : obj.children[0] as THREE.Mesh;
            if (mesh.geometry) {
                const v = mesh.geometry.attributes.position.count;
                const f = mesh.geometry.index ? mesh.geometry.index.count / 3 : v / 3;
                const stats = document.createElement('div');
                stats.style.cssText = "font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;";
                stats.innerText = `Vertices: ${v} | Faces: ${f}`;
                container.appendChild(stats);
            }
        }

                 if (type === 'square' || (type === 'bezier_path' && obj.userData.isClosed && !obj.name.includes('Circle'))) {             // Init Offset Data
             if (!obj.userData.offset) {
                 obj.userData.offset = { enabled: false, x: 5, z: 5 };
             }

             if (obj.userData.baseSize) {
                 new SpinCtrl(container, 'Breite', obj.userData.baseSize.width || 50, 1, (val) => {
                     obj.userData.baseSize.width = val;
                     ShapeFactory.updateRectangle(obj);
                     this.eventBus.emit('update-object-geometry', obj);
                 });
                 new SpinCtrl(container, 'Länge', obj.userData.baseSize.length || 50, 1, (val) => {
                     obj.userData.baseSize.length = val;
                     ShapeFactory.updateRectangle(obj);
                     this.eventBus.emit('update-object-geometry', obj);
                 });

// Corner Controls
                 if (!obj.userData.borderRadius) {
                     obj.userData.borderRadius = { enabled: false, radius: 10 };
                 }

                 const cornerDiv = document.createElement('div');
                 cornerDiv.style.cssText = "margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";
                 
                 const cornHeader = document.createElement('div');
                 cornHeader.innerText = "Ecken / Radius";
                 cornHeader.style.cssText = "font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;";
                 cornerDiv.appendChild(cornHeader);

                 // Checkbox
                 const cbCornRow = document.createElement('div');
                 cbCornRow.style.cssText = "display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";
                 const cbCorn = document.createElement('input');
                 cbCorn.type = 'checkbox';
                 cbCorn.checked = obj.userData.borderRadius.enabled;
                 cbCorn.onchange = () => {
                     obj.userData.borderRadius.enabled = cbCorn.checked;
                     ShapeFactory.updateRectangle(obj);
                     this.eventBus.emit('update-object-geometry', obj);
                 };
                 const cbCornLabel = document.createElement('span'); cbCornLabel.innerText = "Abgerundet"; cbCornLabel.style.marginLeft = "5px";
                 cbCornRow.appendChild(cbCorn); cbCornRow.appendChild(cbCornLabel);
                 cornerDiv.appendChild(cbCornRow);

                 // SpinCtrl
                 new SpinCtrl(cornerDiv, 'Radius', obj.userData.borderRadius.radius, 1, (val) => {
                     obj.userData.borderRadius.radius = val;
                     if (obj.userData.borderRadius.enabled) {
                         ShapeFactory.updateRectangle(obj);
                         this.eventBus.emit('update-object-geometry', obj);
                     }
                 });
                 container.appendChild(cornerDiv);

                 // Offset Controls
                 {
                     const offsetDiv = document.createElement('div');
                     offsetDiv.style.cssText = "margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";
                     
                     const offHeader = document.createElement('div');
                     offHeader.innerText = "Offset Kontur";
                     offHeader.style.cssText = "font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;";
                     offsetDiv.appendChild(offHeader);

                     // Checkbox
                     const cbRow = document.createElement('div');
                     cbRow.style.cssText = "display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";
                     const cb = document.createElement('input');
                     cb.type = 'checkbox';
                     cb.checked = obj.userData.offset.enabled;
                     cb.onchange = () => {
                         obj.userData.offset.enabled = cb.checked;
                         ShapeFactory.updateRectangle(obj);
                         this.eventBus.emit('update-object-geometry', obj);
                     };
                     const cbLabel = document.createElement('span'); cbLabel.innerText = "Aktivieren"; cbLabel.style.marginLeft = "5px";
                     cbRow.appendChild(cb); cbRow.appendChild(cbLabel);
                     offsetDiv.appendChild(cbRow);

                     // SpinCtrls
                     new SpinCtrl(offsetDiv, 'Abstand X', obj.userData.offset.x, 1, (val) => {
                         obj.userData.offset.x = val;
                         if (obj.userData.offset.enabled) {
                             ShapeFactory.updateRectangle(obj);
                             this.eventBus.emit('update-object-geometry', obj);
                         }
                     });
                     new SpinCtrl(offsetDiv, 'Abstand Z', obj.userData.offset.z, 1, (val) => {
                         obj.userData.offset.z = val;
                         if (obj.userData.offset.enabled) {
                             ShapeFactory.updateRectangle(obj);
                             this.eventBus.emit('update-object-geometry', obj);
                         }
                     });

                     container.appendChild(offsetDiv);
                 }


             }
        } else if (type === 'circle' || (type === 'bezier_path' && obj.name.includes('Circle'))) {
             // Init Offset Data
             if (!obj.userData.offset) {
                 obj.userData.offset = { enabled: false, radius: 5 };
             }

             if (obj.userData.baseSize) {
                 new SpinCtrl(container, 'Radius', obj.userData.baseSize.radius || 25, 1, (val) => {
                     obj.userData.baseSize.radius = val;
                     this.updateCircle(obj);
                 });

                 // Offset Controls
                 const offsetDiv = document.createElement('div');
                 offsetDiv.style.cssText = "margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";
                 
                 const offHeader = document.createElement('div');
                 offHeader.innerText = "Offset Kontur";
                 offHeader.style.cssText = "font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;";
                 offsetDiv.appendChild(offHeader);

                 // Checkbox
                 const cbRow = document.createElement('div');
                 cbRow.style.cssText = "display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";
                 const cb = document.createElement('input');
                 cb.type = 'checkbox';
                 cb.checked = obj.userData.offset.enabled;
                 cb.onchange = () => {
                     obj.userData.offset.enabled = cb.checked;
                     this.updateCircle(obj);
                 };
                 const cbLabel = document.createElement('span'); cbLabel.innerText = "Aktivieren"; cbLabel.style.marginLeft = "5px";
                 cbRow.appendChild(cb); cbRow.appendChild(cbLabel);
                 offsetDiv.appendChild(cbRow);

                 // SpinCtrl
                 new SpinCtrl(offsetDiv, 'Abstand', obj.userData.offset.radius, 1, (val) => {
                     obj.userData.offset.radius = val;
                     if (obj.userData.offset.enabled) {
                         this.updateCircle(obj);
                     }
                 });

                 container.appendChild(offsetDiv);
             }
        }
    }

    private updateCircle(obj: THREE.Object3D) {
        const R = obj.userData.baseSize.radius;
        ShapeFactory.updateCircleRadius(obj, R);
    }
}



