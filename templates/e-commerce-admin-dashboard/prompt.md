# E-commerce Admin Dashboard

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page admin app for [SHOP], a small online store selling [NICHE]. Sidebar views: Overview (KPIs, 30-day revenue chart, top products, recent orders), Orders (filterable table with a detail drawer), Products (list + editor form), Inventory (low-stock alerts with restock). Data is invented sample content seeded into localStorage once; a Reset demo data button restores it. One page, index.html; everything runs in the browser.

- Audience: The store's owner-operator, checking numbers between packing slips on a laptop. They want the day's shape in one glance and the two actions they do daily — fix stock, edit a product — one click deep.
- Goal: Make a small store feel run well. Within ten seconds the visitor sees revenue, orders and the one alert that matters; within a minute they have opened an order, fixed stock and edited a product.
- Tone: Back-office calm: exact numbers, short labels, no motivational copy. One dry joke in the empty-state row.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/instrument-sans (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (ground, panel, panel-2, line, ink, softink, indigo, indigo-deep, indigo-mist, mint, amber, ruby, slateink, good) and fontFamily sans ['Instrument Sans Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 10px and add maxWidth { shell: '1480px' }.
  - In src/fonts.ts import '@fontsource-variable/instrument-sans' and '@fontsource/jetbrains-mono/400.css' plus '500.css' and '600.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (store facts, product roster, order roster, seeded series and every label, typed), src/lib/brand.ts (shopSlug = [SHOP] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = shopSlug without hyphens + '.com', storageKey = shopSlug + ':admin'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch), src/lib/seed.ts (builds the dataset { products, orders, series } from content.ts on first run or after reset; products: { id, name, sku, price, stock, status, emoji-free monogram }, orders: { id, customer, items: [{ productId, qty }], status, total, placed: relative label }, series: 30 revenue points), src/lib/money.ts (money(n) en-US, no cents on KPIs, cents on orders).
  - State: src/store/shop.ts is a tiny external store (useSyncExternalStore) holding the dataset plus { view, orderQuery, statusFilter, editingId, toasts }; every mutation (edit product, restock, advance status, reset) writes through to localStorage under storageKey and emits.
  - Components in src/components/: Shell.tsx (Sidebar.tsx with ViewButton.tsx, Topbar.tsx with SearchHint, ResetButton.tsx), Toasts.tsx (ToastRow.tsx), KpiCard.tsx (Delta.tsx), RevenueChart.tsx (inline SVG: area path with gradient fill, x axis of 6 mono day labels, hover crosshair with a value bubble), TopProducts.tsx (BarRow.tsx), RecentOrders.tsx; OrdersView.tsx (OrdersTable.tsx, StatusChip.tsx, OrderDrawer.tsx with LineItem.tsx and Timeline.tsx), ProductsView.tsx (ProductRow.tsx, ProductEditor.tsx with Field.tsx, MonogramTile.tsx), InventoryView.tsx (AlertRow.tsx with RestockStepper.tsx). src/pages/App.tsx composes them.
  - RevenueChart: viewBox 640x220, path from the series, smooth (catmull-rom to bezier), indigo gradient fill at 18%; a crosshair line and value bubble follow pointermove on desktop only; the chart is decorative-informational, not interactive-critical, so it stays static under reduced motion.
  - OrderDrawer: slides from the right (width 420px, 320ms --ease-io), traps focus, Escape closes; line items with monogram tiles; a Timeline of four status steps with the current one lit; buttons advance status (paid → packed → shipped) and emit a toast.
  - ProductEditor: inline in a right panel (same drawer pattern); fields name, sku (mono, auto-suggested but editable), price, stock, status select; validation inline (red Ruby text under the field); Save emits a toast and updates the list; New product starts blank with a generated sku.
  - Reset: the topbar button opens a small confirm popover ('Reseed demo data? Your edits go away.') — Reset reseeds and toasts 'Demo data reseeded'.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F4F5F7'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[SHOP] — store admin</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 4 MB.

## Variables
- [SHOP] — Store name (default: "Trailhead Supply"). The invented store's name. Used in the wordmark, title, footer, email (orders@ + shopSlug without hyphens + '.com') and the localStorage key. Never a real retailer.
- [NICHE] — What it sells (default: "outdoor gear and trail kit"). One lowercase phrase naming the catalog. Rewrites product names, SKUs, the overview copy and order items so they fit that store. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/e-commerce-admin-dashboard in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ground `#F4F5F7` — App background.
- Panel `#FFFFFF` — Cards, table, drawer, sidebar.
- Panel 2 `#F7F8FA` — Table header rows, hover fill, sidebar footer.
- Line `#E3E5EA` — 1px hairlines: borders, table rows, dividers.
- Ink `#171A20` — Headings, body, icons.
- Soft Ink `#5F6570` — Secondary text, captions, axis labels.
- Indigo `#4F46E5` — The one accent: active nav, links, primary buttons, chart line, focus ring, selected rows.
- Indigo Deep `#3B34B8` — Hover and pressed primary.
- Indigo Mist `#EEEDFC` — Selected fills, chip backgrounds, chart gradient base.
- Mint `#2F9E6E` — Positive deltas, paid/packed/shipped chips, success toasts.
- Amber `#C77E1D` — Pending chips, restock hints.
- Ruby `#C24141` — Refunded chips, validation errors, overdue alerts.
- Slate Ink `#12131A` — Text on indigo fills.
- Good `#2F9E6E` — Alias kept for success semantics.

### Typography
- Text and display: headings, labels, table text — Instrument Sans, workaday grotesque: Instrument Sans (OFL), weights 400/500/600
- Mono: money, SKUs, order ids, axis labels — tabular everywhere: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Shell: fixed sidebar 232px (collapses to 64px icon rail with a toggle, remembered in localStorage), content max-width 1480px with 32px padding (20px under 900px). Panels: 20px inner padding, 10px radius, 1px Line border. View header rows 48px tall. Table rows 52px, 12px cell padding, mono numerals right-aligned. Type scale: view titles 24px 600; KPI figures JetBrains 600 28px tabular; table and body 14px / 1.5; captions 12.5px Soft Ink; sidebar items 14px 500 with 36px rows. Buttons: height 38px, Instrument 600 13.5px; primary Indigo fill with white text, ghost 1px Line border. Inputs: height 38px, Panel fill, 1px Line border, focus Indigo border + 2px offset ring. Focus everywhere: 2px Indigo outline, 3px offset.
- Radius: 10px on panels and drawers; 8px on buttons, inputs, chips; 999px for status chips and toasts.
- Motion: Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for drawers; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for the rest. Office-hours quick: nothing over 320ms.
- Motion: View swap: panels fade 6px up over 240ms; the sidebar's active item swaps a 2px Indigo rail instantly.
- Motion: KPI deltas: the arrows and +/− colors set immediately; figures count to value over 500ms on first view of Overview.
- Motion: RevenueChart: the area path draws once on view (clip-path reveal 700ms); the crosshair bubble follows pointer with no easing lag.
- Motion: Orders table: filter changes reflow with a 140ms fade on rows (no layout animation); the selected row holds an Indigo Mist fill.
- Motion: OrderDrawer / editor panel: slide 320ms --ease-io with a Line-left border and soft shadow; scrim at 24% Ink.
- Motion: Toasts: rise 8px and fade in 180ms, auto-dismiss 2.8s with a thin progress bar, exit fade 160ms.
- Motion: Restock steppers: qty changes pop the figure 1→1.15→1 (120ms); the stock cell flashes Mint once.
- Motion: prefers-reduced-motion: reduce — no counting, no chart reveal (final state), no row fades; drawers still slide (they are navigation, capped at 150ms) or fade if the UA prefers. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs, no logos, no avatars: products render as MonogramTiles (two-letter tiles on Indigo Mist with Ink initials), orders carry customer initials dots, and every chart is inline SVG. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Store admin (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([SHOP] = Trailhead Supply, [NICHE] = outdoor gear and trail kit). Put every string, product, order, series point and label in src/content.ts and render from it. If any variable differs, rewrite the store blurb, all product names/SKUs, order items and the overview copy so they are specific and believable for that store, keeping the same structure and counts (8 products, 12 orders, 4 views). Products (name · sku · price · stock · status): 'Ridgeline Daypack 28L' th-101 $138 14 active; 'Storm Shell Anorak' th-205 $189 6 low; 'Merino Trail Socks (3-pack)' th-310 $24 52 active; 'Titanium Pour-Over Kit' th-412 $76 3 low; 'Cirrus Down Layer' th-208 $249 9 active; 'Trail Notebook (pocket)' th-501 $12 120 active; 'Headlamp 400 (warm)' th-330 $42 0 out; 'Camp Chair Lite' th-610 $58 7 low. Orders: 12 invented orders (names like 'M. Alvarez', 'J. Okafor' — initials only in the table), statuses across paid/packed/shipped/refunded, totals derived from items, placed labels as static relative text ('2h ago', '1d ago' … '9d ago'). Series: 30 revenue points between $310 and $1,840 with a believable weekly rhythm. Overview copy: 'Revenue, last 30 days' / 'Orders' / 'Average order' / 'Units sold' as the four KPIs; top products titled 'What moved'; recent orders titled 'Latest'; the inventory view greets with 'Three things need you' when three alerts exist, else the count line.
   Layout: n/a
   Motion: n/a
2. **Sidebar** — Wordmark block: '[SHOP]' (Instrument 600 17px) over 'STORE ADMIN' (10px uppercase Soft Ink). ViewButtons with lucide icons: Overview (LayoutDashboard), Orders (Receipt), Products (Package), Inventory (AlertTriangle). Footer block: 'orders@' + emailDomain and a collapsed-state tooltip. The collapse toggle (PanelIcon) sits at the foot; state persists.
   Layout: Fixed left, full height, Panel fill, Line right border; 232px expanded / 64px rail with labels hidden.
3. **Topbar** — Left: the current view name (600 16px) and a one-line store blurb 'Small shop, [NICHE]' (13px Soft Ink). Right: a 'Reseed demo data' ghost button (RotateCcw icon) with its confirm popover, and a Good status dot 'Synced locally' with the tooltip 'Demo data lives in this browser'. The search box lives only in the Orders view.
   Layout: Sticky within content, 64px tall, Panel fill with Line bottom border, 32px side padding.
4. **Overview view** — Four KpiCards (Revenue $28,412 +12.4% / Orders 412 +6.1% / Average order $68.96 −1.8% / Units sold 638 +9.3% — sample figures from the series): label (12.5px Soft Ink), figure (JetBrains 600 28px), Delta chip with arrow (Mint up / Ruby down). Below, a 2:1 grid: RevenueChart (title 'Revenue, last 30 days', the SVG area chart, mono axis labels every 5th point, a caption 'Sample series — reseed for a different week') and TopProducts (five BarRow entries: name, units, a bar scaled to max, price). RecentOrders: a compact 5-row table (order id mono, customer initials dot, items count, status chip, total) linking into Orders with the drawer open.
   Layout: Grid: KPIs 4 columns 20px gap (2 under 1100px, 1 under 640px); chart:products 2:1 (stacked under 1100px); recent orders full-width Panel.
5. **Orders view** — Toolbar: search input (height 38px, 'Search id or customer'), status tabs (All / Paid / Packed / Shipped / Refunded) as pill chips with counts, and the live result count ('Showing 12 of 12'). OrdersTable: columns Order (mono id), Customer (initials dot + name), Items (count + first product name), Status (StatusChip), Total (mono, right). Row click opens OrderDrawer: header (id, customer, placed label), LineItems with MonogramTile + qty + line total, subtotal/shipping/total rows, the Timeline (placed → paid → packed → shipped with current lit), and a primary advance button ('Mark as packed' etc.; refunded orders show 'Refund logged' and no button). Empty state: 'Nothing matches — even the spreadsheet is embarrassed.'
   Layout: Full-width Panel; toolbar row above the table; drawer over a scrim.
6. **Products view** — Left: the product list rows (MonogramTile, name, sku mono, price, stock with a low/out chip when relevant, status). Row click or 'Edit' opens the ProductEditor drawer; a 'New product' primary button starts a blank editor. Editor: name, sku (mono, pre-filled th-7xx on new), price (numeric, validated), stock (numeric), status (active/hidden select); inline validation on blur; Save writes through, toasts 'Saved — [name] updated' (or 'added'), and the list reflects it instantly. Out-of-stock rows carry a Ruby chip and stay editable.
   Layout: List max-width 880px; editor as the right drawer (width 420px).
7. **Inventory view** — Heading line: 'Alerts' with the count. AlertRows for stock ≤ 7: MonogramTile, name, sku, current stock (Ruby when 0, Amber otherwise), a RestockStepper (+1/+5/×2 quick chips and a numeric input), and 'Restock' applying the change: the cell flashes Mint, a toast confirms 'Restocked [name] +N', the row leaves the list when stock > 7. A quiet footer line: 'Restocks are demo-only — no suppliers were contacted.'
   Layout: Alert rows in a Panel list, max-width 880px; header row 48px.

## Assets
- image: No photographs or downloaded images: MonogramTiles, initials dots, charts and the favicon are drawn in code. Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (monogram tiles, initials dots, revenue chart, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/instrument-sans and @fontsource/jetbrains-mono (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: AlertTriangle, ArrowDownRight, ArrowUpRight, ChevronRight, LayoutDashboard, Package, Receipt, RotateCcw, Search, X. Stroke width 1.75, 16–20px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #4F46E5, three white horizontal bars of decreasing width (a quiet bar-chart glyph). No brand logos.
- font: Install @fontsource-variable/instrument-sans and @fontsource/jetbrains-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: every mutation writes to localStorage under the store key and says 'demo' where honesty matters; reseed restores the original sample data.
- Every internal link points to a file name or in-app view (./index.html, the four sidebar views) — never to a bare directory; there is exactly one page.
- No real stores, marketplaces, analytics or payment brands (Shopify, Stripe, Meta, GA); the store, products, orders and customers are invented sample data.
- No chart or table library: the revenue chart is hand-rolled SVG and tables are semantic <table>s.
- No dates rendered from the real clock: placed labels are static sample text ('2h ago'), the chart axis shows sample day labels, and nothing prints today's date or years.
- No photographs, no people, no avatars; initials dots and monogram tiles only.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 4 MB.
- Never mention VibeFather inside the site except the footer credit line 'Built with a VibeFather template' linking https://vibefather.ai in the sidebar footer.
- Respect prefers-reduced-motion: no counting, no chart reveal animation, no row fades; drawers remain usable.
- The app must work at 1440x900 desktop and 390x844 mobile (sidebar becomes a bottom icon bar under 900px) with zero console errors; tables, drawers, steppers and forms work with keyboard only and visible focus rings.
- Accessibility: drawers trap focus and close on Escape; status chips carry text (never color alone); tables use real th scopes; toasts are aria-live polite.

---
— Prompt by VibeFather · https://vibefather.ai/t/e-commerce-admin-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
