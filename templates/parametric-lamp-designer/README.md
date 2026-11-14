# Parametric Lamp Designer

> Shape a glowing lattice lamp with live 3D controls, curated presets, and a downloadable spec sheet.

<a href="https://vibefather.ai/templates/parametric-lamp-designer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/parametric-lamp-designer/3734c37a-222c-45e2-9be5-e3eda4088389/webp.07da5beddd.webp" width="100%" alt="Parametric Lamp Designer — Real-Time 3D Parametric Lamp Studio built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/parametric-lamp-designer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Parametric Lamp Designer is a focused browser workspace for turning a few numerical choices into a luminous, original lighting concept. It suits product designers, makers, creative studios, and anyone who enjoys seeing cause and effect in a beautifully rendered 3D scene. The default Loom & Ember studio presents the Strata Lattice Lamp, while every name, audience line, and piece of interface copy remains editable through a small set of variables.

The centerpiece is not a video or a static render. It is a live Three.js model built from code, with horizontal rings, crossing lattice ribs, a frosted inner diffuser, and warm light spilling across a matte studio floor. Height, ring count, lattice density, and opening shape update the geometry immediately. Visitors can orbit, zoom, switch between front and top views, toggle the light, or return to a carefully composed camera position. Three presets provide distinct starting points without replacing manual control.

A deep green workspace, compact monospaced measurements, and restrained peach highlights keep attention on the object. On mobile, the preview and controls reflow into a touch-friendly sequence rather than squeezing the desktop interface.

The export action creates a polished PNG specification sheet entirely in the browser. It combines the current rendered view with dimensions, ring and rib counts, opening settings, preset name, and the selected brand and product. No account, server, external API, or fabrication file is involved. The sheet is explicitly a concept summary, not an engineering drawing.

Adapt the template by changing the content variables, tuning the palette or preset values, and keeping the geometry logic in its dedicated module. The result is a self-contained interactive tool with a clear visual centerpiece and a satisfying, useful output.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Dashboard](../../types/dashboard.md), [Interactive Toy](../../types/toy.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Generative / Canvas, 3D / WebGL |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + three + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/parametric-lamp-designer?case=3734c37a-222c-45e2-9be5-e3eda4088389&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/parametric-lamp-designer/3734c37a-222c-45e2-9be5-e3eda4088389/shot_desktop.f889e6f941.webp" width="100%" alt="Parametric Lamp Designer — Strata lamp study, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Strata lamp study</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/parametric-lamp-designer?case=3734c37a-222c-45e2-9be5-e3eda4088389&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/parametric-lamp-designer?case=9863223f-8d9a-4942-b035-bc28a12852c0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/parametric-lamp-designer/9863223f-8d9a-4942-b035-bc28a12852c0/shot_desktop.cc5939dc70.webp" width="100%" alt="Parametric Lamp Designer — Orbit lamp study, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Orbit lamp study</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/parametric-lamp-designer?case=9863223f-8d9a-4942-b035-bc28a12852c0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio brand | Loom & Ember |
| `[PRODUCT_NAME]` | Lamp product name | Strata Lattice Lamp |
| `[AUDIENCE]` | Intended audience | independent lighting designers and hands-on makers |
| `[TAGLINE]` | Workspace tagline | Shape light, one line at a time. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add parametric-lamp-designer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A lighting studio launching a new collection: set BRAND and PRODUCT_NAME to the range, adjust the three presets to your silhouettes, and hand the exported PNG sheets to clients in place of static renders.
- A maker selling downloadable lamp plans: keep the live sliders, retitle the workspace for hobbyist builders, and add your contact details to the exported concept sheet so buyers can follow up.
- A design school running a parametric modelling class: set AUDIENCE to students, keep all four parameters, and use the Front, Top and Reset views to demonstrate how ring count and lattice density change the form.
- A creative agency pitching a product concept: swap the deep green palette for the client's colours, rename the product, and use the exported specification sheet as a lightweight visual for the first meeting.

## FAQ

### What can visitors actually change on the Parametric Lamp Designer page?
The Parametric Lamp Designer page gives visitors four live controls: Height from 180 to 420 mm, Rings from 4 to 16, Lattice density from 12 to 48 ribs per direction, and Opening shape from Circle to Soft square. Each slider rebuilds the Three.js lamp geometry on the next animation frame, so visitors see the glowing lattice change immediately without pressing an apply button.

### How does the Export spec button work, and what does the downloaded sheet contain?
Export spec generates a PNG specification sheet entirely in the browser, with no account, server or external API involved. The sheet combines the current rendered lamp view with its dimensions, ring and rib counts, opening settings, preset name, and the selected brand and product name. The sheet is a concept summary for discussion, not an engineering drawing or a fabrication file.

### How do I change the brand, product name and audience text in the Parametric Lamp Designer template?
The Parametric Lamp Designer template keeps its editable text in a small set of variables: BRAND, PRODUCT_NAME, AUDIENCE and TAGLINE. Set BRAND to your studio name and PRODUCT_NAME to your lamp family, then rewrite the header, control-panel heading, export sheet and download filename so no default Loom & Ember or Strata Lattice Lamp wording is left behind. Keep the same tone and length.

### What are the three lamp presets, and can I add my own?
The Parametric Lamp Designer page ships with three presets that give distinct starting silhouettes, and the Reset action restores the Ripple preset with its default parameters, light on and the initial camera. Presets only set starting values; the four sliders stay in manual control afterwards. You can tune or replace the preset values in the template's content and geometry settings to match your own lamp family.

### Which AI coding agents can build the Parametric Lamp Designer from its prompt?
The Parametric Lamp Designer demos were built by Kimi K3.1 Pro in Kimi Code and by DeepSeek V4.1 Flash in DeepSeek Harness, and the published prompt is written to run in an AI coding agent such as Claude Code, Codex, Cursor, Windsurf or Gemini CLI. The prompt specifies the Vite, React, TypeScript and Three.js stack, the colour system and the exact sections, so the agent has a fixed target rather than a blank chat.

### How do I build a parametric lamp designer with AI?
Copy the prompt from this page or run npx vibefather add parametric-lamp-designer, replace [BRAND], [PRODUCT_NAME], [AUDIENCE] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Parametric Lamp Designer demo?
The Strata lamp study case was built by Kimi K3.1 Pro in Kimi Code; the Orbit lamp study case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Parametric Lamp Designer template use?
Parametric Lamp Designer is a single-page site built with React and Three.js, with drag & physics, generative / canvas and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Parametric Lamp Designer template for a client or a business?
The Parametric Lamp Designer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Parametric Lamp Designer template work on mobile?
Yes. Every Parametric Lamp Designer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Parametric Lamp Designer](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Parametric Lamp Designer on VibeFather](https://vibefather.ai/templates/parametric-lamp-designer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
