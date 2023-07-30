import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";
import TV from "./TV";
import SegaConsole from "./Console";
import Lego from "./Lego";
import Cables from "./Cables";
import Shelf from "./Shelf";

export default function ConsoleCorner() {
  const { geometry: tvStandGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TVStand.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });
  const BlackPlasticMaterial = new MeshPhysicalMaterial({
    // color: "#201D1E",
    color: "#E6BF83",
    wireframe: true,
  });

  return (
    <>
      <mesh
        name="TVStand"
        geometry={tvStandGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <TV />
      <SegaConsole />
      <Lego />
      <Cables />
      <Shelf />
    </>
  );
}
