# Fashion Online Store

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A four-page storefront for [BRAND], a small fashion label working [MATERIAL] out of [CITY], free shipping over $[SHIP_FREE]. It must behave like a real store: a campaign home, a collection grid with filters and sort, product pages with variants, a size guide and quantity, an about page, a cart drawer with a free-shipping progress bar, and a mock checkout (shipping form → review → order placed) that is clearly a demo and entirely client-side. Pages: index.html, shop.html, product.html?p=<slug> (first product when opened without a query), about.html. The cart persists in localStorage. Nothing is submitted or charged anywhere.

- Audience: Readers of quiet fashion newsletters, 28–50, buying fewer and better garments. They check fabric first, price second, and abandon stores that make them hunt for size info or shipping costs.
- Goal: Sell garments and build the mailing list. Within ten seconds a visitor should feel the label's aesthetic and see new arrivals; within two minutes they should have a variant picked and see the shipping bar move.
- Tone: Calm and specific, like a good garment tag. Short lines, concrete fabric and care facts, no hype adjectives, no exclamation marks.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/playfair-display (OFL-1.1), @fontsource-variable/figtree (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Four real HTML pages at the project root: index.html (entry src/main-home.tsx), shop.html (src/main-shop.tsx), product.html (src/main-product.tsx) and about.html (src/main-about.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), shop: resolve(__dirname, 'shop.html'), product: resolve(__dirname, 'product.html'), about: resolve(__dirname, 'about.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './shop.html', './product.html', './about.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (bone, warm-white, linen, card, ink, ink-soft, taupe, rule, ochre, ochre-deep, olive-gray) and fontFamily display ['Playfair Display Variable', 'Georgia', 'serif'], sans ['Figtree Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 2px — nearly square — and add maxWidth { container: '1280px' }.
  - In src/fonts.ts import '@fontsource-variable/playfair-display' and '@fontsource-variable/figtree'; import src/fonts.ts and src/index.css from all four entry files.
  - File layout: src/content.ts (every string, number, product, variant, color, size, filter, policy, material line and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/product.ts (reads the query 'product.html?p=<slug>', returns the matching product or the first — never a not-found), src/lib/filters.ts (applyFilters + sortProducts with the bands in content.ts).
  - State: src/store/cart.ts is a tiny external store (useSyncExternalStore) holding lines { key: '<slug>|<color>|<size>', slug, color, size, qty } plus drawer open state and the checkout step, persisted to localStorage key brandSlug + ':cart'. addToCart, setQty, removeLine, openCart, closeCart; every page can open the drawer from the header.
  - Components in src/components/: AnnouncementBar.tsx, Header.tsx, MobileMenu.tsx, CartButton.tsx (with count badge), CartDrawer.tsx (LineRow.tsx, FreeShipBar.tsx), Checkout.tsx (ShippingForm.tsx, Review.tsx, Placed.tsx), ProductCard.tsx (hover photo swap, color dots), Reveal.tsx, Eyebrow.tsx, Newsletter.tsx, Footer.tsx; home: Hero.tsx, NewArrivals.tsx, MaterialsStrip.tsx, EditorialBand.tsx; shop: ShopMasthead.tsx, FilterBar.tsx (chips + SortSelect), Grid.tsx; product: Gallery.tsx, VariantPicker.tsx (ColorSwatches, SizePicker), QtyStepper.tsx, SizeGuide.tsx (accordion with the drawn table), AddToCart.tsx, CareFacts.tsx, Related.tsx; about: Story.tsx, Process.tsx, ContactBlock.tsx. src/pages/Home.tsx, Shop.tsx, Product.tsx, About.tsx compose them; every page renders AnnouncementBar, Header, CartDrawer and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. All four HTML files: lang en, <meta name='theme-color' content='#FAF7F1'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[BRAND] — [MATERIAL] made in [CITY]</title>', shop.html '<title>Shop all — [BRAND]</title>', product.html '<title>Shop — [BRAND]</title>' (the product page sets document.title to the product name on load), about.html '<title>About — [BRAND]</title>'.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the four HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 12 MB.

## Variables
- [BRAND] — Label name (default: "Fold and Grain"). Invented fashion label name. Used in the wordmark, titles, announcement bar, footer, email (hello@ + brandSlug without hyphens + .com) and localStorage keys. Never a real label or retailer.
- [CITY] — Studio city (default: "Lisbon, Portugal"). Where the label works. Used in the about story, the made-in line and the footer. Real cities are fine; the studio street stays invented.
- [MATERIAL] — Materials (default: "Linen and merino"). The two fabrics the label builds on, title case ('Linen and merino', 'Organic cotton and denim'). Drives the home materials strip, product fabric lines, the about story and care copy. Keep exactly two materials.
- [SHIP_FREE] — Free shipping over (default: "200"). The free-shipping threshold as digits. Drives the announcement bar, the cart drawer's progress bar math and the checkout review line. Keep it 100–300.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/fashion-online-store in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/fashion-online-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
