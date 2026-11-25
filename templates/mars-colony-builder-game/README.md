# Mars Colony Builder Game

> Place four structures, ride the dust storms, and house 50 colonists.

<a href="https://vibefather.ai/templates/mars-colony-builder-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/mars-colony-builder-game/5f787637-e0bf-460e-aeb8-9abdb3b13dc7/webp.06930970e1.webp" width="100%" alt="Mars Colony Builder Game — Isometric Mars Colony Strategy Game built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/mars-colony-builder-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Mars Colony Builder Game is a single-screen strategy game. The default colony is Hearthline, founded by the Amberline Survey in Tallow Crater. The first screen is the basin: an isometric 12 by 12 grid, rust ground, a raised rim, six boulders, one copper habitat, and a dust haze, with dark glass columns over the basin. The help log names Nia Calder, Omar Voss, and Priya Sen.

Each sol allows one placement, one removal, or a pass, then Advance sol. Habitats sleep eight. Solar arrays make 10 power, or 5 in a dust storm, and less when a habitat or greenhouse shares an orthogonal side. Greenhouses make 8 oxygen, or 16 if they touch a habitat. Ice drills add 20 water and lose extra morale next to a habitat. The four stocks run from 0 to 100. Two colonists arrive when power demand was met, every stock is at least 35, and a bed is free, up to 50. A stock at zero ends the run. Storms last four sols and start on sols 8, 18, 30, 44, 60, and 78. The preview calls the same tick as Advance sol.

The HUD is dark glass with one copper accent for the sol, the forecast, the stocks, the beds, and the build cards. A phone gets a thumb bar and tap-to-place, and the desktop adds a keyboard cursor. localStorage keeps the grid so Resume survey can continue a run. Reduced motion swaps drifting dust for a flat storm tint. It suits players who want a short planning puzzle and developers shipping it as static files. Five variables change the colony, the crater, the expedition, the tagline, and the audience. Saltmere, in Vesper Basin, keeps every yield and the same calendar. Drawing stays on the canvas, with short synthesized tones.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Glass](../../styles/glass.md), [Dark](../../styles/dark.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mars-colony-builder-game?case=5f787637-e0bf-460e-aeb8-9abdb3b13dc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mars-colony-builder-game/5f787637-e0bf-460e-aeb8-9abdb3b13dc7/shot_desktop.52b18247a0.webp" width="100%" alt="Mars Colony Builder Game — Hearthline Crater Colony, built by Grok 4.7 in Grok Build"></a><br>
<b>Hearthline Crater Colony</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/mars-colony-builder-game?case=5f787637-e0bf-460e-aeb8-9abdb3b13dc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mars-colony-builder-game?case=2f70789f-9773-471c-966c-2ca42c3a3c09&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mars-colony-builder-game/2f70789f-9773-471c-966c-2ca42c3a3c09/shot_desktop.3202ab7b44.webp" width="100%" alt="Mars Colony Builder Game — Saltmere Rim Outpost, built by Grok 4.7 in Grok Build"></a><br>
<b>Saltmere Rim Outpost</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/mars-colony-builder-game?case=2f70789f-9773-471c-966c-2ca42c3a3c09&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Colony name | Hearthline |
| `[CRATER]` | Crater name | Tallow Crater |
| `[EXPEDITION]` | Founding expedition | the Amberline Survey |
| `[TAGLINE]` | Colony tagline | Fifty beds against the dust. |
| `[AUDIENCE]` | Player audience | players who like short planning puzzles |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add mars-colony-builder-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom teacher: set BRAND and CRATER to a class colony, keep the four stocks and storm calendar, and use the help log to explain one placement per sol.
- A tabletop group: set EXPEDITION to your club name, rename the roster in the log, and use the short sol loop as a between-sessions planning puzzle.
- A studio portfolio piece: set BRAND to your project name and TAGLINE to a dry field-log line, keeping the canvas crater and glass HUD as the visual anchor.
- A developer demo: set AUDIENCE to front-end developers, keep the keyboard cursor and tap-to-place, and ship the static build as a self-contained canvas game.

## FAQ

### How do the dust storms work in the Mars Colony Builder Game?
Dust storms in the Mars Colony Builder Game last four sols and begin on sols 8, 18, 30, 44, 60, and 78. During a storm, solar arrays produce 5 power instead of 10, and the canvas adds a flat dust veil with more drifting particles. The forecast in the HUD shows the next storm, so you can stock power before it arrives.

### How do colonists arrive and what makes the colony grow to 50?
In the Mars Colony Builder Game, two colonists arrive when power demand was met, every stock is at least 35, and a free bed exists, up to 50. Habitats sleep eight people each. If any stock reaches zero, the run ends. Growth depends on balancing oxygen, power, water, and morale together, not on placing habitats alone.

### Can I rename the colony, crater and expedition in the Mars Colony Builder Game?
Yes. The Mars Colony Builder Game exposes five variables: BRAND for the colony name, CRATER for the basin, EXPEDITION for the founding group, TAGLINE for the line under the title, and AUDIENCE for the help introduction. The prompt also rewrites the roster, log lines, and win and fail sentences so new names read naturally. The Saltmere demo shows a second set with every yield and the same storm calendar.

### What do I need to change to make the Mars Colony Builder Game my own?
Start with the five variables in the Mars Colony Builder Game: set BRAND, CRATER, EXPEDITION, TAGLINE, and AUDIENCE to your own names and players. If you keep the defaults, the roster stays Nia Calder, Omar Voss, and Priya Sen. For any other set, invent three new people and drop the default names so the help log and win copy match your colony.

### Does the Mars Colony Builder Game save progress and run without a server?
The Mars Colony Builder Game keeps the grid and stocks in localStorage, so Resume survey continues a run after a reload. It builds to static files with no backend, no external APIs, and no server code, so you can host it on any static host. The preview uses the same tick as Advance sol, so what you see before committing is what resolves.

### How do I build a mars colony builder game with AI?
Copy the prompt from this page or run npx vibefather add mars-colony-builder-game, replace [BRAND], [CRATER], [EXPEDITION] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Mars Colony Builder Game demo?
The Hearthline Crater Colony case was built by Grok 4.7 in Grok Build; the Saltmere Rim Outpost case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Mars Colony Builder Game template use?
Mars Colony Builder Game is a single-page site built with React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Mars Colony Builder Game template for a client or a business?
The Mars Colony Builder Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Mars Colony Builder Game template work on mobile?
Yes. Every Mars Colony Builder Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Mars Colony Builder Game on VibeFather](https://vibefather.ai/templates/mars-colony-builder-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
