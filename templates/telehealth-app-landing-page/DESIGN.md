---
name: "Telehealth App Landing Page"
colors:
  canvas: "#F4F7F3"
  surface: "#FFFFFF"
  ink: "#15332F"
  muted: "#566C66"
  teal: "#176B5E"
  mint: "#DCEFE7"
  coral: "#E9846B"
  night: "#102D2A"
  line: "#CFDED7"
typography:
  display_and_section_headings_h1_72px_desktop_46px_mobile_at_0_98_line_height_h2_48px_36px_at_1_05_tracking_0_035em: { family: "Fraunces Variable", weights: [500, 600] }
  body_16_18px_at_1_6_line_height_navigation_and_ui_labels_13_15px_buttons_15px_semibold: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base scale, a 1180px maximum content width, 32px desktop and 20px mobile gutters, 104px desktop and 72px mobile section padding, 24px card padding, and 44px minimum tap targets."
radius: "Use 44px phone shells, 30px large feature panels, 20px cards, 14px input and UI rows, and fully rounded chips and primary buttons; keep borders crisp at 1px."
---

# Telehealth App Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F4F7F3` — Warm off-white page background and quiet sections.
- **Surface** `#FFFFFF` — Cards, phone screens, input rows, and accordion surfaces.
- **Ink** `#15332F` — Headings, primary text, and dark icon strokes.
- **Muted** `#566C66` — Secondary copy and metadata with readable contrast.
- **Teal** `#176B5E` — Primary buttons, selected controls, links, and active progress.
- **Mint** `#DCEFE7` — Soft panels, selected chips, and the download CTA.
- **Coral** `#E9846B` — Small decorative accents and active status dots only, never body text.
- **Night** `#102D2A` — Privacy section background and video-call chrome.
- **Line** `#CFDED7` — One-pixel borders, separators, and dotted hero grid.

## Typography
- **Display and section headings; H1 72px desktop / 46px mobile at 0.98 line-height, H2 48px / 36px at 1.05, tracking -0.035em** — Fraunces Variable (OFL), weights 500/600. Self-host the font files.
- **Body 16–18px at 1.6 line-height, navigation and UI labels 13–15px, buttons 15px semibold** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base scale, a 1180px maximum content width, 32px desktop and 20px mobile gutters, 104px desktop and 72px mobile section padding, 24px card padding, and 44px minimum tap targets.
- Radius: Use 44px phone shells, 30px large feature panels, 20px cards, 14px input and UI rows, and fully rounded chips and primary buttons; keep borders crisp at 1px.

## Motion
- On initial load, fade and lift the hero copy by 16px over 450ms, then the two phones by 22px over 550ms with a 100ms stagger; never hide content indefinitely.
- Reveal major sections once with IntersectionObserver using opacity and translateY(16px) over 400ms, with no scroll-jacking or pinned scenes.
- Use 180ms opacity and translateX(8px) transitions when changing phone screens or walkthrough steps, and 160ms color or shadow transitions for selected chips and pricing.
- Animate FAQ answers with a 200ms grid-row expansion and rotate the chevron; animate the download toast in and out over 180ms.
- Under prefers-reduced-motion, remove reveals, rotations, smooth scrolling, and transitions while preserving every state change and all visible content.

## Imagery
Use no raster images or external artwork. The visual anchor is a pair of rich CSS phone mockups with believable interface rows, a generic faceless line avatar made from original geometric SVG shapes, a dotted background field, and a local-data privacy diagram. All icons are simple original inline SVG strokes; no app-store marks, third-party logos, or recognizable people.

## Tone
Warm, precise, calm, and plain-spoken. Reassuring without fear-based urgency, diagnoses, treatment promises, insurance guarantees, or unsupported trust claims. Rewrite all care roles, topics, interface copy, and FAQs to fit the supplied variables.

---
— Prompt by VibeFather · https://vibefather.ai/t/telehealth-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
