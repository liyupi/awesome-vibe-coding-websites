---
name: "Interactive Product Tour Page"
colors:
  paper: "#F4F1EA"
  surface: "#FFFCF7"
  ink: "#18201F"
  muted: "#69716C"
  line: "#D9D8D0"
  stage: "#111A1D"
  stage_raised: "#1B272B"
  stage_text: "#F4F6F2"
  coral: "#FF7058"
  coral_deep: "#A9382B"
  mint: "#B8D8C5"
typography:
  editorial_display: { family: "Newsreader Variable", weights: [400, 500, 600] }
  interface_and_body: { family: "Manrope Variable", weights: [400, 500, 600, 700] }
  step_counts_and_compact_data: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base grid. Content max-width is 1360px with 64px desktop gutters, 32px tablet gutters, and 20px mobile gutters. Header height is 72px. Hero top/bottom padding is 56px/96px on desktop and 32px/64px on mobile. Later sections use 112px desktop and 72px mobile vertical padding. Keep text measures near 58 characters and application labels compact."
radius: "Use 18px for the tour console and dialog, 14px for large feature panels, 10px for application panels and inputs, and 7px for buttons. Reserve full pills for status chips, progress counts, and small tab labels. Use one-pixel borders rather than a page full of floating cards; only the tour console gets a large shadow: 0 24px 80px rgba(17, 26, 29, 0.14)."
---

# Interactive Product Tour Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4F1EA` — Main page background and generous editorial margins
- **Surface** `#FFFCF7` — Header, chapter cards, FAQ panels, and dialog surfaces
- **Ink** `#18201F` — Primary text, dark buttons, and strong icon strokes
- **Muted** `#69716C` — Secondary copy and inactive controls on light surfaces
- **Line** `#D9D8D0` — Hairline borders, separators, and inactive progress tracks
- **Stage** `#111A1D` — Main application-canvas background
- **Stage Raised** `#1B272B` — Application sidebar, cards, menus, and tooltip surfaces
- **Stage Text** `#F4F6F2` — Primary text inside the dark product mockup
- **Coral** `#FF7058` — Active hotspot, progress, selected tabs, and primary accent fills; pair with Ink text on light backgrounds
- **Coral Deep** `#A9382B` — Accessible accent text and focus rings on Paper and Surface
- **Mint** `#B8D8C5` — Approval, resolved, and success states inside the application

## Typography
- **Editorial display** — Newsreader Variable (OFL), weights 400/500/600. Self-host the font files.
- **Interface and body** — Manrope Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Step counts and compact data** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Content max-width is 1360px with 64px desktop gutters, 32px tablet gutters, and 20px mobile gutters. Header height is 72px. Hero top/bottom padding is 56px/96px on desktop and 32px/64px on mobile. Later sections use 112px desktop and 72px mobile vertical padding. Keep text measures near 58 characters and application labels compact.
- Radius: Use 18px for the tour console and dialog, 14px for large feature panels, 10px for application panels and inputs, and 7px for buttons. Reserve full pills for status chips, progress counts, and small tab labels. Use one-pixel borders rather than a page full of floating cards; only the tour console gets a large shadow: 0 24px 80px rgba(17, 26, 29, 0.14).

## Motion
- On step changes, crossfade and translate the outgoing/incoming guidance by 8px over 240ms; animate the spotlight cutout and target outline to the new bounds over 200ms without changing the console's dimensions.
- Show a restrained 2-second coral box-shadow pulse on the active numbered hotspot. Stop the pulse while autoplay is paused by manual interaction and remove it entirely for reduced motion.
- Autoplay is off on initial load. When explicitly started, each step displays for 5000ms while a thin coral progress line fills linearly; chapter completion always pauses playback.
- Reveal lower sections once with a 20px rise and 420ms fade, staggered by 70ms. Do not pin the page, hijack scrolling, or run decorative continuous background animation.
- Open the native dialog with a 180ms opacity and 0.98-to-1 scale transition. Respect prefers-reduced-motion by removing transforms, pulses, smooth scrolling, and reveal delays, and by leaving autoplay unavailable while retaining every manual control.

## Imagery
There are no raster images. The visual anchor is a rich, original product interface built from semantic HTML, CSS, inline SVG, and Lucide icons: sidebar, queue, file canvas, comment pins, version controls, approval checklist, progress indicators, and handoff ledger. Draw a simple generic three-panel brand mark and abstract file thumbnails in code. No screenshots, stock photographs, customer logos, mascot, signature illustration, or recognizable existing product interface.

## Tone
Assured, practical, and quietly editorial. Use short sentences, precise product language, and believable sample details; avoid hype, fake customer claims, generic AI phrasing, and jokes.

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-product-tour-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
