import logo from './logo.svg';
import './App.css';
import './fonts.css'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Model } from './Shoe';
import styled from 'styled-components';


function ColorButton({ color, setColor }) {
  return (
    <button style={{
      backgroundColor: color,
      borderRadius: 30, 
      width: 30, 
      aspectRatio: 1
    }} onClick={() => setColor(color)} />
  );
}

function App() {
  const ref = useRef()
  const [lacesColor, setLacesColor] = useState('white');
  const [meshColor, setMeshColor] = useState('blue');
  const [capsColor, setCapsColor] = useState('black');
  const [innerColor, setInnerColor] = useState('blue');
  const [soleColor, setSoleColor] = useState('blue');
  const [stripesColor, setStripesColor] = useState('white');
  const [bandColor, setBandColor] = useState('black');
  const [patchColor, setPatchColor] = useState('blue');
  const shoe = {
    "laces": lacesColor,
    "mesh": meshColor,
    "caps": capsColor,
    "inner": innerColor,
    "sole": soleColor,
    "stripes": stripesColor,
    "band": bandColor,
    "patch": patchColor
  }
  return (
    <Wrapper>
      <ProductCanvas>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]} castShadow />
            <Model shoe={shoe} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true} />
          </Suspense>
        </Canvas>
      </ProductCanvas>
      <Customization>
        <h1> Laces </h1>
        <CustomizationOptions>
          <ColorButton color={'red'} setColor={setLacesColor} />
        </CustomizationOptions>
      </Customization>
    </Wrapper>
  );
}

const ProductCanvas = styled.div`
  width: 100vw;
  height: 70vh;
  background:whitesmoke;
`

const Wrapper = styled.div`
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family:Montseratt;
`
const Customization = styled.div` 
  text-align: center;
  padding: 10px;
`
const CustomizationOptions = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  gap: 100px;
`


export default App;
