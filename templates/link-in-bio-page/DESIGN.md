---
name: "Link in Bio Page"
colors:
  cream: "#FAF5EC"
  sand: "#F1E8D9"
  card: "#FFFDF8"
  charcoal: "#33302B"
  ash: "#7A756B"
  coral: "#E2725B"
  coral_deep: "#C55B45"
  coral_mist: "#FBE9E2"
  sage: "#7C8B6F"
  rule: "#E5DCCB"
typography:
  display_the_creator_name_link_button_titles_prices_the_email_heading: { family: "Baloo 2", weights: [500, 700] }
  text_and_ui_bio_subtitles_captions_buttons_email_copy: { family: "Figtree", weights: [400, 600] }
spacing: "4px base, thumb-first. The page is one 420px column (max-width phone) centered on desktop with the cream backdrop continuing. Side padding 20px; block gaps 16px; section gaps 32px. Link buttons: 60px tall, full-width, 18px radius, icon 22px left, title Baloo 2 700 16px + subtitle Figtree 400 12.5px stacked, arrow 18px right. Avatar 88px with a 3px coral ring and 12px presence dot. Video card: 16:9 poster, 18px radius. Product minis: 64px image, name and price in a row, 56px tall. Email input 50px, button 50px. Type scale: name Baloo 2 700 26px; bio 15px Ash; section labels (none — this page has no labels, only blocks); captions 12.5px. Focus ring everywhere: 2px Coral outline with 3px offset — visible on every tappable thing."
radius: "18px on buttons, cards and the email panel; 999px on avatar, presence dot, chips, play badge and social glyphs."
---

# Link in Bio Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FAF5EC` — Page background throughout.
- **Sand** `#F1E8D9` — Link button fill, card wells, chips.
- **Card** `#FFFDF8` — Video and product cards, email panel.
- **Charcoal** `#33302B` — Headlines, link titles, body text, icon color.
- **Ash** `#7A756B` — Secondary text, subtitles, captions, placeholder text.
- **Coral** `#E2725B` — The one accent: avatar ring, presence dot, primary button, play badge, prices, focus ring, link arrows.
- **Coral Deep** `#C55B45` — Button pressed state, arrow hover, email success tick.
- **Coral Mist** `#FBE9E2` — Email success panel fill, selected/pressed button tint.
- **Sage** `#7C8B6F` — Quiet second color: the presence dot's alternative, small availability note, footer dot.
- **Rule** `#E5DCCB` — 1px hairlines, card borders, input borders.

## Typography
- **Display: the creator name, link button titles, prices, the email heading** — Baloo 2 (OFL), weights 500/700. Self-host the font files.
- **Text and UI: bio, subtitles, captions, buttons, email copy** — Figtree (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 4px base, thumb-first. The page is one 420px column (max-width phone) centered on desktop with the cream backdrop continuing. Side padding 20px; block gaps 16px; section gaps 32px. Link buttons: 60px tall, full-width, 18px radius, icon 22px left, title Baloo 2 700 16px + subtitle Figtree 400 12.5px stacked, arrow 18px right. Avatar 88px with a 3px coral ring and 12px presence dot. Video card: 16:9 poster, 18px radius. Product minis: 64px image, name and price in a row, 56px tall. Email input 50px, button 50px. Type scale: name Baloo 2 700 26px; bio 15px Ash; section labels (none — this page has no labels, only blocks); captions 12.5px. Focus ring everywhere: 2px Coral outline with 3px offset — visible on every tappable thing.
- Radius: 18px on buttons, cards and the email panel; 999px on avatar, presence dot, chips, play badge and social glyphs.

## Motion
- Easing: --ease-out cubic-beta(0.22, 0.61, 0.36, 1) — that is cubic-bezier(0.22,0.61,0.36,1); --ease-io cubic-bezier(0.65, 0, 0.35, 1). Friendly and quick.
- Load: the blocks reveal in order (avatar → bio → links → video → products → socials → email) with 60ms stagger, each a 10px rise + fade over 450ms --ease-out. On desktop the column also settles from scale 0.98.
- Link buttons: press scales to 0.97 with a 60ms snap-back (whileTap); hover on desktop lifts 2px and nudges the arrow right; the icon wobbles once on hover (rotate ±4deg, 300ms).
- Avatar: the coral ring draws once on load (stroke-dashoffset, 800ms); the presence dot pulses gently (scale 1→1.25, 2000ms loop, off under reduced motion) with the caption 'shipping week — studio open'.
- Video card: the play badge pulses subtly (scale 1→1.08, 2400ms loop); tapping it (href '#') shows a small inline note under the card for 2s: 'The real page opens the video — this demo rests.'
- Email capture: invalid shake 4px once with the inline hint 'That address looks shy of a dot'; success swaps the form for the Coral Mist panel (220ms fade) with a drawn tick scaling in.
- Social glyphs: hover lifts 3px and rotates -6deg, once each, 200ms; they are buttons with aria-labels.
- prefers-reduced-motion: reduce — no loops (ring draws fully, dot static), no stagger (all blocks appear), presses change color only. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm, soft photography for the four content images — studio, hands-off craft and product stills in one palette (cream, clay, sage). No people, no faces, no hands anywhere; no readable text or logos. The avatar is the AI-generated creator portrait (a warm working shot: apron, clay-dusted hands cradling a bowl, genuine smile — a fictional person) in the coral ring; the drawn monogram remains only as its loading fallback. Socials are drawn generic glyphs (a camera ring, a wave, a bird-silhouette-free abstract note, an envelope) — never real platform marks. Icons for link buttons: lucide-react, stroke width 2.

## Tone
The creator's own voice: warm, short, a little playful. Link titles are verbs or treats ('Watch the glaze fail'), never menu labels.

---
— Prompt by VibeFather · https://vibefather.ai/t/link-in-bio-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
