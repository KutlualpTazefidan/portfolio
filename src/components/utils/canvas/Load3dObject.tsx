import { Import3dObject } from "./Import3dObject";
interface Model3dProps {
  objectName: string;
  assetPath: string;
  scale: number;
  position?: [number, number, number];
}

export default function Load3dObject({
  objectName,
  assetPath,
  scale,
  position,
}: Model3dProps) {
  const { geometry, materials, animations } = Import3dObject(
    assetPath as string
  );

  return (
    <>
      {geometry ? (
        <mesh
          key={geometry.uuid}
          name={objectName}
          geometry={geometry}
          position={position}
          scale={scale}
          receiveShadow={true}
          castShadow={true}
          uuid={geometry.uuid}
        >
          <meshPhysicalMaterial attach="material" color="hotpink" />
        </mesh>
      ) : null}
    </>
  );
}
