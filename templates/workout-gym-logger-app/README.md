# Workout & Gym Logger App <sup>PRO</sup>

> A dark responsive mobile-first gym workout logger PWA with set tracking, rest countdown timer, PR toasts, and SVG form guides.

<a href="https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/workout-gym-logger-app/2a76ef42-c99a-49ea-a287-91a58cbd5379/webp.a7fcc6cb3b.webp" width="100%" alt="Workout &amp; Gym Logger App — Dark Mobile-First Gym Workout Logger PWA built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Engineered as a true three-breakpoint responsive mobile-first strength training PWA without any decorative phone bezel, this workout logger delivers fast, high-contrast gym usability on phones while expanding cleanly into a multi-column coaching workspace on tablets and desktops. Styled in energetic charcoal and elevated slate surfaces punched up with electric neon volt highlights, the interface keeps active sets, weights, reps, and countdown timers effortless to read between heavy lifts. On mobile screens under 768 pixels a fixed bottom tab bar switches cleanly across Today, Programs, Exercises, and Progress; on wider screens a persistent left rail pairs the active session with live volume telemetry. The app launches pre-seeded with a realistic four-day push, pull, legs, and upper-body split plus three weeks of completed workout history stored in localStorage. During an active workout, lifters adjust weight and reps inline, check off sets to trigger an automatic floating rest timer with 60s, 90s, and 120s presets and an optional Web Audio completion beep, and receive instant Personal Record toast alerts whenever a set beats their historical best estimated 1RM. An interactive searchable exercise library filters by muscle group and displays clean code-drawn SVG form cues, while the Progress view tracks weekly lifting volume and a 28-day training-streak calendar heatmap.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Mobile App](../../types/mobile-app.md) |
| Style | [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/workout-gym-logger-app?case=2a76ef42-c99a-49ea-a287-91a58cbd5379&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/workout-gym-logger-app/2a76ef42-c99a-49ea-a287-91a58cbd5379/shot_desktop.fdee9ea493.webp" width="100%" alt="Workout &amp; Gym Logger App — Push pull legs strength logger, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Push pull legs strength logger</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/workout-gym-logger-app?case=2a76ef42-c99a-49ea-a287-91a58cbd5379&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/workout-gym-logger-app?case=813a8542-a26e-4a99-ae47-56862443178f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/workout-gym-logger-app/813a8542-a26e-4a99-ae47-56862443178f/shot_desktop.04800f74e3.webp" width="100%" alt="Workout &amp; Gym Logger App — Kettlebell &amp; bodyweight tracker, built by GLM-5.4 in ZCode"></a><br>
<b>Kettlebell &amp; bodyweight tracker</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/workout-gym-logger-app?case=813a8542-a26e-4a99-ae47-56862443178f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Workout app name | VoltRep |
| `[ATHLETE_NAME]` | Lifter profile name | Alex Carter |
| `[PROGRAM_NAME]` | Active training split | 4-Day Push / Pull / Legs |
| `[UNIT_LABEL]` | Weight unit | lbs |
| `[WEEKLY_GOAL]` | Weekly consistency target | 4 Sessions / Week |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A personal trainer: set BRAND to your coaching name, ATHLETE_NAME to each client and WEEKLY_GOAL to their target, then assign PROGRAM_NAME per client split.
- A kettlebell or bodyweight coach: rewrite the seeded push, pull, legs split into kettlebell and bodyweight movements and adjust UNIT_LABEL for the loads you use.
- A strength gym or lifting club: set BRAND to the gym, seed the exercise library with your equipment and use the PR toasts to make member milestones visible.
- An indie fitness creator: publish the logger under your own BRAND, set PROGRAM_NAME to your signature program and point the Progress view at your audience's weekly goal.

## FAQ

### How do I change the weight unit, athlete name and weekly goal in the workout logger?
The Workout & Gym Logger App template uses five variables: BRAND, ATHLETE_NAME, PROGRAM_NAME, UNIT_LABEL and WEEKLY_GOAL. Set UNIT_LABEL to lbs or kg, ATHLETE_NAME to the lifter's name, PROGRAM_NAME to your split title and WEEKLY_GOAL to your consistency target. The seeded copy is written for the defaults, so rewrite the headlines and labels that mention them to match your values.

### Does the gym logger save workouts between sessions, and where is the data stored?
The Workout & Gym Logger App stores your active session, custom sets, PR records and completed workouts in localStorage, so a reload keeps your place. It launches pre-seeded with a four-day push, pull, legs and upper-body split plus three weeks of completed history. There is no backend or external API, so data lives only in that browser on that device.

### What happens when I check off a set in the workout logger?
Checking off a set in the Workout & Gym Logger App starts a floating rest timer with 60s, 90s and 120s presets and an optional Web Audio completion beep. If that set beats your historical best estimated 1RM, a Personal Record toast appears instantly. Weight and reps are editable inline during the session, so you can adjust load without leaving the active workout.

### Can I use the Workout & Gym Logger App template for personal training clients?
Commercial and client use of the Workout & Gym Logger App template needs Pro, which also gives you the full prompt and the demo source code. Free templates' prompts and every DESIGN.md are licensed CC BY-NC 4.0 for personal, non-commercial use only. A trainer building a branded logger for clients should set BRAND and ATHLETE_NAME per client and use it under Pro.

### What does the Progress view show in the workout logger?
The Progress view in the Workout & Gym Logger App tracks weekly lifting volume and a 28-day training-streak calendar heatmap, with WEEKLY_GOAL shown in both the Progress and Today views. The exercise library is searchable, filters by muscle group and shows code-drawn SVG form cues. On tablets and desktops the layout expands into a left rail with live volume telemetry beside the active session.

### How do I build a workout & gym logger app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add workout-gym-logger-app, replace [BRAND], [ATHLETE_NAME], [PROGRAM_NAME] and [UNIT_LABEL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Workout & Gym Logger App demo?
The Push pull legs strength logger case was built by Gemini 4 Neon in Antigravity; the Kettlebell & bodyweight tracker case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Workout & Gym Logger App template use?
Workout & Gym Logger App is a single-page site built with React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Workout & Gym Logger App template free to use?
Workout & Gym Logger App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Workout & Gym Logger App template work on mobile?
Yes. Every Workout & Gym Logger App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Workout & Gym Logger App on VibeFather](https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
