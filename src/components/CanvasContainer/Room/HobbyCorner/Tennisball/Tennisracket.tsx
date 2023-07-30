import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function TennisRacket() {
  const { geometry: TennisRacketWireframeGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Tennis/TennisRacketWireframe.glb"
  );
  const { geometry: TennisRacketBottomGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Tennis/TennisRacketBottom.glb"
  );
  const { geometry: TennisRacketTopGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Tennis/TennisRacketTop.glb"
  );

  const greenMaterial = new MeshPhysicalMaterial({
    color: "#444444",
    wireframe: false,
  });
  const whiteMaterial = new MeshPhysicalMaterial({
    color: "#ffffff",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="TennisRacketWireframe"
        geometry={TennisRacketWireframeGeom}
        material={greenMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TennisRacketBottomGeom"
        geometry={TennisRacketBottomGeom}
        material={greenMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TennisRacketTopGeom"
        geometry={TennisRacketTopGeom}
        material={whiteMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
