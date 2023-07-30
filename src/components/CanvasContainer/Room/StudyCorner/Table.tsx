import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Table() {
  const { geometry: tableTopGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Table/TableTop.glb"
  );
  const { geometry: tableFeetsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Table/TableFeets.glb"
  );
  const { geometry: tableContainerWallsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Table/TableContainerWalls.glb"
  );
  const { geometry: tableDrawer1Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Table/TableDrawer1.glb"
  );
  const { geometry: tableDrawer1KnobGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/Table/TableDrawer1Knob.glb"
  );
  //   const { geometry: tableDrawer2Geom } = Import3dObject(
  //     "./assets/imports/Room/StudyCorner/Table/TableDrawer2.glb"
  //   );
  //   const { geometry: tableDrawer2KnobGeom } = Import3dObject(
  //     "./assets/imports/Room/StudyCorner/Table/TableDrawer2Knob.glb"
  //   );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });
  const KnobWoodMaterial = new MeshPhysicalMaterial({
    color: "#83aae6",
    wireframe: false,
  });
  const SilverMaterial = new MeshPhysicalMaterial({
    color: "#c0c0c0",
    reflectivity: 1,
    roughness: 1,
  });

  return (
    <>
      <mesh
        name="TableTop"
        geometry={tableTopGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableFeets"
        geometry={tableFeetsGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableContainerWalls"
        geometry={tableContainerWallsGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableDrawer1"
        geometry={tableDrawer1Geom}
        material={WoodMaterial}
        scale={1}
        position={[3.28617, 0.918572, -3.10076]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableDrawer1Knob"
        geometry={tableDrawer1KnobGeom}
        material={SilverMaterial}
        scale={1}
        position={[3.28235, 0.919611, -2.43957]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableDrawer2"
        geometry={tableDrawer1Geom}
        material={WoodMaterial}
        scale={1}
        position={[3.28617, 0.429673, -3.10076]}
        castShadow
        receiveShadow
      />
      <mesh
        name="TableDrawer2Knob"
        geometry={tableDrawer1KnobGeom}
        material={SilverMaterial}
        scale={1}
        position={[3.28235, 0.42132, -2.43957]}
        castShadow
        receiveShadow
      />
    </>
  );
}
