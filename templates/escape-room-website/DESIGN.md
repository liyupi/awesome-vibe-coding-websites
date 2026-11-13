---
name: "Escape Room Website"
colors:
  ink: "#0B0A08"
  char: "#15120D"
  smoke: "#1F1B15"
  bone: "#EDE5D3"
  ash: "#9C9080"
  amber_glow: "#E2A13C"
  amber_deep: "#B87E23"
  rule: "#2B261E"
typography:
  display_wordmark_h1_h2_room_names_panel_titles_bebas_neue_always_uppercase_letter_spacing_0_16em_0_12em_on_room_cards_tight_line_height_1_05: { family: "Bebas Neue", weights: [400] }
  text_body_copy_teasers_nav_buttons_barlow_600_caps_at_0_12em_tracking_for_labels: { family: "Barlow", weights: [400, 500, 600] }
  mono_slot_times_prices_party_count_phone_number_the_room_index_under_the_hero: { family: "Space Mono", weights: [400, 700] }
spacing: "Sections separated by 112px on desktop, 72px on mobile; container 1200px with 32px side padding. Cards breathe: 32px internal padding, 32px grid gap. The hero is 92vh with copy vertically centered."
radius: "Sharp, like the business: 2px on cards, panels and images; 999px only on day chips and slot pills; CTAs are 2px rectangles."
---

# Escape Room Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0B0A08` — Page ground everywhere — the room with the lights off, carrying a 3% fine-grain noise texture.
- **Char** `#15120D` — Card wells, the booking summary panel, FAQ rows, the mobile menu overlay.
- **Smoke** `#1F1B15` — Hover surfaces, chip fills, stepper buttons.
- **Bone** `#EDE5D3` — Primary text: headlines, body, nav, buttons on dark.
- **Ash** `#9C9080` — Secondary text: eyebrows, teasers, captions, unselected slots.
- **Amber Glow** `#E2A13C` — The single accent: CTA fill, lock icons, prices, selected chips, glow pulse, focus ring.
- **Amber Deep** `#B87E23` — Amber hover and pressed state.
- **Rule** `#2B261E` — 1px hairlines: card borders, header bottom, FAQ dividers, stepper outlines.

## Typography
- **Display — wordmark, H1, H2, room names, panel titles. Bebas Neue, always uppercase, letter-spacing 0.16em (0.12em on room cards), tight line-height 1.05** — Bebas Neue (OFL), weights 400. Self-host the font files.
- **Text — body copy, teasers, nav, buttons (Barlow 600 caps at 0.12em tracking for labels)** — Barlow (OFL), weights 400/500/600. Self-host the font files.
- **Mono — slot times, prices, party count, phone number, the room index under the hero** — Space Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 112px on desktop, 72px on mobile; container 1200px with 32px side padding. Cards breathe: 32px internal padding, 32px grid gap. The hero is 92vh with copy vertically centered.
- Radius: Sharp, like the business: 2px on cards, panels and images; 999px only on day chips and slot pills; CTAs are 2px rectangles.

## Motion
- Slow is the point: reveals fade and rise 24px over 480ms with 80-90ms stagger; nothing snaps.
- The amber accent breathes — CTA and wordmark underline run a 6s text-shadow/box-shadow pulse (opacity 1.0 to 1.15) that stops entirely under prefers-reduced-motion.
- Dust motes: 60 amber particles drift up-left across the hero at 3% opacity; reduced-motion draws one static frame.
- Hover: room photos brighten from 0.9 to 1.05 over 300ms; chips scale to 0.96 on press; the booking total crossfades 180ms when the party changes.
- Accordion: 220ms height ease with a 180deg ChevronDown rotation.

## Imagery
One noir shoot: every photograph is a room or prop in deep shadow lit by a single warm amber practical light, fine film grain, no people, no readable text, no logos. The hero shows the vault room wide; room cards show that room's key prop; the team section shows the briefing lounge. Never brighten beyond the grade.

## Tone
Film-noir confident: short declarative lines, a little dry humor, never campy. The rooms whisper; the amber glow does the shouting.

---
— Prompt by VibeFather · https://vibefather.ai/t/escape-room-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
