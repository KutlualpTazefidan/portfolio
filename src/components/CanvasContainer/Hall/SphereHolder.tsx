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

export default function SphereHolder() {
  const { geometry: sphereHolderGeom } = Import3dObject(
    "./assets/imports/SphereHolder.glb"
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

  const sphereHolderMaterial = new MeshPhysicalMaterial({
    color: "#BF9972",
    wireframe: false,
  });

  return (
    <mesh
      name="Floor"
      geometry={sphereHolderGeom}
      material={sphereHolderMaterial}
      scale={0.2}
      position={[0, -0.3, -6]}
      castShadow
    />
  );
}

// pillarGrid.position.y = 6 * k;
