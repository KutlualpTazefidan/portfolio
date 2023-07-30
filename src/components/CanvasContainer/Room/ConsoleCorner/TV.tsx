import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function TV() {
  const { geometry: tvFrameGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVFrame.glb"
  );
  const { geometry: tvFrame2Geom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVFrame2.glb"
  );
  const { geometry: tvFrameButton1Geom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVFrameButton.glb"
  );
  const { geometry: tvFrameButton2Geom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVFrameButton2.glb"
  );
  const { geometry: tvSpeakerGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVSpeaker.glb"
  );
  const { geometry: tvScreenGeom } = Import3dObject(
    "./assets/imports/Room/ConsoleCorner/TV/TVScreen.glb"
  );

  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#E6BF83",
    wireframe: false,
  });
  const BlackPlasticMaterial = new MeshPhysicalMaterial({
    // color: "#201D1E",
    color: "#222526",
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });

  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });
  const PCScreen = new MeshPhysicalMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="tvFrame"
        geometry={tvFrameGeom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tvFrame2"
        geometry={tvFrame2Geom}
        material={BlackPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tvFrameButton1Geom"
        geometry={tvFrameButton1Geom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tvFrameButton2Geom"
        geometry={tvFrameButton2Geom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tvSpeakerGeom"
        geometry={tvSpeakerGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tvScreenGeom"
        geometry={tvScreenGeom}
        material={PCScreen}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
