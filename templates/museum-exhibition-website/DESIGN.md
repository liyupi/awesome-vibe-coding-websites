---
name: "Museum Exhibition Website"
colors:
  gallery: "#FAF8F3"
  ink: "#17181C"
  museum: "#2545C8"
  stone: "#F1EEE7"
  line: "#E4E0D6"
  plate: "#DEDBD4"
typography:
  display_oversized_serif: { family: "Fraunces", weights: [300, 400, 600] }
  body: { family: "Inter", weights: [400, 500] }
  mono_labels_times_captions: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Airy editorial: sections py-28 desktop / py-20 mobile; hero py-32; container max-w-[1200px] px-6; object rows gap-16; hairline rules between sections."
radius: "Almost none: 2px on chips, buttons and time slots; images keep square corners with a 1px line border; the only pill is the small 'LOOK CLOSER' chip (999px)."
---

# Museum Exhibition Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **gallery** `#FAF8F3` — Warm white page ground
- **ink** `#17181C` — Near-black text and rules
- **museum** `#2545C8` — The single accent: links, buttons, active chips, column top rules, inspector frame
- **stone** `#F1EEE7` — Alternating quiet band tint (intro, visit)
- **line** `#E4E0D6` — Hairlines, image borders, table rules
- **plate** `#DEDBD4` — Neutral gray photo backdrop referenced in captions and imagery

## Typography
- **Display / oversized serif** — Fraunces (OFL), weights 300/400/600. Self-host the font files.
- **Body** — Inter (OFL), weights 400/500. Self-host the font files.
- **Mono / labels, times, captions** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Airy editorial: sections py-28 desktop / py-20 mobile; hero py-32; container max-w-[1200px] px-6; object rows gap-16; hairline rules between sections.
- Radius: Almost none: 2px on chips, buttons and time slots; images keep square corners with a 1px line border; the only pill is the small 'LOOK CLOSER' chip (999px).

## Motion
- Gentle reveals: sections fade up 16px over 500ms with a 60ms stagger (Motion whileInView, once) — slower and quieter than a product page.
- Hero: the show title's words rise 12px in a 600ms stagger; the hero photograph settles from scale 1.02 to 1 over 700ms.
- Zoom inspector: entering inspection scales the image from 1 to 2.4 over 300ms ease-out; drag pans with the pointer (cursor grab/grabbing); wheel zoom clamps 1–3x; plus, minus and reset buttons animate the same transform; a 1px museum frame appears around the active image and the 'LOOK CLOSER' chip fades out.
- Chips and steppers press to scale 0.97 with a 150ms ease; the ticket confirmation panel fades and slides 12px.
- prefers-reduced-motion: reveals appear instantly; the zoom still works (it is user-initiated) but enters without the scale animation.

## Imagery
Museum studio photography on a seamless neutral gray (#DEDBD4) backdrop: one invented artifact per frame, centered, generous margin, soft diffused light from the upper left with one gentle long shadow — like catalog plates. Invented artifacts only; no real artworks, no identifiable cultural items, no people, no hands, no text in frame.

## Tone
Calm catalog voice: exact materials, short captions, unhurried sentences; the objects do the talking.

---
— Prompt by VibeFather · https://vibefather.ai/t/museum-exhibition-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
