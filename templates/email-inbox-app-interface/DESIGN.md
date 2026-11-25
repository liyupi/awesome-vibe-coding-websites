---
name: "Email Inbox App Interface"
colors:
  slate: "#0F172A"
  panel: "#1E293B"
  raised: "#273449"
  line: "#334155"
  text: "#F8FAFC"
  muted: "#94A3B8"
  accent: "#FF6B5A"
  white: "#FFFFFF"
  ink: "#1E293B"
  mist: "#E2E8F0"
  slatemuted: "#64748B"
typography:
  ui_everything_in_the_interface: { family: "Onest Variable", weights: [400, 500, 600, 700] }
  mono_timestamps_keyboard_hints_attachment_sizes: { family: "JetBrains Mono Variable", weights: [400, 500] }
spacing: "Density is high: list rows 56px (72px with a snippet line), sidebar items 32px, pane padding 12px, 4px rhythm; reading pane text 15px with 1.6 line-height and a max width of 640px."
radius: "Panels and composer 12px; buttons 8px; chips and avatars rounded-full; inputs 8px."
---

# Email Inbox App Interface — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **slate** `#0F172A` — Dark theme app background
- **panel** `#1E293B` — Dark theme side and top bars; light theme primary text
- **raised** `#273449` — Dark theme hover rows, selected chips, composer
- **line** `#334155` — Dark theme borders and dividers
- **text** `#F8FAFC` — Dark theme text
- **muted** `#94A3B8` — Dark theme secondary text
- **accent** `#FF6B5A` — Warm coral: unread dots and bold unread text, primary buttons with slate text, selection, the compose button
- **white** `#FFFFFF` — Light theme background and buttons
- **ink** `#1E293B` — Light theme text; text on coral
- **mist** `#E2E8F0` — Light theme borders
- **slateMuted** `#64748B` — Light theme secondary text

## Typography
- **UI / everything in the interface** — Onest Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono / timestamps, keyboard hints, attachment sizes** — JetBrains Mono Variable (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Density is high: list rows 56px (72px with a snippet line), sidebar items 32px, pane padding 12px, 4px rhythm; reading pane text 15px with 1.6 line-height and a max width of 640px.
- Radius: Panels and composer 12px; buttons 8px; chips and avatars rounded-full; inputs 8px.

## Motion
- Pane changes cross-fade 150ms; list rows slide out 200ms on archive or delete.
- Composer opens with a 220ms scale from 0.98 and fade; toasts slide up 200ms and leave after 3 seconds.
- Bulk action bar slides down from under the toolbar 200ms; hover states 120ms.
- Snooze and star controls scale to 0.9 and back on press.
- prefers-reduced-motion: everything switches instantly with no fades or slides.

## Imagery
None. No photographs or illustrations: avatars are circles in a colour derived from the sender's name with white initials; icons come from lucide; the first screen is carried by the density and polish of the interface itself.

## Tone
Calm, compact and neutral. Interface labels are short and plain; the seeded messages read like real work email.

---
— Prompt by VibeFather · https://vibefather.ai/t/email-inbox-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
