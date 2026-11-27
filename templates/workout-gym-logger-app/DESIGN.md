---
name: "Workout & Gym Logger App"
colors:
  energetic_charcoal: "#0D0F12"
  elevated_surface: "#171A21"
  neon_volt: "#C8F902"
  slate_gray: "#94A3B8"
  crisp_white: "#F8FAFC"
  hairline_dark: "#262B36"
typography:
  athletic_display_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  ui_and_form_cues: { family: "Inter", weights: [400, 500, 600, 700] }
  weights_reps_rest_countdowns_and_volume_stats: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) uses 16px side padding with comfortable 44px+ tap targets for gym-floor logging and clearance above the bottom tab bar + floating rest timer. Desktop (>=768px) opens into a 240px left sidebar + 2-column split workout & live telemetry desk."
radius: "14px for exercise and chart cards, 10px for numeric weight/rep inputs, 999px for rest timer presets and muscle-group pills."
---

# Workout & Gym Logger App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Energetic Charcoal** `#0D0F12` — Primary dark gym canvas
- **Elevated Surface** `#171A21` — Exercise cards, program cards, and split panels
- **Neon Volt** `#C8F902` — Completed set checks, PR badges, active tabs, and primary CTAs (always paired with #0D0F12 dark text)
- **Slate Gray** `#94A3B8` — Secondary labels, previous-set hints, and inactive icons
- **Crisp White** `#F8FAFC` — Primary headings, numbers, and input text
- **Hairline Dark** `#262B36` — Card borders and set table dividers

## Typography
- **Athletic display headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **UI and form cues** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Weights, reps, rest countdowns, and volume stats** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) uses 16px side padding with comfortable 44px+ tap targets for gym-floor logging and clearance above the bottom tab bar + floating rest timer. Desktop (>=768px) opens into a 240px left sidebar + 2-column split workout & live telemetry desk.
- Radius: 14px for exercise and chart cards, 10px for numeric weight/rep inputs, 999px for rest timer presets and muscle-group pills.

## Motion
- Instant Neon Volt pop on checked sets and smooth slide-in PR celebration toast.
- Smooth circular SVG countdown arc inside the floating rest timer.
- Honors prefers-reduced-motion; all content visible immediately.

## Imagery
100% crisp code-drawn athletic visuals: anatomical geometric SVG exercise form diagrams, weekly volume SVG bar chart, 28-day streak heatmap grid, and Lucide icons.

## Tone
Focused, athletic, crisp, high-contrast, no fluff or medical claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/workout-gym-logger-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
