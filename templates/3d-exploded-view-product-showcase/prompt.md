# 3D Exploded View Product Showcase

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page interactive product showcase for [BRAND]'s [PRODUCT] ([MODEL_ID]), aimed at [AUDIENCE]. The default is an original single-stage helical gearbox modeled entirely with Three.js primitives and custom BufferGeometry. A large assembled view leads into a five-step scroll-driven explosion; visitors can orbit, select labeled parts, make the housing transparent, apply a section cut, and play a six-second assembly sequence. When variable values change, keep the layout, interaction model, and visual system but redesign the procedural assembly, part data, engineering captions, specifications, and applications to fit the new [PRODUCT].

- Audience: [AUDIENCE], plus technical marketers, product designers, educators, and buyers who need to understand a mechanism before evaluating its specifications. The default copy speaks to mechanical design engineers without assuming access to CAD tools.
- Goal: Let visitors understand the product's construction, inspect every major component, compare its operating specifications, and replay the assembly order. The primary action, [PRIMARY_CTA], moves directly into the interactive assembly; a later action copies a clean specification summary to the clipboard without sending data anywhere.
- Tone: Precise, calm, engineered, and legible. Use short declarative copy and concrete sample engineering data. The page should feel like a carefully art-directed technical exhibit, not a science-fiction cockpit, gaming interface, or generic SaaS landing page.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Vanilla CSS
- Libraries: three (MIT), lucide-react (ISC), @fontsource/barlow-condensed (OFL), @fontsource/inter (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite with React and TypeScript. Set base: './' and build.sourcemap: false in vite.config.ts; the production command must emit only static files to dist/. Do not substitute another framework, renderer, styling system, or state library.
  - Install and import three, lucide-react, and the three listed Fontsource packages locally. Import OrbitControls and RoomEnvironment from three/examples/jsm; use PMREMGenerator with RoomEnvironment for metallic reflections instead of downloading an HDRI.
  - Create src/content.ts as the single source for resolved variable values, navigation labels, headlines, assembly steps, part names, exploded offsets, part specifications, engineering notes, applications, and footer copy. Include the default [BRAND], [PRODUCT], [AUDIENCE], [PRIMARY_CTA], and [MODEL_ID] values there, rewrite all product-specific content when those values change, and never leave square-bracket variable tokens visible in the rendered site.
  - Create separate scene modules for geometry, materials, camera, labels, clipping, selection, and playback. Build the default gearbox from original box, cylinder, torus, shaft, bearing, seal, and custom helical-tooth BufferGeometry parts; use a stylized involute-like tooth profile with 18 teeth on the pinion and 63 on the gear. Do not load a model or reuse a commercial gearbox design.
  - Use MeshStandardMaterial for machined steel and aluminum, a neutral procedural environment, one broad key directional light, a cooler rim light, and a soft code-generated contact-shadow plane. Enable renderer.localClippingEnabled, antialiasing, and alpha; cap pixel ratio at 1.75 on desktop and 1.4 on mobile. Pause requestAnimationFrame work while a scene is outside the viewport.
  - Keep one shared assembly state in React: scrollProgress, selectedPart, housingTransparent, sectionCut, playbackProgress, playbackStatus, and controlMode. Derive every mesh position and label from the same keyframe data so scrolling, selection, and playback cannot disagree. Use direct interpolation rather than a physics engine or an additional animation dependency.
  - Create a reusable GearboxScene component for the hero and the pinned assembly stage. Share geometry and material definitions, render only the visible instance, and provide a static inline SVG technical drawing as a no-WebGL fallback with the part list and specifications still usable.
  - Use Lucide icons only for Rotate3D, Layers3, Slice, Play, Pause, RotateCcw, X, ChevronRight, Copy, Check, Menu, and ArrowDown. Give every icon button an accessible text label and use 44px minimum touch targets.
  - Centralize responsive rules and keyframes in src/styles.css. Support 1440×900 and 390×844 without horizontal overflow or console errors, include keyboard focus styles and a print stylesheet for the specification table, and implement prefers-reduced-motion by removing idle movement and automatic playback while retaining instant state changes and manual controls.

## Variables
- [BRAND] — Brand (default: "Korven Industrial"). Invented manufacturer or product studio name used in the header, hero, specification summary, and footer.
- [PRODUCT] — Product (default: "Helical Gearbox"). A mechanical assembly that can be modeled from code and separated into 6–10 meaningful components.
- [AUDIENCE] — Audience (default: "mechanical design engineers"). Lowercase descriptive audience phrase that fits naturally after for in the hero copy.
- [PRIMARY_CTA] — Primary action (default: "Explore the assembly"). Short button label that scrolls to the assembly section and remains suitable for the selected product.
- [MODEL_ID] — Model identifier (default: "HX-42"). Short invented alphanumeric identifier used in technical labels and the copied specification summary.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/3d-exploded-view-product-showcase in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by 3D Exploded View Product Showcase — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-exploded-view-product-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
