import './App.css';
import './fonts.css'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Shoe';
import styled from 'styled-components';


function ColorButton({ color, setColor, prevColor }) {
  return (
    <div style={{fontSize:12,width:50,textAlign:'center'}}>
      <button style={{
        backgroundColor: color,
        borderRadius: 30,
        width: 30,
        aspectRatio: 1
      }} onClick={() => setColor(color)} />
      {prevColor === color && <p>{color}</p>}
    </div>
  );
}

const MaterialButton = ({ material, setMaterial, prevMaterial }) => {
  const borderColor = material === prevMaterial ? 'lightgray' : 'black';
  return (
    <button style={{
      borderRadius: 20,
      borderColor: borderColor,
      borderWidth:1,
      width: 150,
      textAlign: 'center',
      background: 'white',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      fontSize:16,
      fontWeight:'bold'
    }} onClick={() => setMaterial(material)} >
      <p>{material}</p>
    </button>
  )
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

  const [lacesMaterial, setLacesMaterial] = useState('leather');
  const [meshMaterial, setMeshMaterial] = useState('leather');
  const [capsMaterial, setCapsMaterial] = useState('leather');
  const [innerMaterial, setInnerMaterial] = useState('leather');
  const [soleMaterial, setSoleMaterial] = useState('leather');
  const [stripesMaterial, setStripesMaterial] = useState('leather');
  const [bandMaterial, setBandMaterial] = useState('leather');
  const [patchMaterial, setPatchMaterial] = useState('leather');

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
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "black",
    "white"
  ]

  const materials = [
    "leather",
    "polyester",
    "rubber"
  ]
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
          <MaterialOptions>
            {materials.map((material) =>
              <MaterialButton material={material} setMaterial={setLacesMaterial} prevMaterial={lacesMaterial} />
            )}
          </MaterialOptions>
          <ColorOptions>
            {colors.map((color) =>
              <ColorButton color={color} setColor={setLacesColor} prevColor={lacesColor} />
            )}
          </ColorOptions>
        </CustomizationOptions>
      </Customization>
    </Wrapper>
  );
}

const ProductCanvas = styled.div`
  width: 100vw;
  height: 75vh;
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
  
`

const MaterialOptions = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  gap: 15px;
  padding: 20px;
`

const ColorOptions = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  gap: 40px;
`


export default App;
