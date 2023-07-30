import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function PCMouse() {
  const { geometry: pcMouseGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMaus.glb"
  );
  const { geometry: pcMausLeftButtonGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMausLeftButton.glb"
  );
  const { geometry: pcMausRightButtonGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMausRightButton.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdf4eb",
    wireframe: false,
  });
  const PCMouseButton = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="PCMouse"
        geometry={pcMouseGeom}
        material={PCMaterial}
        scale={1}
        position={[2.85644, 1.28992, -2.54848]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCMouseLeftButton"
        geometry={pcMausLeftButtonGeom}
        material={PCMouseButton}
        scale={1}
        position={[2.85644, 1.28992, -2.54848]}
        castShadow
        receiveShadow
      />
      <mesh
        name="pcMausRightButtonGeom"
        geometry={pcMausRightButtonGeom}
        material={PCMouseButton}
        scale={1}
        position={[2.85644, 1.28992, -2.54848]}
        castShadow
        receiveShadow
      />
    </>
  );
}
