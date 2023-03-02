import './App.css';
import './fonts.css'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Shoe';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function ColorButton({ color, useColor }) {
  const [prevColor, setColor] = useColor
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);


  return (
    <div style={{ fontSize: 12, width: 50, textAlign: 'center' }}>
      <button
        style={{
          backgroundColor: color,
          borderRadius: 30,
          width: 30,
          aspectRatio: 1,
          cursor: 'pointer',
          border: 'none',
          marginBottom: 10,
          outline: prevColor === color ? '2px solid black' : 'none',
        }}
        onClick={() => setColor(color)}
      />
      {prevColor === color && <p>{capitalizeFirstLetter(color)}</p>}
    </div>

  )
}


const MaterialButton = ({ material, useMaterial }) => {
  const [prevMaterial, setMaterial] = useMaterial
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <CSSTransition
      in={isShown}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      <button style={{
        borderRadius: 20,
        width: 150,
        textAlign: 'center',
        background: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7.5,
        paddingBottom: 7.5,
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        outline: material === prevMaterial ? '1px solid black' : '1px solid lightgray',
      }} onClick={() => {
        setMaterial(material)
      }}>
        <p>{capitalizeFirstLetter(material)}</p>
      </button>
    </CSSTransition>
  )
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



function App() {
  const ref = useRef()
  const [active, setActive] = useState(0)
  const [lacesColor, setLacesColor] = useState('blue');
  const [meshColor, setMeshColor] = useState('blue');
  const [capsColor, setCapsColor] = useState('blue');
  const [innerColor, setInnerColor] = useState('blue');
  const [soleColor, setSoleColor] = useState('blue');
  const [stripesColor, setStripesColor] = useState('blue');
  const [bandColor, setBandColor] = useState('blue');
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
  const colors = {
    "leather": ["red", "blue", "green", "orange", "yellow", "purple"],
    "polyester": ["red", "blue", "yellow", "purple"],
    "rubber": ["black", "lightgrey"]
  };

  const parts = [
    "laces",
    "mesh",
    "caps",
    "inner",
    "sole",
    "stripes",
    "band",
    "patch"
  ]

  const options = {
    "laces": {
      "materials": [],
      "color-hook": [lacesColor, setLacesColor],
      "material-hook": [lacesMaterial, setLacesMaterial]
    },
    "mesh": {
      "materials": [
        "leather",
        "polyester",
        "rubber"],
      "color-hook": [meshColor, setMeshColor],
      "material-hook": [meshMaterial, setMeshMaterial]
    },
    "caps": {
      "materials": [
        "leather",
        "polyester",
        "rubber"],
      "color-hook": [capsColor, setCapsColor],
      "material-hook": [capsMaterial, setCapsMaterial]
    },
    "inner": {
      "materials": [],
      "color-hook": [innerColor, setInnerColor],
      "material-hook": [innerMaterial, setInnerMaterial]
    },
    "sole": {
      "materials": [
        "leather",
        "polyester",
        "rubber"],
      "color-hook": [soleColor, setSoleColor],
      "material-hook": [soleMaterial, setSoleMaterial]
    },
    "stripes": {
      "materials": [],
      "color-hook": [stripesColor, setStripesColor],
      "material-hook": [stripesMaterial, setStripesMaterial]
    },
    "band": {
      "materials": ["leather",
        "polyester",
        "rubber"],
      "color-hook": [bandColor, setBandColor],
      "material-hook": [bandMaterial, setBandMaterial]
    },
    "patch": {
      "materials": [],
      "color-hook": [patchColor, setPatchColor],
      "material-hook": [patchMaterial, setPatchMaterial]
    }

  }


  const item = options[parts[active]]
  const matColors = colors[item["material-hook"][0]]

  function handleArrowClick(direction) {
    if (direction === 'left') {
      if (active == 0) setActive(8)
      else setActive(active - 1);
    } else if (direction === 'right') {
      if (active == parts.length - 1) setActive(0)
      else setActive(active + 1);
    }
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
            <Model shoe={shoe} setActive={setActive} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true} />
          </Suspense>
        </Canvas>
      </ProductCanvas>
      <Customization>
        <PartSelector>
          <MdOutlineKeyboardArrowLeft size={25} style={{ cursor: 'pointer' }} onClick={() => handleArrowClick('left')}>←</MdOutlineKeyboardArrowLeft>
          <HeaderWrapper>
            <h3>
              {capitalizeFirstLetter(parts[active])}
            </h3>
          </HeaderWrapper>
          <MdOutlineKeyboardArrowRight size={25} style={{ cursor: 'pointer' }} onClick={() => handleArrowClick('right')}>→</MdOutlineKeyboardArrowRight>
        </PartSelector>
        <CustomizationOptions>
          <MaterialOptions>
            {item["materials"].map((material) =>
              <MaterialButton material={material} useMaterial={item["material-hook"]} />
            )}
          </MaterialOptions>
          <ColorOptions>
            {matColors.map((color) =>
              <ColorButton color={color} useColor={item["color-hook"]} />
            )}
          </ColorOptions>
        </CustomizationOptions>
      </Customization>
    </Wrapper>
  );
}

const ProductCanvas = styled.div`
  width: 100vw;
  height: 71.5vh;
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
const HeaderWrapper = styled.div`
  width: 200px;
  font-size: 20;
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
const PartSelector = styled.div`
  display:flex;
  flex-direction:row;
  width: 400px;
  justify-content: space-evenly;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 10px;
`


export default App;
