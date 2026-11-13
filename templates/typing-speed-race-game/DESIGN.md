---
name: "Typing Speed Race Game"
colors:
  night_ink: "#080B18"
  track_blue: "#111A33"
  electric_cyan: "#37E6F5"
  signal_coral: "#FF536B"
  lap_gold: "#FFC857"
  pit_white: "#F4F7FF"
  telemetry_gray: "#A8B3CF"
  lane_grid: "#2A3858"
typography:
  display_controls_and_section_titles: { family: "Chakra Petch", weights: [500, 600, 700] }
  typing_passage_timers_statistics_and_data_labels: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Use an 8px base unit. The desktop content maximum is 1440px with 32px side gutters and 24px panel gaps; mobile gutters are 16px with 12px gaps. Keep the header 64px high on desktop and 56px on mobile. Cockpit panels use 24px desktop padding and 16px mobile padding. Lower sections have 64px desktop and 40px mobile vertical spacing."
radius: "Use clipped 14px corners on the two main cockpit panels, 6px on buttons and difficulty tabs, and 2px on stat cells. Use fully rounded shapes only for tiny live-status dots and the current-position marker, not for generic floating cards."
---

# Typing Speed Race Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night Ink** `#080B18` — Page background and deepest track areas.
- **Track Blue** `#111A33` — Console and canvas panel surfaces.
- **Electric Cyan** `#37E6F5` — Player car, correct characters, primary controls, and live race position.
- **Signal Coral** `#FF536B` — Error characters, countdown lights, curb stripes, and the strong secondary hero color.
- **Lap Gold** `#FFC857` — Ghost car, personal-best marks, and finish-line accents.
- **Pit White** `#F4F7FF` — Headings and primary body copy.
- **Telemetry Gray** `#A8B3CF` — Secondary copy and upcoming characters; maintain AA contrast on Night Ink and Track Blue.
- **Lane Grid** `#2A3858` — Borders, lane marks, table rules, and inactive control outlines.

## Typography
- **Display, controls, and section titles** — Chakra Petch (OFL), weights 500/600/700. Self-host the font files.
- **Typing passage, timers, statistics, and data labels** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. The desktop content maximum is 1440px with 32px side gutters and 24px panel gaps; mobile gutters are 16px with 12px gaps. Keep the header 64px high on desktop and 56px on mobile. Cockpit panels use 24px desktop padding and 16px mobile padding. Lower sections have 64px desktop and 40px mobile vertical spacing.
- Radius: Use clipped 14px corners on the two main cockpit panels, 6px on buttons and difficulty tabs, and 2px on stat cells. Use fully rounded shapes only for tiny live-status dots and the current-position marker, not for generic floating cards.

## Motion
- On Start race, show a centered 3, 2, 1, GO sequence at 650ms per step with a 160ms opacity and scale transition; input remains disabled until GO.
- Move cars strictly from race progress. Smooth visual interpolation may take 100ms, but it must never change the underlying progress or result. The ghost is calculated from active elapsed time, not random animation.
- Pulse the current-character caret every 800ms and give a newly incorrect character one 120ms horizontal nudge. Never shake the whole console.
- Reveal the inline results panel with a 220ms opacity and 12px vertical transition, then move focus to its heading. Do not use an unsolicited modal.
- With prefers-reduced-motion, remove countdown scaling, caret pulsing, nudges, smooth scrolling, and interpolation. Update essential car positions without decorative tweening and show all state changes immediately.

## Imagery
All visuals are original and drawn in code. The hero canvas shows a top-down two-lane straight circuit at night, cyan and coral curb lights, a checkered finish stripe, and two unbranded geometric cars made from simple trapezoids, rectangles, and small circular wheels. Use layered lane markers and tiny pit-light details to make the scene rich at first glance. The player's car is Electric Cyan and the ghost is Lap Gold. Do not use photographs, vehicle-brand silhouettes, mascots, people, generated images, or downloaded game art.

## Tone
Focused, energetic, and precise, like a friendly race-control console. Use short motorsport language without aggression, branded sponsorship, fake online competition, or exaggerated claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/typing-speed-race-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
