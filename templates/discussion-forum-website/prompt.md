# Discussion Forum Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A community forum for a fictional hobby community, an amateur astronomy club, different from a Q&A site: categories with colours; a thread list sorted by latest, top and unanswered; nested replies with quotes, reactions and polls; user profiles with trust badges; notifications; a composer with Markdown preview; and moderation tools (pin, lock, a report queue). Seeded with 40 realistic threads. Midnight #101935, star yellow #FFD166 and nebula pink #EF476F on soft white cards.

- Audience: Club committees and community organisers who want a place for conversation, and developers looking for a forum interface to build on.
- Goal: Feel like a living club from the first screen, then get a visitor reading a thread, voting in a poll, replying or starting one.
- Tone: Friendly and specific, like a club newsletter written by members: real questions, real answers, no corporate community-speak.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/epilogue (OFL-1.1), @fontsource-variable/albert-sans (OFL-1.1), @fontsource/dm-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors midnight #101935, midnightSoft #1C2650, star #FFD166, pink #EF476F, ink #1B2140, muted #5B6280, card #FFFFFF, page #EEF1F8, line #DFE3EF, teal #118AB2, green #0E9F7A, violet #7B61FF, orange #E07A1F; fontFamily display 'Epilogue Variable', sans 'Albert Sans Variable', mono 'DM Mono'.
  - A small hash router reads location.hash: #/ (home), #/category, #/category/<slug>, #/thread, #/thread/<slug>, #/users, #/users/<handle>, #/notifications, #/moderation; a route without its parameter shows the first item; scroll to top on route change. No router library.
  - src/data/seed.ts holds the 40 threads, 14 members, categories, polls and the report queue; src/store/useForum.ts is a reducer with every action (reply, react, vote, mark notifications read, pin, lock, report, hide post, warn, dismiss) and persists the visitor's changes to localStorage under the key [BRAND_SLUG]-forum, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.
  - src/lib/markdown.ts is a small renderer for **bold**, *italic*, `code`, bullet and numbered lists, links, > quotes and paragraphs; all HTML in the input is escaped. No Markdown library.
  - The header's star chart is an inline SVG generated from a fixed list of star coordinates and constellation lines in src/lib/stars.ts; no image files.
  - All interface copy, categories, thread text, members, badges and report reasons live in src/data/seed.ts and src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Community name (default: "Northfield Astronomical Society")
- [CITY] — Town or city (default: "Northfield")
- [FEATURED_THREAD] — Title of the pinned welcome thread (default: "Start here: how this forum works")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/discussion-forum-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- midnight `#101935` — Header, composer button text, moderator badge, primary text on star yellow
- midnightSoft `#1C2650` — Hover rows on midnight, footer
- star `#FFD166` — Star yellow: the New thread button, active tab underline, stars in the header chart, highlights; always with midnight text
- pink `#EF476F` — Nebula pink: unread dot on the bell, report reasons, lock icon, moderation actions
- page `#EEF1F8` — Page ground
- card `#FFFFFF` — Soft white cards
- ink `#1B2140` — Text
- muted `#5B6280` — Secondary text and timestamps
- line `#DFE3EF` — Card borders and dividers
- teal `#118AB2` — Category colour: Telescopes & gear; Verified observer badge
- green `#0E9F7A` — Category colour: Observing reports
- violet `#7B61FF` — Category colour: Astrophotography; Top contributor badge
- orange `#E07A1F` — Category colour: Events & star parties; Event host badge
- gold `#A37A00` — Category text and dots for the yellow category (AA on white)

### Typography
- Display / headings and thread titles: Epilogue Variable (OFL), weights 700/900
- Body / UI and post text: Albert Sans Variable (OFL), weights 400/500/600
- Mono / timestamps, counts, handles: DM Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Page max-w-[1200px] px-6; cards rounded-[14px] with a 1px line border and p-5; list rows py-4 with 1px line separators; 8px rhythm.
- Radius: Cards 14px; buttons 10px; chips and avatars rounded-full; inputs 10px.
- Motion: Scroll reveals on the home page: category cards fade up 20px over 350ms with a 40ms stagger, once; content is visible by default.
- Motion: Reactions scale to 1.2 and back on press; the count updates at once.
- Motion: Poll bars animate to their new widths 300ms after a vote.
- Motion: Composer tabs and thread sort tabs switch with a 150ms fade; the mobile drawer slides in 220ms.
- Motion: prefers-reduced-motion: everything changes instantly.
- Imagery: No photographs or illustrations. Avatars are circles in a colour from the member's name with white initials; the header carries a code-drawn star chart; icons come from lucide. Soft white cards on a pale page under a midnight header, with star yellow and nebula pink as the only strong accents plus one colour per category.

## Pages & Sections
### Home (`index.html`)
1. **Header** — A midnight band 180px tall on desktop with the star chart across it (about 90 stars of three sizes and five thin constellation lines in star yellow at 50%). Top row: wordmark [BRAND] in Epilogue 900 20px white with a small yellow star icon; nav: Categories, Latest, Members, Notifications (a lucide bell with a pink count badge '3'), Moderation; right: a pill 'New thread' (star yellow fill, midnight text). Under the row: H1 Epilogue 900 clamp(30px, 3.4vw, 48px) white 'Where [CITY] talks about the night sky.' and a line white/70: 'A friendly forum for telescope owners, naked-eye watchers and anyone who looks up.'
   Layout: Band content max-w-[1200px]; the chart sits behind the text and is faint there. At 390px the band is 150px tall, the row holds the wordmark, the bell and a lucide menu button on one line, the nav moves into the drawer, and 'New thread' becomes a round yellow floating button at the bottom right.
   Motion: The chart's stars twinkle very slowly (opacity 0.6 to 1 over 6 seconds, staggered); static under reduced motion.
2. **Categories** — H2 'Categories'. Six cards: 'Getting started' (pink dot, 'First telescopes, first questions', 7 threads, latest 'Which eyepiece first for an 8-inch Dob?'); 'Telescopes & gear' (teal, 'Scopes, mounts, eyepieces and DIY fixes', 9 threads, latest 'Replaced the focuser on my 102ED'); 'Observing reports' (green, 'What you saw, and how the sky was', 8 threads, latest 'Saturday at the dark-site'); 'Astrophotography' (violet, 'Capturing and processing the night sky', 8 threads, latest 'First attempt at the Orion Nebula'); 'Events & star parties' (orange, 'Meet-ups, public nights and car pools', 5 threads, latest 'Autumn star party — sign-up'); 'Off-topic & clubhouse' (gold, 'Books, coffee and how the club is run', 3 threads, latest 'What are you reading?'). Each card links to #/category/<slug>.
   Layout: Grid md:grid-cols-2 lg:grid-cols-3 gap-4 on white cards; a 10px coloured dot, name in Epilogue 700 20px, description 14px muted, counts in mono.
   Motion: Cards fade up staggered; hover lifts 3px.
3. **Latest activity and sidebar** — Left column, H2 'Latest activity': ten threads newest first, each row with the category dot, title (Epilogue 700 17px), a mono line with the author handle, '12 replies', '184 views' and '8 minutes ago', a pink 'NEW' chip on threads with unread replies, a yellow pin icon on pinned threads and a pink lock icon on locked ones. Right column, sidebar: 'Top contributors this month' with five members (avatar, handle, mono reply count, badge); 'Coming up' with two events ('Autumn star party — Sat, sign-up open', 'Public night at the lake — volunteers needed'); a mono stats line '1,280 members · 40 threads · 486 replies'. A line under the header reads 'You are signed in as Nova_Nate · moderator'.
   Layout: lg:grid-cols-[68%_32%] gap-6; on mobile the sidebar stacks below the list and shows only the contributors card.
   Motion: Rows hover with a pale page-colour background.

### Category pages (`#/category`)
1. **Category header and sort tabs** — Shows the category for the slug in the hash; opened as #/category with no slug it shows the first category. A white card with the coloured dot, the name in Epilogue 900 36px, the description and a mono count '7 threads'. Tabs: Latest, Top, Unanswered; the active tab has a 3px star-yellow underline. Top sorts by replies and reactions; Unanswered shows threads with no reply (two in the first category, a few in others).
   Layout: py-8; tabs 40px tall.
   Motion: Tab switch fades 150ms.
2. **Thread list** — Rows: title; under it the author avatar and handle, a mono line with replies and views, the last reply time, and small chips for the category tags ('eyepieces', 'beginner', 'planetary', 'dso', 'processing', 'star party'). Pinned threads come first with a yellow pin; locked threads have a pink lock and no reply action. In 'Getting started': [FEATURED_THREAD] (pinned, 14 replies), 'Which eyepiece first for an 8-inch Dob?' (9), 'Is a 70 mm refractor useless?' (21), 'How do you find anything without a GoTo mount?' (6), 'Collimation scares me — a walkthrough for beginners' (0), 'Light pollution: what can I actually see from a city?' (17), 'Best free planetarium app?' (0). The other five categories hold their listed threads up to 40 in total, written in full in the seed: Telescopes & gear ('Dobsonian vs. SCT for a small balcony', 'Replaced the focuser on my 102ED — photos inside', 'Is a coma corrector worth it on an f/5?', 'Filter drawer or filter wheel?', 'Show us your field cart', 'A cheap DIY dew heater that actually works', 'Mount recommendations under $800', 'Binocular viewing: 15×70 or 20×80?', 'Eyepiece focal lengths — fill the gaps in my set'); Observing reports ('Saturday at the dark-site: Saturn and a meteor', 'First light report: Messier 13 was stunning', 'Lunar 100 — 62 down', 'The occultation I almost missed', 'Three comets in one night', 'Nova in Delphinus — anyone confirmed?', 'Aurora visible from town last night', 'Double stars on a hazy evening'); Astrophotography ('First attempt at the Orion Nebula (unguided)', 'Back-focus hell with a Newtonian — solved', 'Stacking 30-second subs vs. 120-second', 'Dew, frost and a dead battery: lessons', 'A cheap narrowband filter — worth it?', 'Tracking error after a meridian flip', 'Processing the North America Nebula, step by step', 'Phone through the eyepiece — better than I expected'); Events & star parties ('Autumn star party — sign-up and directions', 'Club public night at the lake — volunteers needed', 'Perseids watch: carpool thread', 'Loaner telescope slots for the star party', 'Indoor meeting: member astroimage night'); Off-topic & clubhouse ('What are you reading?', 'Coffee at the observatory — a monthly thing', 'Forum questions and suggestions', locked).
   Layout: White card; rows py-4 with 1px line separators; on mobile the counts wrap under the title.
   Motion: None beyond hover.

### Thread pages (`#/thread`)
1. **Thread header** — Shows the thread for the slug; opened as #/thread with no slug it shows [FEATURED_THREAD]. Breadcrumb 'Home / Getting started' in muted; H1 Epilogue 900 clamp(26px, 3vw, 40px); a mono line 'Started by StarSlewSara · moderator · 14 replies · 1.2k views'; a 'Moderate' menu (lucide moreHorizontal) with 'Pin thread' or 'Unpin thread' and 'Lock thread' or 'Unlock thread', shown because the visitor is a moderator.
   Layout: py-8; header actions right-aligned, wrapping under the title on mobile.
   Motion: Menu fades in 150ms.
2. **Original post and nested replies** — The original post on a white card: avatar, handle, badge chip, a mono time ('3 months ago'), and the body rendered from Markdown (headings, a list, a quote). In [FEATURED_THREAD] the body is: 'Welcome to the forum. **Be curious and be kind.**' followed by a list of four lines ('Introduce yourself in Off-topic & clubhouse', 'Search before you ask — the answer is often already here', 'Post a report after an observing session, even a short one', 'Bring a friend to a star party') and a quote '> A telescope you actually use beats a better one in a box.' Replies are nested up to two levels deep with a 2px line-colour indent; a reply that quotes another shows the quote in a pale block with the quoted handle. Each post has reactions as icon chips with counts — lucide thumbsUp 'Helpful' 18, heart 'Thanks' 7, star 'Spot on' 4 — and a 'Reply' link; clicking a reaction toggles it for the visitor and changes the count. The first screen of the thread shows the original post and at least three replies, two of them nested, written in full in the seed.
   Layout: Post body max-w-[720px] 16px with 1.65 line-height; nested replies max-w-[560px]; on mobile nesting is a single 16px indent line.
   Motion: Reaction press scales 1.2; a new reply fades in 200ms.
3. **Poll** — A poll inside a post, shown in the thread 'Eyepiece focal lengths — fill the gaps in my set': the question 'Which focal length should I add next?', four options with a vote bar and a mono percentage — '6 mm' 42%, '12 mm' 27%, '24 mm' 19%, 'Something else' 12% — and a line '73 votes · poll closes in 6 days'. Before voting each option is a button; after voting the bars show the visitor's choice with a yellow check and the counts include that vote.
   Layout: Poll on a pale page-colour panel inside the post; bars in the category colour, 10px tall, rounded-full.
   Motion: Bars animate to new widths 300ms.
4. **Reply composer** — At the bottom: avatar and 'Replying as Nova_Nate', a textarea with a mono hint 'Markdown is supported', and tabs 'Write' and 'Preview'. Preview renders the Markdown with the project's own renderer. 'Post reply' (midnight fill, white text) appends the reply as a nested reply to the post being answered and shows it at once; 'Cancel' clears it. A locked thread shows a pink lock icon and 'This thread is locked.' instead of the composer.
   Layout: White card; tabs above the textarea; on mobile full width with the button below.
   Motion: Tab switch fades 150ms; the new reply fades in 200ms.

### Member profiles (`#/users`)
1. **Profile** — Shows the member for the handle; opened as #/users with no slug it shows StarSlewSara. Header card: a 72px avatar, handle in Epilogue 900 32px, the real-style display name from the seed ('Sara Lindqvist'), badges as chips — Moderator (midnight with a yellow star), Verified observer (teal check), Top contributor (violet), Event host (orange), New member (muted) — and a mono line 'Joined 3 years ago · 412 posts · 1,860 reactions helped'. A short bio. Right: 'Activity' list of the member's five latest posts with links to their threads. Fourteen members in the seed, among them OrionPete, Luna_Lena, DeepSkyDmitri, CometChaser, eyepiece_junkie, NorthfieldNick, TheDobDad, halation_hana and the visitor Nova_Nate.
   Layout: lg:grid-cols-[40%_60%] gap-6; stacked on mobile.
   Motion: Fade up 300ms.

### Notifications (`#/notifications`)
1. **Notifications list** — H1 'Notifications'; a 'Mark all as read' button (midnight outline). Three unread with a pink dot and two read, newest first: 'DeepSkyDmitri replied to your thread “First attempt at the Orion Nebula (unguided)” · 8 minutes ago'; 'OrionPete reacted to your reply in “Perseids watch: carpool thread” · 1 hour ago'; 'Luna_Lena mentioned you in “Stacking 30-second subs vs. 120-second” · yesterday'; 'StarSlewSara pinned your thread · 2 days ago' (read); 'TheDobDad replied to “Show us your field cart” · last week' (read). Each links to its thread; the bell count follows the unread number.
   Layout: White card; rows py-4; unread rows have a pale yellow background.
   Motion: Marking read clears the dots instantly.

### Moderation queue (`#/moderation`)
1. **Report queue** — H1 'Moderation'; line muted 'You are moderating as Nova_Nate.' A summary row in mono: '3 open reports · 1 pinned · 1 locked'. Three reported posts as cards: the post excerpt, its author and thread, a pink chip with the reason and a mono count — 'Off-topic · 2 reports' in 'Perseids watch: carpool thread', 'Uncivil · 3 reports' in 'Dobsonian vs. SCT for a small balcony', 'Spam · 1 report' in 'Show us your field cart' — each with buttons 'Dismiss' (outline), 'Hide post' (pink fill, white text) and 'Warn user' (outline). Dismissing removes the card; hiding removes the card and replaces the post in its thread with 'This post was hidden by a moderator.'; warning removes the card and adds a note under the member's profile.
   Layout: Cards stacked max-w-[860px]; buttons wrap on mobile.
   Motion: Cards fade out 200ms on an action.

## Assets
- image: None. No photographs or illustrations: avatars are initials in coloured circles, icons come from lucide-react and the star chart is inline SVG generated in code.
- icon: lucide-react npm package (ISC): menu, x, bell, plus, pin, lock, messageCircle, eye, thumbsUp, heart, star, check, chevronRight, chevronDown, moreHorizontal, flag, search, shield, users, calendar. No other icon sets, no brand logos anywhere.
- font: Fontsource packages (OFL-1.1): @fontsource-variable/epilogue, @fontsource-variable/albert-sans and @fontsource/dm-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth or requests to any service. Replies, reactions, votes, notifications and moderation decisions are kept in the browser's localStorage.
- The club, its members, handles, threads and events are invented sample content; no real clubs, societies, software products, websites or people may be named or imitated, and no posts may be copied from existing communities.
- This is a conversation forum, not a Q&A site: no accepted-answer checkmark and no vote-sorted answers; sort tabs are Latest, Top and Unanswered only.
- No emoji as icons or reactions; reactions are lucide icons with counts.
- No gradients, glass panels or glowing elements; flat midnight, star yellow, nebula pink and soft white cards with 1px lines.
- Star yellow is always behind midnight text; nebula pink text on white is used only for chips at 12px bold or larger.
- Markdown input is escaped: no raw HTML from a post or reply is rendered.
- Self-host everything: fonts via Fontsource packages, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors (#/category, #/thread, #/users) or real file names, never bare directories; a route opened without its parameter shows the first item.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no twinkle, reveals, lifts or animated bars; every change is instant. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- At 390×844 the header keeps the wordmark, bell and menu button on one line, and the floating New thread button does not cover the last reply's composer.
- Tailwind opacity utilities use the default scale (for example /50, /70, /95); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough.
- No copied code, copy or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/discussion-forum-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
