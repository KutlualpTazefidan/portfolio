import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorFrame() {
  const { geometry: doorFrameGeom } = Import3dObject(
    "./assets/imports/Room/Door/DoorFrame.glb"
  );

  const doorFrameMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    wireframe: false,
  });

  return (
    <mesh
      name="DoorFrame"
      geometry={doorFrameGeom}
      material={doorFrameMaterial}
      scale={1}
      position={[0, 0, 0.19]}
      castShadow
    />
  );
}
