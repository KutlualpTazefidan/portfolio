import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function SaturnV({ position }: any) {
  // I
  const { geometry: sic1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIC-1.glb"
  );
  const { geometry: sic2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIC-2.glb"
  );
  const { geometry: sic3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIC-3.glb"
  );
  const { geometry: sic4Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIC-4.glb"
  );
  const { geometry: sic5Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIC-5.glb"
  );
  // II
  const { geometry: siic1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIIC-1.glb"
  );
  const { geometry: siic2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIIC-2.glb"
  );
  const { geometry: siic3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIIC-3.glb"
  );
  const { geometry: siic4Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIIC-4.glb"
  );
  // IVC
  const { geometry: sivc1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVC-1.glb"
  );
  const { geometry: sivc2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVC-2.glb"
  );
  const { geometry: sivc3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVC-3.glb"
  );

  //   IVI
  const { geometry: sivi1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVI-1.glb"
  );
  const { geometry: sivi2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVI-2.glb"
  );
  const { geometry: sivi3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVI-3.glb"
  );
  const { geometry: sivi4Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVI-4.glb"
  );
  const { geometry: sivi5Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SIVI-5.glb"
  );

  //   Engine

  const { geometry: sve1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E1.glb"
  );
  const { geometry: sve2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E2.glb"
  );
  const { geometry: sve3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E3.glb"
  );
  const { geometry: sve4Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E4.glb"
  );
  const { geometry: sve5Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E5.glb"
  );
  const { geometry: sve6Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/SaturnV/SV-E6.glb"
  );

  const whiteSaturnMat = new MeshPhysicalMaterial({
    color: "#fdf8f5",
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
    wireframe: false,
  });
  const blackSaturnMat = new MeshPhysicalMaterial({
    color: "#0e0e0e",
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
    wireframe: false,
  });
  const engineMaterial = new MeshPhysicalMaterial({
    color: "#d2d2d2",
    metalness: 0.9,
    roughness: 0.2,
    reflectivity: 0.9,
    wireframe: false,
  });

  return (
    <>
      {/* I */}
      <mesh
        name="sic-1"
        geometry={sic1Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sic-2"
        geometry={sic2Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sic-3"
        geometry={sic3Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sic-4"
        geometry={sic4Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sic-5"
        geometry={sic5Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      {/* II */}
      <mesh
        name="siic-1"
        geometry={siic1Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="siic-2"
        geometry={siic2Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="siic-3"
        geometry={siic3Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="siic-4"
        geometry={siic4Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      {/* IVC */}
      <mesh
        name="sivc-1"
        geometry={sivc1Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivc-2"
        geometry={sivc2Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivc-3"
        geometry={sivc3Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      {/* IVI */}
      <mesh
        name="sivi-1"
        geometry={sivi1Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivi-2"
        geometry={sivi2Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivi-3"
        geometry={sivi3Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivi-4"
        geometry={sivi4Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sivi-5"
        geometry={sivi5Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      {/* Engine */}
      <mesh
        name="sve-1"
        geometry={sve1Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sve-2"
        geometry={sve2Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sve-3"
        geometry={sve3Geom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sve-4"
        geometry={sve4Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sve-5"
        geometry={sve5Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="sve-6"
        geometry={sve6Geom}
        material={engineMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
    </>
  );
}
