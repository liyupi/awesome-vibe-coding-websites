---
name: "Podcast Show Website"
colors:
  parchment: "#F4F0E8"
  paper: "#FFFDF8"
  ink: "#1D1B18"
  muted_ink: "#6F6A62"
  oxblood: "#7A2E2A"
  persimmon: "#E56B45"
  sage: "#A8B4A0"
typography:
  display_headlines_and_episode_titles: { family: "Fraunces Variable", weights: [600, 700, 900] }
  body_copy_navigation_and_controls: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  episode_numbers_timestamps_filter_counts_and_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit, a maximum content width of 1360px, 24px mobile and 48px desktop gutters, and a 12-column desktop grid with 24px gaps. Section padding is 72px mobile and 112px desktop; card padding is 20–32px. The desktop header is 76px tall. Keep show-note prose to 68 characters per line."
radius: "Mostly crisp editorial edges: 2px on tiny chips, 8px on buttons and inputs, 16px on image frames and the player, and 999px only for filter pills and status badges. Use 1px ink/15 borders and no soft floating-card shadows."
---

# Podcast Show Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F4F0E8` — Primary page background and generous editorial negative space
- **Paper** `#FFFDF8` — Episode notes, forms, and the audio-player surface
- **Ink** `#1D1B18` — Primary text, dark buttons, and fine rules
- **Muted Ink** `#6F6A62` — Secondary copy and metadata; never use below readable contrast
- **Oxblood** `#7A2E2A` — Active filters, selected chapters, and editorial emphasis
- **Persimmon** `#E56B45` — Play controls, progress, focus accents, and small highlights
- **Sage** `#A8B4A0` — Alternating geometric episode-cover shapes and quiet tags

## Typography
- **Display headlines and episode titles** — Fraunces Variable (OFL), weights 600/700/900. Self-host the font files.
- **Body copy, navigation, and controls** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Episode numbers, timestamps, filter counts, and labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit, a maximum content width of 1360px, 24px mobile and 48px desktop gutters, and a 12-column desktop grid with 24px gaps. Section padding is 72px mobile and 112px desktop; card padding is 20–32px. The desktop header is 76px tall. Keep show-note prose to 68 characters per line.
- Radius: Mostly crisp editorial edges: 2px on tiny chips, 8px on buttons and inputs, 16px on image frames and the player, and 999px only for filter pills and status badges. Use 1px ink/15 borders and no soft floating-card shadows.

## Motion
- Reveal major sections once with IntersectionObserver: opacity 0 to 1 and translateY 16px to 0 over 400ms, with an 80ms stagger between sibling cards and no scroll-jacking.
- Audio progress updates smoothly while playing; play/pause, skip, speed, volume, copy, and chapter selection give immediate 160–220ms visual feedback without layout shifts.
- Episode covers scale to 1.025 and arrows move 4px on hover over 220ms; selected filter pills fill oxblood rather than bouncing.
- Never autoplay audio. Under prefers-reduced-motion, remove reveals, smooth scrolling, cover scaling, and nonessential transitions while preserving all state changes.

## Imagery
Use exactly the six coordinated generated images listed in Assets: one wide studio scene as the first-screen anchor and five fictional editorial portrait placeholders. The hero must remain a spacious scene, never a tight face close-up. Portraits represent fictional people who do not resemble real individuals, with varied ages and ethnicities and consistent terracotta, parchment, and walnut tones under soft directional window light. Generate all episode covers locally as original SVG compositions of arcs, waveform bars, circles, and grids using Parchment, Oxblood, Persimmon, and Sage; use the episode number as the only cover text and give each topic a deterministic pattern. Do not add any other photographs, external artwork, logos, or recognizable people.

## Tone
Curious, intelligent, warm, and quietly playful; specific rather than hype-driven, with the tactile rhythm of an independent culture magazine.

---
— Prompt by VibeFather · https://vibefather.ai/t/podcast-show-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
