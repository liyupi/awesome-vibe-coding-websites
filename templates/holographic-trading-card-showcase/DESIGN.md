---
name: "Holographic Trading Card Showcase"
colors:
  midnight_trench: "#0B0F2B"
  abyssal_panel: "#131940"
  holo_cyan: "#45F0FF"
  holo_magenta: "#FF4FD8"
  etched_gold: "#FFC94D"
  starlight_mist: "#F2F6FF"
typography:
  display_series_headings: { family: "Syne", weights: [700, 800] }
  body_lore_controls: { family: "Inter", weights: [400, 500, 600] }
  card_numbers_depth_foil_codes: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Showcase pacing: 64px sticky midnight header, 1240px max-width container, generous 64px section rhythm, tactile 2:2.8 collector card aspect ratio."
radius: "14px for physical trading cards with double inner foil frame; 10px for panels and buttons."
---

# Holographic Trading Card Showcase — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight Trench** `#0B0F2B` — Primary deep-ocean page background
- **Abyssal Panel** `#131940` — Binder slots, pack stage, deck builder bar, and detail cards
- **Holo Cyan** `#45F0FF` — Primary bioluminescent accent, active tabs, and cyan foil refraction
- **Holo Magenta** `#FF4FD8` — Prismatic highlight, secret-rare badges, and rainbow foil shift
- **Etched Gold** `#FFC94D` — Mythic borders, foil stamping accents, and pre-order highlight
- **Starlight Mist** `#F2F6FF` — Primary high-contrast typography

## Typography
- **Display & Series Headings** — Syne (OFL), weights 700/800. Self-host the font files.
- **Body, Lore & Controls** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Card Numbers, Depth & Foil Codes** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Showcase pacing: 64px sticky midnight header, 1240px max-width container, generous 64px section rhythm, tactile 2:2.8 collector card aspect ratio.
- Radius: 14px for physical trading cards with double inner foil frame; 10px for panels and buttons.

## Motion
- Real-time 3D perspective card tilting (±16deg) tracking pointer or touch coordinates with smooth spring return on leave.
- Pack-opening choreography: metallic top-seal tear strip animation → 5-card fan spread → 3D Y-axis card flip → bright Cyan/Gold rare-card flash.
- Under prefers-reduced-motion, lock cards flat and render a static iridescent foil gradient without animation.

## Imagery
12 bespoke code-drawn layered SVG bioluminescent deep-sea creatures (Lumen Nautilus, Prism Siphonophore, Cinder Angler, Nebula Comb Jelly, Vortex Sea Angel, Gilded Vent Crab, Glass Squid Phantom, Opal Sea Dragon, Frost Isopod, Starlight Dumbo, Trench Ribbonfish, Velvet Sea Pen) paired with 6 original CSS optical foil layers.

## Tone
Wonder-filled oceanographic cabinet of curiosities—precise depth readouts, bioluminescent lore, and collector-grade print finish terminology.

---
— Prompt by VibeFather · https://vibefather.ai/t/holographic-trading-card-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
