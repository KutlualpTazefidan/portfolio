import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function RoomRoof() {
  const { geometry: roomRoofGeom } = Import3dObject(
    "./assets/imports/Room/RoomRoof.glb"
  );

  const roomRoofMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    wireframe: false,
  });

  return (
    <mesh
      name="RoomRoof"
      geometry={roomRoofGeom}
      material={roomRoofMaterial}
      scale={1}
      position={[-0.053269, 4.2034, -0.042305 + 0.19]}
      castShadow
    />
  );
}
