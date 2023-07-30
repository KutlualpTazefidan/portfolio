import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Flashlight() {
  const { geometry: frame1Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/body.glb"
  );
  const { geometry: frame2Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/body2.glb"
  );
  const { geometry: screenGeom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/bulb.glb"
  );
  const { geometry: button1Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/switch1.glb"
  );
  const { geometry: button2Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/switch2.glb"
  );
  const { geometry: button3Geom } = Import3dObject(
    "./assets/imports/Room/Bed/Flashlight/switch3.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  const button1Material = new MeshPhysicalMaterial({
    color: "#b1b1b1",

    wireframe: false,
  });
  const button2Material = new MeshPhysicalMaterial({
    color: "#f30000",
    wireframe: false,
  });
  const button3Material = new MeshPhysicalMaterial({
    color: "#f3f300",
    emissive: "#f3f300",
  });
  const PCScreen = new MeshPhysicalMaterial({
    color: "#f3f300",
    emissive: "#f3f300",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="tframe1Geom"
        geometry={frame1Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tframe2Geom"
        geometry={frame2Geom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tscreenGeom"
        geometry={screenGeom}
        material={PCScreen}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="tbutton1Geom"
        geometry={button1Geom}
        material={button1Material}
        scale={1}
        position={[0, 0, 0]}
        // castShadow
        receiveShadow
      />
      <mesh
        name="tbutton2Geom"
        geometry={button2Geom}
        material={button2Material}
        scale={1}
        position={[0, 0, 0]}
        // castShadow
        receiveShadow
      />
      <mesh
        name="tbutton3Geom"
        geometry={button3Geom}
        material={button3Material}
        scale={1}
        position={[0, 0, 0]}
        // castShadow
        receiveShadow
      />
    </>
  );
}
