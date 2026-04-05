import * as THREE from 'three';

export class SelectionHelper extends THREE.Object3D {
    private box: THREE.LineSegments;

    constructor() {
        super();
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const edges = new THREE.EdgesGeometry(geometry);
        this.box = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xff0000 }));
        this.add(this.box);
        this.visible = false;
    }

    public highlight(object: THREE.Object3D) {
        this.visible = true;
        this.position.copy(object.position);
        // Optional: match rotation
        this.rotation.copy(object.rotation);
    }

    public hide() {
        this.visible = false;
    }
}
