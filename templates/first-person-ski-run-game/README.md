# First-Person Ski Run Game

> Carve down a procedural 3D alpine mountain through slalom gates, moguls, pine trees, and freeride jumps with live snow spray and wind audio.

<a href="https://vibefather.ai/templates/first-person-ski-run-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/first-person-ski-run-game/3c8995ab-63b5-4bdc-83db-ffca59a27223/webp.c90641bb95.webp" width="100%" alt="First-Person Ski Run Game — Procedural 3D First-Person Alpine Ski Game built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/first-person-ski-run-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Drop into a sunlit procedural 3D alpine mountain built entirely in Three.js with no model files. Carve down groomed pistes, moguls, and pine tree runs beneath a moving overhead gondola toward the valley village below. Includes responsive lean-to-turn, tuck, and edge-brake carving physics, slalom gates against the clock, freeride jump kickers with trick scoring, 3 runs of rising difficulty (Blue, Red, Black), a localStorage ghost replay of your fastest run, interactive SVG trail map, Bluebird / Snowfall / Fog weather, Morning / Noon / Alpenglow lighting, First-Person and Chase cameras, synthesized Web Audio wind and carving edges, and keyboard, mouse, gamepad, and mobile touch controls.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [3d Experience](../../types/3d-experience.md), [Browser Game](../../types/game.md) |
| Style | [Minimal](../../styles/minimal.md), Daylight |
| Effects | Web Audio, 3D / WebGL |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/first-person-ski-run-game?case=3c8995ab-63b5-4bdc-83db-ffca59a27223&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/first-person-ski-run-game/3c8995ab-63b5-4bdc-83db-ffca59a27223/shot_desktop.3c0fdf1ce5.webp" width="100%" alt="First-Person Ski Run Game — Crestline Powder (Mount Alabaster), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Crestline Powder (Mount Alabaster)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/first-person-ski-run-game?case=3c8995ab-63b5-4bdc-83db-ffca59a27223&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/first-person-ski-run-game?case=8edde067-23c8-4ff0-a579-7bef876f99a5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/first-person-ski-run-game/8edde067-23c8-4ff0-a579-7bef876f99a5/shot_desktop.8508e00a5e.webp" width="100%" alt="First-Person Ski Run Game — Glacier Line (Kestrel Peak), built by GPT-6.2 Sol in Codex"></a><br>
<b>Glacier Line (Kestrel Peak)</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/first-person-ski-run-game?case=8edde067-23c8-4ff0-a579-7bef876f99a5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game Title | Crestline Powder |
| `[MOUNTAIN_NAME]` | Fictional Mountain Name | Mount Alabaster |
| `[VILLAGE_NAME]` | Base Village Name | Larch Hollow |
| `[ELEVATION_DROP]` | Vertical Drop Label | 840m Vertical |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add first-person-ski-run-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ski school or resort: set BRAND and MOUNTAIN_NAME to your hill, rename the 3 runs after your pistes, and point the trail map at your lift line and base lodge.
- A snow sports brand or gear shop: keep the carving physics, swap the chalets and gondola labels for your product names, and use the finish card to show a shop link.
- A tourism board for an alpine valley: set VILLAGE_NAME to your town, use Alpenglow lighting as the default, and rewrite the trail map to list real slopes and viewpoints.
- A game studio prototyping a WebGL title: use the procedural Three.js scene and ghost replay as a base, change BRAND and ELEVATION_DROP, and replace the run names with your own levels.

## FAQ

### Is the First-Person Ski Run Game free to use?
The First-Person Ski Run Game is a free template. Its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client use needs Pro, and Pro members also get the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly.

### What can I change with the BRAND, MOUNTAIN_NAME, VILLAGE_NAME and ELEVATION_DROP variables?
The four variables rename the whole game. BRAND sets the game title and HUD label, MOUNTAIN_NAME names the peak on the summit vista and trail map, VILLAGE_NAME labels the valley base and chalets, and ELEVATION_DROP fills the vertical drop badge in the telemetry bar. The prompt asks you to rewrite every headline and label to match your new values.

### How do the controls and carving physics work in the First-Person Ski Run Game?
The First-Person Ski Run Game uses lean-to-turn carving: you steer by leaning, tuck to accelerate, and edge-brake to throw snow spray and slow down. Space or the jump button launches you off freeride kickers for trick scoring. It supports keyboard, mouse, gamepad and mobile touch, with left, right, tuck and jump pads along the bottom edge on phones.

### Does the First-Person Ski Run Game include a ghost replay and timed slalom gates?
Yes. The First-Person Ski Run Game has timed slalom gates with gate bonuses and a translucent localStorage ghost replay of your fastest descent, shown as a glowing cyan skier. Crossing the valley finish banner opens a finish card with your time, gates hit, trick bonus and a new-record ghost badge, plus Run Again and Next Difficulty buttons.

### What runs, weather and lighting can I switch between in the First-Person Ski Run Game?
The First-Person Ski Run Game has 3 runs of rising difficulty: Blue Glacier Cruiser, Red Timber Ridge and Black Ice Chute. A dock toggles Weather between Bluebird, Snowfall and Fog, and Time of Day between Morning, Noon and Alpenglow. You can also switch between First-Person and Chase cameras and open the interactive SVG trail map.

### How do I build a First-Person ski run game with AI?
Copy the prompt from this page or run npx vibefather add first-person-ski-run-game, replace [BRAND], [MOUNTAIN_NAME], [VILLAGE_NAME] and [ELEVATION_DROP] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the First-Person Ski Run Game demo?
The Crestline Powder (Mount Alabaster) case was built by Gemini 4 Neon in Antigravity; the Glacier Line (Kestrel Peak) case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the First-Person Ski Run Game template use?
First-Person Ski Run Game is a single-page site built with Three.js, React, Vite and Webgl, with web audio and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the First-Person Ski Run Game template for a client or a business?
The First-Person Ski Run Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the First-Person Ski Run Game template work on mobile?
Yes. Every First-Person Ski Run Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [First-Person Ski Run Game on VibeFather](https://vibefather.ai/templates/first-person-ski-run-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
