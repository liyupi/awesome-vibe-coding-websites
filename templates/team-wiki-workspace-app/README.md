# Team Wiki Workspace App <sup>PRO</sup>

> A block-based team wiki with slash commands, nested pages, table/board/calendar database views, and Markdown export.

<a href="https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/team-wiki-workspace-app/11521a73-a8f7-4733-ae37-58b525b38fb8/webp.dd45f7c492.webp" width="100%" alt="Team Wiki Workspace App — Block-Based Team Wiki &amp; Multi-View Database App built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Team Wiki Workspace App is a self-contained collaborative notes, documentation, and lightweight database workspace crafted for small product and design studios. Opening directly onto a complete product roadmap—never a blank canvas—it combines a nested sidebar page tree (with drag-to-reorder, Favorites, Trash with restore, and one-click templates for Meeting Notes, Product Spec, and Roadmap) with a tactile block editor. Typing '/' inside any block opens a command menu to insert headings, to-do checklists, collapsible toggles, callouts, pull quotes, code blocks, dividers, geometric visual figures, inline tables, and embedded kanban boards. Every block includes a drag handle plus keyboard move shortcuts, recognizes live Markdown shortcuts as you type, and surfaces a selection bar to bold, link, or attach inline comments. An embedded team deliverables database switches instantaneously between Table, Board, and 4-week Sprint Calendar views with status filters and sorting. Breadcrumbs, live backlinks between pages, a Cmd+K quick-jump palette, full Undo/Redo history, one-click Export to Markdown, and a dark mode toggle all persist cleanly in browser localStorage. Styled in warm soft white (#FAF9F6), crisp charcoal (#2B2B2B), energetic tangerine (#FF7A2F), and pastel database pills, the app collapses cleanly into a slide-out sidebar drawer on 390px phones.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md), [Docs](../../types/docs.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/team-wiki-workspace-app?case=11521a73-a8f7-4733-ae37-58b525b38fb8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/team-wiki-workspace-app/11521a73-a8f7-4733-ae37-58b525b38fb8/shot_desktop.6da87800ea.webp" width="100%" alt="Team Wiki Workspace App — Design studio product wiki, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Design studio product wiki</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/team-wiki-workspace-app?case=11521a73-a8f7-4733-ae37-58b525b38fb8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/team-wiki-workspace-app?case=9ee0b215-064a-4b97-b2a5-2400dc6d215e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/team-wiki-workspace-app/9ee0b215-064a-4b97-b2a5-2400dc6d215e/shot_desktop.a54a060521.webp" width="100%" alt="Team Wiki Workspace App — Robotics lab engineering wiki, built by GPT-6.2 Sol in Codex"></a><br>
<b>Robotics lab engineering wiki</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/team-wiki-workspace-app?case=9ee0b215-064a-4b97-b2a5-2400dc6d215e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Workspace App Name | Marigold Desk |
| `[STUDIO_NAME]` | Seeded Team Name | Alder & Loom Studio |
| `[LEAD_NAME]` | Workspace Lead | Hana Sato |
| `[CYCLE_NAME]` | Primary Roadmap Title | Autumn Product Roadmap |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A robotics lab: set BRAND to your lab name, replace the seeded roadmap with an engineering log and use the Table view for component status and owners.
- A small product studio: set STUDIO_NAME and LEAD_NAME to your team, then rename the page templates to your own meeting notes, spec and sprint review formats.
- A startup founder's handbook: point CYCLE_NAME at your current quarter, seed the sidebar with onboarding and process pages, and keep the database for hiring or launch tasks.
- A design team lead: keep the callouts and pull quotes for design principles, and use the Board view to track critique rounds and deliverable status.

## FAQ

### What can I actually do inside the Team Wiki Workspace App editor?
The Team Wiki Workspace App opens on a seeded roadmap page with a block editor. Typing a slash opens a command menu for headings, to-do checklists, collapsible toggles, callouts, pull quotes, code blocks, dividers, visual figures, inline tables and embedded kanban boards. Every block has a drag handle and keyboard move shortcuts, live Markdown shortcuts work as you type, and a selection bar lets you bold, link or attach inline comments.

### How does the embedded deliverables database switch between views?
The Team Wiki Workspace App includes a team deliverables database that switches instantly between Table, Board and a 4-week Sprint Calendar view. Each view supports status filters and sorting, and records use pastel database pills to show status. The database sits inside a wiki page like any other block, so it stays next to the roadmap copy, owners and milestones rather than in a separate tool.

### Can I use the Team Wiki Workspace App for client work or inside my company?
Commercial and client use of the Team Wiki Workspace App needs Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and the source code of the demos comes with Pro. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use under CC BY-NC 4.0, so check your plan before deploying it for an employer or a client.

### How do I change the studio name, lead and roadmap title in the template?
Set four variables before you generate: BRAND for the workspace app name, STUDIO_NAME for the seeded team, LEAD_NAME for the workspace lead and CYCLE_NAME for the roadmap title shown on load. The prompt seeds pages, blocks and database records from these values, so rewriting every headline, paragraph and label to match keeps the workspace consistent instead of mixing default names with yours.

### Does the Team Wiki Workspace App save my pages and where does the data live?
The Team Wiki Workspace App persists workspace state in browser localStorage, including nested pages, block structures, Favorites, Trash and database records. Undo and Redo history keeps up to 30 snapshots, and Export to Markdown gives you a plain-text copy of a page on demand. There is no backend or external API, so data stays in the browser and does not sync between devices or teammates.

### How do I build a team wiki workspace app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add team-wiki-workspace-app, replace [BRAND], [STUDIO_NAME], [LEAD_NAME] and [CYCLE_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Team Wiki Workspace App demo?
The Design studio product wiki case was built by Gemini 4 Neon in Antigravity; the Robotics lab engineering wiki case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Team Wiki Workspace App template use?
Team Wiki Workspace App is a single-page site built with Tailwind CSS and React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Team Wiki Workspace App template free to use?
Team Wiki Workspace App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Team Wiki Workspace App template work on mobile?
Yes. Every Team Wiki Workspace App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Team Wiki Workspace App on VibeFather](https://vibefather.ai/templates/team-wiki-workspace-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
