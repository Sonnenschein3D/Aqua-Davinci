import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export enum ViewType {
    TOP = 'TOP',
    PERSPECTIVE = 'PERSPECTIVE',
    FRONT = 'FRONT',
    LEFT = 'LEFT'
}

interface ViewDefinition {
    type: ViewType;
    container: HTMLElement;
    camera: THREE.Camera;
    scene: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    target: THREE.Vector3;
}

export class ViewManager {
    private _eventBus: EventBus;
    private container: HTMLElement;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    
    private views: { [key in ViewType]?: ViewDefinition } = {};
    private activeView: ViewType = ViewType.PERSPECTIVE;
    private viewLabel: HTMLElement;
    private viewMenu: HTMLElement | null = null;
    private viewMenuCloseHandler: ((e: MouseEvent | TouchEvent) => void) | null = null;
    private resetButton: HTMLElement;
    private controls: OrbitControls | null = null;
    private currentToolId: string | null = null;
    private perspectiveSelectMode: boolean = false;

    constructor(eventBus: EventBus, containerId: string, scene: THREE.Scene) {
        this._eventBus = eventBus;
        this.scene = scene;
        console.log("ViewManager initialized");
        
        const el = document.getElementById(containerId);
        if (!el) throw new Error(`Container ${containerId} not found`);
        this.container = el;

        const labelContainer = document.createElement('div');
        labelContainer.style.position = 'absolute';
        labelContainer.style.top = '65px'; 
        labelContainer.style.left = '75px';
        labelContainer.style.display = 'flex';
        labelContainer.style.gap = '15px';
        labelContainer.style.alignItems = 'center';
        labelContainer.style.zIndex = '2000'; 
        labelContainer.style.pointerEvents = 'none';
        this.container.appendChild(labelContainer);

        this.viewLabel = document.createElement('div');
        this.viewLabel.style.color = 'white';
        this.viewLabel.style.fontSize = '14px';
        this.viewLabel.style.fontWeight = 'bold';
        this.viewLabel.style.fontFamily = 'Arial, sans-serif';
        this.viewLabel.style.textShadow = '1px 1px 2px black';
        this.viewLabel.style.cursor = 'pointer';
        this.viewLabel.style.pointerEvents = 'auto';
        this.viewLabel.style.userSelect = 'none';
        this.viewLabel.style.textDecoration = 'underline';
        this.viewLabel.style.textDecorationColor = 'rgba(255,255,255,0.4)';
        this.viewLabel.onmouseenter = () => { this.viewLabel.style.color = '#aaddff'; };
        this.viewLabel.onmouseleave = () => { this.viewLabel.style.color = 'white'; };
        this.viewLabel.onclick = (e) => { e.stopPropagation(); this.toggleViewMenu(); };
        labelContainer.appendChild(this.viewLabel);

        this.resetButton = document.createElement('div');
        this.resetButton.innerText = 'Reset';
        this.resetButton.style.color = '#AAAAAA';
        this.resetButton.style.fontSize = '12px';
        this.resetButton.style.fontFamily = 'Arial, sans-serif';
        this.resetButton.style.cursor = 'pointer';
        this.resetButton.style.pointerEvents = 'auto';
        this.resetButton.style.textShadow = '1px 1px 2px black';
        this.resetButton.style.textDecoration = 'underline';
        
        this.resetButton.onmouseenter = () => this.resetButton.style.color = '#FFFFFF';
        this.resetButton.onmouseleave = () => this.resetButton.style.color = '#AAAAAA';
        this.resetButton.onclick = () => this.resetCurrentView();
        
        labelContainer.appendChild(this.resetButton);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true; // Enable Shadows
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows
        this.container.appendChild(this.renderer.domElement);

        this.initListeners();
        this.initViews();
        this.loadState();
        this.updateViewLabel();
        this.setupControls();

        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
        
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('beforeunload', () => this.saveState());
    }

    private initListeners() {
        this._eventBus.on('tool-selected', (toolId: string | null) => {
            if (toolId && toolId !== 'select') {
                if (toolId === 'brush_create' && this.activeView === ViewType.TOP) {
                    this.showToast("Pinsel-Erstellung nur in Front- oder Perspektivansicht sinnvoll!", 3000);
                    setTimeout(() => this._eventBus.emit('tool-selected', 'select'), 0);
                    return;
                }
                if (toolId !== 'brush_create' && (this.activeView === ViewType.FRONT || this.activeView === ViewType.LEFT)) {
                    this.showToast("Erstellen nur in Oben- oder Perspektivansicht möglich!", 3000);
                    setTimeout(() => this._eventBus.emit('tool-selected', 'select'), 0);
                    return; 
                }
            }
            // Reset perspective select mode when switching away from the select tool
            if (toolId !== 'select' && this.perspectiveSelectMode) {
                this.perspectiveSelectMode = false;
                this._eventBus.emit('perspective-mode-changed', 'orbit');
            }
            this.currentToolId = toolId;
            this.updateControlsMode();
        });

        this._eventBus.on('perspective-mode-changed', (mode: 'orbit' | 'select') => {
            this.perspectiveSelectMode = (mode === 'select');
            this.updateControlsMode();
        });
    }

    public showToast(message: string, duration: number = 3000) {
        const toast = document.createElement('div');
        toast.innerText = message;
        Object.assign(toast.style, {
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '15px 25px',
            borderRadius: '5px', fontFamily: 'Arial, sans-serif', fontSize: '14px',
            zIndex: '5000', pointerEvents: 'none', opacity: '0', transition: 'opacity 0.3s'
        });
        this.container.appendChild(toast);
        requestAnimationFrame(() => toast.style.opacity = '1');
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => { if (toast.parentElement) this.container.removeChild(toast); }, 300);
        }, duration);
    }

    private saveState() {
        if (this.controls && this.views[this.activeView]) {
            this.views[this.activeView]!.target.copy(this.controls.target);
        }
        const state: any = { activeView: this.activeView, views: {} };
        Object.values(this.views).forEach(v => {
            if (v) {
                state.views[v.type] = {
                    position: v.camera.position.toArray(),
                    target: v.target.toArray(),
                    zoom: (v.camera as any).zoom
                };
            }
        });
        localStorage.setItem('viewState', JSON.stringify(state));
    }

    private loadState() {
        const json = localStorage.getItem('viewState');
        if (!json) return;
        try {
            const state = JSON.parse(json);
            if (state.views) {
                Object.keys(state.views).forEach(key => {
                    const vState = state.views[key];
                    const view = this.views[key as ViewType];
                    if (view && vState) {
                        view.camera.position.fromArray(vState.position);
                        view.target.fromArray(vState.target);
                        if (vState.zoom) {
                            (view.camera as any).zoom = vState.zoom;
                            (view.camera as any).updateProjectionMatrix();
                        }
                    }
                });
            }
            if (state.activeView && this.views[state.activeView as ViewType]) {
                this.activeView = state.activeView as ViewType;
            }
            this._eventBus.emit('camera-change', null);
        } catch (e) { console.warn("Failed to load view state", e); }
    }

    public setActiveView(type: ViewType) {
        if (this.views[type] && this.activeView !== type) {
            if (this.controls && this.views[this.activeView]) {
                this.views[this.activeView]!.target.copy(this.controls.target);
            }
            this.activeView = type;
            this.updateViewLabel();
            this.updateControlsMode();
            this.onWindowResize();
            this.setupControls();
            this.saveState();
            this._eventBus.emit('camera-view-changed', type);
        }
    }

    public getActiveView(): ViewType { return this.activeView; }
    public getActiveCamera(): THREE.Camera | undefined { return this.views[this.activeView]?.camera; }
    public getCanvas(): HTMLCanvasElement { return this.renderer.domElement; }
    public setControlsEnabled(enabled: boolean) { if (this.controls) this.controls.enabled = enabled; }

    public focusOnObject(object: THREE.Object3D) {
        if (!this.controls) return;
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        this.controls.target.copy(center);
        const maxDim = Math.max(size.x, size.y, size.z);
        const currentView = this.views[this.activeView];
        if (currentView && currentView.camera instanceof THREE.PerspectiveCamera) {
             const fov = 45; 
             let cameraZ = Math.abs(maxDim / 2 / Math.tan(Math.PI * fov / 360)) * 1.2;
             const offset = new THREE.Vector3().subVectors(currentView.camera.position, center).normalize().multiplyScalar(cameraZ);
             currentView.camera.position.copy(center).add(offset);
        } else if (currentView && currentView.camera instanceof THREE.OrthographicCamera) {
            const baseHeight = 1000; 
            let zoom = baseHeight / (maxDim * 1.2);
            currentView.camera.zoom = Math.min(Math.max(zoom, 0.01), 100); 
            currentView.camera.updateProjectionMatrix();
        }
        this.controls.update();
        this._eventBus.emit('camera-change', null);
    }

    public getScene(): THREE.Scene { return this.scene; }
    public getControls(): OrbitControls | null { return this.controls; }

    private resetCurrentView() {
        const view = this.views[this.activeView];
        if (!view) return;
        const camDist = 50000;
        view.target.set(0, 0, 0);
        if (this.controls) this.controls.target.set(0, 0, 0);
        switch (this.activeView) {
            case ViewType.TOP:
                view.camera.position.set(0, camDist, 0);
                view.camera.lookAt(0, 0, 0);
                view.camera.up.set(0, 0, -1);
                break;
            case ViewType.FRONT:
                view.camera.position.set(0, 0, camDist);
                view.camera.lookAt(0, 0, 0);
                break;
            case ViewType.LEFT:
                view.camera.position.set(-camDist, 0, 0);
                view.camera.lookAt(0, 0, 0);
                break;
            case ViewType.PERSPECTIVE:
                view.camera.position.set(500, 500, 500);
                view.camera.lookAt(0, 0, 0);
                break;
        }
        if (view.camera instanceof THREE.PerspectiveCamera || view.camera instanceof THREE.OrthographicCamera) {
            if (view.camera instanceof THREE.OrthographicCamera) view.camera.zoom = 1;
            view.camera.updateProjectionMatrix();
        }
        if (this.controls) this.controls.update();
        this.saveState();
        this._eventBus.emit('camera-change', null);
    }

    private updateViewLabel() {
        const names = { [ViewType.TOP]: 'Oben', [ViewType.FRONT]: 'Vorne', [ViewType.LEFT]: 'Links', [ViewType.PERSPECTIVE]: 'Perspektive' };
        this.viewLabel.innerText = names[this.activeView];
    }

    private toggleViewMenu() {
        if (this.viewMenu) {
            this.closeViewMenu();
            return;
        }
        const names: { [key in ViewType]: string } = {
            [ViewType.TOP]: 'Oben',
            [ViewType.FRONT]: 'Vorne',
            [ViewType.LEFT]: 'Links',
            [ViewType.PERSPECTIVE]: 'Perspektive'
        };
        const menu = document.createElement('div');
        this.viewMenu = menu;
        Object.assign(menu.style, {
            position: 'absolute',
            top: '85px',
            left: '75px',
            background: 'rgba(30, 30, 30, 0.95)',
            border: '1px solid #555',
            borderRadius: '4px',
            zIndex: '3000',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            minWidth: '130px'
        });
        ([ViewType.PERSPECTIVE, ViewType.TOP, ViewType.FRONT, ViewType.LEFT] as ViewType[]).forEach(type => {
            const item = document.createElement('div');
            const isActive = type === this.activeView;
            Object.assign(item.style, {
                padding: '8px 14px',
                color: isActive ? '#aaddff' : '#dddddd',
                cursor: 'pointer',
                fontWeight: isActive ? 'bold' : 'normal',
                background: isActive ? 'rgba(0, 122, 204, 0.25)' : 'transparent',
                transition: 'background 0.15s'
            });
            item.innerText = names[type];
            item.onmouseenter = () => { if (type !== this.activeView) item.style.background = 'rgba(255,255,255,0.08)'; };
            item.onmouseleave = () => { if (type !== this.activeView) item.style.background = 'transparent'; };
            item.onclick = (e) => {
                e.stopPropagation();
                this.closeViewMenu();
                this.setActiveView(type);
            };
            menu.appendChild(item);
        });
        this.container.appendChild(menu);
        const closeOnOutside = (e: MouseEvent | TouchEvent) => {
            if (!menu.contains(e.target as Node) && !this.viewLabel.contains(e.target as Node)) {
                this.closeViewMenu();
            }
        };
        this.viewMenuCloseHandler = closeOnOutside;
        document.addEventListener('mousedown', closeOnOutside);
        document.addEventListener('touchstart', closeOnOutside);
    }

    private closeViewMenu() {
        if (this.viewMenu) {
            if (this.viewMenu.parentElement) this.viewMenu.parentElement.removeChild(this.viewMenu);
            this.viewMenu = null;
        }
        if (this.viewMenuCloseHandler) {
            document.removeEventListener('mousedown', this.viewMenuCloseHandler);
            document.removeEventListener('touchstart', this.viewMenuCloseHandler);
            this.viewMenuCloseHandler = null;
        }
    }

    private setupControls() {
        if (this.controls) this.controls.dispose();
        const currentView = this.views[this.activeView];
        if (!currentView) return;
        this.controls = new OrbitControls(currentView.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.addEventListener('end', () => this.saveState());
        this.controls.addEventListener('change', () => this._eventBus.emit('camera-change', null));
        this.controls.target.copy(currentView.target);
        this.updateControlsMode();
        this.controls.enableRotate = this.activeView === ViewType.PERSPECTIVE;
        this.controls.update(); 
    }

    private updateControlsMode() {
        if (!this.controls) return;
        const isSelectionTool = this.currentToolId === null || this.currentToolId === 'select';
        const isPerspective = this.activeView === ViewType.PERSPECTIVE;
        if (isPerspective && this.perspectiveSelectMode) {
            // Perspective select mode: disable left-button orbit so marquee can work
            this.controls.mouseButtons = { LEFT: null as any, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN } as any;
            this.controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
        } else if (isSelectionTool || isPerspective) {
            this.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN } as any;
            this.controls.touches = isPerspective
                ? { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }
                : { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
        } else {
            this.controls.mouseButtons = { LEFT: null as any, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN } as any;
            this.controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
        }
    }

    private initViews() {
        const aspect = this.container.clientWidth / this.container.clientHeight;
        const viewSize = 500;
        const camDist = 50000; 

        const topCam = new THREE.OrthographicCamera(-viewSize * aspect, viewSize * aspect, viewSize, -viewSize, -1000000, 1000000);
        topCam.position.set(0, camDist, 0); 
        topCam.lookAt(0, 0, 0);
        topCam.up.set(0, 0, -1);

        const perspCam = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000000);
        perspCam.position.set(500, 500, 500); 
        perspCam.lookAt(0, 0, 0);

        const frontCam = new THREE.OrthographicCamera(-viewSize * aspect, viewSize * aspect, viewSize, -viewSize, -1000000, 1000000);
        frontCam.position.set(0, 0, camDist);
        frontCam.lookAt(0, 0, 0);

        const leftCam = new THREE.OrthographicCamera(-viewSize * aspect, viewSize * aspect, viewSize, -viewSize, -1000000, 1000000);
        leftCam.position.set(-camDist, 0, 0);
        leftCam.lookAt(0, 0, 0);

        this.views[ViewType.TOP] = { type: ViewType.TOP, container: this.container, camera: topCam, scene: this.scene, target: new THREE.Vector3(0,0,0) };
        this.views[ViewType.PERSPECTIVE] = { type: ViewType.PERSPECTIVE, container: this.container, camera: perspCam, scene: this.scene, target: new THREE.Vector3(0,0,0) };
        this.views[ViewType.FRONT] = { type: ViewType.FRONT, container: this.container, camera: frontCam, scene: this.scene, target: new THREE.Vector3(0,0,0) };
        this.views[ViewType.LEFT] = { type: ViewType.LEFT, container: this.container, camera: leftCam, scene: this.scene, target: new THREE.Vector3(0,0,0) };
    }

    private onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.renderer.setSize(width, height);
        const aspect = width / height;
        const viewSize = 500;
        // const clipRange = 1000000;

        Object.values(this.views).forEach(v => {
             if (v && v.camera instanceof THREE.OrthographicCamera) {
                 v.camera.left = -viewSize * aspect;
                 v.camera.right = viewSize * aspect;
                 v.camera.top = viewSize;
                 v.camera.bottom = -viewSize;
                 v.camera.near = -1000000;
                 v.camera.far = 1000000;
                 v.camera.updateProjectionMatrix();
             } else if (v && v.camera instanceof THREE.PerspectiveCamera) {
                 v.camera.aspect = aspect;
                 v.camera.updateProjectionMatrix();
             }
        });
        this._eventBus.emit('camera-change', null);
    }

    private animate() {
        requestAnimationFrame(this.animate);
        if (this.controls) this.controls.update();
        const view = this.views[this.activeView];
        if (view) { this.renderer.clear(); this.renderer.render(view.scene, view.camera); }
    }
}
