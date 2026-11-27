---
name: "City Transit & Route Planner App"
colors:
  swiss_transit_white: "#F8FAFC"
  card_pure_white: "#FFFFFF"
  transit_charcoal: "#0F172A"
  metro_blue_line: "#0284C7"
  amber_pier_line: "#D97706"
  emerald_ridge_line: "#059669"
typography:
  swiss_neo_grotesque_signage_and_ui: { family: "Inter", weights: [400, 500, 600, 700] }
  departure_countdowns_platform_numbers_and_route_durations: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) stacks compact route controls above interactive map and itinerary with 80px clearance above the fixed 64px bottom tab bar. Desktop (>=1024px) displays a top Swiss nav bar + split workspace (left 420px itinerary/controls + right flexible interactive zoomable SVG metro map)."
radius: "14px for route and station cards, 10px for inputs and zoom controls, 999px for line code badges (B1, A2, E3) and countdown pills."
---

# City Transit & Route Planner App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Swiss Transit White** `#F8FAFC` — Primary clean canvas
- **Card Pure White** `#FFFFFF` — Route itinerary and departure panels
- **Transit Charcoal** `#0F172A` — Primary typography, station rings, and high-contrast pills
- **Metro Blue Line** `#0284C7` — Blue Bay Line route stroke, primary CTAs, and active tabs
- **Amber Pier Line** `#D97706` — Amber Pier Line route stroke and service advisory highlight
- **Emerald Ridge Line** `#059669` — Emerald Ridge Line stroke and On-Time live badges

## Typography
- **Swiss neo-grotesque signage and UI** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Departure countdowns, platform numbers, and route durations** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) stacks compact route controls above interactive map and itinerary with 80px clearance above the fixed 64px bottom tab bar. Desktop (>=1024px) displays a top Swiss nav bar + split workspace (left 420px itinerary/controls + right flexible interactive zoomable SVG metro map).
- Radius: 14px for route and station cards, 10px for inputs and zoom controls, 999px for line code badges (B1, A2, E3) and countdown pills.

## Motion
- Smooth animated SVG route path highlight along the planned segments.
- Subtle pulsing emerald dot on live minute countdown badges.
- Respects prefers-reduced-motion; all content visible immediately.

## Imagery
100% crisp code-drawn Swiss transit graphics: zoomable 18-station geometric SVG metro schematic with coastline tint, interchange double-rings, animated route highlight, and Lucide transit icons.

## Tone
Swiss precision, unmistakable color-coded hierarchy, calm and reliable.

---
— Prompt by VibeFather · https://vibefather.ai/t/city-transit-route-planner-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
