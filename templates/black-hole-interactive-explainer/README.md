# Black Hole Interactive Explainer

> Orbit a real-time ray-marched black hole with gravitational lensing, then explore event horizons, time dilation clocks, and cosmic scales.

<a href="https://vibefather.ai/templates/black-hole-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/black-hole-interactive-explainer/657b7b02-ca74-479b-8ab5-00258c366622/webp.e99bed650b.webp" width="100%" alt="Black Hole Interactive Explainer — Interactive Ray-Marched Black Hole Explainer built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/black-hole-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

An interactive astrophysics explainer opening immediately on a real-time GLSL ray-marched black hole with gravitational lensing, a Doppler-beamed orange-gold accretion disk, sharp photon ring, and drag-to-orbit controls. Scroll through six hands-on chapters covering the Event Horizon, Photon Sphere light-ray bending, an interactive Time-Dilation Dual Clocks laboratory, Tidal Spaghettification stretching, an Earth-sized VLBI Virtual Telescope baseline simulator, and a logarithmic Stellar-to-Supermassive size comparator—all clearly labelled as simplified educational relativistic physics.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Landing](../../types/landing.md) |
| Style | [Dark](../../styles/dark.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, 3D / WebGL |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/black-hole-interactive-explainer?case=657b7b02-ca74-479b-8ab5-00258c366622&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/black-hole-interactive-explainer/657b7b02-ca74-479b-8ab5-00258c366622/shot_desktop.0d84d6ec7f.webp" width="100%" alt="Black Hole Interactive Explainer — Event Horizon Atlas (Aurelia-X1), built by Gemini 4 Neon in Antigravity"></a><br>
<b>Event Horizon Atlas (Aurelia-X1)</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/black-hole-interactive-explainer?case=657b7b02-ca74-479b-8ab5-00258c366622&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[OBSERVATORY_NAME]` | Publication Name | Event Horizon Atlas |
| `[OBJECT_NAME]` | Featured Specimen | Aurelia-X1 |
| `[MASS_LABEL]` | Featured Mass | 6.5 Billion Solar Masses |
| `[DISTANCE_LABEL]` | Distance Readout | 55 Million Light-Years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add black-hole-interactive-explainer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university physics department: set [OBSERVATORY_NAME] to your lab or course name, [OBJECT_NAME] to a real catalog object, and rewrite the chapter copy for your syllabus.
- A planetarium or science museum: keep the ray-marched hero as the kiosk opening, set [OBJECT_NAME] to your show's subject, and point the chapter jump nav at your exhibit stops.
- An astronomy YouTuber or newsletter writer: use the template as a companion page for an episode, with [OBJECT_NAME] and [MASS_LABEL] matching the video and the VLBI lab as the interactive extra.
- A student portfolio or coursework project: keep the six chapters, set [OBSERVATORY_NAME] to your name, and swap the cosmic scale landmarks for examples you explain in your own words.

## FAQ

### How do I change the black hole, observatory name and distance in the Black Hole Interactive Explainer?
The Black Hole Interactive Explainer template uses four variables: [OBSERVATORY_NAME] for the publication name, [OBJECT_NAME] for the featured specimen, [MASS_LABEL] for the hero mass readout and [DISTANCE_LABEL] for the distance. Set them in the content file the prompt asks for, then rewrite every headline, paragraph and label that mentions the default values so the copy stays consistent with your own object.

### What do the six interactive chapters in the Black Hole Interactive Explainer cover?
The Black Hole Interactive Explainer walks through six chapters: an Event Horizon escape-velocity probe, a Photon Sphere impact-parameter lab for curved light rays, a Time-Dilation Dual Clocks laboratory comparing distant and infalling observers, a Tidal Spaghettification simulator, an Earth-sized VLBI Virtual Telescope with 7 toggleable radio dishes, and a Stellar-to-Supermassive cosmic size comparator. Each chapter pairs plain-English physics copy with an SVG or Canvas instrument you can drag or slide.

### Is there a free interactive black hole website template I can build with AI?
Yes. The Black Hole Interactive Explainer is a free template on VibeFather, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use needs a Pro license. You can run the prompt in an AI coding agent such as Claude Code, Codex, Cursor or Gemini CLI, or add the template with the npx vibefather add black-hole-interactive-explainer command.

### How does the Time-Dilation Dual Clocks lab work in this black hole explainer?
The Time-Dilation Dual Clocks lab in the Black Hole Interactive Explainer shows two live clocks: one for a distant observer and one for an infalling traveler. A slider moves the traveler's radius toward r/rs = 1.01, and the clock rates follow the gravitational time dilation factor sqrt(1 - rs/r), so the traveler's clock visibly slows as it nears the horizon. The prompt labels the model as simplified educational physics.

### Can I use the Black Hole Interactive Explainer to teach general relativity in a classroom?
The Black Hole Interactive Explainer suits physics students, educators and curious readers. Its chapters turn gravitational lensing, time dilation, tidal stretching and Earth-scale interferometry into visual instruments you can drag, and every model is labelled as simplified educational physics. The template is one page with a full-bleed WebGL hero and a stacked HUD on mobile, so it reads on a projector or a phone, and prefers-reduced-motion pauses the auto-orbit while drag controls stay active.

### How do I build a black hole interactive explainer with AI?
Copy the prompt from this page or run npx vibefather add black-hole-interactive-explainer, replace [OBSERVATORY_NAME], [OBJECT_NAME], [MASS_LABEL] and [DISTANCE_LABEL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Black Hole Interactive Explainer demo?
The Event Horizon Atlas (Aurelia-X1) case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Black Hole Interactive Explainer template use?
Black Hole Interactive Explainer is a single-page site built with Three.js, React, Tailwind CSS and Webgl, with scroll animation and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Black Hole Interactive Explainer template for a client or a business?
The Black Hole Interactive Explainer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Black Hole Interactive Explainer template work on mobile?
Yes. Every Black Hole Interactive Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Black Hole Interactive Explainer on VibeFather](https://vibefather.ai/templates/black-hole-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
