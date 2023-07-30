import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Walkman() {
  const { geometry: walkmanBase1Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanBase1.glb"
  );
  const { geometry: walkmanBase2Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanBase2.glb"
  );
  const { geometry: walkmanBase3Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanBase3.glb"
  );
  const { geometry: walkmanBase4Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanBase4.glb"
  );
  const { geometry: walkmanBase5GlassGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanBase5Glass.glb"
  );
  const { geometry: walkmanButtonGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanButton.glb"
  );
  const { geometry: walkmanPlugGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanPlug.glb"
  );
  const { geometry: walkmanCablesGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/WalkmanCables.glb"
  );
  const { geometry: headset1Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset1.glb"
  );
  const { geometry: headset2Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset2.glb"
  );
  const { geometry: headset3Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset3.glb"
  );
  const { geometry: headset4Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset4.glb"
  );
  const { geometry: headset5Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset5.glb"
  );
  const { geometry: headset6Geom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Walkman/Headset6.glb"
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

  return (
    <>
      <mesh
        name="walkmanBase1Geom"
        geometry={walkmanBase1Geom}
        material={PCMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanBase2Geom"
        geometry={walkmanBase2Geom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanBase3Geom"
        geometry={walkmanBase3Geom}
        material={PCMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanBase4Geom"
        geometry={walkmanBase4Geom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanBase5Geom"
        geometry={walkmanBase5GlassGeom}
        material={PCMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanButtonGeom"
        geometry={walkmanButtonGeom}
        material={PCMaterial}
        scale={1}
        position={[0, -0.01, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanPlugGeom"
        geometry={walkmanPlugGeom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="walkmanCablesGeom"
        geometry={walkmanCablesGeom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset1Geom"
        geometry={headset1Geom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset2Geom"
        geometry={headset2Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset3Geom"
        geometry={headset3Geom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset4Geom"
        geometry={headset4Geom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset5Geom"
        geometry={headset5Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="headset6Geom"
        geometry={headset6Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0.0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
