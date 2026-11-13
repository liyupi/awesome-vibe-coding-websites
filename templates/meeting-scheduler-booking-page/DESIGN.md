---
name: "Meeting Scheduler Booking Page"
colors:
  parchment: "#F2F0E9"
  paper: "#FFFEFA"
  ink: "#17231E"
  slate_moss: "#64716A"
  hairline: "#D8DDD5"
  pine: "#1F4A3A"
  citron: "#DDF47A"
  mint_wash: "#E8F1E8"
typography:
  host_headline_and_step_titles: { family: "Instrument Serif", weights: [400] }
  interface_body_labels_buttons_and_numerical_time_display: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base unit. Header height 76px; desktop page gutters 32px; workspace outer padding 0 with a 360px host rail and flexible content column. Host rail padding 40px; workspace padding 40px; card padding 20px; field gaps 16px; section gaps 24px. Maximum content width 1240px. At mobile use 16px page gutters, 24px panel padding, and minimum 44px tap targets."
radius: "Workspace 28px, meeting cards 16px, summary panels 14px, inputs and slot buttons 10px, primary buttons 999px, availability dots 50%. Use one 1px Hairline border and a restrained 0 20px 60px rgba(23,35,30,0.08) workspace shadow; avoid nested floating cards and heavy shadows."
---

# Meeting Scheduler Booking Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F2F0E9` — Page background and quiet footer areas
- **Paper** `#FFFEFA` — Booking workspace, cards, and form fields
- **Ink** `#17231E` — Primary text and high-contrast icons
- **Slate moss** `#64716A` — Secondary copy, inactive dates, and metadata
- **Hairline** `#D8DDD5` — Borders, calendar grid separators, and dividers
- **Pine** `#1F4A3A` — Host panel, primary buttons, and selected calendar day
- **Citron** `#DDF47A` — Available-day dots, active progress, selected slots, and focus accents
- **Mint wash** `#E8F1E8` — Summary panels, success background, and subtle hover fills

## Typography
- **Host headline and step titles** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Interface, body, labels, buttons, and numerical time display** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Header height 76px; desktop page gutters 32px; workspace outer padding 0 with a 360px host rail and flexible content column. Host rail padding 40px; workspace padding 40px; card padding 20px; field gaps 16px; section gaps 24px. Maximum content width 1240px. At mobile use 16px page gutters, 24px panel padding, and minimum 44px tap targets.
- Radius: Workspace 28px, meeting cards 16px, summary panels 14px, inputs and slot buttons 10px, primary buttons 999px, availability dots 50%. Use one 1px Hairline border and a restrained 0 20px 60px rgba(23,35,30,0.08) workspace shadow; avoid nested floating cards and heavy shadows.

## Motion
- On step changes, fade the outgoing content and move the incoming content 12px upward over 220ms with ease-out; preserve the workspace height where possible to avoid jumps.
- Meeting selection fills a small radio and changes the border to Pine over 160ms; selected time slots receive Citron with a 160ms scale-in check, never a large bounce.
- Month changes slide the calendar grid 10px horizontally while crossfading over 180ms; availability dots do not animate individually.
- On confirmation, draw the check stroke once over 320ms and fade the summary in after 80ms.
- Accordion answers expand with a 180ms height-and-opacity transition. Honor prefers-reduced-motion by removing transforms, sliding, stroke animation, and smooth scrolling while keeping immediate state changes.

## Imagery
No photography, portraits, generated bitmap images, or external illustration. The first-screen visual anchor is the rich, functional scheduling workspace itself: a deep Pine host rail, layered progress indicator, meeting cards, calendar grid, availability dots, time zone control, and precise selection states. Add only an original code-drawn brand mark made from two offset rounded rectangles and a small circular check motif; do not imitate a known scheduling logo.

## Tone
Warm, organized, and quietly personable. Use direct language, specific meeting outcomes, generous spacing, and no sales pressure, productivity clichés, or invented customer metrics.

---
— Prompt by VibeFather · https://vibefather.ai/t/meeting-scheduler-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
