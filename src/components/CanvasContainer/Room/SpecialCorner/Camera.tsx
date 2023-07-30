import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Camera() {
  const { geometry: cameraFrameGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraFrame.glb"
  );
  const { geometry: cameraShelfGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraShelf.glb"
  );
  const { geometry: cameraShelfBandGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraShelfBand.glb"
  );
  const { geometry: cameraShelfHookGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraShelfHook.glb"
  );
  const { geometry: cameraShelfLockGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraShelfLock.glb"
  );
  const { geometry: cameraLensGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraLens.glb"
  );
  const { geometry: cameraLens2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraLens2.glb"
  );
  const { geometry: cameraLens3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraLens3.glb"
  );
  const { geometry: cameraLens4Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraLens4.glb"
  );
  const { geometry: cameraFrameButton1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraFrameButton1.glb"
  );
  const { geometry: cameraFrameButton2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Camera/cameraFrameButton2.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#793a18",
    wireframe: false,
  });
  const Wood2Material = new MeshPhysicalMaterial({
    color: "#411f0f",
    metalness: 0.1,
    roughness: 0.9,
    reflectivity: 0.1,
    wireframe: false,
  });
  const Wood3Material = new MeshPhysicalMaterial({
    color: "#411f0f",
    wireframe: false,
  });
  const MessingMaterial = new MeshPhysicalMaterial({
    color: "#e2b46e",
    metalness: 0.9,
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });
  const LensMaterial = new MeshPhysicalMaterial({
    color: "#edebe1",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
    wireframe: false,
  });
  return (
    <>
      <mesh
        name="cameraFrame"
        geometry={cameraFrameGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraShelfGeom"
        geometry={cameraShelfGeom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraShelfBandGeom"
        geometry={cameraShelfBandGeom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraShelfHookGeom"
        geometry={cameraShelfHookGeom}
        material={MessingMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraShelfLockGeom"
        geometry={cameraShelfLockGeom}
        material={MessingMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraLensGeom"
        geometry={cameraLensGeom}
        material={Wood3Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraLens2Geom"
        geometry={cameraLens2Geom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraLens3Geom"
        geometry={cameraLens3Geom}
        material={MessingMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraLens4Geom"
        geometry={cameraLens4Geom}
        material={LensMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraFrameButton1Geom"
        geometry={cameraFrameButton1Geom}
        material={MessingMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cameraFrameButton2Geom"
        geometry={cameraFrameButton2Geom}
        material={Wood3Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
