---
name: "Birthday Party Invitation Page"
colors:
  party_paper: "#FFF7E8"
  plum_ink: "#2E2140"
  confetti_coral: "#FF6B6B"
  marigold: "#FFC83D"
  lilac_wrapper: "#B9A7FF"
  mint_scoop: "#8BD9B6"
typography:
  display_and_countdown_numerals: { family: "Fraunces Variable", weights: [700, 800, 900] }
  body_labels_buttons_and_form_controls: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base unit, a 1200px maximum content width, 32px desktop page gutters, and 20px mobile gutters. Section padding is 104px desktop and 64px mobile. Keep text measures between 48 and 62 characters and card gaps at 24px."
radius: "Use 28px for major cards, 16px for inputs and small panels, and fully rounded pills for buttons and labels. Add 2px plum outlines, ticket perforations, and a few hand-cut SVG silhouettes rather than making every surface a rounded rectangle."
---

# Birthday Party Invitation Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Party Paper** `#FFF7E8` — Main page background and light text on dark plum surfaces
- **Plum Ink** `#2E2140` — Body copy, outlines, primary buttons, and countdown background
- **Confetti Coral** `#FF6B6B` — Cake details, selected ticket, pin, and decorative accents; never small body text on paper
- **Marigold** `#FFC83D` — Countdown digits, secondary buttons, stars, and highlight shapes
- **Lilac Wrapper** `#B9A7FF` — Gift panels, map blocks, balloons, and alternating decorative surfaces
- **Mint Scoop** `#8BD9B6` — Success states, foliage, schedule markers, and one detail ticket

## Typography
- **Display and countdown numerals** — Fraunces Variable (OFL), weights 700/800/900. Self-host the font files.
- **Body, labels, buttons, and form controls** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit, a 1200px maximum content width, 32px desktop page gutters, and 20px mobile gutters. Section padding is 104px desktop and 64px mobile. Keep text measures between 48 and 62 characters and card gaps at 24px.
- Radius: Use 28px for major cards, 16px for inputs and small panels, and fully rounded pills for buttons and labels. Add 2px plum outlines, ticket perforations, and a few hand-cut SVG silhouettes rather than making every surface a rounded rectangle.

## Motion
- Run one lightweight confetti canvas only inside the hero: about 70 rectangles, circles, and short ribbons on desktop and 36 on mobile, with an initial cake-top burst followed by slow downward drift; pause when the hero is offscreen or the tab is hidden.
- Reveal the hero copy with a 600ms upward fade in two short stages, then float the SVG balloons by no more than 8px over alternating 4.8s and 5.6s cycles.
- Use IntersectionObserver for one-time section reveals of 16px vertical travel and 450ms opacity; content remains visible when JavaScript is unavailable.
- Give countdown digits a brief 120ms vertical tick only when their value changes, and give buttons, gift cards, and the map pin short 160ms hover or focus responses.
- Emit one small 24-piece confetti burst after a valid attending RSVP; do not autoplay sound, flash, scroll-jack, or attach motion to pointer movement.
- Under prefers-reduced-motion, disable all drifting, bobbing, reveals, digit ticks, and bursts; render a static confetti arrangement and keep countdown text updates functional.

## Imagery
Use no photographs or downloaded illustrations. The first screen's visual anchor is a large original inline SVG and CSS party-table diorama: an oval table viewed at a slight angle, a three-tier coral and cream cake, five lit candles, three wrapped gifts, six balloons, paper streamers, and small abstract flowers. Layer simple geometric shapes, subtle paper-grain patterns, and plum outlines for depth. No faces, people, characters, logos, or recognizable branded objects. Repeat the same visual language in the gift icons and not-to-scale map.

## Tone
Warm, playful, inclusive, and lightly cheeky, like a beautifully printed invitation from a thoughtful friend; keep directions direct and never pressure guests to bring gifts.

---
— Prompt by VibeFather · https://vibefather.ai/t/birthday-party-invitation-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
