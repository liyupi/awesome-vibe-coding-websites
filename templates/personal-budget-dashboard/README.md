# Personal Budget Dashboard

> Track spending, search transactions, and adjust goals in a warm budget workspace saved in your browser.

<a href="https://vibefather.ai/templates/personal-budget-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/personal-budget-dashboard/32da5ac6-1443-4006-82fb-157c5b37bb13/webp.1ed714f767.webp" width="100%" alt="Personal Budget Dashboard — Personal Budget App with Charts and Goals built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/personal-budget-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Personal Budget Dashboard is a working browser-based budget for people who want a clear monthly plan without connecting a bank account. The default content follows Maya's two-income household through a sample month, with income, everyday transactions, eight category budgets, and a plan that reconciles down to the cent. Overview, Transactions, and Goals share the same state, so adding an expense immediately changes the summary, donut, daily chart, ledger, and progress bars.

The visual direction is warm editorial finance rather than a conventional admin panel. A deep forest navigation rail frames an ivory workspace, Fraunces gives headings and important figures a distinctive voice, and Inter keeps dense controls readable. Hand-drawn SVG charts, crisp ruled surfaces, muted category colors, and tabular numerals make the information easy to compare. The first screen is the complete budget workspace itself, not a marketing hero.

The transaction ledger supports merchant and note search, category and type filters, amount or date sorting, and a designed empty state. Budget goals show spent, remaining, and over-budget states, with an accessible dialog for adjusting category targets. The add-transaction dialog validates its fields and persists entries locally. A reset action restores the original sample after confirmation.

Change the product name, owner, budget context, currency, and sample month through five variables. The alternate case turns the household plan into an independent illustrator's irregular-income budget while preserving the same layout and interactions. All merchants, employers, people, and amounts are fictional. Everything runs locally with localStorage; there is no account, bank sync, financial advice, exchange-rate service, backend, or external data request.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [App](../../types/app.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 19 + TypeScript + Tailwind CSS 4.1 + motion + lucide-react |
| Pages | 3 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-budget-dashboard?case=32da5ac6-1443-4006-82fb-157c5b37bb13&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-budget-dashboard/32da5ac6-1443-4006-82fb-157c5b37bb13/shot_desktop.3f483f59c3.webp" width="100%" alt="Personal Budget Dashboard — Two-income household, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Two-income household</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/personal-budget-dashboard?case=32da5ac6-1443-4006-82fb-157c5b37bb13&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-budget-dashboard?case=6e63d01a-4fd8-42a9-a2d2-7aaa5491a74d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-budget-dashboard/6e63d01a-4fd8-42a9-a2d2-7aaa5491a74d/shot_desktop.03f27fbc8b.webp" width="100%" alt="Personal Budget Dashboard — Freelance illustration budget, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Freelance illustration budget</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/personal-budget-dashboard?case=6e63d01a-4fd8-42a9-a2d2-7aaa5491a74d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Budget app brand | Willowsum |
| `[OWNER_NAME]` | Sample budget owner | Maya Chen |
| `[BUDGET_CONTEXT]` | Sample budget context | a two-income household |
| `[CURRENCY]` | Display currency | USD |
| `[SAMPLE_MONTH]` | Primary sample month | May 2026 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add personal-budget-dashboard` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A student living on a termly grant: set OWNER_NAME and SAMPLE_MONTH to your term, replace the household income with a stipend and part-time work, and rename the flexible category to books and travel.
- A freelance designer with uneven invoices: set BUDGET_CONTEXT to freelance work, rewrite the income sources as client payments, and keep the goals focused on tax set-aside and software subscriptions.
- A couple merging finances: keep the two-income household context, change BRAND to your shared name, and adjust the eight category targets together in the Goals view so both partners see the same plan.
- A budgeting coach showing a worked example: set SAMPLE_MONTH to a teaching month, use the reset action between sessions, and walk clients through the donut, daily chart and ledger in the same order.

## FAQ

### Where does the Personal Budget Dashboard store my transactions, and do I need to connect a bank account?
The Personal Budget Dashboard keeps everything in your browser's localStorage, so there is no account, no bank sync and no external data request. Transactions and edited category targets save after each change and survive a page reload. A reset action restores the original sample month after confirmation. Because the data lives only in that browser, moving to another device or clearing site data starts from the seed again.

### How do I make the sample month and currency match my own budget instead of Maya's household?
The Personal Budget Dashboard exposes five variables: BRAND, CURRENCY, OWNER_NAME, SAMPLE_MONTH and BUDGET_CONTEXT. Set OWNER_NAME to your name, SAMPLE_MONTH to the month you want the sample to cover, and CURRENCY to your ISO code so amounts format locally. Changing CURRENCY only reformats values, it does not convert them. BUDGET_CONTEXT is the phrase that drives the sample income sources, merchants and one flexible spending category, so rewrite those entries when you change it.

### Can the Personal Budget Dashboard handle irregular freelance income instead of a fixed salary?
The Personal Budget Dashboard's alternate demo, built by DeepSeek V4.1 Flash, turns the household plan into an independent illustrator's irregular-income budget while keeping the same layout and interactions. To do the same, set BUDGET_CONTEXT to a freelance phrase and rewrite the sample income sources and merchants so they reflect uneven payments. The ledger, donut, daily chart and goal bars all derive from the same transaction data, so they update together.

### What can I change in the transaction ledger and the budget goals?
The Personal Budget Dashboard ledger supports merchant and note search, category and type filters, and sorting by amount or date, with a designed empty state when nothing matches. Goals show spent, remaining and over-budget states, and an Adjust target dialog lets you change each category's target. The Add transaction dialog validates its fields before saving. Every total, chart series, percentage and progress bar is derived from the transactions, so one entry updates the whole workspace.

### Is the Personal Budget Dashboard free to use, and what do I get with the template?
The Personal Budget Dashboard is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, and you can install it with the VibeFather command line or read the brief, stack and variables on the page. Commercial or client work needs Pro, which also includes the full prompt and the demo source code. The template ships with three pages: Overview, Transactions and Goals.

### How do I build a personal budget dashboard with AI?
Copy the prompt from this page or run npx vibefather add personal-budget-dashboard, replace [BRAND], [OWNER_NAME], [BUDGET_CONTEXT] and [CURRENCY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Personal Budget Dashboard demo?
The Two-income household case was built by Kimi K3.1 Pro in Kimi Code; the Freelance illustration budget case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Personal Budget Dashboard template use?
Personal Budget Dashboard is a 3-page site built with React, Motion and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Personal Budget Dashboard template for a client or a business?
The Personal Budget Dashboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Personal Budget Dashboard template work on mobile?
Yes. Every Personal Budget Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Personal Budget Dashboard on VibeFather](https://vibefather.ai/templates/personal-budget-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
