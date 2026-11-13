---
name: "Online Course Sales Page"
colors:
  cream: "#FAF6EE"
  walnut: "#EFE6D5"
  card: "#FFFEFA"
  espresso: "#2E241C"
  roast: "#5C4E40"
  marigold: "#D98A1F"
  marigold_deep: "#B8710F"
  sage: "#6E7F5E"
  rule: "#E2D8C4"
typography:
  display_h1_h2_h3_module_titles_the_course_name_price_figures: { family: "Domine", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_accordion_lessons_faq_captions_tabular_numerals_for_run_times_and_figures: { family: "Assistant", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column with two-column hero and bio. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 68px) Domine 700, line-height 1.05; H2 clamp(30px, 4vw, 46px) Domine 700; H3 22px Domine 700; lead Assistant 400 18px / 1.7 Espresso at 90%; body 16px / 1.75 (max-width 66ch); eyebrow Assistant 700 12px uppercase letter-spacing 0.16em Roast, preceded by a 24px x 2px Marigold line; caption 13px Roast. Buttons: height 52px, Assistant 700 15px. Primary (Enroll): Marigold fill, Card text. Secondary: 1px Espresso/30% border, Espresso text. Inputs: none (no forms). Focus ring everywhere: 2px Marigold outline with 3px offset."
radius: "14px on cards, the video frame, accordion panels, buttons and the guarantee panel. 999px only for chips, the play circle, duration badge and module numbers."
---

# Online Course Sales Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FAF6EE` — Page background throughout.
- **Walnut** `#EFE6D5` — Alternate section background (Curriculum, Results, FAQ), hover fill, chips.
- **Card** `#FFFEFA` — Pricing card, accordion panels, result cards, the video frame.
- **Espresso** `#2E241C` — Headlines, body text, icon color, the play glyph.
- **Roast** `#5C4E40` — Secondary text, captions, eyebrows, run-time lines.
- **Marigold** `#D98A1F` — The one accent: Enroll buttons, the play affordance, module numbers, price figures, focus ring, checkmarks.
- **Marigold Deep** `#B8710F` — Button hover and pressed, open accordion's number fill.
- **Sage** `#6E7F5E` — Quiet second color: the guarantee's shield, 'included' ticks, sample-data captions.
- **Rule** `#E2D8C4` — 1px hairlines, card borders, accordion dividers, video frame border.

## Typography
- **Display: H1, H2, H3, module titles, the course name, price figures** — Domine (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, accordion lessons, FAQ, captions; tabular numerals for run times and figures** — Assistant (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column with two-column hero and bio. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 68px) Domine 700, line-height 1.05; H2 clamp(30px, 4vw, 46px) Domine 700; H3 22px Domine 700; lead Assistant 400 18px / 1.7 Espresso at 90%; body 16px / 1.75 (max-width 66ch); eyebrow Assistant 700 12px uppercase letter-spacing 0.16em Roast, preceded by a 24px x 2px Marigold line; caption 13px Roast. Buttons: height 52px, Assistant 700 15px. Primary (Enroll): Marigold fill, Card text. Secondary: 1px Espresso/30% border, Espresso text. Inputs: none (no forms). Focus ring everywhere: 2px Marigold outline with 3px offset.
- Radius: 14px on cards, the video frame, accordion panels, buttons and the guarantee panel. 999px only for chips, the play circle, duration badge and module numbers.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and accordions; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for plan toggles and the modal. Warm and steady — a page you scroll with coffee.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Hero: H1 rises from 20px with 130ms stagger; the video frame scales from 1.03 to 1.0 over 2000ms; the play circle pulses gently (scale 1→1.06, 2400ms loop, disabled under reduced motion); the duration badge fades last.
- PlayModal: overlay Espresso at 45% fades 200ms; the Card panel rises 16px over 280ms --ease-out; content — a drawn play glyph struck through, 'The demo has no video — the real course page would play one here.' and a one-line note from [INSTRUCTOR]. Escape/overlay click closes; focus returns to the play button.
- Curriculum accordion: one module open at a time (single-open); opening slides height 0→auto 340ms --ease-io; the module number fills Marigold; lesson rows stagger in 30ms; the Plus rotates 45 degrees into an X. Run-time totals count to the module sum on open.
- PlanToggle: the sliding thumb moves 220ms --ease-io; both price figures crossfade and the savings line swaps; the header Enroll button's price crossfades in sync (shared store).
- Result cards: the sample figures count up once on reveal (700ms); the '(sample)' caption never animates.
- Guarantee: the shield icon draws once (stroke-dashoffset) when scrolled into view.
- FAQ accordions: height and opacity over 300ms --ease-io; Plus rotates.
- Sticky header: transparent over the hero with Espresso text; after 40px, Cream at 95%, blur, 1px Rule border, 250ms; the Enroll button appears at the same moment (hidden while the hero's own CTA is visible).
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no pulse, scale, counts (final values), staggers or draws; keep color/border hovers. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, warm and tactile, all six made for this template in one consistent style: warm desk light, cream and walnut surfaces, tools and materials, fine grain. Never a person — desks, screens with abstract color work, notebooks (blank grids, no readable text), palettes and handmade props. No readable text, logos or brand marks anywhere (screen content is abstract shapes). Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Cream get a 1px Rule outline. Captions in Assistant 13px Roast. Drawn in code: the favicon, the play glyph and duration badge, module numbers, checkmarks, the guarantee shield, plan chips and dividers. Icons: lucide-react only, stroke width 1.75.

## Tone
Encouraging and specific, like the instructor's first email to a student: concrete outcomes ('you will ship a 60-second game'), zero income claims, one warm joke per screen.

---
— Prompt by VibeFather · https://vibefather.ai/t/online-course-sales-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
