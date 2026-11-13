---
name: "Funeral Home Website"
colors:
  soft_sage: "#7C9A87"
  sage_tint: "#E8EFE9"
  deep_slate: "#2E3A40"
  slate_deep: "#232D33"
  warm_ivory: "#FAF7F0"
  white: "#FFFFFF"
  steel: "#5E6B6E"
  hairline: "#E6E0D6"
typography:
  display_headlines_names_prices: { family: "Cormorant Garamond", weights: [500, 600] }
  body_paragraphs_checklist_guestbook: { family: "Karla", weights: [400, 500, 700] }
spacing: "The most generous in the library: sections separated by 112px desktop / 72px mobile; section headers use a 12px letter-spaced sage eyebrow over a Cormorant Garamond 600 title at clamp(30px, 3.6vw, 48px); body copy max-width 640px with 1.7 line-height; cards 30px padding, 26px gaps."
radius: "Soft and unsharp: 4px cards and chips, 2px buttons — quiet edges, nothing playful."
---

# Funeral Home Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Soft sage** `#7C9A87` — The calm accent: icons, links, checklist bars, monogram medallions
- **Sage tint** `#E8EFE9` — Quiet panels and chips
- **Deep slate** `#2E3A40` — Text, headers, quiet bands
- **Slate deep** `#232D33` — Footer ground
- **Warm ivory** `#FAF7F0` — Page ground
- **White** `#FFFFFF` — Cards
- **Steel** `#5E6B6E` — Secondary text
- **Hairline** `#E6E0D6` — Hairline rules and card borders

## Typography
- **Display: headlines, names, prices** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Body: paragraphs, checklist, guestbook** — Karla (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: The most generous in the library: sections separated by 112px desktop / 72px mobile; section headers use a 12px letter-spaced sage eyebrow over a Cormorant Garamond 600 title at clamp(30px, 3.6vw, 48px); body copy max-width 640px with 1.7 line-height; cards 30px padding, 26px gaps.
- Radius: Soft and unsharp: 4px cards and chips, 2px buttons — quiet edges, nothing playful.

## Motion
- Slow fade-rise reveals (10px, 700ms, 90ms stagger) via useInView, once — barely perceptible.
- Checklist bars fill 400ms; candles flicker with a 2s opacity loop only on the candle icon; nothing else moves.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media, no slides or pops.

## Imagery
Soft-light photography from one shoot: a calm chapel interior with flowers and empty pews, light through a window on the pews, a memorial garden path with a bench, white flowers in close-up, a family reception room in warm light, and a candlelit memorial table — no caskets in close-up, no people, no readable signage.

## Tone
Quiet, warm, unhurried second person. Short sentences. 'Your family' and 'when you're ready' over euphemism; no urgency, no upsell, no 'loved one' more than once per section.

---
— Prompt by VibeFather · https://vibefather.ai/t/funeral-home-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
