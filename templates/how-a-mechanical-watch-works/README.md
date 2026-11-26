# How a Mechanical Watch Works

> Interactive editorial explainer with 8 procedural Three.js 3D horology figures you can orbit, scrub, explode, section-cut, and wind.

<a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/how-a-mechanical-watch-works/d7bac8fa-9340-483d-977a-dbcee0b06a21/webp.faaecf20d0.webp" width="100%" alt="How a Mechanical Watch Works — Interactive 3D Mechanical Watch Explainer built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An archival editorial long-read demystifying how a battery-free mechanical watch measures time through eight illustrated chapters paired with live procedural Three.js 3D models built purely in code. Explore the spring and pendulum, coiled mainspring barrel, meshing brass gear train with verifiable tooth-count ratio math, Swiss lever escapement with a slow-motion slider, breathing balance wheel and hairspring, keyless winding and hand-setting works, date ring and automatic winding rotor complications, and a complete windable Caliber V-08 movement. Every 3D figure supports 360° pointer orbit, time scrubbing, vertical exploded view, and cutaway cross-section slicing.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Blog](../../types/blog.md), [Interactive Explainer](../../types/explainer.md) |
| Style | [Editorial](../../styles/editorial.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=d7bac8fa-9340-483d-977a-dbcee0b06a21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-a-mechanical-watch-works/d7bac8fa-9340-483d-977a-dbcee0b06a21/shot_desktop.cc978f83c8.webp" width="100%" alt="How a Mechanical Watch Works — Caliber Monograph (Caliber V-08), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Caliber Monograph (Caliber V-08)</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=d7bac8fa-9340-483d-977a-dbcee0b06a21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=32916f21-39c4-49cf-8683-b5cefc549371&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-a-mechanical-watch-works/32916f21-39c4-49cf-8683-b5cefc549371/shot_desktop.545d48c6d6.webp" width="100%" alt="How a Mechanical Watch Works — Horology Atlas (Caliber M-12), built by GPT-6.2 Sol in Codex"></a><br>
<b>Horology Atlas (Caliber M-12)</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Sol in Codex · <a href="https://vibefather.ai/templates/how-a-mechanical-watch-works?case=32916f21-39c4-49cf-8683-b5cefc549371&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A design school lecturer: set BRAND to your course name, keep the 8 chapters, and rewrite the gear ratio table as a homework exercise on tooth counts.
- A watchmaking workshop: set CALIBER_NAME to a movement you service, then use the Keyless Works chapter to teach winding versus hand-setting before students touch a real crown.
- A science museum kiosk: set BRAND to the exhibit title, keep the Cutaway Section and Exploded View controls, and let visitors wind the Caliber V-08 movement on a touchscreen.
- An engineering student portfolio: set BRAND to your name, keep the verifiable tooth-count table, and link the finale chapter to a write-up of your own mechanism project.

## FAQ

### What can readers actually do with the 3D watch figures on this page?
The How a Mechanical Watch Works template gives every one of its 8 horology figures the same set of controls: drag to orbit 360 degrees, scrub time and phase, slow motion down to 0.1x, slide an Exploded View from 0 to 100 percent, and toggle a Cutaway Section. Readers can also switch the crown between Wind and Set Hands and click Wind Mainspring to recharge the live power reserve meter.

### How do I change the caliber name, beat rate and power reserve to my own values?
The How a Mechanical Watch Works template exposes four variables: BRAND for the publication title, CALIBER_NAME for the movement designation, FREQUENCY_LABEL for the beat rate in the telemetry, and POWER_RESERVE for the mainspring specification. Set them in the prompt or content file, then rewrite every headline, paragraph and label that mentions the default Caliber V-08, 28,800 vph and 48-Hour Reserve so the copy matches your invented movement.

### Is this mechanical watch explainer free to use, and can I put it on a client site?
The How a Mechanical Watch Works template is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs a VibeFather Pro license, which also gives you the source code of the demos. You can run it with npx vibefather add how-a-mechanical-watch-works and host the static build wherever you like.

### Do the gears and springs use downloaded 3D model files?
No. The How a Mechanical Watch Works template builds all 8 horology assemblies procedurally with Three.js inside one shared renderer, including the toothed brass wheels, coiled mainspring, breathing hairspring, ruby pallet stones, blued screws, date ring and automatic rotor. There are no external model files to load or license, and the single renderer transitions between figures instead of mounting separate WebGL contexts.

### Can I turn this into a lesson or museum exhibit about clockmaking instead of a watch?
Yes. The How a Mechanical Watch Works template is an editorial explainer with 8 chapters and synced 3D figures, so an educator can keep the structure and rewrite the chapters in the content file for pendulum clocks, marine chronometers or a specific classroom syllabus. Change BRAND and CALIBER_NAME, replace the gear ratio table with your own tooth counts, and adjust the callout numbers to match the mechanism you teach.

### How do I build a how a mechanical watch works with AI?
Copy the prompt from this page or run npx vibefather add how-a-mechanical-watch-works, replace [BRAND], [CALIBER_NAME], [FREQUENCY_LABEL] and [POWER_RESERVE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the How a Mechanical Watch Works demo?
The Caliber Monograph (Caliber V-08) case was built by Gemini 4 Neon in Antigravity; the Horology Atlas (Caliber M-12) case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the How a Mechanical Watch Works template use?
How a Mechanical Watch Works is a single-page site built with React, Tailwind CSS and Three.js, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the How a Mechanical Watch Works template for a client or a business?
The How a Mechanical Watch Works prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the How a Mechanical Watch Works template work on mobile?
Yes. Every How a Mechanical Watch Works build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [How a Mechanical Watch Works on VibeFather](https://vibefather.ai/templates/how-a-mechanical-watch-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
