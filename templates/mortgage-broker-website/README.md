# Mortgage Broker Website

> A warm broker site with live mortgage math, sample rates and a client-side application starter.

<a href="https://vibefather.ai/templates/mortgage-broker-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/mortgage-broker-website/8c9b2a6d-5d28-4ec6-b6f4-1260793cc7f4/webp.83a4c6f7c1.webp" width="100%" alt="Mortgage Broker Website — Mortgage Broker Site with Payment Calculator built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/mortgage-broker-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Mortgage Broker Website is a one-page site for an independent broker who wants to educate before asking for contact details. The first screen combines a warm home exterior, a plain-language promise, and a working payment calculator rather than a decorative mockup. Home price, down payment, sample note rate, and term all update the same state used by the rate comparison and amortization chart, so the page feels like one coherent tool. A stacked principal-and-interest chart, yearly schedule, sample rate table, four loan-type explainers, and four pre-approval steps give visitors useful answers without presenting invented figures as offers. The default brand, broker, location, audience, and home price are fictional placeholders and can be replaced through five variables. An alternate case shifts the content to self-employed buyers while retaining the layout and calculations. Newsreader headlines, Manrope interface text, parchment surfaces, pine accents, and restrained motion keep the financial content approachable and legible. The broker section includes a generated portrait of a fictional person; two additional generated photos provide a consistent editorial setting. A three-step application starter validates locally and saves a draft in the browser, explicitly stating that nothing is sent. It never requests sensitive identity or banking data. Adapt the copy in one content file, replace the image paths if needed, and keep the example-not-offer disclosures wherever figures appear. Keyboard-visible focus states, a table equivalent for the chart, and reduced-motion behavior are part of the design rather than optional polish. The finished site builds to static files with no backend, external APIs, analytics, or hotlinked assets.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mortgage-broker-website?case=8c9b2a6d-5d28-4ec6-b6f4-1260793cc7f4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mortgage-broker-website/8c9b2a6d-5d28-4ec6-b6f4-1260793cc7f4/shot_desktop.f7a15e778b.webp" width="100%" alt="Mortgage Broker Website — First-time buyer mortgage, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>First-time buyer mortgage</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/mortgage-broker-website?case=8c9b2a6d-5d28-4ec6-b6f4-1260793cc7f4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/mortgage-broker-website?case=7b401107-275c-4927-85d5-4ee7388726df&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/mortgage-broker-website/7b401107-275c-4927-85d5-4ee7388726df/shot_desktop.0a95807b68.webp" width="100%" alt="Mortgage Broker Website — Self-employed buyer mortgage, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Self-employed buyer mortgage</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/mortgage-broker-website?case=7b401107-275c-4927-85d5-4ee7388726df&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brokerage brand | Cedar & Slate Mortgage |
| `[BROKER]` | Broker name | Maya Chen |
| `[LOCATION]` | Service location | Bend, Oregon |
| `[AUDIENCE]` | Primary audience | first-time home buyers |
| `[HOME_PRICE]` | Example home price | 420000 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add mortgage-broker-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo mortgage broker: set BRAND and BROKER to your name, LOCATION to your service area, and replace the generated portrait with your own photo.
- A brokerage serving self-employed buyers: set AUDIENCE to self-employed buyers and rewrite the loan-type cards and FAQs around income documentation.
- A first-time buyer education site: keep the four pre-approval steps, shorten the rate table, and point the application starter at your own contact page.
- A regional lender's landing page: set HOME_PRICE to your local example, swap the loan-type explainers for your products, and keep the disclosures beside every figure.

## FAQ

### How does the mortgage payment calculator on this template actually work?
The Mortgage Broker Website template runs a fixed-rate payment calculator in the hero that updates from one shared state: home price, down payment, sample note rate and term. Changing any control recalculates the monthly payment, the sample rate comparison, the principal-versus-interest amortization chart and the yearly schedule together. All figures are illustrative examples, not offers, and no credit check or account is involved.

### What do I need to change first to make this broker site my own?
Start with the five variables: BRAND, BROKER, AUDIENCE, LOCATION and HOME_PRICE. The Mortgage Broker Website template keeps every headline, paragraph, sample rate, loan-type card, process step, FAQ and disclosure in one content file, so you edit copy there rather than in components. Replace the generated portrait and two editorial photos if you want your own setting, and keep the example-not-offer disclosures wherever figures appear.

### Does the application form on this mortgage site send client data anywhere?
No. The three-step application starter in the Mortgage Broker Website template validates locally and saves a draft in the visitor's browser, and it states plainly that nothing is sent. It never asks for sensitive identity or banking data. The finished site builds to static files with no backend, external APIs or analytics, so there is no server receiving submissions.

### Can I adapt this template for self-employed buyers or a different audience?
Yes. The Mortgage Broker Website template ships an alternate case that shifts the content to self-employed buyers while keeping the layout and calculations. Set AUDIENCE to your audience phrase, then rewrite the hero, process examples, broker bio and FAQs in the content file to match. The live demo built with DeepSeek V4.1 Flash shows that self-employed version, while the Kimi K3.1 Pro demo shows the first-time buyer version.

### Is the mortgage calculator accessible and does it work with reduced motion?
The Mortgage Broker Website template includes keyboard-visible focus states, a table equivalent for the amortization chart and reduced-motion behavior as part of the design. Amounts and rates use tabular figures so they stay aligned. The amortization chart is hand-drawn responsive SVG, and the yearly schedule gives the same data in table form for anyone who prefers reading numbers.

### How do I build a mortgage broker website with AI?
Copy the prompt from this page or run npx vibefather add mortgage-broker-website, replace [BRAND], [BROKER], [LOCATION] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Mortgage Broker Website demo?
The First-time buyer mortgage case was built by Kimi K3.1 Pro in Kimi Code; the Self-employed buyer mortgage case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Mortgage Broker Website template use?
Mortgage Broker Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Mortgage Broker Website template for a client or a business?
The Mortgage Broker Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Mortgage Broker Website template work on mobile?
Yes. Every Mortgage Broker Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Mortgage Broker Website on VibeFather](https://vibefather.ai/templates/mortgage-broker-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
