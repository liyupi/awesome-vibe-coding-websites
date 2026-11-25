---
name: "Web Design Studio Website"
colors:
  paper: "#FFFFFF"
  black: "#121212"
  grey: "#55565C"
  line: "#E6E6EA"
  blue: "#2F5BFF"
  bluetint: "#EEF2FF"
  lime: "#C6FF3D"
typography:
  display_headlines: { family: "Bricolage Grotesque Variable", weights: [600, 800] }
  body_ui: { family: "Instrument Sans Variable", weights: [400, 500] }
  mono_prices_weeks_labels_urls: { family: "Geist Mono Variable", weights: [400, 500] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-6 to p-8; 8px rhythm."
radius: "Cards and browser windows 14px; buttons pill; inputs 10px; chips pill."
---

# Web Design Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#FFFFFF` — Page ground
- **black** `#121212` — Text, the dark band, primary buttons
- **grey** `#55565C` — Secondary text
- **line** `#E6E6EA` — Hairlines and card borders
- **blue** `#2F5BFF` — Electric blue: the main call to action, links, active states, the calculator panel
- **blueTint** `#EEF2FF` — Soft blue panels and chips
- **lime** `#C6FF3D` — Small highlights only: marker underlines, result badges, the active slider handle; always with black text

## Typography
- **Display / headlines** — Bricolage Grotesque Variable (OFL), weights 600/800. Self-host the font files.
- **Body / UI** — Instrument Sans Variable (OFL), weights 400/500. Self-host the font files.
- **Mono / prices, weeks, labels, URLs** — Geist Mono Variable (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-6 to p-8; 8px rhythm.
- Radius: Cards and browser windows 14px; buttons pill; inputs 10px; chips pill.

## Motion
- Hero: the section is 220vh tall with a sticky inner viewport; as it scrolls, four browser windows fan out from a neat stack to rotations of −9, −3, 3 and 9 degrees with horizontal spread, and the caption under them names each project in turn.
- Before / after sliders: a draggable handle over two stacked code-drawn previews, driven by a range input; the divider follows the pointer.
- Scroll reveals: sections fade up 20px over 400ms, once (Motion whileInView); content is visible by default.
- Calculator: the price range and weeks count up over 300ms whenever an input changes.
- prefers-reduced-motion: the windows rest in the fanned position with no scroll animation, sliders still drag, numbers change instantly, no reveals.

## Imagery
No photographs and no screenshots. Websites are shown as browser windows drawn in code, with each project's own colours and layout built from CSS blocks. Flat paper white, near-black, electric blue and small lime highlights; 1px hairlines and soft 14px corners; no gradients or shadows beyond a faint card shadow.

## Tone
Plain, direct and friendly, like a good contractor: prices, weeks and what is included, no agency jargon.

---
— Prompt by VibeFather · https://vibefather.ai/t/web-design-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
