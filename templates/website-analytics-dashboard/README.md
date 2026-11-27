# Website Analytics Dashboard

> Follow a publication’s traffic from the overview to the article, referral or campaign behind it.

<a href="https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/website-analytics-dashboard/defc9487-5d03-48bd-be39-b5c28bb710be/webp.f04290a506.webp" width="100%" alt="Website Analytics Dashboard — Privacy-Friendly Blog Traffic Reports built by GPT-6.2 Astra and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This analytics workspace gives a small publication a way to investigate its readership without connecting a tracking service. It opens on a populated report with a visitor trend, the previous period and an article ranking. A second series shows pageviews. Moving along the plot reveals the counts behind each point. Selecting an article limits every report to its traffic, and selecting a country or referral source narrows the same audience again.

Ninety days of anonymous sample activity feed the summary, the campaign table and the device and browser breakdowns. The source adapter is separate from the display components, so a publisher can replace the sample with aggregated traffic from an existing service. The range selector supports presets and a custom window. A zero-result combination leaves the filters within reach and gives the reader a direct way back.

Editors can define a goal around an article or action, assemble the steps that lead to it, and inspect how many sessions make it from one step to the next. A sharing control opens a read-only version of the current report with its range and filters intact. The overview works in light and dark modes. On a narrow screen the plot, active filters and most-read articles move ahead of the detailed tables. Change the publication, its sections and its domain to put the same investigative workflow to use for a different editorial desk.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Micro-interactions |
| Stack | React 19 + Vite + Vanilla CSS |
| Pages | 4 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Astra](../../models/gpt-6-2-astra.md) in Codex, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/website-analytics-dashboard?case=defc9487-5d03-48bd-be39-b5c28bb710be&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/website-analytics-dashboard/defc9487-5d03-48bd-be39-b5c28bb710be/shot_desktop.ad22298e4c.webp" width="100%" alt="Website Analytics Dashboard — Fieldwork publication, built by GPT-6.2 Astra in Codex"></a><br>
<b>Fieldwork publication</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Astra in Codex · <a href="https://vibefather.ai/templates/website-analytics-dashboard?case=defc9487-5d03-48bd-be39-b5c28bb710be&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/website-analytics-dashboard?case=c408f5e6-8c5b-4c85-bcdd-c81a9eb6e9da&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/website-analytics-dashboard/c408f5e6-8c5b-4c85-bcdd-c81a9eb6e9da/shot_desktop.f7352b2ba6.webp" width="100%" alt="Website Analytics Dashboard — Timber journal, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Timber journal</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/website-analytics-dashboard?case=c408f5e6-8c5b-4c85-bcdd-c81a9eb6e9da&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Analytics workspace | Index Lantern |
| `[PUBLICATION]` | Publication | Fieldwork Dispatch |
| `[DOMAIN]` | Publication domain | fieldwork.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add website-analytics-dashboard` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An independent newsletter: set PUBLICATION to your title and DOMAIN to your site, then rewrite the top pages and referrers labels for your issues and subscriber sources.
- A local news desk: use the country map and campaign table to compare district readership, and seed a goal around newsletter signup for each section.
- A membership publisher: replace the seeded reading funnel with steps from article view to signup to payment, and keep the share view for weekly audience reviews.
- A creator running a personal blog: set BRAND to your studio name and trim the campaign report to the few sources you actually track.

## FAQ

### How do I connect the Website Analytics Dashboard to my real traffic data?
The Website Analytics Dashboard template keeps its sample data in a separate source adapter, so you replace that adapter with aggregated traffic from your existing service rather than editing the display components. The template ships with no tracker, backend or external API, and the sample sessions are anonymous, so you decide what your adapter reads and how it groups visits before the reports update.

### What can I change in the Website Analytics Dashboard to make it my publication's report?
Set BRAND to your analytics workspace name, PUBLICATION to your publication and DOMAIN to its address. The template's copy, sample content and labels live in one content module, so you rewrite the headlines, section names and language to match your editorial desk. The range presets, comparison toggle, campaign table, goals, funnels and share view keep working after the swap.

### How does the funnel builder in the Website Analytics Dashboard work?
The Website Analytics Dashboard funnel builder starts with a three-step reading funnel. You add, remove, reorder and choose event steps, then name and save the funnel. It counts sessions that reached each step in order within the same session and shows drop-off and conversion as scaled horizontal bars on a shared baseline, recomputed whenever you stack filters on the report.

### Can I share a filtered analytics report with someone who does not have the template?
Yes. The share control in the Website Analytics Dashboard opens a read-only version of the current report with its range and filters intact. The link encodes the range, every filter and any custom goal or funnel definitions needed to reproduce the view on another device. The shared view has no edit controls and no access to local settings, and a direct visit with no parameters shows the seeded report.

### Is the Website Analytics Dashboard free to use for a personal project?
The Website Analytics Dashboard prompt is free for personal, non-commercial use under CC BY-NC 4.0, and its DESIGN.md is free as well. Commercial or client work needs a VibeFather Pro license, which also gives you the full prompt and the source code of the demos. The template runs entirely in the browser with no tracking service or backend.

### How do I build a website analytics dashboard with AI?
Copy the prompt from this page or run npx vibefather add website-analytics-dashboard, replace [BRAND], [PUBLICATION] and [DOMAIN] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Website Analytics Dashboard demo?
The Fieldwork publication case was built by GPT-6.2 Astra in Codex; the Timber journal case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Website Analytics Dashboard template use?
Website Analytics Dashboard is a 4-page site built with React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Website Analytics Dashboard template for a client or a business?
The Website Analytics Dashboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Website Analytics Dashboard template work on mobile?
Yes. Every Website Analytics Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Website Analytics Dashboard on VibeFather](https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
