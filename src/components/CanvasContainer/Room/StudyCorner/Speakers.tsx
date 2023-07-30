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

export default function Speakers() {
  const { geometry: speaker1FrameGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker1Frame.glb"
  );
  const { geometry: speaker2FrameGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker2Frame.glb"
  );
  const { geometry: speaker1FrontGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker1Front.glb"
  );
  const { geometry: speaker2FrontGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker2Front.glb"
  );
  const { geometry: speaker1Button1Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker1Button1.glb"
  );
  const { geometry: speaker1Button2Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker1Button2.glb"
  );
  const { geometry: speaker1LightGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Speakers/Speaker1Light.glb"
  );
  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdf4eb",
    wireframe: false,
  });
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });
  const PCGreenLight = new MeshPhysicalMaterial({
    color: "#0d4200",
    emissive: "#2ad400",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="Speaker1Frame"
        geometry={speaker1FrameGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker2Frame"
        geometry={speaker2FrameGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker1Front"
        geometry={speaker1FrontGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker2Front"
        geometry={speaker2FrontGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker1Button1"
        geometry={speaker1Button1Geom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker1Button2"
        geometry={speaker1Button2Geom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Speaker1Light"
        geometry={speaker1LightGeom}
        material={PCGreenLight}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
