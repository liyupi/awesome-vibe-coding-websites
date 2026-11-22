# Island Postal Route Game <sup>PRO</sup>

> Walk a tiny autumn island, earn three elemental stamps, and open the hilltop temple gate.

<a href="https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/island-postal-route-game/d8a66cd7-bdcf-44ca-954a-24656d4f99fb/webp.419f1d5670.webp" width="100%" alt="Island Postal Route Game — Low-Poly 3D Island Exploration Game built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Island Postal Route Game is a complete, single-screen browser game for players who prefer a quiet journey to combat or countdowns. An original low-poly courier begins beside a tiny post house, follows branching island paths, and collects wind, river, and mountain stamps. The three discoveries open a timber temple gate, turning a short walk into a clear and satisfying delivery route.

The playable island is the visual anchor from the first frame. Faceted terrain, copper foliage, a winding stream, a timber bridge, path signs, and a hilltop gate are all built from Three.js geometry. A softly following camera, an articulated walking courier, drifting leaves, stamp rituals, and optional synthesized sound give the miniature warmth without downloaded models, textures, or audio files. The interface resembles a compact field journal rather than a conventional game dashboard.

The route allows exploration in any order. A persistent quest log tracks all three shrines, signposts and a selected objective aid wayfinding, and collected progress is saved locally. Walking, collision recovery, gate completion, pause, restart, and help states are specified as one coherent game loop. Keyboard players use WASD or arrow keys and a contextual interaction key; touch players get an analog joystick and a separate stamp button that work simultaneously.

This template suits indie hackers, developers, and designers who need an adaptable 3D exploration example that ships as static files. Five variables change the postal brand, island name, setting, audience, and tagline, while one content file holds all names, objectives, signs, and instructions. A misty evergreen island provides the alternate content direction without changing the route logic. The prompt also fixes terrain coordinates, movement speeds, camera behavior, touch input, adaptive quality, reduced-motion behavior, and accessibility so independent builds produce the same playable structure, not merely a similar landscape.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Playful](../../styles/playful.md) |
| Effects | 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/island-postal-route-game?case=d8a66cd7-bdcf-44ca-954a-24656d4f99fb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/island-postal-route-game/d8a66cd7-bdcf-44ca-954a-24656d4f99fb/shot_desktop.34f4346fc3.webp" width="100%" alt="Island Postal Route Game — Amberwick Autumn Route, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Amberwick Autumn Route</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/island-postal-route-game?case=d8a66cd7-bdcf-44ca-954a-24656d4f99fb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/island-postal-route-game?case=ee41c2ad-638c-422a-af30-e2f1f2c46001&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/island-postal-route-game/ee41c2ad-638c-422a-af30-e2f1f2c46001/shot_desktop.5df97bb1c3.webp" width="100%" alt="Island Postal Route Game — Mossbell Evergreen Route, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Mossbell Evergreen Route</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/island-postal-route-game?case=ee41c2ad-638c-422a-af30-e2f1f2c46001&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Postal service name | Amberwick Post |
| `[ISLAND_NAME]` | Island name | Amberwick Isle |
| `[SETTING]` | Island setting | autumn woodland island |
| `[AUDIENCE]` | Player audience | players who enjoy quiet exploration |
| `[TAGLINE]` | Game tagline | Three stamps. One open gate. |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local tourism board: set ISLAND_NAME and SETTING to a real-feeling coastal or forested destination, and rewrite shrine names as landmarks visitors can tick off a route.
- A children's book launch: set BRAND to the book's postal service, make the courier's stamps match chapters, and rewrite the field-journal copy in the author's voice.
- A museum family trail: set AUDIENCE to visiting families, rename the three shrines after gallery stops, and use the completion panel to point at the physical exhibition.
- A studio portfolio piece: set BRAND to your own name, keep the autumn island, and swap the quest log copy to describe the exploration and rendering work you want to show.

## FAQ

### How do I change the island name, postal brand and setting in the Island Postal Route Game?
The Island Postal Route Game template exposes five variables: BRAND, ISLAND_NAME, SETTING, AUDIENCE and TAGLINE. Set BRAND to your postal service name, ISLAND_NAME to your island, and SETTING to the season and landscape theme. The prompt keeps shrine names, sign text, objectives and instructions in one content file, so you rewrite those alongside the variables rather than editing the game logic.

### Can I turn the Island Postal Route Game into a game for my own brand or client?
Yes, with a Pro licence. The Island Postal Route Game template is a Pro template, so commercial and client work is covered, and Pro members get the full prompt plus the demo source code. Set BRAND to the client's postal service, ISLAND_NAME to their island, and rewrite the field-journal copy, shrine names and sign text to match their tone while keeping the three-stamp route intact.

### What are the three stamps and how does the temple gate open in the Island Postal Route Game?
The Island Postal Route Game asks the courier to find wind, river and mountain shrines in any order. Each shrine grants one stamp, and the quest log records it as collected. After the third stamp, the timber temple gate on the hilltop opens, the courier crosses the threshold, and a completion panel offers replay and reset. There are no timers, combat or fail states.

### Does the Island Postal Route Game save progress if a player reloads the page?
The Island Postal Route Game saves collected shrine IDs, completion status and the sound preference locally on the player's device. On reload, collected stamps and an opened gate are restored, but the courier returns to the post house rather than a saved position, because the prompt treats a stored position as unsafe. The storage key is derived from BRAND and ISLAND_NAME.

### How do keyboard and touch controls work in the Island Postal Route Game?
Keyboard players in the Island Postal Route Game walk with WASD or the arrow keys and use a contextual interaction key for shrines and the gate. Touch players get an analog joystick for movement and a separate stamp button, and both input methods work at the same time. The prompt also specifies forgiving collisions, signposts and a selected objective to help first-time 3D players find their way.

### How do I build an island postal route game with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add island-postal-route-game, replace [BRAND], [ISLAND_NAME], [SETTING] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Island Postal Route Game demo?
The Amberwick Autumn Route case was built by Kimi K3.1 Pro in Kimi Code; the Mossbell Evergreen Route case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Island Postal Route Game template use?
Island Postal Route Game is a single-page site built with Three.js, with 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Island Postal Route Game template free to use?
Island Postal Route Game is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Island Postal Route Game template work on mobile?
Yes. Every Island Postal Route Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Island Postal Route Game](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Island Postal Route Game on VibeFather](https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
