import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Posters() {
  const { geometry: interstellar, materials: rawInterstellarMaterial } =
    Import3dObject("./assets/imports/Room/Posters/interstellar.glb");

  const { geometry: worldmapGeom, materials: rawWorldMapMaterial } =
    Import3dObject("./assets/imports/Room/Posters/worldmap.glb");

  const { geometry: worldmapFrameGeom } = Import3dObject(
    "./assets/imports/Room/Posters/worldmapFrame.glb"
  );

  const { geometry: image1, materials: image1MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image1-1.glb"
  );
  const { geometry: image12 } = Import3dObject(
    "./assets/imports/Room/Posters/image1-2.glb"
  );
  const { geometry: image2, materials: image2MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image2-1.glb"
  );
  const { geometry: image22 } = Import3dObject(
    "./assets/imports/Room/Posters/image2-2.glb"
  );
  const { geometry: image3, materials: image3MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image3-1.glb"
  );
  const { geometry: image32 } = Import3dObject(
    "./assets/imports/Room/Posters/image3-2.glb"
  );
  const { geometry: image4, materials: image4MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image4-1.glb"
  );
  const { geometry: image42 } = Import3dObject(
    "./assets/imports/Room/Posters/image4-2.glb"
  );
  const { geometry: image5, materials: image5MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image5-1.glb"
  );
  const { geometry: image52 } = Import3dObject(
    "./assets/imports/Room/Posters/image5-2.glb"
  );
  const { geometry: image6, materials: image6MatRaw } = Import3dObject(
    "./assets/imports/Room/Posters/image6-1.glb"
  );
  const { geometry: image62 } = Import3dObject(
    "./assets/imports/Room/Posters/image6-2.glb"
  );

  const interstellarMaterial = rawInterstellarMaterial.Poster1;
  const worldmapMaterial = rawWorldMapMaterial.Poster2;
  const image1Mat = image1MatRaw.Poster3;
  const image2Mat = image2MatRaw.Poster4;
  const image3Mat = image3MatRaw.Poster6;
  const image4Mat = image4MatRaw.Poster5;
  const image5Mat = image5MatRaw.Poster7;
  const image6Mat = image6MatRaw.Poster8;
  const woodMaterial = new MeshPhysicalMaterial({
    color: "#b6cfef",
  });
  const blackMaterial = new MeshPhysicalMaterial({
    color: "#020207",
  });
  const sticker = new MeshPhysicalMaterial({
    color: "#ffff0e",
  });

  return (
    <>
      <mesh
        name="interstellar"
        geometry={interstellar}
        material={interstellarMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="worldmapGeom"
        geometry={worldmapGeom}
        material={worldmapMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="worldmapFrameGeom"
        geometry={worldmapFrameGeom}
        material={blackMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      {/* image1 */}
      <mesh
        name="image1"
        geometry={image1}
        material={image1Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image12"
        geometry={image12}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      {/* image2 */}
      <mesh
        name="image2"
        geometry={image2}
        material={image2Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image22"
        geometry={image22}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      {/* image 3 */}
      <mesh
        name="image3"
        geometry={image3}
        material={image3Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image32"
        geometry={image32}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      {/* image 4 */}
      <mesh
        name="image4"
        geometry={image4}
        material={image4Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image42"
        geometry={image42}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      {/* image 5 */}
      <mesh
        name="image5"
        geometry={image5}
        material={image5Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image52"
        geometry={image52}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      {/* image 6 */}
      <mesh
        name="image6"
        geometry={image6}
        material={image6Mat}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="image62"
        geometry={image62}
        material={sticker}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
