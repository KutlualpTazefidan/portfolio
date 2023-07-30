import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function StudyCornerCables() {
  const { geometry: PCLampCablesGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Cables/PCandLampCables.glb"
  );
  const { geometry: StudyCornerCableHeadsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Cables/StudyCornerCableHeads.glb"
  );
  const { geometry: StudyCornerUcluPrizGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Cables/StudyCornerUcluPriz.glb"
  );
  const { geometry: StudyCornerDuvarPrizGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Cables/StudyCornerDuvarPriz.glb"
  );
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  return (
    <>
      <mesh
        name="Cables"
        geometry={PCLampCablesGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CablesHeads"
        geometry={StudyCornerCableHeadsGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="SCPriz"
        geometry={StudyCornerUcluPrizGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="SCDuvarPriz"
        geometry={StudyCornerDuvarPrizGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
