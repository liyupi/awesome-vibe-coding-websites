---
name: "Movie Theater Showtimes Website"
colors:
  house: "#150A0E"
  velvet: "#5E1520"
  ticket: "#C13A47"
  cream: "#F2E7CE"
  bulb: "#FFD98A"
  dim: "#6B5335"
  line: "#3A1B22"
typography:
  display_marquee_and_film_titles: { family: "Bungee", weights: [400] }
  body_program_text: { family: "Karla", weights: [400, 500, 700] }
  mono_showtimes_seats_tallies: { family: "Courier Prime", weights: [400, 700] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; poster grid gap-8; cards p-5 to p-8."
radius: "Posters and panels rounded-md (6px); membership cards rounded-xl; day chips and time pills rounded-full."
---

# Movie Theater Showtimes Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **house** `#150A0E` — Page ground, near-black with a plum cast
- **velvet** `#5E1520` — Curtains, sign slab, membership panels
- **ticket** `#C13A47` — Primary buttons, active day chips, links on hover
- **cream** `#F2E7CE` — Program text, headlines on dark
- **bulb** `#FFD98A` — Lit marquee bulbs, selected seats, highlights
- **dim** `#6B5335` — Unlit bulbs, sign borders, quiet rules
- **line** `#3A1B22` — Hairlines, card borders

## Typography
- **Display / marquee and film titles** — Bungee (OFL), weights 400. Self-host the font files.
- **Body / program text** — Karla (OFL), weights 400/500/700. Self-host the font files.
- **Mono / showtimes, seats, tallies** — Courier Prime (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; poster grid gap-8; cards p-5 to p-8.
- Radius: Posters and panels rounded-md (6px); membership cards rounded-xl; day chips and time pills rounded-full.

## Motion
- Marquee bulbs twinkle gently: each dot alternates between bulb and dim over 2.6s with a 120ms stagger around the frame; opacity only (1 to 0.45), no scale, no strobe.
- The now-showing ticker under the marquee scrolls film titles left on a 40s loop (CSS translateX keyframes with duplicated content for a seamless wrap).
- Scroll reveals: sections fade up 20px over 400ms with a 60ms stagger (Motion whileInView, once).
- Seat interaction: hover lifts a seat 2px, press scales to 0.9, selection fills bulb over 150ms; the tally recomputes.
- Film grain is static at 5% and never animates; a hover on a film card raises its border to dim and scales the poster to 1.02 over 300ms.
- prefers-reduced-motion: bulbs hold a static 70%-lit pattern, the ticker stops into a wrapped static row, reveals appear instantly; seat selection still changes state without transforms.

## Imagery
None photographic. Everything is drawn in code: velvet curtain gradients (layered linear-gradients with soft fold shadows), spotlight cones (low-opacity conic gradients), bulb-dot marquee frames, six geometric SVG film posters, the auditorium seat map and its screen arc, and a 5% film-grain overlay that unifies the page.

## Tone
Warm and a little theatrical, like a well-loved usher: short marquee lines, program-note details, no corporate polish.

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-theater-showtimes-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
