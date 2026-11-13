# Marketplace Shopping App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a dense, polished marketplace shopping web app for [BRAND], an invented multi-store destination for [AUDIENCE]. The default content centers on [FEATURED_COLLECTION], with the promise '[TAGLINE]'. Include a discovery storefront, a complete product detail view, and a seller-grouped cart. Use fictional English products, stores, reviews, prices, stock, and promotions; make every control work against shared client-side state.

- Audience: Design-conscious shoppers who enjoy discovering useful objects from independent stores, and makers or small retail teams who need a rich static marketplace interface they can adapt without backend infrastructure.
- Goal: Let a visitor move from discovery to a confident simulated order: search or filter, open a product, select an in-stock color and size, add it to a multi-store cart, claim eligible coupons, and understand every discount and shipping line before reviewing the order.
- Tone: Lively, warm, useful, and specific. Use concise shopping language, believable product details, transparent sample-data labels, and playful promotional moments without urgency tricks or real transaction claims.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL), @fontsource-variable/inter (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure Vite with base './' and sourcemap false; the production command must emit only static files to dist/.
  - Use hash routes for the storefront, product, and cart views; direct navigation to #/product selects the first catalog product when no product has been chosen.
  - Keep every product, store, category, coupon, review, navigation label, and variable-derived copy value in src/content.ts; rewrite the default copy when variable values change.
  - Create one shared marketplace store with React context and reducers for query, category, selected product and SKU, claimed coupons, cart lines, and recommendation batches.
  - Persist claimed coupons and cart lines in localStorage under the generic key marketplace-shopping-state-v1; validate stored quantities against current stock when loading.
  - Use Lucide icons through lucide-react and self-host both font families through the listed Fontsource packages; import only the weights and styles used.
  - Implement transitions with CSS and Web Animations only, with a prefers-reduced-motion override; do not add a motion or state-management dependency.
  - Keep the production bundle below 20 MB, use relative image paths, and do not copy src/ into dist/.

## Variables
- [BRAND] — Marketplace brand (default: "Tote & Timber"). An invented two- or three-word marketplace name; derive a simple text wordmark from it.
- [TAGLINE] — Storefront promise (default: "Useful things, joyfully found."). A short original sentence for the discovery header and empty states.
- [AUDIENCE] — Shopper audience (default: "design-loving shoppers hunting for useful home and everyday goods"). Rewrite recommendations, category descriptions, and promotional copy for this audience.
- [FEATURED_COLLECTION] — Featured collection (default: "The Weekend Edit"). Name the flash-sale and discovery story; adapt the product catalog and section copy to fit it.
- [CURRENCY] — Display currency (default: "USD"). Use Intl.NumberFormat for every price and keep all calculations in integer minor units.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/marketplace-shopping-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/marketplace-shopping-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/marketplace-shopping-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
