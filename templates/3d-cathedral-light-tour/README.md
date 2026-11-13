# 3D Cathedral Light Tour

> Walk through a procedural Gothic nave and reshape its colored daylight, one architectural stop at a time.

<a href="https://vibefather.ai/templates/3d-cathedral-light-tour?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-cathedral-light-tour/d1b59aae-d0ff-48cc-b4d6-e62e57d5e7e5/webp.c4dc6a75fc.webp" width="100%" alt="3D Cathedral Light Tour — Interactive 3D Gothic Cathedral Light Tour built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-cathedral-light-tour?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

3D Cathedral Light Tour is an interactive architecture explainer set inside a procedural Three.js interior. The default case follows Alderquay Cathedral, a fictional Gothic building created for the Vault & Light Atlas. It suits architecture educators, students, museum teams, and designers who want to explain how structure and daylight work together without a video, downloaded model, or remote service.

The opening view places visitors at eye level inside a six-bay nave. A deterministic scroll route moves through clustered columns, pointed arches, ribbed vaults, clerestory windows, and the apse while captions explain the purpose of each element. A time-of-day slider changes the sun angle, ambient light, stained-glass glow, and colored projections on the stone floor. Visitors can pause at any stop, look around with constrained first-person controls, or choose a light preset from a diagram.

Below the tour, a code-drawn architectural section connects window height and sun angle to the moving floor projection. Six field-note rows repeat the information in accessible HTML and provide links back to the camera position. Newsreader headings, Inter body copy, warm limestone, deep umber shadows, and restrained jewel tones create a quiet editorial frame rather than a game interface.

Every column, arch, vault rib, glass panel, and light shape is generated in code. There are no photographs, AI-generated images, downloaded models, HDRIs, or texture maps. The template uses Vite, TypeScript, Three.js, and vanilla CSS, with local Fontsource fonts and Lucide interface icons. Five variables control the atlas name, building, architectural style, audience, and primary action; all resolved copy and stop data live in one content file. An alternate Modernist cathedral case demonstrates different geometry and explanations. The static build includes mobile controls, reduced-motion behavior, and an SVG fallback when WebGL is unavailable.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + TypeScript + Vanilla CSS + three + lucide |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-cathedral-light-tour?case=d1b59aae-d0ff-48cc-b4d6-e62e57d5e7e5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-cathedral-light-tour/d1b59aae-d0ff-48cc-b4d6-e62e57d5e7e5/shot_desktop.222ec0b0b4.webp" width="100%" alt="3D Cathedral Light Tour — Gothic cathedral light, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Gothic cathedral light</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/3d-cathedral-light-tour?case=d1b59aae-d0ff-48cc-b4d6-e62e57d5e7e5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-cathedral-light-tour?case=841731bf-c0a3-4abc-8ff8-c9731a48ffe1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-cathedral-light-tour/841731bf-c0a3-4abc-8ff8-c9731a48ffe1/shot_desktop.007ede3f1e.webp" width="100%" alt="3D Cathedral Light Tour — Modernist cathedral light, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Modernist cathedral light</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/3d-cathedral-light-tour?case=841731bf-c0a3-4abc-8ff8-c9731a48ffe1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Atlas or exhibit name | Vault & Light Atlas |
| `[BUILDING_NAME]` | Fictional building | Alderquay Cathedral |
| `[ARCHITECTURE]` | Architectural style | Gothic |
| `[AUDIENCE]` | Audience | architecture students |
| `[PRIMARY_CTA]` | Primary action | Begin the light tour |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add 3d-cathedral-light-tour` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university architecture course: set BRAND to your department, BUILDING_NAME to a study building, and rewrite the six stop explanations as lecture vocabulary for students.
- A museum exhibit team: point AUDIENCE at general visitors, set PRIMARY_CTA to Start the exhibit, and use the light presets as a guided daylight demonstration.
- A heritage or preservation group: keep the Gothic geometry, rename the building to your own case study, and rewrite field notes around window repair and light damage.
- A portfolio piece for a 3D designer: set BRAND to your studio, swap BUILDING_NAME and ARCHITECTURE for an invented interior, and link PRIMARY_CTA to your contact page.

## FAQ

### What can visitors actually do inside the 3D Cathedral Light Tour?
Visitors start at eye level in a six-bay nave and follow a scroll route through clustered columns, pointed arches, ribbed vaults, clerestory windows and the apse, with captions explaining each element. They can pause at any stop, look around with constrained first-person controls, drag a time-of-day slider that moves the sun and colored floor projections, or jump to a stop from the field-note rows.

### How do I change the cathedral and architectural style in the 3D Cathedral Light Tour?
The 3D Cathedral Light Tour template exposes five variables: BRAND, AUDIENCE, PRIMARY_CTA, ARCHITECTURE and BUILDING_NAME. Set ARCHITECTURE and BUILDING_NAME to your own case, then rewrite the six stop explanations, dimensions and glass details in the single content file so the geometry and copy match. The Modernist cathedral demo shows what a different ARCHITECTURE value looks like.

### Does the 3D Cathedral Light Tour template need photos or downloaded 3D models?
No. Every column, arch, vault rib, glass panel and light shape in the 3D Cathedral Light Tour is generated in code with Three.js primitives and custom geometry. There are no photographs, AI-generated images, downloaded models, HDRIs or texture maps, and no backend or remote service, so the built site is a set of static files you can host anywhere.

### What happens on the 3D Cathedral Light Tour when WebGL is not available?
The 3D Cathedral Light Tour template ships an inline SVG nave illustration as a fallback. It highlights the current stop and shows a simplified colored floor projection driven by the same time input, and the captions, field notes, light presets and navigation stay usable without a canvas. Visitors never see a blank scene or a browser-alert error.

### Is the 3D Cathedral Light Tour template free to use for teaching?
The 3D Cathedral Light Tour is a free template: its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, which covers classroom and personal study. Commercial or client work, such as a paid museum exhibit, needs Pro, which also gives you the full prompt and the demo source code.

### How do I build a 3D cathedral light tour with AI?
Copy the prompt from this page or run npx vibefather add 3d-cathedral-light-tour, replace [BRAND], [BUILDING_NAME], [ARCHITECTURE] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Cathedral Light Tour demo?
The Gothic cathedral light case was built by Kimi K3.1 Pro in Kimi Code; the Modernist cathedral light case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Cathedral Light Tour template use?
3D Cathedral Light Tour is a single-page site built with Three.js, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the 3D Cathedral Light Tour template for a client or a business?
The 3D Cathedral Light Tour prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the 3D Cathedral Light Tour template work on mobile?
Yes. Every 3D Cathedral Light Tour build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [3D Cathedral Light Tour](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [3D Cathedral Light Tour on VibeFather](https://vibefather.ai/templates/3d-cathedral-light-tour?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
