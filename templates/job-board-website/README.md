# Job Board Website

> Broadsheet job board with live salary and remote filters, job detail pages, company pages, saved jobs and a post-a-job form.

<a href="https://vibefather.ai/templates/job-board-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/job-board-website/e083ef43-0282-488c-a054-6b0d57f65a20/webp.f56a9edd9a.webp" width="100%" alt="Job Board Website — Job Board with Salary Filters built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/job-board-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A three-page job board: a search-first home (role/company text search with filters for role type, location, remote-only and a salary minimum slider, over a dense listing of job cards with company monogram tiles, salary bands, tag chips and posted-relative labels); job detail pages (?j=<slug>, first job without one) with description sections, a requirements list, an honest client-side apply panel and related jobs; and company pages (?c=<slug>) with a profile, invented facts marked sample, and that company's open roles. A post-a-job page (post.html) carries a full form with live validation and a preview card that updates as you type; saving is client-side only and the job appears in the listing marked 'yours'. A saved-jobs strip persists in localStorage with a count chip in the header. The default board lists invented roles at invented companies, but the structure suits any niche or city board. The look is broadsheet calm with one anchoring photograph: a warm office-scene hero photo behind the headline, warm white below, ink serif headlines, one green accent, hairline rules, dense readable listings, and a code-drawn salary-landscape strip. No network.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Directory](../../types/directory.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 4 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/job-board-website?case=e083ef43-0282-488c-a054-6b0d57f65a20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/job-board-website/e083ef43-0282-488c-a054-6b0d57f65a20/shot_desktop.0d44d6e73f.webp" width="100%" alt="Job Board Website — Design jobs board, built by GLM-5.3 in ZCode"></a><br>
<b>Design jobs board</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/job-board-website?case=e083ef43-0282-488c-a054-6b0d57f65a20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/job-board-website?case=da6df920-e1ec-41df-8c9b-e300de573077&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/job-board-website/da6df920-e1ec-41df-8c9b-e300de573077/shot_desktop.f3e77fbc16.webp" width="100%" alt="Job Board Website — Climate jobs board, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Climate jobs board</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/job-board-website?case=da6df920-e1ec-41df-8c9b-e300de573077&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BOARD]` | Board name | Deskwork |
| `[FOCUS]` | Board focus | design and product jobs |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add job-board-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A city tech jobs board: set [BOARD] to the city name, [FOCUS] to local engineering roles, and swap the location select options for your districts and nearby towns.
- A climate and sustainability board: point [FOCUS] at green energy and policy roles, rewrite company blurbs around mission, and keep the salary bands visible for transparency.
- A design recruitment agency: use the company pages as client profiles with sample-marked facts, and link the apply panel to your own intake form or email.
- A university careers service: set [BOARD] to the department name, list graduate and internship roles, and tag each job with its degree area for filtering.

## FAQ

### How do the salary minimum and remote-only filters work on the Job Board Website template?
The Job Board Website template filters listings by comparing each job's minimum salary against the slider stop you pick, from no minimum up to the top stop, and the remote toggle narrows results to remote roles only. Search covers role and company text, with separate selects for role type and location. Filters combine, so a phone visitor can reach remote roles above a salary threshold in two taps.

### Can I change the invented jobs and companies in the Job Board Website template to my own listings?
Yes. The Job Board Website template keeps every job, company, tag label and piece of copy in one content file, so you replace the invented roles, company profiles and blurbs with real ones there. The [BOARD] variable sets the board name used in the wordmark, page titles, footer and email address, and [FOCUS] rewrites the hero line and listing vocabulary for your niche.

### Does the post-a-job form on the Job Board Website template actually publish jobs?
The post-a-job form on the Job Board Website template validates fields as you leave them, previews the job as a real listing card marked unposted, and shows the finished job at the top of the board marked as yours. Saving happens in the browser only, so the job is visible on that device and nowhere else. Connecting it to a real backend is work you add yourself.

### How do saved jobs persist for visitors on the Job Board Website template?
Saved jobs on the Job Board Website template are stored in the browser's local storage under a key built from the board name, so a visitor's saved roles survive a page reload and a return visit on the same device. A count chip in the header updates as jobs are saved, and a horizontal saved-jobs strip appears on the home page once at least one job is saved.

### What should I change first when turning the Job Board Website template into a city or niche board?
Start with [BOARD] and [FOCUS] to set the board name and the niche the hero line and listings speak to, then rewrite the twelve jobs, the company profiles and the tag vocabulary so the board reads true for your market. After that, adjust the salary slider stops and the location select options to match local pay ranges and the places your audience searches.

### How do I build a job board website with AI?
Copy the prompt from this page or run npx vibefather add job-board-website, replace [BOARD] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Job Board Website demo?
The Design jobs board case was built by GLM-5.3 in ZCode; the Climate jobs board case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Job Board Website template use?
Job Board Website is a 4-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Job Board Website template for a client or a business?
The Job Board Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Job Board Website template work on mobile?
Yes. Every Job Board Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Job Board Website on VibeFather](https://vibefather.ai/templates/job-board-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
