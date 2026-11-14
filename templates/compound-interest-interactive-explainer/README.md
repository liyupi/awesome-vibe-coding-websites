# Compound Interest Interactive Explainer

> A calm, scroll-driven explainer where three sliders redraw a live chart of deposits versus compound interest.

<a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/compound-interest-interactive-explainer/ef527a4d-234b-4c29-923d-6ef9bc1765f5/webp.d8f42df431.webp" width="100%" alt="Compound Interest Interactive Explainer — Compound Interest Explainer with Live Charts built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/compound-interest-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a single long-scroll page that teaches compound interest by letting the reader play with it. The first screen is the tool itself: three sliders for monthly deposit, annual rate and years sit beside a large stacked area chart that splits the balance into what you put in and what interest added. A balance counter tweens as you drag, a crosshair reads out any year, and a marker shows the year interest overtakes your deposits.

Below the tool, the page slows down into short scrollytelling chapters. A sticky chart changes with each step while a paragraph explains one idea at a time: interest on deposits, interest on interest, the bend in the curve, and why time matters more than amount. A comparison scene plays two savers who put away the same monthly sum but start ten years apart, then spells out the gap at 65 in plain numbers. An inflation switch turns every figure on the page into today's money, and a formula corner substitutes the live slider values into the math, with a compounding-frequency control and a year-by-year table.

The look is a quiet editorial explainer: warm off-white paper, deep ink text, a slate layer for deposits, a green layer for interest and a coral accent reserved for inflation. Headings use a soft serif, the interface uses a clean sans, and every number is set in tabular mono so columns never shift. Four gouache illustrations give the chapters a printed feel. A disclaimer band states that all figures are illustrative.

It suits personal finance writers, teachers and newsletter authors. To adapt it, change the brand, audience, currency, default deposit and the two starting ages, or keep the skeleton of controls, live chart, comparison scene and reframing toggle and point it at loans, savings goals or subscriptions.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Text Animation, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + react, + motion + d3-shape |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=ef527a4d-234b-4c29-923d-6ef9bc1765f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/compound-interest-interactive-explainer/ef527a4d-234b-4c29-923d-6ef9bc1765f5/shot_desktop.9b56a8e723.webp" width="100%" alt="Compound Interest Interactive Explainer — Personal finance newsletter, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Personal finance newsletter</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=ef527a4d-234b-4c29-923d-6ef9bc1765f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=3b638669-26ee-49d6-85fd-1d49e9af5c2e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/compound-interest-interactive-explainer/3b638669-26ee-49d6-85fd-1d49e9af5c2e/shot_desktop.22fe085210.webp" width="100%" alt="Compound Interest Interactive Explainer — Classroom money lab, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Classroom money lab</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=3b638669-26ee-49d6-85fd-1d49e9af5c2e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=c55e7688-8b85-44e2-beaf-9053c5d1819f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/compound-interest-interactive-explainer/c55e7688-8b85-44e2-beaf-9053c5d1819f/shot_desktop.fb9e0f36ff.webp" width="100%" alt="Compound Interest Interactive Explainer — Personal finance newsletter, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Personal finance newsletter</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/compound-interest-interactive-explainer?case=c55e7688-8b85-44e2-beaf-9053c5d1819f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publisher name | Tallypine |
| `[AUDIENCE]` | Who it is written for | people in their twenties opening their first savings account |
| `[CURRENCY]` | Currency (ISO 4217 code) | USD |
| `[MONTHLY_DEPOSIT]` | Default monthly deposit | 200 |
| `[START_AGES]` | Two starting ages to compare | 25 and 35 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add compound-interest-interactive-explainer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom money lab: set BRAND to your school, AUDIENCE to your students, and use the START_AGES comparison to show why starting early beats depositing more.
- A personal finance newsletter: set BRAND and CURRENCY to yours, tune MONTHLY_DEPOSIT to a relatable figure, and link the page from a savings-account issue.
- A credit union or bank educator: keep the sliders and chart, rewrite the chapters for your savings products, and set the disclaimer band to your own wording.
- A subscriptions explainer: reuse the controls, live chart and inflation toggle, and reframe the copy around recurring fees instead of deposits and interest.

## FAQ

### How do the three sliders on the Compound Interest Interactive Explainer actually change the chart?
The Compound Interest Interactive Explainer drives every chart and sentence on the page from one shared store. Moving the monthly deposit, annual rate or years slider redraws the stacked area chart, which splits the balance into a slate deposits layer and a green interest layer, and tweens the final-balance counter over 0.6 seconds. A crosshair reads out any year, and a marker shows the year interest overtakes deposits.

### What does the inflation toggle do on the Compound Interest Interactive Explainer?
The inflation switch on the Compound Interest Interactive Explainer reframes every figure on the page in today's money, using a 2.5 percent default rate to discount each year's value. In that mode the page shows a coral today's-money badge and coral accents so you can tell the reframed numbers apart from nominal ones. The year-by-year table and formula corner update with the same values.

### What is the comparison scene on the Compound Interest Interactive Explainer showing?
The comparison scene plays two savers who deposit the same monthly amount but start ten years apart, at the ages set by the START_AGES variable, and both stop at 65. It spells out the gap in plain numbers at the end, using the deposits and interest lines in slate and green. The default ages are 25 and 35.

### How do I change the brand, currency and default deposit in the Compound Interest Interactive Explainer?
The Compound Interest Interactive Explainer keeps all copy and values in one content file, so you set BRAND, AUDIENCE, CURRENCY, START_AGES and MONTHLY_DEPOSIT there and the header, footer, page title, intro, examples, FAQ and every figure follow. The currency code feeds a single en-US number formatter, so axis labels, the counter, the formula and the table all switch together.

### Can I repoint the Compound Interest Interactive Explainer at loans or savings goals instead of interest?
Yes. The Compound Interest Interactive Explainer is built as a skeleton of sliders, a live stacked chart, scrollytelling chapters, a two-saver comparison and a reframing toggle, and the finance logic is kept in pure functions. To point it at loans, savings goals or subscriptions you rewrite the copy in the content file and adjust the simulation to your subject, keeping the layout, type and motion.

### What sections does the Compound Interest Interactive Explainer include below the calculator?
Below the hero calculator, the Compound Interest Interactive Explainer slows into short scrollytelling chapters with a sticky chart that changes per step: interest on deposits, interest on interest, the bend in the curve, and why time matters more than amount. Then come the two-saver comparison, an inflation switch, a formula corner with a compounding-frequency control and a year-by-year table, four gouache illustrations and a disclaimer band.

### How do I build a compound interest interactive explainer with AI?
Copy the prompt from this page or run npx vibefather add compound-interest-interactive-explainer, replace [BRAND], [AUDIENCE], [CURRENCY] and [MONTHLY_DEPOSIT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Compound Interest Interactive Explainer demo?
The Personal finance newsletter case was built by Claude Opus 5.5 in Claude Code; the Classroom money lab case was built by Claude Sonnet 5.5 in Claude Code; the Personal finance newsletter case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Compound Interest Interactive Explainer template use?
Compound Interest Interactive Explainer is a single-page site built with React, Motion and Tailwind CSS, with text animation, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Compound Interest Interactive Explainer template for a client or a business?
The Compound Interest Interactive Explainer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Compound Interest Interactive Explainer template work on mobile?
Yes. Every Compound Interest Interactive Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Compound Interest Interactive Explainer on VibeFather](https://vibefather.ai/templates/compound-interest-interactive-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
