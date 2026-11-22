---
name: "Draw Battle Simulator Game"
colors:
  sunny_meadow: "#8BC34A"
  daybreak_sky: "#BEE3F8"
  crimson_team: "#FF5A5F"
  cobalt_team: "#3A86FF"
  toybox_cream: "#FFFDF7"
  ink_charcoal: "#1F2937"
typography:
  game_title_victory_banners: { family: "Fredoka", weights: [600, 700] }
  unit_tooltips_controls: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  unit_counts_coins_speed: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Compact sunny top control bar, full-width framed meadow battle canvas occupying the heart of the viewport, and tactile bottom 10-unit + terrain brush dock that wraps cleanly on 390px mobile."
radius: "14px for meadow stage and puzzle cards with chunky 2px ink borders; full-pill buttons for Fight, Slow-Mo, Follow Cam, and Replay."
---

# Draw Battle Simulator Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sunny Meadow** `#8BC34A` — Primary grassy toybox battlefield
- **Daybreak Sky** `#BEE3F8` — Page backdrop, top horizon clouds, and painted rivers
- **Crimson Team** `#FF5A5F` — Left army tunics, counters, and team banner
- **Cobalt Team** `#3A86FF` — Right army tunics, counters, and team banner
- **Toybox Cream** `#FFFDF7` — Crisp HUD bar, unit palette dock, and puzzle drawer
- **Ink Charcoal** `#1F2937` — Chunky cartoon borders, typography, and shadows

## Typography
- **Game Title & Victory Banners** — Fredoka (OFL), weights 600/700. Self-host the font files.
- **Unit Tooltips & Controls** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Unit Counts, Coins & Speed** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Compact sunny top control bar, full-width framed meadow battle canvas occupying the heart of the viewport, and tactile bottom 10-unit + terrain brush dock that wraps cleanly on 390px mobile.
- Radius: 14px for meadow stage and puzzle cards with chunky 2px ink borders; full-pill buttons for Fight, Slow-Mo, Follow Cam, and Replay.

## Motion
- Live mid-charge cartoon battle running right on frame one with hopping walk cycles, arching arrows, bouncing wizard orbs, and celebratory confetti bursts when units pop.
- Smooth line-sketch preview trail showing exactly where toy soldiers will spawn while dragging a finger or mouse across the meadow.
- Follow-Action Camera smoothly zooms and pans toward the densest active front-line clash.
- Under prefers-reduced-motion, slow animations gently and disable camera shake while preserving full playability.

## Imagery
100% code-drawn HTML5 Canvas 2D sunny meadow terrain (hills, winding rivers, puffy cartoon pine forests), 10 distinct toy soldier archetypes, bouncing orbs, catapult rocks, and confetti particles.

## Tone
Sunny, bouncy, wooden-toybox whimsy—festive confetti pops and cheerful unit silhouettes.

---
Inspired by Draw-to-Deploy Cartoon Battle Sandbox by @nealagarwal — https://neal.fun/
— Prompt by VibeFather · https://vibefather.ai/t/draw-battle-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
