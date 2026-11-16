# How the Human Heart Works

> A beating SVG heart with a BPM slider, scroll steps along the blood path and a live ECG trace.

<a href="https://vibefather.ai/templates/how-the-human-heart-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/how-the-human-heart-works/f30c9872-d1dc-4886-995b-5fe9452eb4a4/webp.2b46a382f3.webp" width="100%" alt="How the Human Heart Works — Animated SVG Heart Anatomy Explainer built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/how-the-human-heart-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template is a single-page science explainer built around one working diagram: a stylized cross-section of the heart that beats as soon as the page opens. Chambers change size, valve leaflets swing, particles of blood move through the vessels and a phosphor-green ECG trace sweeps along the bottom of the screen, all driven by one clock so nothing drifts out of step. A slider sets the rate from 40 to 180 beats per minute, and the timing responds the way the real cycle does: the resting part of the beat shrinks far more than the squeezing part. Further down, the diagram sticks in place while ten scroll steps follow one drop of blood through the right side, the lungs, the left side and the body, dimming everything except the part being described. Other sections let readers step through the five moments of a beat, compare timings across rates, take apart the trace and watch each valve up close. It suits science teachers, students, science communicators and anyone who wants a link they can share in a lesson. The look is a deep aubergine ground with saturated cobalt and scarlet carrying real meaning: oxygen-poor and oxygen-rich blood. Every shape comes from coordinates in the prompt, with no photographs, so the result stays consistent between builds. Readers who prefer reduced motion get a stepped version with manual controls. To adapt it, change the variables: the subject, the rate control, the ten stops along the path and the trace signal. The prompt then asks for a new diagram on the same canvas, so an engine, a pump or another body system keeps the same layout, clock and two-color logic. It is an educational model and includes no diagnostic features.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Plain CSS + gsap + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-the-human-heart-works?case=f30c9872-d1dc-4886-995b-5fe9452eb4a4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-the-human-heart-works/f30c9872-d1dc-4886-995b-5fe9452eb4a4/shot_desktop.911915bfac.webp" width="100%" alt="How the Human Heart Works — Human heart, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Human heart</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/how-the-human-heart-works?case=f30c9872-d1dc-4886-995b-5fe9452eb4a4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-the-human-heart-works?case=65ef426f-9f72-4f45-8338-84b4b54c9fec&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-the-human-heart-works/65ef426f-9f72-4f45-8338-84b4b54c9fec/shot_desktop.dfe6c2fa94.webp" width="100%" alt="How the Human Heart Works — Four-stroke car engine, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Four-stroke car engine</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/how-the-human-heart-works?case=65ef426f-9f72-4f45-8338-84b4b54c9fec&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publisher name | Cutaway Lab |
| `[TOPIC]` | Subject, in lowercase mid-sentence form | the human heart |
| `[AUDIENCE]` | Who it is for | curious adults and high school biology classes |
| `[RATE_CONTROL]` | Slider name, range and starting value | Heart rate: 40–180 BPM, starting at 72 |
| `[FLOW_PATH]` | The two states and ten stops | Cobalt, oxygen-poor blood: right atrium, tricuspid valve, right ventricle, pulmonary valve, lungs. Scarlet, oxygen-rich blood: left atrium, mitral valve, left ventricle, aortic valve, body. |
| `[TRACE_SIGNAL]` | The live trace and its marks | Stylized ECG with P, QRS and T marks |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add how-the-human-heart-works` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A biology teacher: set BRAND to your name, keep TOPIC as the human heart, and rewrite the scroll stops for the circulatory path your class covers.
- A science communicator: point TOPIC at another body system, map cobalt and scarlet to its two states and redraw the diagram on the same canvas.
- A engineering educator: set TOPIC to a four-stroke engine, take the ten stops from the piston cycle and swap the ECG trace for a pressure signal.
- A museum or outreach team: set AUDIENCE to visiting families, shorten the step captions and keep the rate slider as the hands-on control.

## FAQ

### How does the beating heart diagram and ECG trace stay in sync on the page?
The How the Human Heart Works template runs one clock for the whole page. Each frame advances that clock once, then draws every moving part from the same time value: chamber sizes, valve leaflets, blood particles and the phosphor-green ECG sweep. Because no CSS animation or separate timeline drives a beating part, the diagram and trace cannot drift apart, and the rate slider takes effect on the same frame you drag it.

### What does the BPM slider actually change when I move it?
The slider in the How the Human Heart Works template sets the rate from 40 to 180 beats per minute, starting at 72. Changing the rate recalculates the whole cycle: the squeezing part stays roughly fixed while the resting and filling part shrinks, so at high rates the ventricle visibly fills less. The template keeps your place in the current beat when you drag, so the animation never jumps.

### Can I change the ten scroll steps to follow a different path?
Yes. The ten scroll stops come from the FLOW_PATH variable, which holds two states and exactly five stops per state in travel order. The default follows oxygen-poor blood through the right side and lungs, then oxygen-rich blood through the left side and body. Replace those ten stops with your own sequence and the sticky diagram will dim everything except the part being described at each step.

### What happens for readers who prefer reduced motion?
The How the Human Heart Works template gives readers who prefer reduced motion a stepped version of the diagram with manual controls instead of continuous animation. They can still move through the beat and the scroll steps at their own pace. The same timing model draws every frame, so the stepped view shows the same phases, valve states and trace shapes as the animated one.

### Can I reuse this template for a topic other than the human heart?
The How the Human Heart Works template is built to be redrawn for another subject. The prompt asks for a fresh stylized cross-section on the same canvas, with cobalt and scarlet mapped to the two states in FLOW_PATH, the slider taken from RATE_CONTROL, the trace from TRACE_SIGNAL and all copy rewritten so no heart vocabulary remains. A four-stroke car engine demo shows the same layout and clock applied to a machine.

### How do I build a how the human heart works with AI?
Copy the prompt from this page or run npx vibefather add how-the-human-heart-works, replace [BRAND], [TOPIC], [AUDIENCE] and [RATE_CONTROL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the How the Human Heart Works demo?
The Human heart case was built by Claude Opus 5.5 in Claude Code; the Four-stroke car engine case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the How the Human Heart Works template use?
How the Human Heart Works is a single-page site built with GSAP and Plain HTML, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the How the Human Heart Works template for a client or a business?
The How the Human Heart Works prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the How the Human Heart Works template work on mobile?
Yes. Every How the Human Heart Works build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [How the Human Heart Works on VibeFather](https://vibefather.ai/templates/how-the-human-heart-works?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
