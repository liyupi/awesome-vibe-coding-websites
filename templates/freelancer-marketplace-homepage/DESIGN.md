---
name: "Freelancer Marketplace Homepage"
colors:
  paper: "#F5F1E8"
  cream: "#FFFDF8"
  forest_ink: "#183A32"
  slate_green: "#64736C"
  coral: "#D86F4B"
  sage: "#DDE8D5"
  line: "#D6DDD3"
typography:
  display_and_editorial_headings: { family: "Fraunces Variable", weights: [500, 600, 700] }
  body_navigation_forms_cards_and_metadata: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base scale with a 1280px max-width content container and 40px desktop gutters. Desktop sections have 104px vertical padding, compact directory sections 64px, and mobile sections 64px with 20px gutters. Hero uses a 12-column grid with 64px gaps. Card interiors use 20–24px; form fields have 12px vertical and 16px horizontal padding."
radius: "Use 18px on cards, 24px on photographic panels and major callouts, 12px on inputs and buttons, and full rounding only for chips and compact status pills. Keep shadows sparse: one soft 0 16px 50px rgba(24,58,50,0.10) elevation for the floating search panel and mobile menu."
---

# Freelancer Marketplace Homepage — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F5F1E8` — Main page background and generous editorial negative space
- **Cream** `#FFFDF8` — Cards, search panel, form surfaces, and header background
- **Forest Ink** `#183A32` — Headlines, body emphasis, primary buttons, and dark footer
- **Slate Green** `#64736C` — Secondary copy, metadata, and inactive controls
- **Coral** `#D86F4B` — Small highlights, active chips, rating accents, and brand mark; never white text on this color
- **Sage** `#DDE8D5` — Selected states, informational panels, and step-progress fills
- **Line** `#D6DDD3` — Hairline borders, dividers, input outlines, and card boundaries

## Typography
- **Display and editorial headings** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, forms, cards, and metadata** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale with a 1280px max-width content container and 40px desktop gutters. Desktop sections have 104px vertical padding, compact directory sections 64px, and mobile sections 64px with 20px gutters. Hero uses a 12-column grid with 64px gaps. Card interiors use 20–24px; form fields have 12px vertical and 16px horizontal padding.
- Radius: Use 18px on cards, 24px on photographic panels and major callouts, 12px on inputs and buttons, and full rounding only for chips and compact status pills. Keep shadows sparse: one soft 0 16px 50px rgba(24,58,50,0.10) elevation for the floating search panel and mobile menu.

## Motion
- On initial load, fade and translate the hero copy upward by 18px over 500ms, then reveal the photograph with a 24px clip-path inset resolving over 650ms; stagger only these two groups.
- Reveal major homepage sections once as they enter the viewport with 16px upward travel and 450ms easing; never hide core copy waiting for JavaScript.
- Give category chips, profile-card arrows, and buttons 160–200ms color, border, and 2px directional transforms; filtering updates crossfade results in 180ms without layout jumps.
- Advance the project form with a 220ms horizontal fade of 12px and animate the progress fill; preserve focus by moving it to the new step heading.
- Disable smooth scrolling, reveals, parallax, and nonessential transitions under prefers-reduced-motion; all content and controls remain immediately visible.

## Imagery
Use six locally hosted, generated editorial photographs as one coherent shoot: warm cream interiors, forest-green and terracotta clothing or props, natural window light, realistic skin texture, gentle film grain, and uncluttered composition. The hero is a wide collaborative scene with environmental space, never a tight face close-up. The five freelancer images are natural working portraits of explicitly fictional adults with varied ages and ethnicities, not resembling any real individual. Use consistent 3:4 crops for profile cards and a 4:3 crop for the hero. Portfolio thumbnails are original CSS and SVG compositions, not extra photographs. Use Lucide icons only, with no third-party brand marks.

## Tone
Warm, capable, plain-spoken, and human. Favor specific skills and practical expectations over marketplace hype. Never imply that the fictional profiles, ratings, companies, availability, or submissions are real.

---
— Prompt by VibeFather · https://vibefather.ai/t/freelancer-marketplace-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
