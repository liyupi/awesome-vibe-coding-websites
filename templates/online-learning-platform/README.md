# Online Learning Platform <sup>PRO</sup>

> Course platform opening mid-course on a learner dashboard with animated visual lessons, captions, notes, quizzes, and certificates.

<a href="https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/online-learning-platform/4c1e66db-4d1e-4bdf-a699-9fe0a0679e2f/webp.30c3225120.webp" width="100%" alt="Online Learning Platform — Interactive Online Learning &amp; Course Platform built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A focused online learning workspace opening immediately on a learner's active mid-course dashboard—complete with a 12-day study streak, weekly focus tracker, active course progress bars, and one-click Resume Lesson. Explore a filterable catalog of three complete fictional courses (topic, level, length) with full syllabi, instructor bios, and learner reviews; launch an interactive Lesson Player where animated HTML5 Canvas diagrams stand in for video with chapter jumps, playback speed (1×–2×), toggleable live captions, localStorage per-lesson notes, and instant-feedback quizzes; and print a clean completion certificate.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Web App](../../types/web-app.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md), [Clean](../../styles/clean.md) |
| Effects | Interactive Canvas, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 5 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/online-learning-platform?case=4c1e66db-4d1e-4bdf-a699-9fe0a0679e2f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/online-learning-platform/4c1e66db-4d1e-4bdf-a699-9fe0a0679e2f/shot_desktop.efbbd23f9e.webp" width="100%" alt="Online Learning Platform — Brightleaf Academy, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Brightleaf Academy</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/online-learning-platform?case=4c1e66db-4d1e-4bdf-a699-9fe0a0679e2f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[PLATFORM_NAME]` | Platform Name | Brightleaf Academy |
| `[LEARNER_NAME]` | Active Learner Name | Samira Chen |
| `[STREAK_DAYS]` | Active Streak Days | 12 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo course creator: set PLATFORM_NAME to your academy, LEARNER_NAME to a sample student, and swap the three seeded courses for your own syllabi and instructor bio.
- A coding bootcamp: keep the dashboard and lesson player, replace the Systems Design course with your curriculum and link the certificate page to your cohort completion records.
- A corporate training team: rename the platform to your internal academy and rewrite the catalog filters for compliance, onboarding and tool training tracks.
- A music or science educator: use the Everyday Sound and Acoustics course as a base, adjust the Canvas soundwave lesson and quiz explanations to match your own topic.

## FAQ

### How do I add wine club signup to a winery website built with AI?
The Online Learning Platform template is built for course delivery, not winery signups, so a wine club form is not one of its sections. You can reuse the learner dashboard pattern by repurposing the enrolled course cards into membership tiers and linking a signup button to your mailing list. For a winery site, start from a template that already includes a signup form.

### What does the Online Learning Platform template include on its five pages?
The Online Learning Platform template includes five routes: a learner dashboard with a streak calendar strip, weekly goal progress and three enrolled courses; a filterable catalog of three fictional courses with syllabi, instructor bios and reviews; a course detail page; an interactive lesson player with animated Canvas diagrams, captions, speed controls, notes and quizzes; and a printable certificate.

### Can I change the learner name, platform name and streak count in the prompt?
Yes. The prompt exposes three variables: PLATFORM_NAME defaults to Brightleaf Academy, LEARNER_NAME defaults to Samira Chen, and STREAK_DAYS defaults to 12. Replace them with your own values and rewrite every headline, label and image caption to match, keeping the same layout, colors and motion. The demo built by Gemini 4 Neon in Antigravity uses the default values.

### How do the animated lessons and quizzes work without video files?
The lesson player uses animated HTML5 Canvas diagrams in place of video: live charts for Visual Data Storytelling, packet flows for Systems Design for Product Builders and soundwave interference for Everyday Sound and Acoustics. Playback includes play and pause, a timeline scrubber, chapter markers, speed from 1× to 2×, toggleable captions and instant-feedback quizzes with explanations.

### Where are lesson notes and quiz scores saved, and can I print certificates?
Per-lesson Markdown notes, completed lesson IDs and quiz scores are saved in the browser's localStorage, so progress stays on the device you study on. The certificate page offers a course selector, serial ID and total hours, plus a print button that opens the browser print dialog for a clean completion certificate.

### How do I build an online learning platform with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add online-learning-platform, replace [PLATFORM_NAME], [LEARNER_NAME] and [STREAK_DAYS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Online Learning Platform demo?
The Brightleaf Academy case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Online Learning Platform template use?
Online Learning Platform is a 5-page site built with Tailwind CSS, React and Typescript, with interactive canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Online Learning Platform template free to use?
Online Learning Platform is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Online Learning Platform template work on mobile?
Yes. Every Online Learning Platform build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Online Learning Platform on VibeFather](https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
