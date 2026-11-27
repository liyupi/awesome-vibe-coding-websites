# Personal Expense Tracker App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A true three-breakpoint responsive mobile-first personal finance and daily expense tracker PWA ([BRAND]) for [USER_NAME] with a [MONTHLY_BUDGET] monthly budget. Mobile (<768px) uses a native bottom tab bar (Home, Analytics, Budgets, Settings) + slide-up Add Expense bottom sheet with custom numeric keypad; tablet/desktop uses a left sidebar + 2-column dashboard layout. No fake phone frame.

- Audience: Everyday consumers, young professionals, and freelancers tracking daily spending, category limits, and recurring bills across phone and laptop.
- Goal: Make logging an expense take under five seconds while keeping monthly budget health, category trends, and recurring bills immediately visible.
- Tone: Calm, crisp, trustworthy, clutter-free financial clarity.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (400, 500, 600, 700) and @fontsource/ibm-plex-mono (400, 500, 600) locally in src/main.tsx.
  - Store all seeded fictional transactions, categories, recurring bills, and initial budget limits in src/data/seedFinance.ts; persist all state mutations (transactions, budgets, darkMode, bill paid flags) in localStorage.
  - Never wrap the app in a decorative phone bezel or fixed 390px desktop container; render full-bleed responsive layouts across mobile (<768px bottom tab bar + sheet), tablet, and desktop (sidebar + 2-column grid).

## Variables
- [BRAND] — App brand name (default: "LedgerLeaf"). Fictional personal finance PWA name
- [USER_NAME] — Profile display name (default: "Maya Lin"). Fictional account owner greeting
- [MONTHLY_BUDGET] — Monthly budget headline (default: "$3,400"). Monthly spending cap formatted string
- [CURRENCY_SYMBOL] — Currency symbol (default: "$"). Currency prefix used across amounts
- [SAVINGS_GOAL] — Highlighted savings bucket (default: "Autumn Kyoto Trip"). Fictional personal savings target card
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/personal-expense-tracker-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Light Canvas `#F6F7F9` — Primary light-mode app background
- Card White `#FFFFFF` — Elevated mobile and desktop cards
- Deep Ink `#0F172A` — Primary balances, headings, and dark-mode background
- Crisp Emerald `#059669` — Income, remaining budget ring, safe progress bars, and primary '+' CTA
- Alert Rose `#E11D48` — Expenses, over-budget warnings, and delete confirmations
- Slate Muted `#64748B` — Secondary labels, timestamps, and inactive tab icons

### Typography
- App headings and UI: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Monetary balances, keypad digits, and percentages: IBM Plex Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Mobile (<768px) uses edge-to-edge 16px horizontal padding with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=1024px) uses a 240px left navigation sidebar + max-w-6xl 2-column responsive workspace.
- Radius: 16px for hero summary card and bottom sheets, 12px for transaction rows and budget cards, 999px for category filter chips.
- Motion: Smooth slide-up sheet reveal for the Add/Edit Expense numeric keypad drawer.
- Motion: Animated SVG ring arc and budget progress bar transitions when adding or editing transactions.
- Motion: Respects prefers-reduced-motion; all content visible immediately.
- Imagery: Pure code-drawn finance visuals: SVG spend-vs-budget summary ring, interactive SVG category donut chart, 7-day spend bar chart, crisp Lucide category icons, and zero stock photos.

## Pages & Sections
### [BRAND] — Personal Expense Tracker (`index.html`)
1. **Adaptive Mobile Tab Bar & Desktop Sidebar Navigation** — Four primary destinations: Home, Analytics, Budgets, and Settings, plus a high-contrast emerald '+' Quick Add button. Under 768px renders as a sticky bottom tab bar with centered floating '+' button and >=44px tap targets; on >=768px transforms seamlessly into a left sidebar with [BRAND] emblem, nav links, live remaining-budget mini pill, dark mode toggle, and 'Add Transaction' CTA.
   Layout: Full-viewport responsive app shell; zero fake phone borders.
2. **Home View — Balance Summary Ring, Recurring Bills & Transaction Feed** — Top hero summary card in deep ink (#0F172A) with emerald/rose SVG circular spend-vs-budget ring showing Remaining Budget, Spent This Month, Monthly Income, and [SAVINGS_GOAL] progress chip. On desktop sits in a 2-column layout alongside Upcoming Recurring Bills (clickable 'Mark Paid' toggles for Rent, Fiber Internet, Transit Pass, Cloud Backup). Below: Searchable & category-filterable Transaction Feed seeded with 14 realistic fictional transactions (Groceries, Dining, Transit, Utilities, Health, Subscriptions, Salary Income) with inline Edit and Delete actions.
   Layout: 2-column grid on desktop (main ledger + right bills/summary rail); single-column native feed on mobile.
3. **Fast '+' Add / Edit Expense Sheet With Custom Numeric Keypad** — Opens as a tactile rounded-t-2xl bottom sheet on mobile and centered modal dialog on desktop. Features Expense / Income toggle, large live mono amount readout, custom 3x4 touch-friendly numeric keypad (0–9, '.', backspace, clear) that also accepts keyboard typing, merchant/note input, 6 color-coded category chips (Dining, Groceries, Transit, Housing, Leisure, Health), date selector, and Save button that immediately updates balances, charts, and localStorage.
   Layout: Bottom sheet on <768px, modal dialog on >=768px.
4. **Analytics View — SVG Category Donut & 7-Day Spending Bar Chart** — Left card: Interactive SVG Spending-by-Category Donut chart where clicking or hovering any slice highlights its category share, dollar total, and transaction count. Right card: 7-Day Daily Spend SVG bar chart with daily average dashed reference line and peak-day highlight, plus Top Merchants & Cashflow Ratio summary cards.
   Layout: 2-column analytics grid on desktop; stacked cards on mobile.
5. **Budgets View — Interactive Monthly Category Sliders & Alerts** — Displays overall budget utilization bar against [MONTHLY_BUDGET] and 6 per-category cards (Groceries, Dining, Transit, Housing, Leisure, Health). Each card shows Spent vs Limit, emerald/amber/rose status pill, animated progress bar, and an interactive range slider letting users adjust monthly limits live with instant over-budget warning badges.
   Layout: 2-column responsive card grid on desktop; single column on mobile.
6. **Settings View — Dark Mode, Currency, CSV Export & Data Reset** — Profile header for [USER_NAME], Light / Dark theme switch, CSV Export button that downloads `ledgerleaf-transactions.csv` directly via Blob URL, summary storage readout, and 'Restore Sample Data' button.
   Layout: Clean stacked settings panels centered inside workspace.

## Assets
- icon: Install lucide-react (ISC) for bottom tab icons, category icons, keypad delete, and export controls.
- font: Self-host Plus Jakarta Sans and IBM Plex Mono via @fontsource packages (OFL).
- image: All rings, donut charts, and 7-day bar charts are rendered in inline SVG. Zero external images.

## Don'ts
- No fake phone bezel, iPhone notch, or fixed narrow phone shell on desktop screens.
- No real banks, credit card logos, merchant trademarks, or real financial accounts.
- No backend, API calls, CDN scripts, or Google Fonts links.
- No empty initial screen; seed 14 realistic fictional transactions and 4 recurring bills immediately.
- No source maps in production build and always use base: './'.
- No horizontal overflow on 390x844 mobile or 1440x900 desktop.
- No mention of VibeFather or competitors except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-expense-tracker-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
