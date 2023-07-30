import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Lego() {
  const { geometryArray: legoBottomGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/Lego/LegoBottom.glb"
  );
  const { geometry: legoTopGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Lego/LegoTop.glb"
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
      <mesh
        name="legoBottomGeom"
        geometry={legoBottomGeom[0]}
        material={RedPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="legoBottomGeom"
        geometry={legoBottomGeom[1]}
        material={MattBlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="legoTopGeom"
        geometry={legoTopGeom}
        material={RedPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
