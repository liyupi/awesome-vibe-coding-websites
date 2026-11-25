# Weather Forecast App

> Atmospheric weather app with live animated Canvas sky scenes, 10-day bars, AQI, wind compass, radar timeline, and 6 cities.

<a href="https://vibefather.ai/templates/weather-forecast-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/weather-forecast-app/37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7/webp.cd1ce1a36e.webp" width="100%" alt="Weather Forecast App — Animated Atmospheric Weather Dashboard App built by Gemini 4 Neon and GPT-6.2 Sol"></a>

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
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/weather-forecast-app?case=37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/weather-forecast-app/37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7/shot_desktop.c2cd3bca47.webp" width="100%" alt="Weather Forecast App — Skyloom Weather, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Skyloom Weather</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/weather-forecast-app?case=37f386ec-a4a0-4e2d-bed9-c44e8c8f6fc7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/weather-forecast-app?case=dde3ed94-1f57-47db-ba84-1b321162e232&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/weather-forecast-app/dde3ed94-1f57-47db-ba84-1b321162e232/shot_desktop.15e702e7c7.webp" width="100%" alt="Weather Forecast App — Cirrus Forecast, built by GPT-6.2 Sol in Codex"></a><br>
<b>Cirrus Forecast</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/weather-forecast-app?case=dde3ed94-1f57-47db-ba84-1b321162e232&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A travel planning site: set BRAND to your agency, make DEFAULT_CITY your most-booked destination, and use the 10-day bars to show typical conditions for each trip.
- A commuter utility for one city: set DEFAULT_CITY to your city, keep the 24-hour strip and AQI gauge, and swap the radar legend labels for your local districts.
- A school science project: keep the seven preview sky scenes and wind compass, rename BRAND to the class name, and let students compare conditions across the six seeded cities.
- A developer starter kit: keep the weatherAdapter.ts interface, replace the seeded cities with your own API responses, and use the radar timeline as a pattern for any animated data map.

## FAQ

### Is the Weather Forecast App template free to use?
The Weather Forecast App template is free for personal, non-commercial use, including its prompt and DESIGN.md under CC BY-NC 4.0. Commercial use, client work and the demo source code require Pro. The page shows the brief, stack and variables publicly, and the full prompt is available to Pro members.

### How do I connect the Weather Forecast App to a real weather API?
All six seeded cities, the 24-hour series, 10-day forecasts and radar storm cells sit behind one weatherAdapter.ts file with a clean WeatherAdapter interface. Replace the seeded data inside that adapter with calls to your chosen weather service, keeping the same shape, and every card, bar and dial updates without touching the interface components.

### What does the animated sky scene in the Weather Forecast App actually show?
The Weather Forecast App draws a full-viewport HTML5 Canvas sky that changes palette and particle motion across seven conditions: Sunny, Cloudy, Rain, Snow, Fog, Thunderstorm, and Clear Night with Stars. Expect drifting clouds, slanted rain, snowflakes, mist bands, lightning flashes, sun rays and twinkling stars, with a static scene when reduced motion is preferred.

### Can I change the default city and brand name in the Weather Forecast App?
Yes. The Weather Forecast App exposes four variables: BRAND for the app name, TAGLINE for the Saved Cities header, DEFAULT_CITY for the city loaded on first visit, and ADAPTER_LABEL for the footer badge naming the data adapter. Set them in the prompt before you generate, or edit the single content file afterward.

### How do saved cities and the °C/°F toggle work in the Weather Forecast App?
The Weather Forecast App keeps saved cities and your Celsius or Fahrenheit preference in localStorage. The Saved Cities view lists each city as a card with its sky gradient, temperature, condition and high/low, lets you pin one as default or remove it, and offers a shelf of the six seeded cities to add back.

### How do I build a weather forecast app with AI?
Copy the prompt from this page or run npx vibefather add weather-forecast-app, replace [BRAND], [TAGLINE], [DEFAULT_CITY] and [ADAPTER_LABEL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Weather Forecast App demo?
The Skyloom Weather case was built by Gemini 4 Neon in Antigravity; the Cirrus Forecast case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Weather Forecast App template use?
Weather Forecast App is a 2-page site built with React, Tailwind CSS, Vite and Canvas, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Weather Forecast App template for a client or a business?
The Weather Forecast App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Weather Forecast App template work on mobile?
Yes. Every Weather Forecast App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Weather Forecast App on VibeFather](https://vibefather.ai/templates/weather-forecast-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
