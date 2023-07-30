import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function PCCase() {
  const { geometry: pcCaseGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCCase.glb"
  );
  const { geometry: pcCaseGreenLightsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCGreenLight.glb"
  );
  const { geometry: pcCaseRedLightsGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCRedLight.glb"
  );
  const { geometry: pcCaseButton1Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCCaseButton1.glb"
  );
  const { geometry: pcCaseButton4Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCCaseButton4.glb"
  );
  const { geometry: pcCaseButton5Geom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCCaseButton5.glb"
  );
  const { geometry: pcCaseBrandGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCCaseName.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdf4eb",
    wireframe: false,
  });
  const PCGreenLight = new MeshPhysicalMaterial({
    color: "#0d4200",
    emissive: "#2ad400",
    wireframe: false,
  });
  const PCRedLight = new MeshPhysicalMaterial({
    color: "#ffffff",
    emissive: "#ff0000",
    wireframe: false,
  });
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });
  const pcCaseBrand = new MeshPhysicalMaterial({
    color: "#333231",
    reflectivity: 0.4,
    roughness: 0.5,
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="PCCase"
        geometry={pcCaseGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseGreenLight"
        geometry={pcCaseGreenLightsGeom}
        material={PCGreenLight}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseRedLight"
        geometry={pcCaseRedLightsGeom}
        material={PCRedLight}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />

      <mesh
        name="PCCaseButton1"
        geometry={pcCaseButton1Geom}
        material={PCScreenOuter}
        scale={1}
        position={[2.90385, 1.51786, -2.81181]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseButton2"
        geometry={pcCaseButton1Geom}
        material={PCScreenOuter}
        scale={1}
        position={[2.93901, 1.51786, -2.81181]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseButton3"
        geometry={pcCaseButton1Geom}
        material={PCScreenOuter}
        scale={1}
        position={[2.97416, 1.51786, -2.81181]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseButton4"
        geometry={pcCaseButton4Geom}
        material={PCMaterial}
        scale={1}
        position={[3.5044, 1.51227, -2.81613]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseButton5"
        geometry={pcCaseButton5Geom}
        material={PCScreenOuter}
        scale={1}
        position={[3.51823, 1.45151, -2.81686]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCCaseBrand"
        geometry={pcCaseBrandGeom}
        material={pcCaseBrand}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
