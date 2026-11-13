---
name: "Custom Cake Bakery Website"
colors:
  paper: "#F7F1E8"
  ink: "#30251F"
  cherry: "#A4473C"
  blush: "#EBC9C0"
  sage: "#68735D"
  cream: "#FFFCF7"
typography:
  display_and_brand_wordmark_use_76px_0_98_at_desktop_48px_1_02_on_mobile_weight_600_with_occasional_italic_emphasis: { family: "Fraunces Variable", weights: [500, 600, 700] }
  body_navigation_controls_labels_and_prices_body_17px_1_65_labels_13px_with_modest_tracking: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid. Cap the main container at 1280px with 40px desktop and 20px mobile side padding. Give major sections 112px desktop and 72px mobile vertical padding. Keep form groups 28px apart and body measures below 62 characters."
radius: "Use 18px for photograph frames and the cake-preview stage, 12px for form controls and option rows, and 4px for small labels. Reserve fully rounded shapes for tiny status dots and the cake's piped decorations, not every container."
---

# Custom Cake Bakery Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F7F1E8` — Primary page background and generous negative space
- **Ink** `#30251F` — Headlines, body text, and dark controls
- **Cherry** `#A4473C` — Primary buttons, selected states, links, and small editorial accents
- **Blush** `#EBC9C0` — Hero panel, illustration background, and selected-option wash
- **Sage** `#68735D` — Secondary accents, decorative stems, and success feedback
- **Cream** `#FFFCF7` — Photograph mats, form surfaces, and text on dark buttons

## Typography
- **Display and brand wordmark; use 76px/0.98 at desktop, 48px/1.02 on mobile, weight 600 with occasional italic emphasis** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, controls, labels, and prices; body 17px/1.65, labels 13px with modest tracking** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Cap the main container at 1280px with 40px desktop and 20px mobile side padding. Give major sections 112px desktop and 72px mobile vertical padding. Keep form groups 28px apart and body measures below 62 characters.
- Radius: Use 18px for photograph frames and the cake-preview stage, 12px for form controls and option rows, and 4px for small labels. Reserve fully rounded shapes for tiny status dots and the cake's piped decorations, not every container.

## Motion
- Reveal major section headings and content groups once with Motion whileInView: opacity 0 to 1 and y 24 to 0 over 500ms, with 80ms stagger between siblings.
- When a cake option changes, crossfade and gently scale only the affected SVG tier or decoration over 220ms; animate the estimated-total digits with a subtle 120ms highlight rather than a rolling counter.
- Give gallery images a 1.03 scale on hover and focus within 450ms; give buttons a 2px upward shift and keep selected option rows visibly marked without layout movement.
- Use a 180ms opacity and scale transition for the request dialog and a short toast for copy feedback. Under prefers-reduced-motion, disable reveals, smooth scrolling, scaling, and nonessential transitions.

## Imagery
Use the six generated photorealistic editorial food photographs listed in assets: hero-cake.webp, berry-cake.webp, pistachio-cake.webp, chocolate-cake.webp, citrus-cake.webp, and cake-making.webp. All share warm left-side window light, soft shadows, subtle film grain, realistic buttercream, and a cream, terracotta, blush, and muted-sage palette. Show complete cakes or close craft details, never tight faces, text, logos, or branded decorations. The live cake in the builder is a separate original inline SVG with clean, softly textured geometry.

## Tone
Warm, specific, assured, and lightly playful. Use concise sensory language about cake and clear practical language about ordering. Avoid exaggerated claims, luxury clichés, and sugary marketing filler.

---
— Prompt by VibeFather · https://vibefather.ai/t/custom-cake-bakery-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
