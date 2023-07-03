import * as THREE from 'three';

export default class Key {
    constructor(keyName, xOffset){ //assigning two parameters to the constructor 
        this.keyName = keyName; // assigning the keyName parameter to the keyName property 
        this.keyGroup = new THREE.Group(); //creating a group
        
        if (keyName.length === 3){
           // is flat key 
           let geometry = new THREE.BoxGeometry(6, 24, 4); // creating the geometry for the natural keys
           let material = new THREE.MeshStandardMaterial({ color: 0x000000 }); //creating the material to colour the object
           this.mesh = new THREE.Mesh(geometry, material); //creating the mesh using the geometry and material i just created
           this.mesh.position.x = xOffset; //moving the mesh along the x axis
           this.mesh.position.y = 8;
           this.mesh.position.z = 4;
           this.keyGroup.add(this.mesh);
        } else {
            // is natural key
            let geometry = new THREE.BoxGeometry(9, 40, 4) // creating the geometry for the natural keys
            let material = new THREE.MeshStandardMaterial({ color: 0xfafafa }); //creating the material to colour the object
            this.mesh = new THREE.Mesh(geometry, material); //creating the mesh using the geometry and material i just created
            this.mesh.position.x = xOffset; //moving the mesh along the x axis
            this.keyGroup.add(this.mesh);
        }
        //transforming the mesh into a child of the keyGroup
    }
    getKeyGroup() {
        return this.keyGroup //allowing external code to get a reference to the keyGroup 
    }
}