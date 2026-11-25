---
name: "Discussion Forum Website"
colors:
  midnight: "#101935"
  midnightsoft: "#1C2650"
  star: "#FFD166"
  pink: "#EF476F"
  page: "#EEF1F8"
  card: "#FFFFFF"
  ink: "#1B2140"
  muted: "#5B6280"
  line: "#DFE3EF"
  teal: "#118AB2"
  green: "#0E9F7A"
  violet: "#7B61FF"
  orange: "#E07A1F"
  gold: "#A37A00"
typography:
  display_headings_and_thread_titles: { family: "Epilogue Variable", weights: [700, 900] }
  body_ui_and_post_text: { family: "Albert Sans Variable", weights: [400, 500, 600] }
  mono_timestamps_counts_handles: { family: "DM Mono", weights: [400, 500] }
spacing: "Page max-w-[1200px] px-6; cards rounded-[14px] with a 1px line border and p-5; list rows py-4 with 1px line separators; 8px rhythm."
radius: "Cards 14px; buttons 10px; chips and avatars rounded-full; inputs 10px."
---

# Discussion Forum Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **midnight** `#101935` — Header, composer button text, moderator badge, primary text on star yellow
- **midnightSoft** `#1C2650` — Hover rows on midnight, footer
- **star** `#FFD166` — Star yellow: the New thread button, active tab underline, stars in the header chart, highlights; always with midnight text
- **pink** `#EF476F` — Nebula pink: unread dot on the bell, report reasons, lock icon, moderation actions
- **page** `#EEF1F8` — Page ground
- **card** `#FFFFFF` — Soft white cards
- **ink** `#1B2140` — Text
- **muted** `#5B6280` — Secondary text and timestamps
- **line** `#DFE3EF` — Card borders and dividers
- **teal** `#118AB2` — Category colour: Telescopes & gear; Verified observer badge
- **green** `#0E9F7A` — Category colour: Observing reports
- **violet** `#7B61FF` — Category colour: Astrophotography; Top contributor badge
- **orange** `#E07A1F` — Category colour: Events & star parties; Event host badge
- **gold** `#A37A00` — Category text and dots for the yellow category (AA on white)

## Typography
- **Display / headings and thread titles** — Epilogue Variable (OFL), weights 700/900. Self-host the font files.
- **Body / UI and post text** — Albert Sans Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono / timestamps, counts, handles** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Page max-w-[1200px] px-6; cards rounded-[14px] with a 1px line border and p-5; list rows py-4 with 1px line separators; 8px rhythm.
- Radius: Cards 14px; buttons 10px; chips and avatars rounded-full; inputs 10px.

## Motion
- Scroll reveals on the home page: category cards fade up 20px over 350ms with a 40ms stagger, once; content is visible by default.
- Reactions scale to 1.2 and back on press; the count updates at once.
- Poll bars animate to their new widths 300ms after a vote.
- Composer tabs and thread sort tabs switch with a 150ms fade; the mobile drawer slides in 220ms.
- prefers-reduced-motion: everything changes instantly.

## Imagery
No photographs or illustrations. Avatars are circles in a colour from the member's name with white initials; the header carries a code-drawn star chart; icons come from lucide. Soft white cards on a pale page under a midnight header, with star yellow and nebula pink as the only strong accents plus one colour per category.

## Tone
Friendly and specific, like a club newsletter written by members: real questions, real answers, no corporate community-speak.

---
— Prompt by VibeFather · https://vibefather.ai/t/discussion-forum-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
