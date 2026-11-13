# Open World City Driving Game <sup>PRO</sup>

> Walk a dusk grid, take a pool car, and finish a porch run or a lap as night falls.

<a href="https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/open-world-city-driving-game/b2ab1279-031c-4e65-8e2f-d92edd683a4b/webp.fddf416309.webp" width="100%" alt="Open World City Driving Game — Low-Poly Dusk City Driving Game built by Grok 4.7"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Open World City Driving Game is a single-page browser game on a small city grid at dusk. The first screen is the district itself: low-poly blocks, a pocket park, six parked pool cars, and traffic already moving, with a title card beside the view. The player then walks the sidewalks, sits in any club car, and drives with simple arcade steering. Those cars belong to an invented neighborhood car club. The errands are porch deliveries and a friendly lap.

The default world is Amber Row Club in Reed Wharf. Members borrow mint-striped pool cars, carry bakery boxes from the club to three shops, or run the Lantern Lap: six gates around the outer streets, par 52 seconds. A north-up minimap, an evening clock, and street lamps keep the grid readable. Across about two and a half minutes the sky eases from lilac dusk to deep night and more windows turn on. Road shapes stay put when the names change.

Controls work on a desk and a phone. The keyboard walks, drives, enters and leaves cars, and uses doors. A phone uses a left stick plus gas, brake, and action buttons that can be held together. Pause, help, a sound toggle that starts muted, and saved bests are part of the loop. Reduced motion stops the title camera's drift and extra pulses. Driving itself stays direct.

Developers and indie hackers can ship the game as static files. Five variables rename the club, the district, the cargo, the race, and the tagline. Shop signs, street labels, and small props follow that text. The roads, car handling, missions, and lighting stay fixed. A night flower market is the second case. Nothing here needs a server, an account, or a downloaded city model.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Grok 4.7](../../models/grok-4-7.md) in Grok Build |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/open-world-city-driving-game?case=b2ab1279-031c-4e65-8e2f-d92edd683a4b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/open-world-city-driving-game/b2ab1279-031c-4e65-8e2f-d92edd683a4b/shot_desktop.bd9df1edeb.webp" width="100%" alt="Open World City Driving Game — Reed Wharf Car Club, built by Grok 4.7 in Grok Build"></a><br>
<b>Reed Wharf Car Club</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/open-world-city-driving-game?case=b2ab1279-031c-4e65-8e2f-d92edd683a4b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/open-world-city-driving-game?case=69acc56b-13c7-4637-aa12-27ed6565399d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/open-world-city-driving-game/69acc56b-13c7-4637-aa12-27ed6565399d/shot_desktop.2deeeb2cc2.webp" width="100%" alt="Open World City Driving Game — Night flower market, built by Grok 4.7 in Grok Build"></a><br>
<b>Night flower market</b><br>
<sub>Built by <b>Grok 4.7</b> in Grok Build · <a href="https://vibefather.ai/templates/open-world-city-driving-game?case=69acc56b-13c7-4637-aa12-27ed6565399d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Club name | Amber Row Club |
| `[DISTRICT]` | District | Reed Wharf |
| `[ERRAND]` | Cargo | bakery boxes |
| `[RACE_NAME]` | Lap name | Lantern Lap |
| `[TAGLINE]` | Title deck | Walk the blocks before the lamps take over. |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local car club: set BRAND to your club name, DISTRICT to your neighborhood, and swap the porch cargo for parts or coffee runs between member shops.
- A night market organizer: rename the club to your market, set ERRAND to flower crates and RACE_NAME to a market loop, then rewrite the shop signs to match your stalls.
- An indie game portfolio piece: keep the Amber Row Club world, change TAGLINE to your studio line, and use the saved lap bests as a replayable demo on your site.
- A city tourism board: set DISTRICT to a real-feeling downtown, rename the errand to local deliveries, and relabel the six gates as landmark stops along the lap.

## FAQ

### What is there to actually do in the Open World City Driving Game?
The Open World City Driving Game gives you one evening in a small city grid. You walk the sidewalks, borrow any mint-striped pool car, and choose between a porch run that carries bakery boxes from the club to three shops or the Lantern Lap, a six-gate time trial around the outer streets with a par of 52 seconds. A minimap, evening clock and saved bests keep the loop going.

### How do I rename the club, district, cargo and race in the Open World City Driving Game?
The Open World City Driving Game exposes five variables: BRAND for the club name, DISTRICT for the neighborhood, ERRAND for the porch-run cargo, RACE_NAME for the lap, and TAGLINE for the title deck. Change them in the content module and the title card, clubhouse sign, shop names, street labels, awning props and board sentences follow. Roads, car handling, gate positions and lighting stay fixed.

### Can I use the Open World City Driving Game for a client project or a commercial site?
Commercial and client use of the Open World City Driving Game requires Pro. The template is a Pro template, so its brief, stack and variables are public while the full prompt and the demo source code come with Pro membership. Free prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### How does the Open World City Driving Game control on a phone?
The Open World City Driving Game uses a left stick plus gas, brake and action buttons on a phone, and those buttons can be held together. The keyboard walks, drives, enters and leaves cars, and opens doors on a desk. Pause, help and a sound toggle that starts muted are always available, and reduced motion stops the title camera drift and extra pulses while driving stays direct.

### What do I need to host the Open World City Driving Game, and what changes over the evening?
The Open World City Driving Game builds to static files with no server, account or downloaded city model, so any static host works. During about two and a half minutes of play the sky eases from lilac dusk to deep night and more windows turn on. Saved porch bests, best lap seconds and mute are stored locally in the browser, never sent to a backend.

### How do I build an open world city driving game with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add open-world-city-driving-game, replace [BRAND], [DISTRICT], [ERRAND] and [RACE_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Open World City Driving Game demo?
The Reed Wharf Car Club case was built by Grok 4.7 in Grok Build; the Night flower market case was built by Grok 4.7 in Grok Build. Each build used the published prompt with nothing added.

### What tech stack and pages does the Open World City Driving Game template use?
Open World City Driving Game is a single-page site built with Plain HTML and Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Open World City Driving Game template free to use?
Open World City Driving Game is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Open World City Driving Game template work on mobile?
Yes. Every Open World City Driving Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [One-prompt open-world city driving demo](https://www.tweaktown.com/news/113703/forget-gta-6-ahem-grok-4-7-made-a-gta-style-game-from-one-prompt-as-musk-boasts-of-ai-developing-photo-realistic-games/index.html) by @XFreeze
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Open World City Driving Game on VibeFather](https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
