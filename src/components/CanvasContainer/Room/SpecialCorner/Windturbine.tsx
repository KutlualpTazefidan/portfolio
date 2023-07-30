import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Aircraft() {
  const { geometry: airCraftFrameGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/AirCraftFrame.glb"
  );
  const { geometry: engineFrameGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/EngineFrame.glb"
  );
  const { geometry: engineFrame2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/EngineFrame2.glb"
  );
  const { geometry: cockpitGlassGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/CockpitGlass.glb"
  );
  const { geometry: bodyMetalsGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/BodyMetals.glb"
  );
  const { geometry: wing1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Wing1.glb"
  );
  const { geometry: wing2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Wing2.glb"
  );
  const { geometry: wing3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Wing3.glb"
  );
  const { geometry: seatGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Seat.glb"
  );
  const { geometry: lenkrad1Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Lenkrad1.glb"
  );
  const { geometry: lenkrad2Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Lenkrad2.glb"
  );
  const { geometry: lenkrad3Geom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Lenkrad3.glb"
  );
  const { geometry: robesGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/Aircraft/Robes.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#e6a683",
    metalness: 0.1,
    roughness: 0.8,
    reflectivity: 0.0,
    wireframe: false,
  });
  const Wood2Material = new MeshPhysicalMaterial({
    color: "#411f0f",
    metalness: 0.1,
    roughness: 0.9,
    reflectivity: 0.1,
    wireframe: false,
  });
  const metalMaterial = new MeshPhysicalMaterial({
    color: "#f7f6f6",
    metalness: 0.9,
    roughness: 0.2,
    reflectivity: 0.9,
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
        name="airCraftFrameGeom"
        geometry={airCraftFrameGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="engineFrameGeom"
        geometry={engineFrameGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="engineFrame2Geom"
        geometry={engineFrame2Geom}
        material={metalMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="cockpitGlassGeom"
        geometry={cockpitGlassGeom}
        material={LensMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="bodyMetalsGeom"
        geometry={bodyMetalsGeom}
        material={metalMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="wing1Geom"
        geometry={wing1Geom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="wing2Geom"
        geometry={wing2Geom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="wing3Geom"
        geometry={wing3Geom}
        material={metalMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="seatGeom"
        geometry={seatGeom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="lenkrad1Geom"
        geometry={lenkrad1Geom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="lenkrad2Geom"
        geometry={lenkrad2Geom}
        material={metalMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="lenkrad3Geom"
        geometry={lenkrad3Geom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="robesGeom"
        geometry={robesGeom}
        material={LensMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
