---
name: "Crypto Wallet Landing Page"
colors:
  porcelain: "#F3F1EB"
  paper: "#FCFBF8"
  ink: "#121326"
  slate: "#626577"
  line: "#D9D7E1"
  midnight: "#191A30"
  iris: "#6C4FE0"
  iris_mist: "#E9E3FF"
typography:
  display_and_headings: { family: "Space Grotesk Variable", weights: [500, 600, 700] }
  body_and_interface: { family: "Manrope Variable", weights: [400, 500, 600, 700] }
  numbers_and_technical_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base grid and a 12-column desktop layout inside a 1280px max-width container with 32px side gutters. Header height is 76px. Standard sections have 112px vertical padding; hero has 72px top and 88px bottom. At 390px use 20px gutters, 68px section padding, 24px card padding and a single-column flow. Keep body measure at 58–66 characters and headline measure at 11–13 characters per line where practical."
radius: "Use 999px pills for buttons and small tags, 10px for inputs and compact controls, 16px for standard cards, 28px for feature panels, 20px for the browser frame and 38px for the phone body. Borders are 1px solid Line. Device shadow: 0 32px 80px rgba(18,19,38,0.16), 0 8px 24px rgba(18,19,38,0.08); ordinary cards have no heavy shadow."
---

# Crypto Wallet Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Porcelain** `#F3F1EB` — Main page canvas and quiet negative space.
- **Paper** `#FCFBF8` — Cards, device screens, navigation and raised surfaces.
- **Ink** `#121326` — Primary text, dark buttons and high-contrast details.
- **Slate** `#626577` — Secondary copy and metadata; never use for text smaller than 14px on tinted backgrounds.
- **Line** `#D9D7E1` — One-pixel borders, grid rules and inactive controls.
- **Midnight** `#191A30` — Security section, browser chrome and dark device details.
- **Iris** `#6C4FE0` — Primary accent for selected states, keylines, links and small highlights; use white text on solid Iris.
- **Iris Mist** `#E9E3FF` — Soft accent fields, icon containers and the download-panel halo.

## Typography
- **Display and headings** — Space Grotesk Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body and interface** — Manrope Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Numbers and technical labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid and a 12-column desktop layout inside a 1280px max-width container with 32px side gutters. Header height is 76px. Standard sections have 112px vertical padding; hero has 72px top and 88px bottom. At 390px use 20px gutters, 68px section padding, 24px card padding and a single-column flow. Keep body measure at 58–66 characters and headline measure at 11–13 characters per line where practical.
- Radius: Use 999px pills for buttons and small tags, 10px for inputs and compact controls, 16px for standard cards, 28px for feature panels, 20px for the browser frame and 38px for the phone body. Borders are 1px solid Line. Device shadow: 0 32px 80px rgba(18,19,38,0.16), 0 8px 24px rgba(18,19,38,0.08); ordinary cards have no heavy shadow.

## Motion
- On initial load, stagger hero eyebrow, headline, body and actions by 70ms with opacity 0→1 and y 16→0 over 480ms. Bring the browser from y 24 and rotate -2deg and the phone from y 36 and rotate 4deg into their final positions over 700ms; play once only.
- Reveal each section's heading and direct children with IntersectionObserver and Motion at 20% visibility, using y 18→0, opacity 0→1, 480ms duration and 60ms child stagger. Never hide content when JavaScript is unavailable.
- Switch phone/browser and network/security selections with 220ms opacity and 8px vertical transitions. Preserve component dimensions so the page does not jump. Accordions animate height over 240ms and chevrons rotate 180 degrees.
- On capable pointers only, let the hero device group translate at most 6px toward the pointer with a 250ms ease-out return. Do not add continuous floating, auto-rotating carousels, marquees or scroll-jacking.
- Under prefers-reduced-motion: reduce, disable pointer response, smooth scrolling, entrance transforms and animated transitions; show all content immediately and preserve every interaction.

## Imagery
Use no raster images. The visual anchor is a meticulously layered phone and browser-extension interface drawn with HTML, CSS and inline SVG. Use subtle CSS grid lines, two blurred Iris Mist radial fields and soft shadows for depth. Network identities are six original geometric SVG compositions, not adapted token logos. Generic Lucide icons support actions such as copy, lock, check, arrow and download; they never stand in for network or platform logos.

## Tone
Calm, exact and reassuring without making guarantees. Use short sentences, concrete interface labels and transparent demo disclosures. Avoid trading language, hype, fear and technical showing-off.

---
— Prompt by VibeFather · https://vibefather.ai/t/crypto-wallet-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
