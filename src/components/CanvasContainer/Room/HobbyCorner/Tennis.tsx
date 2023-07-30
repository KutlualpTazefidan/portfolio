import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";
import Tennisball from "./Tennisball/Tennisball";
import TennisRacket from "./Tennisball/Tennisracket";

export default function Tennis() {
  return (
    <>
      <Tennisball />
      <TennisRacket />
    </>
  );
}
