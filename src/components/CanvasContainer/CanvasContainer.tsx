import styles from "./canvas.module.css";
import { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import SphereOfTime from "./SphereOfTime/SphereOfTime";
import Controls from "./Controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";
import HallScene from "./Room/Room";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import Room from "./Room/Room";
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
          <ambientLight intensity={0.1101} color={"#ffffff"} />
          <directionalLight
            position={[3, 3, 0]}
            intensity={0.101}
            castShadow
            shadow-mapSize={1024}
          />
          {/* <pointLight
            position={[3, 3, 0]}
            intensity={0.5}
            castShadow
            shadow-mapSize={1024}
          /> */}

          <Room />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.4}
              intensity={1.9}
              // levels={9}
              mipmapBlur
            />
            <DepthOfField
              target={[0, 0, -1]}
              focalLength={0.1}
              bokehScale={3}
              height={1000}
            />
          </EffectComposer>
          {/* <SphereOfTime /> */}
          <Controls orbitControlState={true} />
        </Canvas>
      </div>
    </>
  );
}
