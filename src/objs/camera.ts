import { Object3D, Vector3 } from 'three';
import { Cam3D } from 'illutions';

export class Camera extends Cam3D {
  private readonly sphereObjects: Array<{
    name: string;
    obj: Object3D | null;
    cameraLocalOffset: Vector3;
    worldPosition: Vector3;
    localPosition: Vector3;
    offsetReady: boolean;
  }> = ['Sphere1', 'Sphere2', 'Sphere3', 'Sphere4', 'Sphere5'].map((name) => ({
    name,
    obj: null,
    cameraLocalOffset: new Vector3(),
    worldPosition: new Vector3(),
    localPosition: new Vector3(),
    offsetReady: false,
  }));

  protected override onUpdate(): void {
    this.obj.updateMatrixWorld(true);

    for (const sphere of this.sphereObjects) {
      if (!sphere.obj) {
        sphere.obj = this.scene.getObjectByName(sphere.name) ?? null;
      }

      if (!sphere.obj) continue;

      sphere.obj.updateMatrixWorld(true);

      if (!sphere.offsetReady) {
        sphere.obj.getWorldPosition(sphere.cameraLocalOffset);
        this.obj.worldToLocal(sphere.cameraLocalOffset);
        sphere.offsetReady = true;
      }

      sphere.worldPosition.copy(sphere.cameraLocalOffset);
      this.obj.localToWorld(sphere.worldPosition);

      if (sphere.obj.parent) {
        sphere.localPosition.copy(sphere.worldPosition);
        sphere.obj.parent.worldToLocal(sphere.localPosition);
        sphere.obj.position.copy(sphere.localPosition);
      } else {
        sphere.obj.position.copy(sphere.worldPosition);
      }
    }
  }
}
