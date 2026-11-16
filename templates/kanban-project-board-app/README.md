# Kanban Project Board App

> Warm board app with hand-rolled drag-and-drop across four columns, labels, due chips, card detail modal, filters and local persistence.

<a href="https://vibefather.ai/templates/kanban-project-board-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/kanban-project-board-app/41e91195-a32d-4a66-a866-f8da7451b18d/webp.f5468ba1a3.webp" width="100%" alt="Kanban Project Board App — Kanban Board with Drag and Drop built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/kanban-project-board-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page project board: four columns (Backlog, This week, In progress, Done) with live counts; cards carry colored labels, due chips that know when they're overdue, assignee initials dots and checklist counts. Dragging is hand-rolled with pointer events — the card lifts with a tilt and shadow, columns highlight, the drop animates home — and every card also has a Move left / Move right menu so the board works without a pointer. A card detail modal edits title, description, labels, due date and subtasks; delete comes with an undo toast. A filters bar (text search, label chips, an overdue-only toggle) dims non-matching cards in place; inline composers add cards per column; everything persists to localStorage with a Reset board action. The default board plans an invented product launch, but the structure suits any team's board. The look is warm paper: soft board ground, ink cards, four label colors, tactile shadows. No drag library, no network.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [App](../../types/app.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/kanban-project-board-app?case=41e91195-a32d-4a66-a866-f8da7451b18d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/kanban-project-board-app/41e91195-a32d-4a66-a866-f8da7451b18d/shot_desktop.096dbcaa57.webp" width="100%" alt="Kanban Project Board App — Product launch board, built by GLM-5.3 in ZCode"></a><br>
<b>Product launch board</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/kanban-project-board-app?case=41e91195-a32d-4a66-a866-f8da7451b18d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/kanban-project-board-app?case=c16af1a9-c0a3-4941-8870-0b480e61e33b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/kanban-project-board-app/c16af1a9-c0a3-4941-8870-0b480e61e33b/shot_desktop.0c147e8959.webp" width="100%" alt="Kanban Project Board App — Wedding planning board, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Wedding planning board</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/kanban-project-board-app?case=c16af1a9-c0a3-4941-8870-0b480e61e33b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BOARD]` | Board name | Kettle Launch |
| `[PROJECT]` | What's planned | a small kitchen-goods product launch |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add kanban-project-board-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A wedding planner: set BOARD to the couple's names, rewrite PROJECT as the wedding day, and seed cards for venue, catering, invitations and final walkthrough across the four columns.
- A small studio's sprint board: keep the four columns, replace the label set with design, build, review and blocked, and set assignee initials to your real teammates.
- A freelance developer tracking client work: set BOARD to your business name, swap the launch cards for discovery, build, handover and invoiced, and use due chips for deadlines.
- A content team's editorial calendar: rewrite PROJECT as the monthly issue, seed cards for pitches, drafts, edits and published, and use the overdue toggle to spot slipping pieces.

## FAQ

### How does drag-and-drop work in the Kanban Project Board App, and what happens if I can't drag?
Dragging in the Kanban Project Board App is hand-rolled with pointer events, not a drag library. You grab a card's handle, it lifts with a slight tilt and soft shadow, the hovered column gets a wash and glow, and the drop springs home. Every card also has a Move left and Move right menu, so the board works fully without a pointer, including on touch where the grab handle is required.

### Where does the Kanban Project Board App store my cards, and what does Reset board do?
The Kanban Project Board App keeps the whole board in your browser's localStorage, under a key built from the board name, so nothing is sent to a server. Reset board restores the seeded sample board and clears your edits. Because storage is local, cards stay on the device and browser you used, and clearing site data removes them.

### What can I edit inside a card in the Kanban Project Board App?
Opening a card in the Kanban Project Board App shows a detail modal where you edit the title, description, labels, due date and subtasks. Fields save as you leave them, with a small saved tick, and subtask toggles animate their strikes. Deleting a card shows an undo toast before the removal commits, and the modal traps focus and closes on Escape.

### How do the filters and overdue chips in the Kanban Project Board App work?
The Kanban Project Board App has a filters bar with a text search, label chips and an overdue-only toggle. Filtering dims non-matching cards in place rather than removing them, so the board keeps its shape. Due chips read today, tomorrow, in 3 days or next week, and each card's overdue state ships as part of its data against a fixed demo anchor, so no live clock is needed.

### What do I change first when adapting the Kanban Project Board App to my own team?
Start with the two variables: set BOARD to your board or project name, which drives the wordmark, page title and storage key, and set PROJECT to one concrete lowercase phrase describing the effort, which rewrites the topbar blurb, card titles and subtasks. Then edit the teammates, label set and seeded cards in the content file so the four columns read true for your work.

### How do I build a kanban project board app with AI?
Copy the prompt from this page or run npx vibefather add kanban-project-board-app, replace [BOARD] and [PROJECT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Kanban Project Board App demo?
The Product launch board case was built by GLM-5.3 in ZCode; the Wedding planning board case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Kanban Project Board App template use?
Kanban Project Board App is a single-page site built with Tailwind CSS, Motion and React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Kanban Project Board App template for a client or a business?
The Kanban Project Board App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Kanban Project Board App template work on mobile?
Yes. Every Kanban Project Board App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Kanban Project Board App on VibeFather](https://vibefather.ai/templates/kanban-project-board-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
