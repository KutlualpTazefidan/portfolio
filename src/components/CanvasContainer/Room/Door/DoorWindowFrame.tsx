import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorWindowFrame() {
  const { geometry: doorWindowFrameGeom } = Import3dObject(
    "./assets/imports/Room/Door/DoorWindowFrame.glb"
  );

  const doorWindowFrameMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    wireframe: false,
  });

  return (
    <mesh
      name="DoorWindowFrame"
      geometry={doorWindowFrameGeom}
      material={doorWindowFrameMaterial}
      scale={1}
      position={[2.7472, 0, 3.74359 + 0.19]}
      castShadow
    />
  );
}
