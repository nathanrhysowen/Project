import { useEffect } from 'react';

import * as THREE from 'three';

import SceneInit from './lib/SceneInit';
import Piano from "./lib/Piano"

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initScene();
    test.animate();

    let p = new Piano();
     


    test.scene.add(p.getPianoGroup());

    let onKeyDown = (event) => {
      if(event.repeat){
        return;
      }
       p.pressKey(event.key);
       
    };

    let onKeyUp = (event) => {
      console.log('h');
   };

    window.addEventListener('keydown' , onKeyDown);
    window.addEventListener('onkeyup' , onKeyUp );
  }, []);
  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
    </div>
  );
}

export default App;
