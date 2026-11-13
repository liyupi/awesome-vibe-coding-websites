# Logistics and Freight Website

> Bold navy-and-sand freight site with an animated route map, local tracking widget and instant quote form.

<a href="https://vibefather.ai/templates/logistics-and-freight-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/logistics-and-freight-website/14148abf-d655-4ab3-b006-6d2413563f58/webp.fc78885216.webp" width="100%" alt="Logistics and Freight Website — Freight Site with Tracking Widget built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/logistics-and-freight-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Logistics and Freight Website is a bold B2B site for an invented carrier. The first screen anchors on a stylized world map drawn entirely in SVG: abstract continent shapes, six invented hubs, and three kinds of route - dashed road segments, curved sea lanes and long air arcs - that draw themselves on load, then carry small pulses between hubs and flash the hub ring when one arrives. Heavy Archivo Black headlines in amber and sand sit against a deep navy ground, with warm sand panels for services and the quote form, and JetBrains Mono carrying tracking codes and dispatch numbers. Services split by mode - road, sea and air - each on a sand panel with a code-drawn vehicle icon, capacity chips and one concrete number. The tracking widget is the proof point: a prefilled sample code reveals a journey-day status timeline with a live pulse on the current node, honestly labeled as sample data and running entirely in the browser. A marquee ticker, count-up coverage stats, industry chips and a fully client-side quote form with inline confirmation fill out the page. Motion is bold and quick: routes draw fast, counters snap, panels nudge on hover. There are no photographs and no map tiles - the world is redrawn as shapes, which keeps the build small and the look unmistakable. It suits freight forwarders, 3PLs, moving companies, courier networks and any logistics operator selling reliability. The default case is a trucking carrier on one corridor; the alternate case is a cold-chain ocean forwarder. Swap the brand, lane, tracking code and dispatch line, rewrite one content file, and the site stays loud.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Dark](../../styles/dark.md) |
| Effects | Marquee, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/logistics-and-freight-website?case=14148abf-d655-4ab3-b006-6d2413563f58&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/logistics-and-freight-website/14148abf-d655-4ab3-b006-6d2413563f58/shot_desktop.a77627ced3.webp" width="100%" alt="Logistics and Freight Website — Trucking freight carrier, built by GLM-5.3 in ZCode"></a><br>
<b>Trucking freight carrier</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/logistics-and-freight-website?case=14148abf-d655-4ab3-b006-6d2413563f58&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/logistics-and-freight-website?case=30fb5d88-a3bb-4f43-92ca-467a74e49074&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/logistics-and-freight-website/30fb5d88-a3bb-4f43-92ca-467a74e49074/shot_desktop.c4f68f520a.webp" width="100%" alt="Logistics and Freight Website — Cold chain ocean forwarder, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cold chain ocean forwarder</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/logistics-and-freight-website?case=30fb5d88-a3bb-4f43-92ca-467a74e49074&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Carrier name | Copperline Freight |
| `[TRADE_LANE]` | Main corridor | Longshore Bay-Cedar Mesa-Harbor Nine |
| `[TRACKING_CODE]` | Sample tracking code | CL-4471-2209-CM |
| `[DISPATCH_LINE]` | Dispatch contact line | Dispatch desk +1 (555) 014-8890 - staffed 24/7 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add logistics-and-freight-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A regional moving company: set BRAND to your name, TRADE_LANE to your main route, and rewrite the services panels around household moves, packing and storage.
- A cold-chain ocean forwarder: lead the services with sea lanes, set TRACKING_CODE to a reefer reference format, and write the sample journey around temperature-checked port handoffs.
- A courier network founder: swap the three mode panels for same-day, next-day and freight, and set DISPATCH_LINE to your live dispatch number and hours.
- A 3PL selling to e-commerce operations: keep the coverage counters and industry chips, and rewrite the quote form labels around parcel volume, pickup windows and delivery promise.

## FAQ

### How does the tracking widget on the Logistics and Freight Website work without a backend?
The tracking widget on the Logistics and Freight Website is pure client state. A prefilled sample code reveals a journey-day status timeline with a live pulse on the current node, and the panel is honestly labeled as sample data. Unknown codes show an inline not-found message with a button to load the sample. Nothing is fetched or posted, so it proves the experience without needing a real tracking API.

### What do I change first to turn the Logistics and Freight Website into my own carrier brand?
Start with the four variables: set BRAND to your carrier name, TRADE_LANE to your main corridor, TRACKING_CODE to your sample reference format and DISPATCH_LINE to your dispatch contact. Then rewrite the content file so the hero, ticker, services, sample journey, coverage stats and footer match those values. Keep the same lengths, structure and trucker-confident tone, and leave the layout, colors and motion as they are.

### Is the Logistics and Freight Website template free, and what can I do with it?
The Logistics and Freight Website template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives you the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly, and the quote form and tracking widget run entirely in the browser with no backend.

### How do I adapt the quote form and services for a cold-chain ocean forwarder?
The Logistics and Freight Website already ships a cold chain ocean forwarder demo. Set BRAND and TRADE_LANE to your sea corridor, rewrite the services panels so sea leads and road and air support it, and adjust the capacity chips and the one concrete number on each panel. The quote form validates and confirms client-side, so describe your modes and lane in the copy and keep the inline confirmation.

### What should I watch out for when using the Logistics and Freight Website for a real business?
The Logistics and Freight Website is a static site with no backend. The tracking widget and quote form never post anywhere, so a real business needs to connect the form to its own inbox or CRM and replace the sample tracking journey with live data. The map is drawn in SVG with invented hubs and no map tiles, so update the hub names and route paths in the map data to match your network.

### How do I build a logistics and freight website with AI?
Copy the prompt from this page or run npx vibefather add logistics-and-freight-website, replace [BRAND], [TRADE_LANE], [TRACKING_CODE] and [DISPATCH_LINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Logistics and Freight Website demo?
The Trucking freight carrier case was built by GLM-5.3 in ZCode; the Cold chain ocean forwarder case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Logistics and Freight Website template use?
Logistics and Freight Website is a single-page site built with Tailwind CSS, Motion and React, with marquee, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Logistics and Freight Website template for a client or a business?
The Logistics and Freight Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Logistics and Freight Website template work on mobile?
Yes. Every Logistics and Freight Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Logistics and Freight Website on VibeFather](https://vibefather.ai/templates/logistics-and-freight-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
