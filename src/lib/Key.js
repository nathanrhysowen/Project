import * as THREE from 'three';

export default class Key {
    constructor(keyName, xOffset){
        this.keyGroup = new THREE.Group();
        
        this.keyName = keyName;
        let geometry = new THREE.BoxGeometry(9, 40, 4)
        let material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = xOffset;

        this.keyGroup.add(this.mesh);
    }
    getKeyGroup() {
        return this.keyGroup
    }
}