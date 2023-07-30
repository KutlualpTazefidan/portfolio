import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { MeshPhysicalMaterial } from "three";
import Camera from "./Camera";
import Aircraft from "./Aircraft";
import SaturnV from "./SaturnV";
import Cars1 from "./Cars/Cars1";
import Cars2 from "./Cars/Cars2";
import Cars3 from "./Cars/Cars3";
import Cars4 from "./Cars/Cars4";
import Cars5 from "./Cars/Cars5";
import Cars6 from "./Cars/Cars6";
import Cars7 from "./Cars/Cars7";
import Cars8 from "./Cars/Cars8";
import Cars9 from "./Cars/Cars9";
import Cars10 from "./Cars/Cars10";
import Cars11 from "./Cars/Cars11";

export default function SpecialCorner() {
  const { geometry: specialShelfGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/specialShelf.glb"
  );
  const { geometry: specialShelfDrawerGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/specialShelfDrawer.glb"
  );
  const { geometry: specialShelfDrawerKnobGeom } = Import3dObject(
    "./assets/imports/Room/SpecialCorner/specialShelfDrawerKnob.glb"
  );
  const WoodMaterial = new MeshPhysicalMaterial({
    color: "#f8f4f0",
    wireframe: false,
  });
  const Wood2Material = new MeshPhysicalMaterial({
    color: "#e6a683",
    wireframe: false,
  });
  const GreyPlasticMaterial = new MeshPhysicalMaterial({
    color: "#8d837f",
    roughness: 0.5,
    reflectivity: 0.5,
    wireframe: false,
  });
  const positionOrigin = [0.1, 0.1, -3];
  const distance_multi = 0.15;
  const distance = 1.2;
  const bumper_distance = 0.05;
  const bumper_distance2 = 0.05;

  return (
    <>
      <mesh
        name="SpecialShelf"
        geometry={specialShelfGeom}
        material={WoodMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="specialShelfDrawerGeom"
        geometry={specialShelfDrawerGeom}
        material={Wood2Material}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="specialShelfDrawerKnobGeom"
        geometry={specialShelfDrawerKnobGeom}
        material={GreyPlasticMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <Camera />
      <Aircraft />
      <SaturnV position={[0.1, 0, 0]} />
      <SaturnV position={[-0.2, 0, 0.1]} />
      <SaturnV position={[0.3, 0, 0.2]} />
      <SaturnV position={[0.3, 0, -0.2]} />
      <SaturnV position={[-0.2, 0, -0.1]} />
      <Cars1
        position={[positionOrigin[0], positionOrigin[1], positionOrigin[2]]}
        color={"#fdf8f5"}
        color2={"#d66f31"}
      />
      <Cars2
        position={[
          positionOrigin[0] + distance_multi * distance * 1.2 + bumper_distance,
          positionOrigin[1],
          positionOrigin[2],
        ]}
        color={"#3f3f3f"}
      />
      <Cars3
        position={[
          positionOrigin[0] + distance_multi * 2.5 + bumper_distance * 2,
          positionOrigin[1],
          positionOrigin[2],
        ]}
        color={"#f30000"}
      />
      <Cars4
        position={[
          positionOrigin[0],
          positionOrigin[1],
          positionOrigin[2] + distance_multi,
        ]}
      />
      <Cars5
        position={[
          positionOrigin[0] + distance_multi * distance + bumper_distance2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi,
        ]}
        color={"#007af3"}
      />
      <Cars6
        position={[
          positionOrigin[0] +
            distance_multi * distance * 2 +
            bumper_distance2 * 2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi,
        ]}
        color={"#00f379"}
      />
      <Cars7
        position={[
          positionOrigin[0],
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 2,
        ]}
      />
      <Cars8
        position={[
          positionOrigin[0] + distance_multi * distance + bumper_distance2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 2,
        ]}
        color={"#f37900"}
      />
      <Cars9
        position={[
          positionOrigin[0] +
            distance_multi * distance * 2 +
            bumper_distance2 * 2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 2,
        ]}
        color={"#f3007a"}
      />
      <Cars10
        position={[
          positionOrigin[0],
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 3,
        ]}
        color={"#007af3"}
      />
      <Cars11
        position={[
          positionOrigin[0] + distance_multi * distance + bumper_distance2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 3,
        ]}
        color={"#f3f300"}
      />
      <Cars4
        position={[
          positionOrigin[0] +
            distance_multi * distance * 2 +
            bumper_distance2 * 2,
          positionOrigin[1],
          positionOrigin[2] + distance_multi * 3,
        ]}
      />
    </>
  );
}
