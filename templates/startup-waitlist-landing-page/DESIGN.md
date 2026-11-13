---
name: "Startup Waitlist Landing Page"
colors:
  void_black: "#0B0C10"
  coal: "#12141A"
  graphite: "#1B1E26"
  bone: "#EDEEF0"
  ash: "#8B909C"
  lime: "#C6F432"
  lime_deep: "#A8D226"
  hairline: "#262A33"
typography:
  display_h1_h2_benefit_titles_the_wordmark_heavy_wide_tracked_archivo: { family: "Archivo", weights: [700, 800] }
  numbers_and_links_the_queue_position_referral_url_stats_row_eyebrow_labels_uppercase: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow (a waitlist page is a funnel, not a brochure). Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(52px, 9vw, 120px) Archivo 800, line-height 0.94, letter-spacing -0.03em, uppercase; H2 clamp(28px, 4vw, 44px) Archivo 800 uppercase letter-spacing -0.02em; benefit titles 19px Archivo 700; lead 18px / 1.6 Bone at 80%; body 16px / 1.7 (max-width 60ch); eyebrow IBM Plex Mono 500 12px uppercase letter-spacing 0.2em Ash; caption IBM Plex Mono 400 13px Ash. The queue position is IBM Plex Mono 500 clamp(72px, 14vw, 160px) in Lime, tabular-nums. Buttons: height 54px, Archivo 700 15px uppercase letter-spacing 0.06em. Join: Lime fill, Void Black text. Secondary/share: 1px Hairline border on Coal, Bone text, hover Graphite. Inputs: height 54px, Coal fill, 1px Hairline border, 16px IBM Plex Mono, focus border Lime. Focus ring everywhere: 2px Lime outline with 3px offset."
radius: "4px on cards, buttons, inputs and the spot card — sharp launch energy. No pills except the referred-ribbon."
---

# Startup Waitlist Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void Black** `#0B0C10` — Page background, footer, the spot card.
- **Coal** `#12141A` — Benefit and FAQ cards, the email input fill, chips.
- **Graphite** `#1B1E26` — Hover surfaces, input focus fill, share-row buttons.
- **Bone** `#EDEEF0` — Primary text: headlines, body, card titles.
- **Ash** `#8B909C` — Secondary text, captions, eyebrows, the trust line.
- **Lime** `#C6F432` — The one accent: the join button, queue number, referral link, focus ring, canvas dots at their brightest, stat figures.
- **Lime Deep** `#A8D226` — Button hover, the position tick, selected states.
- **Hairline** `#262A33` — 1px hairlines, card borders, the input border, dividers.

## Typography
- **Display: H1, H2, benefit titles, the wordmark — heavy, wide-tracked Archivo** — Archivo (OFL), weights 700/800. Self-host the font files.
- **Numbers and links: the queue position, referral URL, stats row, eyebrow labels (uppercase)** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow (a waitlist page is a funnel, not a brochure). Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(52px, 9vw, 120px) Archivo 800, line-height 0.94, letter-spacing -0.03em, uppercase; H2 clamp(28px, 4vw, 44px) Archivo 800 uppercase letter-spacing -0.02em; benefit titles 19px Archivo 700; lead 18px / 1.6 Bone at 80%; body 16px / 1.7 (max-width 60ch); eyebrow IBM Plex Mono 500 12px uppercase letter-spacing 0.2em Ash; caption IBM Plex Mono 400 13px Ash. The queue position is IBM Plex Mono 500 clamp(72px, 14vw, 160px) in Lime, tabular-nums. Buttons: height 54px, Archivo 700 15px uppercase letter-spacing 0.06em. Join: Lime fill, Void Black text. Secondary/share: 1px Hairline border on Coal, Bone text, hover Graphite. Inputs: height 54px, Coal fill, 1px Hairline border, 16px IBM Plex Mono, focus border Lime. Focus ring everywhere: 2px Lime outline with 3px offset.
- Radius: 4px on cards, buttons, inputs and the spot card — sharp launch energy. No pills except the referred-ribbon.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the position counter; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the spot card swap and FAQ. Snappy but never cute.
- DotField: a canvas of ~140 dots on a slow 2D noise drift; dots near the cursor brighten toward Lime and repel gently. 60fps with a rAF loop that pauses when the tab hides; under prefers-reduced-motion the field renders one static frame. Dots never obscure text (the field sits at 40% max opacity behind a Void gradient at the text areas).
- H1: words rise from translateY(28px) and opacity 0 with 90ms stagger, 600ms --ease-out; the Lime period on the final word blinks once like a cursor after the line lands (a 180ms opacity toggle, once).
- Email capture: validation errors shake the input 4px once and show the inline line in Lime (not red — the palette has no red); on submit the button label swaps to 'Joining…' for 600ms, then the hero's form area swaps to the SpotCard with a 300ms --ease-io slide.
- SpotCard: the position counts DOWN from a few above to the final number over 900ms --ease-io (a slot machine settling, not a spin); each referral copy/share visibly decrements the position by 3 with a quick 240ms count and a Lime tick; the referral box copies with the button label swapping to 'Copied ✓' for 1400ms.
- Benefits: cards reveal with 90ms stagger and a 6px rise; icons draw once on first view (stroke-dashoffset).
- Stats row: figures count up once on reveal (700ms), then sit still; the '(sample data)' caption never animates.
- FAQ accordions: height 0 to auto, opacity 0 to 1, 260ms --ease-io; Plus rotates 45 degrees into an X.
- Referred ribbon (?ref= present): slides down from the header once on load, stays dismissible.
- Links: .link-draw grows a 1px Lime underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — static DotField frame, no counters (final values render instantly), no shakes, no stagger; color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
No photography, no stock, no external images — everything drawn in code. The DotField canvas background is the only ambient art; benefit icons are Lucide; the queue 'meter' is a thin SVG progress rule; share glyphs are generic Lucide icons (Link2, Mail, MessageCircle) — never real social platform marks. A subtle CSS grain overlay (repeating radial-gradient at 3% opacity) keeps the black from banding. Icons: lucide-react only, stroke width 2.

## Tone
Dry and confident, like a README with a personality. Short lines, one joke per screen, no exclamation marks, no 'revolutionary'.

---
— Prompt by VibeFather · https://vibefather.ai/t/startup-waitlist-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
