# Food Delivery Mobile App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A responsive mobile-first neighborhood food delivery & takeout ordering PWA ([BRAND]) serving [NEIGHBORHOOD]. Mobile (<768px) features a bottom tab bar (Explore, Search, Orders, Account), slide-up dish customization bottom sheet, and floating cart pill; desktop expands into a sidebar + multi-column restaurant grid + sticky cart rail. No fake phone frame.

- Audience: Local diners ordering neighborhood meals on mobile or desktop, plus independent food marketplaces launching a branded ordering app.
- Goal: Deliver a fast, appetizing, end-to-end ordering experience from cuisine browsing and dish customization through promo checkout and animated courier map tracking.
- Tone: Warm, appetizing, neighborhood-friendly, fast, and clear.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Download all 6 cohesive culinary WebP images listed in Assets into public/images/ and reference via ./images/...
  - Keep all fictional neighborhood kitchens, menu items, customization add-ons, and seeded past/active orders in src/data/marketplace.ts; persist cart, favorites, promo state, and orders in localStorage.
  - Never wrap the interface in a fake phone bezel; use true responsive layouts (mobile bottom tabs + sheets <768px; desktop navigation + multi-column browse + sticky cart rail >=1024px).

## Variables
- [BRAND] — Marketplace app name (default: "SaffronRun"). Fictional local food delivery PWA name
- [NEIGHBORHOOD] — Delivery address / district (default: "Maple Quarter · 218 Cedar St"). Fictional delivery location header
- [PROMO_CODE] — Working promo code mock (default: "WELCOME5"). Applies $5 discount in cart drawer
- [USER_NAME] — Diner profile name (default: "Liam Ortiz"). Fictional account user name
- [DELIVERY_FEE] — Standard delivery fee (default: "$2.49"). Displayed on restaurant cards and cart summary
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/food-delivery-mobile-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/food-delivery-mobile-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/food-delivery-mobile-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
