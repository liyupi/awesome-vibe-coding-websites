# Stock Trading Dashboard <sup>PRO</sup>

> Explore a fictional market, read its tape, and follow a paper order from ticket to fill.

<a href="https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/stock-trading-dashboard/c63a370b-d7c4-489c-b2a8-9cb6c824e65f/webp.1ef0d01445.webp" width="100%" alt="Stock Trading Dashboard — Interactive Paper Trading Terminal built by GPT-6.2 Astra and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

The first thing you see in this paper trading workspace is a market already in motion. A watchlist tracks six imaginary companies, each with its own little price trace. Picking a row brings its candles, book and trade ticket into focus together. The dark canvas gives the colored candle bodies room to breathe. Signed changes and aligned figures make it possible to read the direction of a move without relying on color.

Use the timeframes to explore different parts of the price history, then inspect an individual candle for its open, high, low and close. You can layer a moving average and volatility bands over the price, or open a separate momentum plot underneath. Beneath the chart, an account blotter shows how open positions move with the tape. The portfolio view includes cash so you can see how much of the account is actually invested.

The order ticket connects to the same synthetic market as the chart. Market orders fill at the quoted side. A pending order has a visible trigger, remaining buying power and a cancel action. Refreshing the page brings back the account, open instructions and saved chart preferences. An educator can use it for a trading exercise, and a developer can use it to prototype a data-heavy product without opening a brokerage account. The issuer universe, initial account and desk name come from a small content configuration. A single adapter contains the simulated feed and execution rules, so the interface can stay intact when the underlying model changes.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Web App](../../types/web-app.md) |
| Style | [Terminal](../../styles/terminal.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, Micro-interactions |
| Stack | Vite + React + TypeScript + Vanilla CSS |
| Pages | 1 |
| Built with | [GPT-6.2 Astra](../../models/gpt-6-2-astra.md) in Codex, [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/stock-trading-dashboard?case=c63a370b-d7c4-489c-b2a8-9cb6c824e65f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/stock-trading-dashboard/c63a370b-d7c4-489c-b2a8-9cb6c824e65f/shot_desktop.fab7e3a5c4.webp" width="100%" alt="Stock Trading Dashboard — Industrial equities desk, built by GPT-6.2 Astra in Codex"></a><br>
<b>Industrial equities desk</b><br>
<sub>Built by <b>GPT-6.2 Astra</b> in Codex · <a href="https://vibefather.ai/templates/stock-trading-dashboard?case=c63a370b-d7c4-489c-b2a8-9cb6c824e65f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/stock-trading-dashboard?case=fd7e58ff-c565-4a21-b0c6-6223436af45b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/stock-trading-dashboard/fd7e58ff-c565-4a21-b0c6-6223436af45b/shot_desktop.a07efa2ea5.webp" width="100%" alt="Stock Trading Dashboard — Maritime equities desk, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Maritime equities desk</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/stock-trading-dashboard?case=fd7e58ff-c565-4a21-b0c6-6223436af45b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Desk name | Rivetline Desk |
| `[PRIMARY_ISSUER]` | Featured company | Veylan Foundry |
| `[PRIMARY_SYMBOL]` | Featured synthetic ticker | VYL.X7 |
| `[OPENING_CASH]` | Starting cash in USD | 24500 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A finance educator: set BRAND to your course name, OPENING_CASH to the exercise budget, and use the order ticket for a lesson on market versus pending orders.
- A developer prototyping a data-heavy product: keep the market adapter but swap its simulated feed for your own data source while the chart, book and blotter stay as they are.
- A trading club: set PRIMARY_ISSUER and PRIMARY_SYMBOL to a fictional company your members follow, and rename the desk in BRAND to the club's name.
- A design portfolio piece: keep the dark terminal styling, change BRAND to your studio, and rewrite the workspace copy to describe the interface decisions you made.

## FAQ

### How do I change the companies and starting cash in the Stock Trading Dashboard?
The Stock Trading Dashboard template keeps its content in a small configuration module. Set BRAND to your desk name, PRIMARY_ISSUER and PRIMARY_SYMBOL to the featured company and ticker, and OPENING_CASH to the starting balance in USD. The default market watches six imaginary companies, so rewriting the content means updating each headline, label and paragraph to match your new values.

### Can I use the Stock Trading Dashboard to teach a class about order types?
Yes. The Stock Trading Dashboard template is built for a trading exercise: students inspect a price move, place a market or pending order, watch it fill or trigger, and cancel it before it executes. Every panel reads from the same simulated market, so the chart, order ticket and account blotter stay consistent. The workspace keeps the notice “Simulated, not financial advice” in place.

### Does the Stock Trading Dashboard connect to a real brokerage or live market data?
No. The Stock Trading Dashboard template runs entirely on a local simulated feed with no backend, server code or external APIs. The issuer universe, feed ticks and execution rules sit in one replaceable market adapter, so the interface stays intact when you swap in a different model. The market, prices and account are all fictional.

### What happens to my orders and chart settings if I refresh the Stock Trading Dashboard page?
The Stock Trading Dashboard template saves a versioned account and feed snapshot in your browser, including pending orders, fills, the selected symbol and chart settings. Refreshing brings back the account, open instructions and saved chart preferences. It seeds only on first use and recovers if the stored data is malformed.

### How do I run the Stock Trading Dashboard template on my own machine?
Install the Stock Trading Dashboard template with the command npx vibefather add stock-trading-dashboard, then build it with npm run build, which outputs static files to dist. The stack is Vite, React, TypeScript and Vanilla CSS, with all graphics drawn locally in SVG or CSS. There is no backend to deploy, so the built files can be hosted anywhere static.

### How do I build a stock trading dashboard with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add stock-trading-dashboard, replace [BRAND], [PRIMARY_ISSUER], [PRIMARY_SYMBOL] and [OPENING_CASH] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Stock Trading Dashboard demo?
The Industrial equities desk case was built by GPT-6.2 Astra in Codex; the Maritime equities desk case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Stock Trading Dashboard template use?
Stock Trading Dashboard is a single-page site built with React, with generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Stock Trading Dashboard template free to use?
Stock Trading Dashboard is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Stock Trading Dashboard template work on mobile?
Yes. Every Stock Trading Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Stock Trading Dashboard on VibeFather](https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
