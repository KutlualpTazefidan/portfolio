import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function HobbyLamp() {
  const { geometry: hobbyLampTopGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Lamp/LampTop.glb"
  );
  const { geometry: hobbyLampButtomGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Lamp/LampButtom.glb"
  );
  const { geometry: hobbyLampKolGeom } = Import3dObject(
    "./assets/imports/Room/HobbyCorner/Lamp/LampHand.glb"
  );

  const cableBlackMaterial = new MeshPhysicalMaterial({
    color: "#191919",
    wireframe: false,
  });

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdfaf5",
    wireframe: false,
  });
  const lampMaterial = new MeshPhysicalMaterial({
    color: "#e7eb73",
    emissive: "#e7eb73",
    roughness: 0.2,
    transmission: 1, // Add transparency
    thickness: 0.05, // Add refraction!
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="hobbyLampTopGeom"
        geometry={hobbyLampTopGeom}
        material={lampMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="hobbyLampButtomGeom"
        geometry={hobbyLampButtomGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="hobbyLampKolGeom"
        geometry={hobbyLampKolGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
