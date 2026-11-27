# Engineering Tech Talk Slide Deck

> A dark 12-slide conference engineering talk deck with interactive architecture, code diffs, and live benchmarks.

<a href="https://vibefather.ai/templates/engineering-tech-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/engineering-tech-talk-slide-deck/6ea57c54-a834-4597-852a-15465159b0f5/webp.61466eee58.webp" width="100%" alt="Engineering Tech Talk Slide Deck — Dark Engineering Conference Talk Slide Deck built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/engineering-tech-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Crafted for staff engineers, systems architects, and developer advocates delivering technical conference talks, this dark-mode 12-slide presentation deck makes distributed systems concepts tactile on stage and readable in the browser. Set on an obsidian background accented with terminal mint, electric cyan, and muted slate typography, it replaces static screenshot slides with live interactive diagrams and hand-styled syntax-highlighted code diffs. The talk follows a realistic engineering case study about scaling a high-throughput real-time event pipeline past one million messages per second while cutting tail latency. Speakers open with a stark title slide and scale bottleneck telemetry before stepping into an interactive SVG distributed architecture diagram where clicking any stage—from edge ingest and partition router to ring-buffer worker and columnar sink—highlights packet paths and displays live throughput and queue-depth specs. Dedicated engineering slides present side-by-side before-and-after p99 latency and throughput charts, two syntax-highlighted code diff walkthroughs with selectable line callouts explaining lock-free batching and backpressure, and a live toggleable benchmark slide comparing queue engines across payloads. Closing slides share candid post-mortem lessons learned, operational guardrails, and a developer Q&A slide complete with a code-drawn geometric QR card and repository links. Standard web deck controls include keyboard, spacebar, and touch-swipe navigation, a bottom progress bar, a G-key thumbnail overview grid, an N-key speaker notes drawer with a talk timer, F-key fullscreen mode, and a high-contrast print stylesheet. Replace the talk title, speaker handle, system name, and code snippets in one TypeScript data file to adapt the deck for your next conference.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Slide Deck](../../types/slides.md), [Docs](../../types/docs.md) |
| Style | [Dark](../../styles/dark.md), [Terminal](../../styles/terminal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/engineering-tech-talk-slide-deck?case=6ea57c54-a834-4597-852a-15465159b0f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/engineering-tech-talk-slide-deck/6ea57c54-a834-4597-852a-15465159b0f5/shot_desktop.7b5537298e.webp" width="100%" alt="Engineering Tech Talk Slide Deck — Real-time event pipeline talk, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Real-time event pipeline talk</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/engineering-tech-talk-slide-deck?case=6ea57c54-a834-4597-852a-15465159b0f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/engineering-tech-talk-slide-deck?case=f0ca5083-9f6d-4499-8124-49e3d3e38783&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/engineering-tech-talk-slide-deck/f0ca5083-9f6d-4499-8124-49e3d3e38783/shot_desktop.f3d7cafe4c.webp" width="100%" alt="Engineering Tech Talk Slide Deck — Distributed SQL query engine talk, built by GLM-5.4 in ZCode"></a><br>
<b>Distributed SQL query engine talk</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/engineering-tech-talk-slide-deck?case=f0ca5083-9f6d-4499-8124-49e3d3e38783&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | System or platform name | FluxPipe |
| `[TALK_TITLE]` | Conference talk title | Scaling Real-Time Event Pipelines to 1.4M msg/sec |
| `[SPEAKER_NAME]` | Speaker name | Marcus Chen |
| `[SPEAKER_ROLE]` | Speaker title | Staff Systems Engineer |
| `[HANDLE]` | Speaker handle / domain | @mchen.systems |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add engineering-tech-talk-slide-deck` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A database team presenting a query engine rewrite: set BRAND to your engine, swap the five architecture stages for parser, planner, executor and storage, and replace the code diffs with your optimizer changes.
- A platform team running an incident post-mortem: keep the telemetry cards and timeline, rewrite the bottleneck panels for your outage, and turn the lessons slide into your guardrails and follow-up actions.
- A developer advocate giving a 35-minute conference talk: set TALK_TITLE, SPEAKER_NAME and HANDLE, then fill the speaker notes drawer with your script and use the talk timer while rehearsing.
- An SRE team teaching backpressure: replace the benchmark toggles with your queue engine comparisons and use the code diff callouts to explain batching and prefetch limits to new engineers.

## FAQ

### What is included in the Engineering Tech Talk Slide Deck template?
The Engineering Tech Talk Slide Deck template is a 12-slide dark conference deck. It includes a title slide with an animated telemetry preview, bottleneck stat cards, a root-cause breakdown, an interactive 5-stage architecture diagram, before-and-after p99 latency and throughput charts, two syntax-highlighted code diff walkthroughs with line callouts, a toggleable benchmark comparison, post-mortem lessons, and a Q&A slide with a code-drawn QR card. Navigation, overview grid, speaker notes, and print styles are built in.

### How do I change the talk title, speaker name and system name in this slide deck?
Set the BRAND, HANDLE, TALK_TITLE, SPEAKER_NAME and SPEAKER_ROLE variables in the deck's TypeScript data file. The default copy is written for FluxPipe, Marcus Chen and a talk about scaling a real-time event pipeline, so rewrite every headline, paragraph and label that references them. The layout, colors and motion stay as designed, and all talk copy sits in one content file so you can swap it without touching components.

### Can I present this deck live from the browser at a conference?
Yes. The Engineering Tech Talk Slide Deck template runs as a static site with keyboard, spacebar and touch-swipe navigation. A bottom status bar shows the slide index and a clickable progress bar. Press G for a thumbnail overview grid, N for speaker notes with a talk timer, and F for fullscreen. A high-contrast print stylesheet lets you export the deck as landscape PDF pages, one slide per page, without navigation chrome.

### Is there a free engineering conference slide deck template I can build with AI?
The Engineering Tech Talk Slide Deck template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use, including paid conference work, needs Pro, which also gives you the full prompt and the source code of the live demos. You can add it to a project with the command npx vibefather add engineering-tech-talk-slide-deck.

### How do I adapt this deck for a talk about a different system or a different engineering topic?
Adapt the Engineering Tech Talk Slide Deck template by replacing the case study copy in the data file: the system name, the bottleneck stats, the five architecture stages, the code diff snippets, and the benchmark datasets. The interactive diagram, charts and callouts read from that data, so a talk about a query engine or a storage layer keeps the same structure and interactions. The live demos include a distributed SQL query engine talk built from the same prompt.

### How do I build an engineering tech talk slide deck with AI?
Copy the prompt from this page or run npx vibefather add engineering-tech-talk-slide-deck, replace [BRAND], [TALK_TITLE], [SPEAKER_NAME] and [SPEAKER_ROLE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Engineering Tech Talk Slide Deck demo?
The Real-time event pipeline talk case was built by Gemini 4 Neon in Antigravity; the Distributed SQL query engine talk case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Engineering Tech Talk Slide Deck template use?
Engineering Tech Talk Slide Deck is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Engineering Tech Talk Slide Deck template for a client or a business?
The Engineering Tech Talk Slide Deck prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Engineering Tech Talk Slide Deck template work on mobile?
Yes. Every Engineering Tech Talk Slide Deck build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Engineering Tech Talk Slide Deck on VibeFather](https://vibefather.ai/templates/engineering-tech-talk-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
