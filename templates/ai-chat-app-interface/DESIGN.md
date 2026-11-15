---
name: "AI Chat App Interface"
colors:
  warm_canvas: "#FAF7F2"
  deep_plum: "#3B1E54"
  vivid_coral: "#FF6B4A"
  ink: "#2E2336"
  muted_plum: "#726578"
  soft_blush: "#F3E4DE"
  paper_surface: "#FFFFFF"
  warm_border: "#D9CADC"
  plum_code: "#24122F"
  dark_canvas: "#170F20"
  dark_sidebar: "#21152B"
  dark_surface: "#2C1B37"
  dark_border: "#3D294A"
  dark_secondary: "#C6B5CE"
typography:
  wordmark_conversation_and_dialog_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  interface_labels_messages_and_body_copy: { family: "DM Sans", weights: [400, 500, 600, 700] }
  code_keyboard_shortcuts_and_file_metadata: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base scale. Desktop: 264px sidebar, 72px main header, 790px reading width, 40px outer main gutters, 20px message gaps, 10px paragraph gaps, 16px field padding. Mobile: 12–16px gutters, 44px minimum touch targets, 12px control gaps. Keep the initial code and table answer compact enough to appear above the composer at 1440×900."
radius: "8px small buttons; 10px history active row; 12px code blocks, suggestion cards and popovers; 14px user bubble; 16px composer and dialogs. Avoid excessive pill-shaped containers; reserve pills for small selectors/status."
---

# AI Chat App Interface — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm canvas** `#FAF7F2` — Required light-mode page background, transcript canvas and warm-white text on plum.
- **Deep plum** `#3B1E54` — Required saturated sidebar, primary headings, button text on coral, geometric details; occupies a substantial part of the first screen.
- **Vivid coral** `#FF6B4A` — Required New chat and Send controls, original mark, focus highlights and sidebar active edges; keep saturated and pair with plum text, never low-contrast white small text.
- **Ink** `#2E2336` — Primary light-mode body text; high contrast on warm surfaces.
- **Muted plum** `#726578` — Light-mode secondary text, metadata, helper text and icons; keep readable at small sizes.
- **Soft blush** `#F3E4DE` — User message bubbles and attachment chips.
- **Paper surface** `#FFFFFF` — Light-mode composer and menu surfaces.
- **Warm border** `#D9CADC` — Light-mode separators and field boundaries.
- **Plum code** `#24122F` — Code blocks in both themes, with ivory, lilac, peach and coral syntax colors.
- **Dark canvas** `#170F20` — Dark-mode page and transcript background.
- **Dark sidebar** `#21152B` — Dark-mode sidebar.
- **Dark surface** `#2C1B37` — Dark-mode bubbles, composer and menus.
- **Dark border** `#3D294A` — Dark-mode separators and controls.
- **Dark secondary** `#C6B5CE` — Dark-mode secondary copy; primary text remains #FAF7F2.

## Typography
- **Wordmark, conversation and dialog headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Interface labels, messages and body copy** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Code, keyboard shortcuts and file metadata** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. Desktop: 264px sidebar, 72px main header, 790px reading width, 40px outer main gutters, 20px message gaps, 10px paragraph gaps, 16px field padding. Mobile: 12–16px gutters, 44px minimum touch targets, 12px control gaps. Keep the initial code and table answer compact enough to appear above the composer at 1440×900.
- Radius: 8px small buttons; 10px history active row; 12px code blocks, suggestion cards and popovers; 14px user bubble; 16px composer and dialogs. Avoid excessive pill-shaped containers; reserve pills for small selectors/status.

## Motion
- Use only restrained 120–180ms opacity/color/4–8px movement transitions for controls and overlays.
- Stream newly requested replies locally with deterministic 30–75ms word-group pacing after a 450ms thinking state; completed seeded replies are static on load.
- Autoscroll only near the transcript bottom and preserve the reading position otherwise.
- Respect prefers-reduced-motion: no transforms, blinking cursor, bounce or continuous decoration; response text updates in 150ms batches.

## Imagery
All visuals are original CSS/SVG and real interactive UI. The visual anchor is the polished seeded transcript with a deep-plum syntax-highlighted code block, readable comparison table, warm message bubble and coral controls. Create a simple original two-stroke mark and abstract geometric member avatar in code. No photos, generated raster art, real logos, image services or externally fetched thumbnails. User-selected images are local attachment previews only.

## Tone
Warm, concise, thoughtful and practical. Specific product-work examples, restrained humor, no grand AI claims, no marketing hero.

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-chat-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
