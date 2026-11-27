---
name: "Personal Expense Tracker App"
colors:
  light_canvas: "#F6F7F9"
  card_white: "#FFFFFF"
  deep_ink: "#0F172A"
  crisp_emerald: "#059669"
  alert_rose: "#E11D48"
  slate_muted: "#64748B"
typography:
  app_headings_and_ui: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  monetary_balances_keypad_digits_and_percentages: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) uses edge-to-edge 16px horizontal padding with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=1024px) uses a 240px left navigation sidebar + max-w-6xl 2-column responsive workspace."
radius: "16px for hero summary card and bottom sheets, 12px for transaction rows and budget cards, 999px for category filter chips."
---

# Personal Expense Tracker App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Light Canvas** `#F6F7F9` — Primary light-mode app background
- **Card White** `#FFFFFF` — Elevated mobile and desktop cards
- **Deep Ink** `#0F172A` — Primary balances, headings, and dark-mode background
- **Crisp Emerald** `#059669` — Income, remaining budget ring, safe progress bars, and primary '+' CTA
- **Alert Rose** `#E11D48` — Expenses, over-budget warnings, and delete confirmations
- **Slate Muted** `#64748B` — Secondary labels, timestamps, and inactive tab icons

## Typography
- **App headings and UI** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Monetary balances, keypad digits, and percentages** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) uses edge-to-edge 16px horizontal padding with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=1024px) uses a 240px left navigation sidebar + max-w-6xl 2-column responsive workspace.
- Radius: 16px for hero summary card and bottom sheets, 12px for transaction rows and budget cards, 999px for category filter chips.

## Motion
- Smooth slide-up sheet reveal for the Add/Edit Expense numeric keypad drawer.
- Animated SVG ring arc and budget progress bar transitions when adding or editing transactions.
- Respects prefers-reduced-motion; all content visible immediately.

## Imagery
Pure code-drawn finance visuals: SVG spend-vs-budget summary ring, interactive SVG category donut chart, 7-day spend bar chart, crisp Lucide category icons, and zero stock photos.

## Tone
Calm, crisp, trustworthy, clutter-free financial clarity.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-expense-tracker-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
