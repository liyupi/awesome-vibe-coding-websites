# Hackathon Event Page

> Overnight-energy hackathon page with a live countdown, prize tracks, a 36-hour schedule, judges, sponsor tiles and registration.

<a href="https://vibefather.ai/templates/hackathon-event-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/hackathon-event-page/d79a64fd-16da-4b5b-b8da-2a19963e97c9/webp.a4092822fe.webp" width="100%" alt="Hackathon Event Page — Hackathon Page with Prize Tracks built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/hackathon-event-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for one hackathon: a hero with the event name, a live countdown to a [DATE] variable and a register CTA; three prize-track cards with sample amounts and briefs; a compact 36-hour schedule typed by block (build / food / demos); a judge row of four AI-generated fictional portraits with roles; a sponsor strip of drawn-generic tiered text-tiles (no logos); a five-question FAQ; and a registration form (client-side only, honest) with team-size and track pickers. The look is overnight energy: near-black ground, terminal-adjacent mono accents, code-bracket motifs, one electric lime. The countdown ticks to the [DATE] variable; no other dates or years appear. Everything runs locally.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Event](../../types/event.md), [Landing Page](../../types/landing-page.md) |
| Style | [Terminal](../../styles/terminal.md), [Dark](../../styles/dark.md) |
| Effects | Micro-interactions, Countdown |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hackathon-event-page?case=d79a64fd-16da-4b5b-b8da-2a19963e97c9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hackathon-event-page/d79a64fd-16da-4b5b-b8da-2a19963e97c9/shot_desktop.fb4a3323e5.webp" width="100%" alt="Hackathon Event Page — Student hackathon, built by GLM-5.3 in ZCode"></a><br>
<b>Student hackathon</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/hackathon-event-page?case=d79a64fd-16da-4b5b-b8da-2a19963e97c9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hackathon-event-page?case=eb16b13b-d4f2-4596-a27d-0b6e35401c9b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hackathon-event-page/eb16b13b-d4f2-4596-a27d-0b6e35401c9b/shot_desktop.6a00303cc1.webp" width="100%" alt="Hackathon Event Page — Climate-tech hackathon, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Climate-tech hackathon</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/hackathon-event-page?case=eb16b13b-d4f2-4596-a27d-0b6e35401c9b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[EVENT]` | Event name | Nightcompile |
| `[DATE]` | Start date | February 19, 2027 |
| `[SCENE]` | Scene phrase | tools that make student life slightly less chaotic |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add hackathon-event-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university computer science society: set EVENT to your society's hackathon name and SCENE to the student theme, then replace the three prize tracks with your real sponsor prizes and rules.
- A climate-tech community: point SCENE at the climate problem you want built, rewrite the track briefs for climate datasets and link the registration form to your community mailing list.
- A developer tools company running a launch sprint: set EVENT to the sprint name, swap the judge row for your internal mentors and turn the sponsor tiles into partner tiers for your ecosystem.
- A design or product school running a weekend jam: keep the countdown and schedule, change the block types to design, food, sleep and demos, and rewrite the FAQ for teams without hardware.

## FAQ

### What sections does the Hackathon Event Page template include?
The Hackathon Event Page template is a single page with a hero that carries the event name, a live countdown to the DATE variable and a register button; three prize-track cards with sample amounts and briefs; a 36-hour schedule sorted into build, food, sleep and demo blocks; four judge cards using AI-generated fictional portraits; a sponsor strip of tiered text tiles; a five-question FAQ; and a registration form with team-size and track pickers. Everything runs locally in the browser.

### How do I change the countdown date and event name on the Hackathon Event Page?
Set the DATE variable to a full future date written like a normal calendar date and the countdown ticks to it; the date itself is never printed on the page. Set EVENT to the hackathon name, which feeds the wordmark, the bracketed title and the hello@ email domain, and set SCENE to a lowercase phrase naming what gets built so the headline, track briefs, schedule demos and FAQ all read true to your event.

### Does the Hackathon Event Page registration form actually collect signups?
The registration form on the Hackathon Event Page template is client-side only and the template says so. Name, email, track and team size are validated inline on blur, and a successful submit crossfades to a panel telling the visitor their entry was saved in this browser only. To collect real signups you connect the form to your own form service or backend, or point the register button at an existing registration tool.

### Can I use the Hackathon Event Page template without Pro?
Yes for personal, non-commercial use: the prompt of the free Hackathon Event Page template and every DESIGN.md are free under CC BY-NC 4.0, and the page shows the brief, stack and variables publicly. Commercial or client use needs Pro, which also unlocks the full prompt and the source code of the demos. The template has no prices or paywalls inside it; it is a static site you build yourself.

### How do I host the Hackathon Event Page once it is built?
The Hackathon Event Page template builds to static files in a dist folder with no backend, server code or external APIs, so any static host works: upload the build output and the page runs. The countdown keeps ticking in the visitor's browser because it reads the DATE variable locally, and the registration form stays local to each browser unless you connect it to a form service.

### How do I build a hackathon event page with AI?
Copy the prompt from this page or run npx vibefather add hackathon-event-page, replace [EVENT], [DATE] and [SCENE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Hackathon Event Page demo?
The Student hackathon case was built by GLM-5.3 in ZCode; the Climate-tech hackathon case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Hackathon Event Page template use?
Hackathon Event Page is a single-page site built with React, Motion and Tailwind CSS, with micro-interactions and countdown. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Hackathon Event Page template for a client or a business?
The Hackathon Event Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Hackathon Event Page template work on mobile?
Yes. Every Hackathon Event Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Hackathon Event Page on VibeFather](https://vibefather.ai/templates/hackathon-event-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
