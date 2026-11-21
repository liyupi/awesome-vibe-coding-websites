# Holographic Trading Card Showcase

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive 3D holographic foil trading card showcase and pre-order site for [BRAND] featuring the [SERIES_NAME] deep-sea creature collection ([PACK_COUNT] booster box at [BOX_PRICE]). Every card is illustrated in code with original SVG deep-sea creatures and tilts in 3D with 6 optical foil finishes (Rainbow, Galaxy, Cracked Ice, Etched Gold, Cosmos, Reverse). Includes an interactive Tear-Fan-Flip Pack Opening sequence with rare-card flash, a localStorage Collection Binder with filters, a Card Detail view with stats & lore, a 6-card Deck Builder, and a local Booster Box reservation form.

- Audience: Collectible card enthusiasts, tabletop creators, indie illustrators, and front-end designers showcasing 3D CSS optical shaders.
- Goal: Hook visitors immediately on the first screen with a live tiltable 3D holographic specimen hero and foil finish switcher, then invite them to rip packs, inspect cards, and build a deck.
- Tone: Wonder-filled oceanographic cabinet of curiosities—precise depth readouts, bioluminescent lore, and collector-grade print finish terminology.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/syne (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/syne (700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Author all six holographic foil optical layers (rainbow, galaxy, cracked-ice, etched-gold, cosmos, reverse) from scratch in src/index.css using CSS custom properties (--rx, --ry, --px, --py) updated cleanly from pointer, touch, and optional DeviceOrientation events.
  - Draw all 12 deep-sea creatures as distinct layered SVG compositions inside src/components/CreatureArt.tsx and seed stats, lore, rarity, habitat, and foil type in src/data/cardCatalog.ts.
  - Persist owned collection counts, active 6-card deck, opened pack tally, and local booster-box reservation in localStorage.

## Variables
- [BRAND] — Publisher Name (default: "Abyssal Foil Press"). Fictional card publisher brand
- [SERIES_NAME] — Card Series Title (default: "Hadal Bloom: Series I"). Fictional deep-sea collectible set name
- [BOX_PRICE] — Booster Box Price (default: "$84"). Pre-order price for one booster box
- [PACK_COUNT] — Packs Per Box (default: "24 Foil Packs"). Pack count per booster box
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/holographic-trading-card-showcase in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/holographic-trading-card-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/holographic-trading-card-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
