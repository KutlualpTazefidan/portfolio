import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Rugs() {
  const { geometry: rug1Geom, materials: material1 } = Import3dObject(
    "./assets/imports/Room/Rugs/Rug1.glb"
  );
  const { geometry: rug2Geom, materials: material2 } = Import3dObject(
    "./assets/imports/Room/Rugs/Rug2.glb"
  );
  const rugMaterial = new MeshPhysicalMaterial({
    color: "#f0ece9",
    wireframe: false,
  });

  const rug1Material = material1.cars;
  const rug2Material = material2.cars;
  return (
    <>
      <mesh
        name="Rug1"
        geometry={rug1Geom}
        material={rug1Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="Rug2"
        geometry={rug2Geom}
        material={rug2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        // receiveShadow
      />
    </>
  );
}
