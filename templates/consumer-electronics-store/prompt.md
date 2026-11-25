# Consumer Electronics Store

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a multi-category consumer electronics store for [STORE_NAME] ([TAGLINE]; support: [SUPPORT_EMAIL]) in pure crisp white (#FFFFFF), graphite (#1C1F24), electric blue (#2D6BFF), and sale red (#FF3B30). All devices are invented, brand-free industrial hardware across five series (Core, Air, Studio, Optic, Echo-free Acoustic) photographed in one uniform light-grey studio shoot with zero logos or readable text. Sync seven hash routes bidirectionally with window.location.hash: (1) #/home — Editorial hardware showcase hero featuring flagship matte laptop & phone, quick category tiles, Deals spotlight, and top-rated picks; (2) #/category — Multi-category catalog with interactive Mega Menu dropdown plus spec filters (Category, Price Ceiling, Series Name, Screen/Driver Size, Minimum Battery Hours, Finish Color) and '+ Compare' pins; (3) #/product — Full Product Detail page with studio gallery, Finish Color swatches, Storage/Tier variants updating price live, Add to Cart + optional 2-Year Care+ Protection Plan checkbox, structured Spec Table, and customer reviews; (4) #/compare — Side-by-side comparison table supporting up to 3 selected products with highlighted best-in-class specs and quick Add to Cart buttons; (5) #/deals — Curated Deals page with red (#FF3B30) savings pills, stock meters, and instant bundle discounts; (6) #/checkout — Three-step Mock Checkout flow (Shipping → Delivery Speed → Review & Place Demo Order, clearly labelled no real payment) that automatically creates a real trackable order code; (7) #/track — Order Tracking lookup pre-seeded with two sample order IDs ('VG-84210' and 'VG-91045') plus any newly placed mock order showing a 4-stage fulfillment stepper. Include a persistent slide-over Cart Drawer accessible from every page with quantity steppers and per-item 2-Year Protection Plan add-on toggles. Zero calendar dates or 4-digit years anywhere.

- Audience: Everyday shoppers, creatives, hardware enthusiasts, and e-commerce teams.
- Goal: Make technical hardware comparison, variant selection, protection add-ons, and mock checkout effortless and trustworthy.
- Tone: Precision industrial design—uncluttered, technical specs presented cleanly with crisp visual restraint.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600) in src/main.tsx.
  - Bundle all 5 generated brand-free studio product WebP photos locally under public/images/ and document them in ASSETS.md.
  - Persist cart items, protection plan selections, compare IDs, and placed mock orders in localStorage; sync all routes bidirectionally with window.location.hash.

## Variables
- [STORE_NAME] — Storefront Name (default: "VoltGrid Hardware"). Fictional consumer electronics store name
- [TAGLINE] — Storefront Tagline (default: "Engineered Essentials. Zero Brand Markup."). Short industrial-design headline tagline
- [SUPPORT_EMAIL] — Support Email (default: "support@voltgrid.example"). Sample RFC-2606 .example support address
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/consumer-electronics-store in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/consumer-electronics-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/consumer-electronics-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
