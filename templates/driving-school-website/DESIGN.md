---
name: "Driving School Website"
colors:
  warm_white: "#FFFCF4"
  card_white: "#FFFFFF"
  sign_yellow: "#FFC72C"
  soft_yellow: "#FFF4D3"
  navy: "#1E3A6E"
  ink_navy: "#17294D"
  slate: "#3B4358"
  dash_gray: "#CDD3E0"
  quiz_green: "#2F9E63"
  quiz_red: "#D94848"
typography:
  display_headlines_package_names_quiz_headings: { family: "Fredoka", weights: [500, 600] }
  body_paragraphs_answers_chips_forms: { family: "Figtree", weights: [400, 600, 700] }
spacing: "8px base grid. Content shell max-width 1120px with 32px desktop and 20px mobile side padding. Header 72px. Desktop sections 96px vertical padding, mobile 64px. Package grid gap 24px. Prose max 62 characters per line."
radius: "Everything friendly: 999px pills for buttons, chips, and badges; 20px for cards, photos, and the quiz panel; 12px for inputs. Road-marking SVG dividers are square 3px lines with 26px dashes and 34px gaps."
---

# Driving School Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm white** `#FFFCF4` — Page ground
- **Card white** `#FFFFFF` — Cards, quiz panel, booking form
- **Sign yellow** `#FFC72C` — Primary accent: CTAs, selected chips, check icons, popular card
- **Soft yellow** `#FFF4D3` — Bands, badges, and tint chips
- **Navy** `#1E3A6E` — Buttons, links, logomark ring, footers
- **Ink navy** `#17294D` — Headings and body text
- **Slate** `#3B4358` — Secondary text and meta
- **Dash gray** `#CDD3E0` — Hairlines, dashes, and idle borders
- **Quiz green** `#2F9E63` — Correct-answer fill and recap dots
- **Quiz red** `#D94848` — Wrong-answer fill and error text

## Typography
- **Display: headlines, package names, quiz headings** — Fredoka (OFL), weights 500/600. Self-host the font files.
- **Body: paragraphs, answers, chips, forms** — Figtree (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Content shell max-width 1120px with 32px desktop and 20px mobile side padding. Header 72px. Desktop sections 96px vertical padding, mobile 64px. Package grid gap 24px. Prose max 62 characters per line.
- Radius: Everything friendly: 999px pills for buttons, chips, and badges; 20px for cards, photos, and the quiz panel; 12px for inputs. Road-marking SVG dividers are square 3px lines with 26px dashes and 34px gaps.

## Motion
- Quiz: a chosen answer settles with a 160ms scale pop; a wrong pick shakes 6px twice over 240ms; the explanation panel slides up 180ms; the results score fills a small drawn dial over 600ms.
- Road-marking dividers drift slowly left on an 8px-per-second loop — decorative only, and fully static under prefers-reduced-motion.
- Cards lift 4px on hover (180ms); chips pop to 1.06 on selection; sections reveal once on scroll with a 14px rise and a 420ms ease-out fade, staggered 60ms.
- With prefers-reduced-motion: reduce, every animation above becomes a 100ms opacity change at most and every interaction stays fully functional. No page parallax, no cursor effects, no autoplay.

## Imagery
One photographic set in a consistent warm-morning grade: a cheerful unbranded yellow compact car on quiet suburban streets — a front three-quarter hero view, a cockpit detail, a curb-side drop-off — plus three studio-quality fictional instructor portraits taken outdoors in the same soft light, varying age and ethnicity, depicting no real people. Cars carry no visible badges or readable plates; no bystanders. Road markings, sign-shaped chips, and route doodles are drawn in SVG, never photographed.

## Tone
Plain, warm, and lightly funny — a patient instructor on a quiet street. Short lines, real prices, no jargon, no fear tactics. Confident about safety basics without lecturing, and honest that the quiz is practice, not the official test.

---
— Prompt by VibeFather · https://vibefather.ai/t/driving-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
