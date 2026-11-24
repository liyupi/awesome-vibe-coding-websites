# 3D Exploded View Product Showcase <sup>PRO</sup>

> A scroll-driven mechanical assembly with labeled parts, cutaway controls, and reversible playback.

<a href="https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-exploded-view-product-showcase/695e50c5-6ec9-49bc-a87a-75221a040b5a/webp.b668faecc2.webp" width="100%" alt="3D Exploded View Product Showcase — Interactive 3D Gearbox Exploded View built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

3D Exploded View Product Showcase is a single-page product site built around a procedural Three.js assembly rather than a photograph or downloaded model. The default case presents Korven Industrial's HX-42 helical gearbox. It suits industrial marketers, product designers, technical educators, and engineering teams that need to explain how a mechanical product fits together without asking visitors to open CAD software or watch a long video.

The first screen places a large interactive gearbox beside concise product positioning, three engineering figures, and direct controls. A five-stage scroll sequence opens the housing, releases the shafts, separates the helical gear pair, and resolves into a labeled exploded assembly. Visitors can rotate the model, make its housing transparent, apply a live clipping plane, and select a component to read its material, dimensions, and function. A six-second transport control reverses the exploded state into a complete assembly, with pause, restart, progress, and a return to scroll control.

Below the visualization, restrained engineering notes, a full specification table, and application rows give the interaction a practical context. Barlow Condensed headings, Inter body copy, IBM Plex Mono annotations, graphite surfaces, machined-metal tones, and one safety-orange accent create a precise editorial system without falling back to a generic card grid.

All product geometry is drawn in code from original primitives and custom gear geometry; there are no image, model, HDRI, or texture downloads. The template uses Vite, React, TypeScript, Three.js, and vanilla CSS. Five variables control the brand, product, audience, primary action, and model identifier, while a single content file holds the part data and copy. An alternate coaxial speaker-driver case demonstrates how the same interaction model can serve another mechanical product. The finished site is static, responsive, keyboard accessible, touch friendly, and respectful of reduced-motion settings.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Landing Page](../../types/landing-page.md) |
| Style | [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 19 + TypeScript + Vanilla CSS + three + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-exploded-view-product-showcase?case=695e50c5-6ec9-49bc-a87a-75221a040b5a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-exploded-view-product-showcase/695e50c5-6ec9-49bc-a87a-75221a040b5a/shot_desktop.83fbf6db5b.webp" width="100%" alt="3D Exploded View Product Showcase — Industrial helical gearbox, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Industrial helical gearbox</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/3d-exploded-view-product-showcase?case=695e50c5-6ec9-49bc-a87a-75221a040b5a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-exploded-view-product-showcase?case=e31e3bb6-2c20-4eb0-b9ed-494a90f552c9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-exploded-view-product-showcase/e31e3bb6-2c20-4eb0-b9ed-494a90f552c9/shot_desktop.9198acd0b2.webp" width="100%" alt="3D Exploded View Product Showcase — Coaxial audio driver, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coaxial audio driver</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/3d-exploded-view-product-showcase?case=e31e3bb6-2c20-4eb0-b9ed-494a90f552c9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Korven Industrial |
| `[PRODUCT]` | Product | Helical Gearbox |
| `[AUDIENCE]` | Audience | mechanical design engineers |
| `[PRIMARY_CTA]` | Primary action | Explore the assembly |
| `[MODEL_ID]` | Model identifier | HX-42 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A machine-tool maker: set BRAND and MODEL_ID to your spindle unit, rewrite the part list for bearings, housing and shaft, and keep the section cut for internal cooling paths.
- A technical educator: set PRODUCT to a teaching mechanism, set AUDIENCE to students, and rewrite the engineering notes as short explanations of each part's function.
- A robotics startup: replace the gearbox assembly with joint, motor and encoder components, point PRIMARY_CTA at the exploded view, and keep the specification table for torque figures.
- An audio hardware brand: follow the coaxial speaker-driver case, set PRODUCT to your driver, and rewrite the part data for magnet, voice coil and diaphragm.

## FAQ

### How do I swap the gearbox for my own product in the 3D Exploded View Product Showcase?
The 3D Exploded View Product Showcase builds its geometry in code from original primitives, so changing the product means rewriting the procedural assembly, part data, exploded offsets, engineering captions, specifications and applications in the single content file, then setting BRAND, PRODUCT, AUDIENCE, MODEL_ID and PRIMARY_CTA. The layout, five-stage scroll explosion, selection, transparency, section cut and six-second playback stay as they are.

### Can the 3D Exploded View Product Showcase explain a product to people who are not engineers?
The 3D Exploded View Product Showcase is written for technical buyers and mechanical design engineers, but the interaction does the explaining: visitors rotate the assembly, make the housing transparent, apply a section cut and select a part to read its material, dimensions and function. For a less technical audience, set AUDIENCE to a plainer phrase and rewrite the engineering notes and captions in the content file to drop jargon while keeping the specification table.

### What can visitors actually do with the 3D model on the 3D Exploded View Product Showcase?
On the 3D Exploded View Product Showcase, a five-stage scroll sequence opens the housing, releases the shafts, separates the gear pair and resolves into a labeled exploded assembly. Visitors can orbit the model, toggle housing transparency, apply a live clipping plane, select components to read material, dimensions and function, and use a six-second transport control to reverse the explosion into a complete assembly with pause, restart and progress.

### What happens on the 3D Exploded View Product Showcase if a visitor's browser cannot render WebGL?
The 3D Exploded View Product Showcase includes a static inline SVG technical drawing as a no-WebGL fallback, so the part list and specification table stay readable even when the interactive scene cannot run. The template also respects reduced-motion settings by removing idle movement and automatic playback while keeping instant state changes and manual controls available, and it pauses rendering when the scene is outside the viewport.

### How do I publish the 3D Exploded View Product Showcase and can I use it for a client?
The 3D Exploded View Product Showcase is a Pro template: the brief, stack and variables are public, the full prompt and demo source code come with Pro, and the build emits static files that can be hosted anywhere. Commercial and client use requires Pro. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0.

### How do I build a 3D exploded view product showcase with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add 3d-exploded-view-product-showcase, replace [BRAND], [PRODUCT], [AUDIENCE] and [PRIMARY_CTA] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Exploded View Product Showcase demo?
The Industrial helical gearbox case was built by Kimi K3.1 Pro in Kimi Code; the Coaxial audio driver case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Exploded View Product Showcase template use?
3D Exploded View Product Showcase is a single-page site built with Three.js and React, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the 3D Exploded View Product Showcase template free to use?
3D Exploded View Product Showcase is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the 3D Exploded View Product Showcase template work on mobile?
Yes. Every 3D Exploded View Product Showcase build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [3D Exploded View Product Showcase](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [3D Exploded View Product Showcase on VibeFather](https://vibefather.ai/templates/3d-exploded-view-product-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
