# Falling Sand Physics Toy

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a fast 60fps cellular automata falling-sand physics toy titled [BRAND] ([TAGLINE]) with a crisp light studio toolbar framing a vivid dark slate simulation canvas (#15171C). Support all 16 interacting materials using typed arrays: Sand, Water, Fire, Smoke, Plant, Lava, Ice, Acid, Oil, Wood, Steam, Stone, Seed, Cloner, Wind, and Eraser. Implement authentic elemental reactions (Water puts out Fire into Steam; Lava + Water creates Stone + Steam; Fire ignites Wood, Oil, and Plants; Seeds grow into Plants when watered; Acid corrodes non-Stone/Cloner elements; Ice melts into Water near heat; Cloner duplicates adjacent materials; Wind blows airborne grains). Include brush size (1–12), brush shape (Circle, Square, Spray), Play/Pause, Single-Step (+1 tick), live Temperature Heatmap toggle, three starter scenes (Volcano, Hourglass, Rain Garden — opening on [DEFAULT_SCENE] ALREADY erupting in lively motion on frame one!), compact URL hash scene sharing, and responsive mouse & touch painting.

- Audience: Curious browsers, physics-toy lovers, students, and creative coders who enjoy emergent cellular alchemy.
- Goal: Hook players within one second with a live erupting Volcano (or starter scene) on frame one, then let them mix all 16 elements smoothly at 60fps on desktop and 390px mobile.
- Tone: Tactile science-lab minimalism—crisp light instrument bar contrasting vivid glowing elemental pixels.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600) in src/main.tsx.
  - Author the 60fps Uint8Array + Int16Array temperature cellular automata simulation, all 16 elemental reactions, 3 handcrafted starter scenes (Volcano, Hourglass, Rain Garden), thermal heatmap renderer, and compact RLE URL hash serializer in src/sim/sandEngine.ts.
  - Keep material definitions, reaction guide tips, and customizable brand copy in src/data/materials.ts.
  - Pre-simulate 28 ticks synchronously on initial load so frame one is already bursting with falling lava, steam plumes, water cascades, and lush greenery.

## Variables
- [BRAND] — App Title (default: "GrainLab"). Playful science-sandbox brand name
- [TAGLINE] — Short Subtitle (default: "16-element cellular alchemy sandbox"). Concise descriptor shown in top light toolbar
- [DEFAULT_SCENE] — Initial Starter Scene (default: "volcano"). One of volcano, hourglass, or rain-garden
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/falling-sand-physics-toy in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Dark Slate Canvas `#15171C` — High-contrast cellular simulation chamber
- Studio Porcelain `#F6F7F9` — Crisp light page shell and toolbar surface
- Lab Ink `#15171C` — High-contrast typography and active tool outlines
- Molten Lava `#FF4D1A` — Vivid lava, fire, and thermal highlights
- Alpine Water `#3B9EFF` — Fluid water streams and hydro reactions
- Neon Acid `#B8FF2E` — Corrosive acid pixels and active reaction badges

### Typography
- Brand Wordmark & Scene Titles: Space Grotesk (OFL), weights 600/700
- Material Labels & Tooltips: Inter (OFL), weights 400/500/600
- Particle Counter, FPS & Brush Size: JetBrains Mono (OFL), weights 500/600

### Layout & motion
- Spacing: Crisp light top instrument bar, full-width framed dark slate simulation canvas in the center of the viewport, and ergonomic 16-material palette + brush/scene controls fitting cleanly on 1440×900 and 390×844.
- Radius: 14px dark simulation frame with crisp 1px slate border; tactile pill swatches for all 16 elements.
- Motion: Continuous 60fps emergent particle physics already flowing on frame one.
- Motion: Smooth interpolated stroke painting between pointer events so fast strokes draw solid streams without gaps.
- Motion: Instant Temperature Heatmap color-ramp visualization toggle showing molten hot spots vs icy blues.
- Motion: Under prefers-reduced-motion, slow simulation step rate gently while keeping Single-Step and full painting responsive.
- Imagery: 100% live pixel-crisp HTML5 Canvas ImageData cellular automata art with vibrant per-grain color micro-variation.

## Pages & Sections
### [BRAND] · Falling Sand Physics Toy (`#/sandbox`)
1. **Crisp Light Instrument Header & Dark Slate Simulation Chamber** — Light porcelain header displaying [BRAND], [TAGLINE], Play/Pause toggle, Single-Step (+1) button, Thermal View toggle, Starter Scene switcher (`Volcano`, `Hourglass`, `Rain Garden`), Clear button, and Share URL copy button. Directly below sits the dark slate (`#15171C`) interactive simulation canvas already alive on frame one with the active starter scene erupting, cascading, and steaming—plus a compact live status bar showing active material reaction tip, live grain count, and brush preview.
   Layout: Centered 1280px studio layout fitting header + large dark canvas + full 16-element palette cleanly above the fold on desktop, and responsive stacked canvas + compact 4×4 material grid on 390×844 mobile.
   Motion: 60fps typed-array cellular automata with fluid touch & mouse line interpolation.
2. **16-Element Swatch Dock & Brush Controls** — Crisp light bottom deck containing all 16 color-coded element buttons (`Sand`, `Water`, `Fire`, `Smoke`, `Plant`, `Lava`, `Ice`, `Acid`, `Oil`, `Wood`, `Steam`, `Stone`, `Seed`, `Cloner`, `Wind`, `Eraser`) alongside Brush Size slider (`1–12`), Brush Shape pills (`Circle`, `Square`, `Spray`), and a concise Chemical Reactions legend. Subtle single-line footer with optional [CREDIT].
   Layout: Clean 8-col desktop / 4-col mobile swatch grid with zero horizontal overflow.
   Motion: Active element highlights with bold ink outline and color dot.

## Assets


## Don'ts
- Never start with an empty black screen—load and pre-tick the lively starter scene synchronously before first paint.
- Never mention or copy any existing falling-sand game name or source code.
- Never show calendar dates or 4-digit years anywhere in the UI.
- Never allow horizontal overflow on 390×844 mobile or clip elements with clip-path.
- Never drop frames—use typed arrays (Uint8Array / Int16Array) and direct ImageData pixel writes.

---
— Prompt by VibeFather · https://vibefather.ai/t/falling-sand-physics-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
