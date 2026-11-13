---
name: "Interactive 3D Globe Travel Journal"
colors:
  ink: "#0A1220"
  navy: "#0F1B2D"
  panel: "#131F33"
  hairline: "#24324A"
  chalk: "#E8E2D4"
  muted: "#8E9AAE"
  amber: "#F2A541"
  amber_soft: "#FFD08A"
  atmosphere: "#7FA8D9"
  night: "#050A14"
typography:
  display_hero_h1_city_names_section_titles_wordmark_italic_hero_300_at_clamp_44px_6_2vw_96px_line_height_1_02_letter_spacing_0_02em_city_names_400_at_56px_desktop_38px_mobile_italics_carry_emphasis_words_in_amber: { family: "Fraunces", weights: [300, 400, 600] }
  text_body_17px_1_7_desktop_and_16px_mobile_ui_labels_14px_600_buttons_15px_600: { family: "Manrope", weights: [400, 500, 600] }
  mono_coordinates_trip_day_labels_kickers_stat_units_legend_chips_12px_uppercase_with_letter_spacing_0_12em: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base. Page container max-width 1360px with 40px side padding (20px mobile). Sections 120-140px vertical padding on desktop, 72-88px on mobile. Journal entries min-height 92vh desktop, 80vh mobile. Text measure 60-66ch."
radius: "Buttons and chips 999px; cards, dialog, thumbnails and portrait 10px (thumbnails 6px); inputs 8px. Everything else square."
---

# Interactive 3D Globe Travel Journal — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0A1220` — Page background and renderer clear color
- **Navy** `#0F1B2D` — Ocean sphere day side, header when scrolled (at 78% with backdrop blur 14px)
- **Panel** `#131F33` — Story card, entry cards, stats band, inputs
- **Hairline** `#24324A` — 1px rules, card borders, inactive legend chips, flat-map graticule
- **Chalk** `#E8E2D4` — Land dots, headlines and body text
- **Muted** `#8E9AAE` — Secondary text, captions, coordinates, inactive pins
- **Amber** `#F2A541` — The only accent: route arcs, pins, pulse rings, primary button, active legend chip, focus rings
- **Amber Soft** `#FFD08A` — Arc light head, night-side city lights, hover on amber elements
- **Atmosphere** `#7FA8D9` — Fresnel rim glow around the globe (additive, max 35% intensity)
- **Night** `#050A14` — Night side of the ocean sphere and the flat-map night polygon (at 55%)

## Typography
- **Display: hero H1, city names, section titles, wordmark (italic). Hero 300 at clamp(44px, 6.2vw, 96px), line-height 1.02, letter-spacing -0.02em; city names 400 at 56px desktop / 38px mobile; italics carry emphasis words in Amber** — Fraunces (OFL), weights 300/400/600. Self-host the font files.
- **Text: body 17px/1.7 desktop and 16px mobile, UI labels 14px 600, buttons 15px 600** — Manrope (OFL), weights 400/500/600. Self-host the font files.
- **Mono: coordinates, trip-day labels, kickers, stat units, legend chips; 12px uppercase with letter-spacing 0.12em** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Page container max-width 1360px with 40px side padding (20px mobile). Sections 120-140px vertical padding on desktop, 72-88px on mobile. Journal entries min-height 92vh desktop, 80vh mobile. Text measure 60-66ch.
- Radius: Buttons and chips 999px; cards, dialog, thumbnails and portrait 10px (thumbnails 6px); inputs 8px. Everything else square.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 1, 0.36, 1) for reveals and cards; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for globe turns. Motion is slow and cinematic; nothing bounces.
- Hero intro: the globe fades in from opacity 0 and scale 0.92 to 1 over 1800ms; land dots appear in a latitude sweep (shader uniform uReveal 0 to 1 over 2200ms, dots below the threshold have alpha 0); H1 lines rise 24px with 120ms stagger; the scroll cue's chevron bobs 6px every 2.4s.
- Idle spin: in the hero the globe rotates around Y at 0.045 rad/s with a 12deg X tilt; the spin eases out (600ms) as soon as the journal section starts.
- Day/night: uniform uSunDir rotates around the Y axis once every 120 s (independent of the globe's rotation, in world space), with a fixed 18deg declination; the terminator is a soft band smoothstep(-0.12, 0.12, dot(normal, sunDir)).
- Journal scroll (desktop): for each entry i >= 1, a ScrollTrigger (trigger the entry article, start 'top 80%', end 'top 30%', scrub 0.8) maps progress p to arcProgress[i-1] = p and to a globe rotation interpolated from stop i-1 to stop i with --ease-io applied to p; the light head sits at the arc tip while 0 < p < 1; when p reaches 1 the stop's pin switches from Muted to Amber and fires one 700ms ring burst. Entry 0 turns the globe from the idle spin to the first stop over the same scroll range. Scrolling back reverses everything exactly.
- Globe layout: one fixed full-viewport canvas behind the content. In the hero the globe is centered at 62% of the viewport width with a radius of 40% of the viewport height; across the first 30% of the journal section (scrub) it slides to 70% of the width and shrinks to 34%; after the journal ends the canvas fades to 18% opacity under the stats band and to 0 before the about section.
- Pins: amber disc 0.012 radius; active pins emit two rings (scale 1 to 2.6, opacity 0.8 to 0, 2.2s loop, offset 1.1s); hover scales the disc 1.4 and shows an HTML label (city, mono coordinates) projected next to it, cursor pointer.
- Story card: opens with the backdrop fading to Ink at 72% (240ms) and the card rising 24px with opacity (420ms --ease-out); the globe tweens to the opened stop (1.2s --ease-io); prev/next crossfade the photo (300ms) and slide the text 16px in the travel direction.
- Reveals: entry text blocks, stats and about content start at opacity 0, translateY(18px) and settle over 800ms --ease-out at 'top 85%' (once), siblings staggered 80ms. Stats numbers count up over 1400ms with tabular figures.
- Flat map (mobile and reduced-motion): arcs draw by stroke-dashoffset over 1200ms --ease-out when their entry crosses 60% of the viewport; pins pulse with a CSS keyframe; the night polygon drifts 1deg of longitude per second. With prefers-reduced-motion: no Lenis, no pulses, no drift, no count-ups, no reveals; all arcs are drawn and all pins Amber from the start; card opens without movement.

## Imagery
Seven photographs, all treated as one set: six journey photos in a muted teal-and-amber 35mm film look (dusk, blue hour and warm low light, fine grain, no faces in close-up, no readable signs or logos) plus a fictional portrait of the writer in the same light. Every photo gets the same treatment in CSS: filter saturate(0.9) contrast(1.05), and a ::after film-grain overlay made from an inline SVG feTurbulence (baseFrequency 0.9, numOctaves 2) data URI at 14% opacity with mix-blend-mode overlay, plus a 1px inner border in Chalk at 8%. Everything else is drawn in code: the dotted globe, arcs, pins, atmosphere, stars, the flat SVG map, the favicon and the legend swatches. No map tiles, no Earth textures, no satellite imagery.

## Tone
Quiet, observant and warm; specific names, numbers and small human moments; never gushing travel-brochure language.

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-3d-globe-travel-journal · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
