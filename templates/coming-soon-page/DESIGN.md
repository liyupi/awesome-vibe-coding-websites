---
name: "Coming Soon Page"
colors:
  night: "#0B1023"
  panel: "#131A36"
  line: "#28305A"
  bone: "#EFF1F6"
  mist: "#98A0BC"
  apricot: "#E8A26B"
  apricot_deep: "#C9844F"
  apricot_mist: "#3A2E33"
  slate_ink: "#1A1006"
  good: "#69C08C"
typography:
  display_h1_countdown_digits_wordmark_sora: { family: "Sora", weights: [600, 700] }
  text_and_ui_promise_features_footer_inter_tabular_numerals_in_the_countdown: { family: "Inter", weights: [400, 500] }
spacing: "8px base unit. One centered column, max-width 720px, 24px side padding; the screen is a single 100dvh flex column: mark (top 12vh), promise + countdown + capture (center), features and micro-footer (bottom). Type scale: H1 clamp(34px, 5vw, 56px) Sora 700 line-height 1.08; promise 17px Inter 400 / 1.6 Mist at 92% max-width 46ch; countdown digits 40px Sora 700 tabular with 11px labels; feature chips 14px Inter 500; footer 12.5px. Buttons: height 52px, Inter 600 14px; primary Apricot fill with Slate Ink text. Input: height 52px, Night→Panel fill, focus Apricot border + 2px offset ring. Focus everywhere: 2px Apricot outline, 3px offset."
radius: "10px on input, buttons and toasts; 999px for feature and social chips."
---

# Coming Soon Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night** `#0B1023` — Page ground — deep indigo.
- **Panel** `#131A36` — Input fill, chip fills, toast.
- **Line** `#28305A` — 1px borders: input, chips, dividers.
- **Bone** `#EFF1F6` — Primary text, digits, wordmark.
- **Mist** `#98A0BC` — Labels, hints, validation lines, micro-footer.
- **Apricot** `#E8A26B` — The one warm accent: primary button, focus ring, the brand glyph, aurora's warm layer, selected states.
- **Apricot Deep** `#C9844F` — Hover/pressed primary.
- **Apricot Mist** `#3A2E33` — Aurora warm layer base, chip tint.
- **Slate Ink** `#1A1006` — Text on apricot fills.
- **Good** `#69C08C` — Saved-state line, done check.

## Typography
- **Display: H1, countdown digits, wordmark — Sora** — Sora (OFL), weights 600/700. Self-host the font files.
- **Text and UI: promise, features, footer — Inter; tabular numerals in the countdown** — Inter (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. One centered column, max-width 720px, 24px side padding; the screen is a single 100dvh flex column: mark (top 12vh), promise + countdown + capture (center), features and micro-footer (bottom). Type scale: H1 clamp(34px, 5vw, 56px) Sora 700 line-height 1.08; promise 17px Inter 400 / 1.6 Mist at 92% max-width 46ch; countdown digits 40px Sora 700 tabular with 11px labels; feature chips 14px Inter 500; footer 12.5px. Buttons: height 52px, Inter 600 14px; primary Apricot fill with Slate Ink text. Input: height 52px, Night→Panel fill, focus Apricot border + 2px offset ring. Focus everywhere: 2px Apricot outline, 3px offset.
- Radius: 10px on input, buttons and toasts; 999px for feature and social chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Night-launch slow: nothing under 500ms except hover states.
- Aurora: three layers drift on 26–40s alternate-infinite keyframes (translate ±4%, scale 1→1.06), staggered so they never sync; the grain overlay is static.
- Entrance: the mark fades 400ms; the promise rises 10px 600ms; the countdown fades 600ms delayed 150ms; features stagger 80ms; the footer fades last.
- Countdown: digits swap instantly (information); once per minute the seconds cell's label pulses 4% opacity — removed entirely under reduced motion.
- EmailCapture: the input's focus ring eases 160ms; the saved-state crossfade is 260ms; the primary button's hover deepens to Apricot Deep 160ms.
- Done state: when the countdown reaches zero, the row crossfades to the launch line (300ms) and the aurora's warm layer brightens one step (a class swap, 600ms).
- prefers-reduced-motion: reduce — aurora paused (static gradients), no entrances (content at rest), no pulse; the countdown keeps ticking; color hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs and no images: the aurora is layered CSS gradients plus one inline SVG-noise grain; the brand glyph, chips and favicon are drawn in code. Social chips use lucide icons drawn generic (AtSign, Globe, Mail) — never platform logos. Icons: lucide-react only, stroke width 1.75.

## Tone
Quiet confidence: one promise, no exclamation marks, zero 'revolutionary'.

---
— Prompt by VibeFather · https://vibefather.ai/t/coming-soon-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
