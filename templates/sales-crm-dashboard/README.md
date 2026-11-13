# Sales CRM Dashboard <sup>PRO</sup>

> Working CRM app screens: drag-and-drop pipeline kanban, contacts table, deal drawer and revenue charts — all in localStorage.

<a href="https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/sales-crm-dashboard/1e2e9d16-d5f8-40d9-b40a-990a16dc2746/webp.443576a644.webp" width="100%" alt="Sales CRM Dashboard — Sales CRM App with Kanban built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page CRM app: an app shell with a left nav and a top bar; a pipeline kanban with five stages and drag-and-drop deal cards (company, value, owner, age) plus a keyboard move alternative; a contacts table with sortable columns, text search and owner/status filters; a deal detail drawer with an activity timeline and inline-editable fields; and an insights view with a revenue-by-month bar chart, stage distribution and top deals — every chart hand-rolled in SVG. About forty invented companies and deals are seeded deterministically on first load and persist to localStorage, with a Reset demo data button; every change — a stage move, a note, an edited value — survives reload. The look is dense productive SaaS: a near-white canvas, cool gray chrome, one deep indigo accent, 13px UI type with tabular numerals, subtle panel elevation. The build uses no drag library (pointer events) and no chart library — everything hand-rolled. To adapt it, swap the variables and rewrite the copy in one content file; stages, seed data, owners and chart labels all read from it.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Minimal](../../styles/minimal.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sales-crm-dashboard?case=1e2e9d16-d5f8-40d9-b40a-990a16dc2746&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sales-crm-dashboard/1e2e9d16-d5f8-40d9-b40a-990a16dc2746/shot_desktop.746188a5d3.webp" width="100%" alt="Sales CRM Dashboard — B2B sales team CRM, built by GLM-5.3 in ZCode"></a><br>
<b>B2B sales team CRM</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/sales-crm-dashboard?case=1e2e9d16-d5f8-40d9-b40a-990a16dc2746&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/sales-crm-dashboard?case=6822ae0a-ea33-49a7-a48c-f6674e113742&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/sales-crm-dashboard/6822ae0a-ea33-49a7-a48c-f6674e113742/shot_desktop.4a3236feb2.webp" width="100%" alt="Sales CRM Dashboard — Agency pipeline CRM, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Agency pipeline CRM</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/sales-crm-dashboard?case=6822ae0a-ea33-49a7-a48c-f6674e113742&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | App name | Pipestack |
| `[TEAM]` | Team name | Northmill Supply |
| `[FOCUS]` | What they sell | industrial sensor hardware |
| `[CURRENCY]` | Currency | USD |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie founder selling software licenses: set BRAND to your app, FOCUS to your product, and rewrite the five pipeline stages to match your trial-to-paid sales motion.
- A small agency tracking new business: set TEAM to the agency, swap seeded deals for retainer and project pitches, and use the owner filter to split work across partners.
- A hardware supplier's sales team: set FOCUS to your product line, set CURRENCY to your code, and replace the seeded companies with real distributor and reseller accounts.
- A consultant who needs a lightweight client tracker: keep the contacts table and deal drawer, rename the stages to proposal, negotiation and signed, and edit the chart labels to your reporting periods.

## FAQ

### Does the Sales CRM Dashboard save my changes after a page reload?
Yes. The Sales CRM Dashboard template seeds about forty invented companies and deals on first load, then persists every change to localStorage under a key built from the brand name. A drag to a new stage, an inline-edited deal value or a new note survives reload. A Reset demo data button restores the seeded dataset whenever you want a clean slate.

### How do I change the pipeline stages or the seeded deals in the Sales CRM Dashboard?
The Sales CRM Dashboard template reads stages, owners, seed companies, deals, activities and chart labels from one content file. Rewrite the stages array to match your sales process, replace the seeded companies and deal titles with your own examples, and set the TEAM, BRAND, FOCUS and CURRENCY variables. Every screen and chart updates from that single file.

### Can I use the Sales CRM Dashboard for a real client project?
Commercial and client use of the Sales CRM Dashboard template requires Pro. The full prompt, the stack and variables are shown publicly, and Pro members also get the source code of the demos. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### How does drag-and-drop work on the Sales CRM Dashboard kanban?
The Sales CRM Dashboard template builds drag-and-drop by hand with pointer events, no drag library. Pointer down on a deal card starts a drag after a six-pixel threshold, a fixed-position copy follows the pointer while the original fades, and stage columns are hit-tested by bounding rect. Escape cancels mid-drag, and Alt with the arrow keys moves a focused card between stages.

### What should I change first after adding the Sales CRM Dashboard template?
Start with the four variables: set BRAND to your app name, TEAM to the company using it, FOCUS to what you sell and CURRENCY to your three-letter code so every value and chart tick formats correctly. Then rewrite the seeded deals and owners in the content file so the pipeline and insights view show believable examples for your market.

### How do I build a sales CRM dashboard with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add sales-crm-dashboard, replace [BRAND], [TEAM], [FOCUS] and [CURRENCY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Sales CRM Dashboard demo?
The B2B sales team CRM case was built by GLM-5.3 in ZCode; the Agency pipeline CRM case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Sales CRM Dashboard template use?
Sales CRM Dashboard is a single-page site built with Tailwind CSS, Motion and React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Sales CRM Dashboard template free to use?
Sales CRM Dashboard is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Sales CRM Dashboard template work on mobile?
Yes. Every Sales CRM Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Sales CRM Dashboard on VibeFather](https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
