# How a Mechanical Watch Works

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive editorial horology long-read titled [BRAND] exploring fictional mechanical movement [CALIBER_NAME] ([FREQUENCY_LABEL], [POWER_RESERVE]). Pair warm archival serif typography on paper (#F7F3EA) with a sticky interactive procedural Three.js 3D horology workbench built completely in code (zero external model files) using gunmetal (#2E3440), machined brass (#C99A3B), synthetic ruby pivot jewels (#B3123A), and thermally blued steel screws (#4C78A8). Walk readers through 8 clear chapters synced to 8 interactive 3D assemblies: (01) Spring & Pendulum, (02) Mainspring & Barrel, (03) The Gear Train with verifiable tooth counts and ratio math, (04) The Escapement (escape wheel & ruby-stone pallet fork with 0.1× slow-motion slider), (05) Balance Wheel & Breathing Hairspring, (06) Keyless Works (Wind vs Set Hands crown toggle), (07) Complications (31-step Date Ring & Automatic Rotor), and (08) Finale: Complete Assembled [CALIBER_NAME] movement you can wind up and watch tick. Every 3D figure supports 360° drag orbit, time/phase scrubbing, slow-motion speed, vertical Exploded View slider, and Cutaway Section toggle. Open on frame one displaying the complete ticking brass, ruby, and steel-blue 3D movement immediately.

- Audience: Curious readers, engineering students, and horology enthusiasts.
- Goal: Make intricate mechanical timekeeping immediately intuitive by letting readers orbit, slow down, explode, slice, and wind every mechanism right beside plain-English editorial prose.
- Tone: Warm archival monograph—lucid, tactile engineering storytelling with crisp museum-grade precision.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/newsreader (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/newsreader (400, 500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Use overflow-x: clip (never overflow-x: hidden) on body so the sticky 3D horology figure stays solidly pinned beside editorial chapters while scrolling.
  - Build all 8 procedural Three.js mechanical watch assemblies (toothed brass gears, coiled mainspring & breathing hairspring curves, ruby pivot jewels, blued screws, pallet fork, keyless crown & clutch, date ring & half-moon automatic rotor, and stacked complete movement) inside one shared WebGL renderer in src/components/WatchFigure3D.tsx with preserveDrawingBuffer: true.
  - Author all 8 plain-English horology chapters, gear-ratio breakdown tables, and customizable brand copy in src/data/watchChapters.ts.

## Variables
- [BRAND] — Publication Title (default: "Caliber Monograph"). Editorial horology explainer title
- [CALIBER_NAME] — Fictional Caliber Name (default: "Caliber V-08"). Invented mechanical watch movement designation
- [FREQUENCY_LABEL] — Beat Frequency Label (default: "28,800 vph (4 Hz)"). Balance wheel beat rate displayed in telemetry
- [POWER_RESERVE] — Power Reserve Label (default: "48-Hour Reserve"). Full mainspring power reserve specification
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/how-a-mechanical-watch-works in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Archival Paper `#F7F3EA` — Warm editorial monograph backdrop
- Gunmetal Plate `#2E3440` — Mainplates, primary ink, and precision frames
- Horology Brass `#C99A3B` — Machined gear wheels, balance rim, and barrel
- Synthetic Ruby `#B3123A` — Low-friction pivot jewels and pallet impulse stones
- Blued Steel `#4C78A8` — Heat-blued screws, hairspring, mainspring, and hands

### Typography
- Essay Title, Chapter Headings & Drop Prose: Newsreader (OFL), weights 400/500/600/700
- Interactive Controls & Diagrams: Inter (OFL), weights 400/500/600
- Tooth Counts, Gear Ratios & Beat Telemetry: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Editorial header + chapter jump strip, followed by an asymmetric 12-col sticky workbench (5-col long-read chapters left, 7-col sticky interactive 3D horology figure + controls right) that stacks cleanly with an always-reachable figure bar on 390×844 mobile.
- Radius: 14px archival blueprint cards with 1px gunmetal hairlines; tactile pill controls for Explode, Cutaway, Slow-Mo, and Wind.
- Motion: Continuous mechanical ticking, gear-train tooth meshing, escapement lock/unlock stepping, and concentric hairspring breathing.
- Motion: Smooth vertical layer separation when dragging the Exploded View slider, and clean half-plane clipping in Cutaway Section mode.
- Motion: Winding the crown tightens the mainspring coils and recharges the live Power Reserve meter.
- Motion: Respect prefers-reduced-motion by pausing automatic ticking while keeping Time Scrub, Orbit, Explode, and Wind fully interactive.
- Imagery: 100% procedural Three.js horology 3D geometry—extruded toothed brass wheels, spiral springs, ruby jewels, blued screws, and automatic rotor.

## Pages & Sections
### [BRAND] · How a Mechanical Watch Works (`#/monograph`)
1. **Archival Masthead & Sticky Interactive 3D Movement Stage** — Warm paper masthead presenting [BRAND], [CALIBER_NAME] specs (`[FREQUENCY_LABEL] · [POWER_RESERVE] · 21 Ruby Jewels`), and an 8-chapter jump bar (`01 Pendulum` through `08 Complete Caliber`). Right beside the opening introduction sits the full-craft Three.js 3D horology stage opening immediately on the ticking assembled [CALIBER_NAME] movement (brass gear train, ruby jewels, blued screws, oscillating balance, and swinging rotor). Direct controls beneath the 3D viewport let readers: Play/Pause, set Slow-Motion (`0.1×` to `2×`), Scrub Time manually, slide `Explode Layers (0–100%)`, toggle `Cutaway Section`, switch `Crown Mode (Wind / Set Hands)`, and click `Wind Mainspring` to recharge power reserve.
   Layout: 12-col editorial split (`lg:items-start`) with `lg:sticky lg:top-20` 3D stage on desktop and compact top figure stage + scrollable chapters on 390px mobile.
   Motion: Real-time 60fps mechanical stepping and smooth drag orbit.
2. **Eight Illustrated Horology Chapters & Verifiable Gear Ratio Table** — Eight readable, richly structured chapters—each with a 'Focus 3D Figure' sync trigger, crisp callout numbers, and simplified-but-accurate explanations covering: (1) Spring & Pendulum Isochronism, (2) Mainspring & Barrel Torque, (3) Gear Train with verifiable tooth-count table (`Barrel 72T → Center 64T/12L → Third 60T/8L → Fourth 60T/8L → Escape 15T/7L`), (4) Swiss Lever Escapement & Pallet Stones, (5) Balance Wheel & Breathing Hairspring, (6) Keyless Works Winding & Setting, (7) Date Ring & Automatic Rotor Complications, and (8) Finale: Winding & Observing the Full [CALIBER_NAME] Movement. Subtle editorial footer with optional [CREDIT].
   Layout: Comfortable 62ch editorial measure in left column with generous vertical rhythm and zero horizontal overflow.
   Motion: Scrolling into each chapter smoothly activates its corresponding 3D assembly in the sticky figure.

## Assets


## Don'ts
- Never name any real luxury watchmaker, trademarked movement, or copy prose from existing mechanical watch essays.
- Never mount 8 separate WebGL contexts (use one shared high-craft Three.js renderer that transitions cleanly across all 8 figures).
- Never put overflow-x: hidden on ancestors of position: sticky elements (use overflow-x: clip on body).
- Never display calendar dates or 4-digit years anywhere in the monograph or date ring label.
- Never allow horizontal overflow on 390×844 mobile or clip content with clip-path.

---
— Prompt by VibeFather · https://vibefather.ai/t/how-a-mechanical-watch-works · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
