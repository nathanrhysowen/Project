import { useEffect } from 'react';

import * as THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
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
       console.log('h');
    };

    let onKeyUp = (event) => {
      p.releaseKey(event.key);
      console.log('h');
   };

    

    return () => {
      window.removeEventListener('keydown' , onKeyDown);
      window.removeEventListener('keyup' , onKeyUp );

    };

  }, []);
  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
    </div>
  );
}

export default App;
