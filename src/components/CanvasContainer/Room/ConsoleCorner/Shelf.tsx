import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";
import Pot from "./Pot";

export default function Shelf() {
  const { geometry: shelfGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Shelf.glb"
  );
  const { geometryArray: bookGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Book.glb"
  );
  const { geometryArray: dvdGeom } = ImportMulti3dObject(
    "./assets/imports/Room/ConsoleCorner/Shelf/Dvd.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });
  const BookShelfMaterial = new MeshPhysicalMaterial({
    color: "#d97943",
    wireframe: false,
  });
  const BookPagesMaterial = new MeshPhysicalMaterial({
    color: "#f6fafd",
    wireframe: false,
  });
  const DvdShelfMaterial = new MeshPhysicalMaterial({
    color: "#020507",
    wireframe: false,
  });
  const DvdPagesMaterial = new MeshPhysicalMaterial({
    color: "#f6fafd",
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
  const DvdCoverMaterial = new MeshPhysicalMaterial({
    color: "#edebe1",
    roughness: 0.2,
    transmission: 0.7, // Add transparency
    thickness: 0.005, // Add refraction!
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="shelfGeom"
        geometry={shelfGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="BookGeom"
        geometry={bookGeom[0]}
        material={BookShelfMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="BookGeom"
        geometry={bookGeom[1]}
        material={BookPagesMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="DVDGeom"
        geometry={dvdGeom[0]}
        material={DvdShelfMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="DVDGeom"
        geometry={dvdGeom[1]}
        material={DvdCoverMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        // receiveShadow
      />
      <Pot />
    </>
  );
}
