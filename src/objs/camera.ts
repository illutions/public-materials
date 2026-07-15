import { Cam3D } from 'illutions';

const CAMERA_LOCKED_OBJECTS = ['Sphere1', 'Sphere2', 'Sphere3', 'Sphere4', 'Sphere5'];

export class Camera extends Cam3D {
  protected override onReady(): void {
    for (const name of CAMERA_LOCKED_OBJECTS) {
      const obj = this.scene.getObjectByName(name);
      if (!obj) continue;
      this.obj.attach(obj);
    }
  }
}
