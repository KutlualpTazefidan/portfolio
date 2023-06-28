import Load3dObject from "@/components/utils/canvas/Load3dObject";

export default function HallScene() {
  return (
    <>
      <Load3dObject
        objectName="SphereHolder"
        assetPath="@/components/CanvasContainer/Hall/Imports/SphereHolder.glb"
        scale={1.0}
        position={[0, 0, 0]}
      />
    </>
  );
}

// /home/pclinux/personal-projects/portfolio/src/component/CanvasContainer/Hall/Import/SphereHolder.glb
