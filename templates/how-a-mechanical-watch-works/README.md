# How a Mechanical Watch Works

> Interactive editorial explainer with 8 procedural Three.js 3D horology figures you can orbit, scrub, explode, section-cut, and wind.

<a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/how-a-mechanical-watch-works/d7bac8fa-9340-483d-977a-dbcee0b06a21/webp.faaecf20d0.webp" width="100%" alt="How a Mechanical Watch Works — Interactive 3D Mechanical Watch Explainer built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An archival editorial long-read demystifying how a battery-free mechanical watch measures time through eight illustrated chapters paired with live procedural Three.js 3D models built purely in code. Explore the spring and pendulum, coiled mainspring barrel, meshing brass gear train with verifiable tooth-count ratio math, Swiss lever escapement with a slow-motion slider, breathing balance wheel and hairspring, keyless winding and hand-setting works, date ring and automatic winding rotor complications, and a complete windable Caliber V-08 movement. Every 3D figure supports 360° pointer orbit, time scrubbing, vertical exploded view, and cutaway cross-section slicing.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Blog](../../types/blog.md), [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=d7bac8fa-9340-483d-977a-dbcee0b06a21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-a-mechanical-watch-works/d7bac8fa-9340-483d-977a-dbcee0b06a21/shot_desktop.cc978f83c8.webp" width="100%" alt="How a Mechanical Watch Works — Caliber Monograph (Caliber V-08), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Caliber Monograph (Caliber V-08)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=d7bac8fa-9340-483d-977a-dbcee0b06a21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publication Title | Caliber Monograph |
| `[CALIBER_NAME]` | Fictional Caliber Name | Caliber V-08 |
| `[FREQUENCY_LABEL]` | Beat Frequency Label | 28,800 vph (4 Hz) |
| `[POWER_RESERVE]` | Power Reserve Label | 48-Hour Reserve |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add how-a-mechanical-watch-works` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A watchmaking school: set BRAND to your program, replace the eight chapters with your lesson sequence, and keep the gear ratio table as a tooth-count reference for students.
- A museum horology exhibit: set CALIBER_NAME to a movement in your collection and rewrite the complications chapter to describe the pieces on display.
- An engineering lecturer: keep the escapement and gear train chapters, swap the archival prose for your course notes, and use the slow-motion slider in lectures.
- A watch enthusiast publication: set BRAND to your masthead, rewrite the finale around a movement you own, and link the footer credit as your own archive.

## FAQ

### What is the How a Mechanical Watch Works template and what does it include?
The How a Mechanical Watch Works template is a single-page interactive horology long-read built with Vite, React, TypeScript, Tailwind CSS and Three.js. It includes eight editorial chapters, each paired with a procedural 3D figure: spring and pendulum, mainspring and barrel, gear train, Swiss lever escapement, balance wheel and hairspring, keyless works, complications, and a complete windable Caliber V-08 movement. Every figure supports orbit, time scrubbing, exploded view and cutaway section.

### How do the 3D watch figures work without any external model files?
Every 3D figure in the How a Mechanical Watch Works template is built procedurally in Three.js code, so there are no GLB or OBJ files to host. The template generates toothed brass wheels, spiral mainsprings, ruby pivot jewels, blued screws, a pallet fork, a date ring and an automatic rotor from geometry. All eight figures share one WebGL renderer, which transitions between chapters as you scroll rather than mounting separate contexts.

### Can I change the watch caliber name, beat frequency and power reserve in this template?
Yes. The How a Mechanical Watch Works template exposes four variables: BRAND for the publication title, CALIBER_NAME for the fictional movement, FREQUENCY_LABEL for the beat rate shown in telemetry, and POWER_RESERVE for the mainspring specification. The defaults are Caliber Monograph, Caliber V-08, 28,800 vph (4 Hz) and 48-Hour Reserve. When you change them, rewrite the headlines, paragraphs and labels to match.

### Is the How a Mechanical Watch Works template free to use?
The How a Mechanical Watch Works template is free. Its prompt and DESIGN.md are licensed CC BY-NC 4.0 for personal, non-commercial use, so you can build and study it without paying. Commercial or client work needs a VibeFather Pro license, which also gives you the full prompt and the source code of the demos. The live demo was built by Gemini 4 Neon in Antigravity.

### How do I turn this watch explainer into a lesson or museum exhibit page?
Start by setting BRAND to your institution and CALIBER_NAME to the movement you are teaching. Rewrite the eight chapters in the content file so each one matches your curriculum, and keep the gear ratio table with its real tooth counts. The slow-motion slider, exploded view and cutaway section make good classroom demonstrations, and the sticky figure stays beside the prose on desktop while stacking on mobile.

### How do I build a how a mechanical watch works with AI?
Copy the prompt from this page or run npx vibefather add how-a-mechanical-watch-works, replace [BRAND], [CALIBER_NAME], [FREQUENCY_LABEL] and [POWER_RESERVE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the How a Mechanical Watch Works demo?
The Caliber Monograph (Caliber V-08) case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the How a Mechanical Watch Works template use?
How a Mechanical Watch Works is a single-page site built with Three.js, React and Tailwind CSS, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the How a Mechanical Watch Works template for a client or a business?
The How a Mechanical Watch Works prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the How a Mechanical Watch Works template work on mobile?
Yes. Every How a Mechanical Watch Works build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [How a Mechanical Watch Works on VibeFather](https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
