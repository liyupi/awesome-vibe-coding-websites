---
name: "Risograph Indie Magazine Website"
colors:
  fluorescent_pink: "#FF48B0"
  process_blue: "#0078BF"
  overprint_purple: "#572178"
  paper_yellow: "#FFE64D"
  paper_white: "#FFFFFF"
  ink: "#16113B"
typography:
  display: { family: "Archivo Black", weights: [700] }
  body: { family: "IBM Plex Sans", weights: [400, 700] }
spacing: "1120px editorial grid, 40px desktop gutters / 20px mobile; 12-column cover with 6/6 split; 88px major spacing / 52px mobile; body max 65ch."
radius: "0px paper corners; 2px button edges. 2px dark rules, no rounded SaaS cards."
---

# Risograph Indie Magazine Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Fluorescent pink** `#FF48B0` — Large hero left field, cover ink plate, story panels. WCAG relative-luminance calculations: #16113B text on #FF48B0: 5.78:1; #FFFFFF text on #0078BF: 4.73:1; #FFFFFF text on #572178: 11.09:1; #16113B text on #FFE64D: 14.16:1; #16113B text on #FFFFFF: 17.84:1. Use these pairs for every normal-size label/body/button. Decorative overlaps/gradients carry no text; readable text gets a solid backing.
- **Process blue** `#0078BF` — Large hero right field and solid article feature bands.
- **Overprint purple** `#572178` — Decorative intersection plate; never fake multiply text.
- **Paper yellow** `#FFE64D` — Subscription tabs and reading markers.
- **Paper white** `#FFFFFF` — Long-read surface.
- **Ink** `#16113B` — Body on pink/yellow/white; not a background substitute.

## Typography
- **Display** — Archivo Black (OFL), weights 700. Self-host the font files.
- **Body** — IBM Plex Sans (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 1120px editorial grid, 40px desktop gutters / 20px mobile; 12-column cover with 6/6 split; 88px major spacing / 52px mobile; body max 65ch.
- Radius: 0px paper corners; 2px button edges. 2px dark rules, no rounded SaaS cards.

## Motion
- On first appearance cover blue plate shifts 2px over 550ms once; maintain readable masthead as a single unshifted layer.
- Story hover/focus shifts illustration plate 2px for 150ms; progress line follows actual article scroll. No looping grain. Reduced motion freezes registration and removes route transitions.

## Imagery
Original SVG risograph artwork only: halftone hands assembling a table, ribbed bench, circular speaker, abstract print rollers; consistent #FF48B0/#0078BF ink and #572178 overlaps. A polished physical issue mock has cover front, spine, shadow and page fore-edge. Contributors use original abstract geometric cut-paper portraits of fictional people with varied silhouettes; no photo or real likeness, no initials-only avatars. Grain is an inline seeded SVG filter or tiny CSS dot pattern at opacity <=.09, never on text.

## Tone
Observant, specific, warmly critical. No startup slogans or invented readership claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/risograph-indie-magazine-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
