# Invoice Generator Tool

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original, complete single-page invoice generator branded [BRAND]. A structured editor on the left controls a polished live invoice on the right. Include editable issuer and client details, invoice metadata, local logo upload, line items, tax, fixed or percentage discounts, currency formatting, saved clients, draft persistence, and browser printing or saving as PDF. The invoice itself is the first-screen visual anchor; do not add a marketing hero.

- Audience: Freelancers, independent studios, tradespeople, and small business owners who want a focused invoice workflow without accounts, cloud setup, or payment processing.
- Goal: Let a visitor create a coherent invoice from the supplied sample, see every calculation update immediately, reuse client records after a reload, and produce a clean printed or PDF document using only browser capabilities.
- Tone: Quietly capable, precise, approachable, and paper-inspired. Use direct labels and practical helper text, with no promotional slogans, fake cloud claims, or financial advice.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Tailwind CSS 4.1
- Libraries: lucide-react (ISC), @fontsource-variable/inter (OFL), @fontsource-variable/source-serif-4 (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './' and build.sourcemap to false; emit the production site to dist/ with relative asset paths and no src/ directory copied into it.
  - Use Tailwind CSS 4 with its Vite plugin and define the color, typography, radius, and shadow tokens in src/index.css; keep print rules in a dedicated stylesheet imported locally.
  - Keep all default copy, sample details, line items, currency choices, and UI labels in src/content.ts. Use the supplied variable values for [BRAND], [ISSUER_NAME], [ISSUER_LOCATION], [CLIENT_NAME], [SERVICE_TYPE], and [CURRENCY], and rewrite service-specific sample rows, addresses, and notes to remain coherent when those values change.
  - Define one canonical InvoiceDraft type and pure calculation helpers. Store monetary values in integer minor units, use the selected currency's precision, calculate the discount before tax, round tax once at currency precision, and never render NaN, negative totals, or stale amounts.
  - Persist the current draft, uploaded logo data URL, and saved clients under separate versioned localStorage keys. Guard malformed JSON, unavailable storage, and quota errors with a nonblocking status message; saved clients must survive a New invoice reset.
  - Use a plain document title containing [BRAND], an original code-drawn SVG favicon, and an ASSETS.md that lists each third-party font and icon package with its local path or package, source URL, author, and license.

## Variables
- [BRAND] — Generator brand (default: "Tallyfold"). Invented product name shown in the app header and document title.
- [ISSUER_NAME] — Sample issuer (default: "Hearth & Field Studio"). Fictional business that issues the initial invoice.
- [ISSUER_LOCATION] — Issuer location (default: "Portland, Oregon"). City and region used in the sample billing address.
- [CLIENT_NAME] — Sample client (default: "Moss & Marker Workshop"). Fictional client billed by the initial invoice.
- [SERVICE_TYPE] — Service type (default: "brand design services"). Trade used to write the initial line items and invoice notes.
- [CURRENCY] — Starting currency (default: "USD"). Initial ISO currency code; the selector also supports EUR, GBP, CAD, AUD, and JPY.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/invoice-generator-tool in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Canvas `#F3F0E9` — Warm gray application background behind the workspace.
- Panel `#FBFAF7` — Editor cards, drawers, and restrained secondary surfaces.
- Paper `#FFFFFF` — Live invoice sheet and all printed pages.
- Ink `#18201D` — Primary text, invoice heading, and high-emphasis borders.
- Muted `#68716B` — Helper text, metadata, and secondary labels with readable contrast.
- Rule `#D9DDD6` — Input borders, table rules, and separators.
- Accent `#1F6F54` — Primary buttons, active tabs, focus rings, and selected actions.
- Accent Soft `#DDEBE3` — Saved-state background, active field tint, and subtle invoice accent block.
- Danger `#A54732` — Delete and remove actions only.

### Typography
- Document display and invoice totals: Source Serif 4 Variable (OFL), weights 600/700
- Application UI, labels, inputs, and body copy: Inter Variable (OFL), weights 400/500/600/700
- Quantities, rates, invoice number, and aligned amounts: IBM Plex Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Use a 4px base scale. Desktop page padding is 28px, the top bar is 64px high, editor cards have 20px padding, form sections are separated by 24px, inputs are at least 44px high, and the workspace columns have a 24px gap. The invoice sheet uses 48px padding on desktop and 28px on mobile. Mobile page padding is 16px with 16px card padding and 12px field gaps.
- Radius: Use 10px for editor cards and primary buttons, 8px for inputs and secondary buttons, 999px only for the small saved-status pill, and 2px for the invoice sheet. Avoid excessive pill shapes and floating rounded containers.
- Motion: Use 120–160ms ease-out transitions for button hover, border color, focus rings, tabs, and drawer overlays; never animate calculated digits or delay their update.
- Motion: New line-item rows fade and translate upward 6px over 160ms, and removed rows exit without a large layout jump.
- Motion: Toasts enter from the bottom with a 180ms fade and 8px rise; the saved-client drawer slides 16px from the right on desktop and fades in as a full-screen sheet on mobile.
- Motion: Under prefers-reduced-motion, remove sliding and row entrance motion and make all state changes immediate.
- Imagery: Use no stock or generated images. The first-screen visual anchor is the rich live invoice itself: a crisp white paper sheet, original issuer monogram, fine rules, structured line items, and a precise totals block above a soft 0 18px 50px rgba(24,32,29,0.10) shadow. Before upload, derive a simple two-letter issuer monogram from [ISSUER_NAME] inside an Accent Soft square. The upload control accepts a local PNG, JPEG, or WebP up to 2 MB and displays that image only in the invoice logo position. Use Lucide icons for controls and draw the [BRAND] mark as an original geometric receipt-and-check SVG; never use real business or payment-service marks.

## Pages & Sections
### Invoice workspace (`index.html`)
1. **App header and draft actions** — Show the original geometric [BRAND] mark, [BRAND], and the plain descriptor Invoice generator at the left. On the right provide Saved clients, New invoice, and the primary Print / Save PDF button with a printer icon. Below the bar, show Create invoice as the workspace heading, a muted Draft stored only in this browser note, and a live status pill that changes from Saving… to Saved locally after a 300ms debounce. New invoice opens a confirmation dialog explaining that the current draft will reset while saved clients remain. Print / Save PDF calls window.print and never pretends to download a file directly.
   Layout: Use a full-width 64px top bar with a bottom Rule border, followed by a max-width 1480px workspace header with 28px horizontal padding and 20px vertical spacing. Keep actions in one row on desktop. At 390px, wrap the heading and buttons cleanly, make Print / Save PDF full width, and place a sticky Edit / Preview segmented control directly below the workspace header; no horizontal scrolling.
   Motion: Only subtle 120ms button and focus transitions. The save-status pill crossfades its text without changing width or delaying persistence.
2. **Business, client, and invoice details editor** — The first editor card is Business & client. Include a logo upload drop button with Upload logo helper text PNG, JPEG, or WebP · max 2 MB, a small preview, and Remove logo when present. Provide labeled fields for Issuer name, Issuer address, Issuer email, Client name, Client address, and Client email. Defaults use [ISSUER_NAME], the invented address 184 Rowan Lane · [ISSUER_LOCATION] 97209, hello@hearthandfield.example, [CLIENT_NAME], 27 Alder Street · Seattle, Washington 98101, and accounts@mossandmarker.example; rewrite these details when the variables change. Add Save current client and Choose saved client actions. The second card is Invoice settings with Invoice number default INV-1048, Issue date default 2026-05-14, Due date default 2026-05-28, and Currency initialized from [CURRENCY]. Include USD, EUR, GBP, CAD, AUD, and JPY options and the note Currency changes formatting only; amounts are not converted.
   Layout: Place these cards in the left editor column, which is 430px wide at 1440px and collapses to the full available width on mobile. Stack Business & client above Invoice settings. Use a two-column grid for issuer/client pairs only when each field remains at least 180px wide; otherwise use one column. Invoice number spans the full width, issue and due dates share a row, and currency spans the full width. Every input has a persistent visible label and a strong keyboard focus state.
   Motion: Logo preview fades in over 160ms. Inline validation appears without shifting the overall column more than necessary; no decorative motion.
3. **Line items and calculation editor** — Title this card Line items and provide column labels Description, Qty, Rate, and Amount. Default rows for [SERVICE_TYPE] are Brand strategy workshop at 1 × 650.00, Homepage design at 1 × 1200.00, and Print-ready style guide at 1 × 480.00; for alternate service types, replace all three descriptions with equally specific services from that trade. Each row has editable description, quantity, and unit-rate fields, a computed amount, and a labeled delete icon. Provide an Add line item button and keep at least one empty editable row if all rows are removed. Below, include Discount type with Fixed and Percentage options, default Fixed, Discount default 100.00, and Tax rate default 8.25%. Show the live calculation summary: Subtotal 2330.00, Discount −100.00, Tax 183.98, and Total 2413.98 in the starting USD case. Compute tax on the discounted subtotal, cap percentage discount at 100 and fixed discount at the subtotal, and allow zero values but not negative inputs.
   Layout: Keep this as the third and final card in the left column. On desktop, use a compact grid with description taking the remaining width, quantity 64px, rate 104px, amount 96px, and delete 36px. On narrow screens, make each item a bordered block with description full width and quantity, rate, and amount below; do not create a wide table. Put discount and tax inputs in a two-column row, then align the calculation summary to the right with Total emphasized in Ink and Source Serif 4.
   Motion: Added rows use the specified 160ms entrance. Amounts update synchronously on every valid keystroke with no count-up animation. Delete buttons gain a Danger-colored hover state.
4. **Live invoice preview** — Render a complete invoice from the same canonical state, not a second copy of the data. The sheet begins with the uploaded logo or derived issuer monogram, [ISSUER_NAME], issuer address and email, a large INVOICE heading, and the current invoice number. A two-column Bill to and Invoice details block shows [CLIENT_NAME] and client details alongside issue date, due date, and currency. The item table repeats Description, Qty, Rate, and Amount with the three default rows. A lower-right totals block shows Subtotal, Discount, Tax, and the bold Total due 2413.98 for the unchanged default. Finish with Payment notes, the generic note Payment due within 14 days. Please include the invoice number in the transfer reference., and Thank you for the opportunity to work together. Add a small footer line Prepared with [BRAND] · Stored locally in your browser. All visible invoice values must update immediately when edited.
   Layout: On desktop the right preview column fills the remaining width and is sticky 24px below the top bar while the editor scrolls. Center a white sheet with a maximum width of 780px, minimum readable document proportions, 48px padding, and a subtle paper shadow; allow the page to scroll vertically so the full sheet is never clipped. Use Source Serif 4 700 at 44px for INVOICE and 28px for Total due, with IBM Plex Mono for numeric columns. Below 900px, show either editor or preview according to the Edit / Preview tabs. On mobile, use a fluid 28px-padded sheet, stack metadata blocks, and convert item rows into readable stacked blocks rather than scaling down an A4 image. The print stylesheet hides every app element except the invoice, removes shadows and backgrounds, sets white paper and black text, preserves the table and totals, avoids breaking individual item rows, and uses sensible A4/Letter margins.
   Motion: The preview does not animate on each keystroke. Mobile Edit / Preview uses an optional 120ms crossfade, disabled for reduced motion. Printing has no animation.
5. **Saved clients drawer and feedback** — Saved clients opens a drawer titled Saved clients with the explanation Reuse billing details without creating an account. Save current client adds or updates a record using the current client name, address, and email, with duplicate names confirmed before overwriting. Each saved row shows the client name and email plus Apply and Delete actions; Apply fills only the client fields and closes the drawer, while Delete asks for confirmation. Include an empty state: No saved clients yet. Fill in the client details and choose Save current client. Restore saved records and the active draft after reload. Use short toasts for Client saved, Client applied, Client deleted, Logo removed, and storage failures.
   Layout: Use a 380px right-side drawer on desktop with a translucent Ink overlay, a close button, and a scrollable list. On mobile use a full-screen sheet with the same controls and at least 44px tap targets. Trap keyboard focus in the open drawer or confirmation dialog, close on Escape, return focus to the invoking button, and never allow background interaction while modal UI is open.
   Motion: Drawer and toast transitions follow the design motion rules and become immediate under reduced motion.

## Assets
- icon: Install and import lucide-react (ISC) for Plus, Trash2, Users, Upload, X, Printer, RotateCcw, Check, and ChevronDown. Keep icons inline and local through the npm package, add accessible names to icon-only buttons, and use no brand or payment-service icons. Draw the original [BRAND] receipt-and-check mark and issuer monogram in SVG/CSS.
- font: Self-host Inter Variable, Source Serif 4 Variable, and IBM Plex Mono through @fontsource-variable/inter, @fontsource-variable/source-serif-4, and @fontsource/ibm-plex-mono. Import only the specified weights, include no remote font URLs, and document package paths, upstream sources, authors, and OFL licenses in ASSETS.md.

## Don'ts
- Do not add a backend, server routes, accounts, authentication, database, cloud sync, payment collection, analytics, third-party APIs, live tax lookup, or exchange-rate conversion.
- Do not copy existing invoicing products, their exact layouts, copy, illustrations, icons, branded invoice designs, or proprietary visual assets; use only the original interface described here.
- Do not use real business identities, real logos, payment-service trademarks, recognizable commercial products, stock-photo services, hotlinked files, or generated imagery.
- Do not load Google Fonts, Adobe Fonts, CDN scripts, CDN CSS, or commercial fonts; self-host only the listed open-license Fontsource packages.
- Do not add a PDF library or fake a downloaded PDF; use window.print and the dedicated print stylesheet so the browser can print or save the invoice as PDF.
- Do not hard-code default content outside src/content.ts or leave design-service line items, addresses, names, or notes stale when variables change; keep all site copy in US English and never mention VibeFather except the optional credit link.
- Do not store data anywhere except versioned localStorage keys, and do not claim that local drafts or clients are synced, secured in an account, or available on another device.
- Do not allow invalid calculations, negative inputs or totals, NaN, unhandled localStorage failures, raw HTML injection from uploaded or entered content, or silent loss of saved-client data during reset.
- Do not introduce additional pages, bare-directory links, marketing sections, a landing-page hero, carousels, decorative gradients, glass effects, or unrelated dashboard widgets.
- Do not ship source maps, src/ in dist/, remote assets, absolute asset paths, or a dist/ bundle over 20 MB; the single index.html build must work from static hosting with zero console errors.
- Do not sacrifice keyboard access, visible labels, focus management, 44px mobile targets, readable contrast, reduced-motion support, or the 1440×900 and 390×844 layouts.

---
— Prompt by VibeFather · https://vibefather.ai/t/invoice-generator-tool · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
