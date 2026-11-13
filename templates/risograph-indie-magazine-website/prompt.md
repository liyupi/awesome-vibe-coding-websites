# Risograph Indie Magazine Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a fictional independent print and web magazine in [CITY]. Issue theme: [ISSUE_THEME]. Preserve fluorescent risograph overprint, not polished commercial card UI.

- Audience: Curious readers, neighborhood makers and independent print collectors.
- Goal: Browse original stories, finish a long read, save an article and try a truthful local print subscription flow.
- Tone: Observant, specific, warmly critical. No startup slogans or invented readership claims.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: vite (MIT), react (MIT), react-dom (MIT), typescript (Apache-2.0), @fontsource/archivo-black (OFL-1.1), @fontsource/ibm-plex-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to ./ and build.sourcemap to false. Use a single src/content.ts for all editable content and fully rewrite its data for variable changes.
  - Implement responsive components and CSS tokens in src/styles.css. Bundle fonts through the listed Fontsource packages; import only the weights actually used.
  - Provide semantic native controls and keyboard/touch alternatives; implement focus-managed dialogs and local-only validated form feedback.

## Variables
- [BRAND] — Brand (default: "Sidefold"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [ISSUE_THEME] — Issue Theme (default: "Small Acts, Loud Places"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [CITY] — City (default: "Port Briar"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [PRINT_PRICE] — Print Price (default: "18"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/risograph-indie-magazine-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Fluorescent pink `#FF48B0` — Large hero left field, cover ink plate, story panels. WCAG relative-luminance calculations: #16113B text on #FF48B0: 5.78:1; #FFFFFF text on #0078BF: 4.73:1; #FFFFFF text on #572178: 11.09:1; #16113B text on #FFE64D: 14.16:1; #16113B text on #FFFFFF: 17.84:1. Use these pairs for every normal-size label/body/button. Decorative overlaps/gradients carry no text; readable text gets a solid backing.
- Process blue `#0078BF` — Large hero right field and solid article feature bands.
- Overprint purple `#572178` — Decorative intersection plate; never fake multiply text.
- Paper yellow `#FFE64D` — Subscription tabs and reading markers.
- Paper white `#FFFFFF` — Long-read surface.
- Ink `#16113B` — Body on pink/yellow/white; not a background substitute.

### Typography
- Display: Archivo Black (OFL), weights 700
- Body: IBM Plex Sans (OFL), weights 400/700

### Layout & motion
- Spacing: 1120px editorial grid, 40px desktop gutters / 20px mobile; 12-column cover with 6/6 split; 88px major spacing / 52px mobile; body max 65ch.
- Radius: 0px paper corners; 2px button edges. 2px dark rules, no rounded SaaS cards.
- Motion: On first appearance cover blue plate shifts 2px over 550ms once; maintain readable masthead as a single unshifted layer.
- Motion: Story hover/focus shifts illustration plate 2px for 150ms; progress line follows actual article scroll. No looping grain. Reduced motion freezes registration and removes route transitions.
- Imagery: Original SVG risograph artwork only: halftone hands assembling a table, ribbed bench, circular speaker, abstract print rollers; consistent #FF48B0/#0078BF ink and #572178 overlaps. A polished physical issue mock has cover front, spine, shadow and page fore-edge. Contributors use original abstract geometric cut-paper portraits of fictional people with varied silhouettes; no photo or real likeness, no initials-only avatars. Grain is an inline seeded SVG filter or tiny CSS dot pattern at opacity <=.09, never on text.

## Pages & Sections
### [BRAND] — [ISSUE_THEME] (`index.html`)
1. **Masthead and issue cover** — Header: [BRAND] wordmark, Stories, Contributors, Print; saved bookmark button with count. Eyebrow 'Independent culture, printed with care'. H1 '[ISSUE_THEME]'. Intro 'A repair bench, an open listening room, and the people who keep a place useful. Stories from [CITY] and beyond.' Issue marker 'Issue 04 • 96 pages • Two inks'. CTAs 'Read the cover story' links ./index.html#/story/shared-bench and 'Get the print issue' scrolls print section. Cover text '[BRAND] / [ISSUE_THEME] / 04'. Footer note 'Made to be read, folded, and passed along.' Header menu collapses to accessible drawer at <760px.
   Layout: 56px masthead in #FFE64D with #16113B text. Hero 620px minimum: left 46% full #FF48B0, right 54% full #0078BF; visible strong-color fields each >=30% first screen. 96px Archivo Black theme on pink; 440×500 physical issue visual on blue has white edge and original pink/blue halftone table geometry overprinted purple. Two col desktop, stacked mobile with 56px headline and cover >=330px wide. No text over grain or overlap.
   Motion: One slight 2px registration arrival, then static. Cover CTA instant hash navigation.
2. **Story desk** — Heading 'What holds a place together?'. Filter buttons All / Places / People / Objects, result count and Saved toggle. Six story records with IDs, section, author, read time and full original text: shared-bench, Places, 'A bench with room for one more', Mina Vale, 6 min; listening-room, Places, 'A room that listens back', Jules Fen, 4 min; shared-supper, People, 'The table that travels', Etta Penn, 5 min; pocket-press, Objects, 'A press small enough to borrow', Noor Lane, 4 min; repair-ledger, Objects, 'Notes in the repair ledger', Mina Vale, 3 min; doorway-garden, People, 'Growing things by the doorway', Jules Fen, 5 min. Each has specific 24–35 word standfirst about the object/place, original SVG motif, 'Read story' and separate 'Save story' action. Filters and saved list work together, empty state 'No saved stories in this section yet.' Persist IDs in namespaced localStorage. Every card opens its own full story route with 4 substantive 70–100 word paragraphs; use the cover article prose below as the quality benchmark.
   Layout: White #FFFFFF grid with #16113B labels and 2px rules; first story spans 2 of 3 columns with a 420px pink #FF48B0 print illustration, other motifs #0078BF/#FFE64D; purple #572178 category tabs have white text. Mobile single column, no masonry reading reorder. Filter bar wraps.
   Motion: 150ms ink nudge on hover/focus; filter content never animates from zero opacity.
3. **Contributors** — 'The hands behind the pages'. Mina Vale — editor, records how shared objects change a room; Jules Fen — sound writer, keeps the listening notes; Etta Penn — illustrator, draws the useful things people overlook; Noor Lane — printmaker, tests small tools with large questions. Each profile includes a short 30-word original note and an article link. No social links unless an actual local profile panel exists. Profiles open a local dialog listing their published story IDs and short bio.
   Layout: Blue #0078BF full band with white headings; four white profile panels, #16113B body, each has a 96px pink/yellow/blue original geometric fictional portrait rather than initials. On mobile 2 columns then 1 at <=360px.
   Motion: Portrait registration reacts at most 2px to focus; tap opens biography.
4. **Print desk** — 'A good story deserves a paper life.' 'Uncoated paper, two bright inks, and a spine that opens flat. Nothing hidden behind a screen.' Single issue: $[PRINT_PRICE], 96 pages; Three-issue bundle: price equals 2.5×PRINT_PRICE rounded to nearest dollar; 'Domestic shipping included. International availability is not simulated.' Radio choose Single / Bundle, quantity 1–4, email, country selector Domestic / Other. Live total = unit price × quantity. Other country shows 'This local demo does not quote international shipping' and disables reservation. Submit 'Preview print reservation' validates email and selection and shows in-place receipt 'Local demo only. Nothing was charged, ordered, or emailed.' Include Clear form. No address collection and no checkout language.
   Layout: Yellow #FFE64D band, #16113B copy; 60/40 text/form, a second tilted issue spread visual in #FF48B0/#0078BF beside the heading. Form white with square 2px ink borders, selected radios purple #572178/white. Mobile single col.
   Motion: Arithmetic updates immediately, aria-live total; no celebratory confetti.
5. **Footer** — [BRAND] — 'Independent pages, shared attention.' Links Stories, Contributors, Print; accessible Return to top. 'A fictional publication demo. Reading and reservation controls stay on this device.' No copyright year.
   Layout: Purple #572178 with white text and pink #FF48B0 decorative strip, 32px padding.
   Motion: Static.

### [BRAND] — Long read (`#/story`)
1. **Full article and reading tools** — Direct open #/story shows shared-bench. #/story/<id> selects a known story; unknown ID falls back to cover story with a small 'Opening the cover story' message. Shared header with Back to stories, text size A−/A+ (18–24px), Save story (local), reading progress 0–100 from actual article geometry, not a timer. Cover article heading 'A bench with room for one more', deck 'At the back of a borrowed workshop, one shared surface makes space for a neighborhood to learn by doing.', by Mina Vale, Places, 6 min. Opening: 'The bench is never quite clear. A blue clamp rests beside a cup of worn pencils, and a chair with three steady legs waits for somebody to notice the fourth. Nobody has written a membership rule. The only agreement is simpler: if you use a tool, leave it ready for the next pair of hands.' Section The useful kind of welcome: 'Tomas, who keeps the key, says the easiest way to make a room feel private is to label everything with a person’s name. Here the drawers are labeled by what they hold. Screws. Sandpaper. Things that might be useful. The last drawer is the largest. It is also the one visitors open first, because uncertainty is a good reason to start a conversation.' Pull quote 'A shared place is built again every time somebody makes room.' Section Repairs that travel: 'The repair is rarely the whole story. A broken lamp brings in a neighbor who has lived two doors away for years. A stuck drawer becomes a lesson in reading the grain. Before the object leaves, someone writes its problem and its repair in a small ledger. Not a record of expertise, but a record of attention. The next person starts one page further along.' Section Leave a little space: 'Near closing, the bench returns to something close to empty. The pencils stay. So does the chair, now steady on four legs. Tomas leaves one clear corner because arriving with a broken thing can feel like asking too much. An empty patch of wood is his way of answering before the question is spoken. There is room here. Put it down.' Add two equally concrete 70-word paragraphs on tool borrowing and the ledger, keeping total cover story around 600 words. Show large code-drawn risograph clamp/bench figure, caption 'A shared surface, drawn from the story.' End with related stories and Back to all stories; no fake comments.
   Layout: Top bar yellow #FFE64D / ink #16113B; title spread half #FF48B0 half #0078BF with headline on pink and a separate white reading surface. Body max 65ch on #FFFFFF, #16113B 19px/1.7; purple #572178 pullquote on yellow panel, no textured body. Figure repeats exact pink/blue/purple geometry. Mobile reading tools wrap, no sticky obstruction.
   Motion: Thin progress indicator in #572178; reduced motion disables smoothing. No animated text.

## Assets
- font: Self-host Archivo Black, IBM Plex Sans using the Fontsource packages listed in Stack; OFL-1.1, no external font requests.
- image: Draw original issue cover, six editorial motifs, spread and four abstract fictional contributor portraits as inline SVG; seeded halftone patterns and 2px registration offsets in pink #FF48B0 / blue #0078BF / purple #572178. No external artwork, photos, logos or copied covers; list as original project artwork in ASSETS.md.

## Don'ts
- Build a static-only demo: no backend, API routes, databases, authentication, payments, third-party APIs, analytics, telemetry, or forms that send network requests. Confirmations must explicitly say local demo; never claim an order, booking, generated service result, or email was sent.
- Use Vite base ./, relative local assets, hash routes or real .html filenames; no bare-directory links. Direct-open every route and ensure any detail route without an ID renders its first item. Build minified dist/ with npm run build, no source maps or source files, total dist under 20 MB.
- Keep all editable copy, fictional sample data, prices, interaction labels, alt text and A/B content in a single src/content.ts module. Keep 3–6 variables. When variables change, rewrite all related content consistently; never leave the default brand or subject in the second case.
- All visible language and alt text use US English. Do not render calendar dates, years, dated copyright lines, fake freshness or popularity metrics. Operational weekdays and times, track durations, relative timers, issue identifiers and dimensions are permitted.
- Use only original code/art/copy, permissive MIT/ISC/BSD/Apache/CC0 dependencies and locally bundled OFL fonts. No copied site code, existing logos, famous characters, commercial fonts, restricted components or recognizable real-person likeness. List every font, dependency and generated artwork in ASSETS.md with source and license.
- Everything is local at runtime: no hotlinked pictures, font CDNs, remote scripts, remote music or placeholder-image services. Download exactly the specified template-hosted images before build; record full source URL, target path, alt text and generated credit in ASSETS.md.
- At 1440×900 and 390×844 keep zero console errors and no horizontal overflow. Touch targets at least 44px, visible keyboard focus and labeled inputs, Escape/outside close and focus restore for dialogs, drawer focus trap, scroll lock and aria-live for result changes. Hover effects need equivalent focus/tap paths.
- Respect prefers-reduced-motion: remove looping transforms, scroll scrub and parallax, show final static states, never autoplay audio/video, no flashing, strobe or rapid full-screen luminance changes. Do not hide essential content pending animation.
- Preserve the assigned palette with at least two strong hero colors occupying large areas. No neutral cream/charcoal fallback, no gradients behind normal text, no low-contrast small labels. Use the calculated AA text/background pairs in Design.
- No copyrighted editorial collages or real magazine mastheads. Never use CSS blend-mode on body text; print grain and registration belong only to illustration layers. Contributor visuals are original abstract fictional geometric portraits, permitted consistently across Design and Assets; no real likeness or initials-only substitution.
- For altCase Folio Signal, completely rewrite all six stories, contributor names/bios and 600-word lead article around tool sharing and communal meals in West Alder; retain identical section order, overprint art language, routes and local interactions. Do not leave Sidefold, Port Briar, default titles or prices behind.

---
— Prompt by VibeFather · https://vibefather.ai/t/risograph-indie-magazine-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
