---
name: "Musician Website"
colors:
  stage_black: "#0C0A09"
  curtain: "#171412"
  smoke: "#221E1B"
  cream: "#F2E9DC"
  ash: "#9A8F85"
  amber_light: "#E8A13C"
  amber_deep: "#C4831F"
  wine: "#7C2D3E"
  rule_dark: "#2E2925"
typography:
  display_h1_h2_the_wordmark_track_and_date_titles_merch_names_oswald_tall_and_letterspaced: { family: "Oswald", weights: [400, 600] }
  text_and_ui_body_eyebrows_buttons_player_controls_captions_tabular_numerals_for_durations_and_prices: { family: "Work Sans", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px — dark rooms breathe. Type scale: H1 clamp(56px, 10vw, 132px) Oswald 600 uppercase letter-spacing 0.04em, line-height 0.95; H2 clamp(30px, 4vw, 48px) Oswald 600 uppercase; track/date titles Oswald 400 22px; lead Work Sans 400 17px / 1.7 Cream at 85%; body 15.5px / 1.7 (max-width 62ch); eyebrow Work Sans 600 11px uppercase letter-spacing 0.24em Ash; caption 12.5px Ash. Buttons: height 48px, Work Sans 600 13px uppercase letter-spacing 0.08em. Play CTA: Amber Light fill, Stage Black glyph. Secondary: 1px Cream/35% border, Cream text. Inputs: height 48px, Smoke fill, 1px Rule Dark border, focus Amber border. Focus ring everywhere: 2px Amber Light outline with 3px offset."
radius: "4px on cards, buttons, inputs, merch tiles and the player bar — sharp like a stage. 999px only for the play circle, volume knob and status pills."
---

# Musician Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Stage Black** `#0C0A09` — Page background throughout — the room with the lights off.
- **Curtain** `#171412` — Alternate section background (Release, Press), card wells, hover fill.
- **Smoke** `#221E1B` — Cards, the player bar, inputs, bag drawer surfaces.
- **Cream** `#F2E9DC` — Primary text: headlines, body, buttons on dark.
- **Ash** `#9A8F85` — Secondary text, captions, eyebrows, closed/sold-out states.
- **Amber Light** `#E8A13C` — The one accent: the play glyph, visualizer bars, seek fill, prices, focus ring, marquee bulbs.
- **Amber Deep** `#C4831F` — Amber hover and pressed.
- **Wine** `#7C2D3E` — Quiet second color: sold-out strikes, the vinyl label in drawn art, deep hover tint.
- **Rule Dark** `#2E2925` — 1px hairlines, card borders, input borders, tour row dividers.

## Typography
- **Display: H1, H2, the wordmark, track and date titles, merch names — Oswald tall and letterspaced** — Oswald (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, player controls, captions; tabular numerals for durations and prices** — Work Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px — dark rooms breathe. Type scale: H1 clamp(56px, 10vw, 132px) Oswald 600 uppercase letter-spacing 0.04em, line-height 0.95; H2 clamp(30px, 4vw, 48px) Oswald 600 uppercase; track/date titles Oswald 400 22px; lead Work Sans 400 17px / 1.7 Cream at 85%; body 15.5px / 1.7 (max-width 62ch); eyebrow Work Sans 600 11px uppercase letter-spacing 0.24em Ash; caption 12.5px Ash. Buttons: height 48px, Work Sans 600 13px uppercase letter-spacing 0.08em. Play CTA: Amber Light fill, Stage Black glyph. Secondary: 1px Cream/35% border, Cream text. Inputs: height 48px, Smoke fill, 1px Rule Dark border, focus Amber border. Focus ring everywhere: 2px Amber Light outline with 3px offset.
- Radius: 4px on cards, buttons, inputs, merch tiles and the player bar — sharp like a stage. 999px only for the play circle, volume knob and status pills.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the player states and drawer. Slow fades, club-tempo.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 750ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Hero: the stage photo darkens 5% and scales 1.05→1.0 over 2800ms; the artist name's words rise with 120ms stagger; an amber light-sweep crosses the name once (a gradient mask, 1200ms, off under reduced motion).
- Player: the play circle pulses gently while playing (scale 1→1.05, 1600ms loop, off under reduced motion or paused); the Visualizer's 24 bars animate from the analyser's real levels (requestAnimationFrame, 60fps, paused when audio paused); the seek fill tracks instantly; volume knob rotates on drag.
- Tour rows: hover fills Curtain and the status pill brightens; sold-out rows carry a Wine strike that draws on hover once.
- Merch: hover lifts 3px and the price ticks Amber; adding to the bag flies a small vinyl-glyph from the card to the bag button (600ms, once) and the count pops 1→1.3→1.
- Bag drawer: overlay Stage Black at 60% fades 250ms; the drawer slides from the right 400ms --ease-out; removing collapses rows 240ms.
- Mailing list: invalid shakes 4px with an inline hint; joining swaps to 'you''re on the list' (a drawn amber envelope stamp scaling in) and stays across reloads.
- Marquee: the tour ticker scrolls at 40px/s constant, pausing on hover, static under reduced motion.
- prefers-reduced-motion: reduce — no pulses, sweeps, flights or marquee; the visualizer shows a static equal-height row; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Stage-light photography, all six made for this template in one consistent style: deep blacks, one warm amber light source, haze and bokeh — stages, instruments, rooms; never a person (no faces, no hands, no silhouettes of the artist). No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 4px corners, no shadow; photos on Stage Black get a 1px Rule Dark outline. Captions in Work Sans 12.5px Ash. Drawn in code: the vinyl glyph, marquee bulbs, envelope stamp, play triangle and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Liner-note terse: short lines, lowercase confidence, one dry joke per section. No 'journey', no 'sonic landscape'.

---
— Prompt by VibeFather · https://vibefather.ai/t/musician-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
