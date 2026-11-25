# Discussion Forum Website

> Community forum for an amateur astronomy club, with 40 seeded threads, polls, profiles, notifications and moderation.

<a href="https://vibefather.ai/templates/discussion-forum-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/discussion-forum-website/eab43f74-04f8-4f22-adcd-5ffe6e15fe88/webp.c1d11761ba.webp" width="100%" alt="Discussion Forum Website — Community Forum for an Astronomy Club built by GLM-5.4 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/discussion-forum-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A community forum for a fictional amateur astronomy club, built as a conversation forum rather than a question-and-answer site. Six categories carry their own colours and descriptions, and the thread list sorts by latest, top and unanswered. Thread pages have nested replies with quotes, icon-based reactions and working polls whose bars update when you vote. Member profiles show trust badges and recent activity, a notifications page collects replies and mentions, and the composer has a Markdown preview tab. Moderation is part of the interface: threads can be pinned and locked, and a report queue lists flagged posts with reasons and actions. The site is seeded with forty realistic threads about eyepieces, observing reports, astrophotography and star parties, so every screen is dense from the first load. Midnight, star yellow and nebula pink sit on soft white cards, with a code-drawn star chart behind the header. The visitor's own replies, votes, notifications and moderation decisions are kept in the browser. Change the club name, city and welcome thread in the content file, or reseed the threads for any hobby club; layout, palette and motion stay as they are.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 6 |
| Built with | [GLM-5.4](../../models/glm-5-4.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/discussion-forum-website?case=eab43f74-04f8-4f22-adcd-5ffe6e15fe88&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/discussion-forum-website/eab43f74-04f8-4f22-adcd-5ffe6e15fe88/shot_desktop.904ad477bb.webp" width="100%" alt="Discussion Forum Website — Astronomy club forum, built by GLM-5.4 in ZCode"></a><br>
<b>Astronomy club forum</b><br>
<sub>Built by <b>GLM-5.4</b> in ZCode · <a href="https://vibefather.ai/templates/discussion-forum-website?case=eab43f74-04f8-4f22-adcd-5ffe6e15fe88&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/discussion-forum-website?case=6956272e-357c-4e15-ab1b-71bab96e2117&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/discussion-forum-website/6956272e-357c-4e15-ab1b-71bab96e2117/shot_desktop.a8add6f8e0.webp" width="100%" alt="Discussion Forum Website — Bayhaven astronomy club forum, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Bayhaven astronomy club forum</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/discussion-forum-website?case=6956272e-357c-4e15-ab1b-71bab96e2117&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Community name | Northfield Astronomical Society |
| `[CITY]` | Town or city | Northfield |
| `[FEATURED_THREAD]` | Title of the pinned welcome thread | Start here: how this forum works |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add discussion-forum-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A photography club: set BRAND and CITY, rename the six categories to gear, critique, shoots and meet-ups, and reseed the forty threads with your members' posts.
- A board game group: keep the polls for scheduling game nights, change the events sidebar to your next meet-ups and swap the astronomy threads for rules questions.
- A local makerspace: use the moderation queue for tool-safety reports, rename categories to workshops and build logs, and pin a welcome thread with shop rules.
- A book club: replace observing reports with reading logs, keep trust badges for long-standing members and point the featured thread at your current pick.

## FAQ

### Is the Discussion Forum Website template free to use?
The Discussion Forum Website template is free. Its prompt and DESIGN.md are published under CC BY-NC 4.0, which covers personal, non-commercial use. For commercial or client work you need Pro, which also gives you the full prompt and the demo source code. The page shows the brief, stack and variables publicly, so you can judge the fit before you commit.

### How do I change the club name and city in the forum?
Set BRAND to your community name and CITY to your town in the content file, then rewrite the welcome thread title through FEATURED_THREAD. The Discussion Forum Website template keeps all interface copy, categories, threads, members and badges in one content file, so the header line, footer and seeded posts follow your values without touching the layout or palette.

### Can I use this forum template for a hobby club that isn't about astronomy?
Yes. The Discussion Forum Website template is built for any hobby community; astronomy is just the seeded example. Reseed the threads in the data file with your own topics, rename the six categories and their colours, and swap the welcome thread. The thread list, nested replies, polls, profiles, notifications and moderation queue all keep working with your content.

### Does the forum save replies and votes for other visitors?
No. The Discussion Forum Website template has no backend, so replies, reactions, poll votes, notifications and moderation decisions are stored in the visitor's own browser. Each person sees their own changes on their device. To share activity between members you would connect the forum to a database or hosted backend, which is outside what the template ships with.

### What can moderators do in the Discussion Forum Website template?
Moderators can pin and lock threads, and a report queue lists flagged posts with reasons and actions such as hiding a post, warning a member or dismissing the report. The Discussion Forum Website template signs the visitor in as a moderator by default, so you can try every action from the first load. The interface shows lock and pin icons on affected threads.

### How do I build a discussion forum website with AI?
Copy the prompt from this page or run npx vibefather add discussion-forum-website, replace [BRAND], [CITY] and [FEATURED_THREAD] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Discussion Forum Website demo?
The Astronomy club forum case was built by GLM-5.4 in ZCode; the Bayhaven astronomy club forum case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Discussion Forum Website template use?
Discussion Forum Website is a 6-page site built with Motion, React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Discussion Forum Website template for a client or a business?
The Discussion Forum Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Discussion Forum Website template work on mobile?
Yes. Every Discussion Forum Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Discussion Forum Website on VibeFather](https://vibefather.ai/templates/discussion-forum-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
