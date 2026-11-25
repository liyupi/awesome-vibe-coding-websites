# Interactive 3D Stream Diorama

> Orbit a living stream, shape its ripples, and shift the light from day to night.

<a href="https://vibefather.ai/templates/interactive-3d-stream-diorama?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/interactive-3d-stream-diorama/90bc9ccc-83e1-4d5b-8a38-5a5a30a7103f/webp.a5d6253969.webp" width="100%" alt="Interactive 3D Stream Diorama — Interactive 3D Stream with Dynamic Water built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interactive-3d-stream-diorama?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Interactive 3D Stream Diorama is a single-screen nature study built around a living, procedural landscape. Instead of leading with a large headline or a stock photograph, it puts visitors directly above an asymmetric cutaway stream bank. Water moves between stones, grasses catch the light, and every click or drag across the surface sends out a new ripple. The scene is the product, the explanation, and the main interaction.

This template suits creative developers, designers, educators, and independent makers who want a memorable browser experiment, a portfolio centerpiece, or a quiet interactive break. It is also a useful starting point for showcasing shader work, environmental visualization, meditation experiences, and small digital worlds. Kimi-inspired in its tactile miniature format, the design uses an original terrain silhouette, interface, copy, and procedural treatment.

A restrained field-station interface keeps the landscape dominant. Instrument Serif titles contrast with compact DM Sans controls, while dark translucent panels remain readable across day, dusk, and night. Visitors can orbit from land, zoom with a wheel or pinch, disturb the water directly, reset the camera, and enable synthesized ambient sound only when they choose. The lighting presets change the sky, fog, shadows, reflections, and accent details rather than simply placing a color filter over the canvas.

All terrain, stones, grasses, water, textures, and audio are generated locally with Three.js, GLSL, canvas, and the Web Audio API. There are no model downloads, image assets, audio files, backend services, or external APIs to manage. Six content variables change the project name, scene, setting, audience line, and supporting copy while preserving the interaction model. The fixed seed keeps the composition reproducible, and the responsive quality settings, touch gestures, reduced-motion behavior, and capped render resolution make the experience practical on both desktop and mobile.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Glass](../../styles/glass.md), [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript 5 + Vanilla CSS + GLSL shaders + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-3d-stream-diorama?case=90bc9ccc-83e1-4d5b-8a38-5a5a30a7103f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-3d-stream-diorama/90bc9ccc-83e1-4d5b-8a38-5a5a30a7103f/shot_desktop.fe90e1314d.webp" width="100%" alt="Interactive 3D Stream Diorama — Woodland stream study, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Woodland stream study</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/interactive-3d-stream-diorama?case=90bc9ccc-83e1-4d5b-8a38-5a5a30a7103f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-3d-stream-diorama?case=051b845c-df43-419b-b8d0-c477ff184afc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-3d-stream-diorama/051b845c-df43-419b-b8d0-c477ff184afc/shot_desktop.8e8c5c568b.webp" width="100%" alt="Interactive 3D Stream Diorama — Highland brook study, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Highland brook study</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/interactive-3d-stream-diorama?case=051b845c-df43-419b-b8d0-c477ff184afc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Project name | Alder & Rill |
| `[SCENE_NAME]` | Scene name | Alder Bend |
| `[SCENE_TYPE]` | Scene type | Woodland stream |
| `[REGION]` | Invented region | North Alder Basin |
| `[TAGLINE]` | Scene tagline | Follow the water. Stay a little. |
| `[AUDIENCE_LINE]` | Audience line | A quiet break for nature lovers. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add interactive-3d-stream-diorama` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A nature education site: set SCENE_TYPE to your habitat, rename the field notes as species observations, and use AUDIENCE_LINE to address students and teachers.
- A creative studio portfolio: set BRAND to your studio, SCENE_NAME to a project title, and point the field-notes drawer at a short case study of your shader work.
- A meditation or calm-break page: keep the stream scene, set TAGLINE to a slow-breathing invitation, and write AUDIENCE_LINE for people taking a quiet pause.
- An environmental visualization demo: set REGION to your invented watershed, rewrite SCENE_TYPE and field notes around water flow, and keep the day, dusk and night presets as the main comparison.

## FAQ

### How do I change the scene name, region and tagline in the Interactive 3D Stream Diorama?
The Interactive 3D Stream Diorama template exposes six content variables: BRAND, REGION, TAGLINE, SCENE_NAME, SCENE_TYPE and AUDIENCE_LINE. Set SCENE_NAME to your landscape's name, SCENE_TYPE to its category such as woodland stream or highland brook, REGION to your invented setting, and TAGLINE to the one-line invitation shown under the title. Rewrite the field notes and vegetation names to match, keeping the layout and interaction model intact.

### What can visitors actually do inside the stream diorama?
Visitors to the Interactive 3D Stream Diorama orbit the cutaway stream bank from above, zoom with a wheel or pinch, click or drag across the water to send out ripples, reset the camera, and switch between day, dusk and night lighting. Ambient sound is synthesized locally and stays off until the visitor enables it. Every visible control performs a real local action, and the landscape stays the dominant element on the screen.

### Does the stream diorama need image files, 3D models or a backend to run?
The Interactive 3D Stream Diorama template needs no image assets, 3D model downloads, audio files, backend services or external APIs. Terrain, stones, grasses, water, textures and sound are all generated in the browser with Three.js, GLSL shaders, canvas and the Web Audio API, so the built site is static files you can host anywhere. Nothing is fetched at runtime, which keeps the page self-contained.

### Can I use the stream diorama as a portfolio piece or a teaching demo?
The Interactive 3D Stream Diorama template is designed for creative developers, designers, educators and independent makers who want a browser experiment, portfolio centerpiece or quiet interactive break. It is free for personal, non-commercial use under CC BY-NC 4.0, which covers a personal portfolio or classroom demonstration. Commercial use, client work or paid products require Pro, and Pro also includes the full prompt and demo source code.

### What should I edit first after installing the Interactive 3D Stream Diorama?
Start with the six variables in the content file: set BRAND to your project name, SCENE_NAME and SCENE_TYPE to your landscape, REGION to an invented place, TAGLINE to your invitation and AUDIENCE_LINE to who the scene is for. Then rewrite the field notes and vegetation labels so they describe your scene. Keep the fixed seed if you want the same composition on every load, and check the lighting presets and touch gestures on a phone.

### How do I build an interactive 3D stream diorama with AI?
Copy the prompt from this page or run npx vibefather add interactive-3d-stream-diorama, replace [BRAND], [SCENE_NAME], [SCENE_TYPE] and [REGION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interactive 3D Stream Diorama demo?
The Woodland stream study case was built by Kimi K3.1 Pro in Kimi Code; the Highland brook study case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Interactive 3D Stream Diorama template use?
Interactive 3D Stream Diorama is a single-page site built with Plain HTML and Three.js, with drag & physics, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Interactive 3D Stream Diorama template for a client or a business?
The Interactive 3D Stream Diorama prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Interactive 3D Stream Diorama template work on mobile?
Yes. Every Interactive 3D Stream Diorama build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Interactive 3D Stream Diorama](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Interactive 3D Stream Diorama on VibeFather](https://vibefather.ai/templates/interactive-3d-stream-diorama?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
