# Typing Speed Race Game

> Race a ghost car with every keystroke, track live WPM, and beat your personal best.

<a href="https://vibefather.ai/templates/typing-speed-race-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/typing-speed-race-game/deae1ec5-aea3-4056-97c0-d7bc34dd0998/webp.228966e72f.webp" width="100%" alt="Typing Speed Race Game — Typing Race with Ghost Cars and Live WPM built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/typing-speed-race-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Typing Speed Race Game is a single-page browser game that turns typing practice into a visible race. A cyan player car and an amber ghost move along a code-drawn night circuit as the visitor types. The typing console shows character-level correctness, a live caret, WPM, accuracy, and elapsed time. Easy, Medium, and Hard modes supply different passages and ghost speeds, so the same page works for a first practice session or a serious attempt at a personal record.

The visual direction is a compact race-control interface rather than a conventional landing page. Deep indigo asphalt, electric cyan, signal coral, and warm gold give the game a distinct identity. Chakra Petch headings and IBM Plex Mono telemetry keep the display sharp, while geometric cars, lane markings, start lights, and progress readouts provide the visual anchor without stock images. The first screen contains the actual game and concise instructions, not a separate promotional hero.

This template suits educators, students, coding communities, and anyone making a small interactive challenge. It is also a useful starting point for a typing club, classroom warm-up, or personal practice page. The results view calculates the final score, compares it with earlier runs, and generates a 1200 × 630 PNG share card locally. A personal-best table and recent-run history persist in localStorage; there are no accounts, remote leaderboards, or invented online opponents.

Four variables control the brand, tagline, passage pack, and ghost name. Replacing the passage pack changes the writing theme while preserving the game structure and difficulty rules. The implementation uses React, TypeScript, vanilla CSS, and Canvas 2D, with local fonts and icons. Mobile uses a focusable native text input and large touch controls. Reduced-motion support, deterministic scoring, restart and pause behavior, and clear local-only privacy copy are part of the specification.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Retro](../../styles/retro.md), [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, Text Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/typing-speed-race-game?case=deae1ec5-aea3-4056-97c0-d7bc34dd0998&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/typing-speed-race-game/deae1ec5-aea3-4056-97c0-d7bc34dd0998/shot_desktop.fddeee1ac1.webp" width="100%" alt="Typing Speed Race Game — Night drive, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Night drive</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/typing-speed-race-game?case=deae1ec5-aea3-4056-97c0-d7bc34dd0998&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/typing-speed-race-game?case=0574efff-821c-4f61-9916-b5d94030cc20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/typing-speed-race-game/0574efff-821c-4f61-9916-b5d94030cc20/shot_desktop.82332e74d0.webp" width="100%" alt="Typing Speed Race Game — Coastal morning, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coastal morning</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/typing-speed-race-game?case=0574efff-821c-4f61-9916-b5d94030cc20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Game brand | Keyway Circuit |
| `[TAGLINE]` | Race tagline | Outtype the echo. |
| `[PASSAGE_PACK]` | Passage collection | Night Drive |
| `[GHOST_NAME]` | Ghost opponent name | Echo |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add typing-speed-race-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A coding bootcamp: set BRAND to the cohort name, use a PASSAGE_PACK of code-adjacent prose, and rename GHOST_NAME to the target pace students should reach.
- A primary school typing club: point BRAND and TAGLINE at the club, keep Easy and Medium passages simple, and label the ghost as the class goal instead of a rival.
- A developer community page: brand it as a keyboard-break challenge, write a PASSAGE_PACK around your meetup topics, and share the downloadable result card in chat.
- A personal practice page: set BRAND to your own name, choose a passage theme you enjoy reading, and treat the local personal-best table as your own record board.

## FAQ

### How do I change the typing passages and difficulty in the Typing Speed Race Game?
The Typing Speed Race Game stores all six passages in the passage pack variable, two per difficulty level, so replacing that content changes the writing theme while keeping the game structure intact. Easy uses everyday words, Medium adds clauses and commas, and Hard includes numbers, punctuation and symbols. Ghost speeds are fixed at 30, 45 and 60 WPM for Easy, Medium and Hard.

### Where are scores and personal bests saved in the Typing Speed Race Game?
The Typing Speed Race Game saves completed runs and per-difficulty personal bests in the browser's localStorage under a brand-specific key, keeping a maximum of ten recent runs. There are no accounts, remote leaderboards or online opponents, and the page states this local-only privacy plainly. Clearing browser data resets the records, so the history lives only on the device that played.

### Can a teacher use the Typing Speed Race Game for a classroom warm-up?
The Typing Speed Race Game suits educators running short classroom challenges because a visitor can understand and start a race from the first screen without signing in. You can set the brand and tagline to a class or school name, choose a passage pack that matches the lesson, and rename the ghost to a target pace label. Each student's records stay on their own device.

### What does the Typing Speed Race Game show after a race finishes?
The Typing Speed Race Game opens an inline results panel that calculates the final score, compares it with earlier runs and generates a 1200 × 630 PNG share card locally in the browser. It then moves focus to the results heading rather than interrupting with a modal. The results view also feeds the personal-best table and recent-run history stored on the device.

### How does the ghost car move in the Typing Speed Race Game?
The ghost car in the Typing Speed Race Game is calculated from active elapsed time at a fixed target pace for the chosen difficulty, so it never reacts to how fast the player types. The cyan player car moves strictly from typing progress, and the interface always explains that the ghost is a target pace rather than another person. Paused and hidden-tab time is excluded from scoring.

### How do I build a typing speed race game with AI?
Copy the prompt from this page or run npx vibefather add typing-speed-race-game, replace [BRAND], [TAGLINE], [PASSAGE_PACK] and [GHOST_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Typing Speed Race Game demo?
The Night drive case was built by Kimi K3.1 Pro in Kimi Code; the Coastal morning case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Typing Speed Race Game template use?
Typing Speed Race Game is a single-page site built with React, with generative / canvas, text animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Typing Speed Race Game template for a client or a business?
The Typing Speed Race Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Typing Speed Race Game template work on mobile?
Yes. Every Typing Speed Race Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Typing Speed Race Game on VibeFather](https://vibefather.ai/templates/typing-speed-race-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
