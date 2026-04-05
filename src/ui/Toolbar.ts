import { EventBus } from '../core/EventBus';
import * as THREE from 'three'; // Needed for Image() texture loading
import { DebugConsole } from './DebugConsole';

declare global {
    interface Window {
        showSaveFilePicker?(options?: any): Promise<FileSystemFileHandle>;
        showOpenFilePicker?(options?: any): Promise<FileSystemFileHandle[]>;
    }
}

export class Toolbar {
    private eventBus: EventBus;
    private leftToolbar!: HTMLElement;
    private topToolbar!: HTMLElement;
    private bottomToolbar!: HTMLElement;
    private imageFileInput!: HTMLInputElement; // Renamed to avoid confusion
    private projectFileInput!: HTMLInputElement;
    private projectNameDisplay!: HTMLElement;
    readonly debugConsole: DebugConsole;
    private selectButton!: HTMLButtonElement;
    private orbitButton!: HTMLButtonElement;
    private isSelectToolActive: boolean = false;
    private perspectiveSelectMode: boolean = false;

            constructor(eventBus: EventBus) {
                this.eventBus = eventBus;
                this.debugConsole = new DebugConsole();
                this.createToolbars();
        this.initListeners();
        // Request initial name
        setTimeout(() => this.eventBus.emit('request-project-name', null), 100);
    }

    private createToolbars() {
        // Top Toolbar (Header)
        this.topToolbar = document.createElement('div');
        Object.assign(this.topToolbar.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#222',
            padding: '0 10px',
            borderBottom: '1px solid #444',
            zIndex: '4000',
            boxSizing: 'border-box'
        });
        document.body.appendChild(this.topToolbar);

        // Left Toolbar (Sidebar)
        this.leftToolbar = document.createElement('div');
        Object.assign(this.leftToolbar.style, {
            position: 'absolute',
            top: '40px', 
            left: '0',
            width: '35px',
            height: 'calc(100% - 70px)', // Minus Header (40) and Footer (30)
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            background: '#222',
            padding: '10px 0',
            borderRight: '1px solid #444',
            zIndex: '3000',
            boxSizing: 'border-box'
        });
        document.body.appendChild(this.leftToolbar);

        // Bottom Toolbar (Footer)
        this.bottomToolbar = document.createElement('div');
        Object.assign(this.bottomToolbar.style, {
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            background: '#222',
            padding: '0 10px',
            borderTop: '1px solid #444',
            zIndex: '3000',
            boxSizing: 'border-box'
        });
        document.body.appendChild(this.bottomToolbar);

        // --- TOP TOOLBAR CONTENT ---
        
        // 1. "Datei" Menu (renamed to '...')
        this.createMenuButton('...', [
            { label: 'Neues Projekt', action: () => this.eventBus.emit('new-project', null) },
            { label: 'Projekt laden', action: () => this.triggerProjectLoad() },
            { label: 'Projekt speichern', action: () => this.eventBus.emit('save-project', null) },
            { label: 'Speichern unter...', action: () => this.eventBus.emit('save-project-as', null) },
            { label: 'Exportieren (STL)', action: () => this.eventBus.emit('export-stl', null) },
            { label: 'Hintergrundbild laden', action: () => this.triggerImageUpload() },
            { label: 'Einstellungen', action: () => this.eventBus.emit('open-settings', null) }
        ], this.topToolbar);

        // 5. Delete Button (Trash Can) - Centered symbol
        const deleteBtn = document.createElement('button');
        deleteBtn.title = 'Ausgewählte Objekte löschen (Entf)';
        deleteBtn.innerHTML = '🗑️'; // Trash can emoji
        Object.assign(deleteBtn.style, {
            width: '25px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            transition: 'all 0.2s',
            fontSize: '14px',
            marginLeft: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '1'
        });
        deleteBtn.onclick = () => {
             this.eventBus.emit('delete-selected-object', null);
        };
        this.topToolbar.appendChild(deleteBtn);

        // Separator
        const sepTop = document.createElement('div');
        sepTop.style.cssText = "width: 1px; height: 20px; background: #555; margin: 0 5px;";
        this.topToolbar.appendChild(sepTop);

        // 2. Select Button - toggle button that switches between orbit and selection mode in perspective view
        this.selectButton = document.createElement('button');
        this.selectButton.innerHTML = '➤';
        this.selectButton.title = 'Selektieren (V)';
        this.selectButton.dataset.id = 'select';
        Object.assign(this.selectButton.style, {
            width: '25px',
            height: '25px',
            fontSize: '14px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: '#888',
            borderRadius: '4px',
            transition: 'all 0.2s'
        });
        this.selectButton.onclick = (e) => {
            e.stopPropagation();
            if (!this.isSelectToolActive) {
                // Activate select tool (resets perspective mode to orbit via ViewManager)
                this.eventBus.emit('tool-selected', 'select');
            } else {
                // Already active: toggle perspective orbit/select mode
                const newMode = this.perspectiveSelectMode ? 'orbit' : 'select';
                this.eventBus.emit('perspective-mode-changed', newMode);
            }
        };
        this.topToolbar.appendChild(this.selectButton);

        // 3. Snap Button
        const snapBtn = document.createElement('button');
        snapBtn.title = 'Rasterfang (Snap)';
        // Custom Magnet Icon: U-shape with filled rectangles at tips
        snapBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block; margin:auto;">
            <path d="M6 9 V 15 A 6 6 0 0 0 18 15 V 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <rect x="3" y="4" width="6" height="5" fill="currentColor" />
            <rect x="15" y="4" width="6" height="5" fill="currentColor" />
        </svg>`;
        
        Object.assign(snapBtn.style, {
            width: '25px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: '#888', // Default inactive color
            borderRadius: '4px',
            transition: 'all 0.2s',
            padding: '0'
        });

        let isSnapActive = false; // Default off
        
        const updateSnapState = () => {
            if (isSnapActive) {
                snapBtn.style.background = '#007acc';
                snapBtn.style.borderColor = '#00aaff';
                snapBtn.style.color = 'white';
            } else {
                snapBtn.style.background = '#333';
                snapBtn.style.borderColor = '#555';
                snapBtn.style.color = '#888';
            }
        };

        snapBtn.onclick = () => {
            isSnapActive = !isSnapActive;
            this.eventBus.emit('toggle-snap', isSnapActive);
            updateSnapState();
        };
        updateSnapState(); // Set initial state
        this.topToolbar.appendChild(snapBtn);

        // 4. Center Group (Project Name & Fullscreen)
        const centerGroup = document.createElement('div');
        Object.assign(centerGroup.style, {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        });

        this.projectNameDisplay = document.createElement('div');
        Object.assign(this.projectNameDisplay.style, {
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            pointerEvents: 'none'
        });
        this.projectNameDisplay.innerText = "Lade...";
        centerGroup.appendChild(this.projectNameDisplay);

        // Fullscreen Toggle Button in Center
        const fullscreenBtn = document.createElement('button');
        const updateFullscreenIcon = () => {
            fullscreenBtn.innerHTML = document.fullscreenElement
                ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;"><path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            fullscreenBtn.title = document.fullscreenElement ? 'Vollbild beenden (F11)' : 'Vollbild (F11)';
        };
        Object.assign(fullscreenBtn.style, {
            width: '25px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            transition: 'all 0.2s',
            padding: '0',
        });
        fullscreenBtn.onclick = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        };
        document.addEventListener('fullscreenchange', updateFullscreenIcon);
        updateFullscreenIcon();
        centerGroup.appendChild(fullscreenBtn);

        this.topToolbar.appendChild(centerGroup);

        // Right Group (Push to right)
        const rightGroup = document.createElement('div');
        rightGroup.style.cssText = "margin-left: auto; display: flex; align-items: center; gap: 10px;";
        this.topToolbar.appendChild(rightGroup);

        // Brush Settings in Right Group
        const btnBrushSettings = document.createElement('button');
        btnBrushSettings.innerHTML = "🖌️ 1";
        btnBrushSettings.title = "Maschinenpinsel";
        Object.assign(btnBrushSettings.style, {
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            fontSize: '13px',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        });
        btnBrushSettings.onclick = () => {
            this.eventBus.emit('tool-selected', 'machine_brush_view');
            this.eventBus.emit('open-brush-properties', null);
        };
        rightGroup.appendChild(btnBrushSettings);

        // --- View Options Group ---
        const viewGroup = document.createElement('div');
        viewGroup.style.cssText = "display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;";
        rightGroup.appendChild(viewGroup);

        // --- CNC / ROBOT CONTROLS ---
        const cncGroup = document.createElement('div');
        cncGroup.style.cssText = "margin-left: 10px; display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;";
        rightGroup.appendChild(cncGroup);

        

        const btnGenerateGcode = document.createElement('button');
        btnGenerateGcode.innerHTML = "📝";
        btnGenerateGcode.title = "G-Code generieren";
        Object.assign(btnGenerateGcode.style, {
            width: '30px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        });
        btnGenerateGcode.onclick = () => {
            this.eventBus.emit('cnc-generate-gcode', null);
        };
        cncGroup.appendChild(btnGenerateGcode);

        const btnStartPainting = document.createElement('button');
        btnStartPainting.innerHTML = "▶️";
        btnStartPainting.title = "Malprozess starten";
        Object.assign(btnStartPainting.style, {
            width: '30px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        });
        btnStartPainting.onclick = () => {
            this.eventBus.emit('cnc-start-painting', null);
        };
        cncGroup.appendChild(btnStartPainting);


        // --- LEFT TOOLBAR CONTENT ---
        // Add Drawing Tools to Left
        this.addButton('line', '─', 'Linie (L)', this.leftToolbar);
        this.addButton('square', '■', 'Quadrat (S)', this.leftToolbar);
        this.addButton('circle', '●', 'Kreis (C)', this.leftToolbar);
        this.addButton('brush_create', '🖌️', 'Pinsel-Kreator', this.leftToolbar);

        // Special 3D Shapes Group
        const sep = document.createElement('div');
        sep.style.cssText = "width: 80%; height: 1px; background: #444; margin: 5px 0;";
        this.leftToolbar.appendChild(sep);




        // --- BOTTOM TOOLBAR CONTENT ---

        // Center: Orbit Button
        const centerBottom = document.createElement('div');
        Object.assign(centerBottom.style, {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
        });
        this.bottomToolbar.appendChild(centerBottom);

        this.orbitButton = document.createElement('button');
        this.orbitButton.title = 'Kamera-Orbit (Perspektivansicht) – Selektion deaktiviert';
        this.orbitButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;">
            <path d="M20 12 A 8 8 0 1 1 12 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <polyline points="12,1 12,5 16,5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        Object.assign(this.orbitButton.style, {
            width: '25px',
            height: '25px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#007acc',
            color: 'white',
            borderRadius: '4px',
            transition: 'all 0.2s',
            padding: '0',
        });
        this.orbitButton.onclick = () => {
            this.eventBus.emit('perspective-mode-changed', 'orbit');
        };
        centerBottom.appendChild(this.orbitButton);

        // Spacer to push right
        const spacerBottom = document.createElement('div');
        spacerBottom.style.flexGrow = '1';
        this.bottomToolbar.appendChild(spacerBottom);

        // Add Focus Button
        const btnFocus = document.createElement('button');
        btnFocus.innerHTML = "⌖";
        btnFocus.title = "Ansicht zentrieren";
        btnFocus.style.cssText = "width: 25px; height: 25px; background: #444; color: white; border: 1px solid #555; padding: 0; font-size: 16px; cursor: pointer; border-radius: 3px; display: flex; align-items: center; justify-content: center;";
        btnFocus.onclick = () => this.eventBus.emit('ui-focus-clicked', null);
        this.bottomToolbar.appendChild(btnFocus);


        // --- HIDDEN FILE INPUTS ---
        this.imageFileInput = document.createElement('input'); // For background image
        this.imageFileInput.type = 'file';
        this.imageFileInput.accept = 'image/*';
        this.imageFileInput.style.display = 'none';
        this.imageFileInput.onchange = (e) => this.handleImageUpload(e);
        document.body.appendChild(this.imageFileInput);

        this.projectFileInput = document.createElement('input'); // For project loading
        this.projectFileInput.type = 'file';
        this.projectFileInput.accept = 'application/json';
        this.projectFileInput.style.display = 'none';
        this.projectFileInput.onchange = (e) => this.handleProjectUpload(e);
        document.body.appendChild(this.projectFileInput);
    }

    private createMenuButton(label: string, items: { label: string, action: () => void }[], container: HTMLElement) {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';

        const btn = document.createElement('button');
        btn.innerText = label;
        btn.style.cssText = "background: #333; color: white; border: 1px solid #555; padding: 5px 10px; font-size: 12px; cursor: pointer; border-radius: 4px;";
        
        const menu = document.createElement('div');
        Object.assign(menu.style, {
            position: 'absolute',
            top: '100%',
            left: '0',
            background: '#333',
            border: '1px solid #555',
            minWidth: '150px',
            display: 'none',
            zIndex: '10000',
            flexDirection: 'column',
            marginTop: '2px',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.5)'
        });

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerText = item.label;
            Object.assign(itemDiv.style, {
                padding: '8px 10px',
                cursor: 'pointer',
                color: '#eee',
                fontSize: '12px',
                borderBottom: '1px solid #444'
            });
            itemDiv.onmouseenter = () => itemDiv.style.background = '#444';
            itemDiv.onmouseleave = () => itemDiv.style.background = '#333';
            itemDiv.onclick = () => {
                menu.style.display = 'none';
                item.action();
            };
            menu.appendChild(itemDiv);
        });

        // Toggle menu
        btn.onclick = (e) => {
            e.stopPropagation();
            const isVisible = menu.style.display === 'flex';
            // Hide all other menus if any
            document.querySelectorAll('.toolbar-menu').forEach(el => (el as HTMLElement).style.display = 'none');
            menu.style.display = isVisible ? 'none' : 'flex';
        };

        // Close on click outside
        window.addEventListener('click', () => {
            menu.style.display = 'none';
        });

        menu.classList.add('toolbar-menu');
        wrapper.appendChild(btn);
        wrapper.appendChild(menu);
        container.appendChild(wrapper);
    }

    private triggerImageUpload() {
        this.imageFileInput.click();
    }

    private async triggerProjectLoad() {
        if (window.showOpenFilePicker) {
            try {
                const [handle] = await window.showOpenFilePicker({
                    types: [{
                        description: 'JSON-Projektdateien',
                        accept: { 'application/json': ['.json'] },
                    }],
                    multiple: false
                });
                this.eventBus.emit('load-project-from-handle', handle);
            } catch (err) {
                if ((err as DOMException).name === 'AbortError') return;
                console.error("Error loading file via API:", err);
                this.projectFileInput.click(); // Fallback
            }
        } else {
            this.projectFileInput.click();
        }
    }

    private handleProjectUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            this.eventBus.emit('load-project', file);
        }
        input.value = ''; // Reset
    }

    private handleImageUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const texture = new THREE.Texture(img);
                    texture.needsUpdate = true;
                    // Default width/height (e.g., 200 units, maintain aspect)
                    const aspect = img.width / img.height;
                    const width = 200;
                    const height = 200 / aspect;
                    
                    // Emit event to create object
                    this.eventBus.emit('create-background-image', { texture, width, height });
                };
                img.onerror = () => {
                    console.error("Toolbar: Image failed to load. The data URL might be corrupt or invalid.");
                };
                img.src = e.target?.result as string;
            };
            
            reader.onerror = () => {
                console.error("Toolbar: FileReader failed to read the file.");
            };

            reader.readAsDataURL(file);
        }
        input.value = ''; // Reset
    }

    private addButton(id: string, symbol: string, title: string, container: HTMLElement, onClickCallback?: () => void) {
        const btn = document.createElement('button');
        btn.innerHTML = symbol;
        btn.title = title;
        btn.dataset.id = id;
        
        Object.assign(btn.style, {
            width: '25px',
            height: '25px',
            fontSize: '14px',
            cursor: 'pointer',
            border: '1px solid #555',
            background: '#333',
            color: 'white',
            borderRadius: '4px',
            transition: 'all 0.2s'
        });

        btn.onclick = (e) => {
            e.stopPropagation();
            this.eventBus.emit('tool-selected', id);
            if (onClickCallback) {
                onClickCallback();
            }
        };

        container.appendChild(btn);
    }

    private updateSelectBtnState() {
        if (!this.selectButton) return;
        if (this.isSelectToolActive && this.perspectiveSelectMode) {
            this.selectButton.style.background = '#007acc';
            this.selectButton.style.borderColor = '#00aaff';
            this.selectButton.style.color = 'white';
            this.selectButton.title = 'Selektieren (V) – Auswahlmodus aktiv';
        } else {
            this.selectButton.style.background = '#333';
            this.selectButton.style.borderColor = '#555';
            this.selectButton.style.color = '#888';
            this.selectButton.title = 'Selektieren (V)';
        }
    }

    private updateOrbitBtnState() {
        if (!this.orbitButton) return;
        const isOrbitActive = !this.perspectiveSelectMode;
        if (isOrbitActive) {
            this.orbitButton.style.background = '#007acc';
            this.orbitButton.style.borderColor = '#00aaff';
            this.orbitButton.style.color = 'white';
        } else {
            this.orbitButton.style.background = '#333';
            this.orbitButton.style.borderColor = '#555';
            this.orbitButton.style.color = '#888';
        }
    }

    private initListeners() {
        this.eventBus.on('tool-active-changed', (toolId: string | null) => {
            this.isSelectToolActive = (toolId === 'select');
            if (!this.isSelectToolActive) this.perspectiveSelectMode = false;
            this.updateActiveState(toolId);
            this.updateSelectBtnState();
            this.updateOrbitBtnState();
        });

        this.eventBus.on('perspective-mode-changed', (mode: 'orbit' | 'select') => {
            this.perspectiveSelectMode = (mode === 'select');
            this.updateSelectBtnState();
            this.updateOrbitBtnState();
        });

        this.eventBus.on('project-name-changed', (name: string) => {
            if (this.projectNameDisplay) {
                this.projectNameDisplay.innerText = name;
            }
        });
    }

    private updateActiveState(activeId: string | null) {
        const allButtons = document.querySelectorAll('button[data-id]');
        allButtons.forEach(btn => {
            const htmlBtn = btn as HTMLButtonElement;
            if (htmlBtn.dataset.id === activeId) {
                htmlBtn.style.background = '#007acc';
                htmlBtn.style.borderColor = '#00aaff';
            } else {
                htmlBtn.style.background = '#333';
                htmlBtn.style.borderColor = '#555';
            }
        });
    }
}
