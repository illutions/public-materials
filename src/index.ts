import { App } from 'illutions';
import { cfg } from './cfg';
import { Camera } from './objs/camera';

const classes = {
  objs3D: {
    Camera,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.run(cfg, classes);
}); 