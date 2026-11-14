# SaaS Pricing Page

> Standalone SaaS pricing page with a monthly/annual toggle, a live seat calculator and a sticky-header comparison table.

<a href="https://vibefather.ai/templates/saas-pricing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/saas-pricing-page/966f4b78-ec1c-4594-9253-f958e677c9c4/webp.02f85ee3ea.webp" width="100%" alt="SaaS Pricing Page — SaaS Pricing Page with Seat Slider built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/saas-pricing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page SaaS pricing page: three tier cards under a monthly/annual toggle with a save-20% chip, a seat slider from 1 to 100 that recalculates every total and per-seat rate live, a trust strip, a full feature comparison table with a sticky header row, a plain-spoken enterprise block and a pricing FAQ. The default content prices an invented team-scheduling product at $12 per seat, doubling per tier, but the structure suits any per-seat SaaS: change the brand, product category, base price and default seats and every number, tier line and FAQ still reads true — the calculator derives everything from the base price. The look is modern SaaS minimal: white and soft gray, near-black ink, one vivid indigo accent, Space Grotesk headings over Inter, crisp hairlines and a quietly elevated featured tier. There is no photography — the product panel in the hero is a small app mock drawn entirely in SVG, and every check, dash and chip is code. To adapt it, swap the variables and rewrite the copy in one content file; tiers, table rows and FAQ all read from it.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | Pricing Page |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/saas-pricing-page?case=966f4b78-ec1c-4594-9253-f958e677c9c4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/saas-pricing-page/966f4b78-ec1c-4594-9253-f958e677c9c4/shot_desktop.c425a1eb4b.webp" width="100%" alt="SaaS Pricing Page — Scheduling SaaS pricing, built by GLM-5.3 in ZCode"></a><br>
<b>Scheduling SaaS pricing</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/saas-pricing-page?case=966f4b78-ec1c-4594-9253-f958e677c9c4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/saas-pricing-page?case=3418259b-9e95-473f-83fd-a9b0da043007&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/saas-pricing-page/3418259b-9e95-473f-83fd-a9b0da043007/shot_desktop.2651c58658.webp" width="100%" alt="SaaS Pricing Page — Field service SaaS pricing, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Field service SaaS pricing</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/saas-pricing-page?case=3418259b-9e95-473f-83fd-a9b0da043007&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Product name | Slateline |
| `[PRODUCT]` | What it does | team scheduling and time tracking |
| `[BASE_PRICE]` | Base monthly price | 12 |
| `[SEAT_DEFAULT]` | Default seats | 10 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add saas-pricing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A field service software startup: set BRAND to your product, PRODUCT to job scheduling and dispatch, BASE_PRICE to your Starter seat rate, and rewrite the comparison rows for crew tracking and invoicing.
- An indie hacker launching a time-tracking tool: set BRAND and PRODUCT to your app, choose a SEAT_DEFAULT that matches a small team, and rewrite the FAQ to answer billing and cancellation questions.
- A team-scheduling SaaS founder: keep the per-seat structure, set BASE_PRICE to your Starter monthly rate, and rewrite the enterprise block to describe your onboarding and support terms.
- A B2B analytics startup: set PRODUCT to analytics and reporting, adjust BASE_PRICE and SEAT_DEFAULT, and replace the comparison table rows with your data limits, integrations and export features.

## FAQ

### How does the seat calculator on the SaaS Pricing Page work?
The SaaS Pricing Page template includes a seat slider from 1 to 100 seats, starting at your SEAT_DEFAULT value. Every price on the page is derived from BASE_PRICE: Starter is the base, Team is double, Business is quadruple, and annual billing takes 20% off each. Moving the slider recalculates each tier's total and per-seat rate live, so a visitor sees the real math for their own headcount.

### What do I need to change to make this pricing page fit my own SaaS product?
The SaaS Pricing Page template is driven by four variables in one content file: BRAND, PRODUCT, BASE_PRICE and SEAT_DEFAULT. Set BRAND to your product name, describe what it does in PRODUCT, enter your Starter monthly per-seat price as BASE_PRICE and choose where the slider should start with SEAT_DEFAULT. Then rewrite the tier feature lines, the sixteen comparison rows and the six FAQ answers to match your product.

### Is the SaaS Pricing Page template free to use?
The SaaS Pricing Page template is free. Its prompt and DESIGN.md are available for personal, non-commercial use under CC BY-NC 4.0. Commercial use, including building a pricing page for a client, requires Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and source code of the demos comes with Pro.

### Can I host the SaaS Pricing Page on my own domain or static host?
Yes. The SaaS Pricing Page builds to static files in a dist folder with no backend, server code or external APIs, so it can be hosted anywhere that serves static files, including your own domain. Everything runs in the browser: the monthly and annual toggle, the seat slider and the live totals all work without a server.

### What should I edit first after generating the SaaS Pricing Page?
Start with the content file: set BRAND, PRODUCT, BASE_PRICE and SEAT_DEFAULT, then rewrite the hero headline, the three tier names and feature lines, the sixteen-row comparison table and the six FAQ answers. After that, adjust the enterprise block's contact email and review the save-20% chip wording. All prices and totals update automatically from BASE_PRICE.

### How do I build a SaaS pricing page with AI?
Copy the prompt from this page or run npx vibefather add saas-pricing-page, replace [BRAND], [PRODUCT], [BASE_PRICE] and [SEAT_DEFAULT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the SaaS Pricing Page demo?
The Scheduling SaaS pricing case was built by GLM-5.3 in ZCode; the Field service SaaS pricing case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the SaaS Pricing Page template use?
SaaS Pricing Page is a single-page site built with React, Motion and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the SaaS Pricing Page template for a client or a business?
The SaaS Pricing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the SaaS Pricing Page template work on mobile?
Yes. Every SaaS Pricing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [SaaS Pricing Page on VibeFather](https://vibefather.ai/templates/saas-pricing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
