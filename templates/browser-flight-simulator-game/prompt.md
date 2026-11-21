# Browser Flight Simulator Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an instant-play Three.js low-poly browser flight simulator for [BRAND], flying the [AIRCRAFT_NAME] over the procedural [ARCHIPELAGO_NAME] anchored by [HARBOR_NAME]. The first frame opens already airborne at golden hour with an autopilot scenic orbit and a small 'Take control' pill—never a dark menu wall. Includes procedural islands, animated sea shader with foam, fly-through clouds, Day/Sunset/Night cycle, Chase & Cockpit cameras, Ring Course with localStorage Ghost Replay, Mail Deliveries, Scored Runway Landings, Photo Mode, synthesized Web Audio engine/wind sound, and mobile touch controls.

- Audience: Gamers, creative technologists, and web developers showcasing real-time 3D WebGL scenes and playful browser experiences.
- Goal: Render an unmistakable, sunlit low-poly coastal archipelago in flight within one second of load while providing genuinely satisfying arcade flying, activities, and clean aviation HUD instrumentation.
- Tone: Breezy, adventurous coastal aviation—crisp instrument readouts, playful low-poly warmth, and zero clutter.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (600, 700) and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Initialize THREE.WebGLRenderer with antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance', and pixelRatio capped at Math.min(window.devicePixelRatio, 2) (scaled down on narrow mobile viewports).
  - Build all 3D meshes procedurally in src/sim/worldBuilder.ts (islands, beaches, InstancedMesh pine forests, harbor houses, lighthouse with rotating beam, tarmac runway with beacons, volumetric cloud puffs, prop aircraft, translucent ghost plane, and glowing golden rings).
  - Synthesize propeller hum, throttle pitch, wind rush, ring chime, and mail drop sound purely via Web Audio API in src/sim/audioEngine.ts, activated cleanly on user interaction.

## Variables
- [BRAND] — Flight Club Name (default: "Pelican Airworks"). Fictional island aviation brand
- [ARCHIPELAGO_NAME] — Island Chain Name (default: "Aurelia Isles"). Fictional archipelago name
- [AIRCRAFT_NAME] — Aircraft Model Name (default: "Kite-4 Seaplane"). Fictional light aircraft name
- [HARBOR_NAME] — Main Harbor Town (default: "Port Solis"). Primary island harbor town name
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/browser-flight-simulator-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Golden Horizon `#FF9E5E` — Default golden-hour sky horizon glow and sunlit aircraft accents
- Coastal Sky `#3B7DD8` — Upper sky dome and daytime atmosphere gradient
- Lagoon Teal `#1C8C9E` — Custom animated ocean shader with white shoreline wave foam
- Terracotta Roof `#E05A47` — Aircraft wing stripes, lighthouse bands, and harbor town roofs
- Sunlit Sand `#F2D7A0` — Procedural island beaches and ring-course gates
- Pine Forest `#2E6F52` — Instanced low-poly island cedar and pine clusters
- HUD Slate `#0D1524` — Translucent aviation HUD cards (rgba(13,21,36,0.78)) with #F4F7FC crisp text and #FFB547 amber gauges

### Typography
- HUD Titles & Badges: Space Grotesk (OFL), weights 600/700
- Aviation Instruments & Telemetry: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-bleed 100vw × 100dvh 3D canvas with restrained 16px edge-inset HUD clusters leaving >=75% of the viewport clear sky and archipelago.
- Radius: 8px for translucent HUD instrument pills, activity switcher, and touch control pads.
- Motion: 60fps smooth arcade aerodynamics with banking camera spring lag, spinning propeller disc, rolling sea shader waves, and drifting cloud clusters.
- Motion: Immediate golden-hour autopilot flight orbit on first frame so the scene looks alive before any input.
- Motion: Respect prefers-reduced-motion by damping camera shake and cloud drift speed.
- Imagery: 100% procedural Three.js low-poly 3D world with custom GLSL ocean wave & shoreline foam shader, faceted island heightfields, instanced pine trees, painted harbor cottages, striped lighthouse, tarmac runway, sky gradient dome, and bright terracotta-and-cream twin-float aircraft.

## Pages & Sections
### [BRAND] · [ARCHIPELAGO_NAME] Flight Simulator (`#/fly`)
1. **Full-Viewport 3D Archipelago Canvas & Instant Airborne First Frame** — Full-screen Three.js WebGL canvas opening immediately airborne at golden hour in scenic cruise above [ARCHIPELAGO_NAME], with [AIRCRAFT_NAME] framed in crisp 3/4 chase perspective overlooking [HARBOR_NAME], the striped lighthouse, tarmac airstrip, glowing golden course rings, foam-rimmed ocean, and sunlit clouds. A compact bottom-center pill ('Cruise Autopilot · Press W/S/A/D or click Take Control') invites instant piloting without obstructing the view.
   Layout: Fixed full-viewport canvas (`100vw × 100dvh`) with non-blocking translucent corner HUD clusters.
2. **Top Bar: Brand, Activities, Lighting Cycle, Camera, Sound & Photo Mode** — Top-left compact badge showing [BRAND] · [ARCHIPELAGO_NAME] and active mission readout. Top-center activity selector pills: Free Flight, Ring Course (8 glowing golden rings with live timer + best run saved in localStorage + translucent cyan Ghost Replay plane flying your saved path), Mail Delivery (3 harbor drop zones with 'Drop Mail [Space]' button and drop score), and Runway Landing (guides player onto the runway centerline and grades touchdown vertical speed & alignment out of 100). Top-right compact icon bar: Time-of-day toggle (`Sunset` / `Day` / `Night`), Camera toggle (`Chase` / `Cockpit`), Web Audio sound toggle, and Photo Mode (hides HUD cleanly except an 'Exit Photo Mode' pill and 'Save Snapshot' PNG button).
   Layout: Edge-aligned translucent dark-glass HUD bars (`bg-[#0D1524]/78 backdrop-blur`) that compact cleanly into a clean 2-row micro-HUD on 390px phones.
3. **Bottom Aviation Instruments, 2D Radar Minimap & Mobile Touch Pad** — Bottom-left: crisp 118px circular/square 2D canvas radar minimap showing islands, runway vector, active rings/mail zones, player heading triangle, and ghost plane dot, paired with Airspeed (KTS), Altitude (FT), Throttle bar, and automatic amber/red STALL warning indicator when speed drops too low. Bottom-right: compact controls legend on desktop (`W/S Pitch · A/D Roll · Shift/Ctrl Throttle · C Camera · Space Drop`) or responsive on-screen touch steering pad (Pitch/Roll virtual stick + Throttle +/- + Drop button) on mobile viewports, plus optional [CREDIT] link tucked unobtrusively at the bottom-right corner.
   Layout: Corner-anchored HUD widgets with zero horizontal overflow at both 1440x900 and 390x844.

## Assets
- icon: Install lucide-react (ISC) for HUD controls (camera, sun/moon, volume, photo shutter, compass, mail drop).
- font: Install @fontsource/space-grotesk and @fontsource/jetbrains-mono (OFL) and import in src/main.tsx.
- image: All 3D islands, sea foam shader, aircraft, lighthouse, harbor town, clouds, and 2D minimap are rendered procedurally in Three.js and Canvas with zero external model or audio files.

## Don'ts
- No code, assets, or branding from fly.pieter.com or any third-party flight simulator.
- No blocking title screens, modal start walls, loading spinners, or blank dark first frames—the aircraft must be visibly flying over the sunlit archipelago on frame 1.
- No external GLTF/OBJ models, external sound MP3/WAV files, or CDN scripts/fonts.
- No calendar dates or real airline/aircraft trademarks.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No horizontal overflow or console errors at 1440x900 desktop or 390x844 mobile.

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-flight-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
