import * as THREE from 'three';
import { EventBus } from '../core/EventBus';
import { ViewManager, ViewType } from './ViewManager';

// language=GLSL
const vertexShader = `
  varying vec3 worldPosition;
  void main() {
    worldPosition = position; // Use object-local position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// language=GLSL
const fragmentShader = `
  varying vec3 worldPosition;
  uniform float size1;
  uniform float size2;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform int axis; // 0 for XZ-plane (Top), 1 for XY-plane (Front), 2 for YZ-plane (Left)

  float getGrid(float size) {
    vec2 coord;
    if (axis == 0) { // TOP
        coord = worldPosition.xz;
    } else if (axis == 1) { // FRONT
        coord = worldPosition.xy;
    } else { // LEFT
        coord = worldPosition.yz;
    }
    
    vec2 grid = abs(fract(coord / size - 0.5) - 0.5) / fwidth(coord / size);
    float line = min(grid.x, grid.y);
    
    return 1.0 - min(line, 1.0);
  }

  void main() {
    float grid1 = getGrid(size1); // Finer grid
    float grid2 = getGrid(size2); // Coarser grid

    vec3 finalColor = mix(color2, color1, grid2); // coarse lines are color1
    float finalGrid = max(grid1, grid2);

    gl_FragColor = vec4(finalColor, finalGrid);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
const GRID_SIZE = 16000;

function createGridMaterial(axis: number, step: number, majorStep: number): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        depthTest: false,
        uniforms: {
            size1: { value: step },
            size2: { value: majorStep },
            color1: { value: new THREE.Color(0xaaaaaa) }, // Coarse lines
            color2: { value: new THREE.Color(0x666666) }, // Fine lines
            axis: { value: axis },
        }
    });
}

export class GridManager {
    private eventBus: EventBus;
    private viewManager: ViewManager;
    private scene: THREE.Scene;

    private gridTop: THREE.Mesh | null = null;
    private gridFront: THREE.Mesh | null = null;
    private gridLeft: THREE.Mesh | null = null;
    
    private stepSize = 10; 
    private majorStep = 100;

    constructor(eventBus: EventBus, viewManager: ViewManager, scene: THREE.Scene) {
        this.eventBus = eventBus;
        this.viewManager = viewManager;
        this.scene = scene;

        this.createGrids();
        this.initListeners();
    }

    private createGrids() {
        this.clearGrids();

        // --- Top Grid (XZ Plane) ---
        const topGeo = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE, 1, 1).rotateX(Math.PI / 2);
        const topMat = createGridMaterial(0, this.stepSize, this.majorStep);
        this.gridTop = new THREE.Mesh(topGeo, topMat);
        this.gridTop.position.y = -0.05; // Offset to prevent z-fighting with axes
        this.gridTop.renderOrder = -100;
        this.scene.add(this.gridTop);

        // --- Front Grid (XY Plane) ---
        const frontGeo = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE, 1, 1);
        const frontMat = createGridMaterial(1, this.stepSize, this.majorStep);
        this.gridFront = new THREE.Mesh(frontGeo, frontMat);
        this.gridFront.position.z = -0.05;
        this.gridFront.renderOrder = -100;
        this.scene.add(this.gridFront);

        // --- Left Grid (YZ Plane) ---
        const leftGeo = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE, 1, 1).rotateY(-Math.PI / 2);
        const leftMat = createGridMaterial(2, this.stepSize, this.majorStep);
        this.gridLeft = new THREE.Mesh(leftGeo, leftMat);
        this.gridLeft.position.x = -0.05;
        this.gridLeft.renderOrder = -100;
        this.scene.add(this.gridLeft);

        this.updateGridVisibility();
    }
    
    private clearGrids() {
        if (this.gridTop) {
            this.scene.remove(this.gridTop);
            this.gridTop.geometry.dispose();
            (this.gridTop.material as THREE.Material).dispose();
        }
        if (this.gridFront) {
            this.scene.remove(this.gridFront);
            this.gridFront.geometry.dispose();
            (this.gridFront.material as THREE.Material).dispose();
        }
        if (this.gridLeft) {
            this.scene.remove(this.gridLeft);
            this.gridLeft.geometry.dispose();
            (this.gridLeft.material as THREE.Material).dispose();
        }
    }

    private initListeners() {
        // Only update visibility when the view type actually changes
        this.eventBus.on('camera-view-changed', this.updateGridVisibility.bind(this));
        
        this.eventBus.on('settings-grid-changed', (data: { step: number }) => {
            this.stepSize = data.step;
            this.majorStep = data.step * 10;
            // Recreate grids with new step sizes
            this.createGrids();
        });

        this.eventBus.on('settings-grid-color-changed', (data: { color: string }) => {
            const newColor = new THREE.Color(data.color);
            if (this.gridTop) ((this.gridTop.material as THREE.ShaderMaterial).uniforms.color2.value = newColor);
            if (this.gridFront) ((this.gridFront.material as THREE.ShaderMaterial).uniforms.color2.value = newColor);
            if (this.gridLeft) ((this.gridLeft.material as THREE.ShaderMaterial).uniforms.color2.value = newColor);
        });
    }

    private updateGridVisibility() {
        if (!this.gridTop || !this.gridFront || !this.gridLeft) return;

        const view = this.viewManager.getActiveView ? this.viewManager.getActiveView() : ViewType.PERSPECTIVE;
        
        this.gridTop.visible = (view === ViewType.TOP || view === ViewType.PERSPECTIVE);
        this.gridFront.visible = (view === ViewType.FRONT);
        this.gridLeft.visible = (view === ViewType.LEFT);
    }
}

