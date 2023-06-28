import { load3dGeometry } from "@/components/utils/canvas/Load3dObject";
import { useRef } from "react";
import {
  BufferGeometry,
  InstancedMesh,
  Material,
  MeshToonMaterial,
  NormalBufferAttributes,
  Object3D,
} from "three";
import { ref } from "valtio";

export default function Pillars() {
  const numberOfPillarsRow = 2;
  const numberOfPillarsColumn = 3;
  const pillarsRef =
    useRef<
      InstancedMesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[]
      >
    >(null);
  const pillarGeometry = load3dGeometry("./assets/imports/Pillar.glb");
  const pillarMaterial = new MeshToonMaterial({
    color: "#BF9972",
    wireframe: false,
  });
  // const sixPillars = new InstancedMesh(pillarGeometry,pillarMaterial,numberOfPillarsRow+numberOfPillarsColumn)
  const pillarGrid = new Object3D();
  const totalPillars = numberOfPillarsRow + numberOfPillarsColumn;

  for (let j = 0; j < totalPillars; j++) {
    const i = Math.floor(j / numberOfPillarsColumn);
    const k = j % numberOfPillarsColumn;
    pillarGrid.position.x = 6 * i;
    pillarGrid.position.y = 6 * k;
    pillarGrid.updateMatrix();
    pillarsRef.current?.setMatrixAt(j, pillarGrid.matrix);
  }
  if (pillarsRef.current) {
    pillarsRef.current.name = "Pillars";
    pillarsRef.current.instanceMatrix.needsUpdate = true;
  }

  // position={[0, 0, 0]}
  // scale={1.0}
  // objectName="Pillar"
  return (
    <instancedMesh
      ref={pillarsRef}
      args={[
        pillarGeometry,
        pillarMaterial,
        numberOfPillarsRow + numberOfPillarsColumn,
      ]}
    />
  );
}
