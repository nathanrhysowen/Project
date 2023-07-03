import * as THREE from 'three';
import Key from './Key';

export default class Piano {
    constructor(){
        this.pianoGroup = new THREE.Group();

        
        this.addNaturalKeys();
        this.addFlatKeys();

    }

    addFlatKeys(){
        let flatKeys = [
            {name: 'Db4', xOffset: 5 },
            {name: 'Eb4', xOffset: 15 },
            {name: 'Gb4', xOffset: 35 },
            {name: 'Ab4', xOffset: 45 },
            {name: 'Bb4', xOffset: 55 },
            
        ];

        flatKeys.forEach((flatKey) => {
            let key = new Key(flatKey.name, flatKey.xOffset);
            this.pianoGroup.add(key.getKeyGroup());
        });
    }

    addNaturalKeys() {
      let naturalKeys =  [
        {name: 'C4', xOffset: 0},
        {name: 'D4', xOffset: 10},
        {name: 'E4', xOffset: 20},
        {name: 'F4', xOffset: 30},
        {name: 'G4', xOffset: 40},
        {name: 'A4', xOffset: 50},
        {name: 'B4', xOffset: 60},
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