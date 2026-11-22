# Neon Snake 3D Game

> Steer a glowing snake on a dark grid, and take beads that pulse with a short beat.

<a href="https://vibefather.ai/templates/neon-snake-3d-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/neon-snake-3d-game/bcc699f2-1ce2-4544-acf2-b5b757f140ae/webp.8ddca7d1a1.webp" width="100%" alt="Neon Snake 3D Game — Snake Game on a Glowing 3D Grid built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/neon-snake-3d-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Neon Snake 3D Game is a single-page browser game. The first screen is a dark 16 by 16 grid, with a four-part sea-glass snake already posed and one copper bead ahead of it. A frosted card sits left of that view on a desk, and along the bottom on a phone, leaving the grid visible. Every segment glides from cell to cell together. The camera stays south of the head, so arrow keys stay tied to the screen.

The default game is Lumen Coil, a cabinet from Northglass Hall at 18 Marrow Lane in invented Port Elling. Players collect ion beads on the Relay Floor. Each bead adds a segment and scores 10 times the current speed step, and the step climbs from 1 to 5 as the line grows. The HUD shows score, length, step, and the floor rule. Wrap brings the snake back on the far side of an open edge. Walls draws a low rail, and touching it ends the run, as does crossing the line. Each rule keeps a best score and five sets of initials in the browser.

The bead swells on a loop at 96 beats per minute, synthesized in Web Audio. Arrow keys and WASD steer at a desk. A phone uses a swipe and a four-button pad. Pause and game over are their own cards. Reduced motion holds the bead steady, stops the title camera's small drift, and slows the follow.

Developers and indie hackers can ship it as static files and rename it from one content file. Six variables cover the game, the hall, the pickup, the floor, the cabinet line, and the opening sentence. Grid size, colors, speeds, and controls stay fixed. Fern Current, a night conservatory from Glasshouse After Hours, is the second set of names.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Glass](../../styles/glass.md), [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/neon-snake-3d-game?case=bcc699f2-1ce2-4544-acf2-b5b757f140ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/neon-snake-3d-game/bcc699f2-1ce2-4544-acf2-b5b757f140ae/shot_desktop.4d791b0e09.webp" width="100%" alt="Neon Snake 3D Game — Night hall snake, built by Grok 4.7 in Grok Build"></a><br>
<b>Night hall snake</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/neon-snake-3d-game?case=bcc699f2-1ce2-4544-acf2-b5b757f140ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/neon-snake-3d-game?case=fd018c27-8594-4624-964f-e5137a02f708&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/neon-snake-3d-game/fd018c27-8594-4624-964f-e5137a02f708/shot_desktop.c9e77d9aaf.webp" width="100%" alt="Neon Snake 3D Game — Night conservatory snake, built by Grok 4.7 in Grok Build"></a><br>
<b>Night conservatory snake</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/neon-snake-3d-game?case=fd018c27-8594-4624-964f-e5137a02f708&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game name | Lumen Coil |
| `[STUDIO]` | Hall name | Northglass Hall |
| `[PICKUP]` | Pickup | ion beads |
| `[ARENA]` | Floor name | Relay Floor |
| `[PLACE]` | Cabinet line | Cabinet 4, 18 Marrow Lane, Port Elling, 6pm–1am |
| `[TAGLINE]` | Opening sentence | Steer the sea-glass line across the Relay Floor. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add neon-snake-3d-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An arcade cabinet at a retro bar: set BRAND to the cabinet name, STUDIO to the venue, and PLACE to the address and hours so the start card reads like a real machine.
- A classroom coding demo: keep the Lumen Coil names, set ARENA to a lesson floor name, and use the Wrap rule to show how a grid game handles edges.
- A studio portfolio piece: set STUDIO to your studio name, PICKUP to a themed collectible, and rewrite TAGLINE to describe the line and floor in your own words.
- A party game for a friend group: set BRAND and PLACE to an invented hall and address, then let players enter initials on the game over card for a shared best score.

## FAQ

### How do I rename the game and change the pickup to match my own project?
The Neon Snake 3D Game template keeps every player-facing name in one content file with six variables: BRAND for the game name, STUDIO for the hall, PICKUP for the collectible, ARENA for the floor, PLACE for the cabinet line, and TAGLINE for the opening sentence. Change those values and rewrite the collect sentence and pause line so they name your floor and pickup. The grid, colors, speeds and controls stay fixed.

### What are the two floor rules in the Neon Snake 3D Game and how do best scores work?
The Neon Snake 3D Game template ships two floor rules. Wrap brings the snake back on the far side of an open edge, while Walls draws a low rail and touching it ends the run, as does crossing the line. Each rule keeps its own best score and five sets of initials stored in the browser under a key built from your game name, so renaming the game gives you a fresh score table.

### Can I host the Neon Snake 3D Game as static files without a backend?
Yes. The Neon Snake 3D Game template builds to static files with no backend, no server code and no external APIs, so you can host the output on any static host. Scores and mute state are kept in the browser rather than a database, and the whole game is one page. Developers and indie hackers can ship it as-is after renaming the variables.

### How does the Neon Snake 3D Game handle controls on a phone versus a desktop?
Arrow keys and WASD steer the Neon Snake 3D Game at a desk, while a phone uses a swipe and a four-button pad. The frosted card sits left of the grid on a desk and along the bottom on a phone, leaving the grid visible. The camera stays south of the head so arrow keys stay tied to the screen, and the center of the play view stays clear of the pad.

### What should I change first when adapting the Neon Snake 3D Game for a different audience?
Start with the six variables in the content file: set BRAND, STUDIO, PICKUP, ARENA, PLACE and TAGLINE to your own names, then rewrite the start card copy, pause line and game over text to match. If your floor or pickup changes, rewrite TAGLINE so it does not name the old ones. Grid size, colors, speeds and controls are fixed, so the game still plays the same way.

### How do I build a neon snake 3D game with AI?
Copy the prompt from this page or run npx vibefather add neon-snake-3d-game, replace [BRAND], [STUDIO], [PICKUP] and [ARENA] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Neon Snake 3D Game demo?
The Night hall snake case was built by Grok 4.7 in Grok Build; the Night conservatory snake case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Neon Snake 3D Game template use?
Neon Snake 3D Game is a single-page site built with Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Neon Snake 3D Game template for a client or a business?
The Neon Snake 3D Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Neon Snake 3D Game template work on mobile?
Yes. Every Neon Snake 3D Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Grok Build neon snake demo](https://agentos.guide/grok-4-7-agent-os)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Neon Snake 3D Game on VibeFather](https://vibefather.ai/templates/neon-snake-3d-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
