// Notes:
// makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active

import {
  OrbitControls,
  PerspectiveCamera,
  TransformControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
export default function Controls({
  orbitControlState,
}: {
  orbitControlState: boolean;
}) {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={24}
        far={200}
        position={[100, 0, 0]}
        // layers={selectedSceneIndex}
      />
      {orbitControlState ? (
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.7}
        />
      ) : null}
    </>
  );
}
