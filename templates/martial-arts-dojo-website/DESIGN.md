---
name: "Martial Arts Dojo Website"
colors:
  ink: "#14151A"
  ink_deep: "#0D0E12"
  crimson: "#C8102E"
  crimson_tint: "#F9E4E7"
  rice_paper: "#F5F1E8"
  white: "#FFFFFF"
  steel: "#5D5F66"
  hairline: "#E4DFD4"
  belt_white: "#FFFFFF"
typography:
  display_headlines_rank_names_prices: { family: "Big Shoulders Display", weights: [600, 700] }
  body_paragraphs_schedule_cells_forms: { family: "Figtree", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers sit over a code-drawn crimson brush stroke with a 13px letter-spaced crimson eyebrow and a Big Shoulders Display 700 title at clamp(30px, 3.4vw, 48px); cards 24px padding, 20px gaps."
radius: "Restrained: 4px cards and chips, 0 on buttons — the discipline is in square edges; photos 4px with a 1px ink border."
---

# Martial Arts Dojo Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#14151A` — Hero ground, dark bands, headings on light
- **Ink deep** `#0D0E12` — Footer ground and darkest panels
- **Crimson** `#C8102E` — The single accent: CTAs, belt path stroke, schedule highlights
- **Crimson tint** `#F9E4E7` — Highlight chips and note panels on light
- **Rice paper** `#F5F1E8` — Page ground
- **White** `#FFFFFF` — Cards on paper
- **Steel** `#5D5F66` — Secondary text on light; #9BA0AB on dark
- **Hairline** `#E4DFD4` — Hairline rules and card borders
- **Belt white** `#FFFFFF` — Belt glyph fills where needed (outlined on paper)

## Typography
- **Display: headlines, rank names, prices** — Big Shoulders Display (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, schedule cells, forms** — Figtree (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit over a code-drawn crimson brush stroke with a 13px letter-spaced crimson eyebrow and a Big Shoulders Display 700 title at clamp(30px, 3.4vw, 48px); cards 24px padding, 20px gaps.
- Radius: Restrained: 4px cards and chips, 0 on buttons — the discipline is in square edges; photos 4px with a 1px ink border.

## Motion
- Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — quick and settled.
- The belt path stroke fills with scroll progress (useScroll + useTransform on the section); rank cards fade in as the stroke reaches them.
- Schedule filter changes crossfade cell opacity 150ms; the trial success check pops 1.15×.
- All motion disables instantly under prefers-reduced-motion (the belt path renders complete); no parallax beyond the path, no scroll-jacking, no autoplay media.

## Imagery
Moody training-hall photography from one shoot: wide shots of students in plain white uniforms seen from behind under warm spots, a kids' class lined up, adults drilling, a still life of colored belts hanging on a rack, and two plain-uniform instructor portraits — no close-up faces, no crests or emblems, no readable text.

## Tone
Calm, respectful dojo English — short sentences, earned confidence, zero machismo. The school sounds like a place that teaches restraint first.

---
— Prompt by VibeFather · https://vibefather.ai/t/martial-arts-dojo-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
