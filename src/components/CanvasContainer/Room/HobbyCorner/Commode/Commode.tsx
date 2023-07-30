import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Commode() {
  const { geometry: CommodeFrameGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Commode/CommodeFrame.glb"
  );
  const { geometry: CommodeDrawer1Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Commode/CommodeDrawer1.glb"
  );
  const { geometry: CommodeDrawer1KnobGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Commode/CommodeDrawer1Knob.glb"
  );
  const { geometry: CommodeDrawer2Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Commode/CommodeDrawer2.glb"
  );
  const { geometry: CommodeDrawer2KnobGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Commode/CommodeDrawer2Knob.glb"
  );

  const bedMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="CommodeFrame"
        geometry={CommodeFrameGeom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeDrawer1"
        geometry={CommodeDrawer1Geom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeDrawer1Knob"
        geometry={CommodeDrawer1KnobGeom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeDrawer2"
        geometry={CommodeDrawer2Geom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeDrawer2Knob"
        geometry={CommodeDrawer2KnobGeom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
