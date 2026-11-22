# Dusk Track Racing Game

> Chase a banked dusk circuit, fill a drift boost, and beat the ghost of your best lap.

<a href="https://vibefather.ai/templates/dusk-track-racing-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/dusk-track-racing-game/78a80404-72e7-4bfe-97cf-4cef2f809eb8/webp.2f53615589.webp" width="100%" alt="Dusk Track Racing Game — Golden-Hour Banked Circuit Racer built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/dusk-track-racing-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Dusk Track Racing Game is a browser race on a single page. The first screen is the circuit: a low-poly car on a banked ribbon, a low sun, long shadows, and a sky that runs from warm copper at the horizon to deep blue overhead. A side panel on desktop, or a bottom sheet on a phone, carries the club name and the start button. The car and the track stay in view.

The car is a closed wedge of boxes, cylinders, and a short cabin. It is built in code, not loaded from a model, and it is not a known road car. The loop measures 1000 meters and includes a banked sweeper, a hairpin, four checkpoint gates, and edge obstacles: hay bales, tire stacks, and cones. Drift fills a boost meter that spends as a short burst of speed. Three rivals hold fixed lines. A translucent ghost repeats the best lap saved in this browser. Place, lap, time, and speed sit in the HUD, and a circular minimap shows the ribbon and the field. Off the asphalt the car slows, then returns to the last gate instead of stalling. Three laps end on a podium.

The keyboard covers desktop play. Narrow screens add a steer pad and gas, brake, and drift buttons, placed clear of the minimap. Reduced motion keeps the race and removes camera roll, dust, and extra pulses. Optional sound stays off until switched on.

Developers and indie hackers can reskin the heat from one content file: club, ridge, circuit, car, driver, and the three rivals. Those values rewrite the start panel, the trackside sign, the podium, and the saved-lap key. The ribbon, gates, speeds, and HUD stay the same, so another invented club can run the same race. Times stay in the browser.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dusk-track-racing-game?case=78a80404-72e7-4bfe-97cf-4cef2f809eb8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dusk-track-racing-game/78a80404-72e7-4bfe-97cf-4cef2f809eb8/shot_desktop.32e27456f4.webp" width="100%" alt="Dusk Track Racing Game — Wickpenny dusk heat, built by Grok 4.7 in Grok Build"></a><br>
<b>Wickpenny dusk heat</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/dusk-track-racing-game?case=78a80404-72e7-4bfe-97cf-4cef2f809eb8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dusk-track-racing-game?case=63b071cd-e5d6-42c5-ac76-8a9ecd270853&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dusk-track-racing-game/63b071cd-e5d6-42c5-ac76-8a9ecd270853/shot_desktop.2328ff1986.webp" width="100%" alt="Dusk Track Racing Game — Bramble wick heat, built by Grok 4.7 in Grok Build"></a><br>
<b>Bramble wick heat</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/dusk-track-racing-game?case=63b071cd-e5d6-42c5-ac76-8a9ecd270853&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Racing club | Pennyglass |
| `[PLACE]` | Ridge name | Wickpenny |
| `[TRACK]` | Circuit name | Barleycut |
| `[CAR]` | Car name | Skiff 4 |
| `[DRIVER]` | Player name | Nell Harp |
| `[RIVALS]` | Three rivals | Nia Pell, Omar Voss, Bess Calder |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add dusk-track-racing-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local karting club: set BRAND to the club, PLACE to the town and TRACK to the circuit, then swap DRIVER and RIVALS for member names on the podium.
- A studio portfolio piece: keep the dusk circuit, set BRAND to your studio name and use CAR and DRIVER to credit the project and the person who built it.
- A birthday or party game: name BRAND after the host, set RIVALS to the guests and keep the three-lap heat as the main event on a laptop or phone.
- A game jam entry: keep the banked ribbon and drift boost, rename TRACK and the three rivals to fit your theme, and publish the static build as the playable demo.

## FAQ

### What can I change in the Dusk Track Racing Game without touching the 3D code?
The Dusk Track Racing Game template keeps every name and label in one content file. Set BRAND to your club, PLACE to the ridge, TRACK to the circuit, CAR to the car name, DRIVER to the player and RIVALS to three comma-separated names. Those values rewrite the start panel, trackside sign, podium and the saved-lap key, while the ribbon, gates, speeds and HUD stay the same.

### How does the ghost lap and best-lap saving work in the Dusk Track Racing Game?
The Dusk Track Racing Game saves your best lap in the browser and replays it as a translucent ghost on later runs. The save key is built from the lowercased brand and track names, so changing BRAND or TRACK starts a fresh best lap and ghost. Times never leave the browser; there is no account or backend.

### How do I change the three rivals and their colors in the Dusk Track Racing Game?
Edit the RIVALS value in the content file as three comma-separated names, in teal, gold and dusk-blue order. The Dusk Track Racing Game keeps rival colors and numbers fixed for every variable set, so the names change but the three cars keep their assigned colors. The rivals hold fixed lines around the banked circuit.

### Is the Dusk Track Racing Game free to use, and can I ship it as my own project?
The Dusk Track Racing Game is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work and shipping it as your own product need Pro, which also includes the source code of the demos. The page shows the brief, stack and variables publicly.

### What happens when I drive off the asphalt in the Dusk Track Racing Game?
Off the asphalt the car slows, then returns to the last checkpoint gate instead of stalling. The Dusk Track Racing Game loop is 1000 meters with a banked sweeper, a hairpin, four gates and edge obstacles like hay bales, tire stacks and cones. Three laps end on a podium, and the HUD shows place, lap, time and speed.

### How do I build a dusk track racing game with AI?
Copy the prompt from this page or run npx vibefather add dusk-track-racing-game, replace [BRAND], [PLACE], [TRACK] and [CAR] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Dusk Track Racing Game demo?
The Wickpenny dusk heat case was built by Grok 4.7 in Grok Build; the Bramble wick heat case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Dusk Track Racing Game template use?
Dusk Track Racing Game is a single-page site built with Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Dusk Track Racing Game template for a client or a business?
The Dusk Track Racing Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Dusk Track Racing Game template work on mobile?
Yes. Every Dusk Track Racing Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Grok 4.7 In The Agent OS: 20 Games, One Shot, Real Scores](https://agentos.guide/grok-4-7-agent-os) by @JulianGoldieSEO
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Dusk Track Racing Game on VibeFather](https://vibefather.ai/templates/dusk-track-racing-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
