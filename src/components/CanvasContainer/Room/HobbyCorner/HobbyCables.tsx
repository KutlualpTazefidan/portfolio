import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function HobbyCables() {
  const { geometry: CommodeCablesGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Cables/Cables.glb"
  );
  const { geometry: CommodeCableHeadsGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Cables/CablesHead.glb"
  );
  const { geometry: CommodeUcluPrizGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Cables/UcluPriz.glb"
  );

  const cableBlackMaterial = new MeshPhysicalMaterial({
    color: "#191919",
    wireframe: false,
  });

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  return (
    <>
      <mesh
        name="CommodeCablesGeom"
        geometry={CommodeCablesGeom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeCableHeadsGeom"
        geometry={CommodeCableHeadsGeom}
        material={cableBlackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Uclu"
        geometry={CommodeUcluPrizGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
