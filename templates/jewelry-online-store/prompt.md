# Jewelry Online Store

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a complete four-page fine jewelry storefront for [BRAND], a fictional independent studio in [CITY] presenting the [COLLECTION] collection in [MATERIAL]. Pages: index.html, shop.html, product.html?p=<slug> (show the first product when opened without a query), and checkout.html. Include combined metal and stone filters, sorting, product galleries, ring sizing, engraving, gift wrapping and messages, a persistent cart drawer, and a three-step mock checkout. Complimentary shipping applies above $[SHIP_FREE]. Everything runs in the browser; no payment, order, or email is ever transmitted.

- Audience: Independent jewelry studios and small design-led retailers, and shoppers who want clear materials, sizing, personalization, and delivery information before committing to a considered gift or personal keepsake.
- Goal: Make a small collection feel tangible and trustworthy, help a visitor configure a piece without hunting for information, and provide a complete static shopping journey from discovery through mock confirmation.
- Tone: Intimate, precise, and assured. Use concise sensory language and concrete product facts rather than superlatives, urgency, or generic luxury clichés.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/cormorant-garamond (OFL-1.1), @fontsource/manrope (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Create four real HTML entry pages at the project root: index.html (src/main-home.tsx), shop.html (src/main-shop.tsx), product.html (src/main-product.tsx), and checkout.html (src/main-checkout.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), shop: resolve(__dirname, 'shop.html'), product: resolve(__dirname, 'product.html'), checkout: resolve(__dirname, 'checkout.html') } } }. Do not copy src/ into dist/.
  - Use Tailwind 3.4 through PostCSS with content ['./index.html', './shop.html', './product.html', './checkout.html', './src/**/*.{ts,tsx}']. Add every Design color to theme.extend.colors with kebab-case keys; fontFamily display ['Cormorant Garamond', 'Georgia', 'serif'] and sans ['Manrope', 'system-ui', 'sans-serif']; maxWidth container 1360px.
  - In src/fonts.ts import @fontsource/cormorant-garamond/400.css, /500.css and /600.css plus @fontsource/manrope/400.css, /500.css, /600.css and /700.css. Import src/fonts.ts and src/index.css from all four entries.
  - Centralize every string, price, product, variant, filter, policy, image path, and checkout label in typed src/content.ts. Add src/lib/brand.ts to derive brandSlug from [BRAND] by lowercasing and replacing runs of non-alphanumerics with hyphens, and emailDomain by removing hyphens and appending '.com'. Add safe localStorage helpers in src/lib/storage.ts with keys prefixed by brandSlug.
  - src/lib/product.ts reads product.html?p=<slug> and returns the matching product or the first product for a missing or unknown slug, never a not-found state. src/lib/price.ts centralizes base price, engraving (+$25), gift wrap (+$8 per line), quantity, merchandise subtotal, shipping ($12 below $[SHIP_FREE], otherwise $0), and total calculations.
  - Use a tiny external cart store in src/store/cart.ts with useSyncExternalStore. A line stores product slug, variant, size, engraving, giftWrap, giftMessage, quantity, and a composite key. Expose addLine, setQuantity (1–6), removeLine, clearCart, openCart, and closeCart; persist lines under brandSlug + ':cart' and rehydrate safely on every HTML page.
  - Components: AnnouncementBar, Header, MobileMenu, Footer, CartButton, CartDrawer, ProductCard, Reveal, Newsletter, Hero, FeaturedPieces, MaterialStory, GiftPanel; shop FilterBar and ProductGrid; product Gallery, VariantPicker, RingSizeDialog, EngravingField, GiftOptions, PurchasePanel, ProductAccordions and RelatedPieces; checkout CheckoutSteps, DetailsForm, DeliveryForm, ReviewOrder and MockConfirmation. Every page renders the shared announcement, header, cart drawer, and footer.
  - Before the first build, download each image listed under Assets with curl -L -o into public/images/ using the exact file names. Runtime code and the build never fetch remote assets.
  - Create public/favicon.svg as described under Assets. All HTML files use lang='en', <meta name='theme-color' content='#F4EFE6'>, and a local favicon link. Titles: '[BRAND] — [COLLECTION]' on home, 'The collection — [BRAND]' on shop, 'Shop — [BRAND]' on product (replace with the product name on load), and 'Checkout — [BRAND]' on checkout.
  - Write ASSETS.md at the project root exactly as described under Assets. Keep dist/ under 20 MB with hashed local JS/CSS, woff2 fonts, four HTML files, favicon, and six images.

## Variables
- [BRAND] — Jewelry brand (default: "Aurel & Vale"). Invented studio name used for the text wordmark, titles, footer, derived email domain, and localStorage keys. Never use a real jewelry house or retailer.
- [CITY] — Studio city (default: "Portland, Oregon"). Used in the studio story, shipping copy, and footer. The city may be real; the street address and business remain invented.
- [COLLECTION] — Collection name (default: "Still Light"). Two or three words used in the hero eyebrow, featured-piece introduction, and document titles.
- [MATERIAL] — Material story (default: "Recycled gold and white sapphire"). The collection's primary material and stone story. Drives hero, material-story, product, and care copy while retaining the same layout.
- [SHIP_FREE] — Free shipping threshold (default: "150"). Digits only. Drives the announcement, cart shipping calculation, progress message, and checkout review. Keep it between 100 and 300.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/jewelry-online-store in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/jewelry-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/jewelry-online-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
