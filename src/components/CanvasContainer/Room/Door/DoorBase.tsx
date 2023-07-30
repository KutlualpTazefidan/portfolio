import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorBase() {
  const { geometry: doorGeom } = Import3dObject(
    "./assets/imports/Room/Door/Door.glb"
  );

  const doorMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });

  return (
    <mesh
      name="Door"
      geometry={doorGeom}
      material={doorMaterial}
      scale={1}
      position={[2.7472, 0, 3.74359 + 0.19]}
      castShadow
    />
  );
}
