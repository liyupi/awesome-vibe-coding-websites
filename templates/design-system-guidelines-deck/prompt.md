# Design System Guidelines Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A 12-slide 16:9 architectural Swiss visual identity & UI design system presentation deck for [BRAND] ([SYSTEM_VERSION]), authored by [LEAD_AUTHOR]. Features live interactive specimens inside slides: click-to-copy color tokens with WCAG contrast ratios, live type scale toggle, spacing/radius rulers, interactive component states, SVG motion timing curves, and Do vs Don't comparisons, plus keyboard/swipe nav, G grid, N speaker notes + timer, F fullscreen, and print CSS.

- Audience: Designers, frontend engineers, and brand teams presenting and reviewing UI foundations.
- Goal: Turn a design system walkthrough into a live, tactile specification deck where every token and state can be inspected directly.
- Tone: Architectural, Swiss rationalism, razor-sharp precision.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Implement clipboard hex copy with graceful visual 'Copied' confirmation on color token swatches plus live WCAG AA/AAA contrast readouts.
  - Support ArrowLeft/ArrowRight/Space/Home/End navigation, touch swipe, G overview grid modal, N speaker notes + timer, F fullscreen, and @media print landscape PDF export.

## Variables
- [BRAND] — Design system name (default: "Forma Grid"). Fictional design system title
- [SYSTEM_VERSION] — Spec version badge (default: "v2.4 · Core Foundations"). Displayed on cover
- [LEAD_AUTHOR] — Author credit (default: "Nadia Kowalski, Principal Systems Designer"). Presenter credit
- [MANIFESTO] — Guiding principle (default: "Precision in geometry, warmth in restraint."). Hero manifesto statement
- [TOKEN_PREFIX] — CSS variable prefix (default: "--fg-"). Prefix shown on token cards
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/design-system-guidelines-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/design-system-guidelines-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/design-system-guidelines-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
