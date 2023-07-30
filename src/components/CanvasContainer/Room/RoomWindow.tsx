import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function RoomWindow() {
  const { geometry: roomWindowTableGeom } = Import3dObject(
    "./assets/imports/Room/RoomWindowTable.glb"
  );
  const { geometry: roomWindowFrameGeom } = Import3dObject(
    "./assets/imports/Room/RoomWindowFrame.glb"
  );
  const { geometry: roomWindowGlassGeom } = Import3dObject(
    "./assets/imports/Room/RoomWindowGlass.glb"
  );
  const { geometry: roomWindowBlindGeom } = Import3dObject(
    "./assets/imports/Room/RoomWindowBlind.glb"
  );

  const roomWindowTableMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });
  const roomWindowFrameMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });
  const roomWindowBlindMaterial = new MeshPhysicalMaterial({
    color: "#e0dedc",
    wireframe: false,
  });
  const roomWindowGlassMaterial = new MeshPhysicalMaterial({
    color: "#edebe1",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="RoomWindowTable"
        geometry={roomWindowTableGeom}
        material={roomWindowTableMaterial}
        scale={1}
        position={[0, 0, 0.19]}
        castShadow
        receiveShadow
      />
      <mesh
        name="RoomWindowFrame"
        geometry={roomWindowFrameGeom}
        material={roomWindowFrameMaterial}
        scale={1}
        position={[0, 0, 0.19]}
        castShadow
        receiveShadow
      />
      <mesh
        name="RoomWindowBlind"
        geometry={roomWindowBlindGeom}
        material={roomWindowBlindMaterial}
        scale={1}
        position={[0, 0, 0.19]}
        castShadow
        receiveShadow
      />
      <mesh
        name="roomWindowGlass"
        geometry={roomWindowGlassGeom}
        material={roomWindowGlassMaterial}
        scale={1}
        position={[0, 0, 0.19]}
        castShadow
        receiveShadow
      />
    </>
  );
}
