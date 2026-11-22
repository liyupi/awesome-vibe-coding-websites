---
name: "Roguelike Deckbuilder Card Game"
colors:
  storm_navy: "#14213D"
  hull_slate: "#1C2D50"
  sea_glass: "#7FD1C7"
  lamp_amber: "#FFB347"
  parchment: "#F4ECD8"
  squall_crimson: "#E85D75"
typography:
  game_title_act_banners_card_headers: { family: "Cinzel", weights: [600, 700] }
  card_rules_text_event_narrative: { family: "Inter", weights: [400, 500, 600] }
  hp_block_energy_seed_codes: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Full-viewport storm-lit tactical arena on desktop (compact top expedition HUD bar, central floating-island combat stage, bottom interactive fanned hand tray) adapting smoothly into a scrollable single-column combat layout on 390px mobile."
radius: "12px for playing cards with brass/sea-glass rarity border; 10px for HUD plates and action buttons."
---

# Roguelike Deckbuilder Card Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Storm Navy** `#14213D` — Primary tactical battleground and deep twilight sea sky
- **Hull Slate** `#1C2D50` — HUD panels, map nodes, enemy plates, and modal drawers
- **Sea Glass** `#7FD1C7` — Block shields, Tide suit highlights, draw pile, and active map paths
- **Lamp Amber** `#FFB347` — Energy orb, Lamp suit attacks, upgraded (+) cards, and relic glow
- **Parchment** `#F4ECD8` — High-contrast readable card faces, tooltips, and primary typography
- **Squall Crimson** `#E85D75` — Enemy attack intents, HP damage flashes, and elite/boss markers

## Typography
- **Game Title, Act Banners & Card Headers** — Cinzel (OFL), weights 600/700. Self-host the font files.
- **Card Rules Text & Event Narrative** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **HP, Block, Energy & Seed Codes** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Full-viewport storm-lit tactical arena on desktop (compact top expedition HUD bar, central floating-island combat stage, bottom interactive fanned hand tray) adapting smoothly into a scrollable single-column combat layout on 390px mobile.
- Radius: 12px for playing cards with brass/sea-glass rarity border; 10px for HUD plates and action buttons.

## Motion
- Snappy hover lift and tilt on fanned hand cards with real-time live damage calculation highlighted in amber/green/red.
- Smooth hit-flash and floating damage/block popups on targets when cards resolve.
- Atmospheric Tide Shift banner and visual tint transition when act bosses flip High Tide (Tide cards +40%) and Low Tide (Lamp cards +40%) mid-fight.
- Under prefers-reduced-motion, disable card sway and combat shake while preserving clear instant state updates.

## Imagery
Original layered inline SVG illustrations for the lighthouse keeper, floating stone islands, lightning clouds, 12 enemy & boss silhouettes, 20 relic icons, and 60 distinct card emblem frames.

## Tone
Atmospheric storm-lit maritime fantasy—weathered brass lanterns, sea-glass clarity, and crisp tactical precision.

---
Inspired by Storm Lighthouse Roguelike Deckbuilder by @kimmonismus — https://news.sulat.com/
— Prompt by VibeFather · https://vibefather.ai/t/roguelike-deckbuilder-card-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
