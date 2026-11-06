import { setCfg, degToRad } from 'illutions';

export const cfg = setCfg({
  // Display runtime information and editable settings
  gui: {
    infoBox: {
      enable: true,
    },
    inspector: {
      enable: true,
    },
  },

  // Load the Draco-compressed material showcase
  model: {
    file: ['scene/materials-low.glb', 'scene/materials-med.glb', 'scene/materials-high.glb'],
    compress: {
      mesh: 'draco',
    },
  },

  // Light the materials with selectable EXR environments
  envCtrls: {
    enable: true,
    map: ['scene/piazza_san_marco_512.exr', 'scene/piazza_san_marco_4k.exr'],
    dataType: 'float',
    environmentIntensity: 0.9,
    backgroundIntensity: 0.9,
    rotation: {
      y: degToRad(172),
    },
  },

  // Slowly orbit the camera without zooming or panning
  orbitCtrls: {
    enable: true,
    autoRotate: true,
    autoRotateSpeed: 0.1,
    rotateSpeed: 0.5,
    enableDamping: true,
    dampingFactor: 0.025,
    enableZoom: false,
    enablePan: false,
  },

  render: {
    // Configure renderer profiles
    profile: {
      webgpu: {
        msaa: 'render',
        aa: 'fxaa',
      },
      webgl: {
        msaa: 'render',
        aa: 'fxaa',
      },
    },
  },

  // Log all messages to the console.
  debug: {
    log: 'all',
  },
});
