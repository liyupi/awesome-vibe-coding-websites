---
name: "Invoice Generator Tool"
colors:
  canvas: "#F3F0E9"
  panel: "#FBFAF7"
  paper: "#FFFFFF"
  ink: "#18201D"
  muted: "#68716B"
  rule: "#D9DDD6"
  accent: "#1F6F54"
  accent_soft: "#DDEBE3"
  danger: "#A54732"
typography:
  document_display_and_invoice_totals: { family: "Source Serif 4 Variable", weights: [600, 700] }
  application_ui_labels_inputs_and_body_copy: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  quantities_rates_invoice_number_and_aligned_amounts: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Use a 4px base scale. Desktop page padding is 28px, the top bar is 64px high, editor cards have 20px padding, form sections are separated by 24px, inputs are at least 44px high, and the workspace columns have a 24px gap. The invoice sheet uses 48px padding on desktop and 28px on mobile. Mobile page padding is 16px with 16px card padding and 12px field gaps."
radius: "Use 10px for editor cards and primary buttons, 8px for inputs and secondary buttons, 999px only for the small saved-status pill, and 2px for the invoice sheet. Avoid excessive pill shapes and floating rounded containers."
---

# Invoice Generator Tool — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E9` — Warm gray application background behind the workspace.
- **Panel** `#FBFAF7` — Editor cards, drawers, and restrained secondary surfaces.
- **Paper** `#FFFFFF` — Live invoice sheet and all printed pages.
- **Ink** `#18201D` — Primary text, invoice heading, and high-emphasis borders.
- **Muted** `#68716B` — Helper text, metadata, and secondary labels with readable contrast.
- **Rule** `#D9DDD6` — Input borders, table rules, and separators.
- **Accent** `#1F6F54` — Primary buttons, active tabs, focus rings, and selected actions.
- **Accent Soft** `#DDEBE3` — Saved-state background, active field tint, and subtle invoice accent block.
- **Danger** `#A54732` — Delete and remove actions only.

## Typography
- **Document display and invoice totals** — Source Serif 4 Variable (OFL), weights 600/700. Self-host the font files.
- **Application UI, labels, inputs, and body copy** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Quantities, rates, invoice number, and aligned amounts** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. Desktop page padding is 28px, the top bar is 64px high, editor cards have 20px padding, form sections are separated by 24px, inputs are at least 44px high, and the workspace columns have a 24px gap. The invoice sheet uses 48px padding on desktop and 28px on mobile. Mobile page padding is 16px with 16px card padding and 12px field gaps.
- Radius: Use 10px for editor cards and primary buttons, 8px for inputs and secondary buttons, 999px only for the small saved-status pill, and 2px for the invoice sheet. Avoid excessive pill shapes and floating rounded containers.

## Motion
- Use 120–160ms ease-out transitions for button hover, border color, focus rings, tabs, and drawer overlays; never animate calculated digits or delay their update.
- New line-item rows fade and translate upward 6px over 160ms, and removed rows exit without a large layout jump.
- Toasts enter from the bottom with a 180ms fade and 8px rise; the saved-client drawer slides 16px from the right on desktop and fades in as a full-screen sheet on mobile.
- Under prefers-reduced-motion, remove sliding and row entrance motion and make all state changes immediate.

## Imagery
Use no stock or generated images. The first-screen visual anchor is the rich live invoice itself: a crisp white paper sheet, original issuer monogram, fine rules, structured line items, and a precise totals block above a soft 0 18px 50px rgba(24,32,29,0.10) shadow. Before upload, derive a simple two-letter issuer monogram from [ISSUER_NAME] inside an Accent Soft square. The upload control accepts a local PNG, JPEG, or WebP up to 2 MB and displays that image only in the invoice logo position. Use Lucide icons for controls and draw the [BRAND] mark as an original geometric receipt-and-check SVG; never use real business or payment-service marks.

## Tone
Quietly capable, precise, approachable, and paper-inspired. Use direct labels and practical helper text, with no promotional slogans, fake cloud claims, or financial advice.

---
— Prompt by VibeFather · https://vibefather.ai/t/invoice-generator-tool · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
