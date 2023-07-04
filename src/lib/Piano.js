import * as THREE from 'three';
import Key from './Key';

export default class Piano {
    constructor(){
        this.pianoGroup = new THREE.Group();

        
        this.addNaturalKeys();
        this.addFlatKeys();

    }

    getKeyBeingPlayed(input){
      let flatKey = this.flatKeys.find((key) => key.input === input);
      let naturalKey = this.naturalKeys.find(key => key.input === input);
      return flatKey || naturalKey || undefined;
    }

    pressKey(input) {
      let keyBeingPlayed = this.getKeyBeingPlayed(input);
      if (keyBeingPlayed !== undefined) {
        keyBeingPlayed.playNote();
      }
      console.log(input);
    }

    isValidKey(input) {}

    

    addFlatKeys(){
        let flatKeys = [
            {name: 'Db4', input: 'w' , xOffset: 5 },
            {name: 'Eb4', input: 'e' , xOffset: 15 },
            {name: 'Gb4', input: 't' , xOffset: 35 },
            {name: 'Ab4', input: 'y' , xOffset: 45 },
            {name: 'Bb4', input: 'u' , xOffset: 55 },
            
        ];

        flatKeys.forEach((flatKey) => {
            let key = new Key(flatKey.name, flatKey.xOffset);
            this.pianoGroup.add(key.getKeyGroup());
        });
    }

    addNaturalKeys() {
      let naturalKeys =  [
        {name: 'C4', input: 'a' , xOffset: 0},
        {name: 'D4', input: 's' , xOffset: 10},
        {name: 'E4', input: 'd' , xOffset: 20},
        {name: 'F4', input: 'f' , xOffset: 30},
        {name: 'G4', input: 'g' , xOffset: 40},
        {name: 'A4', input: 'h' , xOffset: 50},
        {name: 'B4', input: 'j' , xOffset: 60},
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