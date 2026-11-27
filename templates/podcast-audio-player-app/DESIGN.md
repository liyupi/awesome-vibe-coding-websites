---
name: "Podcast & Audio Player App"
colors:
  midnight_plum: "#120F1D"
  elevated_plum: "#1C172B"
  warm_lilac: "#A78BFA"
  coral_pink: "#F472B6"
  soft_ivory: "#F8F7FC"
  muted_lavender: "#9F96B8"
typography:
  display_headings_and_episode_titles: { family: "Space Grotesk", weights: [500, 600, 700] }
  body_copy_and_controls: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  timestamps_chapter_markers_and_speed_pills: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) clears both the 64px bottom tab bar and 64px persistent mini-player above it. Desktop (>=1024px) renders a 232px left sidebar, flexible central listening workspace, and 340px right Up Next & Now Playing rail."
radius: "16px for cover art cards and Now Playing sheet, 12px for episode rows and queue items, 999px for speed pills and category filters."
---

# Podcast & Audio Player App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight Plum** `#120F1D` — Primary nocturnal app background
- **Elevated Plum** `#1C172B` — Show cards, mini-player, and desktop panels
- **Warm Lilac** `#A78BFA` — Active tabs, scrub bar fill, speed pill, and chapter focus
- **Coral Pink** `#F472B6` — Play/pause FAB, live equalizer bars, and bookmark accents
- **Soft Ivory** `#F8F7FC` — Primary titles and timestamps
- **Muted Lavender** `#9F96B8` — Show descriptions, durations, and secondary metadata

## Typography
- **Display headings and episode titles** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body copy and controls** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Timestamps, chapter markers, and speed pills** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) clears both the 64px bottom tab bar and 64px persistent mini-player above it. Desktop (>=1024px) renders a 232px left sidebar, flexible central listening workspace, and 340px right Up Next & Now Playing rail.
- Radius: 16px for cover art cards and Now Playing sheet, 12px for episode rows and queue items, 999px for speed pills and category filters.

## Motion
- Smooth slide-up expansion for the full-screen Now Playing sheet with animated SVG audio waveform bars while playing.
- Tactile reorder buttons and HTML5 drag-and-drop highlight in the Up Next queue.
- Respects prefers-reduced-motion; all content visible immediately.

## Imagery
Six cohesive square 1:1 stylized 3D still-life podcast cover artworks lit in midnight plum, warm lilac, and coral pink studio rim light, zero text or logos.

## Tone
Warm, nocturnal, tactile, studio-crafted editorial audio.

---
— Prompt by VibeFather · https://vibefather.ai/t/podcast-audio-player-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
