---
name: "Browser Flight Simulator Game"
colors:
  golden_horizon: "#FF9E5E"
  coastal_sky: "#3B7DD8"
  lagoon_teal: "#1C8C9E"
  terracotta_roof: "#E05A47"
  sunlit_sand: "#F2D7A0"
  pine_forest: "#2E6F52"
  hud_slate: "#0D1524"
typography:
  hud_titles_badges: { family: "Space Grotesk", weights: [600, 700] }
  aviation_instruments_telemetry: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Full-bleed 100vw × 100dvh 3D canvas with restrained 16px edge-inset HUD clusters leaving >=75% of the viewport clear sky and archipelago."
radius: "8px for translucent HUD instrument pills, activity switcher, and touch control pads."
---

# Browser Flight Simulator Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Golden Horizon** `#FF9E5E` — Default golden-hour sky horizon glow and sunlit aircraft accents
- **Coastal Sky** `#3B7DD8` — Upper sky dome and daytime atmosphere gradient
- **Lagoon Teal** `#1C8C9E` — Custom animated ocean shader with white shoreline wave foam
- **Terracotta Roof** `#E05A47` — Aircraft wing stripes, lighthouse bands, and harbor town roofs
- **Sunlit Sand** `#F2D7A0` — Procedural island beaches and ring-course gates
- **Pine Forest** `#2E6F52` — Instanced low-poly island cedar and pine clusters
- **HUD Slate** `#0D1524` — Translucent aviation HUD cards (rgba(13,21,36,0.78)) with #F4F7FC crisp text and #FFB547 amber gauges

## Typography
- **HUD Titles & Badges** — Space Grotesk (OFL), weights 600/700. Self-host the font files.
- **Aviation Instruments & Telemetry** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Full-bleed 100vw × 100dvh 3D canvas with restrained 16px edge-inset HUD clusters leaving >=75% of the viewport clear sky and archipelago.
- Radius: 8px for translucent HUD instrument pills, activity switcher, and touch control pads.

## Motion
- 60fps smooth arcade aerodynamics with banking camera spring lag, spinning propeller disc, rolling sea shader waves, and drifting cloud clusters.
- Immediate golden-hour autopilot flight orbit on first frame so the scene looks alive before any input.
- Respect prefers-reduced-motion by damping camera shake and cloud drift speed.

## Imagery
100% procedural Three.js low-poly 3D world with custom GLSL ocean wave & shoreline foam shader, faceted island heightfields, instanced pine trees, painted harbor cottages, striped lighthouse, tarmac runway, sky gradient dome, and bright terracotta-and-cream twin-float aircraft.

## Tone
Breezy, adventurous coastal aviation—crisp instrument readouts, playful low-poly warmth, and zero clutter.

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-flight-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
