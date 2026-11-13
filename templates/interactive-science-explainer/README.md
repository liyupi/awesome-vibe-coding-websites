# Interactive Science Explainer <sup>PRO</sup>

> A calm, science-magazine scrollytelling explainer with a live canvas wave, a phase slider and a quiz.

<a href="https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/quietwave/ba1f1e05-30e6-4ecf-9d7a-c4b6ae82366a/webp.1ddf043e20.webp" width="100%" alt="Interactive Science Explainer — Interactive Science Explainer Scrollytelling Template with Canvas Wave Simulation and Quiz built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Quietwave is a single-page interactive explainer about how noise-cancelling headphones work, laid out like a feature in a printed science magazine. It opens with a large serif headline and a slowly drifting sound wave. Then it walks the reader through four chapters: what a sound wave is, how an opposite wave cancels it, what sits inside an earcup, and why some noise still gets through. It closes with a four-question quiz that gives instant feedback.

It suits science writers, teachers, museum and outreach teams, hardware startups explaining their technology, and anyone who wants to teach one idea well instead of listing features. Everything is drawn in code. The waves are Canvas 2D, the earcup cut-away and the frequency chart are inline SVG, and the site uses no photos, audio or microphone access, so there are no image licenses to track.

The design uses warm off-white paper, deep ink text, hairline rules, figure numbers and italic captions. Two accents carry meaning: teal is always the noise and coral is always the anti-noise. In the scrollytelling chapters a sticky figure changes state as each text step scrolls into view. The phase lab lets the reader drag the coral wave or a slider from 0° to 360° and watch the summed line flatten at 180°, with a live readout of how loud the result is. The earcup diagram builds up one part at a time, with numbered callouts and leader lines. In reduced-motion mode the waves stay still and the steps switch without animation, and every control still works.

To adapt it, change the publication name, the device, the noise source, the reader and the issue label. All copy lives in one content file, and the diagram keeps the same four-part sense, compute, play and check structure.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Drag & Physics, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Plain CSS |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-science-explainer?case=ba1f1e05-30e6-4ecf-9d7a-c4b6ae82366a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/quietwave/ba1f1e05-30e6-4ecf-9d7a-c4b6ae82366a/shot_desktop.831f245214.webp" width="100%" alt="Interactive Science Explainer — Noise-cancelling headphones, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Noise-cancelling headphones</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/interactive-science-explainer?case=ba1f1e05-30e6-4ecf-9d7a-c4b6ae82366a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-science-explainer?case=1ef9a114-6fc0-4ff1-a3ef-f51c59c67d63&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/quietwave/1ef9a114-6fc0-4ff1-a3ef-f51c59c67d63/shot_desktop.43b02e4a7b.webp" width="100%" alt="Interactive Science Explainer — Industrial hearing protection, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Industrial hearing protection</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/interactive-science-explainer?case=1ef9a114-6fc0-4ff1-a3ef-f51c59c67d63&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publication name | Kestrel Review |
| `[DEVICE]` | Device being explained (plural noun phrase) | noise-cancelling headphones |
| `[NOISE_SOURCE]` | Steady noise being cancelled | the low hum of a jet cabin |
| `[READER]` | Who the piece is for | curious commuters |
| `[ISSUE_LABEL]` | Issue / section label | Issue 14 · Acoustics |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A hearing-protection brand: set DEVICE to industrial earmuffs and NOISE_SOURCE to machinery hum, then rewrite the earcup callouts for your own product parts.
- A physics teacher: set BRAND to the school department and READER to students, and rewrite the quiz questions to match your lesson on wave interference.
- A hardware startup: set DEVICE to your sensor or audio product, keep the phase lab, and swap the frequency chart labels for your own measured bands.
- A science museum: set BRAND to the exhibit name and ISSUE_LABEL to the gallery, and rewrite the closing step to invite visitors to try the phase lab on the floor.

## FAQ

### How do I change the Interactive Science Explainer to explain a different device, like a hearing protector or a microphone?
Set the DEVICE variable to the new device and NOISE_SOURCE to the steady sound it cancels, then rewrite the four chapter paragraphs so they still follow the same sense, compute, play and check arc. The phase lab, earcup cut-away and frequency chart keep their structure, and the quiz stays at four questions. All copy sits in one content file, so nothing else needs editing.

### Can I use the Interactive Science Explainer for a museum exhibit or classroom lesson?
The Interactive Science Explainer suits museum and outreach teams and teachers because readers prove the idea themselves: they drag the coral anti-noise wave or the 0° to 360° slider until the summed line flattens at 180°, then check understanding with a four-question quiz. Set BRAND to the museum or school name, READER to visitors or students, and ISSUE_LABEL to the exhibit or lesson label.

### What does the phase slider in the Interactive Science Explainer actually show readers?
The phase lab lets the reader drag the coral anti-noise wave or a slider from 0° to 360° and watch the summed line flatten at 180°, with a live readout of how loud the result is. Teal always marks the noise and coral the anti-noise, so the color carries the meaning. The chapter sits in a sticky figure that changes state as each text step scrolls into view.

### Does the Interactive Science Explainer need audio, video or image files?
The Interactive Science Explainer uses no photos, audio or microphone access. Every figure is drawn in code: the waves are Canvas 2D, the earcup cut-away and the frequency chart are inline SVG. That means no image licenses to track and nothing to load from a media host. The only external assets are the bundled fonts, and the page is a single static build.

### What should I change first when adapting the Interactive Science Explainer for my own publication?
Start with the five variables: BRAND for the publication name, DEVICE for what is being explained, NOISE_SOURCE for the steady sound, READER for the audience and ISSUE_LABEL for the masthead. Then rewrite the headlines and chapter copy in the content file so they read naturally for the new device and noise source. Keep the four-chapter structure, the step count and the four-question quiz.

### How do I build an interactive science explainer with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add interactive-science-explainer, replace [BRAND], [DEVICE], [NOISE_SOURCE] and [READER] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interactive Science Explainer demo?
The Noise-cancelling headphones case was built by Claude Opus 5.5 in Claude Code; the Industrial hearing protection case was built by Claude Opus 5.5 in Claude Code. Each build used the published prompt with nothing added.

### What tech stack and pages does the Interactive Science Explainer template use?
Interactive Science Explainer is a single-page site built with Plain HTML, with drag & physics, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Interactive Science Explainer template free to use?
Interactive Science Explainer is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Interactive Science Explainer template work on mobile?
Yes. Every Interactive Science Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Interactive Science Explainer on VibeFather](https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
