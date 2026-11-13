---
name: "Habit Tracker App Landing Page"
colors:
  cream: "#FFF8F3"
  ink: "#2B2340"
  muted: "#6E6585"
  line: "#EFE6F5"
  peach: "#FFC9B5"
  lilac: "#D9C8FF"
  mint: "#BDEBD8"
  butter: "#FFE9A8"
  violet: "#7C5CFF"
  violet_deep: "#5B3FE0"
  coral: "#FF7A59"
  white: "#FFFFFF"
  frame: "#1E1A2B"
typography:
  display_h1_h2_h3_big_numbers: { family: "Fraunces Variable", weights: [500, 600] }
  body_ui_buttons_and_in_phone_text: { family: "Plus Jakarta Sans Variable", weights: [400, 500, 600, 700] }
spacing: "8px base grid. Content container max-w-6xl (1152px), px-6 mobile / px-8 desktop. Sections py-20 on mobile and py-28 on desktop. Cards use p-6 mobile / p-8 desktop. h1 is 64px/1.05 on desktop and 42px/1.08 on mobile, Fraunces 600, tracking -0.02em. h2 is 48px/1.1 desktop and 34px mobile, Fraunces 600. h3 is 26px Fraunces 500. Body is 18px/1.6 desktop and 16px mobile. Eyebrows are 13px Plus Jakarta 600 uppercase with tracking 0.12em, violet, inside a white pill with a Line border (px-3 py-1)."
radius: "Cards 28px. Inner tiles and calendar cells 14px. Buttons, chips, toggles and eyebrow pills fully rounded (9999px). Phone frame 48px outer and 38px screen at 300px width, scaled proportionally."
---

# Habit Tracker App Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FFF8F3` — Page background and phone screen background
- **Ink** `#2B2340` — Headings, body text, primary download button fill
- **Muted** `#6E6585` — Secondary text, captions, disabled calendar numbers
- **Line** `#EFE6F5` — Card borders, dividers, calendar cell borders
- **Peach** `#FFC9B5` — Gradient blob, Stretch habit color, avatar fill
- **Lilac** `#D9C8FF` — Gradient blob, Read habit color, avatar fill
- **Mint** `#BDEBD8` — Gradient blob, Water habit color, avatar fill
- **Butter** `#FFE9A8` — Gradient blob, streak flame backdrop, avatar fill
- **Violet** `#7C5CFF` — Primary accent: CTAs, toggle pill, active dots, today ring, focus rings
- **Violet Deep** `#5B3FE0` — Hover and pressed state of violet elements
- **Coral** `#FF7A59` — Streak flame icon, savings badge, confetti dots, star ratings
- **White** `#FFFFFF` — Card surfaces, secondary download button, phone notification cards
- **Frame** `#1E1A2B` — CSS phone frame and camera pill

## Typography
- **Display (h1, h2, h3, big numbers)** — Fraunces Variable (OFL), weights 500/600. Self-host the font files.
- **Body, UI, buttons and in-phone text** — Plus Jakarta Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Content container max-w-6xl (1152px), px-6 mobile / px-8 desktop. Sections py-20 on mobile and py-28 on desktop. Cards use p-6 mobile / p-8 desktop. h1 is 64px/1.05 on desktop and 42px/1.08 on mobile, Fraunces 600, tracking -0.02em. h2 is 48px/1.1 desktop and 34px mobile, Fraunces 600. h3 is 26px Fraunces 500. Body is 18px/1.6 desktop and 16px mobile. Eyebrows are 13px Plus Jakarta 600 uppercase with tracking 0.12em, violet, inside a white pill with a Line border (px-3 py-1).
- Radius: Cards 28px. Inner tiles and calendar cells 14px. Buttons, chips, toggles and eyebrow pills fully rounded (9999px). Phone frame 48px outer and 38px screen at 300px width, scaled proportionally.

## Motion
- Background blobs: four absolutely positioned circles (520–720px, filter blur(80px), opacity 0.7) in Peach, Lilac, Mint and Butter, each with animate-drift and a different animation-delay (0s, -6s, -11s, -16s). They sit behind content in a fixed, pointer-events-none layer.
- Section reveal: each section's header and cards fade from opacity 0, y 24 to opacity 1, y 0 over 0.6s with ease [0.22, 1, 0.36, 1] when 20% visible, once only. Card grids stagger children by 0.08s.
- Hero entrance on load: eyebrow, h1, subhead, buttons and rating row stagger in (0.1s apart, 0.7s each, y 20 → 0). The phone enters from y 60, rotate -4deg, opacity 0 to y 0, rotate -4deg, opacity 1 over 0.9s, then loops animate-float.
- Feature screens: when the active step changes, the outgoing screen fades out (opacity 1 → 0, 0.25s) and the incoming one fades in from opacity 0, y 12, scale 0.98 to opacity 1, y 0, scale 1 over 0.45s, using AnimatePresence with mode 'wait'. The blob behind the phone transitions background-color over 0.6s.
- Micro-interactions: buttons lift -2px with a stronger shadow on hover over 0.2s and scale to 0.97 on press. Calendar cells spring-scale to 1.12 and back on tap (stiffness 500, damping 20). The pricing toggle pill slides with a spring (stiffness 400, damping 30) using a shared layoutId.
- Prices swap with a vertical roll: the old number exits to y -12 with opacity 0 and the new one enters from y 12 over 0.3s.
- Milestone confetti: 12 small circles (6–8px) in Coral, Violet, Mint and Butter burst from the stats ring outward at random angles (40–90px), fading out over 0.8s.
- prefers-reduced-motion: no blob drift, no float, no marquee movement (the chips wrap as a static centered row), no confetti, no entrance transforms (content is visible immediately), and feature screens swap with no transition.

## Imagery
No photos or bitmaps. Everything is drawn in code: pastel blurred blobs in CSS, the phone and every in-app screen in HTML/CSS, the logo and favicon as inline SVG, avatars as colored circles with initials, icons from lucide-react, and the confetti as divs. A faint grain overlay (an inline SVG feTurbulence data URI, opacity 0.04, fixed, pointer-events-none) sits above the blobs.

## Tone
Warm, encouraging and lightly playful. Short sentences, no guilt and no hustle language. Feels like a friend who remembers things for you.

---
— Prompt by VibeFather · https://vibefather.ai/t/habit-tracker-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
