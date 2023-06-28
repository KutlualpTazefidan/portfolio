import styles from "./canvas.module.css";
import { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import SphereOfTime from "./SphereOfTime/SphereOfTime";
import Controls from "./Controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";
import HallScene from "./Hall/HallScene";
export default function CanvasContainer() {
  const sceneContainer = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={sceneContainer} className={styles["canvas-container"]}>
        <Canvas
          eventSource={sceneContainer as React.MutableRefObject<HTMLElement>}
          className={styles.canvas3d}
          shadows
        >
          <ambientLight intensity={0.55} color={"#ffffff"} />
          <directionalLight
            position={[3, 3, 0]}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <HallScene />
          {/* <SphereOfTime /> */}
          <Controls orbitControlState={true} />
        </Canvas>
      </div>
    </>
  );
}
