import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";
import Table from "./Table";
import PC from "./PC/PC";
import DeskLight from "./DeskLight";
import Speakers from "./Speakers";
import StudyCornerCables from "./StudyCornerCables";
import Chair from "./Chair";
import MessageBoard from "./MessageBoard";

export default function StudyCorner() {
  return (
    <>
      <Table />
      <PC />
      <DeskLight />
      <Speakers />
      <StudyCornerCables />
      <Chair />
      <MessageBoard />
    </>
  );
}
