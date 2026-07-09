# Illutions Engine Materials Example

Build interactive browser-based 3D experiences with a compact,
configuration-driven TypeScript setup. This example presents a detailed
sculpture model with five material samples, realistic EXR environment lighting,
post-processing, and live runtime controls in just a few lines of Illutions
Engine configuration.

## Live demo

[![Illutions Engine Materials example](.github/assets/screenshot.png)](https://illutions.github.io/public-materials/)

**[Launch the interactive demo](https://illutions.github.io/public-materials/)**
and inspect the model, lighting, and material response.

## What this example demonstrates

- Direct GLTF/GLB model loading with a detailed public-domain sculpture asset
- Five camera-relative material samples for comparing surface response
- EXR environment lighting with float loading for high-dynamic-range reflections
- Antialiased WebGL rendering configured through TypeScript
- SSAO post-processing for grounded contact and depth cues
- Runtime controls for inspecting and tuning the experience
- A focused project structure that is easy to use as a starting point

## Why Illutions Engine

Illutions Engine brings the pieces needed for sophisticated browser-based 3D
applications into one configurable workflow:

- **Advanced post-processing**  
Add SSAO, SSR, FXAA and SMAA through configurable pipelines for WebGL and WebGPU.

- **Advanced animation control**  
Coordinate GLTF animation clips, GSAP transitions, camera paths and custom dolly-rig camera workflows.

- **XState-powered application logic**  
Model complex application flows as predictable and inspectable state machines with integrated XState 5 usage.

- **Resource-aware rendering**  
An intelligent, configurable FPS limiter avoids unnecessary frames and helps reduce CPU and GPU load.

- **WebGL and WebGPU rendering**  
Support established and next-generation browser rendering with automatic WebGPU selection and WebGL fallback.

- **Lean initial bundles**  
Optional controls, loaders, inspectors and effects are dynamically imported only when needed.

- **Optimized GLTF/GLB pipeline**  
Load assets with Draco or Meshopt mesh compression and WebP or KTX2 textures.

- **Built-in interaction and audio**  
Use pointer-based raycasting and distance-aware spatial audio.

- **Flexible environments**  
Load HDR, EXR and texture environments with configurable rotation, intensity and background controls.

- **Runtime insights and debugging**  
Inspect runtime properties, FPS, CPU and renderer statistics with detailed state, event and console reporting.

## Requirements

- Node.js and npm
- A browser with WebGL support

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application is served over HTTPS at:

```text
https://localhost:5173
```

The browser may display a warning because the development server uses a local
self-signed certificate.

## Type checking

```bash
npx tsc --noEmit
```

## Build

Create a production build:

```bash
npm run build
```

The generated files are written to `dist/`.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## License

The example code and project configuration are licensed under the
[Illutions Example Code License](LICENSE.md).

The illutions Engine and illutions-provided build tooling are proprietary
software and are licensed separately. Their complete licensing terms are
provided with the [illutions package on npm](https://www.npmjs.com/package/illutions).
Build permissions are determined by `license/license.json`.

Production builds include the applicable Engine and bundled dependency
licenses in `dist/licenses.md`.

## Deployment

The included GitHub Actions workflow automatically builds and deploys the
project to GitHub Pages on every push to the `main` branch. It can also be
started manually from the Actions tab.

In the repository settings under **Pages**, select **GitHub Actions** as the
deployment source. The workflow provides Vite with the GitHub Pages base path,
while local development continues to use the domain root `/`.

## Third-party assets

Third-party assets remain subject to their respective licenses. They are not
relicensed by this repository or by the illutions Engine license.

### Loewe

This example uses the [Loewe](https://sketchfab.com/3d-models/lowe-3396c1f61742469ea956b1320d22eb95)
model published by noe-3d.at.

The model is available under the Creative Commons CC0 1.0 Universal license.
The Sketchfab source page also marks the model as NoAI.

### Piazza San Marco

This example uses the Piazza San Marco HDRI from Poly Haven.

- **Authors:** Greg Zaal and Rico Cilliers
- **License:** Creative Commons CC0 1.0 Universal
- **License URL:** https://creativecommons.org/publicdomain/zero/1.0/
- **Source:** https://polyhaven.com/a/piazza_san_marco
- **Changes:** No changes made. The HDRI is used as the scene environment.

CC0 permits copying, modification, redistribution, and commercial use without
requiring attribution. The source is listed here for transparency and credit.

## Project structure

```text
src/       Application source code and Illutions configuration
public/    Models, environment maps, and layout assets
style/     Global application styles
license/   Illutions license data
```
