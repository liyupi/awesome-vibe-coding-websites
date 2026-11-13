# Restaurant QR Menu Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A mobile-first single-page QR menu with warm bistro styling: a signature-dish overhead hero, sticky scroll-spy category tabs, allergen filter chips that dim non-matching dishes, photo and text menu rows, a bottom-sheet dish detail with quantity stepper, a locally stored order tally presented to the server, and a call-waiter button with a show-this-screen confirmation state.

- Audience: Bistros, cafés, wine bars and any table-service restaurant replacing an ugly PDF, plus the studios building for them.
- Goal: Let a guest read the menu comfortably one-handed, filter around an allergy, build a tally of what they want, and show one clean screen to the server — with zero staff-facing technology implied.
- Tone: Warm, plain-spoken and a little homely — the voice of a chalkboard, not an app; short dish lines, honest sample-copy notes.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/lora (OFL), @fontsource/asap (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest restaurant-qr-menu-page -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/lora and @fontsource/asap as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors paper #FAF3E7, paperdeep #F1E6D2, linen #FFFDF8, benchline #E3D5BC, walnut #4A3628, walnutsoft #7A6753, terracotta #C05B3C, terracottadeep #A34830; fontFamily display 'Lora' and sans 'Asap'; radius: chip 999px, card 14px, photo 12px, sheet 20px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - Mobile-first column: the app root is a max-w-[480px] mx-auto column; below 480px it fills the viewport, at md and up it gains 1px benchline side borders on a paperdeep page ground — the layout never becomes multi-column.
  - src/components/BottomSheet.tsx: a reusable sheet — fixed bottom, linen ground, 20px top radius, 1px benchline top border, backdrop rgba(74,54,40,0.35); opens with translateY 100%→0 over 320ms ease-out; closes on backdrop tap and on its X; body scroll locked while open.
  - src/hooks/useScrollSpy.ts: IntersectionObserver over the five category sections; the tab matching the topmost visible category activates, and the tab row auto-scrolls horizontally to keep the active chip visible.
  - Order state in src/hooks/useOrder.ts: {dishId: qty} persisted to localStorage key 'qrOrder'; exposes add/remove/step and a count/total derived from the dish list.
  - src/lib/motion.ts: shared variants — reveal (opacity 0→1, y 14→0, 500ms ease-out, 60ms stagger, whileInView once), pop (scale 0.9→1, 180ms, for count and add-button feedback) — with useReducedMotion using plain 150ms opacity fades and sheets fading in place.
  - Keep every user-facing string and the whole menu (brand, table label, service note, five categories, each dish {id, name, one-line description, price, allergens, photo?}, footer address and hours) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — Menu</title> plus a drawn-in-code favicon.svg (a terracotta circle on the paper ground, like a plate); no other meta work.

## Variables
- [BRAND] — Restaurant name (default: "Rue Noisette"). Invented bistro name for the wordmark, page title and footer.
- [TABLE] — Table label (default: "Table 7"). The chip under the wordmark naming where this QR sits (e.g. 'Table 7', 'Stool 12') — from the QR the guest scanned.
- [SERVICE] — Service note (default: "Service included"). The one-line service note shown under the header and on the tally sheet (e.g. '15% service added').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/restaurant-qr-menu-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FAF3E7` — Page ground — warm cream paper, the whole menu.
- Paper deep `#F1E6D2` — Sticky tab bar ground, hover tints, desktop page ground outside the column.
- Linen `#FFFDF8` — Cards, bottom sheets, photo caption card — near-white linen.
- Bench line `#E3D5BC` — Hairlines, borders, dotted price leaders, chip outlines.
- Walnut `#4A3628` — Primary ink — dish names, prices, headings, active tab fill; warm dark brown, never black.
- Walnut soft `#7A6753` — Secondary text: descriptions, captions, notes.
- Terracotta `#C05B3C` — The one accent: add buttons, active filter chips, CTA pills, the signature label, call-waiter outline.
- Terracotta deep `#A34830` — Pressed states on terracotta.

### Typography
- Display — wordmark, dish names, sheet titles (warm serif, italic accents): Lora (OFL), weights 500/600
- Text — descriptions, chips, buttons, notes (friendly rounded sans): Asap (OFL), weights 400/500/600

### Layout & motion
- Spacing: Menu-tight, thumb-friendly: one 480px column; 16px page padding; category blocks py-24px with a Lora heading and a benchline rule; rows 16px tall padding with 12px gaps; every tap target ≥ 44px; the tally bar reserves 72px so the last dish never hides behind it.
- Radius: Friendly and round: 999px chips, 14px cards, 12px photo thumbs, 20px sheet tops; the dotted price leaders are the only straight lines.
- Motion: Bottom sheets slide up translateY 100%→0 over 320ms ease-out with a linen backdrop fade (250ms); closing reverses in 240ms.
- Motion: Sticky tabs: the active chip fills walnut with paper text (200ms); the tab row auto-scrolls to keep it centered; a 2px terracotta underline slides between tabs (240ms).
- Motion: Allergen filters: non-matching rows animate to 35% opacity with grayscale(0.5) and their add buttons disable (250ms); matching rows stay full color.
- Motion: Add-button feedback: the terracotta plus scales 0.9→1 (180ms) and the tally bar's count pops once; the bar total slides up 80ms after a change.
- Motion: Call-waiter state: the outline pill cross-fades to a walnut confirmation card with a bell icon (250ms) — a screen state, never a network claim.
- Motion: Reveals: category blocks fade up gently (y 14→0, 500ms, 60ms stagger) via Motion whileInView, once.
- Motion: prefers-reduced-motion: sheets fade in place without sliding, pops and underlines become instant, reveals become 150ms opacity fades.
- Imagery: One bistro session: appetizing overhead (top-down) food photography on ceramic plates at a warm walnut table, every shot in the same warm pendant bistro light pooling from the upper left, soft shadows, cream-and-walnut palette with terracotta touches, gentle steam and gloss, honest portions — six dishes only; every other dish is a text row with a dotted leader, like a paper menu. No readable text in frame (no menus, no labels), no logos, no people. The photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [BRAND] — Menu (`index.html`)
1. **Bistro header** — Non-sticky top block on paper: the [BRAND] wordmark in Lora 600 italic 24px walnut; beside it a quiet table chip ([TABLE]) — linen ground, benchline border, a 6px terracotta dot before the label, Asap 500 13px walnut. One line beneath, Asap 400 13px walnutsoft: 'Kitchen open till 22:00 · [SERVICE] · this menu is sample copy for a demo bistro.'
   Layout: Column padding 16px, py-16px; chip right-aligned on the same baseline as the wordmark; wraps below on 320px screens.
   Motion: None — the header scrolls away and the tabs take over.
2. **Signature hero** — The visual anchor: a full-column overhead photograph (public/images/hero-steak.webp, 4:3, 12px radius) of the house signature under warm bistro light. Overlapping its bottom edge, a linen caption card (14px radius, soft shadow): a small terracotta label 'FROM THE PASS' in Asap 600 11px uppercase tracked; 'Steak au poivre' in Lora 600 22px walnut; one line Asap 13px walnutsoft: 'the dish that named the street'; price '$26' Asap 600 walnut right-aligned. Tapping the card opens the dish's detail sheet.
   Layout: Photo full column width (aspect 4:3, object-cover); caption card overlaps -28px with 16px side insets.
   Motion: Photo fades up on load (500ms); caption card follows 100ms later; no parallax on mobile.
3. **Category tabs** — Sticky tab row (top-0, z-30, paperdeep ground at 92% opacity with blur, 1px benchline bottom): five chips in a horizontally scrolling row — 'Starters', 'Mains', 'Sides', 'Desserts', 'Drinks' — Asap 500 14px; the active chip is walnut ground with paper text, the rest linen with benchline borders. The tabs scroll-spy the categories below and the row auto-scrolls to keep the active chip centered; tapping a chip scrolls smoothly to its category.
   Layout: Full-width sticky bar, 48px tall, chips 36px tall with 8px gaps, row padding-x 16px.
   Motion: Active fill 200ms; a 2px terracotta underline slides between chips (240ms); smooth scroll to category (400ms, native scroll-behavior under reduced motion).
4. **Allergen filters** — One row under the tabs (not sticky): label 'Avoid:' in Asap 500 13px walnutsoft, then four chips — 'Gluten', 'Dairy', 'Nuts', 'Shellfish' — linen ground, benchline border, walnut text; an active chip fills terracotta with linen text. Filtering dims non-matching dishes (35% opacity, grayscale 0.5, add buttons disabled) across every category. Disclaimer line beneath, Asap 12px walnutsoft: 'Filters are a guide from our sample menu — always tell your server about allergies.'
   Layout: Chips wrap to two lines at 390px; row py-12px.
   Motion: Dim/undim 250ms per row; active chip fill 200ms.
5. **Menu — five categories** — Five category blocks, each with a Lora 600 18px walnut heading, a benchline rule, and two honest row styles. PHOTO ROWS (six dishes, 1:1 thumb 88px, 12px radius): 'French onion soup' — 'double broth, gruyère lid, the proper way' — $9 — dairy, gluten (onion-soup.webp); 'Steak au poivre' — 'the signature; frites underneath' — $26 — dairy (hero-steak.webp reused); 'Duck confit' — 'slow leg, potatoes cooked in its fat' — $24 — dairy (duck-confit.webp); 'Moules frites' — 'a bowl of mussels, bread for the broth' — $21 — shellfish, dairy (mussels.webp); 'Chocolate tart' — 'dark, barely set, salt on top' — $9 — dairy, gluten (choc-tart.webp); 'House red, carafe' — 'the one the staff drinks' — $18 — (wine-carafe.webp). TEXT ROWS with dotted leaders to the price: 'Pâté de campagne' — 'toast, cornichons' — $11; 'Little gem salad' — 'buttermilk, herbs' — $8 — dairy; 'Rainbow trout amandine' — 'brown butter, almonds' — $23 — nuts, dairy; 'Frites' — 'twice-cooked' — $5; 'Haricots verts' — 'shallot, butter' — $6 — dairy; 'Crème brûlée' — 'cracked to order' — $8 — dairy; 'Badoit, bottle' — 'the fizzy one' — $6; 'Espresso' — 'short, walnut-forward' — $3. Every row carries a 32px terracotta add button (lucide plus) at the right; allergen tags sit as tiny benchline chips under the description. STARTERS: soup, pâté, salad · MAINS: steak, duck, mussels, trout · SIDES: frites, haricots · DESSERTS: tart, brûlée · DRINKS: carafe, Badoit, espresso.
   Layout: Blocks py-24px; photo rows: thumb left, text middle (name Lora 600 17px, description Asap 13px walnutsoft one line, allergen chips), price Asap 600 walnut and add button right, stacked when narrower than 360px; text rows: name and price on one line with a dotted benchline leader between, description below in 13px walnutsoft.
   Motion: Blocks fade up on scroll (500ms, 60ms stagger); add-button press scales 0.9→1 (180ms); rows dim per the filters.
6. **Dish detail sheet** — Opening any dish opens the BottomSheet: a 4:3 photo across the sheet top (12px radius), the dish name in Lora 600 24px walnut, the full description in Asap 15px walnutsoft (two lines), allergen chips (linen, benchline), and a quantity stepper (walnut-outline minus/plus, count in Asap 600). Bottom of the sheet: a walnut pill 'Add to order — $26' whose label reflects quantity; adding closes the sheet and pops the tally count.
   Layout: Sheet max-height 82vh, scrollable inside; 20px top radius; X (lucide) top-right on the photo.
   Motion: Sheet slides up 320ms; backdrop fades 250ms; the Add pill press scales 0.97; reduced motion: sheet fades in place.
7. **Order tally and call-waiter** — Fixed bottom bar (72px, linen ground, 20px top radius, benchline top border): left '3 items · $47' in Asap 600 walnut (hidden shows 'Your order is empty — walnutsoft' when none); right a terracotta pill 'Show server' (lucide receipt) opening the tally sheet. The sheet: 'For your server' in Lora 600 20px; line items with name, walnut-outline qty steppers, line total, and a small x to remove; then a benchline rule, subtotal, the service note '[SERVICE]' in Asap 13px walnutsoft, the total in Lora 600 22px; an outline terracotta pill 'Call waiter' (lucide bell) that swaps to a walnut confirmation card (250ms): bell icon, linen text 'Screen ready — show your server when they pass.' Closing line, Asap 12px walnutsoft centered: 'This tally lives on your phone only — nothing was sent.' The tally persists in localStorage and says so.
   Layout: Bar spans the column width (fixed within the 480px column, inset on desktop); sheet like the dish sheet; items list capped with internal scroll.
   Motion: Bar count pops (180ms) on add; total slides up 80ms; sheet slide 320ms; call-waiter cross-fade 250ms; reduced motion: fades only.
8. **Footer** — Benchline top rule, py-24px: the [BRAND] wordmark small (Lora 600 16px), one line Asap 13px walnutsoft: '9 Larkspur Lane · Tue–Sun 17:00–22:00'; a second line Asap 12px walnutsoft: 'An invented demo bistro — dishes, prices and allergens are sample copy.'; optional [CREDIT] link. No dates beyond static hours, no social row.
   Layout: Centered column text, 16px padding.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/hero-steak.webp to public/images/hero-steak.webp. Alt: 'Overhead view of steak au poivre with peppercorn sauce and frites on a ceramic plate at a walnut bistro table.' Used as the signature hero (4:3) and its Mains row thumb. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/onion-soup.webp to public/images/onion-soup.webp. Alt: 'Overhead view of French onion soup with a melted cheese lid in a ceramic crock.' Starters row thumb (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/duck-confit.webp to public/images/duck-confit.webp. Alt: 'Overhead view of duck confit with potatoes in a warm ceramic plate.' Mains row thumb (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/mussels.webp to public/images/mussels.webp. Alt: 'Overhead view of a bowl of mussels in broth with fries and bread beside it.' Mains row thumb (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/choc-tart.webp to public/images/choc-tart.webp. Alt: 'Overhead view of a dark chocolate tart slice with flakes of salt on a small plate.' Desserts row thumb (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/wine-carafe.webp to public/images/wine-carafe.webp. Alt: 'Overhead view of a small carafe of red wine and one glass on a walnut table.' Drinks row thumb (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — plus and minus on add buttons and steppers, x to close sheets and remove items, receipt on the Show-server pill, bell on the call-waiter button and its confirmation, utensils as a tiny accent in the header line. No other iconography: no emoji, no allergen pictogram sets, no restaurant logos. Dishes without photographs are quiet text rows with dotted leaders — never placeholder boxes.
- font: @fontsource/lora (OFL, weights 500 and 600, plus the 500 italic) and @fontsource/asap (OFL, weights 400, 500, 600), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No backend, no ordering, no payments, no network calls, no analytics: the tally, filters and sheets are client state persisted to localStorage only, and the copy keeps saying the tally is for showing the server.
- The call-waiter button never claims to reach anyone: it only changes the screen to a show-this-screen confirmation state — no staff-network implications anywhere.
- Allergen tags are sample guidance, never dietary guarantees; the disclaimer line under the filters must stay.
- No real restaurants, chains or their menus: the venue, dishes, prices and address are invented, and [BRAND] is used everywhere a name appears.
- Photographs are overhead bistro dishes only: no readable text in frame (no menus, boards or labels), no logos, no people; if a generated image ever shows writing or a face, replace it.
- No real-clock anything: opening hours and 'kitchen open till 22:00' are static sample copy, and no dates, years or 'today's specials' appear.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 300 KB WebP.
- Mobile-first is the design: 390×844 is the primary target and the desktop (1440×900) view simply centers the same 480px column with hairline sides — never a multi-column desktop layout, no hidden desktop-only content; zero console errors at both sizes.
- Bottom sheets and the tally bar must respect safe areas (env(safe-area-inset-bottom)) and keep every tap target ≥ 44px.
- Keep the warm-bistro direction locked: paper ground, walnut ink, one terracotta accent, Lora over Asap, dotted leaders and friendly radii; no dark mode, no neon, no glassmorphism, no fast springs — everything ≤ 320ms.
- Respect prefers-reduced-motion: sheets fade in place, pops and sliding underlines become instant, reveals become 150ms fades.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [TABLE] or [SERVICE] change, rewrite dishes, prices and hours to fit the new venue instead of leaving bistro copy under a wine bar.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/restaurant-qr-menu-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
