# Black Hole Interactive Explainer

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive astrophysics explainer for [OBSERVATORY_NAME] showcasing rotating black hole specimen [OBJECT_NAME] ([MASS_LABEL], [DISTANCE_LABEL]). Frame 1 opens directly on a real-time GLSL ray-marched Three.js black hole rendered in deep cosmic black (#050508) with hot disk orange (#FF8A2A), incandescent gold (#FFD27A), and cool starlight blue (#9DB8FF). Visitors can orbit 360° around the gravitationally lensed accretion disk, toggle Doppler beaming, adjust inclination presets and plasma glow, and then scroll through six interactive chapters: (01) Event Horizon escape-velocity probe, (02) Photon Sphere curved light-ray impact-parameter lab, (03) Time Dilation Dual Clocks comparing distant observer vs infalling traveler clocks as radius r/rs approaches 1.01, (04) Tidal Spaghettification gradient simulator comparing stellar vs supermassive horizons, (05) Earth-sized VLBI Virtual Telescope linking 7 global radio dishes to sharpen a live synthetic shadow ring, and (06) Stellar-to-Supermassive cosmic size comparator. Clearly label all models as simplified educational physics and keep zero calendar dates or 4-digit years on the frontend.

- Audience: Curious readers, physics students, educators, and astronomy enthusiasts.
- Goal: Turn general relativity concepts—gravitational lensing, relativistic time dilation, tidal stretching, and Earth-scale interferometry—into immediate visual and tactile intuition.
- Tone: Awe-inspired scientific clarity—precise observatory instrumentation paired with lucid plain-English explanations.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Render the real-time ray-marched gravitational-lensing black hole in a full-viewport-width Three.js ShaderMaterial canvas (preserveDrawingBuffer: true) that renders frame 1 synchronously before RAF.
  - Keep all 6 interactive relativity chapters and data in src/data/blackHoleData.ts and modular interactive widgets in src/components/RelativityLabs.tsx.

## Variables
- [OBSERVATORY_NAME] — Publication Name (default: "Event Horizon Atlas"). Name of the interactive science publication
- [OBJECT_NAME] — Featured Specimen (default: "Aurelia-X1"). Catalog designation of the featured black hole
- [MASS_LABEL] — Featured Mass (default: "6.5 Billion Solar Masses"). Mass label displayed in hero telemetry
- [DISTANCE_LABEL] — Distance Readout (default: "55 Million Light-Years"). Distance label displayed in hero telemetry
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/black-hole-interactive-explainer in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Deep Space `#050508` — Primary background canvas
- Obsidian Instrument `#0E1019` — Lab cards and telemetry panels
- Hot Disk Orange `#FF8A2A` — Accretion plasma and primary interactive accent
- Incandescent Gold `#FFD27A` — Innermost stable orbit photon ring highlight
- Cool Starlight Blue `#9DB8FF` — Relativistic Doppler approach shift and data metrics

### Typography
- Display Title & Chapter Headings: Space Grotesk (OFL), weights 500/600/700
- Explanatory Prose: Inter (OFL), weights 400/500/600
- Equations, Clocks & Telemetry: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-bleed interactive ray-marched WebGL hero with docked glass HUD, followed by centered 1152px max-width alternating chapter sections with generous vertical rhythm.
- Radius: 16px precision obsidian instrument panels with 1px starlight-tinted borders.
- Motion: Continuous real-time ray-marched swirling accretion plasma and relativistic Doppler glow with 360° drag orbit.
- Motion: Live ticking dual clocks driven by gravitational time dilation sqrt(1 - rs/r).
- Motion: Smooth interactive sliders for light-ray impact parameter, infall tidal gradient, VLBI dish toggling, and cosmic mass scale.
- Motion: Respect prefers-reduced-motion by pausing auto-orbit rotation while keeping drag orbit and all lab sliders fully responsive.
- Imagery: 100% procedural GLSL fragment shader black hole, starfield, and code-drawn interactive SVG/Canvas physics instruments.

## Pages & Sections
### [OBSERVATORY_NAME] · Black Hole Interactive Explainer (`#/explainer`)
1. **Frame-1 Ray-Marched Black Hole Hero** — Immediate full-beauty gravitationally lensed black hole [OBJECT_NAME] ([MASS_LABEL], [DISTANCE_LABEL]) with glowing orange-gold accretion disk arching over and beneath the shadow, bright photon ring, subtle Doppler beaming, and starfield. Includes drag-to-orbit hint, preset camera angles (Lensed Overlook, Edge-On Disk, Polar View), Spin/Doppler toggle, Disk Glow slider, Auto-Orbit toggle, chapter jump nav, and a clear 'Simplified educational physics model' badge.
   Layout: Full-bleed dark cosmic hero stage (min-h-[680px] desktop, clean stacked HUD on 390px mobile) with zero splash delay.
   Motion: Real-time GLSL ray-marched geodesic bending and plasma turbulence.
2. **Six Interactive Relativity Chapters** — (01) Event Horizon escape-velocity probe showing escape speed crossing c at r = rs; (02) Photon Sphere & Lensing interactive impact-parameter ray bender; (03) Time-Dilation Dual Clocks with live distant vs traveler clocks and r/rs slider; (04) Tidal Forces & Spaghettification comparing 10 M☉ stellar vs 6.5B M☉ supermassive stretching; (05) Earth-Sized VLBI Virtual Telescope with 7 toggleable radio stations updating baseline coverage and live shadow sharpness; (06) Stellar-to-Supermassive Cosmic Scale comparator against recognizable solar-system landmarks.
   Layout: Asymmetric 12-column cards pairing concise plain-English astrophysics copy with tactile interactive SVG/Canvas lab instruments.
   Motion: Responsive real-time vector updates and live relativistic clock hands.

## Assets
- font: Install @fontsource/space-grotesk, @fontsource/inter, and @fontsource/jetbrains-mono via npm.

## Don'ts
- Never show a black empty first frame or loading gate before the ray-marched black hole appears.
- Never present simplified physics approximations without clearly labelling them as simplified educational models.
- Never include calendar dates or 4-digit years anywhere on the frontend.
- Never fetch external images or CDN fonts.

---
— Prompt by VibeFather · https://vibefather.ai/t/black-hole-interactive-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
