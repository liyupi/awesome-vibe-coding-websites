# How Large Language Models Work <sup>PRO</sup>

> A scrolling explainer that shows, step by step, how a language model chooses the next word.

<a href="https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/how-large-language-models-work/06ce9f05-3be3-4785-9d7d-b3f828de0d42/webp.63a7499a94.webp" width="100%" alt="How Large Language Models Work — Scroll Explainer of How LLMs Generate Text built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a single long-scroll explainer that walks a reader through how a language model turns an unfinished sentence into its next word. A sticky drawing stage sits beside a column of short caption cards, and as each card scrolls into view the stage does exactly one thing. The sentence splits into colored token chips with numbers underneath, the chips fly onto a two-dimensional map where related words cluster, curved lines show which earlier words each token pays attention to, and a bar chart lays out the odds for the next word. The last step hands the reader a temperature slider and a sample-again button, so they can watch a seeded dice roll pick a different ending.

It suits teachers, newsletter writers, course creators and product teams who need to explain a technical process to people who will never read a research paper. The captions are written in plain language, one idea per card, each with an everyday analogy and an inline glossary pill that expands when tapped.

The look is a calm editorial page: warm off-white paper, near-black Fraunces headlines, Inter for reading, JetBrains Mono for tokens and numbers, one vermilion accent and a few muted tints for word groups. Every visual is drawn in SVG, so the build stays small and there are no image licenses to track. A dark mode toggle, a mobile layout with the stage pinned above the cards, and a reduced-motion version that shows each step as a still figure are included.

To adapt it, change the brand, the headline topic, the example sentence and the audience. All copy and data, from token ids to map coordinates, attention weights and probabilities, live in one content file, so the same stage can explain code completion, phone keyboard suggestions or another step-by-step process.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + react, + gsap + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-large-language-models-work?case=06ce9f05-3be3-4785-9d7d-b3f828de0d42&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-large-language-models-work/06ce9f05-3be3-4785-9d7d-b3f828de0d42/shot_desktop.a2582aaa21.webp" width="100%" alt="How Large Language Models Work — Next-word prediction, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Next-word prediction</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/how-large-language-models-work?case=06ce9f05-3be3-4785-9d7d-b3f828de0d42&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-large-language-models-work?case=a9e9d1f1-f3ec-483c-9d84-aadf37fce515&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-large-language-models-work/a9e9d1f1-f3ec-483c-9d84-aadf37fce515/shot_desktop.961761ed90.webp" width="100%" alt="How Large Language Models Work — Code completion, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Code completion</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/how-large-language-models-work?case=a9e9d1f1-f3ec-483c-9d84-aadf37fce515&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-large-language-models-work?case=f5d8001a-e9d6-467b-a9a0-13a61c5c85fb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-large-language-models-work/f5d8001a-e9d6-467b-a9a0-13a61c5c85fb/shot_desktop.1788a05307.webp" width="100%" alt="How Large Language Models Work — Next-word prediction, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Next-word prediction</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/how-large-language-models-work?case=f5d8001a-e9d6-467b-a9a0-13a61c5c85fb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publication or series name | Lantern Guides |
| `[TOPIC]` | Explainer headline | How a language model picks the next word |
| `[EXAMPLE_SENTENCE]` | Unfinished example sentence | After a rainy walk, the sleepy dog curled up by the |
| `[AUDIENCE]` | Who the page is for | curious readers with no engineering background |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university lecturer: set BRAND to your department, TOPIC to how a transformer reads a sentence, and AUDIENCE to first-year students who need the five stages before a lecture.
- A developer tool team: keep the stage but set EXAMPLE_SENTENCE to a half-written function and TOPIC to how code completion suggests the next line for working engineers.
- A newsletter writer: set BRAND to your publication and AUDIENCE to general subscribers, then rewrite each caption analogy so the temperature step reads as a writing habit.
- A product marketing team: set TOPIC to how a search ranking works and swap the token map regions for query clusters, keeping the attention arcs and bar chart.

## FAQ

### How do I change the example sentence in the How Large Language Models Work template?
The How Large Language Models Work template keeps the unfinished sentence in one content file as EXAMPLE_SENTENCE, alongside the tokens, ids, map coordinates, attention rows and candidate probabilities. Pick a sentence that splits into 12 to 16 tokens, includes a word that breaks into two pieces, and has an obvious but not certain next word, then rewrite the captions and regenerate the data to fit it.

### Can I use this scrolling explainer to teach something other than how a language model works?
Yes. The How Large Language Models Work template is built as a generic eight-step scrollytelling stage, so TOPIC, AUDIENCE and EXAMPLE_SENTENCE can be pointed at another step-by-step process. The demo variants already show a next-word prediction page and a code completion page, and the same pinned SVG stage, caption cards, glossary pills and recap strip carry over unchanged.

### Do I need a real AI model or API to run this explainer page?
No. The How Large Language Models Work template runs no model in the browser and calls no external APIs. Every token id, attention weight, map coordinate and next-word probability is invented, illustrative and stored in the content file, so the page builds to static files with Vite and can be hosted anywhere that serves a dist folder.

### What does the temperature slider and sample-again button actually do?
The final step of the How Large Language Models Work template hands the reader a temperature slider and a sample-again button. The slider reshapes the candidate probabilities, and the button runs a seeded dice roll over them to pick an ending, so the reader can re-roll and see a different word chosen from the same bar chart without any live model behind it.

### What can I use the How Large Language Models Work template for commercially?
The How Large Language Models Work template is a Pro template: the brief, stack and variables are public, the full prompt is visible to Pro members, and the demo source code comes with Pro. Commercial and client use, such as a paid course or a company explainer page, requires Pro. Free prompts and every DESIGN.md are licensed for personal, non-commercial use.

### How do I build a how large language models work with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add how-large-language-models-work, replace [BRAND], [TOPIC], [EXAMPLE_SENTENCE] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the How Large Language Models Work demo?
The Next-word prediction case was built by Claude Opus 5.5 in Claude Code; the Code completion case was built by Claude Sonnet 5.5 in Claude Code; the Next-word prediction case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the How Large Language Models Work template use?
How Large Language Models Work is a single-page site built with Tailwind CSS, GSAP and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the How Large Language Models Work template free to use?
How Large Language Models Work is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the How Large Language Models Work template work on mobile?
Yes. Every How Large Language Models Work build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [How Large Language Models Work on VibeFather](https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
