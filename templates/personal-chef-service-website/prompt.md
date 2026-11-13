# Personal Chef Service Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], an invented private chef cooking [CUISINE] dinners in [CITY] homes, with the quiet promise '[PROMISE]'. The identity is intimate chiaroscuro: a near-black warm ground, candlelight amber as the only accent, cream type, Cormorant Garamond headlines over Karla body text, and moody candlelit photography of dishes, tables, and hands at work. The hero anchors on a plated-dish macro in candlelight with the chef's name in serif; below it sit three tasting menus as course cards, a four-step timeline of how a dinner runs, three event-type cards with photography, two quiet client quotes, an interactive per-guest pricing calculator with a guest slider and menu tiers, and a local inquiry form.

- Audience: Hosts planning an anniversary or dinner party in [CITY], busy households wanting weekly private prep — plus personal chefs, supper-club hosts, caterers, and tasting-event organizers adapting the page.
- Goal: Move a host from curiosity to inquiry in one calm scroll: set the mood with the candlelit dish, prove craft with the menus, demystify the working with the timeline and event cards, make money concrete with the calculator, and end on a form that feels like writing a note rather than filling out paperwork.
- Tone: Quiet confidence — a chef who lets the food talk. Short warm sentences, no exclamation marks, prices stated plainly, the demo calculator honest about being sample rates. Intimate but never precious.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL-1.1), @fontsource/karla (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', and build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below and fontFamily.display 'Cormorant Garamond' and fontFamily.body 'Karla'.
  - Self-host Cormorant Garamond 500/600 plus italic 500, and Karla 300/400/500/600 through @fontsource packages imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (useReducedMotion, AnimatePresence) for calculator number changes, section reveals and the form success state; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: chef strings, three menu records (name, course count, per-guest rate, course list, note), four steps, three event types, two quotes, calculator rules, form labels. When variable values change, rewrite the dependent copy there and derive the inquiry storage key from [BRAND_SLUG].
  - Implement the calculator as pure state: a guests range input (2–30, default 8), tier radio cards (Garden $78, Cellar $95, Long Table $135 per guest), effective guests = max(guests, 10) when Long Table is selected, a flat $60 kitchen supplement whenever the effective party is under six, and the display per-guest rate, supplement line, and estimated total (effective guests × rate + supplement). Show the Long Table floor as a hint line when it applies.
  - Persist the inquiry to localStorage under the key [BRAND_SLUG] + '-inquiry'; validate restored JSON and recover silently; never submit anywhere.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - Use only these lucide-react icons: ArrowRight, Users, Clock, Leaf, Check.
  - A plain <title> of '[BRAND] — private chef in [CITY]' and a favicon (an ember-black square with a candle-amber dot) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Chef name (default: "Maren Holt"). The invented chef's name — it is the brand: the hero serif, the logotype and the storage key all derive from it.
- [CITY] — City (default: "Bridgehaven"). The city and its neighborhoods the chef cooks in; appears in the hero, event cards, quotes and footer.
- [CUISINE] — Cuisine (default: "Mediterranean coastal"). The cooking style in two plain words; drives the hero paragraph and the flavor of the menu copy.
- [PROMISE] — Promise (default: "One menu, written for your table — nothing reheated, nothing rushed."). The chef's one-line creed under the hero headline and echoed in the footer.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/personal-chef-service-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ember black `#171210` — Page ground
- Raised ember `#211814` — Cards, calculator panel, form panel
- Candle amber `#D9A05B` — The one accent: rules, links, slider, tier rings, key numerals
- Cream `#F4ECDD` — Primary text
- Taupe `#A2937F` — Secondary text, metadata, course descriptions
- Hairline ember `#33291F` — Dividers, card borders, timeline track

### Typography
- Display: chef name, headlines, menu names, quote: Cormorant Garamond (OFL), weights 500/600
- Body: paragraphs, courses, forms, buttons: Karla (OFL), weights 300/400/500/600

### Layout & motion
- Spacing: 8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Header 72px. Sections 104px vertical padding on desktop, 72px on mobile. Course lists at 14px row spacing with hairline dividers; prose max 58 characters per line.
- Radius: 2px everywhere — near-square, fine-dining restraint: cards, buttons, inputs, photos. The only curves are the slider thumb, the round numeral dots on the timeline, and the amber keyline offset frames on photographs.
- Motion: Calculator updates crossfade the per-guest rate, supplement line and total over 200ms whenever the slider or tier changes; the slider thumb carries a soft amber focus ring.
- Motion: The four-step timeline draws its horizontal amber track left-to-right over 800ms on first reveal, numerals fading in sequence at 120ms intervals.
- Motion: Photographs settle from scale 1.02 over 600ms as their sections reveal; sections rise 14px with a 480ms fade, staggered 60ms — slow and quiet, nothing bouncy.
- Motion: The inquiry success panel crossfades in over 240ms with a Check icon.
- Motion: Under prefers-reduced-motion every animation becomes an instant state change; the calculator, slider and form stay fully functional.
- Imagery: Six photographs from one candlelit shoot: near-black warm shadows, a single candlelight key, deep amber highlights, painterly chiaroscuro, 50mm macro lens, shallow depth of field, dark vignette. Subjects are plated dishes, table settings, kitchen details, and hands at work cropped at the wrist — no identifiable faces, no readable text or logos anywhere in frame.

## Pages & Sections
### [BRAND] — private chef in [CITY] (`index.html`)
1. **Header and hero** — Header (72px, ember black at 80% with backdrop blur, hairline bottom border): [BRAND] in Cormorant Garamond 600 letterspaced; nav anchors Menus, How it works, Rates, Inquire. Hero: the plated-dish macro full-bleed at 16:9, a black gradient scrim rising from the bottom-left; over it a small Karla letterspaced eyebrow 'PRIVATE CHEF · [CITY]'; H1 in Cormorant Garamond italic 600 'Dinner, composed for your table.'; sub line '[BRAND] cooks [CUISINE] dinners in [CITY] homes — one menu at a time, written around your table. [PROMISE]'; buttons: amber-outline 'Plan a dinner' and cream text link 'See sample menus ↓'; a thin amber rule under the eyebrow.
   Layout: Copy anchored to the bottom-left 7 columns of a 12-column grid over the photo, 96px above the fold edge; buttons 48px tall. Mobile: photo fills the viewport height minus the header, copy stacks, buttons full-width, every tap target at least 44px.
   Motion: The photo settles from scale 1.02 over 600ms; eyebrow, H1, sub and buttons rise 14px in an 80ms stagger; the amber rule grows from 0 to 48px over 500ms.
2. **Sample menus** — Eyebrow 'SAMPLE MENUS'; title 'Three ways to eat.' in Cormorant Garamond 600. To the right of the cards, a tall 3:4 dessert photograph as a quiet accent. Three course cards: 'The Garden Menu — 4 courses · $78 per guest — vegetarian-forward': 'Charred leek vinaigrette'; 'Herb gnocchi, brown butter & sage'; 'Roast delicata, pistachio dukkah'; 'Olive-oil cake, citrus curd'. 'The Cellar Menu — 5 courses · $95 per guest': 'Whipped ricotta, honeycomb & rye'; 'Hand-cut tartare, crisps & capers'; 'Pappardelle, short-rib ragù'; 'Sea bass, fennel salmoriglio'; 'Dark-chocolate budino, sea salt'. 'The Long Table — 7 courses · $135 per guest — for ten or more': 'Oysters, mignonette granita'; 'Squash soup, brown-butter crumbs'; 'Carpaccio, aged balsamic'; 'Agnolotti, sage broth'; 'Duck, cherry & farro'; 'Cheese, quince & walnut'; 'Burnt-honey tart'. Footnote under the grid: 'Menus shift with the market — tell me what you can't eat. I cook around allergies and preferences, but I don't make medical-grade allergen guarantees; cross-contact is possible in any home kitchen.'
   Layout: Cards in a 3-column grid (single column on mobile) on raised ember with 2px radius and 1px hairline border; each card: menu name in Cormorant Garamond 600, a taupe course-count line, the course list split by hairline dividers, and the per-guest rate set in amber Karla 600. The dessert photograph fills a 3:4 slot beside the grid on wide screens and drops above the cards on narrower ones.
   Motion: Cards reveal in a 60ms stagger with the standard rise; the photograph settles from scale 1.02; nothing else moves.
3. **How a dinner works** — Eyebrow 'HOW IT WORKS'; title 'One evening, four movements.' Four steps on a horizontal timeline: '01 The consult — a twenty-minute call about your table: who's coming, what nobody eats, and the room we'll cook in.'; '02 The market run — I shop the morning of your dinner: fish that was swimming yesterday, bread still warm at pickup.'; '03 The cook — your kitchen from mid-afternoon; stock on the stove, music on, everything scrubbed as I go.'; '04 The table — courses plated and poured while you host. I leave the kitchen cleaner than I found it.'
   Layout: A horizontal amber track with four numbered dots; each step is a column with the numeral in a 40px amber-ring circle, a Karla 600 step name, and two lines of taupe copy. The track runs vertical along the left edge on mobile with steps stacked.
   Motion: The track draws left-to-right over 800ms on first reveal; numerals fade in sequence at 120ms intervals; static under reduced motion.
4. **Event types** — Eyebrow 'THE TABLE SETTINGS'; title 'What kind of night is it?' Three quiet cards with photography: 'Intimate dinners — 2–8 guests · seated' over the candlelit table photograph — 'One menu, plated course by course while the candles burn down. Anniversaries, proposals, Tuesdays.'; 'Dinner parties — 10–24 guests · family service' over the long-table photograph — 'Big platters down the middle, seconds encouraged, the kitchen humming behind the door.'; 'The weekly prep — 5 dinners, stacked' over the kitchen-detail photograph — 'I cook once in your kitchen and your week takes care of itself: labeled, chilled, ready to warm.'
   Layout: 3-column grid (single column on mobile); each card: 4:3 photograph in a 2px-radius frame with a 1px amber keyline offset 6px, then the title line with guest range in taupe and two lines of copy.
   Motion: Cards reveal in a 60ms stagger; photographs settle from scale 1.02; the amber keyline fades in 200ms behind each frame.
5. **From the table** — A quiet band with the chef's-hands photograph at 3:4 on the left and two client quotes on the right: '“She cooked our anniversary like it was hers. The kitchen smelled like a coast we haven't visited yet.” — Rosa & Teo, [CITY]' and '“The kitchen was cleaner when she left than when she arrived. The food was the second-best part, which is saying something.” — the Marsh family, [CITY]' — quotes in Cormorant Garamond italic 500 with amber em-dash attributions.
   Layout: 5/7 split: photograph left, quotes stacked right with a hairline divider between them; stacked on mobile with the photograph first.
   Motion: Standard slow reveal; no other movement.
6. **Rates calculator** — Eyebrow 'RATES'; title 'Do the math.' Left panel: a 'Guests' slider from 2 to 30 with the live count set large in Cormorant Garamond 600, and three tier radio cards — 'The Garden Menu · $78 / guest', 'The Cellar Menu · $95 / guest', 'The Long Table · $135 / guest' — the selected tier carrying an amber ring. Right panel on raised ember: the estimate — 'Per guest $78' in amber, 'Kitchen supplement (parties under six) $60' shown only when it applies, 'Estimated total $684' set large, and when Long Table is selected with fewer than ten guests the hint line 'The Long Table is plated for ten or more — the estimate uses ten guests.' Footnote: 'Sample rates for this template — your menu sets the real number after the consult.'
   Layout: 6/6 split on desktop, stacked on mobile; the slider is a 2px hairline track with a 20px amber thumb and a 44px touch target; tier cards are rows with radio dots; the estimate panel is a single raised-ember card with 32px padding and the total in Cormorant Garamond 600 at 56px.
   Motion: Every change crossfades the changed line over 200ms; the slider thumb carries a soft amber focus ring; tier selection animates the ring 180ms.
7. **Inquiry** — Eyebrow 'INQUIRE'; title 'Tell me about your table.' Split: the dessert-plate photograph at 3:4 left, form right. Fields: name, email, occasion select (Anniversary, Dinner party, Weekly prep, Just because), guests number input defaulting to 8, and a message textarea prompted 'What's the occasion? Anything nobody eats?'. Validate locally — name, valid email and occasion required — and on submit swap to a success panel: Check icon, 'Inquiry saved — a live site would email [BRAND] directly; this demo keeps it in your browser.', and a 'Write another' link restoring the form empty.
   Layout: 5/7 split on desktop, stacked on mobile; inputs on raised ember with 2px radius, 1px hairline borders and cream text; errors render inline in candle amber (never red — quiet), the success panel is aria-live='polite'.
   Motion: The success panel crossfades in 240ms; inputs carry a 1px amber focus ring; nothing else moves.
8. **Footer** — Hairline top rule. [BRAND] in Cormorant Garamond 600 with the promise '[PROMISE]' beneath in taupe; nav anchors (Menus, How it works, Rates, Inquire); the line 'Cooking in [CITY] and the neighborhoods around it.'; 'A fictional chef, menu and rates built as a website template.'; '© [BRAND]' with no year; the optional [CREDIT] link.
   Layout: Two rows — brand block left, nav right; second row in taupe with the fictional note, copyright and [CREDIT]; stacked on mobile.
   Motion: Static.

## Assets
- image: Hero dish macro. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/hero-dish.webp to public/images/hero-dish.webp. Alt: 'A plated fine-dining dish in warm candlelight against deep shadows.' Full-bleed hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Candlelit table. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/candle-table.webp to public/images/candle-table.webp. Alt: 'Lit taper candles and wine glasses on a dark linen table.' Used on the Intimate dinners event card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Long table. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/long-table.webp to public/images/long-table.webp. Alt: 'A long dinner-party table set with candles down the center.' Used on the Dinner parties event card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Kitchen detail. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/kitchen-detail.webp to public/images/kitchen-detail.webp. Alt: 'A copper pan, fresh herbs and a knife on a worn cutting board in candlelight.' Used on the weekly-prep event card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Chef's hands. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/chef-hands.webp to public/images/chef-hands.webp. Alt: 'A chef's hands finishing a plated dish with tweezers by candlelight.' Used beside the client quotes. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Dessert plate. Download https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/dessert-plate.webp to public/images/dessert-plate.webp. Alt: 'A slice of burnt-honey tart on a dark plate with a curl of cream.' Used as the tall accent beside the menu cards and again beside the inquiry form. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Install lucide-react (ISC) and use only ArrowRight, Users, Clock, Leaf, and Check. Draw no brand logos; the logotype is the chef's name in type. Record the package and license in ASSETS.md.
- font: Self-host Cormorant Garamond 500/600 plus italic 500 through @fontsource/cormorant-garamond (OFL-1.1). Record the package and license in ASSETS.md; do not use a font CDN.
- font: Self-host Karla 300/400/500/600 through @fontsource/karla (OFL-1.1). Record the package and license in ASSETS.md; do not use a font CDN.

## Don'ts
- No real chefs, restaurants, clients or publications: the chef, menus, quotes and rates are invented, and the footer says so.
- Photographs contain no identifiable faces — hands cropped at the wrist at most — and no readable text, letters or logos anywhere in frame.
- Pricing outputs are invented samples and the calculator says so; never present estimates as quotes, and never imply a booking is confirmed.
- The inquiry form is local-only: no form submits, no email services, no APIs, no analytics; persist to localStorage and validate restored data.
- Dietary copy stays generic: cook around preferences, never promise allergen-free kitchens or medical-grade guarantees.
- No dates tied to the real clock: no date pickers, no availability calendars, no seasons computed from today, no copyright year in the footer.
- No backend, server code, databases, auth, or third-party scripts. Static output in dist/ from the single build command with relative paths.
- Self-host fonts through the listed Fontsource packages only; never load Google Fonts, Adobe Fonts, or any CDN stylesheet or script.
- No source maps in production, no src/ copied into dist/, keep dist/ under 20 MB, and keep Vite's base relative.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services, or hotlinked files; use only the six generated photos.
- Every internal link is an in-page anchor or file name, never a bare directory; the single page must render at 1440×900 and 390×844 with zero console errors.
- Keep the palette disciplined: candle amber is the only accent — no red error states, no gradients, no glow beyond the soft amber focus rings.
- Respect prefers-reduced-motion: calculator crossfades, timeline drawing and reveals become instant; the slider and form stay fully functional.
- The calculator math must follow the stated rules exactly (2–30 guests, tier rates 78/95/135, ten-guest floor on Long Table, $60 supplement under six) and update live as the slider moves.
- Keep all copy in US English and derive the inquiry storage key from [BRAND] and [BRAND_SLUG] so alternate variable values never leave default-brand remnants.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps, or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-chef-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
