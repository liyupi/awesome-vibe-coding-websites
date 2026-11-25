# Online Grocery Delivery Store

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A grocery shop: aisles and search; quick add with quantity steppers; a delivery slot picker; substitution preferences; recipes that add all their ingredients to the cart; reorder past orders; and a basket with a running total and a free-delivery meter. Product photographs come from one bright studio shoot with no brand labels. Leaf green #2DB34A, tomato #FF5A3C and banana #FFE066 on white.

- Audience: Independent grocers and farm shops that deliver, and developers building a food-commerce interface.
- Goal: Fill a basket quickly, choose a delivery slot and place a sample order, or come back and reorder.
- Tone: Cheerful and practical: short product names, clear prices, no supermarket slogans.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/baloo-2 (OFL-1.1), @fontsource/nunito (OFL-1.1), @fontsource/dm-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors leaf #2DB34A, leafDark #187A2E, tomato #FF5A3C, tomatoDark #D93A1E, banana #FFE066, white #FFFFFF, cream #FAFAF7, ink #1B2420, muted #56635C, line #E6EAE6; fontFamily display 'Baloo 2', sans 'Nunito', mono 'DM Mono'.
  - Product tiles crop one cell out of the five 3 × 3 product sheets: src/components/ProductTile.tsx takes an image file and a cell (col and row from 0 to 2) and renders a square div with background-image, background-size: 300% 300% and background-position: (col × 50)% (row × 50)%.
  - A small hash router reads location.hash: #/ (shop), #/recipes, #/basket, #/orders; scroll to top on route change. No router library.
  - src/data/seed.ts holds the 45 products, aisles, recipes, delivery slots and two past orders; src/store/useShop.ts is a reducer for basket, slot, substitutions, orders and past-order reordering, persisting to localStorage under the keys [BRAND_SLUG]-basket, -orders and -prefs, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.
  - Delivery days are labelled Today, Tomorrow and the next five weekday names, computed from the real clock; slot prices and availability come from the seed.
  - All copy, aisle names, search suggestions and form labels live in src/content.ts; components never hard-code copy.

## Variables
- [BRAND] — Shop name (default: "Greenlane Grocers")
- [CITY] — Delivery town (default: "Maplewood")
- [FREE_DELIVERY] — Basket total that unlocks free delivery (default: "$40")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/online-grocery-delivery-store in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/online-grocery-delivery-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/online-grocery-delivery-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
