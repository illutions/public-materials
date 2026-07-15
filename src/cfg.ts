import { cfg } from 'illutions';

// Show helpers
cfg.gui.infoBox.enable = true;
cfg.gui.inspector.enable = true;

// Set how camera rotates, pans and zooms around a target
cfg.orbitCtrls.enable = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.autoRotateSpeed = 0.1;
cfg.orbitCtrls.rotateSpeed = 0.5
cfg.orbitCtrls.enableDamping = true
cfg.orbitCtrls.dampingFactor = 0.025
cfg.orbitCtrls.enableZoom = false;
cfg.orbitCtrls.enablePan = false;

// Load GLTF/GLB model
cfg.model.file = 'scene/materials.glb';
cfg.model.compress.mesh = 'draco'

// Set scene environment map
cfg.envCtrls.enable = true;
cfg.envCtrls.map = ['scene/piazza_san_marco_512.exr', 'scene/piazza_san_marco_4k.exr'];
cfg.envCtrls.dataType = 'float';
cfg.envCtrls.environmentIntensity = 0.9
cfg.envCtrls.backgroundIntensity = 0.9;
cfg.envCtrls.rotation.y = 172

// Set antialias
cfg.render.params.aa = true;

export { cfg };
