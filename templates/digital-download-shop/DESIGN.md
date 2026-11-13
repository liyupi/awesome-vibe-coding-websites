---
name: "Digital Download Shop"
colors:
  canvas: "#F3EFE6"
  surface: "#FFFCF6"
  ink: "#20221E"
  muted: "#68675F"
  amber: "#F2A93B"
  sage: "#B9D8C0"
  lilac: "#C9C3E8"
  line: "#D6D0C4"
typography:
  editorial_display_for_the_hero_section_titles_product_names_and_large_prices: { family: "Fraunces Variable", weights: [600, 700] }
  interface_and_body_copy: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  categories_file_formats_order_labels_and_compact_utility_metadata: { family: "IBM Plex Mono", weights: [500] }
spacing: "Use a 4px base grid. Content max-width is 1280px with 48px desktop gutters and 20px mobile gutters. Header height is 76px below a 34px announcement bar. Sections have 104px desktop and 68px mobile vertical padding; product grids use 24px gaps. Hero H1 is clamp(48px, 5.4vw, 76px) with 0.96 line height, section titles are 42px desktop and 32px mobile, and body copy is 16px with 1.65 line height."
radius: "Use 22px corners on product cards and major panels, 16px on preview art and inputs, 12px on small line items, and fully rounded pills for chips and compact buttons. Use crisp 1px Line borders and broad, low-opacity olive shadows rather than glass effects."
---

# Digital Download Shop — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3EFE6` — Warm parchment page background with a very faint CSS fiber texture
- **Surface** `#FFFCF6` — Cards, drawers, input fields, and raised product-preview sheets
- **Ink** `#20221E` — Primary text, dark bundle band, and primary button background
- **Muted** `#68675F` — Secondary copy, metadata, and inactive controls
- **Amber** `#F2A93B` — Accent badges, selected states, and small graphic details; always pair with Ink text
- **Sage** `#B9D8C0` — Success states and selected product-preview panels
- **Lilac** `#C9C3E8` — Alternate preview background and decorative product art
- **Line** `#D6D0C4` — One-pixel borders, separators, and quiet grid lines

## Typography
- **Editorial display for the hero, section titles, product names, and large prices** — Fraunces Variable (OFL), weights 600/700. Self-host the font files.
- **Interface and body copy** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Categories, file formats, order labels, and compact utility metadata** — IBM Plex Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base grid. Content max-width is 1280px with 48px desktop gutters and 20px mobile gutters. Header height is 76px below a 34px announcement bar. Sections have 104px desktop and 68px mobile vertical padding; product grids use 24px gaps. Hero H1 is clamp(48px, 5.4vw, 76px) with 0.96 line height, section titles are 42px desktop and 32px mobile, and body copy is 16px with 1.65 line height.
- Radius: Use 22px corners on product cards and major panels, 16px on preview art and inputs, 12px on small line items, and fully rounded pills for chips and compact buttons. Use crisp 1px Line borders and broad, low-opacity olive shadows rather than glass effects.

## Motion
- On initial load, fade and rise the hero copy by 14px over 420ms, then bring the three preview layers in with 80ms staggers and small rotations settling to their final positions.
- Reveal major sections once at 12% viewport intersection with a 16px rise and 380ms opacity transition; never hide content when IntersectionObserver is unavailable.
- Product cards lift 4px and their preview art scales to 1.015 over 180ms on hover; filter changes crossfade the grid for 160ms without changing card dimensions.
- The cart drawer slides in over 260ms while its backdrop fades; trap focus, close on Escape, restore focus to the cart button, and prevent background scrolling.
- Hash-route changes scroll to the top and fade the new main content in over 160ms. Under prefers-reduced-motion, remove reveals, rotations, smooth scrolling, and transforms while keeping every state change immediate and visible.

## Imagery
All visuals are original inline SVG and CSS, not raster photographs. Build a coherent family of tactile product covers using paper-colored sheets, crisp geometric grids, font-specimen letters, gradient swatches, tiny interface mockups, subtle 1px outlines, and soft offset shadows. The hero is a layered composition of three polished product previews, and every catalog card has its own deterministic preview configuration from content data. Do not use external images, recognizable products, brand marks, people, or generated-image assets.

## Tone
Warm, precise, creatively assured, and transparent. Use concise product copy and practical details, with no pressure tactics, fake scarcity, or inflated claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-download-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
