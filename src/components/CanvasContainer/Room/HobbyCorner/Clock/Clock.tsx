import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Clock() {
  const { geometry: clockFrameGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockFrame.glb"
  );
  const { geometry: clockButton1Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockButton1.glb"
  );
  const { geometry: clockButton2Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockButton2.glb"
  );
  const { geometry: clockButton3Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockButton3.glb"
  );
  const { geometry: clockGlassGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockGlass.glb"
  );
  const { geometry: clockNumbersGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockNumbers2.glb"
  );
  const { geometry: clockGearGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Clock/ClockGear.glb"
  );

  const cableBlackMaterial = new MeshPhysicalMaterial({
    color: "#191919",
    wireframe: false,
  });

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  const clockGlasMaterial = new MeshPhysicalMaterial({
    color: "#D0E0E3",
    // emissive: "#e7eb73",
    roughness: 0.05,
    transmission: 0.9, // Add transparency
    thickness: 0.005, // Add refraction!
    wireframe: false,
  });
  const clockNumberMaterial = new MeshPhysicalMaterial({
    color: "#FF0000",
    emissive: "#FF0000",
  });

  return (
    <>
      <mesh
        name="clockFrameGeom"
        geometry={clockFrameGeom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockButton1Geom"
        geometry={clockButton1Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockButton2Geom"
        geometry={clockButton2Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockButton3Geom"
        geometry={clockButton3Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockGearGeom"
        geometry={clockGearGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockNumbersGeom"
        geometry={clockNumbersGeom}
        material={clockNumberMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="clockGlassGeom"
        geometry={clockGlassGeom}
        material={clockGlasMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
