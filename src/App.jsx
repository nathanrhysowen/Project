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
  }, []);
  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
    </div>
  );
}

export default App;
