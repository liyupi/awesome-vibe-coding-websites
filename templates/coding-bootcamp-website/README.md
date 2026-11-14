# Coding Bootcamp Website

> Campus-bright bootcamp site with a curriculum timeline, cohort table, sample outcomes, tuition cards and a validated application form.

<a href="https://vibefather.ai/templates/coding-bootcamp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/coding-bootcamp-website/5335d068-febd-4d23-a2a3-55ffd05cb67b/webp.2f4daf758b.webp" width="100%" alt="Coding Bootcamp Website — Bootcamp Site with Curriculum Timeline built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/coding-bootcamp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for a sixteen-week coding bootcamp: a hero with the program promise, a next-cohort chip (static sample label) and an apply CTA; a curriculum timeline of four phases (foundations, full-stack, product weeks, career sprint) each with topics and a milestone project; a cohort table of three sample cohorts with schedule formats and sample seat counts; an outcomes block with sample stats clearly labeled and an honest caveat line; tuition and financing cards (upfront, installments, scholarship line) with sample disclaimers; an instructor trio with AI-generated fictional portraits and one-line bios; a multi-field application form with inline validation, a success state and an honest client-side-only note; and a short FAQ. The default runs an invented bootcamp, but the structure suits any intensive course or trade school. The look is campus bright: warm white ground, ink slab headlines, one confident green accent, structured tables. Cohort labels are static sample text — no real dates anywhere. Everything runs locally.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Editorial](../../styles/editorial.md), [Warm](../../styles/warm.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coding-bootcamp-website?case=5335d068-febd-4d23-a2a3-55ffd05cb67b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coding-bootcamp-website/5335d068-febd-4d23-a2a3-55ffd05cb67b/shot_desktop.90df29468d.webp" width="100%" alt="Coding Bootcamp Website — Full-stack web bootcamp, built by GLM-5.3 in ZCode"></a><br>
<b>Full-stack web bootcamp</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/coding-bootcamp-website?case=5335d068-febd-4d23-a2a3-55ffd05cb67b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coding-bootcamp-website?case=082085ed-b9be-4632-b0e2-50c81a11f95d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coding-bootcamp-website/082085ed-b9be-4632-b0e2-50c81a11f95d/shot_desktop.00e46e6f41.webp" width="100%" alt="Coding Bootcamp Website — Data analytics bootcamp, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Data analytics bootcamp</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/coding-bootcamp-website?case=082085ed-b9be-4632-b0e2-50c81a11f95d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[SCHOOL]` | School name | Copperline |
| `[PROGRAM]` | Program phrase | full-stack web development |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add coding-bootcamp-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A trade school for electricians: set [SCHOOL] and [PROGRAM], rewrite the four curriculum phases as hands-on modules, and replace the cohort formats with day and evening intakes.
- A part-time evening course provider: keep the curriculum timeline and tuition cards, but change the sixteen-week framing, cohort schedules and application questions to fit working adults.
- A corporate upskilling program: set [SCHOOL] to the company academy, swap the instructor trio for internal trainers, and rewrite the outcomes block around team skills.
- A nonprofit coding scholarship: keep the tuition and financing cards, add the scholarship line to the application form, and rewrite the FAQ around eligibility and deadlines.

## FAQ

### How do I change the bootcamp name and program on the Coding Bootcamp Website template?
The Coding Bootcamp Website template is driven by two variables: [SCHOOL] sets the school name used in the wordmark, page title, footer and the apply email address, and [PROGRAM] sets the lowercase program phrase that rewrites the H1, curriculum topics, project names and FAQ. Change both in the content file, then rewrite any headline or paragraph that still references the default sixteen-week full-stack bootcamp.

### Does the application form on the Coding Bootcamp Website actually send applications?
No. The application form on the Coding Bootcamp Website template validates on blur and saves the draft to the visitor's browser storage, then shows a success panel that says the demo keeps it locally. To receive real applications you need to connect the form to your own email service or backend; the template ships with no server code and no external APIs.

### Can I use the Coding Bootcamp Website template for a data analytics or design course instead of web development?
Yes. The Coding Bootcamp Website template is built for any intensive course or trade school, and the default invented bootcamp is just sample content. Set [PROGRAM] to your subject, then rewrite the four curriculum phases, their topic tags and milestone projects, the cohort schedule formats and the FAQ so they describe your course. The live demos include a data analytics bootcamp built from the same prompt.

### Can I change the cohort dates and seat counts in the Coding Bootcamp Website?
The cohort table on the Coding Bootcamp Website template shows three sample cohorts with schedule formats and sample seat counts, and the next-cohort label is static sample text with no real dates. Edit the cohort rows in the content file to describe your own upcoming cohorts and formats, keeping the table structure. The site never displays a real calendar date by default, so you decide what timing language to use.

### What should I check before publishing the Coding Bootcamp Website template?
Replace the invented school and program, then rewrite the outcomes block and tuition cards so every sample stat and disclaimer is accurate or removed, since the template labels them as samples. Swap the three AI-generated instructor portraits for real staff photos and update their bios, connect the application form to a real inbox, and read the FAQ so it matches your admissions process.

### How do I build a coding bootcamp website with AI?
Copy the prompt from this page or run npx vibefather add coding-bootcamp-website, replace [SCHOOL] and [PROGRAM] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Coding Bootcamp Website demo?
The Full-stack web bootcamp case was built by GLM-5.3 in ZCode; the Data analytics bootcamp case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Coding Bootcamp Website template use?
Coding Bootcamp Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Coding Bootcamp Website template for a client or a business?
The Coding Bootcamp Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Coding Bootcamp Website template work on mobile?
Yes. Every Coding Bootcamp Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Coding Bootcamp Website on VibeFather](https://vibefather.ai/templates/coding-bootcamp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
