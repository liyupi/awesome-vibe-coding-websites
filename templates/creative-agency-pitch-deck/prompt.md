# Creative Agency Pitch Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A high-craft 12-slide editorial credentials and brand-strategy pitch deck prepared by independent design studio [BRAND] for hospitality client [CLIENT_NAME] in [LOCATION]. Features asymmetric magazine layouts, cohesive studio photography moodboards, 3 case study slides with interactive before/after art-direction toggles, a 4-phase process timeline, team roster cards, and transparent investment tiers.

- Audience: Hospitality founders, brand VPs, hotel ownership groups, and creative directors evaluating a rebrand partner.
- Goal: Win a full brand identity, art direction, and digital flagship engagement by proving editorial taste, strategic rigor, and clear commercial scope.
- Tone: Cultured, confident, architectural, tactile, and specific; avoids agency clichés.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/instrument-serif (OFL), @fontsource/dm-sans (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/instrument-serif (400, 400 italic), @fontsource/dm-sans (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500) locally in src/main.tsx.
  - Download all 6 cohesive studio WebP images listed in Assets into public/images/ and reference them via relative paths (./images/...).
  - Centralize all slide copy, case studies, before/after notes, team roster, investment tiers, and speaker notes in src/data/pitchDeck.ts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding chrome and rendering all 12 slides cleanly one per page.

## Variables
- [BRAND] — Design studio name (default: "Atelier Verve"). Fictional independent creative agency
- [CLIENT_NAME] — Hospitality client name (default: "Maison Solis Hotels"). Fictional hospitality group being pitched
- [LOCATION] — Client region or city (default: "Lisbon & Algarve"). Region of the hospitality properties
- [INVESTMENT_ANCHOR] — Core engagement fee (default: "$88,000"). Flagship tier fee shown on investment slide
- [CONTACT_EMAIL] — Studio contact email (default: "partners@atelierverve.example"). Fictional email on closing slide
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/creative-agency-pitch-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/creative-agency-pitch-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/creative-agency-pitch-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
