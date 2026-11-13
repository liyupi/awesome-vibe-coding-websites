---
name: "Pizza Ordering Website"
colors:
  oven_cream: "#F6EFE3"
  flour_white: "#FFFaf2"
  roasted_ink: "#2B1B17"
  tomato: "#B9402A"
  basil: "#35543D"
  crust_gold: "#E2A44B"
typography:
  display_and_section_headings: { family: "Fraunces Variable", weights: [600, 700, 900] }
  body_navigation_controls_prices_and_form_labels: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid with a 1280px maximum content width and 32px desktop or 20px mobile side gutters. Sections have 96px desktop and 64px mobile vertical padding. Card content uses 24px padding; control groups use 16px gaps; body copy stays below 62 characters per line."
radius: "Use 24px radii on photography and primary cards, 16px on inputs and compact rows, 12px on small controls, and fully rounded pills for tabs, badges, and primary buttons. Borders are 1px solid Roasted Ink at 12% opacity; shadows are soft and warm rather than black."
---

# Pizza Ordering Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Oven Cream** `#F6EFE3` — Primary page background and confirmation screen
- **Flour White** `#FFFaf2` — Menu cards, drawer, inputs, and raised surfaces
- **Roasted Ink** `#2B1B17` — Headings, body text, dark buttons, and icon strokes
- **Tomato** `#B9402A` — Primary actions, active category tabs, prices, and small highlights; use white text on it
- **Basil** `#35543D` — Secondary buttons, dietary badges, success states, and footer background
- **Crust Gold** `#E2A44B` — Decorative crust tones, stars, and focus accents only, never small body text

## Typography
- **Display and section headings** — Fraunces Variable (OFL), weights 600/700/900. Self-host the font files.
- **Body, navigation, controls, prices, and form labels** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid with a 1280px maximum content width and 32px desktop or 20px mobile side gutters. Sections have 96px desktop and 64px mobile vertical padding. Card content uses 24px padding; control groups use 16px gaps; body copy stays below 62 characters per line.
- Radius: Use 24px radii on photography and primary cards, 16px on inputs and compact rows, 12px on small controls, and fully rounded pills for tabs, badges, and primary buttons. Borders are 1px solid Roasted Ink at 12% opacity; shadows are soft and warm rather than black.

## Motion
- On initial load, stagger the hero eyebrow, headline, copy, and buttons by 70ms with a 20px upward fade; reveal the hero photograph with a 500ms clip-path wipe and no parallax.
- Reveal major section headings and menu cards once as they enter the viewport using 16px upward fades over 350ms; do not replay them on every scroll.
- Animate category changes with a 160ms crossfade and 8px vertical shift while keeping the grid height stable enough to avoid jumps.
- Scale newly selected SVG topping groups from 0.7 to 1 with a 160ms ease-out and animate the live price with a subtle 120ms highlight, not rolling digits.
- Slide the cart drawer in from the right with a damped spring over 320ms and fade its backdrop; trap focus, close on Escape, and restore focus to the order button.
- Transition checkout to confirmation with a 180ms fade and a small check-icon scale. Under prefers-reduced-motion, remove transforms and staggered reveals and show all state changes immediately.

## Imagery
Use the six listed generated editorial photographs and nothing else photographic. They share a pale stone surface or warm cream interior, tomato and basil accents, soft late-afternoon window light from the upper left, and restrained natural restaurant styling. Crop hero.webp as a large landscape scene, show the four pizza photographs in consistent 4:3 cards, and place dining-room.webp beside the visit copy. The pizza configurator is a crisp original SVG drawn in code, not a generated image. No people, text baked into images, logos, branded packaging, or recognizable restaurant chains.

## Tone
Warm, appetizing, concise, and neighborhood-focused. Use specific ingredients and service details rather than generic restaurant claims. Make the interface playful without becoming childish.

---
— Prompt by VibeFather · https://vibefather.ai/t/pizza-ordering-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
