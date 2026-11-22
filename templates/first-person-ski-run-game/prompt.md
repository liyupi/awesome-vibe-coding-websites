# First-Person Ski Run Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a procedural Three.js 3D alpine ski run game titled [BRAND] set on fictional [MOUNTAIN_NAME] ([ELEVATION_DROP]) descending into alpine valley village [VILLAGE_NAME]. Render the entire 3D world in code (zero external model files): sculpted snow piste with groomed corduroy shading, mogul pockets, instanced snow-dusted pine forests (#1F4D3A), moving red gondola cabins gliding along overhead cables, sunlit distant peaks, wooden valley chalets, shimmering snow sparkle points, and dynamic carving spray particles. Deliver crisp carving physics (lean to turn, tuck to accelerate, edge-brake to throw spray and slow, Space/button to launch off freeride jumps for tricks), 3 runs of rising difficulty (Blue Glacier Cruiser, Red Timber Ridge, Black Ice Chute), timed slalom gates with gate bonuses, a localStorage translucent ghost replay of your fastest descent, an interactive SVG trail map, live weather toggles (Bluebird, Snowfall, Fog), Time of Day (Morning, Noon, Alpenglow), First-Person (with carving ski tips) and Chase cameras, Web Audio synthesized wind and ski-edge sound, and full keyboard, mouse, gamepad, and mobile touch support. Open on frame one standing at the top of the sunlit morning run overlooking the glistening slope, slalom gates, pines, gondola, and valley below—with a crisp non-blocking 'Drop In' pill.

- Audience: Browser gamers, sports fans, and WebGL enthusiasts looking for an immediate, tactile 3D downhill experience.
- Goal: Deliver an instant 'wow' alpine vista on frame one and crisp, joyful carving feedback within seconds on both desktop and mobile.
- Tone: Crisp, sunlit alpine athleticism—fresh mountain air, clean glacier-blue telemetry, and unmistakable Blue/Red/Black piste markings.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/barlow-condensed (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/barlow-condensed (600, 700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600, 700) in src/main.tsx.
  - Build the procedural Three.js mountain, instanced snow-laden pine forest, animated overhead gondola, village chalets, slalom gates, freeride kickers, snow sparkle + carving spray particle systems, ghost skier replay, and physics engine in src/sim/skiEngine.ts (always setting preserveDrawingBuffer: true and capping DPR at 1.5 mobile / 2 desktop).
  - Synthesize continuous alpine wind rush and ski-edge carving hiss in src/sim/skiAudio.ts using the Web Audio API (no audio files; starts cleanly on user interaction with mute toggle).
  - Keep all 3 run definitions (Blue, Red, Black), trick names, and customizable brand copy in src/data/runs.ts, and build the interactive SVG Trail Map modal in src/components/TrailMapModal.tsx.

## Variables
- [BRAND] — Game Title (default: "Crestline Powder"). Alpine ski game brand title
- [MOUNTAIN_NAME] — Fictional Mountain Name (default: "Mount Alabaster"). Original alpine peak name
- [VILLAGE_NAME] — Base Village Name (default: "Larch Hollow"). Fictional alpine base village name
- [ELEVATION_DROP] — Vertical Drop Label (default: "840m Vertical"). Vertical drop badge displayed in HUD
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/first-person-ski-run-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Fresh Powder `#F7FBFF` — Sunlit snow terrain, highlights, and clean HUD cards
- Glacier Blue `#7EC8E3` — Alpine sky, icy accents, ghost trail, and speed gauges
- Alpine Pine `#1F4D3A` — Instanced evergreen tree runs and deep forest accents
- Summit Slate `#0F2233` — Frosted translucent HUD chrome and high-contrast typography
- Blue Piste `#2563EB` — Beginner Glacier Cruiser piste markers and gates
- Red Piste `#E11D48` — Intermediate Timber Ridge piste markers and gondola cabins
- Black Diamond `#18181B` — Expert Ice Chute markers and steep chute warnings

### Typography
- Mountain Title, Speed Readout & Trick Callouts: Barlow Condensed (OFL), weights 600/700/800
- Controls, Trail Map & Run Summary: Inter (OFL), weights 400/500/600
- Stopwatch, Vertical Meters & Gate Splits: JetBrains Mono (OFL), weights 500/600/700

### Layout & motion
- Spacing: Full-bleed 100dvh Three.js alpine viewport with compact frosted-glass top telemetry bar, unobtrusive summit launch pill on frame one, and responsive bottom control strip (plus mobile left/right/tuck/jump touch pads).
- Radius: 14px frosted summit HUD cards; full-pill Blue/Red/Black piste selector badges.
- Motion: Dynamic first-person camera roll leaning into carved edges, subtle pitch drop when tucking, and exhilarating airborne arc off freeride kickers.
- Motion: Overhead gondola cabins continuously glide along tensioned steel cables above the piste while snow sparkles shimmer in morning light.
- Motion: Carving edge turns kick up curved plumes of procedural snow spray particles.
- Motion: Respect prefers-reduced-motion by softening camera roll and particle density while preserving full skiability.
- Imagery: 100% procedural Three.js 3D alpine terrain, snow-capped horizon peaks, instanced pine trees, red gondola cabins, wooden valley chalets, glowing cyan ghost skier, and a crisp code-drawn SVG trail map.

## Pages & Sections
### [BRAND] · First-Person Ski Run (`#/mountain`)
1. **Full-Bleed Procedural Alpine Slope & First-Frame Summit Vista** — Full-viewport Three.js scene opening synchronously at the top of [MOUNTAIN_NAME] in crisp morning light: snow-bright corduroy piste sweeping down through red/blue slalom gates, instanced pine runs (#1F4D3A), red gondola cabins overhead, wooden chalets of [VILLAGE_NAME] twinkling in the valley below, and bright ski tips framed at the bottom of first-person view. A sleek, unobtrusive floating summit launch pill ('Drop In · Press Space or Tap') sits cleanly without covering the mountain vista.
   Layout: Full-viewport `h-dvh` 3D canvas with floating top telemetry HUD and compact bottom environment/run dock.
   Motion: Gentle idle ski-tip sway and moving gondola on frame one; smooth 60fps carving descent once dropped in.
2. **Frosted Alpine Telemetry HUD & Controls Dock** — Compact top HUD displaying [BRAND] / [MOUNTAIN_NAME] (`[ELEVATION_DROP]`), active run pill (Blue / Red / Black), live speed (`km/h`), run stopwatch, slalom gates cleared, trick score, and ghost split delta. Bottom/side compact dock lets players switch between the 3 runs, toggle Camera (`First-Person` / `Chase`), Weather (`Bluebird` / `Snowfall` / `Fog`), Time of Day (`Morning` / `Noon` / `Alpenglow`), Audio mute, and open the Trail Map. On mobile/touch screens, ergonomic thumb controls (`←`, `→`, `Tuck`, `Jump`) appear cleanly along the bottom edge.
   Layout: Zero horizontal overflow at 1440×900 and 390×844; crisp readable contrast against snow.
   Motion: Trick pop-ups (`360° SPIN +350`, `CLEAN GATE +100`) animate cleanly near upper center.
3. **Interactive SVG Alpine Trail Map & Finish Run Summary** — Modal trail map rendered in crisp vector SVG showing [MOUNTAIN_NAME]'s summit, gondola lift line, Blue Glacier Cruiser, Red Timber Ridge, Black Ice Chute, Freeride Jump Zone, and [VILLAGE_NAME] base—with each run clickable to teleport straight to its start gate and showing saved localStorage personal best times and ghost status. Crossing the valley finish banner opens a clean finish card with time, gates hit, trick bonus, new-record ghost badge, and one-click Run Again / Next Difficulty.
   Layout: Centered frosted alpine modal with clean keyboard Escape close and subtle footer credit.
   Motion: Smooth modal reveal and finish confetti/snow burst.

## Assets


## Don'ts
- Never name any real ski resort, alpine peak, ski gear manufacturer, or competitor.
- Never load external 3D models, audio files, textures, or CDN fonts.
- Never render a blank dark screen or full-screen blocking title menu on frame one—show the sunlit mountain vista overlooking the piste, gates, pines, gondola, and valley immediately.
- Never print calendar dates or 4-digit years anywhere on the HUD or trail map.
- Never allow horizontal overflow on 390×844 mobile or clip elements with clip-path.

---
— Prompt by VibeFather · https://vibefather.ai/t/first-person-ski-run-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
