import { Abstract } from "lamina/vanilla";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";
import { LayerProps } from "lamina/types";
import { extend } from "@react-three/fiber";
import { forwardRef, Ref } from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";

interface WoblyMaterialLayerProps extends LayerProps {
  time?: number;
  frequency?: number;
  amplitude?: number;
  color?: string;
}

class WoblyMaterialLayer extends Abstract {
  // Define stuff as static properties!

  // Uniforms: Must begin with prefix "u_".
  // Assign them their default value.
  // Any unifroms here will automatically be set as properties on the class as setters and getters.
  // There setters and getters will update the underlying unifrom.
  static u_time = 0.0;
  static u_frequency = 10.0;
  static u_amplitude = 0.1;
  static u_color = "#F7B528";

  // Define your fragment shader just like you already do!
  // Only difference is, you must return the final color of this layer
  static fragmentShader = fragmentShader;

  // Optionally Define a vertex shader!
  // Same rules as fragment shaders, except no blend modes.
  // Return a non-projected vec3 position.
  static vertexShader = vertexShader;

  constructor(props?: WoblyMaterialLayerProps) {
    // You MUST call 'super' with the current constructor as the first argument.
    // Second argument is optional and provides non-uniform parameters like blend mode, name and visibility.
    super(WoblyMaterialLayer, {
      name: "WoblyMaterialLayer",
      ...props,
    });
  }
}

extend({ WoblyMaterialLayer_: WoblyMaterialLayer });

const WoblyMaterialLayerComponent = forwardRef<
  Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>,
  WoblyMaterialLayerProps
>((props, ref) => {
  return (
    <woblyMaterialLayer_ ref={ref} args={[undefined, undefined]} {...props} />
  );
}) as React.ForwardRefExoticComponent<
  WoblyMaterialLayerProps & React.RefAttributes<WoblyMaterialLayer>
>;

WoblyMaterialLayerComponent.displayName = "WoblyMaterialLayer";

export default WoblyMaterialLayerComponent;
