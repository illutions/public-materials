import { PerspCam3D } from 'illutions';
import type { MyApp } from '../index';

export class Cam extends PerspCam3D {
  declare public comps: MyApp['comps'];

  // Called once after the GLTF model has been loaded and traversed
  protected override onReady(): void {
    // Attach the spheres while preserving their current world transforms
    for (const sphere of [
      this.comps.scene.sphere1,
      this.comps.scene.sphere2,
      this.comps.scene.sphere3,
      this.comps.scene.sphere4,
      this.comps.scene.sphere5,
    ]) {
      this.obj.attach(sphere.obj);
    }
  }
}
