import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function PCKeyboard() {
  const { geometry: pcKeyboardBaseGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCKeyboardBase.glb"
  );
  const { geometry: pcKeyboardButton1Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCKeyboardButton1.glb"
  );
  const { geometry: pcKeyboardButton2Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCKeyboardButton2.glb"
  );
  const { geometry: pcKeyboardLightsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCKeyboardLights.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdf4eb",
    wireframe: false,
  });
  const PCKeyboardButton2 = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });

  const PCGreenLight = new MeshPhysicalMaterial({
    color: "#0d4200",
    emissive: "#2ad400",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="PCKeyboardBase"
        geometry={pcKeyboardBaseGeom}
        material={PCMaterial}
        scale={1}
        position={[2.04693, 1.31562, -2.61221]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCKeyboardButton1"
        geometry={pcKeyboardButton1Geom}
        material={PCKeyboardButton2}
        scale={1}
        position={[2.04693, 1.31562, -2.61221]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCKeyboardButton2"
        geometry={pcKeyboardButton2Geom}
        material={PCMaterial}
        scale={1}
        position={[2.04693, 1.31562, -2.61221]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCKeyboardLights"
        geometry={pcKeyboardLightsGeom}
        material={PCGreenLight}
        scale={1}
        position={[2.04693, 1.31562, -2.61221]}
        // castShadow
        // receiveShadow
      />
    </>
  );
}
