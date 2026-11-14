# Sci-Fi Arena Wave Survival Game

> A first-person yard shooter with one carbine, pickup cells, and waves of drones.

<a href="https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/sci-fi-arena-wave-survival-game/03c4ac56-fdda-4ae0-9105-2d2ba4e5e717/webp.2d812ce256.webp" width="100%" alt="Sci-Fi Arena Wave Survival Game — First-Person Arena Wave Shooter built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Sci-Fi Arena Wave Survival Game is a one-page browser game played in first person inside a closed industrial yard. Crates, low walls, and a gantry are built from boxes under four sodium lamps. The opening screen is a glass title card over that live view, with one hovering drone in sight and a short control legend. The start click begins the round and asks for pointer lock. If the browser or a sandboxed frame refuses the lock, the refusal is caught and looking switches to dragging the view and the arrow keys.

The player stays on foot with a single magazine-fed carbine. The magazine is short, an empty click means it is dry, and a reload takes under a second. Every shot uses the same cyan tracer. Enemy bolts empty a shield bar before they touch health, and neither bar refills by itself. A warm floor cell restores health, a cool floor cell restores shield, and a taken cell comes back on a timer.

Drones are boxy and hovering. They arrive in numbered waves, strafe, and fire slow bolts. Each wave adds a few drones and a little speed, then leaves a short breather. There is no last wave. A destroyed drone breaks into sparks, with no blood, people, or creatures. A dark glass HUD shows ammo, both bars, the wave number, and how many drones have dropped. At zero health a retry card shows the wave reached and the drones dropped.

Phones use a left move stick, a right look stick, and fire and reload buttons. Narrow screens keep fewer drones aloft, and reduced motion removes head bob and shake. Five names let a developer or student reuse the lamps, bars, and wave loop as a static demo with no server.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + TypeScript + three.js + Tailwind CSS 3.4 + three |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?case=03c4ac56-fdda-4ae0-9105-2d2ba4e5e717&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sci-fi-arena-wave-survival-game/03c4ac56-fdda-4ae0-9105-2d2ba4e5e717/shot_desktop.864294ab4c.webp" width="100%" alt="Sci-Fi Arena Wave Survival Game — Sodium yard range, built by Grok 4.7 in Grok Build"></a><br>
<b>Sodium yard range</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?case=03c4ac56-fdda-4ae0-9105-2d2ba4e5e717&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?case=71faaa0e-9240-4b3c-a04d-6251a8fcac21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sci-fi-arena-wave-survival-game/71faaa0e-9240-4b3c-a04d-6251a8fcac21/shot_desktop.85efa231e1.webp" width="100%" alt="Sci-Fi Arena Wave Survival Game — Brick kiln range, built by Grok 4.7 in Grok Build"></a><br>
<b>Brick kiln range</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?case=71faaa0e-9240-4b3c-a04d-6251a8fcac21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game title | Lampwright |
| `[OPERATOR]` | Range operator | Hale Relay Works |
| `[ARENA]` | Yard name | Sodium Court |
| `[WEAPON]` | Carbine name | Ash Spool |
| `[DRONE]` | Drone name | Wick |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add sci-fi-arena-wave-survival-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A game design student: set BRAND and ARENA to your coursework project, rename DRONE to your enemy type, and keep the wave loop as the playable build.
- A small studio's internal test range: set OPERATOR to the studio name, label WEAPON as your prototype carbine, and use the retry card to show wave reached.
- A classroom WebGL exercise: keep the default yard, change the five names to your class theme, and use the static build to teach wave spawning.
- A tabletop or LARP group: set ARENA to your event arena and DRONE to the scenario's enemy, then share the static build as a between-session mini game.

## FAQ

### What happens if a browser blocks pointer lock in the Sci-Fi Arena Wave Survival Game?
The Sci-Fi Arena Wave Survival Game catches the refusal and switches to drag-look plus arrow keys, so the round still plays inside sandboxed frames. The start click requests pointer lock; if the browser denies it, looking moves to dragging the view and the arrow keys. Shooting, reloading, collecting cells, losing and retrying all stay available, and no console error appears.

### How do the health and shield cells work in the Sci-Fi Arena Wave Survival Game?
Warm floor cells restore health and cool floor cells restore shield, and neither bar refills on its own. Enemy bolts empty the shield bar before they touch health. A taken cell returns on a timer, so the yard keeps offering pickups. Both bars sit in the dark glass HUD beside ammo, the wave number and the drone drop count.

### Is there a final wave or a win screen in the Sci-Fi Arena Wave Survival Game?
There is no last wave. Drones arrive in numbered waves, each wave adds a few drones and a little speed, then leaves a short breather before the next. A round ends only when health reaches zero, and the retry card shows the wave reached and how many drones dropped. The score lives in memory and resets only when Retry runs.

### How do I reskin the Sci-Fi Arena Wave Survival Game with my own names?
Five variables carry the naming: BRAND is the game title, OPERATOR the range operator, ARENA the yard name, WEAPON the carbine label above ammo, and DRONE the singular enemy name. Change them in the content file and rewrite the strings that name the range, keeping every number, layout and mechanic. The weapon stays a 12-round magazine carbine whatever WEAPON says.

### Can I reuse the Sci-Fi Arena Wave Survival Game as a static demo or student project?
The Sci-Fi Arena Wave Survival Game builds to static files with no backend, server code or external APIs, so a developer or student can host it anywhere and reuse the lamps, bars and wave loop as a demo. The prompt and DESIGN.md are free for personal, non-commercial use; commercial or client work needs Pro, which also brings the source code.

### How do I build a Sci-Fi arena wave survival game with AI?
Copy the prompt from this page or run npx vibefather add sci-fi-arena-wave-survival-game, replace [BRAND], [OPERATOR], [ARENA] and [WEAPON] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Sci-Fi Arena Wave Survival Game demo?
The Sodium yard range case was built by Grok 4.7 in Grok Build; the Brick kiln range case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Sci-Fi Arena Wave Survival Game template use?
Sci-Fi Arena Wave Survival Game is a single-page site built with Three.js and Tailwind CSS, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Sci-Fi Arena Wave Survival Game template for a client or a business?
The Sci-Fi Arena Wave Survival Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Sci-Fi Arena Wave Survival Game template work on mobile?
Yes. Every Sci-Fi Arena Wave Survival Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Sci-Fi Arena Wave Survival Game on VibeFather](https://vibefather.ai/templates/sci-fi-arena-wave-survival-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
