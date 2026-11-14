# Home Energy Dashboard

> A dark home-energy dashboard with hand-built SVG charts, a range switcher and live device toggles.

<a href="https://vibefather.ai/templates/home-energy-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/wattline/6e35690e-e3cd-4434-8a4e-7434040f1990/webp.aeb15e6e6e.webp" width="100%" alt="Home Energy Dashboard — Dark Energy Monitoring Dashboard with Animated SVG Charts built by Claude Opus 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/home-energy-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Wattline is a dark analytics dashboard template for a home energy-monitoring app, built with Vite, React, TypeScript and Tailwind CSS. It is a single static page with a fixed sidebar, a sticky top bar with a Day / Week / Month / Year switcher, four KPI tiles, a consumption-versus-solar line chart, a live load gauge, a breakdown by room or by hour, a device list with working toggles, a time-of-use tariff strip and an activity feed. Every chart is hand-written SVG, so you can change a curve, color or animation without working around a chart library.

It suits founders and developers prototyping a smart-home, solar or building-management product, agencies pitching an IoT client, and anyone who wants a realistic data screen for studying React state and SVG animation. All numbers come from one data file with four fixed data sets. Nothing uses the system clock or random values, so the screen looks the same on every load and works as a dependable demo.

The look is near-black blue-grey panels with thin borders. One lime accent marks good news and active data, and amber marks peaks and warnings. Numbers use tabular figures in Space Grotesk and JetBrains Mono, so they don't jitter while counting. When you change the range, the line chart morphs into its new shape, the KPI values count to their new totals and the bars grow back in one after another. Flipping a device switch updates the gauge, the live pill and the sidebar badge at once, and the gauge turns amber when the load goes over the peak limit. All motion stops when reduced motion is turned on.

To adapt it, change the five variables for brand, site, operator, currency and focus, then rewrite the device names, rooms, tips and activity items in the content file. A bakery kitchen, a small office or a greenhouse fits the same layout with no visual changes.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/home-energy-dashboard?case=6e35690e-e3cd-4434-8a4e-7434040f1990&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/wattline/6e35690e-e3cd-4434-8a4e-7434040f1990/shot_desktop.ba18b931cb.webp" width="100%" alt="Home Energy Dashboard — Home energy monitor, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Home energy monitor</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/home-energy-dashboard?case=6e35690e-e3cd-4434-8a4e-7434040f1990&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/home-energy-dashboard?case=7e8de294-a31b-4fe9-8bf0-886ea034b66b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/wattline/7e8de294-a31b-4fe9-8bf0-886ea034b66b/shot_desktop.f524f31d74.webp" width="100%" alt="Home Energy Dashboard — Bakery kitchen energy, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Bakery kitchen energy</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/home-energy-dashboard?case=7e8de294-a31b-4fe9-8bf0-886ea034b66b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/home-energy-dashboard?case=8582df9a-5a8e-42b4-adad-913ec0b7c6a0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/home-energy-dashboard/8582df9a-5a8e-42b4-adad-913ec0b7c6a0/shot_desktop.c7f4210221.webp" width="100%" alt="Home Energy Dashboard — Household energy monitor, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Household energy monitor</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/home-energy-dashboard?case=8582df9a-5a8e-42b4-adad-913ec0b7c6a0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Gridlark |
| `[SITE_NAME]` | Monitored site | Juniper Lane house |
| `[OPERATOR_NAME]` | Signed-in person | Noor Halloran |
| `[CURRENCY_SYMBOL]` | Currency symbol | € |
| `[FOCUS]` | What is monitored | Home energy |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add home-energy-dashboard` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A bakery owner: set BRAND and SITE_NAME to your shop, rename the devices to ovens, fridges and proofers, and rewrite the activity feed to match a kitchen shift.
- A facilities manager: point FOCUS at an office floor, swap rooms for meeting areas, and use the tariff strip to show peak-hour running costs.
- A greenhouse grower: rename devices to heaters, fans and grow lights, then adjust the room shares to cover each growing bay.
- A smart-home product team: keep the layout, replace the data file with your own sensor series, and set CURRENCY_SYMBOL to your market.

## FAQ

### How do I change the device names, rooms and activity feed in the Home Energy Dashboard?
The Home Energy Dashboard template keeps every string in one content file and the device list, room shares, tariff bands and activity items in a single data file. Edit the device names, rooms, tips and activity entries there, then adjust the BRAND, FOCUS, SITE_NAME, OPERATOR_NAME and CURRENCY_SYMBOL variables. The layout, counts and number formats stay the same, so a bakery kitchen, a small office or a greenhouse fits without visual changes.

### What do the five variables in the Home Energy Dashboard template actually control?
The Home Energy Dashboard template uses five variables: BRAND sets the product name in the sidebar and page title, FOCUS names what is being monitored, SITE_NAME is the location shown in the top bar, OPERATOR_NAME is who runs the site, and CURRENCY_SYMBOL formats every cost figure. When you change them, rewrite the greeting, device names, rooms, tips and activity items so the copy matches the new site.

### How do the charts and toggles animate in the Home Energy Dashboard?
Every chart in the Home Energy Dashboard template is hand-written SVG, so no chart library limits you. Changing the Day, Week, Month or Year range morphs the consumption-versus-solar line into its new shape, counts the four KPI tiles to new totals and grows the breakdown bars back in sequence. Flipping a device switch updates the live gauge, the live pill and the sidebar badge together, and the gauge turns amber when load passes the peak limit. All motion stops when reduced motion is on.

### Can I reuse the Home Energy Dashboard charts for a different kind of data screen?
The Home Energy Dashboard template works as a starting point for any live metrics screen. Its line chart, gauge, bar breakdown, KPI tiles and activity feed read from one data file with four fixed data sets, so you can replace the energy values with your own series and keep the same animations. Because every chart is hand-written SVG, you can change a curve, color or animation without working around a chart library.

### How do I run the Home Energy Dashboard template locally and deploy it?
Add the Home Energy Dashboard template with npx vibefather add home-energy-dashboard, then install dependencies and start the dev server. The build produces static files in a dist folder with no backend, server code or external APIs, so you can host the output on any static host. The page is a single app shell that scales from a wide desktop down to a 390px phone.

### How do I build a home energy dashboard with AI?
Copy the prompt from this page or run npx vibefather add home-energy-dashboard, replace [BRAND], [SITE_NAME], [OPERATOR_NAME] and [CURRENCY_SYMBOL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Home Energy Dashboard demo?
The Home energy monitor case was built by Claude Opus 5.5 in Cursor; the Bakery kitchen energy case was built by Claude Opus 5.5 in Cursor; the Household energy monitor case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Home Energy Dashboard template use?
Home Energy Dashboard is a single-page site built with React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Home Energy Dashboard template for a client or a business?
The Home Energy Dashboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Home Energy Dashboard template work on mobile?
Yes. Every Home Energy Dashboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Home Energy Dashboard on VibeFather](https://vibefather.ai/templates/home-energy-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
