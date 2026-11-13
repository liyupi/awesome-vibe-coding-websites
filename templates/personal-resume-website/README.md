# Personal Resume Website

> One-page resume site with a professional portrait, timeline, leveled skills and a print stylesheet for a designed A4 PDF.

<a href="https://vibefather.ai/templates/personal-resume-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/personal-resume-website/45bc3866-5fe3-47bd-b9fd-7eae07434fb6/webp.eb867febac.webp" width="100%" alt="Personal Resume Website — One-Page Resume Site with PDF built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/personal-resume-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page resume site: a masthead with the name, title, contact links and a Download PDF button; a summary that reads like a person; an experience timeline with a rail, year spans and two achievement bullets each; skills grouped and leveled in plain words instead of logo walls; three projects with what/why/why-it-mattered lines; compact education and certification rows; and a screen-only availability footer. The differentiating feature is the dedicated print stylesheet: one A4 page, real margins, links expanded as URLs, motion gone and sections reflowed — so the browser's print dialog produces a designed PDF, and the Download PDF button simply calls it. The default content follows an invented staff backend engineer in Berlin, but the page suits any profession: change the name, role, field and base city and every line still reads true. The look is clean editorial: white paper, ink text, one cobalt accent, Source Serif 4 headings over Sora, and Spline Sans Mono year spans. A professional AI-generated portrait anchors the masthead (a placeholder users swap for their own photo), and the print stylesheet places it in the header. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Personal Site](../../types/personal.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-resume-website?case=45bc3866-5fe3-47bd-b9fd-7eae07434fb6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-resume-website/45bc3866-5fe3-47bd-b9fd-7eae07434fb6/shot_desktop.f0fd67e96d.webp" width="100%" alt="Personal Resume Website — Backend engineer resume, built by GLM-5.3 in ZCode"></a><br>
<b>Backend engineer resume</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/personal-resume-website?case=45bc3866-5fe3-47bd-b9fd-7eae07434fb6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-resume-website?case=a25cff32-5889-4ec4-942b-8e5af032e403&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-resume-website/a25cff32-5889-4ec4-942b-8e5af032e403/shot_desktop.7ddc6e122c.webp" width="100%" alt="Personal Resume Website — Product designer resume, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Product designer resume</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/personal-resume-website?case=a25cff32-5889-4ec4-942b-8e5af032e403&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[NAME]` | Name | Rowan Ademola |
| `[ROLE]` | Role | Staff Backend Engineer |
| `[FIELD]` | Field | payments infrastructure |
| `[BASE]` | Base city | Berlin, Germany |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add personal-resume-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A product designer job hunting: set ROLE to Product Designer and FIELD to design systems, then swap the backend projects for case-study lines with what, why and outcome.
- A recent graduate with little work history: keep the timeline short, expand the education and certification rows, and use the three project slots for coursework and side work.
- A freelance consultant: set BASE to your city, rewrite the summary around client engagements, and point the contact row at a calendar link instead of an email.
- A developer moving into management: set ROLE to Engineering Manager, rewrite the achievement bullets around team and delivery numbers, and keep the leveled skills groups.

## FAQ

### How does the Download PDF button work on the Personal Resume Website?
The Download PDF button on the Personal Resume Website calls the browser's print dialog directly. A dedicated print stylesheet reflows the page to one A4 page with real margins, expands links as visible URLs, removes motion and places the portrait in the header. Saving as PDF from that dialog produces a designed document rather than a screenshot, and the button disappears on the print sheet itself.

### What do I need to change to turn the Personal Resume Website into my own resume?
Set the four variables NAME, ROLE, FIELD and BASE, then rewrite the copy in the single content file. The template ships with an invented staff backend engineer in Berlin, but changing the name, role, field and base city lets the masthead, summary, experience bullets, skills groups and projects read true for any profession. The portrait placeholder is swapped for your own photo.

### Is the Personal Resume Website free to use for my own job search?
Yes. The Personal Resume Website is a free template, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. That covers a resume site for your own job search. Commercial or client work needs Pro, which also unlocks the full prompt and the source code of the demos.

### How are skills shown on the Personal Resume Website instead of logo walls?
The Personal Resume Website groups skills into panels and gives each one a level word and a row of five dots that fill in when the group enters view. That replaces logo walls with plain language a recruiter can read in seconds. The most specific group follows the FIELD variable, so a designer and an engineer get different skill groupings from the same layout.

### Can I host the Personal Resume Website for free and share one link with recruiters?
The Personal Resume Website builds to static files with no backend, no server code and no external APIs, so it can be hosted on any static host and shared as a single link. The whole site is one page with sections for experience, skills, projects and education, and the print stylesheet means the same link also produces the PDF recruiters forward.

### How do I build a personal resume website with AI?
Copy the prompt from this page or run npx vibefather add personal-resume-website, replace [NAME], [ROLE], [FIELD] and [BASE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Personal Resume Website demo?
The Backend engineer resume case was built by GLM-5.3 in ZCode; the Product designer resume case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Personal Resume Website template use?
Personal Resume Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Personal Resume Website template for a client or a business?
The Personal Resume Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Personal Resume Website template work on mobile?
Yes. Every Personal Resume Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Personal Resume Website on VibeFather](https://vibefather.ai/templates/personal-resume-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
