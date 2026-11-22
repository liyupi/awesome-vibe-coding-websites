# Draw Battle Simulator Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a cheerful cartoon toy battle simulator titled [BRAND] set on [MAP_NAME] where players paint rows of tiny soldiers—[RED_TEAM] (#FF5A5F) on the left and [BLUE_TEAM] (#3A86FF) on the right—by dragging lines across a sunny meadow (#8BC34A) beneath a clear sky (#BEE3F8), then press Fight to watch hundreds of units clash smoothly with spatial-hash flocking and joyful confetti pops (zero blood). Include 10 original code-drawn units with distinct strengths and counters (Pikemen, Archers, Catapults, Shield Walls, Goat Cavalry, Orb Wizards with bouncing orbs, Splitting Slimes, Giant Snowmen, Horn Drummers who buff nearby allies, and Balloon Bombers), paintable terrain brushes (River, Hills, Forest that slow units or grant range/cover), Slow-Motion (0.35×), Follow-Action Camera zoom, Replay of drawn formations, 12 coin-budget Challenge Puzzles ('Win with 40 coins'), and Share Battle URL encoding. Open on frame one with an animated skirmish already charging across the meadow.

- Audience: Browser gamers, physics-sandbox fans, and casual strategy players who love immediate draw-and-watch toys.
- Goal: Hook players in one second with a vibrant mid-charge toy battle on frame one, then make drawing armies, painting terrain, and solving 12 tactical coin puzzles effortlessly fun on desktop and touch devices.
- Tone: Sunny, bouncy, wooden-toybox whimsy—festive confetti pops and cheerful unit silhouettes.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/fredoka (OFL-1.1), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fredoka (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Author the high-performance spatial-hash flocking & combat engine in src/sim/battleEngine.ts supporting up to 1,000 units smoothly with distinct behaviors for all 10 units (bouncing wizard orbs, slime splitting on pop, catapult splash boulders, drummer haste aura, shield-wall damage reduction, terrain slowdown in river/forest and hill range boost, and joyful multi-color confetti pops).
  - Author the 12 coin-budget Challenge Puzzles and compact URL hash encoder/decoder in src/sim/puzzles.ts, and keep all copy and unit metadata in src/content.ts.
  - Render the sunny meadow battlefield synchronously on frame one mid-charge with soft sky horizon, painted rivers/forests/hills, crisp cartoon unit silhouettes, projectiles, and confetti bursts.

## Variables
- [BRAND] — Game Title (default: "Meadow Clash"). Playful cartoon battle sandbox title
- [RED_TEAM] — Left Army Name (default: "Crimson Brigade"). Name of the red left-side toy army
- [BLUE_TEAM] — Right Army Name (default: "Cobalt Banner"). Name of the blue right-side toy army
- [MAP_NAME] — Battlefield Name (default: "Buttercup Field"). Sunny meadow arena label
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/draw-battle-simulator-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Sunny Meadow `#8BC34A` — Primary grassy toybox battlefield
- Daybreak Sky `#BEE3F8` — Page backdrop, top horizon clouds, and painted rivers
- Crimson Team `#FF5A5F` — Left army tunics, counters, and team banner
- Cobalt Team `#3A86FF` — Right army tunics, counters, and team banner
- Toybox Cream `#FFFDF7` — Crisp HUD bar, unit palette dock, and puzzle drawer
- Ink Charcoal `#1F2937` — Chunky cartoon borders, typography, and shadows

### Typography
- Game Title & Victory Banners: Fredoka (OFL), weights 600/700
- Unit Tooltips & Controls: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Unit Counts, Coins & Speed: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Compact sunny top control bar, full-width framed meadow battle canvas occupying the heart of the viewport, and tactile bottom 10-unit + terrain brush dock that wraps cleanly on 390px mobile.
- Radius: 14px for meadow stage and puzzle cards with chunky 2px ink borders; full-pill buttons for Fight, Slow-Mo, Follow Cam, and Replay.
- Motion: Live mid-charge cartoon battle running right on frame one with hopping walk cycles, arching arrows, bouncing wizard orbs, and celebratory confetti bursts when units pop.
- Motion: Smooth line-sketch preview trail showing exactly where toy soldiers will spawn while dragging a finger or mouse across the meadow.
- Motion: Follow-Action Camera smoothly zooms and pans toward the densest active front-line clash.
- Motion: Under prefers-reduced-motion, slow animations gently and disable camera shake while preserving full playability.
- Imagery: 100% code-drawn HTML5 Canvas 2D sunny meadow terrain (hills, winding rivers, puffy cartoon pine forests), 10 distinct toy soldier archetypes, bouncing orbs, catapult rocks, and confetti particles.

## Pages & Sections
### [BRAND] · Draw Battle Simulator (`#/battle`)
1. **Top Command Bar & Live Meadow Battlefield Canvas** — Playful cream-and-ink top bar displaying [BRAND] crest, live army balance bar ([RED_TEAM] count vs [BLUE_TEAM] count), primary Fight / Pause button, Slow-Mo (0.35×) toggle, Follow Cam toggle, Replay button, Clear button, Puzzles (12) drawer button, and Share URL copy button. Directly below fills the sunny [MAP_NAME] Canvas stage already mid-charge on frame one (Red vs Blue toy armies colliding with arrows, wizard orbs, and confetti pops!). Dragging on the left half deploys [RED_TEAM] units along your stroke; dragging on the right half deploys [BLUE_TEAM] units (or paint River, Hill, and Forest terrain when a Terrain Brush is selected).
   Layout: Full-width responsive battlefield inside 1280px container (min-h 460px desktop / 330px mobile) with zero overflow.
   Motion: Real-time 60fps flocking simulation with smooth stroke-to-spawn unit placement.
2. **10-Unit Toybox Dock & Paintable Terrain Brushes** — Tactile bottom selector strip featuring all 10 cartoon units with coin cost, role tag, and hover counter hint: Pikeman (2g), Archer (3g), Shield Wall (3g), Goat Cavalry (4g), Splitting Slime (4g), Horn Drummer (4g), Orb Wizard (5g), Balloon Bomber (6g), Catapult (7g), and Giant Snowman (8g)—plus 4 Terrain Brushes (`River — Slows 50%`, `Forest — Slows & Cover`, `Hill — +30% Range`, `Grass Eraser`).
   Layout: Responsive horizontal chip dock on desktop; compact wrapping grid on 390px mobile.
   Motion: Active brush pops up with chunky toybox ink shadow.
3. **12 Coin-Budget Challenge Puzzles & Shareable Battle Links** — Slide-over or modal drawer listing 12 handcrafted tactical puzzles (e.g., '01: Shield Breaker · 32 Coins', '04: Goat Charge · 40 Coins', '08: River Crossing · 48 Coins', '12: Snowman Siege · 70 Coins') with completion stars saved in localStorage. Loading a puzzle spawns the fixed [BLUE_TEAM] defense and gives the player a strict coin budget on the [RED_TEAM] side. 'Share URL' serializes the drawn units and terrain into a compact hash parameter so opening the link recreates the exact battle. Subtle footer with optional [CREDIT] link.
   Layout: Clean 2-column puzzle modal grid + share confirmation toast.
   Motion: Victory banner bursts festive confetti and marks the puzzle solved.

## Assets
- icon: Install lucide-react (ISC) for playback controls, terrain brushes, puzzle trophies, camera toggles, and share actions.
- font: Install @fontsource/fredoka, @fontsource/plus-jakarta-sans, and @fontsource/jetbrains-mono (OFL-1.1) and import directly in src/main.tsx.
- image: Draw the sunny meadow, rivers, hills, forests, all 10 cartoon unit archetypes, projectiles, and confetti bursts directly on HTML5 Canvas inside src/sim/battleEngine.ts.

## Don'ts
- No code, art, sound files, or layouts copied from Neal Agarwal's Battle Draw.
- No blood, gore, or realistic violence—defeated toy units pop into bright party confetti.
- No calendar dates or four-digit years anywhere on the rendered UI.
- No empty battlefield on frame one—launch immediately with a lively mid-charge skirmish.
- No clip-path hiding sections before scroll.
- No CDN scripts/fonts, no backend APIs, no source maps in production build, and keep dist/ under 20 MB.
- No console errors or horizontal overflow at 1440x900 desktop or 390x844 mobile.

---
Inspired by Draw-to-Deploy Cartoon Battle Sandbox by @nealagarwal — https://neal.fun/
— Prompt by VibeFather · https://vibefather.ai/t/draw-battle-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
