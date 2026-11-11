import { setComps, Mesh3D } from 'illutions';
import { Cam } from './scene/cam';

// Register customized asset components
export const comps = setComps({
  scene: {
    cam: {
      class: Cam,
      params: { name: 'Camera', gltf: true }
    },
    sphere1: { class: Mesh3D, params: { gltf: true } },
    sphere2: { class: Mesh3D, params: { gltf: true } },
    sphere3: { class: Mesh3D, params: { gltf: true } },
    sphere4: { class: Mesh3D, params: { gltf: true } },
    sphere5: { class: Mesh3D, params: { gltf: true } },
  },
});
