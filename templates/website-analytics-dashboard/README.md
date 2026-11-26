# Website Analytics Dashboard

> Follow a publication’s traffic from the overview to the article, referral or campaign behind it.

<a href="https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/website-analytics-dashboard/c408f5e6-8c5b-4c85-bcdd-c81a9eb6e9da/webp.7fb791981f.webp" width="100%" alt="Website Analytics Dashboard — Privacy-Friendly Blog Traffic Reports built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This analytics workspace gives a small publication a way to investigate its readership without connecting a tracking service. It opens on a populated report with a visitor trend, the previous period and an article ranking. A second series shows pageviews. Moving along the plot reveals the counts behind each point. Selecting an article limits every report to its traffic, and selecting a country or referral source narrows the same audience again.

Ninety days of anonymous sample activity feed the summary, the campaign table and the device and browser breakdowns. The source adapter is separate from the display components, so a publisher can replace the sample with aggregated traffic from an existing service. The range selector supports presets and a custom window. A zero-result combination leaves the filters within reach and gives the reader a direct way back.

Editors can define a goal around an article or action, assemble the steps that lead to it, and inspect how many sessions make it from one step to the next. A sharing control opens a read-only version of the current report with its range and filters intact. The overview works in light and dark modes. On a narrow screen the plot, active filters and most-read articles move ahead of the detailed tables. Change the publication, its sections and its domain to put the same investigative workflow to use for a different editorial desk.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Editorial](../../styles/editorial.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | React 19 + Vite + Vanilla CSS |
| Pages | 4 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
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

- An independent newsletter: set PUBLICATION and DOMAIN to your title, then replace the sample articles and campaign names with your own send and signup data.
- A local news desk: point the country map and top pages at your city's sections, and build a funnel from homepage visit to article read to newsletter signup.
- A membership publisher: add a goal around subscription checkout, then share a read-only report link with your editorial team each week.
- A creator running a blog: keep the visitors and pageviews chart, swap the referrer table for social platforms and set BRAND to your own workspace name.

## FAQ

### How do I connect the Website Analytics Dashboard to my real traffic data?
The Website Analytics Dashboard template ships with a deterministic 90-day sample fixture behind a separate source adapter, so you replace that adapter with your own aggregated traffic rather than editing the display components. Export daily visitor, pageview, referrer, country, device, browser and campaign totals from your existing service, then feed them into the same shape the sample uses. No tracker or consent dialog is needed because the template only reads aggregates.

### Can I change the publication name, sections and domain in the Website Analytics Dashboard?
Yes. The Website Analytics Dashboard uses three variables: BRAND for the analytics workspace name, PUBLICATION for the publication itself and DOMAIN for its address. Change these and rewrite every headline, label and chart caption to match, since the default copy is written for Fieldwork Dispatch at fieldwork.example. The prompt keeps all copy in one content file so labels can be swapped without touching the layout.

### Does the Website Analytics Dashboard include goals, funnels and campaign reports?
The Website Analytics Dashboard includes a campaign report that groups traffic by UTM campaign, source and medium with visits, pageviews and conversions. A goals editor lets you add, rename and delete goals with event or path conditions, and a funnel builder counts sessions that reach each step in order, showing drop-off and conversion. Both recalculate under the active date range and filter chips.

### How does the share report link work in the Website Analytics Dashboard?
The Website Analytics Dashboard's share control copies a working link that encodes the selected date range, every active filter and any custom goal or funnel definitions. Opening that link on another device shows the same report in read-only mode, with no edit controls and no access to personal local settings. Direct visits with no parameters show the seeded sample report instead.

### Is the Website Analytics Dashboard template free to use?
The Website Analytics Dashboard prompt and its DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs a VibeFather Pro license, which also unlocks the full prompt for Pro templates and the source code of the demos. The live demo built with Gemini 4 Neon in Antigravity is public to view.

### How do I build a website analytics dashboard with AI?
Copy the prompt from this page or run npx vibefather add website-analytics-dashboard, replace [BRAND], [PUBLICATION] and [DOMAIN] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Website Analytics Dashboard demo?
The Timber journal case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Website Analytics Dashboard template use?
Website Analytics Dashboard is a 4-page site built with React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Website Analytics Dashboard template for a client or a business?
The Website Analytics Dashboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Website Analytics Dashboard template work on mobile?
Yes. Every Website Analytics Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Website Analytics Dashboard on VibeFather](https://vibefather.ai/templates/website-analytics-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
