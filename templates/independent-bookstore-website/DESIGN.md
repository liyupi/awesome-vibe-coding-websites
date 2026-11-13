---
name: "Independent Bookstore Website"
colors:
  papercream: "#F8F3E6"
  kraft: "#EFE7D2"
  card: "#FFFEF8"
  inkbrown: "#3A2E22"
  mocha: "#7C6A55"
  mustard: "#D9A420"
  mustard_deep: "#B8871A"
  forestrule: "#5F7155"
  rule: "#E1D8C2"
typography:
  display_h1_h2_book_titles_event_names_the_wordmark_bitter_slab_serif_papery_and_warm: { family: "Bitter", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_hours: { family: "Nunito Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 76px) Bitter 700, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Bitter 700; book titles 19px Bitter 700; lead Nunito 400 17.5px / 1.65 Inkbrown at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Mocha; caption 13px Mocha. Buttons: height 50px, Nunito 700 14px. Primary: Mustard fill, Card text. Secondary: 1px Inkbrown border. Inputs: height 50px, 1px Rule border, Card fill, focus Mustard border. Focus ring everywhere: 2px Mustard outline with 3px offset."
radius: "8px on cards, buttons, inputs and photos. 999px only for pills, the open dot and pick ribbons."
---

# Independent Bookstore Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Papercream** `#F8F3E6` — Page background throughout.
- **Kraft** `#EFE7D2` — Alternate section background (Events, Club), chips, hover fill.
- **Card** `#FFFEF8` — Pick cards, event stubs, the order panel, confirmation.
- **Inkbrown** `#3A2E22` — Headlines and body text, icon color.
- **Mocha** `#7C6A55` — Secondary text, captions, eyebrows, closed states.
- **Mustard** `#D9A420` — The one accent: primary buttons, event dates, the club ribbon, focus ring, price dots.
- **Mustard Deep** `#B8871A` — Hover and pressed states.
- **Forestrule** `#5F7155` — Quiet second color: open dot, club vine, staff-pick ribbons.
- **Rule** `#E1D8C2` — 1px hairlines, card borders, input borders, stub perforations.

## Typography
- **Display: H1, H2, book titles, event names, the wordmark — Bitter slab serif, papery and warm** — Bitter (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for hours** — Nunito Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 76px) Bitter 700, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Bitter 700; book titles 19px Bitter 700; lead Nunito 400 17.5px / 1.65 Inkbrown at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Mocha; caption 13px Mocha. Buttons: height 50px, Nunito 700 14px. Primary: Mustard fill, Card text. Secondary: 1px Inkbrown border. Inputs: height 50px, 1px Rule border, Card fill, focus Mustard border. Focus ring everywhere: 2px Mustard outline with 3px offset.
- Radius: 8px on cards, buttons, inputs and photos. 999px only for pills, the open dot and pick ribbons.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and carousel; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Papery and unhurried.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Hero: the stacks photo scales 1.04→1.0 over 2200ms; the H1 rises; a small drawn bookmark slides in beside the eyebrow once.
- Picks carousel: horizontal scroll-snap with prev/next arrow buttons; cards lift 3px on hover and the cover tilts 2deg; the ribbon (staff name) fades in.
- Event stubs: the perforation line dashes in when the card enters view; hover lifts 3px and the mustard date square brightens.
- Club: the ribbon draws its tail once; the join note crossfades.
- Order form: day chips fill Mustard on select (150ms); invalid submit shakes 4px with kind inline labels; sending swaps to Confirmed (320ms --ease-io) — a drawn bookmark stamp sliding in, 'On the list!' 'We''ll email when [TITLE] hits the counter, [NAME].' and 'Change the order' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no carousel snap animation (still scrollable), no tilts, draws or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm real photography, all six made for this template in one consistent style: amber shop light, wood shelves, paper and cats-optional. Book covers appear as abstract art only — generated blank spines and textured covers with no readable titles (typography-free); the shop's 'signage' never shows readable text. The bookseller portrait is an AI-generated fictional person (apron, mid-shelve, warm smile) — a placeholder staff photo. No customer faces, no readable signage, no logos. Every photo uses object-fit cover with the object-position given under Assets, 8px corners, no shadow. Captions in Nunito 13px Mocha. Drawn in code: the favicon, bookmark glyph, stub perforations, ribbons and the stamp. Icons: lucide-react only, stroke width 1.75.

## Tone
Bookseller chatty: warm, opinionated, one exclamation per lifetime. Invented titles get honest one-line reviews. Dry humor about e-readers exactly once.

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-bookstore-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
