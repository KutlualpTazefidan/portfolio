import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useGraph, BufferGeometryProps } from "@react-three/fiber";
import { Mesh } from "three";

export function Import3dObject(path: string) {
  // console.log("path", path);
  const { scene, materials, animations } = useLoader(GLTFLoader, path);
  let geometry: any;
  // let material: any;
  scene.traverse(function (object) {
    if (object instanceof Mesh) {
      geometry = object.geometry;
      // material = object.material;
    }
  });
  // console.log(materials, "materials");
  return { geometry, materials, animations };
}
