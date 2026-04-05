import * as THREE from 'three';

export class HandleUtils {
    static updateScales(scene: THREE.Scene, camera: THREE.Camera) {
        // DO NOT CHANGE: User approved size and zooming behavior (Sprites + Auto-scaling).
        // This ensures points remain visible and constant size on screen while zooming.
        
        // Factors to maintain constant visual size
        const perspectiveFactor = 0.015; 
        const orthoFactor = 15.0; // Restored to 15.0 for Sprites

        scene.traverse((object) => {
            const isGizmo = object.userData.isGizmo;
            const isAnchor = object.userData.isAnchor;
            const isControlPoint = object.userData.isControlPoint;
            
            // Only scale objects that are meant to be constant size handles
            if (isGizmo || isAnchor || isControlPoint) {
                let factor = 1;

                if (camera instanceof THREE.PerspectiveCamera) {
                    const worldPos = new THREE.Vector3();
                    object.getWorldPosition(worldPos);
                    const dist = worldPos.distanceTo(camera.position);
                    factor = dist * perspectiveFactor;
                } else if (camera instanceof THREE.OrthographicCamera) {
                    factor = (1 / camera.zoom) * orthoFactor;
                }

                // Prevent it from becoming too small
                factor = Math.max(0.001, factor);

                // Specific tweaks per type
                if (isGizmo) {
                    factor *= 0.15;
                } else if (object.userData.isMainAnchor) {
                    factor *= 1.0; 
                } else if (isControlPoint) {
                    factor *= 0.7; // Standard control point size
                } else {
                    factor *= 0.8; // Standard anchor size
                }

                // FIX FOR OVAL SPRITES:
                // Compensate for FULL parent hierarchy scaling to ensure circularity in World Space.
                if (object.parent) {
                    const pWorldScale = new THREE.Vector3();
                    object.parent.getWorldScale(pWorldScale);
                    
                    if (pWorldScale.x !== 0 && pWorldScale.y !== 0 && pWorldScale.z !== 0) {
                        object.scale.set(
                            factor / pWorldScale.x,
                            factor / pWorldScale.y,
                            factor / pWorldScale.z
                        );
                    } else {
                        object.scale.set(factor, factor, factor);
                    }
                } else {
                    object.scale.set(factor, factor, factor);
                }
            }
        });
    }
}
