import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function DoorLock() {
  const { geometry: doorLockGeom } = Import3dObject(
    "./assets/imports/Room/Door/DoorLock.glb"
  );

  const doorLockMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    metalness: 0.4,
    reflectivity: 0.5,
    wireframe: false,
  });

  return (
    <mesh
      name="DoorLock"
      geometry={doorLockGeom}
      material={doorLockMaterial}
      scale={1}
      position={[2.7472, 0, 3.74359 + 0.19]}
      castShadow
    />
  );
}
