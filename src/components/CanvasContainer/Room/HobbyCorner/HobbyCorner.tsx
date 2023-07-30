import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";
import Commode from "./Commode/Commode";
import Football from "./Football";
import Tennis from "./Tennis";
import HobbyCables from "./HobbyCables";
import HobbyLamp from "./Lamp/HobbyLamp";
import Clock from "./Clock/Clock";
import Walkman from "./Walkman/Walkman";

export default function HobbyCorner() {
  return (
    <>
      <Commode />
      <Football />
      <Tennis />
      <HobbyCables />
      <HobbyLamp />
      <Clock />
      <Walkman />
    </>
  );
}
