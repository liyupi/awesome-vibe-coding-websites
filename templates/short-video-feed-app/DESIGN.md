---
name: "Short Video Feed App"
colors:
  canvas: "#0C0B0F"
  raised: "#17151B"
  ink: "#F7F3EB"
  muted: "#AAA3AF"
  saffron: "#E9B44C"
  hairline: "#343039"
typography:
  interface_metadata_and_action_labels: { family: "Manrope Variable", weights: [400, 500, 600, 700, 800] }
  story_captions_and_profile_editorial_statement: { family: "Instrument Serif", weights: [400] }
spacing: "Use a 4px base unit. Desktop header is 72px with 32px horizontal padding; desktop story stage has 24px vertical breathing room. Caption blocks use 16px internal gaps, action buttons are 52px with 12px gaps, and drawer rows use 20px. Mobile header is 56px, bottom navigation is 64px plus safe-area inset, captions sit 16px from the left and actions 12px from the right."
radius: "Desktop portrait stage 28px; desktop drawer 24px 0 0 24px; mobile drawer 28px 28px 0 0; inputs and small thumbnail cards 12px; action buttons, tabs, pills and sound disc fully round. Mobile feed stage has no radius."
---

# Short Video Feed App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#0C0B0F` — App background, mobile edge-to-edge surround and deep image scrims.
- **Raised** `#17151B` — Header, drawer, input and desktop control surfaces.
- **Ink** `#F7F3EB` — Primary captions, counts, navigation and high-contrast icons.
- **Muted** `#AAA3AF` — Metadata, inactive navigation, timestamps and secondary actions.
- **Saffron** `#E9B44C` — Default value of [ACCENT]; replace everywhere when the variable changes.
- **Hairline** `#343039` — One-pixel borders, tab rules and progress-track divisions.

## Typography
- **Interface, metadata and action labels** — Manrope Variable (OFL), weights 400/500/600/700/800. Self-host the font files.
- **Story captions and profile editorial statement** — Instrument Serif (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Desktop header is 72px with 32px horizontal padding; desktop story stage has 24px vertical breathing room. Caption blocks use 16px internal gaps, action buttons are 52px with 12px gaps, and drawer rows use 20px. Mobile header is 56px, bottom navigation is 64px plus safe-area inset, captions sit 16px from the left and actions 12px from the right.
- Radius: Desktop portrait stage 28px; desktop drawer 24px 0 0 24px; mobile drawer 28px 28px 0 0; inputs and small thumbnail cards 12px; action buttons, tabs, pills and sound disc fully round. Mobile feed stage has no radius.

## Motion
- Advance or reverse exactly one story per completed wheel or swipe gesture. Use a 24px wheel threshold, 48px touch threshold and 720ms input lock; ArrowDown and ArrowUp mirror navigation, while Home and End jump to the boundaries. Prevent the page behind the feed from scrolling.
- Move between stories with a 520ms cubic-bezier(0.22,1,0.36,1) transform and opacity transition; retain native vertical scroll-snap with scroll-snap-stop: always as the touch fallback.
- Animate only the active photograph for 14s per loop, alternating between scale 1.04 translate3d(-1%,0,0) and scale 1.12 translate3d(1.5%,-1.5%,0). Pause inactive cards and when the document is hidden.
- Reveal the active kicker, caption and creator row with 320ms upward fades staggered by 60ms. Animate count changes with a 180ms vertical roll and the like button with a single 220ms scale pulse.
- Open the comment drawer over 360ms with the same ease and fade its scrim over 200ms. Toasts enter for 220ms, remain for 1800ms and exit without covering the action rail.
- Rotate the sound disc once every 8s only while sound is enabled. Never autoplay sound, and avoid continuous motion elsewhere.
- Under prefers-reduced-motion, remove pans, rotation, smooth scrolling, staggering and count pulses; use immediate state changes and a simple 100ms opacity change for the drawer.

## Imagery
Use the six supplied vertical cinematic photographs as full-bleed story artwork, all with warm amber highlights, deep charcoal shadows, muted sage accents and fine 35mm grain. Apply a bottom-to-top #08070B scrim for readable captions and a subtle blurred duplicate behind the desktop portrait stage. Crop with object-fit: cover and preserve each image's stated focal point. People may appear only as the supplied fictional, unidentifiable figures, hands or distant silhouettes; never add real creator likenesses, logos, lettering or watermarks.

## Tone
Warm, observant, cinematic and quietly playful. Use concise editorial language rather than social-media clichés, growth claims or exaggerated urgency.

---
— Prompt by VibeFather · https://vibefather.ai/t/short-video-feed-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
