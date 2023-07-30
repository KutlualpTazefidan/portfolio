import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function PCMonitor() {
  const { geometry: pcMonitorGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMonitor.glb"
  );
  const { geometry: pcScreenOuterGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCScreenOuter.glb"
  );
  const { geometry: pcScreenGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCScreen.glb"
  );
  const { geometry: pcMonitorButtonGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMonitorButton.glb"
  );
  const { geometry: pcMonitorLightGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMonitorLight.glb"
  );
  const { geometry: pcMonitorFeetGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/PC/PCMonitorFeet.glb"
  );

  const PCMaterial = new MeshPhysicalMaterial({
    color: "#fdf4eb",
    wireframe: false,
  });
  const PCScreen = new MeshPhysicalMaterial({
    color: "#ffffff",
    emissive: "#33ff00",
    wireframe: false,
  });
  const PCGreenLight = new MeshPhysicalMaterial({
    color: "#0d4200",
    emissive: "#2ad400",
    wireframe: false,
  });
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="PCMonitor"
        geometry={pcMonitorGeom}
        material={PCMaterial}
        scale={1}
        position={[3.1914, 1.97286, -3.21018]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCScreen"
        geometry={pcScreenGeom}
        material={PCScreen}
        scale={1}
        position={[3.1914, 1.97286, -3.21018]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCScreenOuter"
        geometry={pcScreenOuterGeom}
        material={PCScreenOuter}
        scale={1}
        position={[3.1914, 1.97286, -3.21018]}
        // castShadow
        // receiveShadow
      />
      <mesh
        name="PCMonitorButton"
        geometry={pcMonitorButtonGeom}
        material={PCScreenOuter}
        scale={1}
        position={[3.1914, 1.97286, -3.21018]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCMonitorLight"
        geometry={pcMonitorLightGeom}
        material={PCGreenLight}
        scale={1}
        position={[3.1914, 1.97286, -3.21018]}
        castShadow
        receiveShadow
      />
      <mesh
        name="PCMonitorLight"
        geometry={pcMonitorFeetGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
}
