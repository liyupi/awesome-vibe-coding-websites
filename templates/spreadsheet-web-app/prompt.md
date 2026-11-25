# Spreadsheet Web App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an editable spreadsheet for [BRAND] with a working three-sheet [WORKBOOK] file that opens on populated Sales data.

- Audience: Bakery owners and small operators who track sales, ingredient costs and margins.
- Goal: Follow any total to its source, change an input and immediately see dependent totals update.
- Tone: Practical bookkeeping language. Use short US English labels.

## Stack
- Framework: Vite + React
- Styling: CSS
- Libraries: React (MIT), Vite (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use a relative Vite base, a lockfile and a production build without source maps.
  - Place local persistence and file exchange behind a single adapter module.

## Variables
- [BRAND] — Bakery name (default: "Alderfold Bakery"). Workbook owner shown in the rail.
- [WORKBOOK] — Workbook title (default: "Bakery books"). Document heading.
- [PRODUCT] — Featured product (default: "Sesame country loaf"). First item in Sales.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/spreadsheet-web-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/spreadsheet-web-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
