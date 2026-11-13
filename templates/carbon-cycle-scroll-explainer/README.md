# Carbon Cycle Scroll Explainer

> Illustrated scroll story of the carbon cycle with live particle flows and an emissions scenario slider.

<a href="https://vibefather.ai/templates/carbon-cycle-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/carbon-cycle-scroll-explainer/eb01a183-6ea2-49da-b6d8-8cb5a4f948aa/webp.642a39c89e.webp" width="100%" alt="Carbon Cycle Scroll Explainer — Illustrated Carbon Cycle Scroll Explainer built by Claude Opus 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/carbon-cycle-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Carbon Cycle Scroll Explainer is a single-page science story built around one illustrated cross-section of sky, land, ocean and rock. The scene is drawn entirely in code and is already moving when the page opens: streams of small glowing particles travel along curved paths between the four reservoirs, and their speed and density show how large each yearly exchange is. As the reader scrolls, the scene stays pinned while short text steps pass by, and the view pans and zooms from the atmosphere to the forest, the open ocean and the fossil layers underground. Then the story turns the clock forward. The thin orange thread rising from the rock thickens through the industrial era, so the imbalance is visible before the text names it. A yearly ledger follows, then the payoff: a scenario slider with three plain-language stops that redraws a temperature curve to the end of the century, updates a large readout and shifts the color of the sky. Every number carries an Illustrative tag, and a closing sources section explains how values were rounded. The look is a dusk-to-deep-sea palette of indigo and teal with molten orange and acid lime flows, flat layered shapes and a fine grain, closer to a poster than a textbook. It suits teachers, science communicators, museums, nonprofits and newsrooms that want an explainer people actually finish. To adapt it, change the topic, the four reservoirs, the four flows and the scenario labels; the same structure works for the water cycle, nitrogen, or any system that moves a quantity between stores. The build is Vite with vanilla TypeScript and GSAP, needs no backend, and falls back to stepped static scenes when reduced motion is on.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md), Illustrated |
| Effects | Generative / Canvas, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Vanilla CSS + gsap + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/carbon-cycle-scroll-explainer?case=eb01a183-6ea2-49da-b6d8-8cb5a4f948aa&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/carbon-cycle-scroll-explainer/eb01a183-6ea2-49da-b6d8-8cb5a4f948aa/shot_desktop.d6851d9e4d.webp" width="100%" alt="Carbon Cycle Scroll Explainer — The carbon cycle, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>The carbon cycle</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/carbon-cycle-scroll-explainer?case=eb01a183-6ea2-49da-b6d8-8cb5a4f948aa&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/carbon-cycle-scroll-explainer?case=eb6c14f8-67fa-4e26-849e-2457046d9d6c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/carbon-cycle-scroll-explainer/eb6c14f8-67fa-4e26-849e-2457046d9d6c/shot_desktop.2c6fb4deb9.webp" width="100%" alt="Carbon Cycle Scroll Explainer — The water cycle, built by Gemini 4 Carbon in Cursor"></a><br>
<b>The water cycle</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/carbon-cycle-scroll-explainer?case=eb6c14f8-67fa-4e26-849e-2457046d9d6c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio or publication name | Lowtide Lab |
| `[TOPIC]` | System the story explains | The carbon cycle |
| `[RESERVOIRS]` | Four reservoirs, in story order | Atmosphere, Land, Ocean, Fossil reserves |
| `[FLOWS]` | Four flows, in story order | Photosynthesis, Respiration and decay, Ocean exchange, Fossil fuel burning |
| `[SCENARIOS]` | Three slider stops, best to worst | Rapid cuts, Current path, High emissions |
| `[OUTCOME]` | What the scenario curve shows | Warming by 2100, in °C |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add carbon-cycle-scroll-explainer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A high-school science department: set BRAND to your school, TOPIC to the nitrogen cycle, and rename the four RESERVOIRS and FLOWS to match your syllabus.
- A natural history museum: keep the carbon story, set BRAND to the museum, and use the SCENARIOS stops to frame the exhibit's closing question for visitors.
- A climate nonprofit: set OUTCOME to your chosen measure, rewrite the ledger rows to your published figures, and label every number Illustrative with the rounding note.
- A newsroom graphics desk: set BRAND to the publication, keep the four reservoirs, and rewrite the text steps as short reported captions for a feature story.

## FAQ

### What does the Carbon Cycle Scroll Explainer page actually show as you scroll?
The Carbon Cycle Scroll Explainer is a single-page illustrated story. One code-drawn cross-section of sky, land, ocean and rock stays pinned while short text steps scroll past, and glowing particles move between the four reservoirs to show how large each yearly flow is. The camera pans and zooms from the atmosphere to the forest, the ocean and the fossil layers, then a yearly ledger and a scenario slider follow.

### How do I change the carbon cycle into the water cycle or another system?
Set TOPIC to your system, then replace RESERVOIRS with four stores in story order and FLOWS with four movements between them. The second live demo already shows the water cycle. Keep the fourth flow as the human-driven one if your story has an imbalance, and rewrite every headline, step, ledger row and sources line to match the new topic with the same length and tone.

### What can I change in the scenario slider at the end of the story?
The SCENARIOS variable holds three plain-language slider stops, best to worst, and OUTCOME sets what the redrawn curve measures, such as warming by 2100 in degrees Celsius. Moving the slider redraws the curve, updates the large readout and shifts the sky tint. Use invented plain labels rather than formal scenario codes so classroom readers understand each stop.

### Is the Carbon Cycle Scroll Explainer free to use, and can I teach with it?
The Carbon Cycle Scroll Explainer is a free template. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, which covers classroom and personal reading. Commercial use, client work and paid teaching products need Pro, which also gives you the full prompt and the demo source code. The template includes a print button and discussion prompts for class use.

### How does the page handle readers who prefer reduced motion or want to print it?
Motion in the Carbon Cycle Scroll Explainer is gated on the reader's reduced-motion setting. When reduced motion is on, the page falls back to stepped static scenes instead of the pinned particle animation, so the story still reads in order. The build also includes print rules and a print button, so teachers can hand out the explainer as a static document.

### How do I build a carbon cycle scroll explainer with AI?
Copy the prompt from this page or run npx vibefather add carbon-cycle-scroll-explainer, replace [BRAND], [TOPIC], [RESERVOIRS] and [FLOWS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Carbon Cycle Scroll Explainer demo?
The The carbon cycle case was built by Claude Opus 5.5 in Claude Code; the The water cycle case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Carbon Cycle Scroll Explainer template use?
Carbon Cycle Scroll Explainer is a single-page site built with GSAP and Plain HTML, with generative / canvas, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Carbon Cycle Scroll Explainer template for a client or a business?
The Carbon Cycle Scroll Explainer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Carbon Cycle Scroll Explainer template work on mobile?
Yes. Every Carbon Cycle Scroll Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Carbon Cycle Scroll Explainer on VibeFather](https://vibefather.ai/templates/carbon-cycle-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
