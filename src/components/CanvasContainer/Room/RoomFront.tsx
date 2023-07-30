import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function RoomFront() {
  const { geometry: roomFrontGeom } = Import3dObject(
    "./assets/imports/Room/RoomFront.glb"
  );

  const roomFrontMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    wireframe: false,
  });

  return (
    <mesh
      name="RoomFront"
      geometry={roomFrontGeom}
      material={roomFrontMaterial}
      scale={1}
      position={[0, 0, 0 + 0.19]}
      castShadow
    />
  );
}
