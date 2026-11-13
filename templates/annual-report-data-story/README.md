# Annual Report Data Story <sup>PRO</sup>

> A scrolling annual report with count-up numbers, charts that draw themselves and a dot-grid office map.

<a href="https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/annual-report-data-story/358dff4a-4625-4046-8601-4e6d1fe10b5e/webp.4d6ccfd19c.webp" width="100%" alt="Annual Report Data Story — Scroll Data Story Annual Report with Charts built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template turns a company's yearly results into a single scrolling page that reads like a magazine feature and behaves like a chart deck. It opens on a large photograph with the report year set in oversized serif numerals, then moves through seven chapters: the cover, the year in numbers, growth, revenue mix, global offices, a letter from the chief executive, and a download. Each chapter makes one point and says it plainly.

It suits finance and communications teams who want more than a PDF attachment, nonprofits reporting to donors, funds writing to their backers, and founders who publish their numbers in public. The demo follows an invented cold-chain freight company, and the second case swaps in a water charity to show the layout holds when the subject changes. Every figure is sample data and is labeled that way on the page.

The design pairs a warm paper background with deep ink text and a single cobalt accent. Full-screen numbers count up as they arrive, each with one sentence explaining what it means in everyday words. A sticky line chart stays in view while short notes step past and move the highlight from year to year. Bars rise from the baseline in sequence, donut segments sweep open before their labels appear, and a dot-grid world map pulses over each office and stays in sync with a list of cities and headcounts. All charts are hand-written SVG with no chart library, so you can restyle them directly.

To adapt it, replace the values in one content file: names, figures, chapter claims, office coordinates and the letter. The map markers, charts and downloadable PDF are all built from that file, so they update together. Visitors who prefer reduced motion see every number and chart in its final state.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), Annual Report |
| Style | [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + TypeScript + Tailwind CSS 3.4 + gsap + pdf-lib |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/annual-report-data-story?case=358dff4a-4625-4046-8601-4e6d1fe10b5e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/annual-report-data-story/358dff4a-4625-4046-8601-4e6d1fe10b5e/shot_desktop.e88877d996.webp" width="100%" alt="Annual Report Data Story — Cold chain freight company, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Cold chain freight company</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/annual-report-data-story?case=358dff4a-4625-4046-8601-4e6d1fe10b5e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/annual-report-data-story?case=53661be3-9259-42a3-a6e2-f280aa2c5f20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/annual-report-data-story/53661be3-9259-42a3-a6e2-f280aa2c5f20/shot_desktop.11f7c3fd05.webp" width="100%" alt="Annual Report Data Story — Clean water nonprofit, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Clean water nonprofit</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/annual-report-data-story?case=53661be3-9259-42a3-a6e2-f280aa2c5f20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Company or organization name | Fennmark |
| `[BUSINESS]` | What it does, in a short phrase | refrigerated freight and cold storage for food and medicine |
| `[REPORT_YEAR]` | The year being reported | 2025 |
| `[LEADER]` | Letter writer, name and title | Maren Aldous, Chief Executive |
| `[HERO_IMAGE]` | Cover photograph file | hero-cold-yard.webp |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A venture fund writing to its backers: set BRAND to the fund, BUSINESS to its thesis, swap revenue mix for portfolio sectors and the offices map for portfolio companies by city.
- A membership nonprofit reporting to donors: keep the seven chapters, recast the numbers as donors served and funds spent, and set LEADER to your executive director's letter.
- A public company founder publishing numbers in the open: use REPORT_YEAR on the cover, replace the invented figures with your reported ones and point the PDF download at your filing.
- A sustainability or impact team: set HERO_IMAGE to a wide site photo, rewrite the growth chapter as emissions or reach, and keep the dot-grid map for project locations.

## FAQ

### How do I put my own numbers into the Annual Report Data Story template?
The Annual Report Data Story template keeps every figure in one content file, with sections for the cover, the year in numbers, growth, quarters, revenue mix, offices, the letter and the download. Replace the values there and the count-up numbers, line chart, bars, donut and dot-grid map all read from the same source. Keep the figures consistent with each other whenever you rewrite them, and leave the sample data label in place until they are real.

### Can I use the Annual Report Data Story template for a nonprofit donor report instead of a company?
Yes. The Annual Report Data Story template ships with two demos, a cold chain freight company and a clean water nonprofit, and the second shows the layout holds when the subject changes. Set BRAND and BUSINESS to the cause, rewrite the chapter claims and revenue segments as donations and program spend, and swap the letter writer to your own LEADER. All figures must stay labeled as sample data until you replace them with audited numbers.

### What do I change first in the Annual Report Data Story template?
Start with the five variables: BRAND, BUSINESS, REPORT_YEAR, LEADER and HERO_IMAGE. The Annual Report Data Story template uses REPORT_YEAR as the oversized numeral on the cover and as the last year on every chart, so set it before anything else. Then rewrite the chapter headlines and the letter so they argue about your business rather than the invented freight company.

### Does the Annual Report Data Story template include a downloadable PDF, and how is it made?
Yes. The Annual Report Data Story template builds a three-page US Letter PDF from the same content file, with a cover carrying the brand and report year, a page of the four headline numbers and the quarterly bars, and a page with the letter. The build script writes it during the build, so the download stays in step with the page whenever you change a figure.

### How do the charts and the office map behave for visitors who prefer reduced motion?
The Annual Report Data Story template shows every number and chart in its final state when a visitor has reduced motion turned on. The count-ups, the drawing line chart, the rising bars, the sweeping donut segments and the pulsing office markers only run for visitors who allow motion, so nobody loses a figure or an office because an animation was skipped.

### How do I build an annual report data story with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add annual-report-data-story, replace [BRAND], [BUSINESS], [REPORT_YEAR] and [LEADER] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Annual Report Data Story demo?
The Cold chain freight company case was built by Claude Opus 5.5 in Claude Code; the Clean water nonprofit case was built by Claude Sonnet 5.5 in Claude Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Annual Report Data Story template use?
Annual Report Data Story is a single-page site built with Tailwind CSS, GSAP and Plain HTML, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Annual Report Data Story template free to use?
Annual Report Data Story is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Annual Report Data Story template work on mobile?
Yes. Every Annual Report Data Story build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Annual Report Data Story on VibeFather](https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
