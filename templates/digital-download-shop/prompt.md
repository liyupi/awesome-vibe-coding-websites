# Digital Download Shop

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished digital download shop for [BRAND], selling [PRODUCT_FOCUS] to [AUDIENCE]. Use original code-drawn product previews, detailed licensing, a persistent cart, a discounted bundle, and a static instant-download confirmation.

- Audience: Independent creators and small studios who sell digital resources, and shoppers who want to inspect the product, understand its license, and access files without friction.
- Goal: Help visitors compare products through rich previews, choose an appropriate license, assemble an order, and understand exactly what happens after checkout while demonstrating a complete static commerce flow.
- Tone: Warm, precise, creatively assured, and transparent. Use concise product copy and practical details, with no pressure tactics, fake scarcity, or inflated claims.

## Stack
- Framework: Vite 6 + React 19 + TypeScript 5
- Styling: Tailwind CSS 4
- Libraries: react (MIT), react-dom (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold Vite 6 with React 19 and TypeScript 5; set base: './' and build.sourcemap: false in vite.config, and emit only the production site to dist/. Use no other application framework or router.
  - Use Tailwind CSS 4 through @tailwindcss/vite. Define the color, font, spacing, shadow, radius, and keyframe tokens in src/index.css, with a single restrained paper-texture background made in CSS.
  - Put the four variable values, every interface string, six product records, category definitions, prices, bundle contents, FAQs, and preview-art configuration in src/content.ts. When variable values change, rewrite the catalog, categories, product details, FAQs, preview labels, download names, and all default-specific copy so nothing from the old shop remains.
  - Use a small React context for filters, the selected product, per-item licenses, cart state, drawer visibility, toasts, and the completed order. Store the cart and latest order in localStorage, prevent duplicate copies of the same product and license, and derive every price and total from content data.
  - Implement hash routes #/, #/product, and #/confirmation without a routing dependency. Product cards set the selected product before navigating; direct product loads show the first catalog item, and direct confirmation loads show a sample order containing that first item with a personal license.
  - Import Fraunces Variable, Inter Variable, and IBM Plex Mono locally from their Fontsource packages. Use lucide-react for interface icons and original inline SVG/CSS components for every product visual; do not add an animation library.
  - Create a tiny original favicon as a local SVG using three offset file sheets and the accent color. Use a plain document title containing [BRAND], with no additional SEO metadata.

## Variables
- [BRAND] — Shop brand (default: "Nooktone Supply"). An invented name for the independent digital-goods seller.
- [PRODUCT_FOCUS] — Product focus (default: "design templates, photo presets, and display fonts"). A lowercase phrase naming three related kinds of downloadable products.
- [AUDIENCE] — Primary audience (default: "independent designers and creative studios"). The people this shop serves, written as a lowercase phrase.
- [BRAND_LINE] — Brand line (default: "Useful files for beautiful work."). A short original line that captures the seller's point of view.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/digital-download-shop in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Canvas `#F3EFE6` — Warm parchment page background with a very faint CSS fiber texture
- Surface `#FFFCF6` — Cards, drawers, input fields, and raised product-preview sheets
- Ink `#20221E` — Primary text, dark bundle band, and primary button background
- Muted `#68675F` — Secondary copy, metadata, and inactive controls
- Amber `#F2A93B` — Accent badges, selected states, and small graphic details; always pair with Ink text
- Sage `#B9D8C0` — Success states and selected product-preview panels
- Lilac `#C9C3E8` — Alternate preview background and decorative product art
- Line `#D6D0C4` — One-pixel borders, separators, and quiet grid lines

### Typography
- Editorial display for the hero, section titles, product names, and large prices: Fraunces Variable (OFL), weights 600/700
- Interface and body copy: Inter Variable (OFL), weights 400/500/600/700
- Categories, file formats, order labels, and compact utility metadata: IBM Plex Mono (OFL), weights 500

### Layout & motion
- Spacing: Use a 4px base grid. Content max-width is 1280px with 48px desktop gutters and 20px mobile gutters. Header height is 76px below a 34px announcement bar. Sections have 104px desktop and 68px mobile vertical padding; product grids use 24px gaps. Hero H1 is clamp(48px, 5.4vw, 76px) with 0.96 line height, section titles are 42px desktop and 32px mobile, and body copy is 16px with 1.65 line height.
- Radius: Use 22px corners on product cards and major panels, 16px on preview art and inputs, 12px on small line items, and fully rounded pills for chips and compact buttons. Use crisp 1px Line borders and broad, low-opacity olive shadows rather than glass effects.
- Motion: On initial load, fade and rise the hero copy by 14px over 420ms, then bring the three preview layers in with 80ms staggers and small rotations settling to their final positions.
- Motion: Reveal major sections once at 12% viewport intersection with a 16px rise and 380ms opacity transition; never hide content when IntersectionObserver is unavailable.
- Motion: Product cards lift 4px and their preview art scales to 1.015 over 180ms on hover; filter changes crossfade the grid for 160ms without changing card dimensions.
- Motion: The cart drawer slides in over 260ms while its backdrop fades; trap focus, close on Escape, restore focus to the cart button, and prevent background scrolling.
- Motion: Hash-route changes scroll to the top and fade the new main content in over 160ms. Under prefers-reduced-motion, remove reveals, rotations, smooth scrolling, and transforms while keeping every state change immediate and visible.
- Imagery: All visuals are original inline SVG and CSS, not raster photographs. Build a coherent family of tactile product covers using paper-colored sheets, crisp geometric grids, font-specimen letters, gradient swatches, tiny interface mockups, subtle 1px outlines, and soft offset shadows. The hero is a layered composition of three polished product previews, and every catalog card has its own deterministic preview configuration from content data. Do not use external images, recognizable products, brand marks, people, or generated-image assets.

## Pages & Sections
### Storefront (`index.html`)
1. **Announcement, header, and navigation** — The announcement reads 'Free updates on every purchase · Personal and commercial licenses'. The brand lockup combines the original three-sheet SVG mark with [BRAND]. Navigation links are Shop (#products), Bundle (#bundle), and License guide (#licenses). A cart button shows the current item count and opens the global drawer. On mobile, keep Shop and Cart visible and place Bundle and License guide in a compact accessible menu.
   Layout: A 34px Ink announcement bar sits above a sticky 76px header with a translucent Canvas background, backdrop blur, and bottom Line border. Inner content uses the shared 1280px container. The lockup is left, navigation centered, and cart right; the mobile menu opens below the header without covering the hero.
   Motion: The sticky header gains a slightly stronger bottom border after 24px of scroll; the mobile menu and cart count change with short 160ms transitions.
2. **Layered storefront hero** — For the default values, show the eyebrow 'SMALL-BATCH DIGITAL GOODS', the H1 'Make something good before lunch.', and the supporting sentence 'Shop design templates, photo presets, and display fonts from Nooktone Supply. Preview every detail, choose your license, and leave with your files.' Put [BRAND_LINE] on a small amber paper-tab label beneath the copy. CTAs are 'Shop all resources' and 'Build a bundle'. A quiet trust row reads 'Instant access · Free updates · Clear licenses'. The visual anchor consists of the Sunroom Social Kit interface sheet in front, a Pollen Display specimen behind at upper right, and a Golden Hour Presets swatch strip behind at lower left, with a small '6 products / one shelf' badge.
   Layout: At desktop, use a two-column hero with 44% copy and 56% artwork, 64px between columns, and a minimum height of 610px. The left copy is vertically centered. The right artwork fills a 620×500px stage: the main 420×330px preview sits at center with 5deg rotation, the two secondary sheets overlap by roughly 25%, and each has a 1px Ink border and soft offset shadow. At 390px, stack copy above a 340px-high artwork stage, scale all layers proportionally, and keep CTAs full width without horizontal overflow.
   Motion: Use the specified staggered entrance. On pointer hover over the artwork, the front sheet lifts 6px and secondary sheets shift no more than 4px; do not add continuous floating animation.
3. **Product catalog** — Heading: 'Fresh from the workbench'. Intro: 'Six useful starting points, made to be opened, edited, and put to work.' Include category chips All, Templates, Presets, and Fonts, a search field labeled 'Search the shelf', and a sort select with Featured, Price: low to high, and Price: high to low. The six default products are: Sunroom Social Kit — Templates — $24 — '42 warm, modular social layouts' with miniature editorial screens; Golden Hour Presets — Presets — $18 — '12 amber-forward color recipes' with three abstract before-and-after swatches; Pollen Display — Fonts — $32 — 'A high-contrast serif in 3 weights' with an original Aa specimen; Studio Deck System — Templates — $28 — '36 composed slides for client pitches' with a slide-grid preview; Soft Focus Presets — Presets — $16 — '10 muted looks with gentle contrast' with tonal gradient strips; Marker Mono — Fonts — $22 — 'A compact mono in 2 weights' with an original character-grid specimen. Each card shows category, preview, title, one-line detail, included formats, and price. 'Preview' opens #/product; the plus button adds a personal license and shows a toast. Empty search results say 'No resources match that search' with a Clear filters button.
   Layout: Start with a split heading row, then a wrapped filter toolbar, then a three-column desktop grid with equal-height Surface cards. Each preview has a fixed 4:3 ratio, followed by 22px of text padding. Use two columns at tablet and one at mobile. Keep prices and actions aligned at the card bottom; do not truncate product names.
   Motion: Animate only opacity and the small hover lift. Update the visible result count immediately and announce filter changes through a polite live region.
4. **Whole Shelf bundle** — Eyebrow: 'THE WHOLE SHELF'. H2: 'One cart. Six resources. Every update.' Copy: 'Get the complete default collection for $86 instead of $140. Personal and commercial options use the same clear terms as individual products.' Show all six product names in a two-column checklist, 'Save $54', and a button 'Add the bundle — $86'. The bundle is a distinct cart item priced at $86 personal or $172 commercial; adding it does not duplicate the six individual items. The right side contains a code-drawn fan of six miniature covers using the same preview configurations as the catalog.
   Layout: A full-width Ink panel with 56px desktop padding sits inside the standard container. Use a 52%/48% two-column composition with Paper text and an Amber save badge; on mobile, stack text above a 300px-high cover fan. The panel remains rectangular with a 22px radius and no artificial countdown or stock counter.
   Motion: On entering the viewport, fan the covers from a 4px stacked offset into their final rotations over 420ms; the bundle button has a simple 160ms color and translate response.
5. **License guide** — Heading: 'Pay for the work, not the fine print.' Intro: 'Start personal, or choose commercial when the work is for clients or revenue.' Personal card: listed base price, one person, personal projects only, free updates, no client work. Commercial card: exactly 2× the base price, up to five people in one team, commercial and client end products allowed, free updates. Both state: 'Do not resell, redistribute, or sublicense the source files.' Include a small link 'Read common license questions' pointing to #faq.
   Layout: Use a 38%/62% split with the heading and intro left and two adjacent license cards right. Commercial has an Amber top border and a 'For client work' label, not a forced preselection. At mobile, stack all three blocks with 16px gaps.
   Motion: Reveal the two cards with a 70ms stagger; no toggles are present in this explanatory section.
6. **Maker note and practical FAQ** — The maker strip says 'Made slowly. Updated when it matters.' and 'Every resource is checked in a real layout before it joins the shelf.' Add the [BRAND] name in Fraunces as a text signature, with no portrait or fake handwritten image. FAQ items: 'How do files arrive?' — 'The confirmation screen appears immediately after the demo order and lists every purchased item and its license.'; 'Are updates included?' — 'Yes. Every purchase includes later refinements to that resource.'; 'Can I use a personal license for client work?' — 'No. Choose commercial for client work, paid campaigns, or products you sell.'; 'What formats are included?' — 'Each product page lists its exact package, including editable vector files, portable previews, or desktop and web font formats.'; 'Can I share the source files?' — 'No. Commercial licenses cover one team of up to five people, but source files may not be redistributed.'
   Layout: Place the maker strip in a bordered Surface panel with generous horizontal padding. Below it, the FAQ uses a 34%/66% split: 'Useful answers' heading left and five accordion rows right. The first row starts open; only one row is open at a time. Accordion content never depends on animation to become readable.
   Motion: Accordion height and chevron rotation use 180ms transitions, disabled under reduced motion.
7. **Footer** — Show the brand lockup, [PRODUCT_FOCUS], and the line 'Made for [AUDIENCE]'. Link Shop, Bundle, License guide, and FAQ to their existing index anchors. End with 'Digital goods, thoughtfully packed.' and the optional [CREDIT] link. Do not show a copyright date, newsletter form, social icons, or external marketplace links.
   Layout: A bordered-top footer inside the standard container uses a 45px desktop top padding, a two-column brand/navigation row, and a small quiet bottom line. Stack navigation beneath the brand on mobile.
   Motion: No entrance animation beyond the shared section reveal.
8. **Global cart drawer and toasts** — The cart drawer lists each selected product or bundle with its thumbnail, name, license, price, a Personal/Commercial segmented control, and Remove. Changing license immediately switches between base and 2× pricing. Show subtotal and total as the same value, with 'No taxes or payment are collected in this static demo.' The primary button is 'Complete demo order'; it snapshots the cart as the latest order, clears the cart, closes the drawer, and opens #/confirmation. Empty state: 'Your shelf is empty' and a 'Browse resources' button. Toasts confirm Add, Remove, Already in cart, and License updated actions.
   Layout: Use a fixed right drawer 420px wide and full viewport height on desktop, and full width with 20px padding on mobile. Line items scroll independently while the total and checkout button remain at the bottom. Include a visible close button, dialog label, focus trap, Escape handling, and a dark translucent backdrop.
   Motion: Use the specified 260ms drawer transition and a small toast rise near the lower-left corner; toasts remain for 3 seconds and never cover the cart checkout button.

### Product Details (`#/product`)
1. **Product preview and license purchase panel** — Use the product selected on the storefront, or Sunroom Social Kit when opened directly. Breadcrumb: 'Shop / [product name]'. For the default first product, show 'TEMPLATES', 'Sunroom Social Kit', '$24', '42 warm, modular social layouts', and the description 'A flexible set of editorial posts, announcements, and carousels with room for real words. Includes 42 vector layouts, portable previews, and a concise style guide.' Metadata reads '42 layouts · SVG, PNG, PDF · Free updates'. Preview tabs are Overview, Details, and Contents; each changes the original SVG composition rather than loading an image. The license segmented control offers Personal '$24' and Commercial '$48', with the selected terms in a short panel. The primary button is 'Add to cart — $24' at base price and updates to the selected license price. Supporting line: 'Instant access · Lifetime updates · Clear license'.
   Layout: Below the shared header, use a 58%/42% two-column workspace with 48px gap. Left is a large 4:3 preview with three compact tabs underneath; right is a sticky purchase panel with 24px spacing and a Surface background. Every other catalog product reuses this structure with its own data and preview. At mobile, place the preview first and make the purchase panel static, with full-width license and cart buttons.
   Motion: Preview tab changes crossfade over 160ms. Selecting a license slides the price digits vertically by 6px with a short fade, while the layout height remains fixed.
2. **Package details accordion** — Heading: 'Know exactly what you are getting.' Three accordions are What’s inside, Formats and compatibility, and License summary. For Sunroom Social Kit, the first lists 12 announcement layouts, 18 carousel layouts, 12 story layouts, and a 6-page style guide; the second lists editable SVG, ready-to-use PNG, and print-friendly PDF; the third repeats the currently selected personal or commercial terms. Other products use concrete equivalents from content data, never copied default details.
   Layout: Use a 32%/68% split with the heading left and three bordered accordion rows right. The first starts open. Beneath, add a narrow Sage reassurance strip reading 'One resource, one clear license, updates included.'
   Motion: Use the same accessible accordion behavior as the storefront FAQ.
3. **Related products** — Heading: 'Keep the shelf consistent'. Show three other products from the catalog, prioritizing the same category and then the next available items. Reuse the exact product-card component and Preview behavior; do not show the currently selected product.
   Layout: A three-column desktop grid and single-column mobile grid below 64px of section spacing. The shared footer follows this section.
   Motion: Use the standard section reveal and card hover behavior.

### Instant Download Confirmation (`#/confirmation`)
1. **Order success and sample downloads** — Show a Sage check icon, eyebrow 'DEMO ORDER COMPLETE', H1 'Your files are ready.', and 'No payment was collected. This confirmation previews the instant-delivery experience.' Use the latest completed order, or a sample Sunroom Social Kit personal order when opened directly. Label the generic order as 'Order #1048'. List each item with its original preview thumbnail, product name, selected license, formats, and a 'Download sample' button. Each button must generate and download a real local SVG version of that item's preview plus offer a plain-text license receipt; do not pretend to deliver a ZIP or a commercial product file. The order summary shows each price and the correct total. Actions are 'Back to shop' and 'Download license receipt'.
   Layout: Center a 760px-wide confirmation panel below the shared header, with generous 40px desktop and 22px mobile padding. Stack download rows with thumbnail left, metadata center, and button right; on mobile, make each row a compact card with a full-width button. Place the order summary in a separate bordered block beneath the items. The shared footer follows with extra top spacing.
   Motion: The check draws once with a 360ms SVG stroke animation and the panel fades in; skip the stroke animation under reduced motion. Show a local toast after each sample download starts.
2. **Download help** — Heading: 'Downloads not starting?' Copy: 'Check that your browser allows downloads, then try the sample again. Your order and license choices remain available on this device.' Add three short reminders: samples are generated locally, source-file redistribution is not permitted, and commercial terms cover one team of up to five people.
   Layout: A quiet three-column row sits below the confirmation panel, with each reminder separated by a Line border. Stack to one column on mobile. Do not add a contact form, email link, chat widget, or external support service.
   Motion: No additional motion.

## Assets
- image: No raster or generated images are required. Create all hero art, product thumbnails, font specimens, preset swatches, bundle covers, and download thumbnails as original inline SVG and CSS components configured in src/content.ts. Keep these components in the source project; there are no image URLs to download or third-party image credits.
- icon: Use lucide-react (ISC) for interface icons such as ShoppingBag, Plus, X, ArrowRight, Download, Check, ChevronDown, Search, and Menu. Render them as inline SVG at 18–22px with accessible labels on icon-only buttons. Create the simple three-sheet brand mark and favicon from scratch, and record Lucide's package, source, author, and ISC license in ASSETS.md.
- font: Self-host Fraunces Variable and Inter Variable through @fontsource-variable/fraunces and @fontsource-variable/inter, and IBM Plex Mono through @fontsource/ibm-plex-mono. Use only the listed OFL weights, keep font files local in the production build, and list each package, source, author, and OFL license in ASSETS.md.

## Don'ts
- Do not add a backend, server code, API routes, database, authentication, payment processing, email delivery, third-party APIs, analytics, or forms that submit anywhere. Cart and order state are local only, and checkout is explicitly a static demo.
- Do not claim that money was charged or that commercial product files were delivered. Generate only real local SVG samples and plain-text license receipts from browser data; never use fake ZIP links or broken download buttons.
- Do not use existing marketplace or seller names, logos, slogans, exact brand palettes, reference code, reference copy, or reference preview compositions.
- Do not use real product names, existing template designs, preset products, commercial font products, or copied preview images. Every seller, product, package, price, preview, and line of copy must be invented for the active variable values.
- Do not use reference-specific mascots, signature illustrations, custom fonts, unique iconography, real people's likenesses, anime or game characters, or any existing brand logo.
- Do not load external or hotlinked images, stock photos, placeholder-image services, CDN scripts, CDN styles, or font-service URLs. All visuals, icons, fonts, and scripts must ship locally.
- Do not use commercial fonts or unlicensed and license-restricted component source. Use only the specified packages and implement every visual and interaction from scratch.
- Do not expose variable placeholders such as [BRAND] in rendered copy, and do not leave design-shop products or language behind when PRODUCT_FOCUS changes. Keep all copy and catalog data in src/content.ts.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemap instructions, keyword-stuffed headings, or heading-hierarchy rules. Use only a plain [BRAND] document title and local favicon.
- Do not link to bare directories or introduce server-dependent routes. Keep the three declared hash routes, working section anchors, and direct-load fallbacks for product and confirmation views.
- Do not emit source maps, copy src/ into dist/, exceed 20 MB, or require more than npm run build. Preserve Vite base './' so all production asset URLs are relative.
- Do not display dates, fake ratings, invented sales counts, countdowns, stock counters, newsletter forms, or social-proof badges. Keep the storefront informative without manufactured urgency.
- Do not allow clipped previews, horizontal overflow, inaccessible overlays, keyboard traps, empty direct routes, or console errors at 1440×900 and 390×844. Respect prefers-reduced-motion and keep all content readable without animation.

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-download-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
