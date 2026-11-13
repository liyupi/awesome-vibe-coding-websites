---
name: "Newsletter Landing Page"
colors:
  paper: "#F8F4EC"
  wash: "#F0EADD"
  card: "#FFFEF9"
  ink: "#26211B"
  umber: "#6B6155"
  rule: "#E0D8C8"
  redlink: "#A33B2E"
  redlink_deep: "#862E23"
  olive_tick: "#5C6B4C"
typography:
  display_and_body_masthead_h1_h3_issue_previews_quotes_newsreader_with_its_optical_size_axis_doing_both_jobs: { family: "Newsreader", weights: [400, 500, 600] }
  eyebrows_and_metadata_cadence_lines_issue_numbers_categories_form_labels_uppercase: { family: "Space Mono", weights: [400, 700] }
spacing: "8px base unit. Container max-width 1000px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with a two-column hero. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: masthead (H1) clamp(48px, 7vw, 92px) Newsreader 500, line-height 1.0, letter-spacing -0.01em; H2 clamp(30px, 4vw, 48px) Newsreader 500; H3 22px Newsreader 600; lead Newsreader 400 19px / 1.65 Ink at 90%; body Newsreader 400 17px / 1.75 (max-width 62ch); issue preview body Newsreader 400 16px / 1.8 with a Redlink drop cap; eyebrow Space Mono 700 11px uppercase letter-spacing 0.22em Umber; caption Space Mono 400 12px Umber. Buttons: height 52px, padding 0 26px, Space Mono 700 13px uppercase letter-spacing 0.1em. Subscribe: Redlink fill, Paper text. Secondary: 1px Ink/30% border, Ink text. Inputs: height 52px, 1px Rule border, Card fill, 16px Newsreader, focus border Redlink. Focus ring everywhere: 2px Redlink outline with 3px offset. Links: Redlink with the .link-draw underline."
radius: "6px on cards, the envelope, the form panel and buttons. 999px only for the category chips and read-time dots."
---

# Newsletter Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F8F4EC` — Page background throughout.
- **Wash** `#F0EADD` — Alternate section background (Quotes, Archive), hover fill, chips.
- **Card** `#FFFEF9` — Issue cards, envelope card, form panel, welcome card.
- **Ink** `#26211B` — Headlines, body text, the masthead, icon color.
- **Umber** `#6B6155` — Secondary text, captions, eyebrows, archive metadata.
- **Rule** `#E0D8C8` — 1px hairlines, card borders, input borders, archive dividers.
- **Redlink** `#A33B2E` — The one accent: links, the subscribe button, the stamp, selection color, focus ring, drop caps.
- **Redlink Deep** `#862E23` — Button hover, pressed states.
- **Olive Tick** `#5C6B4C` — Quiet second color: checkmarks in the inbox list, the 'free' tick, read-time dots.

## Typography
- **Display and body: masthead, H1–H3, issue previews, quotes — Newsreader with its optical-size axis doing both jobs** — Newsreader (OFL), weights 400/500/600. Self-host the font files.
- **Eyebrows and metadata: cadence lines, issue numbers, categories, form labels (uppercase)** — Space Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1000px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with a two-column hero. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: masthead (H1) clamp(48px, 7vw, 92px) Newsreader 500, line-height 1.0, letter-spacing -0.01em; H2 clamp(30px, 4vw, 48px) Newsreader 500; H3 22px Newsreader 600; lead Newsreader 400 19px / 1.65 Ink at 90%; body Newsreader 400 17px / 1.75 (max-width 62ch); issue preview body Newsreader 400 16px / 1.8 with a Redlink drop cap; eyebrow Space Mono 700 11px uppercase letter-spacing 0.22em Umber; caption Space Mono 400 12px Umber. Buttons: height 52px, padding 0 26px, Space Mono 700 13px uppercase letter-spacing 0.1em. Subscribe: Redlink fill, Paper text. Secondary: 1px Ink/30% border, Ink text. Inputs: height 52px, 1px Rule border, Card fill, 16px Newsreader, focus border Redlink. Focus ring everywhere: 2px Redlink outline with 3px offset. Links: Redlink with the .link-draw underline.
- Radius: 6px on cards, the envelope, the form panel and buttons. 999px only for the category chips and read-time dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the welcome swap; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the sticky bar and archive hovers. Papery and unhurried.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and animate to rest over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 90ms.
- Masthead: the three words of the name rise with 120ms stagger; the Redlink period after the name stamps in with a 200ms scale settle.
- EnvelopeCard: on load the flap's shadow line draws, the stamp tilts in from -6deg to its resting -3deg, and the postmark circle strokes once (600ms, disabled under reduced motion).
- Subscribe form: invalid emails shake 3px once with the inline line ('Almost — that address is missing a piece'); on submit the button reads 'Subscribing…' for 500ms, then the form area swaps to the WelcomeCard with a 280ms --ease-io slide — 'Welcome aboard.' in Newsreader 500 26px, 'Issue No. 48 lands [CADENCE]. Until then, the archive is right below.' and 'Not you? Use a different address' returning to the form.
- StickyBar: appears pinned to the bottom (safe-area aware) 200ms after the hero form scrolls fully out, slides up 16px over 260ms; hides the moment subscribed or when the footer is in view; contains a compact form mirroring the hero's.
- Issue cards: hover lifts 3px and the drop cap ticks Redlink→Redlink Deep; clicking expands the preview to its full first section inline (a 340ms height animation) with a 'fold' line — issues open like letters, not modals.
- Archive rows: hover fills Wash and the issue number slides 6px into a Redlink tick; rows reveal with 40ms stagger.
- Quotes: cards reveal with a 4px rise; the opening quote marks stay static (restraint is the point).
- Links: .link-draw grows a 1px Redlink underline over 300ms on hover and focus-visible; ::selection is Redlink with Paper text.
- prefers-reduced-motion: reduce — disable stamp/postmark draws, staggers, slides (swap instantly), the sticky bar's slide (it appears in place); keep color and border hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
No photography, no stock, no external images — the page is typography plus drawn postal details. The EnvelopeCard's stamp, postmark and flap shadow are inline SVG; drop caps are CSS ::first-letter; the archive's read-time dots and the inbox checks are drawn. A faint paper-grain (repeating radial-gradient at 2% Ink) sits over the page. Icons: lucide-react only, stroke width 1.5.

## Tone
The letter's own voice: warm, precise, a little wry. Concrete beats abstract in every line; no 'join our community', no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/newsletter-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
