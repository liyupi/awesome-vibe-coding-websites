---
name: "Boutique Hotel Website"
colors:
  paper: "#F4EFE6"
  shell: "#EAE3D6"
  ink: "#1F2A30"
  slate: "#46565E"
  mist: "#8B979B"
  rule: "#D3CABB"
  rust: "#B5532E"
  rust_deep: "#8F3F21"
  sea: "#DCE4E3"
  night: "#172126"
  kelp: "#56634B"
typography:
  display_h1_desktop_88px_line_height_0_98_tracking_0_01em_mobile_48px_h2_desktop_56px_1_04_mobile_36px_h3_room_and_section_names_32px_1_1_pull_quotes_and_review_quotes_italic_400_30px_desktop_24px_mobile: { family: "Cormorant Garamond", weights: [400, 500, 600] }
  text_body_17px_1_65_mobile_16px_ui_15px_weight_500_buttons_15px_weight_600_small_caps_section_labels_12px_weight_600_uppercase_tracking_0_18em_in_rust: { family: "Hanken Grotesk", weights: [400, 500, 600] }
  mono_rates_sizes_in_the_spec_tables_opening_hours_distances_map_pin_numbers_and_the_booking_reference_code_14px_weight_400_500_tabular_figures: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Content max-width 1240px with 32px side padding on desktop and 20px on mobile; 12-column grid with 24px gutters. Section vertical padding 128px desktop / 80px mobile. Stack headline to body 24px, body to CTA 32px. Hairline rules (1px Rule) separate sections inside the same background; labels sit 16px above headlines."
radius: "Mostly square and editorial: photographs 0px, cards and table containers 2px, inputs and calendar days 2px, buttons 999px pill, filter chips 999px pill, drawer 0px on desktop and 16px top corners on mobile bottom sheet."
---

# Boutique Hotel Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EFE6` — Page background, header after scroll, drawer and calendar background
- **Shell** `#EAE3D6` — Alternate section background (rooms preview, offers, FAQ), input fields, calendar range fill
- **Ink** `#1F2A30` — Headlines and body text, primary outline buttons, selected calendar day fill
- **Slate** `#46565E` — Secondary text, captions, table values
- **Mist** `#8B979B` — Muted text, disabled and unavailable calendar days, placeholder text
- **Rule** `#D3CABB` — 1px hairline rules, card borders, table lines, accordion dividers
- **Rust** `#B5532E` — The only accent: primary CTA fill, small-caps labels, map hotel pin, active filter chip, focus ring
- **Rust deep** `#8F3F21` — Primary CTA hover and pressed state
- **Sea** `#DCE4E3` — Sea fill and contour lines in the SVG maps
- **Night** `#172126` — Footer background, photo gradient overlays (at 0-70% opacity)
- **Kelp** `#56634B` — 'Available' status dot and text in the room picker

## Typography
- **Display: H1 (desktop 88px / line-height 0.98 / tracking -0.01em, mobile 48px), H2 (desktop 56px / 1.04, mobile 36px), H3 room and section names (32px / 1.1), pull quotes and review quotes (italic 400, 30px desktop / 24px mobile)** — Cormorant Garamond (OFL), weights 400/500/600. Self-host the font files.
- **Text: body 17px / 1.65 (mobile 16px), UI 15px weight 500, buttons 15px weight 600, small-caps section labels 12px weight 600 uppercase tracking 0.18em in Rust** — Hanken Grotesk (OFL), weights 400/500/600. Self-host the font files.
- **Mono: rates, sizes in the spec tables, opening hours, distances, map pin numbers and the booking reference code, 14px weight 400/500, tabular figures** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Content max-width 1240px with 32px side padding on desktop and 20px on mobile; 12-column grid with 24px gutters. Section vertical padding 128px desktop / 80px mobile. Stack headline to body 24px, body to CTA 32px. Hairline rules (1px Rule) separate sections inside the same background; labels sit 16px above headlines.
- Radius: Mostly square and editorial: photographs 0px, cards and table containers 2px, inputs and calendar days 2px, buttons 999px pill, filter chips 999px pill, drawer 0px on desktop and 16px top corners on mobile bottom sheet.

## Motion
- Reveal: section content fades and rises (opacity 0 to 1, y 24px to 0, duration 0.9s, ease [0.22, 1, 0.36, 1]) once when 30% in view, via motion's whileInView with viewport { once: true, amount: 0.3 }. Card groups stagger children by 0.08s.
- Hero photo: on load scales from 1.08 to 1.0 over 1.6s with ease [0.22, 1, 0.36, 1]; the headline and booking bar reveal 0.3s and 0.5s after.
- PhotoBand: full-bleed photo inside overflow-hidden wrapper; useScroll on the wrapper (offset ['start end','end start']) maps progress 0 to 1 onto image scale 1.12 to 1.0 and y -4% to 4%.
- Header: transparent with paper text over the hero; after 80px of scroll it transitions (300ms) to Paper background, Ink text and a 1px Rule bottom border.
- Image cards: on hover the photo scales to 1.04 over 600ms and the 'View room' link's arrow shifts 4px right.
- Accordion: height and opacity animate over 0.35s; the plus icon rotates 45 degrees.
- BookingDrawer: desktop slides in from the right (x 100% to 0, 0.45s) over a Night 50% backdrop; mobile slides up as a bottom sheet (y 100% to 0). Escape key, backdrop click and the close button dismiss it; focus is trapped inside while open and the body does not scroll.
- Calendar: selected range fills with Shell, start and end days fill Ink with Paper text; hovering a day after choosing check-in previews the range. Price summary numbers cross-fade (0.2s) when they change.
- prefers-reduced-motion: disable all transforms and scroll-linked effects (use useReducedMotion), keep content visible immediately; drawer appears without sliding.

## Imagery
Real photographs only for the coast and the house; everything else is drawn in code. Coast: five public-domain / CC0 photographs of granite cliffs, a sea stack, tide pools and a cove (listed in Assets). House: six matching interior photographs generated for this template (three room types, dining room, breakfast, bar) in a muted palette of off-white, oak, slate blue and rust. Photographs are always full-bleed or edge-to-edge inside their grid columns, never with drop shadows or rounded corners. Captions in 13px Slate sit 12px below images with a mono index ('01', '02'). No people's faces as hero images. Maps, the wordmark mark, the favicon and dividers are SVG. Icons are Lucide at 18px, stroke 1.5, in Slate.

## Tone
Calm, specific and warm. Short declarative sentences, concrete facts (sizes, times, distances, prices), dry understatement instead of superlatives. Never 'luxury', 'unforgettable', 'nestled' or 'hidden gem'.

---
— Prompt by VibeFather · https://vibefather.ai/t/boutique-hotel-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
