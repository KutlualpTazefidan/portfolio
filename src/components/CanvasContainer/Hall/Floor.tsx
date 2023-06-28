import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { CubeCamera } from "@react-three/drei";
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
  CubeTexture,
} from "three";

export default function Floor() {
  const { geometry: floorGeom } = Import3dObject(
    "./assets/imports/FloorForPillars.glb"
  );

  const floorMaterial = new MeshLambertMaterial({
    // clearcoat: 1.0,
    // clearcoatRoughness: 0.1,
    // metalness: 0.9,
    // roughness: 0.1,
    reflectivity: 1.0,
    color: "#FFFFFF",
    wireframe: false,
  });

  return (
    <CubeCamera>
      {
        ((texture: CubeTexture) => (
          <mesh name="Floor" geometry={floorGeom} receiveShadow>
            <meshStandardMaterial metalness={1} envMap={texture} />
          </mesh>
        )) as any
      }
    </CubeCamera>
  );
}

// pillarGrid.position.y = 6 * k;
