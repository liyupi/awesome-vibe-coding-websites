---
name: "Dental Clinic Website"
colors:
  linen: "#F7F4EE"
  paper: "#FFFFFF"
  sage_50: "#EEF3EF"
  sage_100: "#DFE8E1"
  sage_300: "#B7CBBE"
  teal: "#1F4A47"
  teal_700: "#163634"
  ink: "#1C2624"
  slate: "#5B6966"
  line: "#DCE3DD"
  clay: "#BF4F35"
  clay_700: "#A3412A"
  clay_50: "#FBEAE4"
  open: "#2F7D5B"
typography:
  display_h1_h2_prices_big_rating_number_monograms_wordmark: { family: "Fraunces Variable", weights: [400, 500, 600] }
  text_body_nav_buttons_labels_chips_form_fields_h3: { family: "Figtree Variable", weights: [400, 500, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, side gutter clamp(20px, 4vw, 40px). Section vertical padding 112px on desktop, 72px under 768px. H1 Fraunces 500 clamp(42px, 5.4vw, 72px), line-height 1.04, letter-spacing -0.02em, color Teal. H2 Fraunces 500 clamp(32px, 3.6vw, 48px), line-height 1.1, letter-spacing -0.015em, Teal; one word or short phrase per H2 is set in Fraunces 400 italic (marked with <em> in the copy below). H3 Figtree 600 20px/1.3 Ink. Body Figtree 400 17px/1.65 Ink (16px under 768px); lead paragraphs 19px Slate. Eyebrows Figtree 600 13px uppercase, letter-spacing 0.12em, Teal at 80%, with a 6px Clay dot 10px before the text. Prices Fraunces 500 with font-variant-numeric tabular-nums. Section headers: eyebrow, H2 and a max-width 56ch lead, 48px below the header before content."
radius: "Cards and photo tiles 24px, the new-patient offer card and the booking form card 28px, inputs and select 14px, buttons, chips, the day strip chips and time-slot chips fully rounded (999px), icon circles and monogram avatars are circles. Primary buttons are 52px tall pills (44px in the nav), padding 0 26px, Figtree 600 16px, Clay background, Linen text, with a lucide ArrowRight 18px that moves 3px right on hover. Secondary buttons are the same size with a 1.5px Teal border, Teal text, transparent background, Sage 100 fill on hover."
---

# Dental Clinic Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Linen** `#F7F4EE` — Page background, text on Teal and Clay surfaces
- **Paper** `#FFFFFF` — Cards, form surface, floating hero cards, inputs
- **Sage 50** `#EEF3EF` — Alternating section background (Reassurance, Team, Book & visit), chip backgrounds
- **Sage 100** `#DFE8E1` — Icon circles, monogram avatar tint A, selected day chip border, hover fill of ghost buttons
- **Sage 300** `#B7CBBE` — Monogram avatar tint B, rating bar track, map park areas, decorative arches
- **Teal** `#1F4A47` — Headings, wordmark, secondary buttons, selected chips, footer and closing CTA background
- **Teal 700** `#163634` — Teal button hover, footer bottom row
- **Ink** `#1C2624` — Body text on light surfaces
- **Slate** `#5B6966` — Secondary text, captions, field help, durations, unavailable slots
- **Line** `#DCE3DD` — 1px borders of cards, inputs, dividers, table rows
- **Clay** `#BF4F35` — The only accent: primary 'Book a visit' buttons, emergency banner background, star icons, focus ring, the map pin. Never used for large surfaces other than the banner.
- **Clay 700** `#A3412A` — Clay button hover and active
- **Clay 50** `#FBEAE4` — Emergency notice box in the booking form and side panel, error field background
- **Open** `#2F7D5B` — Open-now dot and text, success check, 'often covered' insurance chip text

## Typography
- **Display (H1, H2, prices, big rating number, monograms, wordmark)** — Fraunces Variable (OFL), weights 400/500/600. Self-host the font files.
- **Text (body, nav, buttons, labels, chips, form fields, H3)** — Figtree Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, side gutter clamp(20px, 4vw, 40px). Section vertical padding 112px on desktop, 72px under 768px. H1 Fraunces 500 clamp(42px, 5.4vw, 72px), line-height 1.04, letter-spacing -0.02em, color Teal. H2 Fraunces 500 clamp(32px, 3.6vw, 48px), line-height 1.1, letter-spacing -0.015em, Teal; one word or short phrase per H2 is set in Fraunces 400 italic (marked with <em> in the copy below). H3 Figtree 600 20px/1.3 Ink. Body Figtree 400 17px/1.65 Ink (16px under 768px); lead paragraphs 19px Slate. Eyebrows Figtree 600 13px uppercase, letter-spacing 0.12em, Teal at 80%, with a 6px Clay dot 10px before the text. Prices Fraunces 500 with font-variant-numeric tabular-nums. Section headers: eyebrow, H2 and a max-width 56ch lead, 48px below the header before content.
- Radius: Cards and photo tiles 24px, the new-patient offer card and the booking form card 28px, inputs and select 14px, buttons, chips, the day strip chips and time-slot chips fully rounded (999px), icon circles and monogram avatars are circles. Primary buttons are 52px tall pills (44px in the nav), padding 0 26px, Figtree 600 16px, Clay background, Linen text, with a lucide ArrowRight 18px that moves 3px right on hover. Secondary buttons are the same size with a 1.5px Teal border, Teal text, transparent background, Sage 100 fill on hover.

## Motion
- Easing everywhere: cubic-bezier(0.22, 1, 0.36, 1). Durations: 200ms for hovers and chip selection, 300ms for accordions and menus, 600ms for reveals.
- Reveal: elements with class .reveal start at opacity 0 and translateY(16px) and go to rest over 600ms when 15% visible, once (one shared IntersectionObserver in src/lib/reveal.ts adds .is-in). Siblings in a grid stagger by 70ms via a --i CSS variable (transition-delay calc(var(--i) * 70ms)). Elements already in the viewport on load reveal immediately with the same stagger.
- Card hover (treatment cards, team cards, plan cards, gallery tiles): translateY(-3px) and shadow card to lift over 200ms; gallery images also scale to 1.03 over 600ms inside their overflow-hidden tile.
- Open-now dot: an 8px Open circle with a ring that pulses (keyframes pulse-dot: box-shadow 0 0 0 0 rgba(47,125,91,0.45) to 0 0 0 8px rgba(47,125,91,0), 2000ms, infinite). When closed the dot is Slate and does not pulse.
- Accordions (FAQ, what-to-expect, mobile menu groups): height animates with the CSS grid trick (grid-template-rows 0fr to 1fr, inner overflow hidden) over 300ms; the lucide Plus icon rotates 45 degrees when open.
- Chips: day and slot chips scale to 0.97 on press; the selected state swaps background and text color over 200ms.
- Emergency banner dismiss: collapses height to 0 and fades over 250ms, then unmounts.
- Booking success: the form fades out (200ms), the success card fades in and rises 12px over 400ms, and the page scrolls so the card's top sits 96px below the viewport top.
- Reduced motion (prefers-reduced-motion: reduce): reveals show immediately with no transform, no stagger, no hover lift or image zoom, no dot pulse, accordions open and close instantly, smooth scrolling is replaced with instant jumps, the banner disappears without animation.

## Imagery
Real photographs of the clinic's rooms, furniture and equipment in soft daylight: sage walls, light white oak, cream upholstery, plants in terracotta. Never patients, never faces, never before/after mouths. Six photos are made for this template and hosted by its author; three CC0 photos (a quiet treatment-room lounge, handpieces on a dental unit, bamboo toothbrushes) add real-world detail. Photos are always shown in 24px-radius tiles with object-fit cover and the exact object-position given, never full-bleed behind text. People are shown as monogram avatars. Icons come from lucide-react; the favicon, wordmark glyph, the map, rating bars and decorative arches are drawn in SVG or CSS. No illustrations, no stock smiling-model photos, no 3D, no gradients other than the subtle ones specified.

## Tone
Warm, plain and reassuring, like a good receptionist on the phone. Short sentences, real numbers, no jargon without a plain explanation, no fear tactics, no hype words (no world-class, state-of-the-art, cutting-edge, best-in-class, revolutionary). Address the reader as 'you'; the practice speaks as 'we'.

---
— Prompt by VibeFather · https://vibefather.ai/t/dental-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
