import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Pot() {
  const { geometry: potGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Pot/Pot.glb"
  );
  const { geometry: bottomGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Pot/Bottom.glb"
  );
  const { geometry: leafsGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Pot/Leafs.glb"
  );
  const { geometry: sapGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Pot/Sap.glb"
  );

  const PotMaterial = new MeshPhysicalMaterial({
    color: "#d97943",
    wireframe: false,
  });
  const BottomMaterial = new MeshPhysicalMaterial({
    color: "#6d3516",
    wireframe: false,
  });
  const LeafMaterial = new MeshPhysicalMaterial({
    color: "#43d979",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="potGeom"
        geometry={potGeom}
        material={PotMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="bottomGeom"
        geometry={bottomGeom}
        material={BottomMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="leafsGeom"
        geometry={leafsGeom}
        material={LeafMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="sapGeom"
        geometry={sapGeom}
        material={LeafMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
