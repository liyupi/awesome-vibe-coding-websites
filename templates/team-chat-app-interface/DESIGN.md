---
name: "Team Chat App Interface"
colors:
  light_canvas: "#F4F3F7"
  light_surface: "#FFFFFF"
  light_sidebar: "#ECEAF2"
  light_hover: "#F7F5FA"
  light_text: "#25222C"
  light_muted: "#706A7B"
  light_border: "#DCD8E3"
  violet_accent: "#7051C8"
  violet_soft: "#E8E1F7"
  presence_green: "#2E8B68"
  dark_canvas: "#141219"
  dark_surface: "#1D1A24"
  dark_sidebar: "#19161F"
  dark_raised: "#282331"
  dark_text: "#F0EDF5"
  dark_muted: "#AAA3B6"
  dark_border: "#383240"
  dark_violet_accent: "#B39AEF"
typography:
  brand_workspace_and_pane_headings: { family: "Manrope Variable", weights: [600, 700, 800] }
  messages_controls_metadata_and_body_copy: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base scale. Desktop is a 100dvh grid with a 248px channel sidebar, a fluid minmax(0,1fr) conversation, and a 248px member pane. Pane headers are 64px tall. Sidebar rows are 36px with 10px horizontal padding; message rows use 12px vertical and 20px horizontal padding with 36px avatars and 12px text-column gaps. Keep the conversation readable with a 760px maximum text width. The composer sits 16px from the conversation edges and 12px from the bottom."
radius: "Use 8px for channel rows and small buttons, 12px for fields and reaction chips, 14px for the composer, 16px for popovers and drawers, and full circles for avatars and status dots. Panes are border-separated rather than floating cards; only overlays use a restrained 0 16px 40px rgb(20 15 30 / 0.18) shadow."
---

# Team Chat App Interface — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Light canvas** `#F4F3F7` — Overall app background and narrow gutters behind the workspace.
- **Light surface** `#FFFFFF` — Conversation pane, composer, search fields, and primary controls.
- **Light sidebar** `#ECEAF2` — Channel sidebar and member directory background.
- **Light hover** `#F7F5FA` — Message-row hover, selected subtle surfaces, and reaction-chip background.
- **Light text** `#25222C` — Primary headings, message text, and important labels.
- **Light muted** `#706A7B` — Timestamps, secondary labels, channel descriptions, and inactive icons.
- **Light border** `#DCD8E3` — One-pixel pane dividers, input borders, and separators.
- **Violet accent** `#7051C8` — Selected channel, primary send button, mention text, focus rings, and active controls in light mode.
- **Violet soft** `#E8E1F7` — Selected-channel background, active reaction chips, and soft badges in light mode.
- **Presence green** `#2E8B68` — Online status dots and small success confirmations in both themes.
- **Dark canvas** `#141219` — Overall app background in dark mode.
- **Dark surface** `#1D1A24` — Conversation, composer, fields, and popovers in dark mode.
- **Dark sidebar** `#19161F` — Channel and member panes in dark mode.
- **Dark raised** `#282331` — Hovered rows, selected subtle surfaces, and overlay borders in dark mode.
- **Dark text** `#F0EDF5` — Primary text and active icons in dark mode.
- **Dark muted** `#AAA3B6` — Secondary text, timestamps, and inactive icons in dark mode.
- **Dark border** `#383240` — Pane, field, and overlay dividers in dark mode.
- **Dark violet accent** `#B39AEF` — Active text, focus, mentions, and selected details in dark mode; pair solid primary buttons with #21182F text.

## Typography
- **Brand, workspace, and pane headings** — Manrope Variable (OFL), weights 600/700/800. Self-host the font files.
- **Messages, controls, metadata, and body copy** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. Desktop is a 100dvh grid with a 248px channel sidebar, a fluid minmax(0,1fr) conversation, and a 248px member pane. Pane headers are 64px tall. Sidebar rows are 36px with 10px horizontal padding; message rows use 12px vertical and 20px horizontal padding with 36px avatars and 12px text-column gaps. Keep the conversation readable with a 760px maximum text width. The composer sits 16px from the conversation edges and 12px from the bottom.
- Radius: Use 8px for channel rows and small buttons, 12px for fields and reaction chips, 14px for the composer, 16px for popovers and drawers, and full circles for avatars and status dots. Panes are border-separated rather than floating cards; only overlays use a restrained 0 16px 40px rgb(20 15 30 / 0.18) shadow.

## Motion
- Use 140–180ms ease-out transitions for hover backgrounds, icon color, border color, reaction state, and theme changes; never animate the full message list continuously.
- Append a sent message with a 160ms fade and translateY(4px) entrance, then scroll it into view smoothly unless reduced motion is requested.
- Open emoji, mention, reaction, and workspace popovers with a 120ms opacity and scale(0.98 to 1) transition anchored to their triggering control.
- Slide the reply panel or mobile drawers 12px into place with a 180ms ease-out transition and fade their backdrop; avoid large parallax or scroll-jacking effects.
- Under prefers-reduced-motion: reduce, remove entrance, sliding, smooth-scroll, and theme transitions while preserving immediate state feedback.

## Imagery
No photographs, generated bitmaps, stock assets, or external avatar services. The rich application UI is the first-screen visual anchor. Draw eight distinct fictional people as original inline SVG geometric portraits with simple head-and-shoulder shapes, varied skin tones, hair shapes, clothing, and violet, coral, ochre, teal, and blue backgrounds; do not use initials-only avatars or resemble real individuals. Create an original [BRAND] mark from two interlocking rounded loops. Use Lucide for interface icons and plain system-rendered Unicode characters for emoji, never downloaded emoji artwork.

## Tone
Warm, focused, and quietly playful. Use concise, believable workplace messages with specific decisions and helpful responses; avoid corporate slogans, forced enthusiasm, and generic lorem ipsum.

---
— Prompt by VibeFather · https://vibefather.ai/t/team-chat-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
