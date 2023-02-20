import logo from './logo.svg';
import './App.css';
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Model } from './Shoe';


function App() {
  const ref = useRef()
  return (
    <div className="wrapper">
      <div className="card">
        <div className="product-canvas">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]} castShadow />
              <Model />
              <OrbitControls 
              enablePan={true} 
              enableZoom={true}
              enableRotate={true}/>
            </Suspense>
          </Canvas>
        </div>
        <h2>Color chooser</h2>
        <div className='colors'>
          <div>
            <input type="color" id="head" name="head"
              value="#e66465" />
            <label for="head">Main</label>
          </div>

          <div>
            <input type="color" id="body" name="body"
              value="#f6b73c" />
            <label for="body">Stripes</label>
          </div>
          <div>
            <input type="color" id="body" name="body"
              value="#f6b73c" />
            <label for="body">Soul</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
