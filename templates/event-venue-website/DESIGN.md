---
name: "Event Venue Website"
colors:
  gallery_white: "#FAF8F4"
  linen: "#F0EBE1"
  card: "#FFFFFF"
  charcoal: "#2B2926"
  charcoal_deep: "#1E1C1A"
  stone_gray: "#6E6A61"
  champagne: "#C2A265"
  champagne_deep: "#A3853F"
  rule: "#E2DCCF"
  good: "#3E8E6D"
typography:
  display_h1_h2_h3_space_names_capacity_figures_the_wordmark_cormorant_garamond_gallery_elegant: { family: "Cormorant Garamond", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_capacities_and_hours: { family: "Jost", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 108px desktop, 80px under 1024px, 62px under 640px — galleries breathe. Type scale: H1 clamp(46px, 6.8vw, 88px) Cormorant 500, line-height 1.04; H2 clamp(30px, 4vw, 50px) Cormorant 500; H3 22px Cormorant 600; capacity figures Cormorant 600 34px Champagne tabular; lead Jost 400 17.5px / 1.65 Charcoal at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Jost 600 12px uppercase letter-spacing 0.2em Stone Gray; caption 13px Stone Gray. Buttons: height 52px, Jost 600 13.5px uppercase letter-spacing 0.08em. Primary: Champagne fill, Charcoal text. Secondary: 1px Charcoal/40% border. Inputs: height 50px, 1px Rule border, Card fill, focus Champagne border. Focus ring everywhere: 2px Champagne outline with 3px offset."
radius: "4px on cards, buttons, inputs, chips and photos — architectural. 999px only for pills, mode chips and the guest stepper."
---

# Event Venue Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Gallery White** `#FAF8F4` — Page background throughout.
- **Linen** `#F0EBE1` — Alternate section background (Spaces, Packages), chips, hover fill.
- **Card** `#FFFFFF` — Space cards, tier cards, the enquiry panel, lightbox chrome.
- **Charcoal** `#2B2926` — Headlines and body ink, footer background, photo overlays (as rgba(43,41,38,x)).
- **Charcoal Deep** `#1E1C1A` — Hover surfaces, hero overlay ink.
- **Stone Gray** `#6E6A61` — Secondary text, captions, eyebrows, disabled states.
- **Champagne** `#C2A265` — The one accent: primary buttons, capacity figures, selected mode, focus ring, plan table fills.
- **Champagne Deep** `#A3853F` — Hover and pressed states.
- **Rule** `#E2DCCF` — 1px hairlines, card borders, input borders, plan grid lines.
- **Good** `#3E8E6D` — Availability ticks, sent check, logistics icons.

## Typography
- **Display: H1, H2, H3, space names, capacity figures, the wordmark — Cormorant Garamond, gallery-elegant** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for capacities and hours** — Jost (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 108px desktop, 80px under 1024px, 62px under 640px — galleries breathe. Type scale: H1 clamp(46px, 6.8vw, 88px) Cormorant 500, line-height 1.04; H2 clamp(30px, 4vw, 50px) Cormorant 500; H3 22px Cormorant 600; capacity figures Cormorant 600 34px Champagne tabular; lead Jost 400 17.5px / 1.65 Charcoal at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Jost 600 12px uppercase letter-spacing 0.2em Stone Gray; caption 13px Stone Gray. Buttons: height 52px, Jost 600 13.5px uppercase letter-spacing 0.08em. Primary: Champagne fill, Charcoal text. Secondary: 1px Charcoal/40% border. Inputs: height 50px, 1px Rule border, Card fill, focus Champagne border. Focus ring everywhere: 2px Champagne outline with 3px offset.
- Radius: 4px on cards, buttons, inputs, chips and photos — architectural. 999px only for pills, mode chips and the guest stepper.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and gallery; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for plan-mode transitions and the form swap. Composed and unhurried.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the set-hall photo scales 1.04→1.0 over 2400ms while the overlay lightens 4%; the H1 rises 16px with 140ms stagger; a hairline Champagne rule draws under the promise line.
- Floor plan modes: tables and rows glide to new positions (Motion layout, 400ms --ease-io); the dancefloor/stage blocks crossfade; the CapacityReadout counts to the new figure over 450ms; mode chips fill Champagne in 150ms.
- Capacity tables: figures never animate; a hover fills the row Linen and slides a 2px Champagne rule.
- Gallery: photos scale 1.03 on hover with the caption fading up; clicking opens the Lightbox (Charcoal overlay at 88%, keyboard arrows and Escape, focus returns).
- Enquiry: guests stepper pops on change; window chips fill Champagne on select; invalid submit shakes 4px with inline labels; sending swaps to SentCard (320ms --ease-io) — a drawn Champagne 'ON THE BOOKS' seal scaling in gently, 'Thank you, [NAME].' 'We reply within a day with real availability.' space/mode/guests echo, 'Edit the enquiry' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — plan modes swap instantly, no scales, counts or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography, all six made for this template in one consistent style: high-ceilinged warehouse rooms in soft natural light, photographed empty or set for events — tables dressed, chairs aligned, no guests, no faces, no readable signage or vendor logos. The manager portrait is an AI-generated fictional person (a warm mid-forties host in a linen blazer) — a placeholder a real venue swaps for its own manager's photo. Every photo uses object-fit cover with the object-position given under Assets, 4px corners, no shadow. Captions in Jost 13px Stone Gray. Drawn in code: the favicon, the floor plans (spaces, tables, dancefloor, legend), the seal, chips and capacity tables. Icons: lucide-react only, stroke width 1.75.

## Tone
Host-confident: precise numbers, warm specifics, zero wedding-industry gush. One dry line about the curfew.

---
— Prompt by VibeFather · https://vibefather.ai/t/event-venue-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
