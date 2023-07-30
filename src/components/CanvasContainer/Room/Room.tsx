import Load3dObject from "@/components/utils/canvas/Load3dObject";
import { useFrame, useThree } from "@react-three/fiber";
import BackgroundRoom from "./RoomBack";
import RoomFront from "./RoomFront";
import Door from "./Door/Door";
import RoomRoof from "./RoomRoof";
import Bed from "./Bed";
import RoomWindow from "./RoomWindow";
import Rugs from "./Rugs";
import ConsoleCorner from "./ConsoleCorner/ConsoleCorner";
import StudyCorner from "./StudyCorner/StudyCorner";
import HobbyCorner from "./HobbyCorner/HobbyCorner";
import SpecialCorner from "./SpecialCorner/SpecialCorner";
import Posters from "./Posters";

export default function Room() {
  const { raycaster, scene, camera, viewport } = useThree();
  // console.log(scene);
  return (
    <>
      <BackgroundRoom />
      {/* <RoomFront /> */}
      {/* <RoomRoof /> */}
      <RoomWindow />
      <Door />
      <Bed />
      {/* <Rugs /> */}
      <ConsoleCorner />
      <StudyCorner />
      <HobbyCorner />
      <SpecialCorner />
      <Posters />
      {/* <mesh
        scale={[1, 1, 1]}
        position={[-0.35, 1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry />
        <meshStandardMaterial color={"#964B00"} />
      </mesh> */}
    </>
  );
}
