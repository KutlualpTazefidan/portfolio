import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Cables() {
  const { geometry: CablesGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Cables/Cables.glb"
  );
  const { geometry: UcluGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Cables/UcluPriz.glb"
  );
  const { geometry: SocketGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Cables/Socket.glb"
  );

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

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  return (
    <>
      <mesh
        name="CablesGeom"
        geometry={CablesGeom}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="UcluGeom"
        geometry={UcluGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="SocketGeom"
        geometry={SocketGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
