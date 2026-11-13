---
name: "Esports Team Website"
colors:
  void: "#080A0B"
  carbon: "#111517"
  steel: "#2A3134"
  chalk: "#F3F6EF"
  mist: "#98A39F"
  volt: "#C8FF3D"
typography:
  display_and_scores: { family: "Barlow Condensed", weights: [600, 700, 800] }
  body_and_interface: { family: "Inter", weights: [400, 500, 600] }
  statistics_labels_and_match_metadata: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Use a 12-column grid with a 1440px maximum content width, 48px desktop gutters, 20px mobile gutters, and 24px desktop grid gaps. Major sections have 112px desktop and 72px mobile vertical padding. Card padding is 28px desktop and 20px mobile. Keep data rows compact at 64–76px high and body measure below 68 characters."
radius: "Use square corners with one 18px clipped top-right corner on major image cards and a 10px clipped bottom-left corner on small data panels. Buttons have 2px radii, modal drawers have none, and only tiny status chips may be fully rounded. Never soften the design into generic rounded cards."
---

# Esports Team Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#080A0B` — Page background and the darkest footer surface.
- **Carbon** `#111517` — Cards, drawers, navigation, and alternating content bands.
- **Steel** `#2A3134` — One-pixel rules, table borders, stat tracks, and disabled states.
- **Chalk** `#F3F6EF` — Primary headings, scores, and high-emphasis text.
- **Mist** `#98A39F` — Secondary copy and metadata; use at readable sizes on Void or Carbon.
- **Volt** `#C8FF3D` — The single electric accent for calls to action, active filters, selected stats, and thin lighting details.

## Typography
- **Display and scores** — Barlow Condensed (OFL), weights 600/700/800. Self-host the font files.
- **Body and interface** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Statistics, labels, and match metadata** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use a 12-column grid with a 1440px maximum content width, 48px desktop gutters, 20px mobile gutters, and 24px desktop grid gaps. Major sections have 112px desktop and 72px mobile vertical padding. Card padding is 28px desktop and 20px mobile. Keep data rows compact at 64–76px high and body measure below 68 characters.
- Radius: Use square corners with one 18px clipped top-right corner on major image cards and a 10px clipped bottom-left corner on small data panels. Buttons have 2px radii, modal drawers have none, and only tiny status chips may be fully rounded. Never soften the design into generic rounded cards.

## Motion
- On initial home load, reveal the hero headline in two masked lines over 560ms, fade the eyebrow and calls to action after a 100ms stagger, and ease the arena image from scale 1.045 to 1 over 900ms.
- Reveal section headings and card groups with Motion whileInView using 24px upward travel, 480ms duration, and 70ms child stagger; trigger once at 18% visibility.
- Run the sponsor strip as a slow seamless 28-second marquee and pause it on hover or keyboard focus. Do not marquee navigation, match data, or essential copy.
- On roster hover or focus, slide the portrait 6px upward and reveal a compact stat rail; on selection, open the player detail drawer with a 240ms horizontal transition and shared focus management.
- Use 180ms fade-and-8px route transitions, 200ms accordion height transitions, and 240ms cart and product drawers. Respect prefers-reduced-motion by removing transforms, smooth scrolling, parallax, counting effects, and marquee movement while preserving every final visible state.

## Imagery
Use exactly six supplied AI-generated photographs as one coherent fictional team shoot: one wide arena group image and five individual 3:4 player portraits. All feature plain black performance apparel, charcoal haze, teal-black shadows, subtle acid-lime rim light, realistic editorial photography, and no text or logos. The wide hero is a spacious group scene, never a tight face close-up. Crop individual portraits consistently at mid-torso on desktop and slightly higher on mobile. Reuse the group image or portraits in selected news cards rather than adding unrelated stock. Draw all merchandise as polished original black-and-volt SVG product illustrations and draw simple abstract sponsor marks in code. Every team portrait is a fictional placeholder, never an initials-only substitute or a real person's likeness.

## Tone
Focused, competitive, precise, and editorial. Use short declarative copy about preparation, teamwork, rounds, maps, and recovery. Avoid aggressive trash talk, gambling language, empty superlatives, fake live activity, and generic startup language.

---
— Prompt by VibeFather · https://vibefather.ai/t/esports-team-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
