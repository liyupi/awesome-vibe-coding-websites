# Ink Wash Mountain Adventure <sup>PRO</sup>

> Run a painted mountain pass, outwit three guardians, and master a precise dodge-and-combo trial.

<a href="https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/ink-wash-mountain-adventure/fd13cc6e-9f38-4665-bfa5-7b9d5de395ed/webp.1e70db0b2b.webp" width="100%" alt="Ink Wash Mountain Adventure — Ink-Wash 3D Mountain Action Game built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Ink Wash Mountain Adventure is a complete, single-screen 3D action game for players who enjoy compact, timing-driven challenges. An original traveler climbs a rain-soaked practice trail, meets three mechanical guardian dummies, and learns their attack rhythms through running, dodging, and three-hit combos. The playable mountain is visible immediately; there is no marketing hero, mandatory start screen, or separate tutorial.

Kimi-inspired as a broad action-game reference, the template uses an original traveler, trail, encounters, interface, and English copy. Procedural ridges, wet stone, drifting mist, rain, and restrained cinnabar markings become an ink painting through a custom full-screen shader. The shader combines tonal wash bands, luminance edges, paper grain, and depth mist without downloaded textures or a postprocessing dependency. Optional rain, thunder, and impact sounds are synthesized locally.

The combat is a real deterministic system rather than a decorative scene. Five composure strokes, a regenerating Breath meter, buffered combo inputs, directional dodge invulnerability, collision recovery, and distinct telegraph-active-recovery states make every encounter readable. Reed Sentinel sweeps a sector, Stone Sentinel marks a straight lane, and Cloud Sentinel alternates inner-disc and outer-ring pulses. Resolving a guardian opens the next stretch of trail; the third opens a quiet summit and a completion summary with retry and free-practice options.

This template suits indie hackers, developers, and designers who need an adaptable Three.js action game that ships as static files. Five variables change the game name, world, setting, audience, and tagline, while one content file holds objectives, instructions, and interface copy. Keyboard, mouse, and simultaneous touch controls share the same simulation. The prompt also fixes terrain coordinates, combat timing, adaptive rendering, reduced-motion behavior, accessibility, and a sub-20 MB build so independent runs preserve the playable structure, not only the painted appearance.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ink-wash-mountain-adventure?case=fd13cc6e-9f38-4665-bfa5-7b9d5de395ed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ink-wash-mountain-adventure/fd13cc6e-9f38-4665-bfa5-7b9d5de395ed/shot_desktop.187eacb401.webp" width="100%" alt="Ink Wash Mountain Adventure — Rainveil Guardian Trial, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Rainveil Guardian Trial</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/ink-wash-mountain-adventure?case=fd13cc6e-9f38-4665-bfa5-7b9d5de395ed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ink-wash-mountain-adventure?case=24c6b063-650b-4406-8789-6c2a093e9cdd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ink-wash-mountain-adventure/24c6b063-650b-4406-8789-6c2a093e9cdd/shot_desktop.400d463a4a.webp" width="100%" alt="Ink Wash Mountain Adventure — Cloudpine Moonlit Trial, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cloudpine Moonlit Trial</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/ink-wash-mountain-adventure?case=24c6b063-650b-4406-8789-6c2a093e9cdd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game name | Rainveil |
| `[WORLD]` | Mountain world | the Rainveil Pass |
| `[SETTING]` | Landscape setting | storm-washed mountain retreat |
| `[AUDIENCE]` | Player audience | players who enjoy short, timing-based action games |
| `[TAGLINE]` | Game tagline | Three guardians. One quiet summit. |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A studio portfolio piece: set BRAND to your studio name and WORLD to a fictional trail, then use the summit completion summary as a quiet showcase of your game work.
- A classroom coding project: keep the three guardians and set AUDIENCE to students learning Three.js, so the readable telegraphs and generous retries double as a teaching example.
- A seasonal event game: set SETTING to a snowy or autumn landscape and rewrite the objectives and result copy for a short promotional challenge with no gore.
- A personal experiment: set TAGLINE to your own line and rewrite the help introduction for friends, keeping the same trail, Breath meter and three-hit combo loop.

## FAQ

### What do I actually play in the Ink Wash Mountain Adventure template?
Ink Wash Mountain Adventure is a single-screen 3D action game where you run a painted mountain trail and face three mechanical guardian dummies: Reed Sentinel, Stone Sentinel and Cloud Sentinel. You dodge telegraphed attacks, manage a regenerating Breath meter and land three-hit combos. Resolving each guardian opens the next stretch of trail, and the third leads to a quiet summit and a completion summary with retry and free-practice options.

### How do I rename the game and change the mountain world for my own project?
Five variables control the identity of the game: BRAND sets the game name, WORLD the mountain route, SETTING the landscape theme, TAGLINE the line under the title and AUDIENCE the players named in the help introduction. The prompt asks the agent to rewrite every headline, paragraph and label for your values while keeping terrain coordinates, combat timing and the three-guardian structure intact.

### Can I change the guardian names, objectives and interface text without touching the game logic?
Yes. The template keeps guardian display names, objectives, instructions, button labels, result copy and accessibility text in one content file, separate from the simulation and the 3D scene. You or your agent can rewrite that copy for a new setting while the combat system, timings and interface structure stay as they are, so the game still plays the same way.

### How does the ink-wash look work if there are no image files to download?
The painted look comes from a custom full-screen shader that combines tonal wash bands, luminance edges, paper grain and depth mist, applied over procedural ridges, wet stone, drifting mist, rain and cinnabar markings. No textures are downloaded and no separate postprocessing library is used. Rain, thunder and impact sounds are synthesized locally, and all fonts, icons and scripts are bundled, so the build runs as static files.

### What should I check before shipping this game on a real site?
Play a full run on desktop and on a phone to confirm that keyboard, mouse and simultaneous touch controls behave the same, since they share one simulation. Check that dodge invulnerability and combo inputs feel readable, that the reduced-motion and accessibility behaviour is present, and that the build stays under the stated size limit. The game saves only your best completion time and sound preference, so there is no backend to configure.

### How do I build an ink wash mountain adventure with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add ink-wash-mountain-adventure, replace [BRAND], [WORLD], [SETTING] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Ink Wash Mountain Adventure demo?
The Rainveil Guardian Trial case was built by Kimi K3.1 Pro in Kimi Code; the Cloudpine Moonlit Trial case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Ink Wash Mountain Adventure template use?
Ink Wash Mountain Adventure is a single-page site built with Three.js, with generative / canvas, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Ink Wash Mountain Adventure template free to use?
Ink Wash Mountain Adventure is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Ink Wash Mountain Adventure template work on mobile?
Yes. Every Ink Wash Mountain Adventure build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [铜雨行者 3D Interactive Game](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Ink Wash Mountain Adventure on VibeFather](https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
