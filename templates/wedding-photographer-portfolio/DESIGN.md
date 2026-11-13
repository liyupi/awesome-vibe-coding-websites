---
name: "Wedding Photographer Portfolio"
colors:
  ink_black: "#141311"
  charcoal: "#1D1B18"
  graphite: "#2A2723"
  bone: "#E9E4DA"
  milk: "#F5F2EA"
  smoke: "#9A938A"
  brass: "#C0A268"
  brass_deep: "#A08549"
  fern: "#7E8F7A"
typography:
  display_h1_h2_wedding_titles_the_wordmark_wide_caps_prices_in_large_sizes_frame_numbers: { family: "Italiana", weights: [400] }
  text_and_ui_body_small_caps_labels_font_feature_smcp_or_uppercase_letterspaced_buttons_forms_captions_numbers_font_variant_numeric_tabular_nums: { family: "Manrope", weights: [400, 500, 700] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 120px desktop, 88px under 1024px, 72px under 640px — galleries breathe. Type scale: H1 clamp(52px, 8vw, 108px) Italiana 400 uppercase, letter-spacing 0.08em, line-height 1.0; H2 clamp(34px, 4.6vw, 60px) Italiana 400 uppercase letter-spacing 0.06em; H3 26px Italiana 400; lead Manrope 400 18px / 1.7 Bone at 88%; body Manrope 400 15.5px / 1.75 (max-width 62ch); small-caps label Manrope 700 11px uppercase letter-spacing 0.28em Smoke, flanked by 32px x 1px Brass rules at 50% opacity; caption Manrope 400 13px Smoke. Buttons: height 52px, padding 0 30px, Manrope 700 12px uppercase letter-spacing 0.22em. Primary: Bone fill, Ink Black text. Secondary: 1px Bone/40% border, Bone text (hover border Brass). Inputs: height 52px, 1px Bone/25% border, Charcoal fill, Bone text, focus border Brass. Focus ring everywhere: 2px Brass outline with 3px offset. Letterbox chrome: frames carry a 1px Bone/15% border and an 8px inset Milk/10% veil on hover only."
radius: "4px on cards, buttons, inputs, chips, frames and the inquiry panel — film corners. 999px only for the availability dot and the lightbox frame counter."
---

# Wedding Photographer Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink Black** `#141311` — Page background on all pages, lightbox chrome, footer.
- **Charcoal** `#1D1B18` — Alternate section background, cards on dark, inquiry panel.
- **Graphite** `#2A2723` — Hover surface on dark, tier card featured fill, hairline blocks.
- **Bone** `#E9E4DA` — Primary text on dark: headlines, body, buttons with dark fill.
- **Milk** `#F5F2EA` — Text on photos in letterbox bars, lightbox captions, inverse accents.
- **Smoke** `#9A938A` — Secondary text, small-caps labels, captions, disabled dates (at 50%).
- **Brass** `#C0A268` — The one accent: small-caps eyebrows, thin rules, prices, selected states, focus ring, booked-date marks.
- **Brass Deep** `#A08549` — Brass hover state, primary button pressed, link underline.
- **Fern** `#7E8F7A` — Quiet second color: open-date check mark, 'available' notes, next-story arrow hover.

## Typography
- **Display: H1, H2, wedding titles, the wordmark (wide caps), prices in large sizes, frame numbers** — Italiana (OFL), weights 400. Self-host the font files.
- **Text and UI: body, small-caps labels (font-feature 'smcp' or uppercase letterspaced), buttons, forms, captions, numbers (font-variant-numeric tabular-nums)** — Manrope (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 120px desktop, 88px under 1024px, 72px under 640px — galleries breathe. Type scale: H1 clamp(52px, 8vw, 108px) Italiana 400 uppercase, letter-spacing 0.08em, line-height 1.0; H2 clamp(34px, 4.6vw, 60px) Italiana 400 uppercase letter-spacing 0.06em; H3 26px Italiana 400; lead Manrope 400 18px / 1.7 Bone at 88%; body Manrope 400 15.5px / 1.75 (max-width 62ch); small-caps label Manrope 700 11px uppercase letter-spacing 0.28em Smoke, flanked by 32px x 1px Brass rules at 50% opacity; caption Manrope 400 13px Smoke. Buttons: height 52px, padding 0 30px, Manrope 700 12px uppercase letter-spacing 0.22em. Primary: Bone fill, Ink Black text. Secondary: 1px Bone/40% border, Bone text (hover border Brass). Inputs: height 52px, 1px Bone/25% border, Charcoal fill, Bone text, focus border Brass. Focus ring everywhere: 2px Brass outline with 3px offset. Letterbox chrome: frames carry a 1px Bone/15% border and an 8px inset Milk/10% veil on hover only.
- Radius: 4px on cards, buttons, inputs, chips, frames and the inquiry panel — film corners. 999px only for the availability dot and the lightbox frame counter.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the lightbox; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the inquiry steps and FAQ. Slow, weighted, cinematic — nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(20px) and animate to rest over 900ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger by 90ms (index prop).
- Hero: the full-bleed frame scales from 1.06 to 1.0 over 3000ms --ease-out while a bottom gradient rises; the wordmark letters fade in with 40ms stagger; the small-caps line draws its rules outward from center. Scrolling translates the photo 0 to 10% and fades the overlay to 55% (Motion useScroll, offset ['start start', 'end start']).
- Wedding cards: on hover the photo scales 1.03, the letterbox caption bar rises from the bottom edge, and the place/season small-caps brighten Smoke → Bone over 400ms. The card's frame number ('01') crossfades to an ArrowUpRight.
- Story frames: each frame fades from opacity 0 with a 12px rise on scroll; full-bleed frames also scale from 1.03 to 1.0 as they settle. Captions fade 200ms after their frame.
- Lightbox: opens with a 200ms fade to Ink Black at 96%; the frame crossfades between photos over 500ms --ease-io with a subtle 8px scale settle; the counter and caption fade once. Arrow keys navigate, Escape closes, focus returns to the invoking frame. Under reduced motion: instant swap.
- Packages: the featured tier lifts 8px and carries a 1px Brass border; on hover each tier's price counts nothing but the small-caps note crossfades to the deliverable list's first line.
- Inquiry: the date check runs a 600ms 'checking' state (three dots pulsing), then answers — Fern check and 'That date is open' for free dates, Brass circle and 'Already held — the week after is open' for booked ones. Submitting slides the form out and the SentCard in (16px rise, 320ms --ease-io, AnimatePresence mode 'wait').
- FAQ accordions: height 0 to auto, opacity 0 to 1, 340ms --ease-io; Plus rotates 45 degrees into an X.
- Header: transparent over the heroes with Milk text and a bottom gradient; after 40px of scroll it gets Ink Black at 88%, backdrop-filter blur(12px), Bone text, 250ms transition. The wordmark is always centered; nav small-caps at the edges.
- Links: .link-draw grows a 1px Brass underline from 0% to 100% over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, letter stagger, frame scales, lightbox crossfade (instant), dots and count-adjacent effects. Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, cinematic and consistent, all six made for this template in one shoot's style: available light, deep shadows, warm skinless compositions, fine film grain. Faces never appear, but people do: one couple in silhouette at golden hour joins the venues, the dresses, the couples-from-far-behind, the tablescapes and empty floors — a portrait-photographer's world with the likenesses kept private. No readable text or logos anywhere. Every photo uses object-fit cover with the object-position given under Assets, 4px corners, 1px Bone/15% border; captions in Manrope 13px Smoke under the frame, frame numbers in Italiana. Drawn in code: the favicon, the wordmark (type only), frame numbers, the availability dot, the lightbox chrome, dividers. Icons: lucide-react only, stroke width 1.5.

## Tone
Quiet, specific and a little wry, like a photographer editing at 1am. Short declarative lines, concrete numbers, no SEO mush, no 'capturing your special day'.

---
— Prompt by VibeFather · https://vibefather.ai/t/wedding-photographer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
