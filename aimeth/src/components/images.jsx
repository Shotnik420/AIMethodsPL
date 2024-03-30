import "../styles/Projekty.css";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import * as THREE from "three";
//This is a model preview of three.js models, they should change at the click of a button

function Projekty() {
  const cameraRef = useRef();

  function ModelOne(props) {
    const { scene } = useGLTF("model/alc.glb");

    return (
      <>
        <OrbitControls enabled={true} enableDamping={true} />

        <primitive object={scene} scale={4} position={[0, 0, 0]} {...props} />
      </>
    );
  }

  function ModelTwo(props) {
    const { scene } = useGLTF("model/gay.glb");
    return (
      <>
        <primitive object={scene} scale={1} position={[0, 0, 0]} {...props} />
      </>
    );
  }

  // function Ziemia() {
  //   <Plane
  //     args={[1, 1]}
  //     rotation={[0, 0, 0]}
  //     position={[0, 0, 0]}
  //     color="lightblue"
  //   >
  //     <meshStandardMaterial attach="material" color="lightblue" />
  //   </Plane>;
  // }

  const rotateCamera = () => {
    if (cameraRef.current) {
      // Adjust the rotation angles as needed
      cameraRef.current.rotation.x += 0;
      cameraRef.current.rotation.y += 0.1;
    }
  };

  const [model, setModel] = useState(true);
  return (
    <div className="projekty">
      <div className="projekty_lp">
        <Suspense>
          <Canvas>
            <PerspectiveCamera
              makeDefault
              fov={60}
              position={[5, 1, 5]}
              // ref={cameraRef}
              // lookAt={[0, 0, 0]}
              rotation={[-0.1, 0.7, 0.05]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 0]} intensity={1.5} />
            {model ? <ModelOne /> : <ModelTwo />}
            <Plane
              args={[10, 10]}
              position={[0, -1.9, 0]}
              rotation-x={-Math.PI * 0.5}
            >
              <meshStandardMaterial color="blue" />
            </Plane>
          </Canvas>
        </Suspense>
      </div>

      <div className="projekty_pp">
        <div
          onClick={() => {
            setModel(true);
          }}
          className="ppOpcja"
        >
          <h1>Silesian Phoenix</h1>
        </div>
        <div className="ppOpcja">
          <h1
            onClick={() => {
              setModel(false);
            }}
          >
            Integral SENSO
          </h1>
        </div>
        <div className="ppOpcja">
          <h1>AI-DIAG</h1>
        </div>
      </div>
    </div>
  );
}

export default Projekty;
