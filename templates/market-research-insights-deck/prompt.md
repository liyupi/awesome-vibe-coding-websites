# Market Research Insights Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A magazine-grade 12-slide annual market research & data-storytelling deck for fictional climate-tech and clean-mobility research institute [BRAND] titled '[REPORT_TITLE]', featuring bold single-number hero stats, interactive multi-series SVG line & bar charts with hover tooltips and segment toggles, regional adoption bars, 5 megatrend cards, takeaway matrix, and methodology.

- Audience: Institutional investors, climate-tech founders, urban policy planners, and executive strategy teams.
- Goal: Communicate multi-year market adoption shifts and five actionable megatrends with editorial polish and transparent methodology.
- Tone: Authoritative, lucid, empirical, journalistic; clearly notes illustrative research model estimates.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/inter (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Store all research datasets, regional adoption series, megatrends, methodology facts, and speaker notes in src/data/researchDeck.ts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; }, hiding toolbar controls and printing all 12 slides cleanly one per page.
  - Support URL hash slide tracking (#/slide/1..12), keyboard shortcuts (Arrows, Space, Home, End, G, N, F, Escape), and mobile swipe.

## Variables
- [BRAND] — Research institute name (default: "Verdant Policy Institute"). Fictional climate & mobility research institute
- [REPORT_TITLE] — Annual report title (default: "Global Clean-Mobility & Urban Transit Outlook"). Main cover report title
- [HERO_STAT] — Flagship headline figure (default: "38.4%"). Primary hero metric highlighted on cover and stat slide
- [SAMPLE_SCOPE] — Research coverage note (default: "42 Metro Regions · 2,180 Fleets"). Scope line shown on cover and methodology slide
- [LEAD_ANALYST] — Lead researcher (default: "Dr. Hannah Osei, Research Director"). Fictional lead author
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/market-research-insights-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/market-research-insights-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/market-research-insights-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
