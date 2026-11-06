import { setComps } from 'illutions';
import { Cam } from './scene/cam';

// Register customized asset components
export const comps = setComps({
  scene: {
    cam: {
      class: Cam,
      params: { name: 'Camera', gltf: true }
    },
  },
});
