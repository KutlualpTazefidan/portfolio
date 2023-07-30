import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { useEffect, useLayoutEffect, useRef } from "react";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  Matrix4,
  MeshLambertMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  NormalBufferAttributes,
  Object3D,
} from "three";

export default function RoomBack() {
  const { geometry: roomBackGeom } = Import3dObject(
    "./assets/imports/Room/RoomBack.glb"
  );

  // const sphereHolderMaterial = new MeshLambertMaterial({
  //   // clearcoat: 1.0,
  //   // clearcoatRoughness: 0.1,
  //   // metalness: 0.9,
  //   // roughness: 0.1,
  //   reflectivity: 1.0,
  //   color: "#FFFFFF",
  //   wireframe: false,
  // });

  const roomBackMaterial = new MeshPhysicalMaterial({
    // color: "#f0ece9",
    color: "#dbcec1",
    wireframe: false,
  });

  return (
    <mesh
      name="RoomBack"
      geometry={roomBackGeom}
      material={roomBackMaterial}
      scale={1}
      position={[0, 0, 0.19]}
      castShadow
      receiveShadow
    />
  );
}
