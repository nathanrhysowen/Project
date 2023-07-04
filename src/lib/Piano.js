import * as THREE from 'three';
import Key from './Key';

export default class Piano {
    constructor(){
        this.pianoGroup = new THREE.Group();

        
        this.addNaturalKeys();
        this.addFlatKeys();

    }

    validKey(input){
      let flatKey = this.flatKeys.find((key) => key.input === input);
      let naturalKey = this.naturalKeys.find((key) => key.input === input);
      return flatKey || naturalKey || undefined;
    }

    releaseKey(input){
      let validKey = this.validKey(input);
      if (validKey !== undefined) {
        validKey.releaseKey();
      }
    }
    

    pressKey(input) {
      let validKey = this.validKey(input);
      if (validKey !== undefined) {
        validKey.playKey();
      }
      console.log(input);
    }


    addFlatKeys(){
         this.flatKeys = [
           new Key( 'Db4', 'w' , 5 ),
           new Key( 'Eb4', 'e' , 15 ),
           new Key( 'Gb4', 't' , 35 ),
           new Key( 'Ab4', 'y' , 45 ),
           new Key( 'Bb4', 'u' , 55 ),
         ];

        this.flatKeys.forEach((flatKey) => {
            this.pianoGroup.add(flatKey.getKeyGroup());
        });
    }

    addNaturalKeys() {
      this.naturalKeys =  [
        new Key( 'C4' , 'a' , 0),
        new Key( 'D4' , 's' , 10),
        new Key( 'E4' , 'd' , 20),
        new Key( 'F4' , 'f' , 30),
        new Key( 'G4' , 'g' , 40),
        new Key( 'A4' , 'h' , 50),
        new Key( 'B4' , 'j' , 60),
      ];
      
      this.naturalKeys.forEach((naturalKey) => {
        this.pianoGroup.add(naturalKey.getKeyGroup());
      });
      
    }
        
    getPianoGroup(){
        return this.pianoGroup;
    }
}