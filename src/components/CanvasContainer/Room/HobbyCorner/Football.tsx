import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Football() {
  const { geometryArray: FootballGeom, materials: footballSourceMaterial } =
    ImportMulti3dObject("./assets/imports/Room/HobbyCorner/Football.glb");

  const bedMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });
  const blackMaterial = new MeshPhysicalMaterial({
    color: "#000000",
    wireframe: false,
  });
  const whiteMaterial = new MeshPhysicalMaterial({
    color: "#ffffff",
    wireframe: false,
  });
  const footballWhiteMaterial = footballSourceMaterial.white;
  const footballBlackMaterial = footballSourceMaterial.black;

  return (
    <>
      <mesh
        name="CommodeFrame"
        geometry={FootballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="CommodeFrame"
        geometry={FootballGeom[1]}
        material={blackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
