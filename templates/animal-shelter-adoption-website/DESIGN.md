---
name: "Animal Shelter Adoption Website"
colors:
  cream: "#FBF8F2"
  sand: "#F2EBDD"
  card: "#FFFFFF"
  meadow: "#3F7A52"
  meadow_deep: "#2E5E3E"
  meadow_mist: "#E5EFE5"
  ink: "#2C2A24"
  bark: "#6E675B"
  tangerine: "#E8833A"
  tangerine_deep: "#C96A25"
  rule: "#E5DCCB"
typography:
  display_h1_h2_h3_pet_names_tier_prices_the_wordmark: { family: "Quicksand", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_for_stats_and_fees: { family: "Nunito Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.4vw, 80px) Quicksand 700, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Quicksand 700; H3 21px Quicksand 700; pet names Quicksand 700 22px; lead Nunito 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Bark with a drawn paw glyph before; caption 13px Bark. Buttons: height 50px, Nunito 700 14px. Primary: Meadow fill, Card text. Donate: Tangerine fill, Card text. Secondary: 1px Meadow border, Meadow text. Inputs: height 50px, 1px Rule border, Card fill, focus Meadow border. Focus ring everywhere: 2px Meadow outline with 3px offset."
radius: "16px on cards, buttons, inputs, chips and photos — friendly corners everywhere. 999px only for chips, pills, stat dots and paw dots."
---

# Animal Shelter Adoption Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FBF8F2` — Page background on both pages.
- **Sand** `#F2EBDD` — Alternate section background (Donate, Volunteer), hover fill, chips.
- **Card** `#FFFFFF` — Pet cards, application panel, confirmation, tier cards.
- **Meadow** `#3F7A52` — Primary: headlines' accents, primary buttons, selected chips, focus ring.
- **Meadow Deep** `#2E5E3E` — Primary hover, footer background.
- **Meadow Mist** `#E5EFE5` — Selected pet detail accents, filter chip fills, trait tags.
- **Ink** `#2C2A24` — Headlines and body text, icon color.
- **Bark** `#6E675B` — Secondary text, captions, eyebrows, filter labels.
- **Tangerine** `#E8833A` — The one warm accent: Donate buttons, adoption fees, stat figures, the heart glyphs, focus-visible details.
- **Tangerine Deep** `#C96A25` — Tangerine hover and pressed.
- **Rule** `#E5DCCB` — 1px hairlines, card borders, input borders, dividers.

## Typography
- **Display: H1, H2, H3, pet names, tier prices, the wordmark** — Quicksand (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for stats and fees** — Nunito Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.4vw, 80px) Quicksand 700, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Quicksand 700; H3 21px Quicksand 700; pet names Quicksand 700 22px; lead Nunito 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Bark with a drawn paw glyph before; caption 13px Bark. Buttons: height 50px, Nunito 700 14px. Primary: Meadow fill, Card text. Donate: Tangerine fill, Card text. Secondary: 1px Meadow border, Meadow text. Inputs: height 50px, 1px Rule border, Card fill, focus Meadow border. Focus ring everywhere: 2px Meadow outline with 3px offset.
- Radius: 16px on cards, buttons, inputs, chips and photos — friendly corners everywhere. 999px only for chips, pills, stat dots and paw dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and grid shuffles; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the application swap. Gentle and warm.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Hero: the shelter photo scales 1.04→1.0 over 2400ms; the headline rises; three paw glyphs walk in beside the mission line (staggered 200ms, off under reduced motion).
- Grid filtering: cards use Motion layout with AnimatePresence mode 'popLayout'; leaving cards fade 180ms, survivors glide 380ms --ease-io; the live count crossfades; an empty filtered grid shows 'No friends match — loosen a filter, they''re all good ones.' with Reset.
- Pet cards: hover lifts 3px and the photo scales 1.03; the one-line personality ticks from Bark to Meadow.
- Pet detail: the story's first line reveals with a Meadow underline draw; trait tags stagger 40ms; the 'good with' checks draw once.
- Application: the preselected pet's chip pulses once; invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn heart+paw stamp scaling in, 'Application received' and 'The shelter replies within two days — usually with more photos.'
- Stats: figures count up once on reveal (600ms); the '(sample)' caption never animates.
- Donate tiers: hover lifts the tier 2px; the Tangerine 'what it buys' line brightens.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, staggers, counts or stamps; everything renders at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm real photography, all six made for this template in one consistent style: soft natural light, cream and warm gray backgrounds, animals relaxed and well-lit — portraits, action and shelter corners; never a person (no faces, no hands). No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 16px corners, no shadow; photos on Cream get a 1px Rule outline. Captions in Nunito 13px Bark. Drawn in code: the paw glyphs, heart stamp, trait tags, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm, funny about animals, serious about care. Every pet gets a real personality description, not a breed chart; no guilt-tripping.

---
— Prompt by VibeFather · https://vibefather.ai/t/animal-shelter-adoption-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
