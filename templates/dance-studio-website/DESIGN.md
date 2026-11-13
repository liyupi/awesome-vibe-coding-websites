---
name: "Dance Studio Website"
colors:
  ink: "#17111C"
  plum: "#281A32"
  raised: "#382443"
  paper: "#F4EEE5"
  white: "#FFFCF7"
  coral: "#FF7452"
  coral_deep: "#E95C3B"
  lilac: "#C7B9FF"
  muted: "#B9AFBF"
  rule: "#4B3954"
typography:
  display_wordmark_h1_h2_large_prices_program_names_and_countdown_numerals_uppercase_with_tight_line_spacing: { family: "Archivo Black", weights: [400] }
  text_and_ui_body_navigation_buttons_class_rows_biographies_form_labels_and_faq: { family: "Manrope", weights: [400, 500, 600, 700, 800] }
  mono_eyebrows_section_indices_schedule_times_age_and_level_metadata_spots_reservation_reference_and_small_print: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 40px desktop, 28px tablet and 20px under 640px. Twelve-column grid with 24px gaps. Section padding 112px desktop, 80px tablet and 64px mobile. Eyebrow: IBM Plex Mono 500 12px uppercase, letter-spacing 0.14em, with a 24px Coral line. H1: Archivo Black clamp(58px, 8.6vw, 124px), line-height 0.9, letter-spacing -0.035em. H2: Archivo Black clamp(42px, 5.8vw, 78px), line-height 0.94, letter-spacing -0.025em. H3: Manrope 800 24px / 1.2. Lead: Manrope 500 19px / 1.6, max-width 56ch. Body: Manrope 400 16px / 1.7, max-width 66ch. Buttons: minimum 48px high, pill shaped, padding 0 24px, Manrope 800 13px uppercase with 0.06em tracking. Primary is Coral with Ink text; secondary is 1px currentColor with transparent fill. Inputs are 52px high with 16px text. Every interactive element gets a 2px Coral focus outline with 3px offset."
radius: "24px on large photographic and content panels, 16px on class rows and small cards, 12px on inputs, and 999px only for buttons, chips, pills and status dots. Avoid nesting rounded cards inside identical rounded cards."
---

# Dance Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#17111C` — Primary page background, dark text on Paper and Coral, footer and dialog backdrop.
- **Plum** `#281A32` — Hero gradient, alternate dark sections, program cards and mobile menu.
- **Raised** `#382443` — Class rows, form fields, drawer and elevated dark surfaces.
- **Paper** `#F4EEE5` — Light sections, trial form panel, pricing background and primary text on dark.
- **White** `#FFFCF7` — Bright headlines, portrait-card text and selected highlights.
- **Coral** `#FF7452` — Primary action fill, active filters, countdown accents, focus ring and small editorial marks; always pair with Ink text.
- **Coral Deep** `#E95C3B` — Hover and pressed state for Coral buttons and filters.
- **Lilac** `#C7B9FF` — Secondary accent for level pills, recital details, outlined type and links on dark; pair with Ink when used as a fill.
- **Muted** `#B9AFBF` — Secondary text, metadata and captions on Ink or Plum; on Paper use Ink at 68% instead.
- **Rule** `#4B3954` — Dark-section borders and separators; light-section rules use Ink at 16%.

## Typography
- **Display: wordmark, H1, H2, large prices, program names and countdown numerals; uppercase with tight line spacing** — Archivo Black (OFL), weights 400. Self-host the font files.
- **Text and UI: body, navigation, buttons, class rows, biographies, form labels and FAQ** — Manrope (OFL), weights 400/500/600/700/800. Self-host the font files.
- **Mono: eyebrows, section indices, schedule times, age and level metadata, spots, reservation reference and small print** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 40px desktop, 28px tablet and 20px under 640px. Twelve-column grid with 24px gaps. Section padding 112px desktop, 80px tablet and 64px mobile. Eyebrow: IBM Plex Mono 500 12px uppercase, letter-spacing 0.14em, with a 24px Coral line. H1: Archivo Black clamp(58px, 8.6vw, 124px), line-height 0.9, letter-spacing -0.035em. H2: Archivo Black clamp(42px, 5.8vw, 78px), line-height 0.94, letter-spacing -0.025em. H3: Manrope 800 24px / 1.2. Lead: Manrope 500 19px / 1.6, max-width 56ch. Body: Manrope 400 16px / 1.7, max-width 66ch. Buttons: minimum 48px high, pill shaped, padding 0 24px, Manrope 800 13px uppercase with 0.06em tracking. Primary is Coral with Ink text; secondary is 1px currentColor with transparent fill. Inputs are 52px high with 16px text. Every interactive element gets a 2px Coral focus outline with 3px offset.
- Radius: 24px on large photographic and content panels, 16px on class rows and small cards, 12px on inputs, and 999px only for buttons, chips, pills and status dots. Avoid nesting rounded cards inside identical rounded cards.

## Motion
- Use --ease-out cubic-bezier(0.22, 1, 0.36, 1) for photographic and content reveals and --ease-beat cubic-bezier(0.76, 0, 0.24, 1) for masks, rail transitions and drawer movement.
- MaskedHeading wraps each supplied line in overflow-hidden and raises its inner span from translateY(110%) to 0 over 720ms --ease-beat, with 80ms between lines. Trigger H2s once at 25% visibility.
- Reveal moves section content from opacity 0 and translateY(22px) to rest over 650ms --ease-out when 15% visible; grids stagger children by 70ms. Never hide content permanently if IntersectionObserver is unavailable.
- The hero photograph scales from 1.07 to 1 over 1600ms on load and translates no more than 5% vertically as the hero leaves the viewport. The headline and actions enter after 120ms.
- ProgramRail translates two identical tracks linearly by -50% over 32s. Pause on hover and focus-within; expose one visually hidden static list to screen readers.
- Filter updates use Motion AnimatePresence with opacity and 10px vertical movement over 180ms; preserve layout stability and announce the result count with aria-live polite.
- Recital digits crossfade and move 8px on value changes only; seconds do not cause layout shift. Buttons translate -2px on hover and return on press. Portraits scale to 1.035 inside their crop on hover.
- The class drawer enters from the right over 360ms --ease-beat while its backdrop fades in over 180ms. Trial confirmation replaces the form with a 12px rise and 250ms fade; errors reveal without pushing the submit button off-screen.
- prefers-reduced-motion: render all content at rest, stop the rail, remove parallax, scaling, stagger and digit movement, disable smooth scrolling, and use only a 100ms opacity change for menus and dialogs. Countdown values still update accessibly without animation.

## Imagery
Use only the six generated editorial dance photographs listed under Assets. They form one shoot: documentary movement photography, deep aubergine shadows, warm coral rim light, soft lilac fill, unbranded dark rehearsal clothes, subtle film grain and clean studio architecture. The hero is a wide ensemble scene with generous negative space, never a close-up face. The class and recital photographs show full-body movement with faces turned away, obscured by pose or naturally motion-softened. The three instructor images are professional portraits of explicitly fictional adults, not resembling any real individual, with varied age and ethnicity and consistent chest-up framing. Do not substitute real dancers, celebrities, stock portraits, initials-only instructor cards or unrelated gym photos. Apply object-fit cover and the listed object-position; retain natural skin texture. All other graphics are code-drawn: the wordmark is text, the favicon uses two offset beat bars, the program rail and pills are CSS, availability tracks are divs, and the trial-pass perforation is CSS. Icons come only from lucide-react at 1.75px stroke width. No readable signage, clothing logos or brand marks in any image.

## Tone
Energetic, encouraging and precise. Short declarative sentences, concrete times, ages, durations and prices. Celebrate effort rather than body image or competition. No dance clichés, no promises of fame, no exclamation marks, no pressure to buy.

---
— Prompt by VibeFather · https://vibefather.ai/t/dance-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
