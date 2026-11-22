---
name: "Weather Forecast App"
colors:
  daytime_sky_top: "#6EC1FF"
  daytime_sky_horizon: "#DDF1FF"
  deep_sky_ink: "#0F2033"
  muted_slate_ink: "#334E68"
  solar_amber: "#F59E0B"
  storm_slate: "#1C2738"
  night_indigo: "#0B132B"
  frosted_card: "rgba(255, 255, 255, 0.72)"
typography:
  hero_temperature_city_display: { family: "Plus Jakarta Sans", weights: [600, 700, 800] }
  forecast_copy_labels: { family: "Inter", weights: [400, 500, 600] }
  telemetry_coordinates_hourly_metrics: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Airy atmospheric dashboard grid: max-w-6xl centered container, 20px–24px glass card padding, 16px bento gutters."
radius: "Soft 20px weather bento cards, 12px inner gauges and pills, 999px condition and unit toggles."
---

# Weather Forecast App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Daytime Sky Top** `#6EC1FF` — Default Sunny condition upper sky gradient
- **Daytime Sky Horizon** `#DDF1FF` — Default Sunny condition horizon sky gradient
- **Deep Sky Ink** `#0F2033` — Primary text and high-contrast typography on light daytime skies
- **Muted Slate Ink** `#334E68` — Secondary labels and metadata on daytime frosted cards
- **Solar Amber** `#F59E0B` — Temperature bar warmth, UV warnings, and sunrise arc
- **Storm Slate** `#1C2738` — Rain and Thunderstorm atmospheric backdrop
- **Night Indigo** `#0B132B` — Clear Night with Stars backdrop with crisp #F4F7FB text
- **Frosted Card** `rgba(255, 255, 255, 0.72)` — Daytime glass panel surface with crisp 1px border

## Typography
- **Hero Temperature & City Display** — Plus Jakarta Sans (OFL), weights 600/700/800. Self-host the font files.
- **Forecast Copy & Labels** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Telemetry, Coordinates & Hourly Metrics** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Airy atmospheric dashboard grid: max-w-6xl centered container, 20px–24px glass card padding, 16px bento gutters.
- Radius: Soft 20px weather bento cards, 12px inner gauges and pills, 999px condition and unit toggles.

## Motion
- Continuous 60fps HTML5 Canvas sky scenes (drifting cumulus clouds, slanted rain streaks with splashes, gentle snowflakes, rolling mist bands, lightning fork flashes, twinkling stars & shooting star, golden sun rays)
- Smooth 400ms color-theme transitions when switching cities or previewing any of the 7 conditions
- Interactive Play/Pause timeline loop on the stylized precipitation radar map
- Respect prefers-reduced-motion by rendering a crisp static atmospheric scene with zero flashing

## Imagery
100% code-drawn atmospheric art: full-viewport HTML5 Canvas live sky renderer, crisp SVG Wind Compass, Sunrise/Sunset solar arc, Moon Phase SVG, stylized topographic precipitation radar Canvas, and Lucide weather glyphs.

## Tone
Crisp Nordic atmospheric instrument: luminous sky gradients, translucent frosted cards with WCAG AA contrast in both daytime sky and nocturnal storm themes, and exact tabular numerals.

---
— Prompt by VibeFather · https://vibefather.ai/t/weather-forecast-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
