# Spend a Billion Dollars Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a witty, tactile browser spending game titled [BRAND] where players inherit $100,000,000,000 from fictional eccentric [BENEFACTOR] and try to spend all of it. Keep a sticky animated balance counter pinned at the top that rolls down smoothly as items are bought or sold, paired with a percentage-spent progress bar and quick tab switcher between 'Spend the $100B' and 'Feel the Scale'. In the Spend tab, present 60 original items spanning $4 to $25,000,000,000 (from coffee and bicycles to stadiums, solar cities, and a space station), each illustrated in code in a unified flat-sticker SVG style with bold ink outlines and zero brand logos, with Sell (-), typed quantity input, and Buy (+) controls. Provide a live itemized receipt, milestone callouts ('You've spent 4,000 lifetimes of average earnings'), a 'How long to earn this' converter against customizable salary, and a one-click downloadable Canvas receipt PNG. In the 'Feel the Scale' tab, compare $1 Million, $1 Billion, and $1 Trillion with animated stacks of $100 bills, proportional isometric cubes, and time comparisons.

- Audience: Curious browser gamers, students, and anyone fascinated by visualizing extreme numbers and wealth scale.
- Goal: Make $100 billion viscerally understandable within three seconds of opening the page through tactile shopping feedback, live receipt updates, and striking visual scale comparisons.
- Tone: Playful, crisp, editorial-toybox—witty item notes, crisp green-and-gold print ink, and zero preachiness.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/bricolage-grotesque (OFL-1.1), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/bricolage-grotesque (600, 700, 800), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (500, 600, 700) in src/main.tsx.
  - Store all 60 catalog items, category definitions, milestones, and copy variables in src/data/catalog.ts (zero real brands, zero real people, zero calendar dates).
  - Create a unified flat-sticker SVG artwork renderer in src/components/StickerIcon.tsx so every one of the 60 items gets a charming, colorful, ink-outlined sticker illustration drawn in code.
  - Implement an HTML5 Canvas receipt image generator in src/utils/receiptCanvas.ts that renders a crisp serrated thermal paper receipt PNG for download/sharing, and persist the player's cart to localStorage.

## Variables
- [BRAND] — Game Title (default: "Aunt Margo's Vault"). Playful title for the $100B spending game
- [BENEFACTOR] — Fictional Benefactor Name (default: "Aunt Margo Vance"). Fictional eccentric relative who left the $100B fortune
- [LEDGER_LABEL] — Receipt Header Label (default: "Inheritance Ledger"). Subtitle printed on the live receipt and downloadable slip
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/spend-a-billion-dollars-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Money Green `#2EC27E` — Sticky balance vault banner, Buy buttons, and bill stacks
- Warm Cream `#FFF8E7` — Primary canvas backdrop and paper receipt surface
- Print Ink `#1A1A1A` — Chunky sticker outlines, crisp typography, and offset drop shadows
- Vault Gold `#F5B700` — Milestone ribbons, mega-tier highlights, and active tab pill
- Coral Sell `#FF6B57` — Sell (-) buttons and budget warning accents

### Typography
- Game Title & Big Balance Figures: Bricolage Grotesque (OFL), weights 600/700/800
- Item Titles, Descriptions & Milestones: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Prices, Receipt Lines & Salary Math: JetBrains Mono (OFL), weights 500/600/700

### Layout & motion
- Spacing: Hero benefactor welcome strip paired with a sticky vibrant green `$100,000,000,000` vault counter bar, category filter pills, 3-to-4-column responsive 60-item sticker grid, and a sticky/collapsible receipt & salary-converter sidebar.
- Radius: 16px rounded sticker cards with 2px solid #1A1A1A ink borders and crisp 3px hard offset shadows; serrated receipt edge at bottom.
- Motion: Smooth requestAnimationFrame rolling counter animation whenever money drops or refunds.
- Motion: Playful sticker pop-tilt on card hover and crisp confetti burst when crossing major milestones or hitting $0 left.
- Motion: Animated growing stacks of $100 bills and proportional 3D isometric cubes in the 'Feel the Scale' tab.
- Motion: Respect prefers-reduced-motion by snapping counters immediately and pausing scale bobbing.
- Imagery: 100% original code-drawn flat-sticker SVG illustrations for all 60 items, stylized benefactor medallion portrait, animated SVG/Canvas bill stacks and scale cubes, plus Canvas-rendered thermal receipt PNG.

## Pages & Sections
### [BRAND] · Spend $100,000,000,000 (`#/spend`)
1. **Eccentric Aunt Vault Hero & Sticky Balance Counter** — Compact, high-energy header introducing fictional [BENEFACTOR]'s $100,000,000,000 inheritance with an original code-drawn golden medallion portrait, quick tab switcher ('Spend $100B' vs 'Feel the Scale'), and a sticky full-width Money Green (#2EC27E) balance bar showing the live animated remaining fortune (`$100,000,000,000`), amount spent, percentage bar, active milestone pill, and quick Reset / Jump to Receipt actions.
   Layout: Sticky counter pinned cleanly below compact nav; fits hero + first row of items immediately above the fold on 1440×900 and 390×844.
   Motion: Rolling odometer-style number interpolation on every purchase or refund.
2. **60-Item Flat-Sticker Shopping Grid** — Category filter bar (`All 60`, `Everyday`, `Gadgets & Fun`, `Wheels & Wings`, `Real Estate`, `Culture & Sport`, `Megaprojects`) plus search and sort (Low→High / High→Low). Displays 60 original brand-free items from `$4` Iced Oat Coffee and `$18` Sourdough Pizza up to `$1.2B` Pro Stadium, `$8B` Solar Desert City, and `$25B` Orbital Space Station. Each card renders a crisp flat-sticker SVG icon, price tag, witty 1-line note, `Sell (-)` button, editable numeric quantity input, and `Buy (+)` button (plus `×10` quick shift or max-affordable disable).
   Layout: Responsive 1-col (mobile) → 2-col (sm) → 3-col (lg) grid alongside the live receipt & converter column on desktop.
   Motion: Subtle sticker tilt on hover and brief green pulse when bought.
3. **Live Receipt, Milestones, Salary Converter & PNG Share** — Serrated cream paper receipt titled '[BRAND] — [LEDGER_LABEL]' listing every purchased item, quantity, subtotal, and grand total, plus a one-click 'Download Receipt PNG' button that generates a crisp high-res Canvas receipt slip. Includes an interactive 'How long to earn this?' salary converter (presets: Median Salary $65k, Surgeon $350k, Pro Athlete $5M, or custom input) calculating years & lifetimes of work, plus a progress tracker of 8 milestones (e.g., '1 Lifetime of Earnings', '100 Lifetimes', 'Small Island GDP', '4,000 Lifetimes', 'Vault Emptied!').
   Layout: Sticky right rail on desktop (`lg:col-span-4`) and accessible below or via floating 'View Receipt' jump pill on mobile.
   Motion: New receipt rows slide in smoothly; unlocked milestones flash Vault Gold.

### Feel the Scale · $1M vs $1B vs $1T (`#/scale`)
1. **Interactive $1M vs $1B vs $1T Visualizer** — Dedicated second tab making orders of magnitude unforgettable: (1) Interactive Bill Stack Comparator showing 100-dollar bills stacked to height (10,000 bills = 1.1m / shoulder height for $1M; 10 million bills = 1.09 km / taller than the tallest tower for $1B; 10 billion bills = 1,092 km / high into orbital space for $1T), (2) Proportional 3D Isometric Cube & Pallet grid where $1M is one tiny briefcase, $1B is 1,000 pallets filling a warehouse, and $1T is 1,000 warehouses, (3) Time-to-Seconds & Walking-Speed Scale Bar (`1M sec = 11.6 days`, `1B sec = 31.7 years`, `1T sec = 31,709 years`), and (4) an interactive 'Compare Your Current Spend' widget plotting the player's actual receipt total right onto the $100B scale.
   Layout: Clean stacked interactive infographic cards inside 1280px container with zero horizontal overflow on 390px mobile.
   Motion: Animated bill stacks rising smoothly and interactive scale-multiplier slider.

## Assets


## Don'ts
- Never name, depict, or reference any real billionaire, celebrity, tech executive, or real-world company/brand.
- Never print calendar dates, months, or 4-digit years anywhere on the page or on the generated receipt.
- Never use broken external images or CDN fonts—draw all 60 flat-sticker icons in SVG code and bundle Fontsource fonts locally.
- Never leave the first screen empty or buried behind a modal intro—show the $100B vault counter and first rows of shoppable sticker items immediately.
- Never allow horizontal overflow on 390×844 mobile or clip elements with clip-path.

---
— Prompt by VibeFather · https://vibefather.ai/t/spend-a-billion-dollars-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
