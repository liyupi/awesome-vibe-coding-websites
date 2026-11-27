---
name: "Smart Home Control App"
colors:
  calm_slate_dark: "#0E1116"
  frosted_card: "#171C24"
  warm_amber_light: "#FBBF24"
  cool_cyan: "#38BDF8"
  crisp_white: "#F8FAFC"
  slate_muted: "#94A3B8"
typography:
  room_titles_and_bento_card_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  device_labels_and_scene_descriptions: { family: "Inter", weights: [400, 500, 600, 700] }
  temperatures_kelvin_color_temp_aqi_humidity_and_kw_draw: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) uses 16px horizontal padding with 84px clearance above the fixed 64px bottom tab bar. Desktop (>=1024px) renders a 236px left sidebar + 12-column responsive bento dashboard."
radius: "18px for primary bento tiles and thermostat card, 12px for quick scene buttons and switches, 999px for room selector tabs and mode pills."
---

# Smart Home Control App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Calm Slate Dark** `#0E1116` — Primary dark architectural canvas
- **Frosted Card** `#171C24` — Bento control tiles, climate dial card, and energy panels
- **Warm Amber Light** `#FBBF24` — Active light glow, Heat mode, Morning/Cinema scenes, and brightness track
- **Cool Cyan** `#38BDF8` — Cool climate mode, air quality telemetry, blinds, and live power curve
- **Crisp White** `#F8FAFC` — Primary temperatures, room names, and active controls
- **Slate Muted** `#94A3B8` — Secondary telemetry labels, wattage readouts, and inactive tabs

## Typography
- **Room titles and bento card headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Device labels and scene descriptions** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Temperatures, Kelvin color temp, AQI, humidity, and kW draw** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) uses 16px horizontal padding with 84px clearance above the fixed 64px bottom tab bar. Desktop (>=1024px) renders a 236px left sidebar + 12-column responsive bento dashboard.
- Radius: 18px for primary bento tiles and thermostat card, 12px for quick scene buttons and switches, 999px for room selector tabs and mode pills.

## Motion
- Live radial warm-amber or cool-cyan light glow scaling smoothly with brightness and Kelvin sliders.
- Smooth SVG thermostat dial arc and knob rotation on temperature adjustments.
- Respects prefers-reduced-motion; all content visible immediately.

## Imagery
100% crisp code-drawn hardware telemetry: interactive circular SVG thermostat dial, dynamic CSS/SVG ambient lamp glow cards, real-time hourly power-consumption SVG area chart, and Lucide smart-device icons.

## Tone
Calm, architectural, tactile, dark frosted hardware precision.

---
— Prompt by VibeFather · https://vibefather.ai/t/smart-home-control-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
