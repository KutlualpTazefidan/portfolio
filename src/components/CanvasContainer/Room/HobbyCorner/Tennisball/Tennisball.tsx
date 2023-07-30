import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { ImportMulti3dObject } from "@/components/utils/canvas/ImportMulti3dObject";
import { MeshPhysicalMaterial } from "three";

export default function Tennisball() {
  const { geometryArray: TennisballGeom, materials: footballSourceMaterial } =
    ImportMulti3dObject(
      "./assets/imports/Room/HobbyCorner/Tennis/Tennisball.glb"
    );

  const greenMaterial = new MeshPhysicalMaterial({
    color: "#00FF00",
    wireframe: false,
  });
  const whiteMaterial = new MeshPhysicalMaterial({
    color: "#ffffff",
    wireframe: false,
  });

  return (
    <>
      <mesh
        name="Tennisball11"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[0.962584, 0.082732, 3.13636]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball12"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[0.962584, 0.082732, 3.13636]}
        castShadow
        receiveShadow
      />

      <mesh
        name="Tennisball21"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[1.14427, 0.08183, 3.09791]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball22"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[1.14427, 0.08183, 3.09791]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />

      <mesh
        name="Tennisball31"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[1.06123, 0.08183, 2.94294]}
        rotation={[Math.PI / 1, Math.PI / 2.4, Math.PI / 2]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball32"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[1.06123, 0.08183, 2.94294]}
        rotation={[Math.PI / 1, Math.PI / 2.4, Math.PI / 2]}
        castShadow
        receiveShadow
      />

      <mesh
        name="Tennisball41"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[1.29612, 0.08183, 3.05699]}
        rotation={[Math.PI / 1.5, Math.PI / 3.4, Math.PI / 6]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball42"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[1.29612, 0.08183, 3.05699]}
        rotation={[Math.PI / 1.5, Math.PI / 3.4, Math.PI / 6]}
        castShadow
        receiveShadow
      />

      <mesh
        name="Tennisball51"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[1.25846, 0.081895, 3.22062]}
        rotation={[Math.PI / 2.3, Math.PI / 6.2, Math.PI / 4.3]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball52"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[1.25846, 0.081895, 3.22062]}
        rotation={[Math.PI / 2.3, Math.PI / 6.2, Math.PI / 4.3]}
        castShadow
        receiveShadow
      />

      <mesh
        name="Tennisball61"
        geometry={TennisballGeom[0]}
        material={whiteMaterial}
        scale={1}
        position={[1.18084, 0.221912, 3.17433]}
        rotation={[Math.PI / 7.3, Math.PI / 8.2, Math.PI / 1.3]}
        castShadow
        receiveShadow
      />
      <mesh
        name="Tennisball62"
        geometry={TennisballGeom[1]}
        material={greenMaterial}
        scale={1}
        position={[1.18084, 0.221912, 3.17433]}
        rotation={[Math.PI / 7.3, Math.PI / 8.2, Math.PI / 1.3]}
        castShadow
        receiveShadow
      />
    </>
  );
}
