---
name: "Bridal Boutique Website"
colors:
  deep_wine: "#5A1A2B"
  wine_deep: "#471322"
  blush: "#F4C6C6"
  blush_tint: "#FBEDEC"
  champagne: "#E8D3A9"
  champagne_tint: "#F6EEDC"
  ivory: "#FBF8F4"
  white: "#FFFFFF"
  steel: "#7A6670"
  hairline: "#EBDFE0"
typography:
  display_headlines_gown_names_prices: { family: "Playfair Display", weights: [500, 600, 700] }
  body_paragraphs_controls_timeline: { family: "Lato", weights: [400, 700] }
spacing: "Generous editorial spacing: sections separated by 104px desktop / 68px mobile; section headers use a 13px letter-spaced wine eyebrow over a Playfair 600 title at clamp(30px, 3.4vw, 48px); body copy max-width 620px; cards 28px padding, 24px gaps."
radius: "Soft couture: 6px cards and chips, 2px buttons — restrained, nothing bubbly."
---

# Bridal Boutique Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep wine** `#5A1A2B` — Type, dark bands, footer ground
- **Wine deep** `#471322` — Footer deepest panels
- **Blush** `#F4C6C6` — Light accent: chips, quiz cards, ribbons
- **Blush tint** `#FBEDEC` — Quiet panels and selected states
- **Champagne** `#E8D3A9` — Secondary accent: price tags, timeline line
- **Champagne tint** `#F6EEDC` — Note panels
- **Ivory** `#FBF8F4` — Page ground
- **White** `#FFFFFF` — Cards
- **Steel** `#7A6670` — Secondary text
- **Hairline** `#EBDFE0` — Hairline rules and card borders

## Typography
- **Display: headlines, gown names, prices** — Playfair Display (OFL), weights 500/600/700. Self-host the font files.
- **Body: paragraphs, controls, timeline** — Lato (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: Generous editorial spacing: sections separated by 104px desktop / 68px mobile; section headers use a 13px letter-spaced wine eyebrow over a Playfair 600 title at clamp(30px, 3.4vw, 48px); body copy max-width 620px; cards 28px padding, 24px gaps.
- Radius: Soft couture: 6px cards and chips, 2px buttons — restrained, nothing bubbly.

## Motion
- Slow fade-rise reveals (12px, 600ms, 80ms stagger) via useInView, once — editorial pacing.
- Quiz steps crossfade 240ms; the result card rises 14px; grid cards stagger 40ms on filter change.
- The timeline's champagne line draws 800ms with nodes popping 1.1× staggered.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Soft-light editorial photography from one shoot: gowns on mannequin forms (A-line, ballgown, mermaid, sheath — one photo each, no faces), the fitting lounge in blush and champagne, and an accessories flat lay of veils and combs — romantic, quiet, no model gazes, no readable labels.

## Tone
Editorial warmth — the way a great stylist talks: calm, certain, kind about nerves. Zero 'special day' clichés; one perfect sentence instead of three exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/bridal-boutique-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
