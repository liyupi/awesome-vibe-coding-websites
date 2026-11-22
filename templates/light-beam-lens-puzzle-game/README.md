# Light Beam Lens Puzzle Game

> A calm 3D optics puzzle with twelve handcrafted levels, glowing crystals, and thoughtful controls.

<a href="https://vibefather.ai/templates/light-beam-lens-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/light-beam-lens-puzzle-game/3258c5c0-5ac5-4839-b604-2aacb16b271e/webp.196f14119b.webp" width="100%" alt="Light Beam Lens Puzzle Game — 3D Crystal Cave Light Puzzle Game built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/light-beam-lens-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Light Beam Lens Puzzle Game is a complete browser-based 3D logic game for people who prefer thoughtful puzzles to timers and pressure. The first screen is the game itself: a faceted crystal chamber surrounds an isometric board, a live beam responds to every rotation, and a compact control rail keeps the current objective, move count, undo, and restart close at hand. The default world, brand, story fragments, and level names are invented.

The puzzle system uses deterministic grid optics rather than a physics simulation. Rising and falling mirrors redirect the beam, aligned lenses transmit it, and later splitter lenses create branches that must energize several receivers at once. Twelve authored levels introduce these ideas in sequence, with exact layouts, solution rotations, target move counts, and no random generation. Progress and best scores stay in local storage. Players can choose any level, undo one rotation at a time, restart cleanly, or use keyboard and touch controls.

The visual direction pairs deep blue-black stone with mint-white light, translucent lenses, and restrained cyan highlights. An orthographic Three.js scene uses procedural geometry, instanced cave crystals, soft fog, and layered beam meshes rather than downloaded models or textures. Space Grotesk and IBM Plex Mono keep the interface crisp without competing with the board. Motion is limited to useful rotation, beam, hover, and completion feedback, with reduced-motion and mobile quality adjustments built in.

Adapt the four variables to rename the game, replace its world, change the audience, and rewrite the tagline. All labels, level names, instructions, and interface copy belong in one content file, while the authored puzzle data remains separate and testable. This template suits indie game experiments, interactive portfolios, educational optics demos, and anyone who needs a polished static game without accounts, servers, remote assets, or a large build.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Aurora](../../styles/aurora.md), [Glass](../../styles/glass.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + Three.js + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/light-beam-lens-puzzle-game?case=3258c5c0-5ac5-4839-b604-2aacb16b271e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/light-beam-lens-puzzle-game/3258c5c0-5ac5-4839-b604-2aacb16b271e/shot_desktop.6005e92553.webp" width="100%" alt="Light Beam Lens Puzzle Game — Crystal cave optics, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Crystal cave optics</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/light-beam-lens-puzzle-game?case=3258c5c0-5ac5-4839-b604-2aacb16b271e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/light-beam-lens-puzzle-game?case=df96bbfb-78ca-4475-aece-da2093871b69&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/light-beam-lens-puzzle-game/df96bbfb-78ca-4475-aece-da2093871b69/shot_desktop.017f681f46.webp" width="100%" alt="Light Beam Lens Puzzle Game — Moonlit glass desert, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Moonlit glass desert</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/light-beam-lens-puzzle-game?case=df96bbfb-78ca-4475-aece-da2093871b69&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game name | Lumenwild |
| `[WORLD]` | World name | the Glassroot Caverns |
| `[AUDIENCE]` | Player audience | players who enjoy calm logic puzzles |
| `[TAGLINE]` | Game tagline | Turn the light. Wake the quiet. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add light-beam-lens-puzzle-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A physics or optics teacher: set BRAND to your course name, WORLD to a classroom lab, and rewrite the help text to explain reflection and refraction before each level.
- An indie game portfolio: keep the crystal cave, rename the levels after your other projects, and point the footer link at your own site.
- A museum interactive: set AUDIENCE to gallery visitors, shorten the instructions, and add a level-select label naming the exhibit.
- A puzzle newsletter giveaway: set BRAND to the publication, WORLD to a themed setting, and use the tagline to tease the next issue.

## FAQ

### How do I change the game name, world and tagline in the Light Beam Lens Puzzle Game template?
The Light Beam Lens Puzzle Game template exposes four variables: BRAND sets the game name, WORLD names the crystalline setting used in level-select and help copy, TAGLINE is the short line under the title and on the completion panel, and AUDIENCE describes the players in the help introduction. All four live in one content file alongside every label, level name and instruction, so renaming the game means editing those values and rewriting any world-specific wording.

### Are the twelve levels in the Light Beam Lens Puzzle Game random or handcrafted?
The twelve levels in the Light Beam Lens Puzzle Game are authored by hand, not generated. Each one has a fixed layout, defined solution rotations and a target move count, and the beam is traced deterministically from the current piece orientations rather than simulated with physics. Later levels introduce splitter lenses that branch the beam toward several receivers at once, so the difficulty climbs in a deliberate sequence.

### Does the Light Beam Lens Puzzle Game save progress without accounts or a server?
The Light Beam Lens Puzzle Game keeps solved status, best move counts, sound preference and the current level in local storage on the player's device, keyed to a slug of the brand name. There are no accounts, no backend and no external APIs. All twelve levels are selectable from the start, and the build outputs static files, so it can be hosted anywhere that serves a folder.

### How do I put my own puzzle layouts into the Light Beam Lens Puzzle Game?
Puzzle layouts in the Light Beam Lens Puzzle Game sit in a separate level data module, apart from the interface copy, so a developer can edit coordinates, piece orientations and target move counts without touching the content file. Keep the beam tracer calculating paths from current orientations, then verify each authored solution actually reaches every receiver from the starting state before publishing.

### What do players actually control in the Light Beam Lens Puzzle Game?
Players rotate rising and falling mirrors, aligned lenses and splitter lenses a quarter turn at a time to route a glowing beam into ring-shaped receivers. The control rail shows the current objective, move count and target, with undo and restart beside it. Keyboard and touch controls both work, every pointer action has a DOM alternative, and reduced-motion settings make rotations and beam changes instant.

### How do I build a light beam lens puzzle game with AI?
Copy the prompt from this page or run npx vibefather add light-beam-lens-puzzle-game, replace [BRAND], [WORLD], [AUDIENCE] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Light Beam Lens Puzzle Game demo?
The Crystal cave optics case was built by Kimi K3.1 Pro in Kimi Code; the Moonlit glass desert case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Light Beam Lens Puzzle Game template use?
Light Beam Lens Puzzle Game is a single-page site built with Three.js and React, with generative / canvas, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Light Beam Lens Puzzle Game template for a client or a business?
The Light Beam Lens Puzzle Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Light Beam Lens Puzzle Game template work on mobile?
Yes. Every Light Beam Lens Puzzle Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [黄玉秘藏 3D Interactive Game](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Light Beam Lens Puzzle Game on VibeFather](https://vibefather.ai/templates/light-beam-lens-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
