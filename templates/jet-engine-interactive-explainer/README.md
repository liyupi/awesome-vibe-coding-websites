# Jet Engine Interactive Explainer <sup>PRO</sup>

> A scroll-driven 3D turbofan with cutaways, relative rotor speeds, live airflow, and a working throttle.

<a href="https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/jet-engine-interactive-explainer/c3f78554-75a3-4b98-a3b3-d3091cea8c27/webp.f2b03a5787.webp" width="100%" alt="Jet Engine Interactive Explainer — Interactive 3D Turbofan Engine Explainer built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Jet Engine Interactive Explainer is a single-page engineering lesson built around an original procedural Three.js turbofan, not a downloaded model or a video. The default case presents Aerofield Lab’s AF-09 high-bypass engine for engineering students. It also fits educators, museum teams, technical creators, and aviation communicators who need to show how air moves through a machine and how each major stage contributes to thrust.

The first screen pairs a large rotating engine with a concise introduction and a working throttle. During the main scroll sequence, the nacelle and core casings open in five states: complete engine, fan and bypass, compressor, combustor, and turbine with exhaust. Cool bypass particles, a separate core stream, and heated exhaust make the two airflow paths visible. The fan and low-pressure components share one visual spool speed, while the high-pressure spool turns faster, helping visitors connect the shafts to the parts they drive.

A throttle lab brings rotation, airflow, and explanatory readouts into one synchronized control. Four stage guides link back to precise positions in the tour, and a short knowledge check turns the page from a visual showcase into a usable lesson. Space Grotesk headings, Inter body copy, mono instrumentation, graphite surfaces, and cyan and amber accents create a clear technical exhibit without a crowded cockpit aesthetic.

Everything is drawn from original Three.js primitives, instanced blade geometry, particles, and inline SVG. No photographs, CAD files, textures, or generated images are required. Five variables change the brand, engine type, audience, action label, and model identifier; an alternate turboprop case demonstrates how the same structure can explain another engine. The finished site is static, responsive, keyboard accessible, touch friendly, and usable with reduced motion or without WebGL.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Swiss](../../styles/swiss.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 19 + TypeScript + Vanilla CSS + three + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/jet-engine-interactive-explainer?case=c3f78554-75a3-4b98-a3b3-d3091cea8c27&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/jet-engine-interactive-explainer/c3f78554-75a3-4b98-a3b3-d3091cea8c27/shot_desktop.b11f0a0591.webp" width="100%" alt="Jet Engine Interactive Explainer — High-bypass turbofan, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>High-bypass turbofan</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/jet-engine-interactive-explainer?case=c3f78554-75a3-4b98-a3b3-d3091cea8c27&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/jet-engine-interactive-explainer?case=895eb53b-d7ef-4c97-b7b7-4e01fa6d12ea&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/jet-engine-interactive-explainer/895eb53b-d7ef-4c97-b7b7-4e01fa6d12ea/shot_desktop.d28be4b2c6.webp" width="100%" alt="Jet Engine Interactive Explainer — Turboprop engine, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Turboprop engine</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/jet-engine-interactive-explainer?case=895eb53b-d7ef-4c97-b7b7-4e01fa6d12ea&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Aerofield Lab |
| `[ENGINE]` | Engine subject | High-Bypass Turbofan |
| `[AUDIENCE]` | Audience | engineering students |
| `[PRIMARY_CTA]` | Primary action | Explore the engine |
| `[MODEL_ID]` | Model identifier | AF-09 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university aerospace department: set BRAND to your lab name, ENGINE to your teaching turbofan, and AUDIENCE to first-year mechanical engineering students.
- A science museum exhibit team: keep the turbofan, set PRIMARY_CTA to Start the tour, and point the stage guides at a kiosk-friendly touch layout.
- A technical content creator: set BRAND to your channel, ENGINE to a turboprop, and rewrite the quiz to match your audience's level.
- An aviation training provider: set MODEL_ID to your course engine code, AUDIENCE to maintenance trainees, and adjust the stage captions to your syllabus.

## FAQ

### How does the Jet Engine Interactive Explainer show how air moves through a turbofan?
The Jet Engine Interactive Explainer makes airflow visible with three particle streams: cool bypass particles around the core, a separate core stream through the compressor and combustor, and heated exhaust leaving the turbine. As you scroll, the nacelle and core casings open in five states, and the throttle lab ties particle velocity to the same control that spins the rotors, so visitors can see how each stage contributes to thrust.

### Can I use the Jet Engine Interactive Explainer template to teach a different engine, like a turboprop?
Yes. The Jet Engine Interactive Explainer template is built so that changing the ENGINE variable redesigns the procedural engine architecture, stage data, captions, guide, and quiz while keeping the layout, interaction model, and visual system. The published demos include both a high-bypass turbofan and a turboprop engine, so the same structure can explain another air-breathing machine with four meaningful teaching stages.

### What can I change in the Jet Engine Interactive Explainer template without editing code?
The Jet Engine Interactive Explainer template exposes five variables: BRAND, ENGINE, AUDIENCE, MODEL_ID, and PRIMARY_CTA. Setting BRAND changes the header, lesson copy, and footer, ENGINE and MODEL_ID change the subject and technical labels, AUDIENCE adjusts the hero wording, and PRIMARY_CTA renames the button that enters the scroll tour. All copy lives in one content file so the text can be swapped later without touching components.

### Does the Jet Engine Interactive Explainer work if a visitor's browser cannot run WebGL?
The Jet Engine Interactive Explainer template includes an original inline SVG longitudinal cutaway as a no-WebGL fallback, showing intake, fan, compressor, combustor, turbine, bypass duct, exhaust, and stage labels. All controls still update the HTML readouts when WebGL is unavailable, and the template respects reduced-motion settings by stopping continuous rotor and particle movement while keeping instant cutaway states, manual controls, quiz feedback, and explanatory content.

### What does the throttle lab and knowledge check add to the Jet Engine Interactive Explainer?
The throttle lab in the Jet Engine Interactive Explainer brings rotation, airflow, and explanatory readouts into one synchronized control. At throttle 0 all rotors and particles stop; at throttle 1 the fan, low-pressure compressor, and low-pressure turbine turn at 4.8 radians per second while the high-pressure compressor and turbine turn at 12.5 radians per second, labeled as a visual teaching ratio rather than measured RPM. A short knowledge check and four stage guides turn the page into a usable lesson.

### How do I build a jet engine interactive explainer with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add jet-engine-interactive-explainer, replace [BRAND], [ENGINE], [AUDIENCE] and [PRIMARY_CTA] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Jet Engine Interactive Explainer demo?
The High-bypass turbofan case was built by Kimi K3.1 Pro in Kimi Code; the Turboprop engine case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Jet Engine Interactive Explainer template use?
Jet Engine Interactive Explainer is a single-page site built with Three.js and React, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Jet Engine Interactive Explainer template free to use?
Jet Engine Interactive Explainer is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Jet Engine Interactive Explainer template work on mobile?
Yes. Every Jet Engine Interactive Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Kimi 3D Make Showcase](https://www.kimi.com/showcases/3dmake)
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Jet Engine Interactive Explainer on VibeFather](https://vibefather.ai/templates/jet-engine-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
