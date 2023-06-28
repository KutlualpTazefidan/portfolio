import Load3dObject from "@/components/utils/canvas/Load3dObject";
import Pillars from "./Pillars";
import { useFrame, useThree } from "@react-three/fiber";
import Walls from "./Walls";
import Floor from "./Floor";
import SphereHolder from "./SphereHolder";

export default function HallScene() {
  const { raycaster, scene, camera, viewport } = useThree();
  console.log(scene);
  return (
    <>
      <mesh
        scale={[1, 1, 1]}
        position={[0, 2, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color={"#964B00"} />
      </mesh>
      <Walls />
      <Pillars />
      <Floor />
      <SphereHolder />
    </>
  );
}

{
  /* <Load3dObject
  objectName="SphereHolder"
  assetPath="./assets/imports/SphereHolder.glb"
  scale={0.25}
  position={[0, -0.3, -6]}
/> */
}
