import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";
import Tetris from "./Tetris";
import Flashlight from "./Flashlight";
import Train from "./Train";

export default function Bed() {
  const { geometry: bedGeom } = Import3dObject(
    "./assets/imports/Room/Bed/Bed.glb"
  );
  const { geometry: bedFrameGeom } = Import3dObject(
    "./assets/imports/Room/Bed/BedFrame2.glb"
  );
  const { geometry: blanket1Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Blanket1.glb"
  );
  const { geometry: blanket2Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Blanket2.glb"
  );
  const { geometry: pillow1Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Pillow1.glb"
  );
  const { geometry: pillow2Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Pillow2.glb"
  );
  const { geometry: pillow3Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Pillow3.glb"
  );

  const bedMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });
  const bedFrameMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });

  const blanketMaterial = new MeshPhysicalMaterial({
    color: "#E6BF83",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="Bed"
        geometry={bedGeom}
        material={bedMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="BedFrame"
        geometry={bedFrameGeom}
        material={bedFrameMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Blanket1"
        geometry={blanket1Geom}
        material={blanketMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Blanket2"
        geometry={blanket2Geom}
        material={blanketMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Pillow1"
        geometry={pillow1Geom}
        material={blanketMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Pillow2"
        geometry={pillow2Geom}
        material={blanketMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Pillow3"
        geometry={pillow3Geom}
        material={blanketMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <Tetris />
      <Flashlight />
      <Train />
    </>
  );
}
