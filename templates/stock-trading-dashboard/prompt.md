# Stock Trading Dashboard

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a working local paper-trading terminal. On first paint, [PRIMARY_ISSUER] ([PRIMARY_SYMBOL]) is active in a populated market and the account already holds three positions. Use the exact default variables unless values are supplied. Every panel reads from the same simulated market. Keep the exact notice “Simulated, not financial advice” in the workspace.

- Audience: Students experimenting with order types and developers building a desk around a local market feed.
- Goal: A visitor can inspect a price move, place and cancel orders, and see an account change as the feed advances.
- Tone: Economical US English desk labels, precise signed prices and plain feedback about what happened.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: React and React DOM (MIT), Vite (MIT), TypeScript (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './' and production sourcemap to false. All graphics are local SVG or CSS.
  - Keep variable values and editorial copy in one content module. Put seeded data generation, feed ticks and simulated execution in one replaceable marketAdapter.ts file.
  - Persist a versioned account and feed snapshot with pending orders, fills, selected symbol and chart settings in localStorage. Seed only on first use and recover from malformed storage.

## Variables
- [BRAND] — Desk name (default: "Rivetline Desk")
- [PRIMARY_ISSUER] — Featured company (default: "Veylan Foundry")
- [PRIMARY_SYMBOL] — Featured synthetic ticker (default: "VYL.X7")
- [OPENING_CASH] — Starting cash in USD (default: "24500")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/stock-trading-dashboard in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/stock-trading-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
