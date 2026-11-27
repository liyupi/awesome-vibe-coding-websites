# Meal Planner & Grocery List App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A fresh sunlit responsive mobile-first weekly meal planner & smart supermarket-aisle grocery checklist PWA ([BRAND]) for [HOUSEHOLD_NAME] ([DEFAULT_SERVINGS]). Mobile (<768px) uses a 4-tab bottom bar (Plan, Recipes, Groceries, Pantry); desktop opens into a sidebar + 7-day meal calendar & live aisle grocery split view. No fake phone bezel.

- Audience: Home cooks, families, and meal preppers planning weekly menus and shopping efficiently.
- Goal: Connect weekly meal planning directly to scaled recipes and aisle-sorted grocery checklists in one tap.
- Tone: Warm, organic, appetizing, crisp home-kitchen calm.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Download all 6 cohesive home-cooking WebP photographs into public/images/ and reference via ./images/...
  - Seed a 7-day Breakfast/Lunch/Dinner plan, 6 scaled recipes with cook-mode steps, aisle-sorted groceries (Produce, Dairy, Pantry, Bakery), and pantry stock toggles in src/data/mealSeed.ts; persist all state in localStorage.

## Variables
- [BRAND] — Meal app name (default: "BasilNote"). Fictional meal planner PWA name
- [HOUSEHOLD_NAME] — Household greeting (default: "Clara & Ben's Kitchen"). Displayed in header
- [DEFAULT_SERVINGS] — Default servings (default: "2 Servings"). Initial recipe multiplier label
- [WEEK_LABEL] — Planner heading (default: "Weekly Table Plan"). Main calendar title
- [MARKET_NOTE] — Grocery tip (default: "Grouped cleanly by supermarket aisle"). Subtitle on grocery list
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/meal-planner-grocery-list-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Fresh Linen `#FBF9F4` — Warm kitchen linen background
- Card White `#FFFFFF` — Meal slot cards, recipe sheets, and aisle lists
- Forest Ink `#1B2A22` — Headings, recipe titles, and primary text
- Herb Green `#2D6A4F` — Primary CTAs, active tabs, check-off ticks, and Produce badges
- Tomato Red `#DC4A2D` — Quick swap accents, dinner highlights, and Pantry alerts
- Warm Oat `#EFEAE0` — Subtle borders, pills, and day selectors

### Typography
- Editorial recipe titles and headings: Fraunces (OFL), weights 600/700
- Meal cards, steps, and grocery items: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Scaled quantities, prep minutes, and counts: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Mobile (<768px) clears the fixed 64px bottom tab bar comfortably. Desktop (>=1024px) renders a full-height 236px left sidebar, 7-day meal calendar grid, and right live Aisle Grocery rail.
- Radius: 16px for dish cards and recipe sheets, 12px for meal slots and aisle groups, 999px for day pills and servings controls.
- Motion: Smooth slide-up Swap Meal & Recipe Cook-Mode sheet with live scaled quantity transitions.
- Motion: Crisp strikethrough check-off animation on grocery aisle items.
- Motion: Respects prefers-reduced-motion; all content visible immediately.
- Imagery: Six cohesive sunlit home-cooking photographs on matte speckled linen stoneware and warm oak countertop, zero text or logos.

## Pages & Sections
### [BRAND] — Weekly Meal Planner & Groceries (`index.html`)
1. **Adaptive Mobile Tab Bar & Desktop Sidebar** — Mobile (<768px): compact [BRAND] header with one-tap 'Sync Groceries' pill + fixed bottom 4-tab bar (Plan, Recipes, Groceries, Pantry). Desktop (>=768px): full-height left sidebar with [BRAND] emblem, [HOUSEHOLD_NAME], 4 nav destinations, weekly meals planned counter, and 'Send Week to Grocery List' CTA.
   Layout: Full-viewport sunlit kitchen PWA; zero fake phone frame.
2. **Plan View — 7-Day Meal Calendar + Live Aisle Grocery Split** — Day switcher (Mon–Sun) + 7-day Breakfast / Lunch / Dinner cards showcasing cohesive dish photos, prep time, and quick 'Swap' & 'Cook' buttons. Clicking 'Swap' opens the Swap Meal sheet to assign any of the 6 seeded recipes. Clicking 'Send Week to Grocery List' aggregates all planned ingredients cleanly into Produce, Dairy, Pantry, and Bakery aisles right inside the desktop right rail (and Groceries tab on mobile).
   Layout: 2-column split on desktop (7-day planner left + live Aisle Grocery checklist right); day-by-day meal cards on mobile.
3. **Recipes View & Cook-Mode Detail Sheet With Servings Scaler** — Photo gallery of all 6 home-cooked recipes (Maple Berry Baked Oats, Herb-Crusted Salmon Bowl, Cherry Tomato Basil Rigatoni, Coconut Chickpea Curry, Poached Egg Avocado Toast, Roasted Tomato Lentil Soup). Opening any recipe launches a rich Recipe Detail Sheet with dynamic 1x–6x servings stepper that scales every ingredient quantity automatically, plus a checkable step-by-step Cook Mode checklist.
   Layout: 2-column or 3-column photo cards + slide-up/modal Recipe Detail sheet.
4. **Groceries & Pantry Views** — Groceries tab displays aisle-grouped checklist (Produce, Dairy, Pantry, Bakery) with strikethrough check-offs, remaining item counter, Clear Checked action, and Add Custom Item bar with aisle picker. Pantry tab tracks household staples (Olive Oil, Sea Salt, Arborio Rice, Oats, Tahini, Garlic) with In Stock / Running Low toggles.
   Layout: 2-column aisle grid on desktop; stacked aisle cards on mobile.

## Assets
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-oats.webp to public/images/meal-oats.webp. Alt: 'Warm maple berry baked oats with toasted almonds and fresh figs in speckled stoneware bowl'. Used for Maple Berry Baked Oats. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-salmon.webp to public/images/meal-salmon.webp. Alt: 'Herb-crusted pan-seared salmon with roasted asparagus, charred lemon, and quinoa on stoneware plate'. Used for Herb-Crusted Salmon Bowl. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-pasta.webp to public/images/meal-pasta.webp. Alt: 'Rustic cherry tomato and fresh basil rigatoni pasta finished with olive oil in speckled stoneware bowl'. Used for Cherry Tomato Basil Rigatoni. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-curry.webp to public/images/meal-curry.webp. Alt: 'Golden coconut chickpea and spinach curry garnished with fresh cilantro and warm flatbread'. Used for Coconut Chickpea Curry. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-toast.webp to public/images/meal-toast.webp. Alt: 'Sourdough avocado toast with poached egg, sliced radish, and microgreens on stoneware plate'. Used for Poached Egg Avocado Toast. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-soup.webp to public/images/meal-soup.webp. Alt: 'Velvety roasted heirloom tomato and red lentil soup swirled with herb oil and crisp croutons'. Used for Roasted Tomato Lentil Soup. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: Install lucide-react (ISC) for calendar, utensils, shopping basket, chef hat, checkmarks, and swap icons.
- font: Self-host Fraunces, Plus Jakarta Sans, and JetBrains Mono via @fontsource packages (OFL).

## Don'ts
- No fake phone bezel or fixed narrow mobile container on desktop screens.
- No hotlinking remote image URLs; download all 6 dish WebPs into public/images/ and reference via ./images/...
- No real grocery chains, packaged product brands, or calendar dates.
- No CDN scripts, Google Fonts, or source maps; always set base: './'.
- No horizontal overflow on 390x844 mobile or 1440x900 desktop.
- No mention of VibeFather or competitors except optional [CREDIT].

---
— Prompt by VibeFather · https://vibefather.ai/t/meal-planner-grocery-list-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
