import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { Toolbar } from '../ui/Toolbar';
import { PropertiesPanel } from '../ui/PropertiesPanel';
import { ObjectManager } from './ObjectManager';
import { ViewManager, ViewType } from './ViewManager';

export class UIManager {
    private eventBus: EventBus;
    private viewManager: ViewManager;
    private toolbar: Toolbar;

    constructor(eventBus: EventBus, objectManager: ObjectManager, viewManager: ViewManager, scene: THREE.Scene) {
        this.eventBus = eventBus;
        this.viewManager = viewManager;
        
        this.toolbar = new Toolbar(eventBus);
        new PropertiesPanel(eventBus, objectManager, scene);
        
        this.initUIListeners();
        this.initKeyboardShortcuts();
    }

    private initUIListeners() {
        this.eventBus.on('ui-focus-clicked', () => {
            const selected = (window as any).app.objectManager.getSelectedObjects();
            if (selected.length === 1) {
                this.viewManager.focusOnObject(selected[0]);
            }
        });

        this.eventBus.on('toggle-debug-console', () => {
            this.toolbar.debugConsole.toggle();
        });
    }

    private initKeyboardShortcuts() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'F12') {
                event.preventDefault();
                this.toolbar.debugConsole.toggle();
                return;
            }

            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

            const key = event.key.toLowerCase();

            // View Switching (Priority)
            switch (key) {
                case 'p': this.viewManager.setActiveView(ViewType.PERSPECTIVE); return;
                case 't': this.viewManager.setActiveView(ViewType.TOP); return;
                case 'f': this.viewManager.setActiveView(ViewType.FRONT); return;
                case 'l': this.viewManager.setActiveView(ViewType.LEFT); return;
            }

            // Tool Shortcuts
            switch (key) {
                case 'v': this.eventBus.emit('tool-selected', 'select'); break;
                case 's': this.eventBus.emit('tool-selected', 'square'); break;
                case 'c': this.eventBus.emit('tool-selected', 'circle'); break;
                case 'escape': this.eventBus.emit('tool-selected', 'select'); break;
                case 'd': (window as any).debugScene(); break; // Debug Shortcut
            }
        });
    }
}