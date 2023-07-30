import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function MessageBoard() {
  const { geometry: boardGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/MessageBoard/board.glb"
  );
  const { geometry: frameGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/MessageBoard/frame.glb"
  );
  const { geometry: stickerGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/MessageBoard/sticker.glb"
  );

  const board = new MeshPhysicalMaterial({
    color: "#fdfaf5",
  });

  const frame = new MeshPhysicalMaterial({
    color: "#e1e1e1",
  });
  const sticker = new MeshPhysicalMaterial({
    color: "#ffff0e",
  });
  return (
    <>
      <mesh
        name="boardGeom"
        geometry={boardGeom}
        material={board}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="frameGeom"
        geometry={frameGeom}
        material={frame}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="stickerGeom"
        geometry={stickerGeom}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
