# Academic Researcher Website

> Professor's homepage with filterable publications, copy-BibTeX, teaching, talks, a printable CV and the lab.

<a href="https://vibefather.ai/templates/academic-researcher-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/academic-researcher-website/a761e99d-209a-412a-aa33-dbf549fc1c43/webp.4cb0405461.webp" width="100%" alt="Academic Researcher Website — Professor's Homepage with Publications built by GLM-5.4 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/academic-researcher-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A homepage for a professor and her lab, organised the way academics actually look for information. It opens on a portrait and a short statement of what the lab works on, with the research interests as chips, then gives selected publications, three projects with figures drawn in code, news, teaching, talks and the lab members. The publications page is a dense, well-set list with filters by topic, year and type, a copy-BibTeX button on every entry and a PDF button that opens the abstract, since the papers are invented. Each course has its own page with a week-by-week syllabus, each talk a small slide viewer with code-drawn slides. The CV page prints cleanly to PDF from the browser, and the lab page shows members with portraits, alumni and open positions. Paper white, university navy and one burgundy accent, with a scholarly serif and a mono for citation details. Every publication, course and person is invented, and the portraits are generated fictional people. Replace the content file with your own publications, courses and people and swap the photographs under the same file names; layout, palette and motion stay as described.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Personal Site](../../types/personal.md), [Docs](../../types/docs.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 7 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/kimi.svg"><img src="https://vibefather.ai/icons/tools/kimi.svg" width="13" height="13" alt=""></picture> [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/academic-researcher-website?case=a761e99d-209a-412a-aa33-dbf549fc1c43&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/academic-researcher-website/a761e99d-209a-412a-aa33-dbf549fc1c43/shot_desktop.c42d9daf32.webp" width="100%" alt="Academic Researcher Website — Computational ecology professor, built by GLM-5.4 in ZCode"></a><br>
<b>Computational ecology professor</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/academic-researcher-website?case=a761e99d-209a-412a-aa33-dbf549fc1c43&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/academic-researcher-website?case=6e679c88-f528-4da0-9c06-95d53730949d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/academic-researcher-website/6e679c88-f528-4da0-9c06-95d53730949d/shot_desktop.b7936ed8ae.webp" width="100%" alt="Academic Researcher Website — Urban ecology professor, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Urban ecology professor</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/kimi.svg"><img src="https://vibefather.ai/icons/tools/kimi.svg" width="12" height="12" alt=""></picture>&nbsp;Kimi K3.1 Pro in Kimi Code · <a href="https://vibefather.ai/templates/academic-researcher-website?case=6e679c88-f528-4da0-9c06-95d53730949d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Professor's name and title | Dr. Sofia Anastasi |
| `[FIELD]` | Field, in lower case | computational ecology |
| `[UNIVERSITY]` | Institution | Halloran University |
| `[LAB_NAME]` | Lab name | Anastasi Lab |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add academic-researcher-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A postdoctoral researcher on the job market: set BRAND and FIELD to your own, trim the lab sections to a single-person page and lead with the CV and selected publications.
- A teaching-focused lecturer: keep the teaching pages and syllabus structure, swap the research projects for course materials and set LAB_NAME to your teaching group.
- A small research group: set LAB_NAME and UNIVERSITY, keep the people page with members, alumni and open positions, and replace the news rows with your group's announcements.
- A PhD student building a first academic homepage: use the hero statement and interest chips for your thesis topic, and keep only the publications, talks and CV pages you need.

## FAQ

### How do I add my own publications and make the BibTeX button copy my real citations?
The Academic Researcher Website template keeps every publication in one content file as typed objects, and the BibTeX button builds each entry from that record. Replace the sample publications with your own titles, authors, venues, years and topics, and the copy-BibTeX button will produce your real citations. The PDF button opens an abstract panel, since the sample papers are invented, so point it at a real PDF link if you have one.

### What do I need to change first to make this professor homepage mine?
Set the four variables first: BRAND to your name and title, FIELD to your field in lower case, UNIVERSITY to your institution and LAB_NAME to your lab. Then rewrite the hero statement, research interest chips and news rows for your own work. After that, swap the publications, courses, talks and people in the content file, and replace the portraits under the same file names.

### Can I print the CV page to PDF from the browser?
Yes. The Academic Researcher Website template includes a print stylesheet for the CV page that hides the navigation and footer, sets black text on white and removes margins, so the CV prints cleanly to PDF from the browser. The Download CV link opens the CV page and triggers print. Replace the sample CV entries in the content file with your own degrees, positions, grants and service.

### Is there a free academic personal website template I can build with AI?
The Academic Researcher Website template is free on VibeFather, with 7 pages and the full published prompt. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use needs Pro, which also unlocks the full prompt for Pro templates and the source code of the demos. The demos here were built by GLM-5.4 in ZCode and Kimi K3.1 Pro in Kimi Code.

### How do the publication filters and the talk slide viewer work?
The publications page filters by topic, type and year as pills, with a result count that updates at once; leaving rows fade out and entering rows fade in. The talks pages use a small slide viewer with code-drawn slides that cross-fade, and the arrow keys move between slides. The teaching pages give each course a week-by-week syllabus, and the projects page draws its three figures as inline SVG.

### How do I build an academic researcher website with AI?
Copy the prompt from this page or run npx vibefather add academic-researcher-website, replace [BRAND], [FIELD], [UNIVERSITY] and [LAB_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Academic Researcher Website demo?
The Computational ecology professor case was built by GLM-5.4 in ZCode; the Urban ecology professor case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Academic Researcher Website template use?
Academic Researcher Website is a 7-page site built with Motion, React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Academic Researcher Website template for a client or a business?
The Academic Researcher Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Academic Researcher Website template work on mobile?
Yes. Every Academic Researcher Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Academic Researcher Website on VibeFather](https://vibefather.ai/templates/academic-researcher-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
