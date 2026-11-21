# Browser Flight Simulator Game

> An instant-play low-poly Three.js island flight game with ring courses, mail drops, scored landings, and ghost replay.

<a href="https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/browser-flight-simulator-game/6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d/webp.21807cd980.webp" width="100%" alt="Browser Flight Simulator Game — Low-Poly 3D Three.js Island Flight Game built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Browser Flight Simulator Game is a full-viewport low-poly Three.js flying experience set over an original procedural island archipelago. Opening straight into golden-hour flight with the aircraft banking above sunlit turquoise water and a small non-blocking 'Take control' hint, it requires zero external 3D models, audio files, or backend servers. Every island, beach terrace, pine forest, painted harbor town, striped lighthouse, tarmac airstrip, drifting cloud cluster, and animated sea-foam shader is constructed procedurally in code. Players can cruise freely or launch three playable activities at any time: a timed aerial Ring Course with a localStorage Best-Run Ghost Plane replay, inter-island Mail Delivery drops over harbor markers, and scored Runway Landings graded on touchdown glide slope and centerline alignment. An accessible arcade flight model handles pitch, roll, throttle, and stall warnings smoothly via keyboard, mouse steering, or responsive on-screen touch controls on mobile. Switch instantaneously between Chase and Cockpit cameras, cycle lighting across Golden Hour, Bright Day, and Starry Night (with rotating lighthouse beam and lit runway beacons), toggle Web Audio synthesized propeller and wind sound, or freeze the scene in Photo Mode to compose screenshots. Compact aviation HUD instruments display airspeed, altitude, heading, throttle bar, and a live 2D island radar minimap.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md), [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Generative / Canvas, Micro-interactions, 3D / WebGL |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/browser-flight-simulator-game/6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d/shot_desktop.66cfbdba8d.webp" width="100%" alt="Browser Flight Simulator Game — Golden-hour coastal archipelago, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Golden-hour coastal archipelago</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Flight Club Name | Pelican Airworks |
| `[ARCHIPELAGO_NAME]` | Island Chain Name | Aurelia Isles |
| `[AIRCRAFT_NAME]` | Aircraft Model Name | Kite-4 Seaplane |
| `[HARBOR_NAME]` | Main Harbor Town | Port Solis |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add browser-flight-simulator-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A flight school or aviation club: set [BRAND] to your club name, [AIRCRAFT_NAME] to your trainer and rewrite the landing grader labels to match your syllabus.
- A coastal tourism board: set [ARCHIPELAGO_NAME] and [HARBOR_NAME] to your real region, then turn Mail Delivery drop zones into landmark stops visitors can explore.
- A creative developer's portfolio: keep the procedural world, add your own name as [BRAND] and use Photo Mode snapshots as the project's case-study imagery.
- A game jam or classroom demo: rename [ARCHIPELAGO_NAME] to your project, and adjust the Ring Course ring count and lighting cycle to fit the lesson or theme.

## FAQ

### What can you actually do in the Browser Flight Simulator Game besides fly around?
The Browser Flight Simulator Game includes three playable activities you can start at any time from the top bar: a timed Ring Course with eight glowing golden rings and a saved best-run ghost plane, inter-island Mail Delivery with three harbor drop zones and a drop score, and scored Runway Landings graded out of 100 on touchdown glide slope and centerline alignment. Free Flight is always available too.

### Is there a free browser flight simulator template I can build with AI?
Yes. The Browser Flight Simulator Game is a free template on VibeFather, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. It builds a full-viewport Three.js low-poly island flight game with no backend, no external 3D models and no audio files, so you can run it as a static site. Commercial or client use needs a Pro license.

### How do the Ring Course ghost replay and the landing score work?
The Ring Course runs a timer through eight glowing golden rings and stores your best run in the browser's localStorage, then flies a translucent cyan ghost plane along that saved path so you can race yourself. Runway Landing guides you onto the tarmac centerline and grades the touchdown out of 100 based on vertical speed and alignment. Both save locally, so there is no account or server involved.

### Can I change the brand name, island chain and aircraft in the flight simulator?
Yes. The Browser Flight Simulator Game prompt exposes four variables: BRAND for the flight club name, ARCHIPELAGO_NAME for the island chain, AIRCRAFT_NAME for the fictional light aircraft and HARBOR_NAME for the main harbor town. The defaults are Pelican Airworks, Aurelia Isles, Kite-4 Seaplane and Port Solis. When you change them, rewrite the headlines and labels to match, keeping the same tone and length.

### Do I need 3D models or sound files to run this flight simulator?
No. Every island, beach, pine forest, harbor town, lighthouse, runway, cloud and the aircraft are built procedurally in Three.js, and the ocean wave and shoreline foam shader is written in GLSL. Propeller hum, wind rush, ring chime and mail drop sounds are synthesized with the Web Audio API. The template ships with no external GLTF or OBJ models and no MP3 or WAV files, so nothing extra to host.

### How do I build a browser flight simulator game with AI?
Copy the prompt from this page or run npx vibefather add browser-flight-simulator-game, replace [BRAND], [ARCHIPELAGO_NAME], [AIRCRAFT_NAME] and [HARBOR_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Browser Flight Simulator Game demo?
The Golden-hour coastal archipelago case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Browser Flight Simulator Game template use?
Browser Flight Simulator Game is a single-page site built with Three.js, Tailwind CSS and React, with generative / canvas, micro-interactions and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Browser Flight Simulator Game template for a client or a business?
The Browser Flight Simulator Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Browser Flight Simulator Game template work on mobile?
Yes. Every Browser Flight Simulator Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Browser Flight Simulator Game on VibeFather](https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
