# EV Charging Network Website

> A dark technical EV charging site with a filterable station map, pricing and a host form.

<a href="https://vibefather.ai/templates/ev-charging-network-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/ev-charging-network-website/807b4d36-1963-44e1-a401-0f11eccd36f2/webp.222a0799e6.webp" width="100%" alt="EV Charging Network Website — EV Charging Map with Filters built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ev-charging-network-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for an EV charging network, drawn entirely in code — no photography anywhere. The first screen is the product itself: a stylized city map rendered in SVG, thin graphite street lines with a river cutting through, and fourteen charging stations as electric-green dots pulsing softly across the grid. Filter chips for speed, connector and availability sit docked on the map, and every change re-lights the city in real time: matching stations glow and pulse while the rest fade to faint dots, each one hoverable for a mono readout of name, speed and state. All station data is invented sample data, labeled as such. Below the map the page stays technical: a mono stats strip, a per-kilowatt pricing block with a 24-hour day/night rate bar and a three-tier tariff table, and an app preview built as a CSS phone mockup — a charging session with a battery ring that fills to 68 percent once it scrolls into view. A fleet section covers depot chargers, corridor planning and per-kWh invoicing, and the host-a-charger form collects property type and spot count, saving to local storage only and saying so. The look is locked: graphite grounds with hairline grid textures, one electric green (amber reserved for busy states), Space Grotesk display over JetBrains Mono labels, restrained motion that honors prefers-reduced-motion. Swap brand, city, headline rate and station count in one content file; the second demo case turns the same layout into an e-bike share network.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Landing Page](../../types/landing-page.md), [SaaS](../../types/saas.md) |
| Style | [Minimal](../../styles/minimal.md), [Terminal](../../styles/terminal.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ev-charging-network-website?case=807b4d36-1963-44e1-a401-0f11eccd36f2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ev-charging-network-website/807b4d36-1963-44e1-a401-0f11eccd36f2/shot_desktop.78695d254b.webp" width="100%" alt="EV Charging Network Website — EV charging network, built by GLM-5.3 in ZCode"></a><br>
<b>EV charging network</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/ev-charging-network-website?case=807b4d36-1963-44e1-a401-0f11eccd36f2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ev-charging-network-website?case=e4dba3c7-d7f4-4088-9a04-985b08839992&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ev-charging-network-website/e4dba3c7-d7f4-4088-9a04-985b08839992/shot_desktop.a36d602a2e.webp" width="100%" alt="EV Charging Network Website — E-bike share network, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>E-bike share network</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/ev-charging-network-website?case=e4dba3c7-d7f4-4088-9a04-985b08839992&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Network name | Ampline |
| `[CITY]` | City name | Norhaven |
| `[RATE]` | Headline rate | $0.34 / kWh |
| `[STATIONS]` | Station count | 412 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add ev-charging-network-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A regional charging network: set BRAND to your name, CITY to your metro, RATE to your daytime price and STATIONS to your live count, then replace the sample stations with your own locations.
- An e-bike share operator: keep the map and filters, rename stations to docks, swap speed and connector chips for battery level, and rewrite the fleet section around depot planning.
- A commercial property owner hosting chargers: point the host form at your own enquiry inbox and rewrite the fleet cards to describe tenant and visitor charging on your sites.
- An energy startup launching a tariff product: keep the day/night rate bar and three-tier tariff table, set RATE to your launch price and rewrite the hero sub to name your city.

## FAQ

### What is included in the EV Charging Network Website template?
The EV Charging Network Website template is a single-page site with a hero map of an invented city, filter chips for speed, connector and availability, a mono stats strip, per-kilowatt pricing with a day/night rate bar and a three-tier tariff table, a CSS phone mockup with a battery ring that fills to 68 percent, a fleet section and a host-a-charger form that saves to local storage. All visuals are drawn in SVG and CSS, with no photography.

### How do I change the city, rate and station count on the EV Charging Network Website?
The EV Charging Network Website template keeps its copy and sample data in one content file. Set CITY to your metro, RATE to your headline price per kilowatt-hour, BRAND to your network name and STATIONS to your network-wide count. The map itself always shows fourteen sample dots, so rewrite the headlines and labels around your values while keeping the same length and tone.

### Is the station map on the EV Charging Network Website connected to real charger data?
No. The map on the EV Charging Network Website template runs on invented sample data, and the page labels it as such. The fourteen stations, their speeds, connectors and states are fixed entries in the content file, and the filter chips re-light those dots in the browser. There is no backend or external API, so connecting live charger data would be your own addition.

### Can I turn the EV Charging Network Website into an e-bike or scooter sharing site?
Yes. One of the live demos of the EV Charging Network Website template is an e-bike share network built from the same layout. Swap the station names and connector labels for docks and battery levels, change RATE to a per-minute or per-ride price, and rewrite the fleet section for depot or corridor planning. The map, filter chips and battery ring carry over unchanged.

### How does the host-a-charger form work on the EV Charging Network Website?
The host-a-charger form on the EV Charging Network Website template collects property type and spot count, then saves the entry to the browser's local storage only. The page states this plainly, so nothing leaves the visitor's device. To receive real host enquiries you would need to connect the form to your own mailing list or form service, which the template does not include.

### How do I build an EV charging network website with AI?
Copy the prompt from this page or run npx vibefather add ev-charging-network-website, replace [BRAND], [CITY], [RATE] and [STATIONS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the EV Charging Network Website demo?
The EV charging network case was built by GLM-5.3 in ZCode; the E-bike share network case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the EV Charging Network Website template use?
EV Charging Network Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the EV Charging Network Website template for a client or a business?
The EV Charging Network Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the EV Charging Network Website template work on mobile?
Yes. Every EV Charging Network Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [EV Charging Network Website on VibeFather](https://vibefather.ai/templates/ev-charging-network-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
