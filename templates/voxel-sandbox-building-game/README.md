# Voxel Sandbox Building Game

> An original pastel-candy Three.js voxel sandbox opening on a sunset lakeside village with 12 materials and region copy-paste.

<a href="https://vibefather.ai/templates/voxel-sandbox-building-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/voxel-sandbox-building-game/1c82ecb7-bd14-4672-a263-176864e35bc3/webp.d5237e96cd.webp" width="100%" alt="Voxel Sandbox Building Game — Pastel 3D Three.js Voxel Sandbox Builder built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/voxel-sandbox-building-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Voxel Sandbox Building Game is an original browser-based 3D block-building sandbox defined by a distinctive pastel-candy art direction—matte mint turf, peach shorelines, coral roof tiles, buttercream plaster, lavender stone, translucent sky glass, warm glowing lanterns, and spreading water blocks shaded with soft vertex ambient occlusion and warm sunset fog. Rather than opening to a flat grid or dark loading wall, the very first frame places the player overlooking a pre-built lakeside village at sunset complete with glowing cottage windows, an arched footbridge, blossom trees, rolling hills, and a carved hillside cave. Underneath, a fast chunked face-culled mesher emits only visible exposed faces so thousands of voxels run smoothly on laptops and mobile browsers with zero external texture packs or model files. Players can walk, jump, or toggle free-flight, aim with desktop pointer lock or responsive mobile touch controls, break and place blocks from a 12-material hotbar, watch placed water spread across lower tiles, and switch between Sunset, Bright Day, and Starry Night where placed Glow Lantern blocks visibly light up nearby streets. A dedicated Region Build toolbar supports setting two corners to copy and paste entire structures, while a Save/Load drawer stores custom worlds and terrain seeds locally in browser localStorage.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md), [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Generative / Canvas, Micro-interactions, 3D / WebGL |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/voxel-sandbox-building-game?case=1c82ecb7-bd14-4672-a263-176864e35bc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/voxel-sandbox-building-game/1c82ecb7-bd14-4672-a263-176864e35bc3/shot_desktop.2b43e074e1.webp" width="100%" alt="Voxel Sandbox Building Game — Pastel lakeside sunset village, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Pastel lakeside sunset village</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/voxel-sandbox-building-game?case=1c82ecb7-bd14-4672-a263-176864e35bc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Sandbox World Title | Sugarblock Basin |
| `[VILLAGE_NAME]` | Lakeside Village Name | Peachtide Village |
| `[WORLD_SEED]` | Default Numeric Seed | 4821 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add voxel-sandbox-building-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom coding club: set BRAND to your group name and VILLAGE_NAME to a class-chosen village, then keep the Region Build toolbar for teaching copy-paste and coordinates.
- A game studio portfolio piece: rename the brand to your studio, keep the Sunset village as the opening shot, and use the World Save/Load drawer to show off saved builds.
- A kids' creative toy site: set BRAND to a friendly name, lean on the 12 pastel materials and mobile touch controls, and keep the Day/Sunset/Night switch as the main draw.
- A 3D web demo for developers: keep the default seed, then point the top bar copy at your own project and use the Fly mode and lantern lighting to show off the rendering.

## FAQ

### What can I actually build in the Voxel Sandbox Building Game template?
The Voxel Sandbox Building Game template is a browser-based 3D block sandbox. Players walk, jump or fly around a pastel lakeside village, break and place blocks from a 12-material hotbar that includes Mint Turf, Sky Glass, Glow Lantern and spreading Water, switch between Sunset, Bright Day and Starry Night, and copy-paste whole structures with the Region Build toolbar.

### Is there a free voxel sandbox game template I can build with AI?
Yes. The Voxel Sandbox Building Game template is free, and its full prompt is published on the page, so you can hand it to an AI coding agent and get the pastel voxel world running yourself. The prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0; commercial or client work needs a VibeFather Pro license.

### How does the 12-material hotbar and water spreading work?
The Voxel Sandbox Building Game template gives you 12 pastel materials on a bottom hotbar, selected with number keys, clicks or taps. Water blocks spread locally into adjacent lower air cells, Glow Lantern blocks cast real light that brightens the village at night, and Sky Glass stays translucent, so builds read clearly against the sunset sky.

### Can I save my voxel world and load it again later?
Yes. The Voxel Sandbox Building Game template has a World Save/Load drawer that stores custom worlds in browser localStorage, along with an editable numeric Seed field and a Generate Seed button that rebuilds terrain deterministically. You can save a world, load it back, or reset to the original lakeside village at any time in the same browser.

### What should I change first in the Voxel Sandbox Building Game template?
Start with the three prompt variables: set BRAND to your sandbox title, VILLAGE_NAME to your village, and WORLD_SEED to the number that generates the terrain you want. Then rewrite the headlines, labels and toolbar copy to match those values, and adjust the pastel palette in the design section if you want a different mood.

### How do I build a voxel sandbox building game with AI?
Copy the prompt from this page or run npx vibefather add voxel-sandbox-building-game, replace [BRAND], [VILLAGE_NAME] and [WORLD_SEED] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Voxel Sandbox Building Game demo?
The Pastel lakeside sunset village case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Voxel Sandbox Building Game template use?
Voxel Sandbox Building Game is a single-page site built with Three.js, Tailwind CSS and React, with generative / canvas, micro-interactions and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Voxel Sandbox Building Game template for a client or a business?
The Voxel Sandbox Building Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Voxel Sandbox Building Game template work on mobile?
Yes. Every Voxel Sandbox Building Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Voxel Sandbox Building Game on VibeFather](https://vibefather.ai/templates/voxel-sandbox-building-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
