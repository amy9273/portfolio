# Unit 03 Specification — 3D Violet Orbital Core & WebGL Engine

## 1. Goal
Implement the signature NEBULA 3D element: a procedural Three.js WebGL canvas featuring a translucent glass core, glowing lavender inner sphere, counter-rotating metallic orbital rings, and mouse parallax damping, with an automatic zero-overhead mobile CSS/SVG fallback.

---

## 2. Requirements & Deliverables

1. **Three.js WebGL Orbital Core (`src/components/visuals/OrbitalCore.tsx`)**:
   - Client-side dynamic canvas rendering at 60 FPS.
   - Central inner sphere with lavender emissive glow (`#A77BEB`).
   - Outer translucent sphere with physical glass refraction properties (`MeshPhysicalMaterial`).
   - 2-3 concentric orbital rings (`TorusGeometry`) with metallic finishes (`#D8C5FF` and `#7041A6`).
   - Ambient particle constellation drifting around the core.
   - Mouse parallax damping: Smooth `lerp` toward pointer position (limited to $\le 8^\circ$).
   - Performance optimizations:
     - `IntersectionObserver` stops `requestAnimationFrame` when out of viewport.
     - `document.visibilityState` pauses rendering when tab is inactive.
     - Complete WebGL resource disposal on unmount (geometries, materials, renderer).

2. **Zero-Overhead Fallback (`src/components/visuals/OrbitalFallback.tsx`)**:
   - Rendered on mobile viewports (< 768px) or when `prefers-reduced-motion` is active.
   - High-fidelity vector SVG with concentric rotating rings, glowing core, and A/B monogram.
   - Zero WebGL overhead, zero jank on lower-end mobile devices.

3. **Hero Integration (`src/components/sections/Hero.tsx`)**:
   - Replace the static placeholder with `<OrbitalCore />`.
   - Maintain explicit aspect ratio (`aspect-square`) to guarantee 0 Cumulative Layout Shift (CLS).

---

## 3. Verification Criteria
- `npm run typecheck` and `npm run build` pass with 0 errors.
- Canvas renders smoothly at 60 FPS on desktop browsers.
- No WebGL memory leaks on unmount / navigation.
- Graceful fallback on mobile or WebGL failure.
