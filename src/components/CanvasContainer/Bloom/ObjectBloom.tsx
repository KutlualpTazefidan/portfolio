// import {EffectComposer,RenderPass,UnrealBloomPass,OutputPass} from "three"
import { Vector2, ReinhardToneMapping } from "three";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
} from "postprocessing";

import { useThree } from "@react-three/fiber";

export default function ObjectBloom() {
  const { raycaster, scene, camera, viewport, gl } = useThree();

  // Add bloom
  const params = {
    threshold: 0,
    strength: 1.5,
    radius: 0,
    exposure: 1,
  };
  const bloomPass = new UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = params.threshold;
  bloomPass.strength = params.strength;
  bloomPass.radius = params.radius;

  //   It's for tone mapping
  // const outputPass = new OutputPass( ReinhardToneMapping );
  // outputPass.toneMappingExposure = Math.pow( 2.0, 4.0 );

  // Add composer
  const renderScene = new RenderPass(scene, camera);
  const composer = new EffectComposer(gl);
  composer.addPass(renderScene);
  // composer.addPass(bloomPass);
  // composer.addPass( outputPass );

  //

  return <></>;
}
