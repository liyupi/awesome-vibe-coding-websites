# Weather Forecast App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a refined atmospheric weather forecast web app whose full-viewport background is an animated HTML5 Canvas scene that dynamically matches seven weather conditions (Sunny, Cloudy, Rain, Snow, Fog, Thunderstorm, and Clear Night with Stars). All weather data for six seeded cities lives behind a single clean weatherAdapter.ts file ready to connect to any real weather API.

- Audience: Everyday travelers, commuters, outdoor planners, and frontend developers looking for an atmospheric weather dashboard starter with real data-visualization widgets.
- Goal: Open directly into the live daytime sky forecast (#6EC1FF to #DDF1FF with deep #0F2033 ink) with immediate access to all 7 animated weather scenes, 6 seeded cities, °C/°F switching, hourly and 10-day forecasts, telemetry dials, and a scrubbable radar map.
- Tone: Crisp Nordic atmospheric instrument: luminous sky gradients, translucent frosted cards with WCAG AA contrast in both daytime sky and nocturnal storm themes, and exact tabular numerals.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build.sourcemap: false in vite.config.ts.
  - Configure Plus Jakarta Sans as display font, Inter as body font, and JetBrains Mono as tabular metric font in tailwind.config.js.
  - Import @fontsource/plus-jakarta-sans (600, 700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Isolate all 6 seeded cities, 24-hour series, 10-day forecasts, and radar storm cell tracks inside one adapter module src/data/weatherAdapter.ts with a clean WeatherAdapter interface.
  - Persist saved cities and °C/°F unit preferences in localStorage.

## Variables
- [BRAND] — App Name (default: "Skyloom Weather"). Displayed in the top navigation bar and page titles.
- [TAGLINE] — Short Subtitle (default: "Live atmospheric skies and precision local forecasts."). Shown on the Saved Cities view header.
- [DEFAULT_CITY] — Default Starting City (default: "San Francisco"). The initial active city loaded on first visit (Sunny daytime palette).
- [ADAPTER_LABEL] — Adapter Badge Label (default: "weatherAdapter.ts · Seeded Data"). Small indicator in the footer naming the swappable data adapter.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/weather-forecast-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Daytime Sky Top `#6EC1FF` — Default Sunny condition upper sky gradient
- Daytime Sky Horizon `#DDF1FF` — Default Sunny condition horizon sky gradient
- Deep Sky Ink `#0F2033` — Primary text and high-contrast typography on light daytime skies
- Muted Slate Ink `#334E68` — Secondary labels and metadata on daytime frosted cards
- Solar Amber `#F59E0B` — Temperature bar warmth, UV warnings, and sunrise arc
- Storm Slate `#1C2738` — Rain and Thunderstorm atmospheric backdrop
- Night Indigo `#0B132B` — Clear Night with Stars backdrop with crisp #F4F7FB text
- Frosted Card `rgba(255, 255, 255, 0.72)` — Daytime glass panel surface with crisp 1px border

### Typography
- Hero Temperature & City Display: Plus Jakarta Sans (OFL), weights 600/700/800
- Forecast Copy & Labels: Inter (OFL), weights 400/500/600
- Telemetry, Coordinates & Hourly Metrics: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Airy atmospheric dashboard grid: max-w-6xl centered container, 20px–24px glass card padding, 16px bento gutters.
- Radius: Soft 20px weather bento cards, 12px inner gauges and pills, 999px condition and unit toggles.
- Motion: Continuous 60fps HTML5 Canvas sky scenes (drifting cumulus clouds, slanted rain streaks with splashes, gentle snowflakes, rolling mist bands, lightning fork flashes, twinkling stars & shooting star, golden sun rays)
- Motion: Smooth 400ms color-theme transitions when switching cities or previewing any of the 7 conditions
- Motion: Interactive Play/Pause timeline loop on the stylized precipitation radar map
- Motion: Respect prefers-reduced-motion by rendering a crisp static atmospheric scene with zero flashing
- Imagery: 100% code-drawn atmospheric art: full-viewport HTML5 Canvas live sky renderer, crisp SVG Wind Compass, Sunrise/Sunset solar arc, Moon Phase SVG, stylized topographic precipitation radar Canvas, and Lucide weather glyphs.

## Pages & Sections
### Live Forecast — [BRAND] (`#/forecast`)
1. **Animated Full-Viewport Sky Canvas & Top Bar** — Fixed full-bleed HTML5 Canvas rendering the active weather condition behind the interface. Top bar displays [BRAND] mark, quick Saved Cities selector strip, 'Manage Cities' route link, and °C / °F unit toggle pill. Directly below sits a compact 'Preview Sky Scene' pill bar allowing visitors to toggle all 7 live Canvas scenes (Sunny, Cloudy, Rain, Snow, Fog, Thunderstorm, Clear Night) at will.
   Layout: Sticky frosted top header (single line on desktop, compact clean wrap on mobile) over centered atmospheric workspace.
   Motion: Smooth palette and Canvas physics swap on every city or condition click.
2. **Current Conditions Hero & 24-Hour Strip** — Monumental current temperature readout in Plus Jakarta Sans with Feels Like, High/Low, condition summary, humidity, dew point, pressure, and visibility pill badges, paired with a smooth horizontally scrollable 24-hour hourly forecast strip showing time, condition icon, precipitation probability, and temperature.
   Layout: Split hero telemetry card above a full-width frosted hourly carousel card.
   Motion: Instant °C/°F and km/h/mph unit conversion across all readouts.
3. **10-Day Forecast with Temperature Range Bars & Atmospheric Gauges** — Left column: 10-day forecast list (Today, Tue, Wed… Day 10 — zero calendar dates) showing condition icon, rain chance, low temp, normalized gradient min/max temperature range bar spanning the 10-day global min/max, and high temp. Right column: 2×2 atmospheric instrumentation bento featuring Air Quality Index (AQI scale bar + PM2.5), UV Index meter with peak advisory, animated SVG Wind Compass with directional arrow and gust speed, and Sunrise/Sunset solar progress arc + Moon Phase SVG with illumination %.
   Layout: 12-column responsive grid (5 columns 10-day forecast, 7 columns telemetry bento on desktop; clean vertical stack on mobile).
   Motion: Smooth needle rotation on the SVG Wind Compass and animated gradient fill bars.
4. **Stylized Precipitation Radar Map with Timeline Scrubber** — Interactive Canvas/SVG regional radar map featuring stylized coastlines, topographic rings, city pin marker, animated drifting rain/snow/storm intensity cells, dBZ legend bar, Play/Pause animation button, and a time slider scrubbing from -1h to +3h in 15-minute intervals.
   Layout: Full-width frosted bento card with radar viewport on the left and live storm-cell telemetry & playback controls alongside or beneath.
   Motion: Smooth radar sweep ring and storm-cell advection driven by the time slider.

### Saved Cities — [BRAND] (`#/cities`)
1. **Saved Cities Manager & Add City Directory** — Header with [BRAND] title, [TAGLINE], search box, and °C/°F toggle. Grid of saved city weather cards persisted in localStorage displaying each city's live sky gradient preview, current temperature, condition, high/low, local time offset, 'Open Forecast' click action, pin-as-default star, and remove button, plus an 'Available Seeded Cities' shelf to re-add any removed city or inspect the 6 seeded locations.
   Layout: Responsive 1/2/3-column card grid over the subtle active sky backdrop.
   Motion: Subtle hover lift and immediate gradient card updates.

## Assets
- icon: Installed via npm package lucide-react (ISC license) for crisp weather conditions, compass, sun/moon, and navigation controls.
- font: Installed via @fontsource/plus-jakarta-sans, @fontsource/inter, and @fontsource/jetbrains-mono (OFL); bundled locally by Vite.
- image: 100% code-drawn HTML5 Canvas 7-condition atmospheric sky engine, stylized precipitation radar Canvas, and SVG telemetry instruments (Wind Compass, Solar Arc, Moon Phase).

## Don'ts
- Do not make any external weather API, map tile, or CDN requests — isolate all seeded sample data inside src/data/weatherAdapter.ts.
- Do not display calendar dates or 4-digit years anywhere — use Today and weekday abbreviations (Tue, Wed, Thu…) for the 10-day forecast.
- Do not leave text low-contrast on bright sunny skies or dark thunderstorm/night skies — dynamically switch ink and frosted card opacity per condition to maintain WCAG AA.
- Do not reference Apple Weather, AccuWeather, Dark Sky, or any real weather service.
- Do not allow horizontal overflow at 1440x900 desktop or 390x844 mobile.
- Do not include source maps or copy src/ into dist/; keep vite base set to './'.

---
— Prompt by VibeFather · https://vibefather.ai/t/weather-forecast-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
