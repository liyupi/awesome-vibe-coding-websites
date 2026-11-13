# Hand-Drawn Scroll Explainer <sup>PRO</sup>

> A six-scene scroll explainer where a hand-drawn stick figure sketches any process while you scroll.

<a href="https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/hand-drawn-scroll-explainer/2a75af7e-817b-4a70-ad93-7fef287c34fc/webp.07d7bc9b64.webp" width="100%" alt="Hand-Drawn Scroll Explainer — Hand-Drawn Scroll Storytelling Explainer Page with Animated SVG Stick Figure built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Scribbl is a single-page scroll explainer drawn entirely in code. A stick-figure narrator stands beside an index card pinned to ruled paper. As the visitor scrolls, each of six scenes draws itself stroke by stroke: the main doodle, a highlighter scribble filling it, labels with curved arrows, and a speech bubble that writes itself out one letter at a time. The default content explains photosynthesis in six steps (sunlight, leaf, water, carbon dioxide, glucose and oxygen), then brings every doodle together in a recap diagram with the full equation, a short cheat sheet and a hand-drawn button that starts the page over.

It suits teachers, science communicators, edtech products and any team that needs to explain a process in a friendly way. Product onboarding, "how it works" pages and internal training all fit the same six-step-plus-recap structure. Because the topic, the six key parts, the audience and the narrator's name are variables, one prompt can explain a plant, a web request or a recipe without the look changing.

Design highlights include warm off-white paper with faint blue rules and a red margin line, fine SVG grain, and ink-black marker strokes with a slight wobble from an SVG displacement filter. The lines also gently "boil" while a scene is active. Each scene has its own highlighter colour. A dotted progress trail with circled scene numbers runs down the right edge on desktop and along the bottom on mobile. The narrator's arms shift between poses (pointing, thinking, shrugging, holding, cheering), and the figure blinks.

To adapt it, change the variables and rewrite the copy in the one content file. Then choose a glyph for each scene from the built-in library of twelve doodles. There are no bitmaps to replace, the fonts are self-hosted OFL faces, and with reduced motion turned on the whole page shows fully drawn and static.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Playful](../../styles/playful.md) |
| Effects | Text Animation, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + TypeScript + Vanilla CSS + gsap |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hand-drawn-scroll-explainer?case=2a75af7e-817b-4a70-ad93-7fef287c34fc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hand-drawn-scroll-explainer/2a75af7e-817b-4a70-ad93-7fef287c34fc/shot_desktop.294ea30624.webp" width="100%" alt="Hand-Drawn Scroll Explainer — Photosynthesis, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Photosynthesis</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/hand-drawn-scroll-explainer?case=2a75af7e-817b-4a70-ad93-7fef287c34fc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hand-drawn-scroll-explainer?case=bd9271da-e69f-4c16-9b4f-03d0f433db92&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hand-drawn-scroll-explainer/bd9271da-e69f-4c16-9b4f-03d0f433db92/shot_desktop.ed8d02473d.webp" width="100%" alt="Hand-Drawn Scroll Explainer — How a web page loads, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>How a web page loads</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/hand-drawn-scroll-explainer?case=bd9271da-e69f-4c16-9b4f-03d0f433db92&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand / publisher name | Scrawlhouse |
| `[TOPIC]` | Process being explained | Photosynthesis |
| `[AUDIENCE]` | Who it's for | curious kids aged 9–13 and the grown-ups who get asked “but how?” |
| `[KEY_PARTS]` | Six key parts, in scene order | Sunlight, Leaf, Water, Carbon dioxide, Glucose, Oxygen |
| `[NARRATOR_NAME]` | Narrator's name | Pip |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A science communicator explaining how a vaccine works: set TOPIC to the immune response, name the six KEY_PARTS as its stages, and keep the narrator friendly and plain-spoken.
- An edtech product teaching onboarding: set BRAND to your product, make TOPIC your setup flow, and rewrite the six scenes as the steps a new user takes.
- A cooking school explaining a technique: set TOPIC to bread fermentation, choose six KEY_PARTS such as flour, water, yeast and time, and swap the cheat sheet for your key ratios.
- An internal training team explaining a company process: set AUDIENCE to new hires, set TOPIC to your request workflow, and use the recap diagram as the one-page summary they keep.

## FAQ

### How do I change the topic from photosynthesis to something else?
The Hand-Drawn Scroll Explainer template keeps the topic in a single content file, so you set the TOPIC variable, rewrite the six scene titles, notes, labels and speech bubbles, and pick a doodle from the twelve-glyph library for each scene. The structure stays six scenes plus a recap, so the process you explain has to split cleanly into six parts.

### Can I use the Hand-Drawn Scroll Explainer for client work or a paid course?
Yes, with Pro. The Hand-Drawn Scroll Explainer is a Pro template: Pro members see the full prompt and get the source code of the demos, which covers commercial and client use. Free templates' prompts and every DESIGN.md stay free for personal, non-commercial use only. If you are building an explainer for a paying client or a paid course, you need Pro.

### What can I change about the stick-figure narrator?
The narrator's name is the NARRATOR_NAME variable, so you can rename the stick figure to fit your brand. The figure switches between pointing, thinking, shrugging, holding and cheering poses per scene, and it blinks. The poses and the drawing style stay as built; you choose which pose each of the six scenes uses when you write the scene list.

### How does the scroll animation work, and what happens if someone prefers reduced motion?
The Hand-Drawn Scroll Explainer draws each scene stroke by stroke as the visitor scrolls, using GSAP ScrollTrigger to scrub the SVG stroke offsets. A highlighter scribble fills the doodle, labels and curved arrows appear, and the speech bubble writes itself letter by letter. With reduced motion turned on, the whole page shows fully drawn and static.

### Can I print or share the recap diagram from the Hand-Drawn Scroll Explainer?
Yes. The Hand-Drawn Scroll Explainer includes a print stylesheet that hides the top bar, progress trail, intro and the six scenes, and prints only the recap diagram and cheat sheet on white. The recap brings all six doodles into one flow diagram with the full equation, and the closing hand-drawn button starts the page over so a visitor can replay it.

### How do I build a Hand-Drawn scroll explainer with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add hand-drawn-scroll-explainer, replace [BRAND], [TOPIC], [AUDIENCE] and [KEY_PARTS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Hand-Drawn Scroll Explainer demo?
The Photosynthesis case was built by Claude Opus 5.5 in Claude Code; the How a web page loads case was built by Claude Opus 5.5 in Claude Code. Each build used the published prompt with nothing added.

### What tech stack and pages does the Hand-Drawn Scroll Explainer template use?
Hand-Drawn Scroll Explainer is a single-page site built with GSAP and Plain HTML, with text animation, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Hand-Drawn Scroll Explainer template free to use?
Hand-Drawn Scroll Explainer is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Hand-Drawn Scroll Explainer template work on mobile?
Yes. Every Hand-Drawn Scroll Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Hand-Drawn Scroll Explainer on VibeFather](https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
