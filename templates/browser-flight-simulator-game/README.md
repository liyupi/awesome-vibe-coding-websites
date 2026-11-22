# Browser Flight Simulator Game

> An instant-play low-poly Three.js island flight game with ring courses, mail drops, scored landings, and ghost replay.

<a href="https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/browser-flight-simulator-game/6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d/webp.21807cd980.webp" width="100%" alt="Browser Flight Simulator Game — Low-Poly 3D Three.js Island Flight Game built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Browser Flight Simulator Game is a full-viewport low-poly Three.js flying experience set over an original procedural island archipelago. Opening straight into golden-hour flight with the aircraft banking above sunlit turquoise water and a small non-blocking 'Take control' hint, it requires zero external 3D models, audio files, or backend servers. Every island, beach terrace, pine forest, painted harbor town, striped lighthouse, tarmac airstrip, drifting cloud cluster, and animated sea-foam shader is constructed procedurally in code. Players can cruise freely or launch three playable activities at any time: a timed aerial Ring Course with a localStorage Best-Run Ghost Plane replay, inter-island Mail Delivery drops over harbor markers, and scored Runway Landings graded on touchdown glide slope and centerline alignment. An accessible arcade flight model handles pitch, roll, throttle, and stall warnings smoothly via keyboard, mouse steering, or responsive on-screen touch controls on mobile. Switch instantaneously between Chase and Cockpit cameras, cycle lighting across Golden Hour, Bright Day, and Starry Night (with rotating lighthouse beam and lit runway beacons), toggle Web Audio synthesized propeller and wind sound, or freeze the scene in Photo Mode to compose screenshots. Compact aviation HUD instruments display airspeed, altitude, heading, throttle bar, and a live 2D island radar minimap.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md), [Browser Game](../../types/game.md) |
| Style | [Minimal](../../styles/minimal.md), [Playful](../../styles/playful.md) |
| Effects | Generative / Canvas, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/browser-flight-simulator-game/6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d/shot_desktop.66cfbdba8d.webp" width="100%" alt="Browser Flight Simulator Game — Golden-hour coastal archipelago, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Golden-hour coastal archipelago</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=6f8f2e7e-c9ee-4b0f-8880-a75fd678bb0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=b8db1754-8a53-40cf-a553-5dd051d79882&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/browser-flight-simulator-game/b8db1754-8a53-40cf-a553-5dd051d79882/shot_desktop.59e12a4f07.webp" width="100%" alt="Browser Flight Simulator Game — Nordic fjord mailplane run, built by GPT-6.2 Sol in Codex"></a><br>
<b>Nordic fjord mailplane run</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/browser-flight-simulator-game?case=b8db1754-8a53-40cf-a553-5dd051d79882&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A flight school or aviation club: set BRAND and AIRCRAFT_NAME to your organization and trainer, then rewrite the Mail Delivery brief as a first-solo milestone so students fly the ring course before booking.
- A tourism board for an island region: set ARCHIPELAGO_NAME and HARBOR_NAME to real place names, keep the free-flight cruise as the hook and use Photo Mode snapshots as shareable trip imagery.
- A game studio portfolio piece: keep the procedural low-poly world, rename the brand to your studio and point the runway landing score at a demo reel so visitors test the flight model themselves.
- A children's aviation museum exhibit: set BRAND to the museum, simplify the mission labels to friendly names and leave the touch controls and chase camera as the default kiosk setup.

## FAQ

### What can you actually do in the Browser Flight Simulator Game?
The Browser Flight Simulator Game opens already airborne over a procedural low-poly archipelago, so you can cruise freely from the first frame or launch one of three activities. The Ring Course is a timed run through eight glowing golden rings with a ghost replay of your best path. Mail Delivery asks you to drop mail over three harbor markers, and Runway Landing grades your touchdown glide slope and centerline alignment out of 100.

### Does the Browser Flight Simulator Game need external 3D models or audio files to run?
No. The Browser Flight Simulator Game builds every island, beach, pine forest, harbor town, lighthouse, runway and cloud cluster procedurally in Three.js, and the ocean waves and shoreline foam come from a custom shader. Propeller hum, wind rush, ring chimes and mail drop sounds are synthesized with the Web Audio API. There are no external model, texture or audio files and no backend server, so the build stays small and loads fast.

### How do I change the flight club name, archipelago and aircraft in this template?
The Browser Flight Simulator Game uses four variables: BRAND for the flight club, ARCHIPELAGO_NAME for the island chain, HARBOR_NAME for the main harbor town and AIRCRAFT_NAME for the aircraft. Replace them in the prompt before you generate, then rewrite the headlines, mission readouts and labels to match. The template keeps copy in one content file so you can swap names and text later without touching the 3D scene code.

### Is there a free browser flight simulator game template I can build with AI?
Yes. The Browser Flight Simulator Game template is free, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. You can generate the site with an AI coding agent such as Claude Code, Codex, Cursor, Windsurf or Gemini CLI. Commercial or client work needs a VibeFather Pro license, which also gives you the source code of the demos.

### How do the controls and HUD work on a phone in the Browser Flight Simulator Game?
On phones the Browser Flight Simulator Game swaps the desktop key legend for an on-screen touch pad with a virtual pitch and roll stick, throttle plus and minus buttons and a mail drop button. The HUD compacts into two rows on a 390px viewport, and the radar minimap, airspeed, altitude, throttle bar and stall warning stay visible. You can still switch cameras, lighting and sound from the top icon bar.

### How do I build a browser flight simulator game with AI?
Copy the prompt from this page or run npx vibefather add browser-flight-simulator-game, replace [BRAND], [ARCHIPELAGO_NAME], [AIRCRAFT_NAME] and [HARBOR_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Browser Flight Simulator Game demo?
The Golden-hour coastal archipelago case was built by Gemini 4 Neon in Antigravity; the Nordic fjord mailplane run case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Browser Flight Simulator Game template use?
Browser Flight Simulator Game is a single-page site built with Three.js, React and Tailwind CSS, with generative / canvas, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Browser Flight Simulator Game template for a client or a business?
The Browser Flight Simulator Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Browser Flight Simulator Game template work on mobile?
Yes. Every Browser Flight Simulator Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Browser Flight Simulator Game on VibeFather](https://vibefather.ai/templates/browser-flight-simulator-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
