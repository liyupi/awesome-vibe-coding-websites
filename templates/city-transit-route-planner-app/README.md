# City Transit & Route Planner App

> Swiss-style responsive coastal metro & bus route planner PWA with interactive SVG map.

<a href="https://vibefather.ai/templates/city-transit-route-planner-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/city-transit-route-planner-app/f0db240f-9e68-4536-80fc-2e492ba287a4/webp.aca6742232.webp" width="100%" alt="City Transit &amp; Route Planner App — Swiss Style Urban Metro Route Planner PWA built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/city-transit-route-planner-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

City Transit & Route Planner App is a crisp Swiss-style urban mobility PWA built for a fictional coastal city metro network. Designed with true three-breakpoint responsiveness and zero fake phone frames, it renders a bottom four-tab bar (Route, Lines, Nearby, Saved) on mobile screens under 768px and expands into a split interactive map plus itinerary console on tablets and desktops. Under the hood sits a real client-side shortest-path routing engine across 18 fictional coastal stations linked by three color-coded metro lines—Blue Bay Line (#0284C7), Amber Pier Line (#D97706), and Emerald Ridge Line (#059669). Commuters pick any origin and destination, sort results by Fastest Time or Fewest Transfers, and inspect step-by-step boarding instructions with exact stop counts and platform transfer cues. The zoomable stylized SVG network diagram lets riders tap any station to inspect live countdown departures and interchange links. Nearby stops show live ticking arrival minutes, Saved hosts one-tap Home and Work commute cards plus pinned routes persisted in localStorage, and a service status strip surfaces real-time-feeling line advisories. Swap the transit brand, city name, home/work commute stops, and currency fare label in src/content.ts.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/city-transit-route-planner-app?case=f0db240f-9e68-4536-80fc-2e492ba287a4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/city-transit-route-planner-app/f0db240f-9e68-4536-80fc-2e492ba287a4/shot_desktop.6c52c093c0.webp" width="100%" alt="City Transit &amp; Route Planner App — Coastal metro transit companion, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Coastal metro transit companion</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/city-transit-route-planner-app?case=f0db240f-9e68-4536-80fc-2e492ba287a4&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/city-transit-route-planner-app?case=206d9c8d-f7a0-42de-a0d6-9ed5c5af3739&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/city-transit-route-planner-app/206d9c8d-f7a0-42de-a0d6-9ed5c5af3739/shot_desktop.8e769342da.webp" width="100%" alt="City Transit &amp; Route Planner App — Alpine valley rail &amp; tram planner, built by GLM-5.4 in ZCode"></a><br>
<b>Alpine valley rail &amp; tram planner</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/city-transit-route-planner-app?case=206d9c8d-f7a0-42de-a0d6-9ed5c5af3739&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Transit app name | HarborLine |
| `[CITY_NAME]` | Fictional coastal city | Port Maris |
| `[HOME_STATION]` | Saved Home station | Seaview Terrace |
| `[WORK_STATION]` | Saved Work station | Central Harbor |
| `[SINGLE_FARE]` | Standard metro fare | $2.75 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add city-transit-route-planner-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A university shuttle service: set BRAND to the campus transport name, CITY_NAME to the campus, and relabel the three lines after your routes and stops.
- A ferry and tram network: keep the map and itinerary console, set SINGLE_FARE to your ticket label, and rename the lines after your water and rail routes.
- A civic wayfinding prototype: use CITY_NAME for your district, set HOME_STATION and WORK_STATION to two landmarks, and show the map to stakeholders on a tablet.
- A visitor transit companion: set BRAND for tourists, point HOME_STATION at the main station, and rewrite the Nearby tab for hotel and attraction stops.

## FAQ

### How does the route planner work out the fastest trip between two stations?
The City Transit & Route Planner App runs a client-side shortest-path routing engine across 18 fictional coastal stations linked by three color-coded metro lines. You pick an origin and destination, then sort results by Fastest Time or Fewest Transfers. Each result shows a step-by-step itinerary with line badges, boarding stations, stop counts, transfer platform cues, estimated duration and the fare label set in SINGLE_FARE.

### Can I change the city name and the Home and Work stations for my own transit network?
Yes. The City Transit & Route Planner App exposes five variables: BRAND, CITY_NAME, SINGLE_FARE, HOME_STATION and WORK_STATION. Set CITY_NAME to your own city, BRAND to your app name, and HOME_STATION and WORK_STATION to the two stops your commuters use most. The copy across the header, map legend and Saved tab is written for the defaults, so rewrite those lines to match your values.

### Is there a free transit app template I can build with an AI coding agent?
The City Transit & Route Planner App is free to access on VibeFather. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, and you can run the prompt in an AI coding agent such as Claude Code, Codex, Cursor, Windsurf or Gemini CLI. Commercial or client work needs a VibeFather Pro license, which also includes the demo source code.

### How do I add saved trips and live departure countdowns to a commute app?
The City Transit & Route Planner App already includes both. The Saved tab holds one-tap Home and Work commute cards plus pinned routes persisted in localStorage, so trips survive a reload. Tapping any station on the interactive SVG map opens a drawer with live countdown departures, and the Nearby tab lists the closest metro and bus stops with ticking arrival minutes.

### What should I change first in the City Transit & Route Planner App template?
Start with the content file that holds the copy for every section. Set BRAND and CITY_NAME first, then SINGLE_FARE, HOME_STATION and WORK_STATION, and rewrite the headlines and labels that mention the default values. After that, review the three line names and station list so the network matches your own service, then check the mobile bottom tab bar and the desktop split map layout.

### How do I build a city transit & route planner app with AI?
Copy the prompt from this page or run npx vibefather add city-transit-route-planner-app, replace [BRAND], [CITY_NAME], [HOME_STATION] and [WORK_STATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the City Transit & Route Planner App demo?
The Coastal metro transit companion case was built by Gemini 4 Neon in Antigravity; the Alpine valley rail & tram planner case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the City Transit & Route Planner App template use?
City Transit & Route Planner App is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the City Transit & Route Planner App template for a client or a business?
The City Transit & Route Planner App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the City Transit & Route Planner App template work on mobile?
Yes. Every City Transit & Route Planner App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [City Transit & Route Planner App on VibeFather](https://vibefather.ai/templates/city-transit-route-planner-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
