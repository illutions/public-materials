import { Object3D, Vector3 } from 'three';
import { Cam3D } from 'illutions';

const CAMERA_LOCKED_OBJECTS = ['Sphere1', 'Sphere2', 'Sphere3', 'Sphere4', 'Sphere5'];

export class Camera extends Cam3D {
  private readonly cameraOffsets = new WeakMap<Object3D, Vector3>();
  private readonly worldPosition = new Vector3();
  private readonly localPosition = new Vector3();

  protected override onUpdate(): void {
    this.obj.updateMatrixWorld(true);

    // Keep each sphere at its initial offset from the active camera.
    for (const name of CAMERA_LOCKED_OBJECTS) {
      const obj = this.scene.getObjectByName(name);
      if (!obj) continue;

      obj.updateMatrixWorld(true);

      // Convert the saved camera-local offset back into world space.
      this.worldPosition.copy(this.getCameraOffset(obj));
      this.obj.localToWorld(this.worldPosition);

      // Write the world position back into the object's parent space.
      if (obj.parent) {
        this.localPosition.copy(this.worldPosition);
        obj.parent.worldToLocal(this.localPosition);
        obj.position.copy(this.localPosition);
      } else {
        obj.position.copy(this.worldPosition);
      }
    }
  }

  private getCameraOffset(obj: Object3D): Vector3 {
    let offset = this.cameraOffsets.get(obj);

    // Store the object's first world position as a camera-local offset.
    if (!offset) {
      offset = obj.getWorldPosition(new Vector3());
      this.obj.worldToLocal(offset);
      this.cameraOffsets.set(obj, offset);
    }

    return offset;
  }
}
