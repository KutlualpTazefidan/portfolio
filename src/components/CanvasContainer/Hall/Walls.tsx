import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { useEffect, useLayoutEffect, useRef } from "react";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  Matrix4,
  MeshToonMaterial,
  NormalBufferAttributes,
  Object3D,
} from "three";

export default function Walls() {
  const pillarsRef =
    useRef<
      InstancedMesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[]
      >
    >(null);

  const numberOfWall = 4;
  // const numberOfPillarsColumn = 3;
  const { geometry: pillarGeometry } = Import3dObject(
    "./assets/imports/Wall.glb"
  );
  const pillarMaterial = new MeshToonMaterial({
    color: "#BF9972",
    wireframe: false,
  });
  //   useLayoutEffect(() => {
  useEffect(() => {
    const wallGrid = new Object3D();

    for (let j = 0; j < numberOfWall; j++) {
      // wallGrid.rotation.set((90 * Math.PI) / 180, 0, 0);
      if (j == 0) {
        wallGrid.rotation.set((90 * Math.PI) / 180, 0, 0);
        wallGrid.position.set(0, 6, -18);
      }
      if (j == 1) {
        wallGrid.rotation.set((90 * Math.PI) / 180, 0, 0);
        wallGrid.position.set(0, 6, 18);
      }
      if (j == 2) {
        wallGrid.rotation.set((90 * Math.PI) / 180, 0, (90 * Math.PI) / 180);
        wallGrid.position.set(18, 6, 0);
      }
      if (j == 3) {
        wallGrid.rotation.set((90 * Math.PI) / 180, 0, (90 * Math.PI) / 180);
        wallGrid.position.set(-18, 6, 0);
      }
      wallGrid.updateMatrix();
      if (pillarsRef.current) {
        pillarsRef.current.setMatrixAt(j, wallGrid.matrix);
        pillarsRef.current.instanceMatrix.needsUpdate = true;
      }
    }
    console.log(pillarGeometry);
  }, [pillarsRef, pillarsRef.current]);

  return (
    <instancedMesh
      ref={pillarsRef}
      name="Pillars"
      castShadow
      args={[pillarGeometry, pillarMaterial, numberOfWall]}
    />
  );
}

// pillarGrid.position.y = 6 * k;
