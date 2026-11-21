# Particle Morph 3D Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a deep-space 3D product landing page for [BRAND]'s flagship spatial-audio headset [PRODUCT_NAME] ([PRICE], [BATTERY_SPEC]). A fixed Three.js WebGL stage renders tens of thousands of custom-shader GPU particles (~24,000 desktop / ~9,000 mobile) that morph seamlessly across five code-sampled 3D geometries aligned to scroll sections: Scattered Nebula (Hero), Spatial Headset (Features), Acoustic Sound Wave (Specs), Globe of Listeners (Reviews), and Studio Emblem (Pricing, FAQ & Pre-Order). Particles gently repel away from the pointer, display soft depth-of-field bokeh and aurora bloom, and change color live when visitors select editions in the Pricing color picker. Reduced motion displays crisp static shapes per section without continuous morph animation.

- Audience: Audiophiles, spatial audio creators, industrial design enthusiasts, and hardware launch teams showcasing flagship wearables.
- Goal: Captivate visitors on frame one with a luminous, immediately recognizable 3D aurora particle cloud and clear product hero, then guide them through acoustic engineering, reviews, colorway customization, and local pre-order.
- Tone: Precision acoustic engineering meets atmospheric serenity—calm, sculptural, and tactile.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/syne (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/syne (700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Author procedural 3D point-cloud shape samplers completely in code inside src/three/particleShapes.ts generating exact matched vertex arrays for 5 silhouettes: nebula, headset (arched headband + twin acoustic earcups + ear cushions + spatial halo), soundwave (3D standing harmonic surface), globe (latitude/longitude acoustic listener sphere + orbiting nodes), and emblem (crystalline resonance ring mark).
  - Build the custom Three.js ShaderMaterial stage in src/three/ParticleMorphStage.tsx with preserveDrawingBuffer: true, adaptive particle count (24000 desktop / 9000 mobile), smooth GLSL morphing between active shape pairs, pointer ray-plane repulsion, depth-of-field sprite blur + additive bloom feel, scroll-linked section color interpolation, live Pricing colorway override, synchronous first-frame render, and static reduced-motion shape switching.
  - Keep all copy, specs, reviews, colorways, FAQs, and footer links in src/content.ts.

## Variables
- [BRAND] — Audio Brand Name (default: "Auralis"). Fictional spatial-audio hardware brand
- [PRODUCT_NAME] — Headset Model Name (default: "Auralis One"). Flagship spatial-audio headset name
- [PRICE] — Starting Price (default: "$389"). Standard edition pre-order price
- [BATTERY_SPEC] — Battery Headline (default: "48-Hour Spatial Battery"). Signature battery runtime callout
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/particle-morph-3d-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Deep Space `#07071A` — Primary full-viewport cosmic background
- Obsidian Glass `#10122D` — Translucent editorial cards, spec tables, FAQ accordion, and pre-order drawer
- Aurora Teal `#4EF2C3` — Primary glowing particle color, active morph indicators, and primary CTAs
- Ion Violet `#8C5CFF` — Secondary particle gradient, acoustic wave highlights, and active swatches
- Warm White `#F6F3EC` — High-contrast display typography and crisp starlight particle cores

### Typography
- Display Headlines & Product Wordmark: Syne (OFL), weights 700/800
- Body Copy, Reviews & Controls: Inter (OFL), weights 400/500/600
- Acoustic Telemetry & Specs: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Fixed full-viewport 3D particle canvas behind a 1240px scrolling editorial column; 64px sticky frosted header; generous 96px section rhythm with clear breathing room so each 3D particle silhouette shines unobstructed.
- Radius: 14px for frosted acoustic glass panels and pre-order cards; full-pill buttons and shape chapter indicators.
- Motion: Continuous scroll-driven GLSL morphing across five 3D shapes: 01 Nebula → 02 Spatial Headset → 03 Sound Wave → 04 Listener Globe → 05 Brand Emblem.
- Motion: Smooth pointer/touch particle repulsion field pushing nearby particles radially with elastic spring return.
- Motion: Live interactive morph jump pills in a compact bottom-right chapter dock letting visitors either scroll naturally or preview any of the 5 shapes directly.
- Motion: Live Pricing colorway selector (Aurora Teal, Ion Violet, Solar Amber, Arctic Pearl) immediately recolors the 3D GPU particle cloud.
- Motion: Under prefers-reduced-motion, lock each section to its clean static target shape with zero continuous morph jitter.
- Imagery: Real-time Three.js custom GLSL GPU particle cloud sampled entirely from procedural code-built 3D geometry—no external model files or stock photos.

## Pages & Sections
### [PRODUCT_NAME] by [BRAND] · Spatial Audio Headset (`#/auralis`)
1. **Sticky Header, Shape Dock & Nebula Hero** — Sticky deep-space glass header with [BRAND] geometric wave emblem, jump links (Features, Specs, Reviews, Pricing, FAQ), live active-shape indicator pill (`01 · Nebula`), and 'Reserve [PRODUCT_NAME]' CTA. Full-screen hero sits cleanly over the glowing Nebula-to-Headset 3D particle cloud (rendered brightly on frame one): display headline ('Sound sculpted in three dimensions.'), concise pitch introducing [PRODUCT_NAME] and [BATTERY_SPEC], two CTAs ('Reserve [PRICE]', 'Explore Acoustics'), and three quick acoustic badges (`50mm Planar Drivers`, `360° Head Tracking`, `0.8ms Low Latency`). Compact floating bottom-right Shape Preview dock lets users jump between the 5 3D morph stages anytime.
   Layout: Asymmetric 2-column hero over the fixed full-viewport particle canvas (copy left, unobstructed 3D particle sculpture right); stacks cleanly on 390px mobile.
   Motion: Particles breathe slowly in Nebula formation and gently repel from the cursor.
2. **Acoustic Features (Spatial Headset Morph)** — Particles converge into the sculpted 3D [PRODUCT_NAME] over-ear headset silhouette while four glass feature cards highlight Dual-Chamber Planar Drivers, Adaptive Spatial Anchoring, Whisper-Seal ANC (-46 dB), and Featherweight Magnesium Yoke.
   Layout: Left/right editorial split leaving clear viewport breathing room for the rotating 3D headset particle cloud; 1-column stack on mobile.
   Motion: Scroll progress morphs Nebula into the sculpted 3D Spatial Headset.
3. **Technical Specifications (Acoustic Sound Wave Morph)** — Particles unfold into an undulating 3D harmonic sound-wave ribbon alongside a structured acoustic spec ledger: Driver Topology, Frequency Response (`4 Hz – 48 kHz`), Spatial Engine, Battery Runtime ([BATTERY_SPEC]), Wireless Codecs, Weight (`268 g`), and Materials.
   Layout: 2-column responsive spec matrix card with monospace readouts.
   Motion: Particles ripple in standing harmonic waves driven by shader time.
4. **Listener Reviews (Globe of Listeners Morph)** — Particles assemble into a luminous 3D Globe of Listeners with orbiting city nodes while 3 fictional mastering engineers, film composers, and spatial-audio directors share concise impressions and listening-room scores.
   Layout: 3-column review card row on desktop; single column on mobile.
   Motion: 3D particle sphere rotates gently with pulsing aurora listener beacons.
5. **Pricing, Live Particle Color Picker, FAQ & Local Pre-Order** — Particles resolve into the crystalline [BRAND] resonance emblem. Two edition cards (Standard Edition at [PRICE] and Studio Bundle with Balanced DAC Dock) sit beside an interactive 4-finish Color Picker (`Aurora Teal`, `Ion Violet`, `Solar Amber`, `Arctic Pearl`) that recolors the 3D GPU particle cloud live in real time. Includes a 5-question interactive FAQ accordion and a local Demo Pre-Order reservation form saved in localStorage with an explicit 'Local demo reservation — no real payment' notice. Clean footer with optional [CREDIT] link.
   Layout: 2-column Pricing + Colorway panel above FAQ + Pre-Order form; single-column stacked on 390px mobile.
   Motion: Selecting any colorway smoothly interpolates the 3D shader primary/secondary particle uniforms.

## Assets
- icon: Install lucide-react (ISC) for acoustic metrics, colorway selector, FAQ accordions, shape dock, and pre-order controls.
- font: Install @fontsource/syne, @fontsource/inter, and @fontsource/jetbrains-mono (OFL-1.1) and import directly in src/main.tsx.
- image: Generate all 5 3D particle morph shapes procedurally in Three.js code inside src/three/particleShapes.ts using custom GLSL shaders; zero external 3D models or bitmaps.

## Don'ts
- No shaders, geometry assets, or code copied from Three.js Journey or any commercial audio brand.
- No external .glb/.gltf model files, CDN scripts/fonts, or real payment/checkout backends.
- No calendar dates or four-digit years anywhere on the rendered page.
- No empty black first frame—render vibrant aurora particles synchronously on frame one with preserveDrawingBuffer: true.
- No clip-path hiding sections before scroll.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No console errors or horizontal overflow at 1440x900 desktop or 390x844 mobile.

---
Inspired by Particle Morph 3D Product Showcase by @bruno_simon — https://threejs-journey.com/
— Prompt by VibeFather · https://vibefather.ai/t/particle-morph-3d-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
