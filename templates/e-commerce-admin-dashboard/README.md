# E-commerce Admin Dashboard

> Clean store-admin app: KPI cards, a hand-rolled revenue chart, orders table with filters, product editor and inventory alerts.

<a href="https://vibefather.ai/templates/e-commerce-admin-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/e-commerce-admin-dashboard/2a1587a3-b06e-4164-b9d5-345d50489060/webp.f37d1677cf.webp" width="100%" alt="E-commerce Admin Dashboard — Store Admin Dashboard with Charts built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/e-commerce-admin-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page admin app for one small online store: a collapsible sidebar over four views — Overview (four KPI cards with deltas, a 30-day revenue area chart drawn as inline SVG, a top-products bar list, recent orders); Orders (a dense table with status chips, text search and status filter tabs, clicking a row opens a detail drawer with line items and a timeline); Products (a list plus an editor form with live validation and an auto-generated monogram tile, saved to localStorage); and Inventory (low-stock alert rows with quick-restock steppers and toast confirmations). Data is invented, seeded once into localStorage, and a topbar button resets the demo data with a confirmation toast. The default store sells invented gear, but the structure suits any small store's back office. The look is clean operations: cool gray ground, white panels, one indigo accent, charts hand-rolled so the craft is visible. No chart or table libraries; no network.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [E-commerce](../../types/ecommerce.md), [Dashboard](../../types/dashboard.md), [App](../../types/app.md) |
| Style | [Minimal](../../styles/minimal.md), [Swiss](../../styles/swiss.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/e-commerce-admin-dashboard?case=2a1587a3-b06e-4164-b9d5-345d50489060&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/e-commerce-admin-dashboard/2a1587a3-b06e-4164-b9d5-345d50489060/shot_desktop.e4f02c7c20.webp" width="100%" alt="E-commerce Admin Dashboard — Outdoor gear store admin, built by GLM-5.3 in ZCode"></a><br>
<b>Outdoor gear store admin</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/e-commerce-admin-dashboard?case=2a1587a3-b06e-4164-b9d5-345d50489060&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/e-commerce-admin-dashboard?case=d3aabe35-2a58-4f81-b9a3-f1740abf3e05&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/e-commerce-admin-dashboard/d3aabe35-2a58-4f81-b9a3-f1740abf3e05/shot_desktop.d9c4680a73.webp" width="100%" alt="E-commerce Admin Dashboard — Candle studio admin, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Candle studio admin</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/e-commerce-admin-dashboard?case=d3aabe35-2a58-4f81-b9a3-f1740abf3e05&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[SHOP]` | Store name | Trailhead Supply |
| `[NICHE]` | What it sells | outdoor gear and trail kit |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add e-commerce-admin-dashboard` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A candle studio owner: set [SHOP] to your studio name and [NICHE] to candles and home scent, then rewrite product names, SKUs and order items to match your catalog.
- A coffee roaster packing orders: keep the Orders table and detail drawer, rename status chips to match your fulfillment steps and adjust the timeline labels.
- A small apparel brand watching stock: use the Inventory view's low-stock alert rows and restock steppers as your daily reorder list, with thresholds set per product.
- A developer showing an internal tool: keep the invented data, point the topbar Reset button at your own sample set and present the Overview KPIs as the demo's opening screen.

## FAQ

### What can I actually do inside the E-commerce Admin Dashboard template?
The E-commerce Admin Dashboard template is a single-page admin app with four sidebar views. Overview shows four KPI cards with deltas, a 30-day revenue area chart, a top-products bar list and recent orders. Orders is a dense table with status chips, text search and filter tabs, and rows open a detail drawer with line items and a status timeline. Products has a list plus an editor form, and Inventory shows low-stock alerts with restock steppers.

### How do I change the store name and what it sells in the E-commerce Admin Dashboard template?
Set the [SHOP] variable to your store name and [NICHE] to one lowercase phrase naming your catalog. [SHOP] feeds the wordmark, page title, footer, email address and the localStorage key, while [NICHE] rewrites product names, SKUs, overview copy and order items. The default values are Trailhead Supply selling outdoor gear and trail kit, so rewrite every headline and label to match your own store.

### Where does the E-commerce Admin Dashboard store its data, and how do I reset it?
The E-commerce Admin Dashboard template keeps everything in the browser. Its invented dataset is seeded once into localStorage, and every edit, restock, status change and reset writes back to that same storage key. A Reset demo data button in the topbar opens a small confirmation popover, then reseeds the sample content and shows a toast. No backend, server code or external API is involved.

### Is the E-commerce Admin Dashboard template free, and what do I get with Pro?
The E-commerce Admin Dashboard template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which gives the full prompt and the demo source code. Free templates show the brief, stack and variables publicly, so you can read the structure before deciding.

### How do I add a new view or a different chart to the E-commerce Admin Dashboard template?
Tell your AI agent which sidebar view to add and what it should contain, then point it at the existing view components and the content file. The E-commerce Admin Dashboard template keeps every label and sample record in one typed content file, so new products, orders or series points belong there. The revenue chart is hand-rolled inline SVG with a gradient fill and a hover crosshair, so a new chart follows the same pattern rather than a chart library.

### How do I build an e-commerce admin dashboard with AI?
Copy the prompt from this page or run npx vibefather add e-commerce-admin-dashboard, replace [SHOP] and [NICHE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the E-commerce Admin Dashboard demo?
The Outdoor gear store admin case was built by GLM-5.3 in ZCode; the Candle studio admin case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the E-commerce Admin Dashboard template use?
E-commerce Admin Dashboard is a single-page site built with Tailwind CSS, Motion and React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the E-commerce Admin Dashboard template for a client or a business?
The E-commerce Admin Dashboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the E-commerce Admin Dashboard template work on mobile?
Yes. Every E-commerce Admin Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [E-commerce Admin Dashboard on VibeFather](https://vibefather.ai/templates/e-commerce-admin-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
