import * as THREE from 'three';

export default class Piano {
    constructor(){
        this.pianoGroup = new THREE.Group();

        let geometry = new THREE.BoxGeometry(16, 24, 24);
        let material = new THREE.MeshNormalMaterial();
        let mesh = new THREE.Mesh(geometry, material);

        this.pianoGroup.add(mesh);

    }
        
    getPianoGroup(){
        return this.pianoGroup;
    }
}