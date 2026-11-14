# Space Dogfight Arcade Game

> Steer a low-poly fighter, lock drones, and last as long as the shield holds.

<a href="https://vibefather.ai/templates/space-dogfight-arcade-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/space-dogfight-arcade-game/7041fb7e-09fa-4573-91c8-4fb8666e18d7/webp.99dfd0f3e2.webp" width="100%" alt="Space Dogfight Arcade Game — Low-Poly Asteroid Dogfight Arcade built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/space-dogfight-arcade-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Space Dogfight Arcade Game is a single-page browser flight game in a closed asteroid field. The first screen is the field itself: a low-poly fighter already sits in a third-person chase view, with a dark glass card beside it naming the squadron, the sector, and the controls. Launching starts the patrol. The player steers, fires pale ice bolts, holds a lock until one homing missile leaves, boosts on a visible cooldown, and rolls for a short shield shimmer. Drones arrive in numbered waves that add a few craft and a little speed, with a pause between waves. At zero shields the run ends, and the retry card shows the wave reached.

The field is near-black, the rock is flat-shaded cold gray, and amber is reserved for the lock ring, the missile, and the boost cue. The fighter is a stubby code-built dart with one spine fin and two fixed canards. Drones are diamond hulls with a thin equatorial ring. A glass overlay carries a regenerating shield bar, a circular radar with the player at the center, and the wave counter. Destroyed craft break into short ice and amber squares. Desktop uses the pointer and the keyboard. A phone uses a stick plus boost, roll, fire, and lock. Small screens draw fewer asteroids and particles. Reduced motion drops camera shake and shortens the bursts. Tones are synthesized after the launch click, and every mesh is drawn in code.

Developers and indie hackers can change six variables: squadron, call sign, sector, drone name, craft name, and who the patrol is for. On-screen sentences follow those words. Speeds, colors, wave sizes, and the HUD stay put, so a second naming keeps the same patrol.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Glass](../../styles/glass.md), [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + TypeScript + three.js + Tailwind CSS 3.4 + three |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/space-dogfight-arcade-game?case=7041fb7e-09fa-4573-91c8-4fb8666e18d7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/space-dogfight-arcade-game/7041fb7e-09fa-4573-91c8-4fb8666e18d7/shot_desktop.c9b20b9cd3.webp" width="100%" alt="Space Dogfight Arcade Game — Cinder Patrol squadron, built by Grok 4.7 in Grok Build"></a><br>
<b>Cinder Patrol squadron</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/space-dogfight-arcade-game?case=7041fb7e-09fa-4573-91c8-4fb8666e18d7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/space-dogfight-arcade-game?case=16f8e337-cb91-4705-8c22-69531b15aff5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/space-dogfight-arcade-game/16f8e337-cb91-4705-8c22-69531b15aff5/shot_desktop.16abddf626.webp" width="100%" alt="Space Dogfight Arcade Game — Saltglass Wing patrol, built by Grok 4.7 in Grok Build"></a><br>
<b>Saltglass Wing patrol</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/space-dogfight-arcade-game?case=16f8e337-cb91-4705-8c22-69531b15aff5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Squadron name | Cinder Patrol |
| `[CALLSIGN]` | Pilot call sign | Kestrel |
| `[SECTOR]` | Patrol sector | Harrow Reach |
| `[FOE]` | Drone name | Glass Moths |
| `[CRAFT]` | Fighter type | Lark |
| `[AUDIENCE]` | Who it is for | A short patrol for night-shift pilots. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add space-dogfight-arcade-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A studio launching an internal game jam: set BRAND to the team name and SECTOR to the office wing, then keep the default FOE for a light, playable break page.
- An indie developer shipping a browser demo: set CRAFT to your ship name and CALLSIGN to the player handle, and rewrite AUDIENCE to name the demo's pitch.
- A tabletop or board game club: set FOE to the faction the club plays against and SECTOR to the campaign region, then point the retry card at the club's next session.
- A personal portfolio for a game developer: set BRAND to your handle and AUDIENCE to a one-line role, and keep the wave counter as a live playable sample.

## FAQ

### What can I rename in the Space Dogfight Arcade Game template without breaking the game?
The Space Dogfight Arcade Game template exposes six variables: BRAND for the squadron name, CALLSIGN for the pilot, SECTOR for the patrol sector, FOE for the drone name, CRAFT for the fighter type, and AUDIENCE for the line under the deck. On-screen sentences rewrite themselves from those words, while speeds, colors, wave sizes, and the HUD stay exactly as they are.

### How do the waves and the shield work in the Space Dogfight Arcade Game?
Waves in the Space Dogfight Arcade Game are numbered and grow from a base count up to nine drones, adding a little speed each time with a short breather between them. The shield starts full, regenerates after a delay when you stop taking hits, and the run ends only at zero shields, where the retry card shows the wave you reached.

### What controls does the Space Dogfight Arcade Game use on desktop and on a phone?
Desktop play in the Space Dogfight Arcade Game uses the pointer and the keyboard to steer, fire bolts, hold a lock for one homing missile, boost on a cooldown, and roll for a shield shimmer. A phone swaps in a thumb stick plus boost, roll, fire, and lock buttons, and small screens draw fewer asteroids and particles to keep the field readable.

### How do I host a Space Dogfight Arcade Game built from this prompt?
The Space Dogfight Arcade Game builds to static files with no backend, no server code, and no external APIs, so any static host serves it. Run the build, then upload the output folder. The renderer clears to the near-black field color and the page does not scroll, so there is nothing server-side to configure beyond serving the files.

### Is the Space Dogfight Arcade Game prompt free to use for my own project?
The Space Dogfight Arcade Game is a free template, and free prompts and every DESIGN.md are licensed for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also covers the source code of the demos. The brief, stack, and variables are shown publicly on the template page.

### How do I build a space dogfight arcade game with AI?
Copy the prompt from this page or run npx vibefather add space-dogfight-arcade-game, replace [BRAND], [CALLSIGN], [SECTOR] and [FOE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Space Dogfight Arcade Game demo?
The Cinder Patrol squadron case was built by Grok 4.7 in Grok Build; the Saltglass Wing patrol case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Space Dogfight Arcade Game template use?
Space Dogfight Arcade Game is a single-page site built with Plain HTML, Three.js and Tailwind CSS, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Space Dogfight Arcade Game template for a client or a business?
The Space Dogfight Arcade Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Space Dogfight Arcade Game template work on mobile?
Yes. Every Space Dogfight Arcade Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Space Dogfight Arcade Game on VibeFather](https://vibefather.ai/templates/space-dogfight-arcade-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
