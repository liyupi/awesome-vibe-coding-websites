# Webinar Registration Page

> Broadcast-navy webinar page with a live countdown, speaker cards, rundown agenda, timezone-aware registration and calendar files.

<a href="https://vibefather.ai/templates/webinar-registration-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/webinar-registration-page/5634dad1-ed5e-429a-a8a1-3192fd12801c/webp.d069dfb1ae.webp" width="100%" alt="Webinar Registration Page — Webinar Page with Countdown built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/webinar-registration-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site that fills one webinar: a hero with a live number-flip countdown to [DATE], the title and a registration CTA; a 'what you'll learn' grid of four outcome cards; a broadcast-rundown agenda with times and tags; three speaker cards with AI-generated fictional portraits; a registration section with a short form, a time-zone selector that converts the start time live via Intl (no network), and add-to-calendar buttons that build .ics files in the browser; a four-question FAQ; and a quiet footer. The default content promotes an invented session by an invented team, but the structure suits any webinar, workshop or live class. The look is calm broadcast blue: deep navy ground, cool slate text, one live cyan accent, speaker-forward and precise. All copy lives in one content file; swapping the variables rewrites the page. Speakers are AI-generated fictional people, varied in age and ethnicity; no real platforms, companies or logos anywhere.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Micro-interactions, Countdown |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/webinar-registration-page?case=5634dad1-ed5e-429a-a8a1-3192fd12801c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/webinar-registration-page/5634dad1-ed5e-429a-a8a1-3192fd12801c/shot_desktop.71ff2b8320.webp" width="100%" alt="Webinar Registration Page — B2B skills webinar, built by GLM-5.3 in ZCode"></a><br>
<b>B2B skills webinar</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/webinar-registration-page?case=5634dad1-ed5e-429a-a8a1-3192fd12801c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/webinar-registration-page?case=34470f64-0dec-4e05-930e-19f09ad53b53&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/webinar-registration-page/34470f64-0dec-4e05-930e-19f09ad53b53/shot_desktop.c7cf30ac81.webp" width="100%" alt="Webinar Registration Page — Design systems webinar, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Design systems webinar</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/webinar-registration-page?case=34470f64-0dec-4e05-930e-19f09ad53b53&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Host brand | Northfound |
| `[TITLE]` | Session title | The Unhurried Roadmap |
| `[DATE]` | Session date | December 3, 2026 |
| `[TOPIC]` | Topic phrase | roadmaps that survive contact with reality |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add webinar-registration-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A software training team: set [TITLE] and [TOPIC] to your product session, swap the outcome cards for the tasks attendees will learn and link the form to your signup tool.
- A university or course provider: point [BRAND] at the department, rewrite the agenda as lecture segments and change the speaker cards to instructors with their subjects.
- A creator running a paid live class: keep the countdown and time-zone selector, rewrite the FAQ for refunds and replays, and connect the registration form to your checkout.
- A community or meetup host: set [DATE] to the next session, replace the three speakers with organizers and trim the agenda to a shorter evening format.

## FAQ

### How does the countdown and time-zone conversion work on the Webinar Registration Page template?
The Webinar Registration Page template runs a live number-flip countdown from the [DATE] variable, ticking every second in the browser. The registration section has a native time-zone selector that converts the 11:00 ET start time live using the browser's built-in Intl formatting, with no network call. Add-to-calendar buttons build a 90-minute .ics file in the browser, so visitors get the session in their own calendar.

### What should I change first after adding the Webinar Registration Page template?
Set the four variables first: [BRAND] to the host team, [TITLE] to the session name, [DATE] to the future session date and [TOPIC] to the phrase the session teaches. Then rewrite the four outcome cards, the agenda slots and the three speaker cards to match. All copy sits in one content file, so swapping those strings rewrites the hero, agenda, speakers and FAQ together.

### Does the Webinar Registration Page actually collect registrations or send emails?
The Webinar Registration Page template does not submit anything anywhere. The form saves name, email and time zone to the visitor's own browser storage and shows a success state, and the add-to-calendar buttons download a .ics file locally. To collect real signups you connect the form to your own mailing list or registration service after generating the site.

### Can I use the Webinar Registration Page for a workshop or live class instead of a webinar?
The Webinar Registration Page template suits any single live session: a workshop, a live class, a product training or a community call. The structure is one hero, four learning outcomes, a timed agenda, three speakers and a registration form. Change [TITLE] and [TOPIC], rewrite the outcome cards for what attendees will leave with, and adjust the agenda times and tags to your run of show.

### Is the Webinar Registration Page template free, and what do I get with Pro?
The Webinar Registration Page template is free. Its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives Pro members the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly either way.

### How do I build a webinar registration page with AI?
Copy the prompt from this page or run npx vibefather add webinar-registration-page, replace [BRAND], [TITLE], [DATE] and [TOPIC] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Webinar Registration Page demo?
The B2B skills webinar case was built by GLM-5.3 in ZCode; the Design systems webinar case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Webinar Registration Page template use?
Webinar Registration Page is a single-page site built with React, Motion and Tailwind CSS, with micro-interactions and countdown. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Webinar Registration Page template for a client or a business?
The Webinar Registration Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Webinar Registration Page template work on mobile?
Yes. Every Webinar Registration Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Webinar Registration Page on VibeFather](https://vibefather.ai/templates/webinar-registration-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
