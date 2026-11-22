# Sorting Algorithms Visualizer

> Step through five sorting algorithms on a live bar stage, then race any two on the same array.

<a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/sorting-algorithms-visualizer/f6c7f3cf-3fe4-46b6-ad4c-66ea6694496b/webp.0873e3851c.webp" width="100%" alt="Sorting Algorithms Visualizer — Interactive Sorting Visualizer with Race Mode built by Claude Opus 5.5, Claude Sonnet 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/sorting-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template is a working sorting lab, not a page about one. The first screen is the tool itself: a large bar stage drawn on canvas, with play, pause, single-step and scrubbing controls attached directly beneath it. Five algorithms are included: bubble, insertion, merge, quick and heap sort. Each one first produces a complete list of compare, swap, write and mark-final steps, so playback is fully deterministic. You can step backward as easily as forward, and the same seed always gives the same run.

It suits computer science students, teachers building a lesson, developers preparing for interviews, and anyone who wants a strong example of real logic in a generated site. The look is a dark instrument panel: graphite surfaces, a faint grid, amber for compares, cyan for swaps and writes, and live counters set in a mono typeface beside the stage.

Below the stage, complexity cards list best, average and worst time, space and stability, plus step counts measured on the array currently loaded. Race mode runs two chosen algorithms on one array and one clock, with separate counters and a flag for whichever finishes in fewer steps. A pattern table shows total steps for every algorithm against random, nearly sorted, reversed and few-unique input, and selecting a cell loads that run.

To adapt it, change the brand, the audience, what the bars represent and the everyday setting used in the explanations. A school library club can sort books by height, while a study tool can sort numbered cards, and the layout stays the same. The step engine is separate from the interface, so you can add another sorting algorithm by writing one more step generator. Everything runs in the browser, works on a phone with thumb-reach controls, and falls back to manual stepping when reduced motion is on.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Interactive Toy](../../types/toy.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=f6c7f3cf-3fe4-46b6-ad4c-66ea6694496b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sorting-algorithms-visualizer/f6c7f3cf-3fe4-46b6-ad4c-66ea6694496b/shot_desktop.4ffd6302fd.webp" width="100%" alt="Sorting Algorithms Visualizer — Sorting numbered cards, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Sorting numbered cards</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=f6c7f3cf-3fe4-46b6-ad4c-66ea6694496b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=76f85520-c654-47a3-aeec-90c064767b20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sorting-algorithms-visualizer/76f85520-c654-47a3-aeec-90c064767b20/shot_desktop.abf37cd30b.webp" width="100%" alt="Sorting Algorithms Visualizer — School library shelf, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>School library shelf</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=76f85520-c654-47a3-aeec-90c064767b20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=40ef5a2a-8c8c-4fa4-b215-cc9ea14eec89&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sorting-algorithms-visualizer/40ef5a2a-8c8c-4fa4-b215-cc9ea14eec89/shot_desktop.bd391f09f9.webp" width="100%" alt="Sorting Algorithms Visualizer — Sorting index tiles, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Sorting index tiles</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/sorting-algorithms-visualizer?case=40ef5a2a-8c8c-4fa4-b215-cc9ea14eec89&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Name of the tool | Swapyard |
| `[AUDIENCE]` | Who it is for | computer science students and developers preparing for interviews |
| `[ITEMS]` | What the bars stand for, plural | numbered cards |
| `[MEASURE]` | What the bars are sorted by | number |
| `[SETTING]` | Everyday setting for the explanations | a table of numbered cards |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add sorting-algorithms-visualizer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A school library club: set BRAND to the club name, ITEMS to books and MEASURE to height, and rewrite the SETTING explanations around a shelf being tidied.
- An interview prep study tool: set AUDIENCE to candidates, keep ITEMS as numbered cards, and point the notes at comparing step counts before a technical interview.
- A classroom lesson demo: set BRAND to the course name and SETTING to a row of numbered cards on a desk, then use race mode to show two algorithms on the same input.
- A developer portfolio piece: set BRAND to your own name, keep the numbered cards and MEASURE as number, and use the pattern table as a live example of real logic.

## FAQ

### What does the Sorting Algorithms Visualizer template actually include?
The Sorting Algorithms Visualizer template is a single-page sorting lab with a canvas bar stage and transport controls for play, pause, single-step, step back, scrub and reset. It includes bubble, insertion, merge, quick and heap sort, complexity cards with live step counts, a race mode for two algorithms on one array, and a pattern table comparing random, nearly sorted, reversed and few-unique input.

### How do I change what the bars represent in the Sorting Algorithms Visualizer?
Set ITEMS to the plural name of what the bars stand for and MEASURE to what they are sorted by, then rewrite the stage caption, hover readout and step narration to match. The SETTING variable holds the everyday scene used in the five algorithm explanations and the notes, so update those lines too. The layout, colors and motion stay as they are.

### Can I add another sorting algorithm to the Sorting Algorithms Visualizer?
Yes. The Sorting Algorithms Visualizer keeps its step engine separate from the interface, so a new algorithm is one more step generator that returns a full list of compare, swap, write and sorted steps. Bubble, insertion, merge, quick and heap sort each follow that pattern, and the player, counters and race mode pick up the new algorithm without other changes.

### Is the Sorting Algorithms Visualizer template free to use?
The Sorting Algorithms Visualizer template is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives Pro members the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly.

### How do I run the Sorting Algorithms Visualizer template locally?
Add the Sorting Algorithms Visualizer template to a project with the command npx vibefather add sorting-algorithms-visualizer, then install dependencies and start the Vite dev server. The build produces static files in dist/ with no backend, no server code and no external APIs, so you can host the output on any static host and open it straight in a browser.

### How do I build a sorting algorithms visualizer with AI?
Copy the prompt from this page or run npx vibefather add sorting-algorithms-visualizer, replace [BRAND], [AUDIENCE], [ITEMS] and [MEASURE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Sorting Algorithms Visualizer demo?
The Sorting numbered cards case was built by Claude Opus 5.5 in Claude Code; the School library shelf case was built by Claude Sonnet 5.5 in Claude Code; the Sorting index tiles case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Sorting Algorithms Visualizer template use?
Sorting Algorithms Visualizer is a single-page site built with React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Sorting Algorithms Visualizer template for a client or a business?
The Sorting Algorithms Visualizer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Sorting Algorithms Visualizer template work on mobile?
Yes. Every Sorting Algorithms Visualizer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Sorting Algorithms Visualizer on VibeFather](https://vibefather.ai/templates/sorting-algorithms-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
