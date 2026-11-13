---
name: "Boxing and Strength Gym Website"
colors:
  ink: "#0C0C0B"
  coal: "#151513"
  concrete: "#232320"
  slab: "#36352F"
  dust: "#8E8B82"
  chalk: "#EDEAE3"
  signal: "#FF4F1F"
  signal_deep: "#D63A0F"
typography:
  display_h1_h2_h3_wordmark_prices_counters_monograms_session_times_class_names_on_cards_family_anton_always_uppercase: { family: "Anton", weights: [400] }
  text_body_nav_buttons_chips_form_fields_faq_quotes_family_archivo_variable_buttons_and_chips_use_weight_600_700_with_uppercase_and_0_06em_tracking: { family: "Archivo", weights: [400, 500, 600, 700] }
  mono_eyebrows_section_indexes_stat_labels_spots_and_capacity_labels_per_class_math_references_hours_table_family_jetbrains_mono_uppercase_letter_spacing_0_1em: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1360px, centered, side padding 40px desktop, 24px tablet, 20px under 640px. 12-column grid, gap 24px. Section padding 128px vertical desktop, 88px under 768px. SectionHead on every home section: a 1px Slab rule across the container, 20px below it a row with the mono index ('01', JetBrains Mono 500 13px, Signal), the mono label next to it ('CLASSES', 13px, letter-spacing 0.16em, Chalk 70%) and an optional right-aligned mono count; H2 margin-top 40px. Type scale: H1 Anton clamp(76px, 13.5vw, 212px) line-height 0.86; H2 Anton clamp(52px, 7.4vw, 120px) line-height 0.9, each H2 written as two lines with the second in Signal; H3 Anton 40px line-height 1; body Archivo 400 17px/1.6 (16px under 768px), max-width 62ch; lead Archivo 400 20px/1.5 Chalk 85%. Buttons: height 54px, padding 0 26px, Archivo 700 14px uppercase, letter-spacing 0.08em; primary = Signal background, Ink text, on hover background Signal Deep, transform translate(-2px, -2px) and a hard Chalk shadow box-shadow 4px 4px 0 #EDEAE3, back to no shadow and no offset when pressed; secondary = 1.5px Chalk border, Chalk text, hover Chalk background with Ink text. Focus ring everywhere: 2px Signal outline, offset 3px."
radius: "Square corners everywhere (0): cards, photos, buttons, chips, inputs, drawer, tickets. The only round shapes are the pulsing status dots and the map marker ring."
---

# Boxing and Strength Gym Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0C0C0B` — Page background, header when scrolled, drawer and form card background, text on Signal.
- **Coal** `#151513` — Alternate section background (marquee, pricing, visit band, house rules), card backgrounds, inputs, full sessions.
- **Concrete** `#232320` — Raised panels: today strip, trial section, timetable session cells, monogram tiles, map blocks.
- **Slab** `#36352F` — All 1px borders and rules, empty intensity bars, capacity track, dashed empty cells.
- **Dust** `#8E8B82` — Muted text: labels, captions, coach names in cells, small print, 'FULL' states.
- **Chalk** `#EDEAE3` — Primary text and headlines; body text uses Chalk at 80%.
- **Signal** `#FF4F1F` — The only accent (blood orange): primary buttons, active chips and tabs, second headline lines, intensity bars, tape stripes, error states, focus rings, today markers.
- **Signal Deep** `#D63A0F` — Hover and pressed state of Signal buttons and chips.

## Typography
- **Display: H1, H2, H3, wordmark, prices, counters, monograms, session times, class names on cards (family 'Anton'). Always uppercase.** — Anton (OFL), weights 400. Self-host the font files.
- **Text: body, nav, buttons, chips, form fields, FAQ, quotes (family 'Archivo Variable'; buttons and chips use weight 600–700 with uppercase and 0.06em tracking).** — Archivo (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono: eyebrows, section indexes, stat labels, spots and capacity labels, per-class math, references, hours table (family 'JetBrains Mono', uppercase, letter-spacing 0.1em).** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1360px, centered, side padding 40px desktop, 24px tablet, 20px under 640px. 12-column grid, gap 24px. Section padding 128px vertical desktop, 88px under 768px. SectionHead on every home section: a 1px Slab rule across the container, 20px below it a row with the mono index ('01', JetBrains Mono 500 13px, Signal), the mono label next to it ('CLASSES', 13px, letter-spacing 0.16em, Chalk 70%) and an optional right-aligned mono count; H2 margin-top 40px. Type scale: H1 Anton clamp(76px, 13.5vw, 212px) line-height 0.86; H2 Anton clamp(52px, 7.4vw, 120px) line-height 0.9, each H2 written as two lines with the second in Signal; H3 Anton 40px line-height 1; body Archivo 400 17px/1.6 (16px under 768px), max-width 62ch; lead Archivo 400 20px/1.5 Chalk 85%. Buttons: height 54px, padding 0 26px, Archivo 700 14px uppercase, letter-spacing 0.08em; primary = Signal background, Ink text, on hover background Signal Deep, transform translate(-2px, -2px) and a hard Chalk shadow box-shadow 4px 4px 0 #EDEAE3, back to no shadow and no offset when pressed; secondary = 1.5px Chalk border, Chalk text, hover Chalk background with Ink text. Focus ring everywhere: 2px Signal outline, offset 3px.
- Radius: Square corners everywhere (0): cards, photos, buttons, chips, inputs, drawer, tickets. The only round shapes are the pulsing status dots and the map marker ring.

## Motion
- Easings: --ease-cut cubic-bezier(0.7, 0, 0.2, 1) for masks, wipes and swaps (fast, hard); --ease-out cubic-bezier(0.2, 0.7, 0.2, 1) for photo scales.
- Headline mask (Mask.tsx): H1 and H2 lines are arrays in content.ts; each line sits in an overflow-hidden block and its inner span rises from translateY(110%) to 0 over 700ms --ease-cut with 80ms stagger, triggered when the heading is 30% visible (Motion whileInView, once).
- Hard-cut reveal (.reveal-cut / Reveal.tsx): blocks start with clip-path inset(0 0 100% 0) and translateY(24px) and animate to inset(0) and 0 over 560ms --ease-cut when 15% visible, once; lists stagger by index.
- Stripe wipe: every Tape divider wipes in from the left on enter (clip-path inset(0 100% 0 0) → inset(0), 600ms --ease-cut).
- Counter ticks (useCountUp, requestAnimationFrame): numeric parts of hero stats and results go from 0 to their value over 1200ms with easeOutExpo when 40% visible, once; thousands separators and suffixes ('%', '+') stay in place; tabular-nums so widths do not jump.
- Marquee: linear translateX(0 → -50%) in 38s, pause on hover.
- Photo hover: scale 1 → 1.05 over 500ms --ease-out inside an overflow-hidden frame. Hero photo scales 1.08 → 1 on load.
- Pricing roll, drawer spring, tab slide and ticket drop exactly as described in their sections.
- prefers-reduced-motion: reduce — disable masks, reveals, wipes, parallax, photo scales, marquee, pulses and counters (show final values); drawer and menus open instantly with a 120ms fade; smooth scrolling off. Color hover changes stay.

## Imagery
Real photographs only, never illustrations: six photos made for this template (warehouse gym floor with heavy bags, ring corner, hand wraps, swinging heavy bag, kettlebells with chalk, gloves and rope on a bench) plus two public-domain / CC0 photos (vintage black boxing gloves, coiled heavy ropes). No faces, no people beyond hands and forearms, no brand names. Every photo gets the same duotone grade through DuoPhoto.tsx: a wrapper with background #0C0C0B; the img has filter grayscale(1) contrast(1.3) brightness(0.78); a ::before overlay with background #FF4F1F, mix-blend-mode color, opacity 0.22 (Signal tint in the mid-tones); and the .grain overlay: an inline SVG data-URI with feTurbulence (type fractalNoise, baseFrequency 0.85, numOctaves 3, stitchTiles stitch) at 220px tile size, mix-blend-mode overlay, opacity 0.22, pointer-events none. object-fit cover everywhere. Coaches are typographic monograms. Everything else is drawn in code: tape stripes (repeating-linear-gradient -45deg Signal/Ink 16px), ticket notches, intensity bars, the CSS ✕ separators, the block map and the favicon. Icons from lucide-react only, stroke-width 2, sizes 14–20px.

## Tone
Short, direct and warm under the grit, like a good coach: imperative headlines in caps, plain sentences in the body, concrete numbers (times, prices, kilos, capacities), no hype words, no fight-promo bravado, no exclamation marks. Never mocking beginners.

---
— Prompt by VibeFather · https://vibefather.ai/t/boxing-and-strength-gym-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
