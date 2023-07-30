import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Train() {
  const { geometry: frame1Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Train/train1.glb"
  );
  const { geometry: frame2Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Train/train2.glb"
  );
  const { geometry: screenGeom } = Import3dObject(
    "./assets/imports/Room/Bed/Train/rails.glb"
  );
  const { geometry: roadGeom } = Import3dObject(
    "./assets/imports/Room/Bed/Train/road.glb"
  );

  const woodMaterial = new MeshPhysicalMaterial({
    color: "#b6cfef",
    wireframe: false,
  });
  const blackMaterial = new MeshPhysicalMaterial({
    color: "#19120c",
    wireframe: false,
  });
  const rails = new MeshPhysicalMaterial({
    color: "#cdcdc4",
    wireframe: false,
  });
  const road = new MeshPhysicalMaterial({
    color: "#efd6b6",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="frame1Geom"
        geometry={frame1Geom}
        material={woodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="frame2Geom"
        geometry={frame2Geom}
        material={blackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="screenGeom"
        geometry={screenGeom}
        material={rails}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="roadGeom"
        geometry={roadGeom}
        material={road}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
