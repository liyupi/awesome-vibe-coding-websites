# Product Roadmap Presentation Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A 12-slide dark-mode product strategy & multi-quarter roadmap presentation for fictional collaborative software product [BRAND] ([PRODUCT_AREA]), featuring an interactive Now / Next / Later roadmap board filterable by Engineering, Design, and Growth, 3 code-rendered UI feature mockups, feedback bar charts, dependency timeline, and beta metrics.

- Audience: Executive leadership, engineering managers, design leads, and key enterprise design partners.
- Goal: Align cross-functional teams on product vision, strategic bets, phased delivery priorities, and release dependencies across Now, Next, and Later horizons.
- Tone: Clear, opinionated, user-evidence-driven, and product-craft focused.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Store all roadmap items, customer feedback data, dependencies, beta metrics, and speaker notes in src/data/roadmapDeck.ts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding chrome and printing all 12 slides one per page.
  - Sync slide index to URL hash (#/slide/1..12) and support keyboard shortcuts (Arrows, Space, Home, End, G, N, F, Escape) plus touch swipe.

## Variables
- [BRAND] — Product name (default: "CanvasFlow"). Fictional collaborative software product
- [PRODUCT_AREA] — Core platform focus (default: "Multiplayer Planning & Docs"). Product pillar descriptor
- [HORIZON_LABEL] — Planning horizon badge (default: "3-Quarter Product Roadmap"). Horizon badge without calendar year
- [BETA_COHORT] — Design partner cohort size (default: "185 Customer Teams"). Beta metric context
- [PRODUCT_LEAD] — Presenter name and title (default: "Priya Nair, VP Product"). Fictional product leader
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/product-roadmap-presentation-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/product-roadmap-presentation-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/product-roadmap-presentation-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
