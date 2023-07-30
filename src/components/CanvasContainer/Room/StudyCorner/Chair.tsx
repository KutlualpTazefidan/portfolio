import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { useHelper, SpotLight as SpotlightDrei } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import {
  Mesh,
  MeshPhysicalMaterial,
  SpotLightHelper,
  SpotLight,
  Vector3,
} from "three";
// import * as THREE from "three"; // Import the Three.js library

export default function Chair() {
  const { geometry: chairPofidikGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Chair/ChairPofidik.glb"
  );
  const { geometry: chairTopGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Chair/ChairTop.glb"
  );
  const { geometry: chairBottomGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Chair/ChairBottom.glb"
  );
  const { geometry: chairTiresGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Chair/ChairTires.glb"
  );
  const { geometry: chairTireCapsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Chair/ChairTiresCap.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  const BlackPlasticMaterial = new MeshPhysicalMaterial({
    color: "#4a4948",
  });

  const SilverMaterial = new MeshPhysicalMaterial({
    color: "#c0c0c0",
    reflectivity: 1,
    roughness: 1,
  });
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });
  const roomBackMaterial = new MeshPhysicalMaterial({
    color: "#dbcec1",
    wireframe: false,
  });
  return (
    <>
      <mesh
        name="Pofidik"
        geometry={chairPofidikGeom}
        material={roomBackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="chairtop"
        geometry={chairTopGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="chairbottom"
        geometry={chairBottomGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="chairtires"
        geometry={chairTiresGeom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="chairtirescap"
        geometry={chairTireCapsGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
