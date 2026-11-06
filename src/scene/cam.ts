import { PerspCam3D } from 'illutions';

// Keep these comparison spheres fixed in the camera view
const CAMERA_LOCKED_OBJECTS = ['Sphere1', 'Sphere2', 'Sphere3', 'Sphere4', 'Sphere5'];

export class Cam extends PerspCam3D {
  // Called once after the GLTF model has been loaded and traversed
  protected override onReady(): void {
    // Attach the spheres while preserving their current world transforms
    for (const name of CAMERA_LOCKED_OBJECTS) {
      const obj = this.scene.obj.getObjectByName(name);
      if (!obj) continue;
      this.obj.attach(obj);
    }
  }
}
