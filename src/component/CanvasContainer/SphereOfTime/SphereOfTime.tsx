import styles from "./sot.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { Box as BoxDrei, Plane as PlaneDrei } from "@react-three/drei";
import {
  Color,
  IcosahedronGeometry,
  InstancedMesh,
  Material,
  Matrix4,
  Mesh,
  MeshPhysicalMaterial,
  Vector2,
  Vector3,
  Plane,
  PlaneHelper,
  Box3,
  BoxHelper,
  BoxGeometry,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  ShaderMaterial,
} from "three";

import { Depth, LayerMaterial } from "lamina";
import WoblyMaterialLayerComponent from "./CustomMaterialLayer/WoblyMaterialLayerComponent";
import { button, folder, useControls } from "leva";
import { ExpandInstancesMaterial } from "./CustomMaterial/ExpandInstancesMaterial";
export default function SphereOfTime() {
  const woblyMaterialRef = useRef<any>();
  const { raycaster, scene, camera, viewport } = useThree();
  function logRayCaster(e: ThreeEvent<MouseEvent>) {}

  const materialColor = "#93E0EC";
  // const uniforms = useMemo(
  //   () => ({
  //     uFrequency: { value: new Vector2(10, 10) },
  //     uAmplitude: { value: new Vector2(0.1, 0.2) },
  //     uTime: { value: 0.0 },
  //     uColor: { value: new Color(materialColor) },
  //   }),
  //   []
  // );

  // Tweakbox
  const [
    {
      scale,
      color,
      wireframe,
      position,
      noise_scale,
      mix_factor,
      plane_distance,
      effect_distance,
    },
    set,
  ] = useControls("Box", () => ({
    transform: folder({
      scale: {
        value: 1,
        min: 0.1,
        max: 12,
        step: 0.1,
      },
      position: [5, -0.3, 0],
      material: folder({
        color: "#333",
        wireframe: false,
      }),
      reset: button(() => {
        set({
          scale: 1,
          position: [0, 0, 0],
          color: "#333",
          wireframe: false,
        });
      }),
    }),
    noise_scale: {
      value: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    },
    mix_factor: {
      value: 0.005,
      min: 0,
      max: 10,
      step: 0.01,
    },
    plane_distance: {
      value: 92,
      min: -200,
      max: 200,
      step: 0.1,
    },
    effect_distance: {
      value: 10,
      min: 1,
      max: 20,
      step: 1,
    },
    helper: true,
  }));

  // Uniforms for the custom material
  // integrate useMemo
  const uniforms2 = {
    u_pointPosition: { value: new Vector3(0, 0, 0) },
    u_time: { value: 0 },
    u_mixFactor: { value: mix_factor },
    u_distanceEffect: { value: effect_distance },
    u_noiseScale: { value: noise_scale },
    u_scaleEffect: { value: scale },
    u_groupMatrix: { value: new Matrix4().identity() },
  };
  const sphereMaterial = new ExpandInstancesMaterial({
    color: "#FF8001",
    wireframe: false,
    uniforms: uniforms2,
  });
  // const uniforms = {
  //   u_pointPosition: { value: new Vector3(0, 0, 0) },
  //   u_mixFactor: { value: 0.0 },
  //   u_time: { value: 0 },
  //   u_groupMatrix: { value: new Matrix4().identity() },
  //   u_distanceEffect: { value: 250.0 },
  //   u_noiseScale: { value: 1.0 },
  //   u_scaleEffect: { value: 1.0 },
  // };
  // useEffect(() => {
  // Sphere Geometry gives the basic shape
  // const sphereMaterial = new MeshPhysicalMaterial({ color: "#FF8001" });
  const sphereGeometry = new IcosahedronGeometry(10, 10);
  // Nodes are the position where a new geometry will be placed
  const sphereMaxNodes = sphereGeometry.attributes.position.count;
  const sphereArrayNodes = sphereGeometry.attributes.position.array;

  // The geometry at these nodes are also a sphere but with
  // more simple material which not effect light
  const geometryAtNodes = new IcosahedronGeometry(0.5);

  // Creating an instance of this sphere for each node
  //  An instance mesh allows a large number of objects without the need of more computation power
  const sphereOutOfSpheres = new InstancedMesh(
    geometryAtNodes,
    sphereMaterial,
    sphereMaxNodes
  );
  // Position of each instanced sphere , I'm not sure of this?
  for (let i = 0; i < sphereMaxNodes; i++) {
    const positionInstancedFace = new Vector3(
      sphereArrayNodes[i * 3],
      sphereArrayNodes[i * 3 + 1],
      sphereArrayNodes[i * 3 + 2]
    );
    const matrix = new Matrix4().setPosition(positionInstancedFace);
    sphereOutOfSpheres.setMatrixAt(i, matrix);
    sphereOutOfSpheres.setColorAt(i, new Color(0.5, 0.5, 0.5));
  }
  sphereOutOfSpheres.name = "sphereOutOfSpheres";

  // Initialization of helpers
  const target = new Vector3();
  // const [target, setTarget] = useState(new Vector3());

  const planeSettings = {
    originPlane: new Vector3(),
    planeIntersect: new Vector3(),
    planeDistance: plane_distance,
  };
  //  this is a helper plane to get the intersection with the mouse and the plane
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  console.log("plane distance", plane_distance);
  // position of the mouse
  const pointer = new Vector2(0, -1);
  const pointerCenter = new Object3D();
  pointerCenter.name = "pointerCenter";

  // Helpers to deform the sphere
  // required to make the plane face camera

  //  Helper Sphere and it's bounding Box
  const helperBoxGeom = new BoxGeometry();
  const helperBox = new Mesh(
    helperBoxGeom,
    new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
  );
  helperBox.name = "helperBox";

  //Helpers to deform the sphere

  camera.getWorldDirection(target);
  if (!scene.getObjectByName("helperPlane")) {
    // console.log("target", target);
    const helperPlane = new PlaneHelper(plane, 10, 0xffff00);
    helperPlane.name = "helperPlane";
    scene.add(helperPlane);
  }

  if (!scene.getObjectByName("sphereOutOfSpheres"))
    scene.add(sphereOutOfSpheres);
  if (!scene.getObjectByName("pointerCenter")) scene.add(pointerCenter);
  if (!scene.getObjectByName("helperBox")) scene.add(helperBox);
  scene.updateMatrixWorld();
  console.log(scene);

  let timeSinceReset = 0;
  let prevPosition = new Vector3();
  const positionChangeThreshold = 0.1;
  useFrame((state) => {
    const { clock, mouse } = state;

    if (woblyMaterialRef && woblyMaterialRef.current) {
      // console.log("woblyMaterialRef", woblyMaterialRef);
      // currentTime = clock.getElapsedTime();
      woblyMaterialRef.current.time = clock.getElapsedTime();
    }

    camera.getWorldDirection(target);
    // camera.getWorldDirection(new Vector3(0, 0, 0));
    // console.log(planeSettings.planeDistance, "camera position");
    planeSettings.originPlane
      .copy(camera.position)
      .addScaledVector(target, plane_distance);
    // console.log(planeSettings.originPlane.x);
    plane.setFromNormalAndCoplanarPoint(
      target.negate(),
      // planeSettings.originPlane
      new Vector3(
        planeSettings.originPlane.x,
        planeSettings.originPlane.y,
        planeSettings.originPlane.z
      )
    );
    pointer.x = mouse.x;
    pointer.y = mouse.y;
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, planeSettings.planeIntersect);
    const distancePointerCenter = planeSettings.planeIntersect.distanceTo(
      pointerCenter.position
    );
    // console.log("distance", distancePointerCenter);
    pointerCenter.position.lerp(
      planeSettings.planeIntersect,
      Math.sign(distancePointerCenter) * 1.0
    );

    if (scene.getObjectByName("helperPlane")) {
      const helperPlaneTemp = scene.getObjectByName("helperPlane");
      (helperPlaneTemp as PlaneHelper).plane.copy(plane);
    }

    timeSinceReset += clock.getDelta();
    if (scene.getObjectByName("helperBox")) {
      const helperBoxTemp = scene.getObjectByName("helperBox");
      helperBoxTemp?.position.copy(pointerCenter.position);
      if (helperBoxTemp) {
        uniforms2.u_pointPosition.value = new Vector3().fromArray(
          helperBoxTemp?.position.toArray()
        );
        if (timeSinceReset >= 1000000) {
          timeSinceReset = 1000000;
        }
        // else {
        //   const positionChanged =
        //     prevPosition.distanceTo(helperBoxTemp?.position) >
        //     positionChangeThreshold;
        //   // console.log(positionChanged);
        //   positionChanged
        //     ? (timeSinceReset = 0)
        //     : (timeSinceReset += clock.getDelta());
        // }
        // prevPosition.copy(helperBoxTemp?.position);
        // console.log(timeSinceReset);
      }
      const spheres3 = scene.getObjectByName(
        "sphereOutOfSpheres"
      ) as InstancedMesh;
      if (spheres3) {
        const extendedMaterial = spheres3.material as ExpandInstancesMaterial;
        extendedMaterial.uniforms.u_time.value = timeSinceReset;
        extendedMaterial.uniforms.u_pointPosition.value =
          helperBoxTemp?.position.toArray();
      }
    }
  });
  return (
    <>
      <ambientLight intensity={0.55} color={"#ffffff"} />
      <directionalLight
        position={[0, 3, 0]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <mesh
        castShadow
        position={position}
        onPointerOver={(e) => logRayCaster(e)}
      >
        <icosahedronGeometry
          name="SphereParent"
          args={[2 * scale, 100]}

          // onClick={(e) => logRayCaster(e)}
        ></icosahedronGeometry>
        <LayerMaterial lighting="lambert">
          <WoblyMaterialLayerComponent ref={woblyMaterialRef} />
          <Colors color={"#FF8001"} />
          <Depth
            colorB="#ff0000"
            colorA="#00aaff"
            alpha={0.5}
            mode="multiply"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
          <Fresnel color={"#FF8001"} alpha={0.95} intensity={1.0} power={1} />
        </LayerMaterial>
      </mesh> */}

      {/* <BoxDrei args={[1, 1]} position={[-1, 3, 0]} castShadow>
        <meshStandardMaterial color="#FF8001" side={2} />
      </BoxDrei> */}

      <PlaneDrei
        args={[50, 50]}
        position={[0, -15.1, 0]}
        scale={1.4}
        rotation={[-(2 / 4) * Math.PI, 0, 0]}
        receiveShadow
        // castShadow
      >
        <meshStandardMaterial color="#353540" side={2} />
      </PlaneDrei>
    </>
  );
}
