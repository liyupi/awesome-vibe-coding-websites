---
name: "Browser Extension Landing Page"
colors:
  graphite: "#15171C"
  panel: "#1D2026"
  panel_2: "#242830"
  line: "#2E333C"
  paper: "#F1ECE1"
  mist: "#9BA1AC"
  amber: "#E2A13C"
  amber_deep: "#C4842A"
  amber_mist: "#3A2E1B"
  ink: "#191510"
  good: "#7FB069"
typography:
  display_h1_h2_review_quotes_newsreader_warm_editorial_serif: { family: "Newsreader", weights: [400, 600] }
  text_and_ui_body_buttons_forms_captions_mockup_ui: { family: "Inter", weights: [400, 500, 600] }
  mono_shortcut_keys_the_url_pill_small_labels_in_the_mockup: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Newsreader 600, line-height 1.06; H2 clamp(26px, 3.5vw, 42px) Newsreader 600; feature titles Inter 600 17px; lead Inter 400 17.5px / 1.65 Paper at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist; mono labels JetBrains Mono 400 12.5px. Buttons: height 50px, Inter 600 14px; primary Amber fill with Ink text, secondary 1px Line border with Paper text. Focus everywhere: 2px Amber outline, 3px offset."
radius: "10px on cards, panels, buttons; 999px for pills and step dots; 14px on the mockup window."
---

# Browser Extension Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Graphite** `#15171C` — Page background throughout.
- **Panel** `#1D2026` — Cards, mockup chrome, FAQ rows.
- **Panel 2** `#242830` — Hover fill, raised panels, URL pill fill.
- **Line** `#2E333C` — 1px hairlines, card borders, placeholder bars, input borders.
- **Paper** `#F1ECE1` — Primary text, the popup card, readable-page bars, headings.
- **Mist** `#9BA1AC` — Secondary text, captions, eyebrows, placeholder text bars.
- **Amber** `#E2A13C` — The one accent: extension icon, primary buttons, active step dots, toggle, focus ring, stars.
- **Amber Deep** `#C4842A` — Hover and pressed primary.
- **Amber Mist** `#3A2E1B` — Chip fills, selected states, tint panels.
- **Ink** `#191510` — Text on Paper or Amber fills.
- **Good** `#7FB069` — Permission checks, 'done' states, privacy ticks.

## Typography
- **Display: H1, H2, review quotes — Newsreader, warm editorial serif** — Newsreader (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, buttons, forms, captions, mockup UI** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: shortcut keys, the URL pill, small labels in the mockup** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Newsreader 600, line-height 1.06; H2 clamp(26px, 3.5vw, 42px) Newsreader 600; feature titles Inter 600 17px; lead Inter 400 17.5px / 1.65 Paper at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist; mono labels JetBrains Mono 400 12.5px. Buttons: height 50px, Inter 600 14px; primary Amber fill with Ink text, secondary 1px Line border with Paper text. Focus everywhere: 2px Amber outline, 3px offset.
- Radius: 10px on cards, panels, buttons; 999px for pills and step dots; 14px on the mockup window.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; a spring (stiffness 260, damping 24) for the popup. Workshop-steady.
- Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- The mockup demo loop runs as described in Setup (2.6s steps, hover/focus pause, dot jump); under prefers-reduced-motion it sits on the finished step 3 with all controls still usable.
- Hero: the mockup enters from translateY(20px) scale(0.98); the H1 lines rise; the shortcut key chips pop in with a 40ms stagger.
- Steps: the active step row carries an Amber left rail and its icon swaps from Mist to Amber; changes crossfade 200ms.
- Privacy: the four tick lines draw their checks (SVG stroke) on first view, staggered 90ms.
- Reviews: cards reveal with 70ms stagger; stars fill amber one by one (40ms apart).
- Install buttons: the primary draws a subtle 1px Amber top rail on hover; the version chip never moves.
- FAQ: rows expand 240ms; plus rotates to cross.
- Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- prefers-reduced-motion: reduce — demo pinned to the finished state, no check drawing, no star fills (amber at rest), no popup spring (popup shown open statically); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs anywhere. Everything is drawn in code: the browser window, its chrome, the fake article page (placeholder bars, never readable paragraphs), ad blocks, the popup card, step glyphs, star rows and the favicon. No browser-vendor marks (no Chrome/Firefox/Edge/Safari names, logos or store badges) — install buttons are drawn generic with lucide icons and the words 'Install for your browser'. Icons: lucide-react only, stroke width 1.75.

## Tone
Workshop-plain: what it does, what it touches, what it never touches. One dry joke about permissions.

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-extension-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
