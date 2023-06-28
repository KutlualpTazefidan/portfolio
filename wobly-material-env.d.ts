import { WoblyMaterialLayer } from "./src/components/CanvasContainer/SphereOfTime/CustomMaterialLayer/WoblyMaterialLayerComponent";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      woblyMaterialLayer_: React.PropsWithChildren<
        JSX.IntrinsicElements["mesh"] & { ref?: React.Ref<WoblyMaterialLayer> }
      >;
    }
  }
}
