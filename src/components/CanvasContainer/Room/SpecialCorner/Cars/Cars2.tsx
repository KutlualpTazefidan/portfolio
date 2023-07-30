import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Cars2({ position, color }: any) {
  const { geometry: carGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Car.glb"
  );
  const { geometry: platesGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Plates.glb"
  );
  const { geometry: windowsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Windows.glb"
  );
  const { geometry: bumperGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Bumper.glb"
  );
  const { geometry: rearLightsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/RearLights.glb"
  );
  const { geometry: frontLights1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/FrontLights1.glb"
  );
  const { geometry: frontLights2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/FrontLights2.glb"
  );
  const { geometry: frontWheelsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/FrontWheels.glb"
  );
  const { geometry: doorHandlesGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/DoorHandles.glb"
  );

  const { geometry: mirrorsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Mirrors.glb"
  );
  const { geometry: insideFrontGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/InsideFront.glb"
  );
  const { geometry: steeringGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Steering.glb"
  );
  const { geometry: rearMirrorCaseGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/RearMirrorCase.glb"
  );
  const { geometry: seatsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Cars/2/Seats.glb"
  );
  const whiteSaturnMat = new MeshPhysicalMaterial({
    color: color,
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
  });
  const blackSaturnMat = new MeshPhysicalMaterial({
    color: "#0e0e0e",
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
  });
  const greySaturnMat = new MeshPhysicalMaterial({
    color: "#c9c9c9",
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
  });
  const LensMaterial = new MeshPhysicalMaterial({
    color: "#edebe1",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.005, // Add refraction!
  });
  const mirrorMaterial = new MeshPhysicalMaterial({
    color: "#deebfb",
    metalness: 0.0,
    roughness: 0.0,
    reflectivity: 1.0,
    transmission: 0.9, // Add transparency
    thickness: 0.005, // Add refraction!
  });
  const clockNumberMaterial = new MeshPhysicalMaterial({
    color: "#FF0000",
    emissive: "#FF0000",
  });
  const lampMaterial = new MeshPhysicalMaterial({
    color: "#e7eb73",
    emissive: "#e7eb73",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
  });
  const lampTurnMaterial = new MeshPhysicalMaterial({
    color: "#ff8c0d",
    emissive: "#ff8c0d",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
  });

  return (
    <>
      {/* I */}
      <mesh
        name="body"
        geometry={carGeom}
        material={whiteSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="plates"
        geometry={platesGeom}
        material={greySaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="windows"
        geometry={windowsGeom}
        material={LensMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="bumper"
        geometry={bumperGeom}
        material={greySaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="door handles"
        geometry={doorHandlesGeom}
        material={greySaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="rear light"
        geometry={rearLightsGeom}
        material={clockNumberMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="front light 1"
        geometry={frontLights1Geom}
        material={lampMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="front light 2"
        geometry={frontLights2Geom}
        material={lampTurnMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="front wheels"
        geometry={frontWheelsGeom}
        material={blackSaturnMat}
        scale={1}
        position={[position[0] + 0.0385, position[1] + 0, position[2] + 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="rear wheels"
        geometry={frontWheelsGeom}
        material={blackSaturnMat}
        scale={1}
        position={[position[0] - 4 * 0.0345, position[1] + 0, position[2] + 0]}
        castShadow
        receiveShadow
      />

      <mesh
        name="inside front"
        geometry={insideFrontGeom}
        material={blackSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="steering"
        geometry={steeringGeom}
        material={blackSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="rear mirror case"
        geometry={rearMirrorCaseGeom}
        material={blackSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="mirrors"
        geometry={mirrorsGeom}
        material={mirrorMaterial}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
      <mesh
        name="seats"
        geometry={seatsGeom}
        material={blackSaturnMat}
        scale={1}
        position={position}
        castShadow
        receiveShadow
      />
    </>
  );
}
