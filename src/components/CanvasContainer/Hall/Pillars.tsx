import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { useEffect, useLayoutEffect, useRef } from "react";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  Matrix4,
  MeshPhysicalMaterial,
  MeshToonMaterial,
  NormalBufferAttributes,
  Object3D,
} from "three";

export default function Pillars() {
  const pillarsRef =
    useRef<
      InstancedMesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[]
      >
    >(null);

  const numberOfPillarsRow = 4;
  const numberOfPillarsColumn = 3;
  const { geometry: pillarGeometry } = Import3dObject(
    "./assets/imports/Pillar.glb"
  );
  const pillarMaterial = new MeshToonMaterial({
    color: "#BF9972",
    wireframe: false,
  });
  //   useLayoutEffect(() => {
  useEffect(() => {
    const pillarGrid = new Object3D();
    const totalPillars = numberOfPillarsRow * numberOfPillarsColumn;

    for (let j = 0; j < totalPillars; j++) {
      const i = Math.floor(j / numberOfPillarsColumn);
      const k = j % numberOfPillarsColumn;
      pillarGrid.position.set(-18 + 12 * i, 0, -12 + 12 * k);
      pillarGrid.updateMatrix();
      pillarsRef.current?.setMatrixAt(j, pillarGrid.matrix);
    }
    if (pillarsRef.current) {
      //   pillarsRef.current.castShadow = true;
      //   pillarsRef.current.receiveShadow = true;
      pillarsRef.current.instanceMatrix.needsUpdate = true;
      pillarsRef.current.updateMatrixWorld();
    }
    console.log(pillarGeometry);
  }, [pillarsRef, pillarsRef.current]);

  return (
    <instancedMesh
      ref={pillarsRef}
      name="Pillars"
      castShadow
      args={[
        pillarGeometry,
        pillarMaterial,
        numberOfPillarsRow * numberOfPillarsColumn,
      ]}
    />
  );
}

// pillarGrid.position.y = 6 * k;
