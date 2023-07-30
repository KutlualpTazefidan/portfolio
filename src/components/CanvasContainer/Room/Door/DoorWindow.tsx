import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorWindow() {
  const { geometry: doorWindowGeom } = Import3dObject(
    "./assets/imports/Room/Door/DoorWindow.glb"
  );

  const doorWindowMaterial = new MeshPhysicalMaterial({
    color: "#edebe1",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
    wireframe: false,
  });

  return (
    <mesh
      name="DoorWindow"
      geometry={doorWindowGeom}
      material={doorWindowMaterial}
      scale={1}
      position={[2.7472, 0, 3.74359 + 0.19]}
      castShadow
    />
  );
}
