# Roguelike Deckbuilder Card Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a complete tactical roguelike deckbuilder web game titled [BRAND] by [STUDIO_NAME] starring [HERO_NAME], a lighthouse keeper ascending [WORLD_NAME], a storm-wrecked chain of floating islands. The first screen launches directly into an active turn-based battle—never an empty menu—showing [HERO_NAME] with HP, Block, Energy, Relics, and 5 fanned hand cards facing storm-born enemies with unmistakable Intent badges and exact live damage previews (accounting for Strength, Weak, Vulnerable, and High/Low Tide). Include a complete catalog of 60 original code-illustrated cards with upgraded (+) versions, 20 collectible relics, 3 escalating acts with a branching node map (Fights, Elites, Lantern Shops, Rest Anchorages, Storm Events, and Tide-Flipping Bosses that invert High/Low Tide rules mid-fight), Card Reward drafts, Deck/Compendium Viewer, Run Summary, Seeded Daily Climb, keyboard shortcuts (1–5 play cards, E end turn), and full localStorage run persistence.

- Audience: Strategy card gamers, roguelike fans, and web-game creators looking for a deep, responsive browser deckbuilder.
- Goal: Put visitors straight into satisfying tactical card play on frame one with crystal-clear intent telegraphing, snappy hand animations, and genuine strategic depth across 60 cards and 20 relics.
- Tone: Atmospheric storm-lit maritime fantasy—weathered brass lanterns, sea-glass clarity, and crisp tactical precision.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/cinzel (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/cinzel (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Author the complete catalog of 60 original nautical cards (each with base and upgraded + stats, suit: Lamp / Tide / Hull / Storm, rarity, cost, and code-drawn SVG emblem art) and 20 relics in src/game/catalog.ts.
  - Author deterministic seeded PRNG, 3-act branching map generator, turn-based combat engine with exact damage preview calculation, Tide State mid-boss rule flipping, status effects (Block, Flare/Strength, Soaked/Vulnerable, Fogged/Weak, Burn, Ward), shop/rest/event handlers, and localStorage run save in src/game/engine.ts.
  - Draw original SVG illustrations for the lighthouse keeper, storm enemies/bosses, floating-island backdrop, and card emblems in src/components/NauticalArt.tsx.

## Variables
- [BRAND] — Game Title (default: "Lantern Spire"). Fictional roguelike deckbuilder title
- [HERO_NAME] — Protagonist Name (default: "Keeper Mira"). Name of the playable lighthouse keeper
- [WORLD_NAME] — Archipelago Name (default: "The Shattered Archipelago"). Name of the storm-wrecked floating island chain
- [STUDIO_NAME] — Studio Imprint (default: "Foghorn Interactive"). Fictional indie game studio credit
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/roguelike-deckbuilder-card-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/roguelike-deckbuilder-card-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by Storm Lighthouse Roguelike Deckbuilder by @kimmonismus — https://news.sulat.com/
— Prompt by VibeFather · https://vibefather.ai/t/roguelike-deckbuilder-card-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
