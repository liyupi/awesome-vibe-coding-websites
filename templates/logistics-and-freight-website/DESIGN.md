---
name: "Logistics and Freight Website"
colors:
  navy: "#0f1e30"
  navy_deep: "#13263c"
  navy_raise: "#1b3149"
  sand: "#e9d9b8"
  sand_light: "#f4ead4"
  on_ink: "#1c2c3f"
  amber: "#ffb100"
  amber_deep: "#e09600"
  steel: "#93a6ba"
  hairline: "rgba(233,217,184,0.22)"
  hairline_dark: "rgba(28,44,63,0.18)"
typography:
  display_hero_headline_section_headlines_stat_numbers_panel_titles: { family: "Archivo Black", weights: [400] }
  text_body_copy_buttons_chips_form_labels: { family: "Archivo", weights: [400, 500, 600] }
  mono_eyebrows_hub_codes_tracking_codes_ticker_small_print: { family: "JetBrains Mono", weights: [400, 700] }
spacing: "8px rhythm. Sections py-24 (desktop) / py-14 (mobile); container max-w-[1200px] px-6 (px-5 mobile). Hero pt-28 pb-20 with the ticker strip butted against its bottom. Panels p-8 (p-5 mobile). Mono eyebrows 12px uppercase, letter-spacing 0.14em. Display caps use no extra tracking (tight, heavy); line-height 0.95 on the hero, 1.05 on section headlines."
radius: "0 on panels, chips, buttons, inputs, timeline nodes (squares) and rules - the brutalist edge. Only the drawn vehicle icons, pulse dots and hub rings are round. No shadows; depth comes from the navy-sand contrast."
---

# Logistics and Freight Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Navy** `#0f1e30` — Page ground: deep navy everywhere except sand panels
- **Navy deep** `#13263c` — Map panel fill, tracker panel fill, footer band
- **Navy raise** `#1b3149` — Abstract landmasses on the map, raised chips on navy
- **Sand** `#e9d9b8` — Warm sand panels (services, quote form), sea routes, primary outline text on navy
- **Sand light** `#f4ead4` — Input fills and hover state on sand panels; body text on navy at 85%
- **On ink** `#1c2c3f` — Text on sand panels, drawn vehicle icons, form text
- **Amber** `#ffb100` — The accent: hub dots, air arcs and pulse dots, CTA fills, counters, current timeline node, ticker ground
- **Amber deep** `#e09600` — CTA hover, focus rings on sand, inline error text
- **Steel** `#93a6ba` — Secondary text on navy, road routes (dashed), meta lines
- **Hairline** `rgba(233,217,184,0.22)` — 1px rules and borders on navy
- **Hairline dark** `rgba(28,44,63,0.18)` — 1px rules and borders on sand panels

## Typography
- **Display (hero headline, section headlines, stat numbers, panel titles)** — Archivo Black (OFL), weights 400. Self-host the font files.
- **Text (body copy, buttons, chips, form labels)** — Archivo (OFL), weights 400/500/600. Self-host the font files.
- **Mono (eyebrows, hub codes, tracking codes, ticker, small print)** — JetBrains Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px rhythm. Sections py-24 (desktop) / py-14 (mobile); container max-w-[1200px] px-6 (px-5 mobile). Hero pt-28 pb-20 with the ticker strip butted against its bottom. Panels p-8 (p-5 mobile). Mono eyebrows 12px uppercase, letter-spacing 0.14em. Display caps use no extra tracking (tight, heavy); line-height 0.95 on the hero, 1.05 on section headlines.
- Radius: 0 on panels, chips, buttons, inputs, timeline nodes (squares) and rules - the brutalist edge. Only the drawn vehicle icons, pulse dots and hub rings are round. No shadows; depth comes from the navy-sand contrast.

## Motion
- Global feel: bold and quick. Entrances 0.45-0.6 s, cubic-bezier(.2,.8,.2,1), short staggers (60-120 ms).
- Hero headline lines slide up from 32px with a 60 ms stagger over 0.45 s; the map draws 1.1 s after 200 ms, routes staggered 120 ms; pulse dots start after the draw completes.
- Pulse dots travel each route on 7/9/11 s loops (road/sea/air) via getPointAtLength in one rAF loop; when a dot is within 12px of an endpoint hub, that hub's ring flashes (scale 1 to 1.8, opacity 1 to 0, 600 ms).
- Ticker marquee: one duplicated track translating -50% over 28 s linear infinite; pauses on hover; under reduced motion it shows a single static row.
- Coverage counters count once over 0.9 s ease-out on first view (98.4 from 0.0 with one decimal); reduced motion renders final values.
- Tracking timeline: nodes pop scale 0.9 to 1 with 90 ms stagger once revealed; the current node's amber square carries a looping ring pulse (2 s).
- Hover micro-interactions: sand service panels grow a 3px amber top rule (scaleX) and nudge up 2px; industry chips fill sand with navy text; CTA buttons darken to Amber deep and shift down 1px.
- prefers-reduced-motion: routes fully drawn, pulses at path midpoints, marquee static, counters and timelines in final states, entrances as opacity fades only.

## Imagery
Everything is drawn in code: the stylized world map with abstract landmasses, hubs and three route types (SVG, exact data below), the three vehicle icons (48px stroke SVGs), timeline nodes and chips, the confirmation check, and the favicon. No photographs, no people, no map tiles, no external images. The look is flat shapes, 1px rules and heavy type in exactly the eleven tokens above.

## Tone
Bold and plain-spoken, trucker-confident. Short lines, concrete numbers, no logistics jargon, no exclamation marks. Headlines shout in caps; body copy talks like a dispatch desk that answers on the first ring.

---
— Prompt by VibeFather · https://vibefather.ai/t/logistics-and-freight-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
