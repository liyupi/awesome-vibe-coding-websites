# 3D Neon Breakout Arcade

> Five neon rounds on a glass court, with shatter, sparks, and three pickups.

<a href="https://vibefather.ai/templates/3d-neon-breakout-arcade?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-neon-breakout-arcade/84cd8953-5ff8-4b16-9fad-07b70e9b3a6c/webp.6b8934297b.webp" width="100%" alt="3D Neon Breakout Arcade — Neon Sci-Fi 3D Breakout Arena built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-neon-breakout-arcade?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

3D Neon Breakout Arcade is a single-screen browser game in a lit court. The first view is the arena: a dark gridded floor, a cool teal sky dome, a bar near the camera, and a field of neon bricks farther down the court. A solid start card sits at the side and names the cabinet, the venue, and the controls. The arena stays visible beside it.

The default cabinet is Lumen Dock, cabinet 4 on Glass Pier in Harborline, open from 4 pm to midnight. Attendant Nia Pell runs five authored rounds. Each round changes the map and the ball speed. The player has three sparks and a running score. Bricks burst into a short particle spray, and the ball keeps a small hot trail. Three falling pickups are placed in the maps. Scatter adds balls, Needle fires a straight beam from the bar, and Girder stretches the bar for a few seconds. A clear card follows a finished round. An out-of-sparks card follows a failed run.

The bar follows the mouse, the left and right arrow keys, or a finger drag. Click, tap, or Space sends the ball. Pause, a sound toggle, and a best points total stored in the browser belong to the cabinet. Hits are short synthesized tones. Reduced motion removes the spray, the trail, and camera shake. Every mesh is built in code.

Developers and indie hackers can ship the game as static files. Five variables rename the cabinet, the venue, the city, the attendant, and the line under the name. Round names and the hours line change with those values. Speeds, colors, maps, and pickup rules stay put. The second case is a campus rec-room cabinet on the same court. No server, account, or downloaded model is required.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript + Three.js + Vanilla CSS + three |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-neon-breakout-arcade?case=84cd8953-5ff8-4b16-9fad-07b70e9b3a6c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-neon-breakout-arcade/84cd8953-5ff8-4b16-9fad-07b70e9b3a6c/shot_desktop.bc48c4a174.webp" width="100%" alt="3D Neon Breakout Arcade — Pier arcade cabinet, built by Grok 4.7 in Grok Build"></a><br>
<b>Pier arcade cabinet</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/3d-neon-breakout-arcade?case=84cd8953-5ff8-4b16-9fad-07b70e9b3a6c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-neon-breakout-arcade?case=575ba76d-0854-424a-99dc-9830dc72d7d2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-neon-breakout-arcade/575ba76d-0854-424a-99dc-9830dc72d7d2/shot_desktop.ca9db98e36.webp" width="100%" alt="3D Neon Breakout Arcade — Campus rec cabinet, built by Grok 4.7 in Grok Build"></a><br>
<b>Campus rec cabinet</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/3d-neon-breakout-arcade?case=575ba76d-0854-424a-99dc-9830dc72d7d2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Cabinet name | Lumen Dock |
| `[VENUE]` | Venue | Glass Pier |
| `[CITY]` | City | Harborline |
| `[ATTENDANT]` | Attendant | Nia Pell |
| `[TAGLINE]` | Start deck | Keep the spark and clear the pier. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add 3d-neon-breakout-arcade` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A barcade or retro arcade: set BRAND to your cabinet name, VENUE and CITY to your location, and ATTENDANT to the staff member who runs the floor.
- A university rec center: use the campus rec cabinet setup, set VENUE to your building, and keep the five rounds as a drop-in game for students.
- An indie game portfolio: set BRAND to your studio name and TAGLINE to a line about the game, then link the cabinet from your project list.
- A festival or convention booth: rename VENUE and CITY to the event, set ATTENDANT to a host name, and run it full screen on a touch screen.

## FAQ

### How do I rename the arcade cabinet, venue and city in the 3D Neon Breakout Arcade template?
The 3D Neon Breakout Arcade template exposes five variables: BRAND, VENUE, CITY, ATTENDANT and TAGLINE. Set BRAND to your cabinet name, VENUE and CITY to the place beside it, and ATTENDANT to the person who runs it. Changing those four rewrites the attendant sentence, the hours line and the five round names to fit the new words. A TAGLINE-only change replaces the start deck and keeps the round names.

### What are Scatter, Needle and Girder in the 3D Neon Breakout Arcade game?
Scatter, Needle and Girder are the three falling pickups placed in the maps of the 3D Neon Breakout Arcade template. Scatter adds balls, Needle fires a straight beam from the bar, and Girder stretches the bar for a few seconds. They bob as they fall, and catching one changes how the round plays. Their rules and positions stay fixed when you change the cabinet name or city.

### Can I change the ball speed, brick maps or neon colors in the 3D Neon Breakout Arcade template?
The 3D Neon Breakout Arcade template keeps speeds, colors, maps and pickup rules fixed by design. The five authored rounds change the brick map and ball speed on their own, and the neon palette runs from teal and sea to ice, lime and hot orange. Renaming the cabinet, venue, city, attendant or tagline does not touch the court. Changing the actual game feel means editing the simulation and level data in the source, which comes with Pro.

### Does the 3D Neon Breakout Arcade template need a server or a downloaded 3D model?
No. The 3D Neon Breakout Arcade template builds to static files with no backend, no accounts and no external APIs. Every mesh is built in code with Three.js, so there are no downloaded models, photographs, HDRIs or brand marks. The only stored data is the best points total and the mute flag, kept in the browser. You can host the built files on any static host.

### What should I change first in the 3D Neon Breakout Arcade template?
Start with the five variables: set BRAND, VENUE, CITY and ATTENDANT to your own names, then rewrite TAGLINE as the one sentence under the cabinet name. That updates the start card, the document title, the hours line and the round names together. After that, review the copy on the start, clear and fail cards so they match the tone of your venue.

### How do I build a 3D neon breakout arcade with AI?
Copy the prompt from this page or run npx vibefather add 3d-neon-breakout-arcade, replace [BRAND], [VENUE], [CITY] and [ATTENDANT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Neon Breakout Arcade demo?
The Pier arcade cabinet case was built by Grok 4.7 in Grok Build; the Campus rec cabinet case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the 3D Neon Breakout Arcade template use?
3D Neon Breakout Arcade is a single-page site built with Plain HTML and Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the 3D Neon Breakout Arcade template for a client or a business?
The 3D Neon Breakout Arcade prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the 3D Neon Breakout Arcade template work on mobile?
Yes. Every 3D Neon Breakout Arcade build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [arcade one-shot 3D breakout](https://agentos.guide/grok-4-7-agent-os) by @JulianGoldieSEO
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [3D Neon Breakout Arcade on VibeFather](https://vibefather.ai/templates/3d-neon-breakout-arcade?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
