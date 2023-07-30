import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function ConsoleController() {
  const { geometryArray: consoleControllerFrameGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerFrame.glb"
  );
  const { geometry: consoleControllerButtonGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerButton.glb"
  );
  const { geometry: consoleControllerPadGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerPad.glb"
  );
  const { geometry: consoleControllerPadTopGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerPadTop.glb"
  );
  const { geometry: consoleControllerCablesTopGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/console/controller/consoleControllerCables.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#E6BF83",
    wireframe: false,
  });
  const BlackPlasticMaterial = new MeshPhysicalMaterial({
    color: "#1c1919",
    // reflectivity: 0.0,
    // roughness: 1.0,
    metalness: 0.5,
    wireframe: false,
  });
  const GreyPlasticMaterial = new MeshPhysicalMaterial({
    color: "#8d837f",
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });
  const MattBlackPlasticMaterial = new MeshPhysicalMaterial({
    color: "#1c1919",
    // reflectivity: 0.0,
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
      {/* Controller 1 */}
      <mesh
        name="ConsoleController1"
        geometry={consoleControllerFrameGeom[0]}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController2"
        geometry={consoleControllerFrameGeom[1]}
        material={BlackPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController3"
        geometry={consoleControllerFrameGeom[2]}
        material={RedPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController4"
        geometry={consoleControllerFrameGeom[3]}
        material={GreyPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        receiveShadow
      />
      <mesh
        name="consoleControllerButtonGeom"
        geometry={consoleControllerButtonGeom}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="consoleControllerPadGeom"
        geometry={consoleControllerPadGeom}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="consoleControllerPadTopGeom"
        geometry={consoleControllerPadTopGeom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[-2.26155, 0.023961, -2.10501]}
        castShadow
        // receiveShadow
      />

      {/* Controller 2 */}
      <mesh
        name="ConsoleController21"
        geometry={consoleControllerFrameGeom[0]}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController22"
        geometry={consoleControllerFrameGeom[1]}
        material={BlackPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController23"
        geometry={consoleControllerFrameGeom[2]}
        material={RedPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="ConsoleController24"
        geometry={consoleControllerFrameGeom[3]}
        material={GreyPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="consoleControllerButtonGeom2"
        geometry={consoleControllerButtonGeom}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="consoleControllerPadGeom2"
        geometry={consoleControllerPadGeom}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="consoleControllerPadTopGeom2"
        geometry={consoleControllerPadTopGeom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[-2.05155, 0.023961, -2.8642]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        // receiveShadow
      />
      {/* Cables */}
      <mesh
        name="consoleControllerPadTopGeom2"
        geometry={consoleControllerCablesTopGeom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        // rotation={[0, Math.PI / 4, 0]}
        castShadow
        // receiveShadow
      />
    </>
  );
}
