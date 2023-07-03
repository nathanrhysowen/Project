import * as THREE from 'three';
import Key from './Key';

export default class Piano {
    constructor(){
        this.pianoGroup = new THREE.Group();

        //let geometry = new THREE.BoxGeometry(16, 24, 24);
        //let material = new THREE.MeshNormalMaterial();
        //let mesh = new THREE.Mesh(geometry, material);

        //this.pianoGroup.add(mesh);
        this.addNaturalKeys();

    }

    addNaturalKeys() {
      let naturalKeys =  [
        {name: 'C4', xOffset: 0},
        {name: 'D4', xOffset: 10},
        {name: 'E4', xOffset: 20},
      ];
      naturalKeys.forEach((naturalKey) => {
        let key = new Key(naturalKey.name, naturalKey.xOffset);
        this.pianoGroup.add(key.getKeyGroup());
      });
      
    }
        
    getPianoGroup(){
        return this.pianoGroup;
    }
}