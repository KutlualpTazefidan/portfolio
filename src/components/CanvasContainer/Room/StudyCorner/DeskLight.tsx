import { Import3dObject } from "@/components/utils/canvas/Import3dObject";
import { useHelper, SpotLight as SpotlightDrei } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import {
  Mesh,
  MeshPhysicalMaterial,
  SpotLightHelper,
  SpotLight,
  Vector3,
} from "three";
// import * as THREE from "three"; // Import the Three.js library

export default function DeskLight() {
  const { geometry: deskLightBaseGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightBase.glb"
  );
  const { geometry: deskLightHeadGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightHead.glb"
  );
  const { geometry: deskLightCableGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightCable.glb"
  );
  const { geometry: deskLightSwitchGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightSwitch.glb"
  );
  const { geometry: deskLightBulbGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightBulb.glb"
  );
  const { geometry: deskLightSpotTargetGeom } = Import3dObject(
    "./assets/imports/Room/StudyCorner/DeskLight/DeskLightSpotTarget.glb"
  );
  deskLightBaseGeom.computeVertexNormals();
  deskLightHeadGeom.computeVertexNormals();

  const BlackSwitchMaterial = new MeshPhysicalMaterial({
    color: "#242424",
  });
  const LightBulbMaterial = new MeshPhysicalMaterial({
    color: "#e7eb73",
    emissive: "#e7eb73",
  });
  const SilverMaterial = new MeshPhysicalMaterial({
    color: "#c0c0c0",
    reflectivity: 1,
    roughness: 1,
  });
  const PCMaterial = new MeshPhysicalMaterial({
    color: "#ea3131",
    wireframe: false,
  });
  const PCScreenOuter = new MeshPhysicalMaterial({
    color: "#b8b5b1",
    wireframe: false,
  });

  // Spotlight
  // const spotLight = new SpotLight( 0xffffff, 100 );
  // spotLight.position.set( 2.5, 5, 2.5 );
  // spotLight.angle = Math.PI / 6;
  const spotLightTargetRef = useRef<any>(null!);
  const spotLightRef = useRef<any>(null!);
  // https://www.youtube.com/watch?v=5BR-Pp8I8XI&ab_channel=Threeveloper
  // useHelper(spotLightRef as any, SpotLightHelper, "red");
  console.log("ref", spotLightTargetRef);
  const spotlight = useMemo(() => new SpotLight("#fff"), []);
  spotLightRef.current = spotlight;
  return (
    <>
      <mesh
        name="deskLightBase"
        geometry={deskLightBaseGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        // castShadow
        receiveShadow
      />
      <mesh
        name="deskLightHead"
        geometry={deskLightHeadGeom}
        material={PCMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="deskLightCable"
        geometry={deskLightCableGeom}
        material={SilverMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        // receiveShadow
      />
      <mesh
        name="deskLightSwitch"
        geometry={deskLightSwitchGeom}
        material={PCScreenOuter}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="deskLightBulb"
        geometry={deskLightBulbGeom}
        material={LightBulbMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        name="deskLightSpotTarget"
        geometry={deskLightSpotTargetGeom}
        material={BlackSwitchMaterial}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        ref={spotLightTargetRef}
      />
      {/* Spotlight definition */}
      <group>
        <primitive
          object={spotlight}
          position={[1.43425, 1.98601, -3.42769]}
          intensity={10}
          penumbra={0.5}
          angle={0.4}
          distance={1}
        />
        <primitive
          object={spotlight.target}
          position={[1.7311, 1.29769, -3.42769]}
        />
      </group>
      {/* <SpotlightCustom position={[1.4425, 1.9388601, -3.42769]} /> */}
    </>
  );

  //   function SpotlightCustom({
  //     position,
  //   }: {
  //     position: [number, number, number];
  //   }) {
  //     const vec = new Vector3();
  //     const light = useRef();
  //     useEffect(() => {
  //       if (light.current) {
  //         (light.current as any).target.position.set(1.7311, 1.29769, -3.42769);
  //         (light.current as any).target.updateMatrixWorld();
  //       }
  //       console.log("console effect");
  //     }, [light]);
  //     return (
  //       // @ts-ignore
  //       <SpotlightDrei
  //         // castShadow
  //         ref={light as any}
  //         penumbra={0.15}
  //         distance={4}
  //         angle={0.3}
  //         attenuation={5}
  //         anglePower={100.5}
  //         intensity={12.5}
  //         color="#ffd900"
  //         position={position}
  //         scale={0.2}
  //       />
  //     );
  //   }
}
