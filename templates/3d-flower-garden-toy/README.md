# 3D Flower Garden Toy

> Plant a living 3D meadow, tune the wind, and save your garden as a snapshot.

<a href="https://vibefather.ai/templates/3d-flower-garden-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-flower-garden-toy/e399ce80-c391-421e-bfba-9cfb8e44f580/webp.6149d6d643.webp" width="100%" alt="3D Flower Garden Toy — Interactive 3D Flower Garden with Wind built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-flower-garden-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

3D Flower Garden Toy is a full-screen planting toy built around a small, sculpted meadow. Visitors choose one of four flower forms, then click or tap open grass to grow a clump. Stems rise first and petals open a moment later, so every planting has a visible response. The meadow begins with an original seeded arrangement, while a flower counter, adjustable wind, camera controls, and a confirmed reset make the toy easy to understand without a tutorial wall.

The visual direction is a sunlit botanical diorama with paper-like petals, an asymmetric earth island, soft shadows, and a compact field-kit interface. All terrain, grass, flowers, and interface glyphs are drawn in code. Shared geometry, instanced meshes, and adaptive pixel density support hundreds of animated blooms without turning each flower into a separate draw call. Dragging orbits the view, scrolling or pinching zooms, and reduced-motion visitors receive static plants and short interface fades.

This template suits designers, creators, educators, and developers who want a small interactive experience rather than a conventional landing page. It can become a seasonal garden, a prairie patch, or a branded moment of calm by changing the brand, garden name, headline, and ordered flower list. Because the content is centralized, adapting the toy does not require rewriting the renderer; the same four geometry families and interaction model remain in place throughout. The snapshot button exports only the garden as a PNG on the visitor's device; nothing is uploaded. The finished site is a single static page with local fonts and icons, no backend, no account, and no external asset requests.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | Generative / Canvas, 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + TypeScript 5 + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-flower-garden-toy?case=e399ce80-c391-421e-bfba-9cfb8e44f580&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-flower-garden-toy/e399ce80-c391-421e-bfba-9cfb8e44f580/shot_desktop.f2752e65f1.webp" width="100%" alt="3D Flower Garden Toy — English country meadow, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>English country meadow</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/3d-flower-garden-toy?case=e399ce80-c391-421e-bfba-9cfb8e44f580&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-flower-garden-toy?case=336c2b24-c257-42e0-83bf-0371a80455cc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-flower-garden-toy/336c2b24-c257-42e0-83bf-0371a80455cc/shot_desktop.be6303142d.webp" width="100%" alt="3D Flower Garden Toy — Prairie wildflower patch, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Prairie wildflower patch</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/3d-flower-garden-toy?case=336c2b24-c257-42e0-83bf-0371a80455cc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Garden brand | Meadowmint |
| `[GARDEN_NAME]` | Garden name | Wanderlight Meadow |
| `[HEADLINE]` | Welcome headline | Plant a little joy. |
| `[FLOWER_SET]` | Four flower names | Daisy, tulip, bluebell, cosmos |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add 3d-flower-garden-toy` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A botanical garden or plant shop: set BRAND and GARDEN_NAME to your venue, rename FLOWER_SET to the species you sell, and use the snapshot as a shareable postcard.
- A classroom or nature educator: set HEADLINE to a short prompt about planting a meadow, keep all four flower forms, and let students compare clumps and wind settings.
- A seasonal brand campaign: set BRAND to your campaign name, retitle FLOWER_SET to the blooms of the season, and replace the headline with a calm invitation.
- A wellness or meditation site: set GARDEN_NAME to a quiet place name, soften the headline, and present the planting toy as a short moment of calm with a PNG keepsake.

## FAQ

### What can visitors actually do on a website built from the 3D Flower Garden Toy template?
Visitors pick one of four flower forms, click or tap open grass to plant a six-flower clump, and watch stems rise before petals open. They can drag to orbit the meadow, scroll or pinch to zoom, adjust one shared wind slider, download a PNG snapshot of the garden, and reset to the original seeded arrangement. A flower counter shows how many blooms are planted.

### How do I change the four flower types and their colors in the 3D Flower Garden Toy?
The 3D Flower Garden Toy template keeps the four flower names and their botanical colors in one centralized content file. Rename the four buttons through FLOWER_SET and adjust their colors there, in order. The four geometry families stay fixed: a radial daisy head, an open cup, a drooping bell cluster and a star head. The renderer and planting logic do not need rewriting.

### Is the 3D Flower Garden Toy template free to use, and what does Pro add?
The 3D Flower Garden Toy is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, and Pro members also get the source code of the demos. The live demos, the brief, the stack and the variables are public either way.

### Does the 3D Flower Garden Toy need a backend, an account or external assets to run?
The 3D Flower Garden Toy template builds to a single static page with no backend, no account and no external asset requests. Fonts and icons are local, and all terrain, grass, flowers and interface glyphs are drawn in code. The snapshot button exports only the garden as a PNG on the visitor's device; nothing is uploaded anywhere.

### How does the 3D Flower Garden Toy handle accessibility and visitors who prefer reduced motion?
The 3D Flower Garden Toy canvas is keyboard focusable with a visible planting ring: arrow keys move the ring, Enter or Space plants, and number keys 1 to 4 select flower types. When the system prefers reduced motion, flowers render already grown, wind freezes at a slight static lean, and interface transitions become short opacity fades. Planting and snapshot export still work.

### How do I build a 3D flower garden toy with AI?
Copy the prompt from this page or run npx vibefather add 3d-flower-garden-toy, replace [BRAND], [GARDEN_NAME], [HEADLINE] and [FLOWER_SET] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Flower Garden Toy demo?
The English country meadow case was built by Kimi K3.1 Pro in Kimi Code; the Prairie wildflower patch case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Flower Garden Toy template use?
3D Flower Garden Toy is a single-page site built with Plain HTML and Three.js, with generative / canvas, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the 3D Flower Garden Toy template for a client or a business?
The 3D Flower Garden Toy prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the 3D Flower Garden Toy template work on mobile?
Yes. Every 3D Flower Garden Toy build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [3D Flower Garden Toy](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [3D Flower Garden Toy on VibeFather](https://vibefather.ai/templates/3d-flower-garden-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
