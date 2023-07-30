import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";
import ConsoleController from "./ConsoleController";

export default function SegaConsole() {
  const { geometryArray: consoleFrameGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/console/consoleFrame.glb"
  );
  const { geometryArray: consoleGameCardGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/console/consoleGameCard.glb"
  );
  const { geometry: consoleControllerPlugGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerPlug.glb"
  );

  const BlackPlasticMaterial = new MeshPhysicalMaterial({
    color: "#1c1919",
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });
  const RedPlasticMaterial = new MeshPhysicalMaterial({
    color: "#FF000D",
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });

  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });
  const PCScreen = new MeshPhysicalMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="Console1"
        geometry={consoleFrameGeom[0]}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Console2"
        geometry={consoleFrameGeom[1]}
        material={RedPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="GameCard1"
        geometry={consoleGameCardGeom[0]}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="GameCard2"
        geometry={consoleGameCardGeom[1]}
        material={RedPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ControllerPlug"
        geometry={consoleControllerPlugGeom}
        material={RedPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <ConsoleController />
    </>
  );
}
