---
name: "Wedding Invitation and RSVP Website"
colors:
  ivory: "#F8F5EE"
  paper: "#FDFBF7"
  linen: "#F0EBDF"
  sage: "#8A9B84"
  olive: "#4E5A48"
  blush: "#C98D84"
  blush_deep: "#B26F66"
  ink: "#32362F"
  stone: "#6B6F63"
  rule: "#E2DCCF"
typography:
  display_the_couple_s_names_h1_h2_h3_chapter_titles_timeline_titles_countdown_numbers_the_wordmark: { family: "Gilda Display", weights: [400] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_timeline_times_font_variant_numeric_tabular_nums_captions: { family: "Jost", weights: [300, 400, 500] }
spacing: "8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 (the names) clamp(56px, 9vw, 120px) Gilda Display 400, line-height 1.04, letter-spacing 0.01em; H2 clamp(32px, 4vw, 52px) Gilda 400; H3 24px Gilda 400; ampersand between names set in Sage italic via Cormorant-free fallback (Gilda has no italic — set '&' in Jost 300 italic instead); lead Jost 300 18px / 1.75 Ink at 85%; body Jost 400 16px / 1.8 (max-width 64ch); eyebrow Jost 500 12px uppercase letter-spacing 0.2em Olive with a 16px drawn sprig glyph before; caption Jost 400 13px Olive. Buttons: height 50px, padding 0 28px, Jost 500 14px letter-spacing 0.12em uppercase. Primary: Ink fill, Paper text. Secondary: 1px Olive border, Olive text. Inputs: height 50px, 1px Rule border, Paper fill, 16px Jost, focus border Sage. Focus ring everywhere: 2px Blush outline with 3px offset."
radius: "14px on cards, inputs, chips, photos and the RSVP panel. 999px only for chips, the party stepper buttons, timeline dots and the heart."
---

# Wedding Invitation and RSVP Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ivory** `#F8F5EE` — Page background throughout.
- **Paper** `#FDFBF7` — Card surfaces (story chapters, hotels, RSVP panel, registry cards).
- **Linen** `#F0EBDF` — Alternate section background (Schedule, Registry), input fill, chip hover.
- **Sage** `#8A9B84` — Botanical line work, chapter markers, timeline dots, selected chips, eyebrows.
- **Olive** `#4E5A48` — Secondary text on light backgrounds, timeline times, captions, icon color.
- **Blush** `#C98D84` — The one warm accent: hearts, countdown numbers, the attending 'Joyfully accepts' state, focus ring.
- **Blush Deep** `#B26F66` — Blush hover state, primary button pressed, meal selected border.
- **Ink** `#32362F` — Names, headlines and body text, primary outline buttons.
- **Stone** `#6B6F63` — Muted body text, secondary buttons, disabled fields.
- **Rule** `#E2DCCF` — 1px hairlines, card borders, input borders, timeline base line.

## Typography
- **Display: the couple's names, H1, H2, H3, chapter titles, timeline titles, countdown numbers, the wordmark** — Gilda Display (OFL), weights 400. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, timeline times (font-variant-numeric tabular-nums), captions** — Jost (OFL), weights 300/400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 (the names) clamp(56px, 9vw, 120px) Gilda Display 400, line-height 1.04, letter-spacing 0.01em; H2 clamp(32px, 4vw, 52px) Gilda 400; H3 24px Gilda 400; ampersand between names set in Sage italic via Cormorant-free fallback (Gilda has no italic — set '&' in Jost 300 italic instead); lead Jost 300 18px / 1.75 Ink at 85%; body Jost 400 16px / 1.8 (max-width 64ch); eyebrow Jost 500 12px uppercase letter-spacing 0.2em Olive with a 16px drawn sprig glyph before; caption Jost 400 13px Olive. Buttons: height 50px, padding 0 28px, Jost 500 14px letter-spacing 0.12em uppercase. Primary: Ink fill, Paper text. Secondary: 1px Olive border, Olive text. Inputs: height 50px, 1px Rule border, Paper fill, 16px Jost, focus border Sage. Focus ring everywhere: 2px Blush outline with 3px offset.
- Radius: 14px on cards, inputs, chips, photos and the RSVP panel. 999px only for chips, the party stepper buttons, timeline dots and the heart.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the countdown; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions and the RSVP swap. Slow and soft — this is paper, not software.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and animate to rest over 900ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 100ms (index prop).
- Hero: the two names fade and rise from translateY(20px) with 200ms stagger 400ms after load, then the ampersand sprig draws (stroke-dashoffset to 0) over 1200ms, then the countdown fades in. The hero photo (top half, photo hero-barn.webp) scales from 1.05 to 1.0 over 2600ms; scrolling translates it 0 to 8% (Motion useScroll, offset ['start start', 'end start']).
- Countdown: the four cells sit on one hairline; each tick crossfades only the changed digit (a 240ms y-slide), never a flip-clock. Under prefers-reduced-motion the digits swap instantly.
- Story chapters: each chapter card reveals with its marker dot filling Sage; the connecting hairline draws downward as the section scrolls (scaleY 0 to 1, transform-origin top, useScroll on the list).
- Timeline (schedule): rows reveal with 100ms stagger; each time crossfades when its row enters; the dot pops from scale 0.6 once.
- RSVP: the attending toggle slides a small drawn heart between 'Joyfully accepts' (Blush) and 'Regretfully declines' (Stone); meal chips fill Sage when selected; party stepper counts with a 200ms scale pulse; submitting slides the form out and the ThankYouCard in (16px rise, 320ms --ease-io, AnimatePresence mode 'wait'); the card's heart draws its outline over 700ms.
- FAQ accordions: height 0 to auto and opacity 0 to 1 over 340ms --ease-io; the Plus rotates 45 degrees into an X.
- Registry cards: hover lifts 4px and the drawn ribbon straightens (a tiny 6px rotate settles to 0).
- Header: transparent over the ivory page with Ink text; after 40px of scroll it gets Ivory at 92% opacity, backdrop-filter blur(8px) and a 1px Rule border, 250ms transition. Anchor nav always visible with .link-draw underlines.
- prefers-reduced-motion: reduce — disable the photo scale and parallax, name rise, sprig draws, count-ups, layout animations (render at rest; countdown digits swap instantly). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, soft and romantic, all six made for this template in one consistent style: soft garden light, ivory and sage with blush accents, shallow depth of field, fine grain. Never a person: the venue, florals, stationery, table settings and candles — no faces, no hands, no rings on fingers. No readable text anywhere — stationery stays blank. Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Ivory get a 1px Rule outline. Captions under photos in Jost 13px Olive. Drawn in code: the botanical corner sprigs, chapter markers, timeline dots, the heart, the venue sketch and the registry placeholder cards. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm, personal and lightly funny, like the couple wrote it themselves on a good writing day. Short paragraphs, concrete details (times, walking minutes, menu names), no formal invitation clichés, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/wedding-invitation-and-rsvp-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
