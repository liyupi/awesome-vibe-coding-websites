# Focus Timer & Habit Companion App

> Serene Pomodoro focus timer PWA with Web Audio ambient mixer, micro-habits, and reflection log.

<a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/focus-timer-habit-companion-app/44cf8afc-1049-4a22-bd4e-8e38452baae1/webp.682519a0bd.webp" width="100%" alt="Focus Timer &amp; Habit Companion App — Serene Pomodoro &amp; Habit Companion PWA built by GLM-5.4 and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/focus-timer-habit-companion-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Focus Timer & Habit Companion App is a calm, warm-stone Pomodoro timer and daily micro-habit tracker PWA built for deep work across phone and laptop. With true three-breakpoint responsiveness and zero fake phone shells, mobile screens under 768px display a fixed bottom four-tab bar (Focus, Habits, Journal, Stats), while desktop viewports expand into a full-height side rail and a balanced dual-panel focus desk with a one-click dark mode toggle. At the center sits an animated SVG circular countdown ring supporting 25m Focus, 5m Short Break, 15m Long Break, and custom minute presets paired with a task label selector. A built-in Web Audio API ambient sound mixer synthesizes Soft Rain, Warm Brown Noise, Gentle Café Hum, and a resonant Completion Bell cleanly in code—requiring zero external audio files. Right beside the timer, users check off daily micro-habits with live streak badges, jot one-line post-session reflections into their Journal, and monitor deep-work momentum on a weekly focus-minutes SVG bar chart and 28-day consistency heatmap, all persisted in localStorage. Grounded in serene warm stone (#F5F3EF) and deep charcoal (#1C1917) accented with terracotta (#D95D39) and calm sage (#4D7C6F), it self-hosts Fraunces, Plus Jakarta Sans, and JetBrains Mono. Customize the app brand, user name, daily focus goal, and default task inside src/content.ts.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?case=44cf8afc-1049-4a22-bd4e-8e38452baae1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/focus-timer-habit-companion-app/44cf8afc-1049-4a22-bd4e-8e38452baae1/shot_desktop.326a52450e.webp" width="100%" alt="Focus Timer &amp; Habit Companion App — Writer studio sprint &amp; reading habits, built by GLM-5.4 in ZCode"></a><br>
<b>Writer studio sprint &amp; reading habits</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?case=44cf8afc-1049-4a22-bd4e-8e38452baae1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?case=1f151bac-11c0-473c-9a15-0aee5262c14e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/focus-timer-habit-companion-app/1f151bac-11c0-473c-9a15-0aee5262c14e/shot_desktop.bfc5c5eaa8.webp" width="100%" alt="Focus Timer &amp; Habit Companion App — Calm Pomodoro &amp; daily micro-habits, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Calm Pomodoro &amp; daily micro-habits</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?case=1f151bac-11c0-473c-9a15-0aee5262c14e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Focus app name | HearthPace |
| `[USER_NAME]` | User display name | Mina Sato |
| `[DAILY_FOCUS_GOAL]` | Daily focus target | 100 min |
| `[DEFAULT_TASK]` | Active sprint label | Deep Architecture Spec |
| `[CALM_MOTTO]` | Subtle studio subtitle | Steady focus, gentle daily rituals. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add focus-timer-habit-companion-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A writing coach: set BRAND to the studio name and DEFAULT_TASK to the current manuscript, then rename the six micro-habits to daily writing prompts.
- A study group: set USER_NAME per student, lower DAILY_FOCUS_GOAL to a realistic revision target, and swap the habits for subject-specific revision blocks.
- A wellness studio: change CALM_MOTTO to the studio line, relabel the break modes as breathing pauses, and use the journal as a short check-in log.
- A solo maker tracking client sprints: set DEFAULT_TASK to the active project, and rename the task chips to your real client or project names.

## FAQ

### How do I add a wine club signup to a winery website built with AI?
The Focus Timer & Habit Companion App template is a Pomodoro timer and micro-habit tracker, not a winery site, so it has no wine club form to extend. For a winery, start from a hospitality or membership template on VibeFather, then ask your AI agent to add a signup card that collects name and email and posts to your mailing list provider. This template's habit list and journal form show how a simple capture form is structured if you want a reference.

### What can I customize in the Focus Timer & Habit Companion App before using it?
The Focus Timer & Habit Companion App template exposes five variables: BRAND for the app name, USER_NAME for the greeting, CALM_MOTTO for the header tagline, DEFAULT_TASK for the starting sprint label, and DAILY_FOCUS_GOAL for the daily target shown on the side rail and stats. Set them in the single content file, then rewrite the sample habits, task chips and journal entries to match the person or team the app is for.

### Does the Focus Timer & Habit Companion App play real audio files or generate sound in the browser?
The Focus Timer & Habit Companion App synthesizes all of its audio in the browser with the Web Audio API. Soft Rain, Warm Brown Noise, Gentle Café Hum and the Completion Bell are generated in code, so the template ships with no MP3 files, no CDN audio streams and no external requests. The ambient mixer gives each channel its own slider and mute toggle, and a Test Bell button previews the chime.

### Where does the Focus Timer & Habit Companion App save habits, streaks and focus minutes?
The Focus Timer & Habit Companion App stores habits, streak counts, journal reflections, focus history and the dark mode preference in the browser's localStorage. Everything stays on the device, so the template needs no backend, database or login. Clearing browser data resets the streaks and focus minutes, and two devices will not share the same history unless you add a sync service yourself.

### Can I run the Focus Timer & Habit Companion App on a phone as an installable app?
The Focus Timer & Habit Companion App is built as a static PWA-friendly site: the build outputs plain files, and under 768px it shows a fixed four-tab bar for Focus, Habits, Journal and Stats with no fake phone frame. You can host the built files on any static host and add it to a phone home screen. The template does not include a service worker or offline caching, so add those if you need full offline use.

### How do I build a focus timer & habit companion app with AI?
Copy the prompt from this page or run npx vibefather add focus-timer-habit-companion-app, replace [BRAND], [USER_NAME], [DAILY_FOCUS_GOAL] and [DEFAULT_TASK] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Focus Timer & Habit Companion App demo?
The Writer studio sprint & reading habits case was built by GLM-5.4 in ZCode; the Calm Pomodoro & daily micro-habits case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Focus Timer & Habit Companion App template use?
Focus Timer & Habit Companion App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Focus Timer & Habit Companion App template for a client or a business?
The Focus Timer & Habit Companion App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Focus Timer & Habit Companion App template work on mobile?
Yes. Every Focus Timer & Habit Companion App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Focus Timer & Habit Companion App on VibeFather](https://vibefather.ai/templates/focus-timer-habit-companion-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
