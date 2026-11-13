---
name: "Aquarium Exhibits and Tickets Website"
colors:
  abyss: "#041220"
  deep: "#0B2740"
  line: "#16405E"
  foam: "#E8F4F8"
  mist: "#9DB9C9"
  glow: "#5FE9D6"
  zone_hues: "#FF9A62 #5FE9D6 #A8D46F #7C8CFF #F2C14E"
typography:
  display_headlines: { family: "Outfit", weights: [300, 600] }
  body: { family: "Inter", weights: [400, 500] }
  mono_times_depths_chips_captions: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; cards p-6 to p-8; hero min-h-[92vh]; vertical rhythm in multiples of 8px."
radius: "Cards and the portrait frame rounded-2xl (16px); day chips and slot buttons rounded-full; stepper inputs rounded-[10px]."
---

# Aquarium Exhibits and Tickets Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **abyss** `#041220` — Page ground, midnight navy water
- **deep** `#0B2740` — Cards, picker panel, caption plates
- **line** `#16405E` — Hairlines, card borders, header rule
- **foam** `#E8F4F8` — Primary text and headlines
- **mist** `#9DB9C9` — Muted text, captions, footnotes
- **glow** `#5FE9D6` — Bioluminescent cyan accent: links, chips, slot states, focus rings
- **zone hues** `#FF9A62 #5FE9D6 #A8D46F #7C8CFF #F2C14E` — Zone markers only: reef / gardens / kelp / twilight / shore, used as 3px card borders, dots and 8-22% map fills

## Typography
- **Display / headlines** — Outfit (OFL), weights 300/600. Self-host the font files.
- **Body** — Inter (OFL), weights 400/500. Self-host the font files.
- **Mono / times, depths, chips, captions** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; cards p-6 to p-8; hero min-h-[92vh]; vertical rhythm in multiples of 8px.
- Radius: Cards and the portrait frame rounded-2xl (16px); day chips and slot buttons rounded-full; stepper inputs rounded-[10px].

## Motion
- Caustic layers drift continuously and very slowly (90s and 70s loops, opposite directions, translate ±4%, rotate ±2deg); they never pulse, strobe or exceed opacity 0.16.
- The hero portrait floats ±6px on a 9s ease-in-out loop beneath its caustic layer.
- Scroll reveals: sections fade up 24px over 500ms with a 60ms stagger between siblings (Motion whileInView, once).
- Day-filter and slot clicks cross-fade lists in 200ms; all buttons press to scale 0.96.
- prefers-reduced-motion: caustics and float stop on a static gradient, reveals appear instantly, click states remain.

## Imagery
Underwater photography from inside dark tanks: one subject per frame lit by a single spotlight from above, deep navy water, faint cyan rim light, drifting particles, animals treated like portraits. No people, no divers, no hands, no readable signage, no logos. Six generated images (see assets); no stock photos.

## Tone
Hushed and precise, like a night dive with a good guide: short sentences, concrete animals and depths, no nature-documentary grandstanding.

---
— Prompt by VibeFather · https://vibefather.ai/t/aquarium-exhibits-and-tickets-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
