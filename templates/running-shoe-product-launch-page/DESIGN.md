---
name: "Running Shoe Product Launch Page"
colors:
  electric_blue: "#0047FF"
  volt_yellow: "#E4FF1A"
  black: "#080B13"
  white: "#FFFFFF"
typography:
  display: { family: "Barlow Condensed", weights: [700] }
  body: { family: "Inter", weights: [400, 700] }
spacing: "1280px max, 48px desktop/20px mobile gutters; 8px baseline. 100px/56px section spacing, 140px desktop/64px mobile condensed display. Product stage sticky only in desktop 180vh wrapper, mobile regular 540px stage."
radius: "8px controls, 12px media crops, 0px major color blocks. No pill-card SaaS grid. 2px black rules on yellow, white rules on blue."
---

# Running Shoe Product Launch Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Electric blue** `#0047FF` — Large hero half and specification bands. WCAG relative-luminance calculations: #080B13 text on #E4FF1A: 17.44:1; #FFFFFF text on #0047FF: 6.28:1; #FFFFFF text on #080B13: 19.67:1; #080B13 text on #FFFFFF: 19.67:1. Use these pairs for every normal-size label/body/button. Decorative overlaps/gradients carry no text; readable text gets a solid backing.
- **Volt yellow** `#E4FF1A` — Large hero half, sole, size tools.
- **Black** `#080B13` — Black type on yellow, dark outsole and rules.
- **White** `#FFFFFF` — Text on blue and opaque minimal reading panels.

## Typography
- **Display** — Barlow Condensed (OFL), weights 700. Self-host the font files.
- **Body** — Inter (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 1280px max, 48px desktop/20px mobile gutters; 8px baseline. 100px/56px section spacing, 140px desktop/64px mobile condensed display. Product stage sticky only in desktop 180vh wrapper, mobile regular 540px stage.
- Radius: 8px controls, 12px media crops, 0px major color blocks. No pill-card SaaS grid. 2px black rules on yellow, white rules on blue.

## Motion
- Oversized title shifts at most 16px across scroll without letter-splitting or clipping. Shoe rotation follows stage scroll, not a flat picture spin. Add persistent angle buttons and Follow scroll toggle for touch/keyboard.
- Specs count once over 650ms to their final values; use exact final values in accessible text from first render. Reduced motion disables counting and scroll transform. No autoplay spin.

## Imagery
Original geometry model plus three photorealistic campaign photographs of one invented no-logo running shoe: electric blue upper, volt twin-arch sole, squared toe, broad lace bridge and six small oval vents. Studio hard key light and crisp blue/yellow set repeated across product and runner shots. Fictional runner appears as lower legs only without face or identifiable brand. Hero cannot be typography alone: large 3D shoe plus side-shot photo thumbnail. Model remains the mechanism for smooth multi-angle rotation, not inconsistent independent photo frames.

## Tone
Energetic, direct and specific, without medical claims, athlete endorsements or fabricated laboratory results.

---
— Prompt by VibeFather · https://vibefather.ai/t/running-shoe-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
