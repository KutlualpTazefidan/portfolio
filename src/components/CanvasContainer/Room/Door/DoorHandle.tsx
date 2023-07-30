import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorHandle() {
  const { geometry: doorHandleFrameGeom } = Import3dObject(
    "./assets/imports/Room/Door/DoorHandle.glb"
  );

  const doorHandleFrameMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    metalness: 0.4,
    reflectivity: 0.5,
    wireframe: false,
  });

  return (
    <mesh
      name="DoorHandleFrame"
      geometry={doorHandleFrameGeom}
      material={doorHandleFrameMaterial}
      scale={1}
      position={[2.7472, 0, 3.74359 + 0.19]}
      castShadow
    />
  );
}
