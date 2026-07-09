import { cfg } from 'illutions';

// Set how camera rotates, pans and zooms around a target
cfg.orbitCtrls.enable = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.autoRotateSpeed = 0.1;
cfg.orbitCtrls.maxDistance = 2;
cfg.orbitCtrls.minDistance = 0.75;
cfg.orbitCtrls.rotateSpeed = 0.5
cfg.orbitCtrls.enableDamping = true
cfg.orbitCtrls.dampingFactor = 0.025
cfg.orbitCtrls.zoomSpeed = 0.25;
cfg.orbitCtrls.enablePan = false;

// Load GLTF/GLB model
cfg.model.file = 'scene/materials.glb';

// Set scene environment map
cfg.envCtrls.enable = true;
cfg.envCtrls.map = 'scene/piazza_san_marco_4k.exr';
cfg.envCtrls.dataType = 'float';
cfg.envCtrls.environmentIntensity = 0.9
cfg.envCtrls.backgroundIntensity = 0.9;
cfg.envCtrls.rotation.y = 172

cfg.post.aa.mode = 'fxaa';

cfg.post.ssao.enable = true;

// Set rendering backend
cfg.render.api = 'auto';
cfg.render.webgl.parameters.antialias = true;

export { cfg };
