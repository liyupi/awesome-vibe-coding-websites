# Minimal Developer Portfolio

> Minimal one-page developer portfolio with a portrait, a night-desk shot, projects, writing and open source — light and dark.

<a href="https://vibefather.ai/templates/minimal-developer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/minimal-developer-portfolio/72edddbc-bb3f-4ba6-866f-e5c2cd78e606/webp.06a63df210.webp" width="100%" alt="Minimal Developer Portfolio — Minimal Developer Portfolio built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/minimal-developer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page portfolio for a developer: an intro with name, role, a two-sentence bio and a location-with-availability line; four selected projects as quiet rows with one-line what-and-whys and stack tags; a writing list of three posts with read times; three open-source repo cards with language dots and clearly-sample stars; and a contact block with a 'now' line saying what they're currently building. The differentiator is the theme system: a light/dark toggle persisted in localStorage that follows prefers-color-scheme on first visit, with both themes designed rather than inverted — the dark mode is the primary design, not an afterthought. The look is true minimal: paper white and near-black binaries with one burnt-orange accent, IBM Plex Mono for names, tags and code glyphs, Schibsted Grotesk for prose, list-driven layout with generous line spacing. Two made-for-template photographs humanize the page: a low-key professional portrait beside the name (the avatar users will swap for their own) and one wide night-desk shot — twin monitors in terminal green — anchoring the middle of the page. Everything else stays code-drawn, with no platform brand marks. To adapt it, swap the variables and rewrite the copy in one content file; projects, posts and repos all read from it.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md) |
| Style | [Minimal](../../styles/minimal.md), [Terminal](../../styles/terminal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/minimal-developer-portfolio?case=72edddbc-bb3f-4ba6-866f-e5c2cd78e606&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/minimal-developer-portfolio/72edddbc-bb3f-4ba6-866f-e5c2cd78e606/shot_desktop.82491e27fc.webp" width="100%" alt="Minimal Developer Portfolio — Backend developer portfolio, built by GLM-5.3 in ZCode"></a><br>
<b>Backend developer portfolio</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/minimal-developer-portfolio?case=72edddbc-bb3f-4ba6-866f-e5c2cd78e606&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/minimal-developer-portfolio?case=3409412e-3611-41e2-8584-a66e6901e5d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/minimal-developer-portfolio/3409412e-3611-41e2-8584-a66e6901e5d4/shot_desktop.54a249b474.webp" width="100%" alt="Minimal Developer Portfolio — Frontend developer portfolio, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Frontend developer portfolio</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/minimal-developer-portfolio?case=3409412e-3611-41e2-8584-a66e6901e5d4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[NAME]` | Name | Noor Alami |
| `[ROLE]` | Role | Backend Engineer |
| `[FOCUS]` | Focus | Databases and developer tooling |
| `[LOCATION]` | Location | Toronto, Canada |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add minimal-developer-portfolio` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A job-seeking frontend engineer: set NAME, ROLE and LOCATION, list four shipped projects with stack tags, and rewrite the now-line to name the role you are looking for.
- A freelance backend consultant: keep the four project rows but add client outcomes in the one-line descriptions, and point the contact block at a booking email.
- A data engineer who writes publicly: swap the three writing posts for your technical essays with read times, and set FOCUS to pipelines and data platforms.
- An open-source maintainer: fill the three repo cards with your real projects, set the language dots and star counts, and keep the now-line on what you are building next.

## FAQ

### What can I change on the Minimal Developer Portfolio without touching the layout?
The Minimal Developer Portfolio template reads every string from one content file. Set NAME, ROLE, FOCUS and LOCATION, then rewrite the bio, the four project rows, the three writing posts, the three repo cards and the now-line in that same file. The email address follows your name automatically, and the page title updates from NAME and ROLE. Layout, type and motion stay as designed.

### How does the light and dark theme toggle work on this developer portfolio?
The Minimal Developer Portfolio template ships a 36px sun and moon toggle that saves your choice in the browser and follows the visitor's system preference on a first visit. Both themes are designed separately, with the dark near-black version as the primary look, so nothing is simply inverted. A small script applies the saved theme before the page paints, which avoids a flash of the wrong colors.

### Is the Minimal Developer Portfolio template free, and how does the license work?
The Minimal Developer Portfolio template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work and the source code of the demos need Pro. Pro members also see the full prompt for every Pro template, while free templates show the brief, stack and variables publicly.

### What do I need to replace before publishing the Minimal Developer Portfolio as my own site?
Replace the sample portrait photo with your own headshot, since the 88px circle is a placeholder for the fictional developer. Rewrite the intro bio, the four project rows with their stack tags, the three writing entries, the three repo cards and the now-line in the content file. The star counts and off-page links are sample values, so point them at your real work and profiles.

### Can the Minimal Developer Portfolio be hosted anywhere as a static site?
The Minimal Developer Portfolio template builds to plain static files with no backend, server code or external APIs. That output can be hosted on any static host or file server, and the build is configured with a relative base path so the page also works from a subfolder. Everything runs in the browser, and the contact links are plain email and profile links rather than forms.

### How do I build a minimal developer portfolio with AI?
Copy the prompt from this page or run npx vibefather add minimal-developer-portfolio, replace [NAME], [ROLE], [FOCUS] and [LOCATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Minimal Developer Portfolio demo?
The Backend developer portfolio case was built by GLM-5.3 in ZCode; the Frontend developer portfolio case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Minimal Developer Portfolio template use?
Minimal Developer Portfolio is a single-page site built with Tailwind CSS, Motion and React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Minimal Developer Portfolio template for a client or a business?
The Minimal Developer Portfolio prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Minimal Developer Portfolio template work on mobile?
Yes. Every Minimal Developer Portfolio build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Minimal Developer Portfolio on VibeFather](https://vibefather.ai/templates/minimal-developer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
