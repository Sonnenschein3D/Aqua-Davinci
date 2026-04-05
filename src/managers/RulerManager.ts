import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ViewManager, ViewType } from './ViewManager';

export class RulerManager {
    private eventBus: EventBus;
    private viewManager: ViewManager;
    
    private topRulerCanvas: HTMLCanvasElement;
    private leftRulerCanvas: HTMLCanvasElement;
    private topCtx: CanvasRenderingContext2D;
    private leftCtx: CanvasRenderingContext2D;
    
    private rulerThickness = 20;
    private toolbarWidth = 35;
    private headerHeight = 40;  
    private propertiesWidth = 0;
    private footerHeight = 30;

    constructor(eventBus: EventBus, viewManager: ViewManager) {
        this.eventBus = eventBus;
        this.viewManager = viewManager;
        
        this.topRulerCanvas = document.createElement('canvas');
        this.leftRulerCanvas = document.createElement('canvas');
        this.topCtx = this.topRulerCanvas.getContext('2d')!;
        this.leftCtx = this.leftRulerCanvas.getContext('2d')!;

        this.setupRulers();
        this.initListeners();
        
        setTimeout(() => this.updateRulers(), 100);
    }

    private setupRulers() {
        const container = document.getElementById('app');
        if (!container) return;

        const setStyle = (c: HTMLCanvasElement, isTop: boolean) => {
            c.style.position = 'absolute';
            c.style.backgroundColor = '#222'; 
            c.style.zIndex = '100'; 
            c.style.pointerEvents = 'none'; 
            
            if (isTop) {
                c.style.top = this.headerHeight + 'px'; 
                c.style.left = (this.toolbarWidth + this.rulerThickness) + 'px'; 
                c.style.height = this.rulerThickness + 'px';
                c.style.right = this.propertiesWidth + 'px'; 
            } else {
                c.style.top = (this.headerHeight + this.rulerThickness) + 'px'; 
                c.style.left = this.toolbarWidth + 'px';
                c.style.width = this.rulerThickness + 'px';
                c.style.bottom = this.footerHeight + 'px';
            }
            container.appendChild(c);
        };

        setStyle(this.topRulerCanvas, true);
        setStyle(this.leftRulerCanvas, false);

        const corner = document.createElement('div');
        Object.assign(corner.style, {
            position: 'absolute', 
            top: this.headerHeight + 'px', 
            left: this.toolbarWidth + 'px',
            width: this.rulerThickness + 'px', 
            height: this.rulerThickness + 'px',
            background: '#333', zIndex: '101',
            borderRight: '1px solid #555', borderBottom: '1px solid #555',
            color: '#aaa', fontSize: '9px', display: 'flex', 
            alignItems: 'center', justifyContent: 'center'
        });
        corner.innerText = "mm";
        container.appendChild(corner);
    }

    private initListeners() {
        this.eventBus.on('camera-change', () => requestAnimationFrame(() => this.updateRulers()));
        this.eventBus.on('properties-panel-visible', () => {
            this.propertiesWidth = 150;
            this.topRulerCanvas.style.right = this.propertiesWidth + 'px';
            requestAnimationFrame(() => this.updateRulers());
        });
        this.eventBus.on('properties-panel-hidden', () => {
            this.propertiesWidth = 0;
            this.topRulerCanvas.style.right = this.propertiesWidth + 'px';
            requestAnimationFrame(() => this.updateRulers());
        });
    }

    // Projects a world point to screen pixel coordinates relative to the canvas
    private getScreenPos(worldPos: THREE.Vector3, camera: THREE.Camera, canvasRect: DOMRect): THREE.Vector2 {
        const p = worldPos.clone();
        p.project(camera); // NDC: -1 to +1
        
        const x = (p.x * 0.5 + 0.5) * canvasRect.width;
        const y = (-(p.y * 0.5) + 0.5) * canvasRect.height;
        
        return new THREE.Vector2(x + canvasRect.left, y + canvasRect.top);
    }

    private updateRulers() {
        const view = (this.viewManager as any).getActiveView ? (this.viewManager as any).getActiveView() : ViewType.PERSPECTIVE;
        
        this.topRulerCanvas.style.display = 'block';
        this.leftRulerCanvas.style.display = 'block';

        const camera = this.viewManager.getActiveCamera();
        if (!camera) return;

        const container = document.getElementById('app');
        if (!container) return;

        // Force matrix update
        camera.updateMatrixWorld();

        // 1. Resize Canvases
        const topRulerLeftOffset = this.toolbarWidth + this.rulerThickness;
        const topRulerWidth = container.clientWidth - topRulerLeftOffset - this.propertiesWidth;
        this.topRulerCanvas.width = topRulerWidth;
        this.topRulerCanvas.height = this.rulerThickness;

        const leftRulerTopOffset = this.headerHeight + this.rulerThickness;
        const leftRulerHeight = container.clientHeight - leftRulerTopOffset - this.footerHeight;
        this.leftRulerCanvas.width = this.rulerThickness;
        this.leftRulerCanvas.height = leftRulerHeight;

        // 2. Geometry & Projection
        const canvas = this.viewManager.getCanvas();
        const canvasRect = canvas.getBoundingClientRect();
        const topRulerRect = this.topRulerCanvas.getBoundingClientRect();
        const leftRulerRect = this.leftRulerCanvas.getBoundingClientRect();

        // Project World Origin (0,0,0) to Screen Pixels
        const zeroOnScreen = this.getScreenPos(new THREE.Vector3(0,0,0), camera, canvasRect);

        // Project a reference point (100 units on dominant axis) to measure scale
        let refPoint = new THREE.Vector3(100, 0, 0);
        
        // Determine axes based on view
        // In Top View: X is Horizontal, Z is Vertical.
        if (view === ViewType.TOP || view === ViewType.PERSPECTIVE) {
            refPoint.set(100, 0, 0); // Measure X scale
        } else if (view === ViewType.FRONT) {
            refPoint.set(100, 0, 0);
        } else if (view === ViewType.LEFT) {
            refPoint.set(0, 0, 100); // Measure Z scale as horizontal
        }

        const refOnScreen = this.getScreenPos(refPoint, camera, canvasRect);
        
        // Calculate Scale (Pixels per Unit) based on Horizontal X distance
        // (Assuming uniform scale for X and Y/Z usually, but we use X delta for horizontal ruler)
        // const pixelDist = refOnScreen.distanceTo(zeroOnScreen); 
        const pxPerUnit = Math.abs(refOnScreen.x - zeroOnScreen.x) / 100;
        
        // --- TOP RULER (Horizontal) ---
        // Where is '0' relative to the canvas start?
        // zeroOnScreen.x is absolute page pixel.
        // Ruler starts at topRulerRect.left.
        const zeroX_rel = zeroOnScreen.x - topRulerRect.left;
        this.drawRulerAnchor(this.topCtx, true, zeroX_rel, pxPerUnit);


        // --- LEFT RULER (Vertical) ---
        // For vertical scale, we need Y component
        // In TOP view: Z grows DOWN. 
        // 0 is at zeroOnScreen.y.
        // 100 is at ... let's check Z=100 projection
        let vRefPoint = new THREE.Vector3(0,0,0);
        if (view === ViewType.TOP || view === ViewType.PERSPECTIVE) vRefPoint.set(0, 0, 100);
        else vRefPoint.set(0, 100, 0); // Front/Left uses Y
        
        const vRefScreen = this.getScreenPos(vRefPoint, camera, canvasRect);
        const pxPerUnitY = Math.abs(vRefScreen.y - zeroOnScreen.y) / 100;

        // Is the axis inverted? (Value grows Up or Down?)
        // Top View: Z grows Down. (Pixel Y increases as Value increases).
        // Front View: Y grows Up. (Pixel Y decreases as Value increases).
        const isInverted = (vRefScreen.y < zeroOnScreen.y); // If 100 is "above" 0 in pixels -> Inverted (Y-Up behavior)

        // Where is '0' relative to ruler top?
        const zeroY_rel = zeroOnScreen.y - leftRulerRect.top;
        
        this.drawRulerAnchor(this.leftCtx, false, zeroY_rel, pxPerUnitY, isInverted);
    }

    private drawRulerAnchor(ctx: CanvasRenderingContext2D, isHorizontal: boolean, zeroPos: number, pixelsPerUnit: number, inverted: boolean = false) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#222';
        ctx.fillRect(0, 0, width, height);
        
        ctx.strokeStyle = '#666';
        ctx.fillStyle = '#aaa';
        ctx.font = '10px sans-serif';
        ctx.lineWidth = 1;
        ctx.beginPath();

        if (isHorizontal) {
            ctx.moveTo(0, height - 0.5);
            ctx.lineTo(width, height - 0.5);
        } else {
            ctx.moveTo(width - 0.5, 0);
            ctx.lineTo(width - 0.5, height);
        }
        ctx.stroke();

        // Calculate Steps
        let step = 1;
        while (step * pixelsPerUnit < 50) {
            if (step.toString().startsWith('1')) step *= 2;      
            else if (step.toString().startsWith('2')) step *= 2.5; 
            else step *= 2;                                      
        }

        // Determine visible range
        // If isHorizontal: Visible pixels 0 to width.
        // Val = (px - zeroPos) / pixelsPerUnit
        // If Inverted: Val = (zeroPos - px) / pixelsPerUnit
        
        const getVal = (px: number) => {
            if (inverted) return (zeroPos - px) / pixelsPerUnit;
            return (px - zeroPos) / pixelsPerUnit;
        };

        const startVal = getVal(0);
        const endVal = getVal(isHorizontal ? width : height);

        const minVal = Math.min(startVal, endVal);
        const maxVal = Math.max(startVal, endVal);
        const firstTick = Math.ceil(minVal / step) * step;

        for (let val = firstTick; val <= maxVal; val += step) {
            // Get pixel from val
            // px = zeroPos + val * ppu (Normal)
            // px = zeroPos - val * ppu (Inverted)
            let px = 0;
            if (inverted) px = zeroPos - val * pixelsPerUnit;
            else px = zeroPos + val * pixelsPerUnit;

            px = Math.floor(px) + 0.5;

            ctx.beginPath();
            
            // Highlight Zero
            if (Math.abs(val) < 0.0001) {
                ctx.strokeStyle = '#ff4444'; 
                ctx.lineWidth = 2;
            } else {
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 1;
            }

            if (isHorizontal) {
                if (px >= -5 && px <= width + 5) {
                    ctx.moveTo(px, height);
                    ctx.lineTo(px, height - 5);
                    ctx.stroke();
                    
                    const labelVal = Math.round(val * 100) / 100;
                    ctx.fillStyle = Math.abs(val) < 0.0001 ? '#ff4444' : '#aaa';
                    ctx.fillText(labelVal.toString(), px + 2, height - 8);
                }
            } else {
                if (px >= -5 && px <= height + 5) {
                    ctx.moveTo(width, px);
                    ctx.lineTo(width - 5, px);
                    ctx.stroke();

                    const labelVal = Math.round(val * 100) / 100;
                    ctx.save();
                    ctx.translate(width - 8, px + 2);
                    ctx.rotate(-Math.PI / 2);
                    ctx.fillStyle = Math.abs(val) < 0.0001 ? '#ff4444' : '#aaa';
                    ctx.fillText(labelVal.toString(), 0, 0);
                    ctx.restore();
                }
            }
        }
    }
}