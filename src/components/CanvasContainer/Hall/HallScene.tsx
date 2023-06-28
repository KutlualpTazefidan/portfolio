import Load3dObject from "@/components/utils/canvas/Load3dObject";
import Pillars from "./Pillars";

export default function HallScene() {
  return (
    <>
      <Load3dObject
        objectName="FloorForPillars"
        assetPath="./assets/imports/FloorForPillars.glb"
        scale={1.0}
        position={[0, 0, 0]}
      />
      <Load3dObject
        objectName="Pillar"
        assetPath="./assets/imports/Pillar.glb"
        scale={1.0}
        position={[0, 0, 0]}
      />
      <Pillars />
      {/* <Load3dObject
        objectName="Wall"
        assetPath="./assets/imports/Wall.glb"
        scale={1.0}
        position={[0, 0, 0]}
      />
      <Load3dObject
        objectName="SphereHolder"
        assetPath="./assets/imports/SphereHolder.glb"
        scale={1.0}
        position={[0, 0, 0]}
      /> */}
    </>
  );
}
