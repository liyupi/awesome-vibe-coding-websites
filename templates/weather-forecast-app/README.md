# Weather Forecast App

> Atmospheric weather app with live animated Canvas sky scenes, 10-day bars, AQI, wind compass, radar timeline, and 6 cities.

<a href="https://vibefather.ai/templates/weather-forecast-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/weather-forecast-app/37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7/webp.cd1ce1a36e.webp" width="100%" alt="Weather Forecast App — Animated Atmospheric Weather Dashboard App built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/weather-forecast-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A vivid atmospheric weather forecast web app powered by a real-time HTML5 Canvas sky backdrop that shifts palette and particle physics across 7 weather conditions (Sunny, Cloudy, Rain, Snow, Fog, Thunderstorm, Clear Night with Stars). Features current conditions, a 24-hour hourly strip, a 10-day forecast with temperature range bars, Air Quality Index gauge, UV index, SVG Wind Compass, Sunrise/Sunset and Moon Phase dial, stylized interactive Radar Map with playback slider, saved cities in localStorage, °C/°F unit toggles, and six seeded cities cleanly isolated behind one weatherAdapter.ts file.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Web App](../../types/web-app.md) |
| Style | [Minimal](../../styles/minimal.md), Glassmorphism |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 2 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/weather-forecast-app?case=37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/weather-forecast-app/37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7/shot_desktop.c2cd3bca47.webp" width="100%" alt="Weather Forecast App — Skyloom Weather, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Skyloom Weather</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/weather-forecast-app?case=37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | App Name | Skyloom Weather |
| `[TAGLINE]` | Short Subtitle | Live atmospheric skies and precision local forecasts. |
| `[DEFAULT_CITY]` | Default Starting City | San Francisco |
| `[ADAPTER_LABEL]` | Adapter Badge Label | weatherAdapter.ts · Seeded Data |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add weather-forecast-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local tourism board: set [BRAND] to your region, make [DEFAULT_CITY] your town and use the radar map to show incoming weather for visitors planning outdoor days.
- A sailing or hiking club: keep the wind compass and UV meter, then rewrite the condition summaries for trip planning and pin your meeting point as the default city.
- A smart-home dashboard: reuse the telemetry bento for indoor sensors, swap the 10-day bars for room readings and keep the sky Canvas as an ambient background.
- A university weather course: point the adapter at teaching sample data, label it in [ADAPTER_LABEL] and use the seven sky scenes to demonstrate how conditions map to visuals.

## FAQ

### Is the Weather Forecast App template free to use?
The Weather Forecast App template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, so you can build and experiment with the animated Canvas sky, 10-day bars, AQI gauge and radar timeline for yourself. Commercial or client work needs Pro, which also unlocks the full prompt and the demo source code.

### How do I connect the Weather Forecast App to a real weather API?
The Weather Forecast App template keeps all six seeded cities, 24-hour series, 10-day forecasts and radar storm tracks inside one weatherAdapter module with a clean WeatherAdapter interface. Replace the seeded data in that adapter with calls to your chosen weather API and keep the same shape, so the sky Canvas, gauges and forecast bars keep working without changes.

### What can I change first in the Weather Forecast App template?
Start with the variables: set [BRAND] to your app name, [TAGLINE] to your subtitle, [DEFAULT_CITY] to the city loaded on first visit and [ADAPTER_LABEL] to describe your data source. Then rewrite the copy for the forecast and saved cities pages in the single content file, and adjust the daytime sky, storm slate and night indigo colors to your own palette.

### How does the animated sky background work in the Weather Forecast App?
The Weather Forecast App template draws its full-viewport background with an HTML5 Canvas scene that matches seven conditions: Sunny, Cloudy, Rain, Snow, Fog, Thunderstorm and Clear Night with Stars. The Preview Sky Scene pill bar lets visitors switch between all seven live scenes, and the app respects prefers-reduced-motion by rendering a static atmospheric scene with no flashing.

### Which AI coding agents can build the Weather Forecast App from the prompt?
The Weather Forecast App demo was built with Gemini 4 Neon in Antigravity. The published prompt is plain, specific instructions about the stack, sections and motion, so you can also paste it into Claude Code, Codex, Cursor, GitHub Copilot, Windsurf or Gemini CLI. VibeFather has model comparison pages if you want to see how other templates were built.

### How do I build a weather forecast app with AI?
Copy the prompt from this page or run npx vibefather add weather-forecast-app, replace [BRAND], [TAGLINE], [DEFAULT_CITY] and [ADAPTER_LABEL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Weather Forecast App demo?
The Skyloom Weather case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Weather Forecast App template use?
Weather Forecast App is a 2-page site built with Tailwind CSS, React, Vite and Canvas, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Weather Forecast App template for a client or a business?
The Weather Forecast App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Weather Forecast App template work on mobile?
Yes. Every Weather Forecast App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Weather Forecast App on VibeFather](https://vibefather.ai/templates/weather-forecast-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
