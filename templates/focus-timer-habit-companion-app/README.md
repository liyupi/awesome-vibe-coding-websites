# Focus Timer & Habit Companion App

> Serene Pomodoro focus timer PWA with Web Audio ambient mixer, micro-habits, and reflection log.

<a href="https://vibefather.ai/templates/focus-timer-habit-companion-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/focus-timer-habit-companion-app/1f151bac-11c0-473c-9a15-0aee5262c14e/webp.7abc4e601b.webp" width="100%" alt="Focus Timer &amp; Habit Companion App — Serene Pomodoro &amp; Habit Companion PWA built by Gemini 4 Neon"></a>

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
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
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

- A study coach for exam students: set [BRAND] to your program name, [DAILY_FOCUS_GOAL] to a realistic revision target and swap the default task for today's subject.
- A freelance writer's personal desk: keep [USER_NAME] as your own, rename the task chips to client projects and let the Journal collect one-line notes after each draft.
- A wellness creator's habit kit: replace the six micro-habits with your own morning and evening routines and point [CALM_MOTTO] at your program's tone.
- A small team's deep-work tracker: set [BRAND] to the studio name, raise [DAILY_FOCUS_GOAL] and use the Stats view's weekly bar chart and 28-day heatmap as a shared focus habit.

## FAQ

### How do I change the app name, user name and daily focus goal in the Focus Timer & Habit Companion App?
The Focus Timer & Habit Companion App keeps its copy in one content file, so you set the brand name, the greeting name, the daily focus target and the default task label there and the header, side rail, stats and task selector all update. The defaults are HearthPace, Mina Sato, 100 min and Deep Architecture Spec. If you change them, rewrite the surrounding headlines and labels to match.

### Where do the ambient sounds and the completion bell come from in this focus timer?
The Focus Timer & Habit Companion App synthesizes every sound in code with the Web Audio API, so Soft Rain, Warm Brown Noise, Gentle Café Hum and the Completion Bell load with no audio files and no external streams. Each ambient channel has its own slider and mute toggle, and a Test Bell button plays the chime. Nothing is downloaded from a CDN.

### Does the Focus Timer & Habit Companion App save my habits, streaks and journal reflections?
The Focus Timer & Habit Companion App stores daily habit check-offs, live streak counts, one-line journal reflections, focus history minutes and the dark mode preference in the browser's localStorage. Everything stays on the device it was entered on, with no backend and no account. Clearing browser data removes the saved habits, streaks and reflections.

### Can I add my own habits and custom timer lengths to the Focus Timer & Habit Companion App?
The Focus Timer & Habit Companion App ships with six daily micro-habits and lets you add custom ones through an input on the Habits tab, each with a completion toggle and a streak badge. The timer offers 25m Focus, 5m Short Break and 15m Long Break presets plus plus and minus 5m controls for custom lengths, alongside a task label selector for the current sprint.

### Is the Focus Timer & Habit Companion App template free to use?
The Focus Timer & Habit Companion App is a free template: its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work and the source code of the demo require a VibeFather Pro license. You can add the template to a project with the VibeFather command line, and a live demo built with Gemini 4 Neon in Antigravity is on the page.

### How do I build a focus timer & habit companion app with AI?
Copy the prompt from this page or run npx vibefather add focus-timer-habit-companion-app, replace [BRAND], [USER_NAME], [DAILY_FOCUS_GOAL] and [DEFAULT_TASK] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Focus Timer & Habit Companion App demo?
The Calm Pomodoro & daily micro-habits case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Focus Timer & Habit Companion App template use?
Focus Timer & Habit Companion App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Focus Timer & Habit Companion App template for a client or a business?
The Focus Timer & Habit Companion App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Focus Timer & Habit Companion App template work on mobile?
Yes. Every Focus Timer & Habit Companion App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Focus Timer & Habit Companion App on VibeFather](https://vibefather.ai/templates/focus-timer-habit-companion-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
