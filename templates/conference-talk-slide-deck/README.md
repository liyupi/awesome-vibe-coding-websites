# Conference Talk Slide Deck

> Stage-black slide website with keyboard navigation, code slides with hand-rolled highlighting, an overview grid and a print handout.

<a href="https://vibefather.ai/templates/conference-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/conference-talk-slide-deck/7d0ae8ba-325d-4156-8dbc-05d47da9f4c2/webp.8515aad974.webp" width="100%" alt="Conference Talk Slide Deck — Talk Slides with Keyboard Nav built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/conference-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page slide deck that runs a conference talk in the browser: seven slide types (title, agenda, statement, bullets, code, two-column, closing) driven entirely by the keyboard — arrows and space advance, Home/End jump, number keys go to slide N, G opens an overview grid, S opens speaker notes; every slide is deep-linkable (#/3) with the counter and a thin progress bar always visible. Code slides use large mono type with a tiny hand-rolled tokenizer for highlighting and line-focus stepping; the aesthetic is stage black with one warm spotlight accent and huge display type — zero images, everything drawn in code. A print stylesheet outputs one slide per page as a handout. The default deck presents an invented talk by an invented speaker, but the structure suits any technical or narrative talk. All copy lives in one typed file; swapping the variables rewrites the deck.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | Slide Deck, [App](../../types/app.md) |
| Style | [Dark](../../styles/dark.md), Typography |
| Effects | Keyboard, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/conference-talk-slide-deck?case=7d0ae8ba-325d-4156-8dbc-05d47da9f4c2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/conference-talk-slide-deck/7d0ae8ba-325d-4156-8dbc-05d47da9f4c2/shot_desktop.45600786f7.webp" width="100%" alt="Conference Talk Slide Deck — Technical conference talk, built by GLM-5.3 in ZCode"></a><br>
<b>Technical conference talk</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/conference-talk-slide-deck?case=7d0ae8ba-325d-4156-8dbc-05d47da9f4c2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/conference-talk-slide-deck?case=f09a8ddc-9f20-44e0-bd72-46077a6740ff&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/conference-talk-slide-deck/f09a8ddc-9f20-44e0-bd72-46077a6740ff/shot_desktop.b13134c0aa.webp" width="100%" alt="Conference Talk Slide Deck — Design talk deck, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Design talk deck</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/conference-talk-slide-deck?case=f09a8ddc-9f20-44e0-bd72-46077a6740ff&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[SPEAKER]` | Speaker name | Elena Marsh |
| `[TALK]` | Talk title | Ship Small, Sleep Well |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add conference-talk-slide-deck` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A developer advocate presenting at a meetup: set TALK to the session title and SPEAKER to your name, then replace the code slides with your own snippets and speaker notes.
- A design lead running a portfolio review: keep the statement and two-column slides, swap the agenda for your project list and rewrite the closing slide as your contact line.
- A conference organizer building a speaker pack: set TALK to the event name, use the agenda slide for the day's schedule and print the deck as a one-slide-per-page handout.
- A course instructor teaching a technical topic: turn the bullets and code slides into lesson steps, add your own speaker notes and share the deep links per lesson.

## FAQ

### How do I change the talk title and speaker name in the Conference Talk Slide Deck template?
The Conference Talk Slide Deck template keeps all copy in one typed content file, and the two variables are TALK and SPEAKER. Set TALK to your talk title and SPEAKER to your name, then rewrite every headline, bullet and speaker note to match, since the default deck presents an invented talk. Layout, colors and keyboard behavior stay as built.

### What keyboard controls does the Conference Talk Slide Deck give a presenter?
The Conference Talk Slide Deck template runs entirely from the keyboard: arrow keys, space and backspace move between slides, Home and End jump to the first and last, number keys go to a slide, G opens the overview grid, S opens speaker notes and Escape closes overlays. Every on-screen button that mirrors a key shows the key hint in a small mono chip.

### Can I print the Conference Talk Slide Deck as a handout for the audience?
Yes. The Conference Talk Slide Deck template includes a print stylesheet that outputs one slide per page, with backgrounds preserved and the progress bar and overlays hidden. A quiet Print handout button with a printer icon sits beside the slide counter, so a speaker can produce a paper handout from the same deck they present.

### How do code slides work in the Conference Talk Slide Deck template?
Code slides in the Conference Talk Slide Deck template show large mono type on a dark panel, colored by a small hand-rolled tokenizer that marks strings, numbers, comments, keywords and functions. The full code is always visible, and arrow up and down optionally move a warm underline between numbered lines to focus the audience on one line at a time. The right column carries the slide's point.

### Can I share a link to one specific slide in the Conference Talk Slide Deck?
Yes. Every slide in the Conference Talk Slide Deck template is deep-linkable with a hash address such as #/3, and the deck keeps the browser address in sync as you navigate. Send that link and the visitor lands on the slide you meant, with the counter and thin progress bar still visible so they can move forward or back.

### How do I build a conference talk slide deck with AI?
Copy the prompt from this page or run npx vibefather add conference-talk-slide-deck, replace [SPEAKER] and [TALK] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Conference Talk Slide Deck demo?
The Technical conference talk case was built by GLM-5.3 in ZCode; the Design talk deck case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Conference Talk Slide Deck template use?
Conference Talk Slide Deck is a single-page site built with React, Motion and Tailwind CSS, with keyboard and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Conference Talk Slide Deck template for a client or a business?
The Conference Talk Slide Deck prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Conference Talk Slide Deck template work on mobile?
Yes. Every Conference Talk Slide Deck build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Conference Talk Slide Deck on VibeFather](https://vibefather.ai/templates/conference-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
