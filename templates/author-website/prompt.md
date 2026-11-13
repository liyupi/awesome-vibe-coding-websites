# Author Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a complete English website for [BRAND], an invented author of [GENRE] based in [LOCATION]. Present [FEATURED_BOOK] as the latest release, with four original code-drawn book covers, a data-driven book page with excerpts and placeholder buy controls, three fictional events, a literary biography, a locally demonstrated [NEWSLETTER_NAME] signup, and a useful press kit.

- Audience: Readers exploring a new novel, existing readers looking for events or book-club material, and booksellers, festival organizers and journalists who need reliable author information and downloadable assets.
- Goal: Make the featured book immediately desirable, let visitors move naturally from a cover to an excerpt and purchase placeholders, and give every reader, organizer or journalist a clear next action without requiring a backend.
- Tone: Warm, observant, intelligent and quietly intimate. Use precise sensory details and short editorial sentences, never breathless marketing, fabricated acclaim, generic inspirational language or literary clichés.

## Stack
- Framework: Vite 5 + React 18 + TypeScript 5
- Styling: Tailwind CSS 3.4
- Libraries: Motion 11 (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL), @fontsource/source-sans-3 (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure Vite with base './', build.sourcemap set to false, and Rollup HTML inputs for index.html, book.html, events.html, about.html and press.html so every page opens directly from dist/.
  - Mount a shared React application at each HTML entry, selecting the page from the entry filename rather than introducing a router; use shared Header, Footer, BookCover, NewsletterForm and Reveal components.
  - Keep every author fact, book, excerpt, event, biography, link and image path in src/content.ts; derive book ids with one slugify function and use those ids consistently in links and queries.
  - Define the palette, typography, spacing and keyframes in the Tailwind theme and src/index.css; include a small paper-grain texture made only with CSS gradients at very low opacity.
  - Import Fraunces and Source Sans 3 from the listed Fontsource packages, with system serif and sans-serif fallbacks; bundle all font files locally.
  - Create a simple original open-book line favicon as a local SVG and give each HTML entry a plain document title containing [BRAND] and its page name; do not add SEO metadata.
  - Use Motion for entrance transforms and AnimatePresence for menus, accordions and toast feedback; use native IntersectionObserver for one-time section reveals and respect prefers-reduced-motion everywhere.

## Variables
- [BRAND] — Author name (default: "Mara Ellison"). Use an invented pen name throughout the wordmark, biographies, image alt text, book covers and contact details.
- [GENRE] — Genre descriptor (default: "Literary mysteries"). A short genre label that can introduce the author and guide rewritten copy.
- [FEATURED_BOOK] — Featured book title (default: "The Cartographer of Low Tides"). The first book in the content collection and the default when book.html has no valid id.
- [LOCATION] — Author location (default: "Portland, Maine"). A city and region used in the biography and event context, not a recognizable business or venue.
- [NEWSLETTER_NAME] — Newsletter name (default: "Notes from the Margin"). Use in the signup heading, local storage key and confirmation copy.
- [CONTACT_EMAIL] — Public contact email (default: "hello@maraellison.example"). Use the reserved .example domain in the demo; derive mailto links from this value.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/author-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Vellum `#F2EDE3` — Main page background and generous negative space
- Paper `#FBF8F1` — Reading surfaces, the header and alternating editorial bands
- Ink `#1E2A26` — Primary text, dark footer and primary buttons
- Muted Ink `#626A62` — Metadata, captions and secondary copy
- Oxblood `#873F38` — Links, active rules, small labels and the primary accent
- Moss `#87957F` — Secondary book-cover geometry and quiet illustrative details
- Hairline `#D6CCBC` — One-pixel borders, separators and input outlines
- Faded Ochre `#C4A46A` — Sparse cover accents only, never body text or large backgrounds

### Typography
- Display and literary quotations: Fraunces Variable (OFL), weights 400/500/600
- Body, navigation, forms and metadata: Source Sans 3 (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base scale, a 1280px maximum content width, 48px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep prose between 62ch and 68ch, use 1px rules to organize dense information, and maintain at least 16px between interactive controls.
- Radius: Use square page edges and book covers, 2px corners on buttons, inputs and the portrait frame, and fully rounded shapes only for tiny genre or format labels. Avoid floating pill-shaped cards and large soft shadows.
- Motion: On the home hero, reveal the eyebrow, headline, copy and actions with a 90ms stagger over 600ms while the portrait settles from scale 1.025 to 1; content must remain visible when JavaScript is unavailable.
- Motion: Reveal major sections once as they enter the viewport, moving from opacity 0 and translateY 20px over 500ms; never hide the whole page before an observer fires.
- Motion: Give book covers a restrained pointer tilt of at most 4 degrees, translateY(-6px) and a narrow paper-edge highlight over 180ms; reset on pointer leave and disable tilt on touch devices.
- Motion: Update the excerpt reading-progress rule with native scroll position, animate accordions and mobile navigation over 160–220ms, and move focus correctly when they open or close.
- Motion: Use smooth anchor scrolling only under prefers-reduced-motion: no-preference; under reduce, remove reveals, tilt, parallax and nonessential transitions without disabling reading progress or controls.
- Imagery: Use one supplied, professionally lit editorial photograph of a completely fictional author at a writing desk as the hero, about-page and press-kit portrait. It is a reusable placeholder: retain the supplied local file across variable cases and update its alt text to [BRAND]. All four book jackets are original inline SVG compositions built from geometric lines, contour paths, circles and typographic title/author text; each has its own palette and motif but the same trim ratio and fine paper grain. Do not add other photographs, recognizable people, existing cover art, retailer marks or decorative stock illustration.

## Pages & Sections
### Home — featured novel and complete bibliography (`index.html`)
1. **Shared shell** — Use this shell on all five pages. The wordmark is [BRAND]. Desktop navigation is Books (./index.html#books), Events (./events.html), About (./about.html), Press Kit (./press.html), followed by a compact Join the letter button to ./index.html#newsletter. Add a visible-on-focus Skip to content link. The footer uses an Ink background with Paper text, repeats the navigation, shows For readings, rights and press: [CONTACT_EMAIL] as a mailto link, lists [LOCATION], and leaves the optional [CREDIT] line small and unobtrusive.
   Layout: Make the header sticky at the top with a 76px desktop and 64px mobile height, a Paper background at 96% opacity and a Hairline bottom border. Align its contents to the 1280px grid. On mobile, replace navigation with a labeled Menu button and open a full-width Paper panel below the header with 48px-tall links, focus trapping and Escape-to-close. Use a three-column footer on desktop and one column on mobile.
   Motion: Fade and translate the mobile panel 8px over 180ms; return focus to the Menu button on close.
2. **Portrait-led hero** — Eyebrow: [GENRE] · [LOCATION]. H1: Stories for the hours when the world goes quiet. Body: [BRAND] writes layered fiction about memory, place, and the secrets families keep. The new novel, [FEATURED_BOOK], follows a retired mapmaker back to the island she once erased from every atlas. Primary CTA: Read the opening, linked to ./book.html#excerpt. Secondary CTA: Explore the books, linked to ./index.html#books. Place a small Latest novel label beside the portrait and an original SVG jacket for [FEATURED_BOOK] overlapping its lower-left corner.
   Layout: Use a two-column 7/5 grid with a 72px gap, 64px top padding and 80px bottom padding. Set the headline at 72px/0.98 with a maximum width of 11ch and body at 20px/1.55. The portrait is a large 3:4 editorial frame at least 480px wide on desktop, with the book jacket about 210px wide. On 390px screens use a single column with eyebrow, 46px headline, a 280px-high portrait/jacket visual, body and then two full-width CTAs so the visual anchor appears within the first viewport.
   Motion: Apply the hero entrance sequence and restrained jacket tilt; do not use autoplay video, a carousel or a large animated background.
3. **Featured novel** — Label: The latest novel. Title: [FEATURED_BOOK]. Dek: A missing survey. A causeway open for six hours. A family history waiting at low tide. Synopsis: When cartographer Nell Arden returns to Gannet Island to sell her father's house, she finds a hand-drawn survey tucked inside his tide tables. Its unfamiliar contour leads through the salt marsh to a cottage omitted from every official map—and to the sister her family insisted had left the island thirty years earlier. Metadata: 368 pages · Literary mystery · May 2027. Pull line: Every coastline is an argument with the past. CTA: Discover the book, linked to the featured book's ./book.html?id=… URL.
   Layout: Use a Paper band with Hairline top and bottom borders. Inside, create a 5/7 grid: a 280px-wide code-drawn jacket on the left and the text on the right, with the title at 52px and the pull line in 26px Fraunces italic after the synopsis. Align metadata in one wrapped row separated by thin vertical rules. On mobile, use a 180px jacket aligned left above the text and a 40px title.
   Motion: Reveal the jacket and copy as one section; the jacket may hover-tilt but the synopsis never moves independently.
4. **Books bibliography** — Heading: Four books. Four ways home. Intro: Novels about the places that remember us, from a tidal island to the last tram before a blizzard. Include [FEATURED_BOOK] (2027), The Orchard After Dark (2024), A House for Returning Birds (2022), and The Winter Tram (2019). Their respective motifs are layered tidal contours, five arching orchard branches, three geometric returning birds, and two converging tram lines. Each title links to ./book.html?id=its-slug. Backlist premises: The Orchard After Dark follows two sisters who find a ledger recording harvests that never happened; A House for Returning Birds follows an architect inheriting a cliff house where rooms face different family decades; The Winter Tram brings five strangers the same unsent letter on the last tram before a blizzard.
   Layout: Set the heading and intro in a 7/5 split above a four-column cover grid. Each item is an unboxed composition: a 2:3 SVG jacket, title in 24px Fraunces, then year and genre metadata separated by a Hairline. Use two columns with 12px gaps on mobile and make the entire jacket plus title an accessible link. Do not add filter pills or a carousel for only four books.
   Motion: Stagger cover entrances by no more than 60ms and apply the shared cover hover behavior.
5. **Events preview** — Heading: Meet the author. Intro: Readings, conversations and book-club evenings, with time to stay and talk afterward. Show the same three event records used on events.html: An Evening of Coastal Mysteries on Thursday, April 15, 2027 at 7:00 PM at The Reading Room, 48 Alder Street, Portland, Maine; Maps, Memory & Fiction on Saturday, April 24, 2027 at 2:00 PM at Hall Library, 16 Harbor Lane, Portsmouth, New Hampshire; Spring Book Festival on Sunday, May 9, 2027 at 11:30 AM at Cedar Hall, 9 Garden Street, Boston, Massachusetts. CTA: View all event details, linked to ./events.html.
   Layout: Use three full-width editorial rows divided by Hairlines. Each row is a 140px date column, a flexible title/venue column and a right-aligned city column on desktop. On mobile, put the date above the title and the city beneath it. Do not wrap the rows in separate rounded cards.
   Motion: Reveal rows together; on hover, move only the title 4px to the right and deepen the Oxblood rule.
6. **About the author** — Label: About [BRAND]. Heading: Writing toward the things we almost say. Copy: [BRAND] writes novels rooted in coastal towns, old houses and the complicated loyalty of families. Before turning to fiction full-time, [BRAND] restored architectural drawings and learned that every erased line leaves a shadow. That attention to what remains runs through all four books. Add three compact facts: Four novels; Drafts at 5:30 AM; Based in [LOCATION]. CTA: Read the full story, linked to ./about.html.
   Layout: Use a 4/8 grid with the label and facts in the narrow column and a 52px heading plus 20px copy in the wide column. Separate facts with Hairlines rather than statistic cards. On mobile, place the heading first, followed by copy and the three facts in one row with wrapped text.
   Motion: One quiet section reveal; no animated counters.
7. **Newsletter signup** — Use id newsletter. Eyebrow: [NEWSLETTER_NAME]. Heading: A letter for readers who linger. Body: On the first Sunday of each month, receive a craft note, a short reading list and an early glimpse of the work in progress. No more than twelve letters a year. Fields: Email address and a Join the letter submit button. Include this visible note before submission: Static demo: your address is saved only in this browser and is not sent to a mailing service. Validate a normal email pattern, then store the address under a key derived from [NEWSLETTER_NAME] and show the honest confirmation: Saved in this browser. Connect your mailing service before publishing.
   Layout: Use an Ink full-bleed band with Paper text. Inside the 1280px grid, place the heading and body in a 7-column area and the form in a 5-column area. Inputs have transparent backgrounds, Paper text, a visible Paper border and an Oxblood-free focus outline in Faded Ochre. Stack all elements on mobile with a minimum 48px field and button height.
   Motion: Use a 180ms opacity transition between form and confirmation without removing the explanatory note.

### Book detail — synopsis, excerpt and buy placeholders (`book.html`)
1. **Data-driven book overview** — Read the id query and find the matching book in src/content.ts. With no id, an empty id or an unknown id, show [FEATURED_BOOK] as the first item, never an empty or not-found state. The featured view shows Breadcrumb: Books / [FEATURED_BOOK]; label A novel; title [FEATURED_BOOK]; the synopsis from the home page; metadata 368 pages · May 2027 · [GENRE]; and the jacket with layered tidal contours. Backlist views use their own original synopsis, year, page count (320 for The Orchard After Dark, 288 for A House for Returning Birds, 256 for The Winter Tram), motif and an original three-paragraph opening excerpt consistent with their premises.
   Layout: Use the shared shell and a 5/7 overview grid with 96px top padding. Put a 340px-wide jacket in the left column and breadcrumb, title, synopsis and metadata in the right. Set the title at 64px/1.02 and synopsis at 20px/1.6. On mobile, place breadcrumb and a 44px title before a centered 220px jacket, then synopsis and metadata.
   Motion: Reveal the selected book immediately on load and update the document title from its data; do not animate a full-page loading state.
2. **Opening excerpt** — Use id excerpt. Label: From chapter one. Heading: The road back. For [FEATURED_BOOK], use this original excerpt verbatim: At low tide, the road to Gannet Island surfaced beneath the rain. Nell parked where the asphalt ended and watched water loosen its hold on the stones. For six hours, perhaps seven if the wind stayed west, there would be a way home.

Her father's tide tables lay open on the passenger seat. Inside the back cover she had found a survey drawn in his narrow hand: no roads, no house names, only a line that crossed the marsh and stopped at a small black square. Beside it he had written, Ask June who remembers.

Nell had spent twenty-two years correcting other people's maps. She knew how a clean border could conceal a disputed field, how a blank patch might be more truthful than a name. Still, she had never seen her father leave anything unlabeled.

At the far side of the causeway, a figure lifted an umbrella. The island had already noticed her. Nell folded the survey once, against its original crease, and stepped into the rain. For backlist books, render their own original excerpts from content.ts rather than repeating this text. Add a thin reading-progress rule labeled Reading progress with an accessible percentage.
   Layout: Use a Paper reading band. Keep the excerpt in a centered 680px column with 22px/1.8 Source Sans 3, a 72px Fraunces drop cap on the first paragraph and 28px paragraph spacing. Place the label and heading above the column and pin only the 2px progress rule immediately below the sticky header while this section is in view. Mobile body text is 19px/1.75 with 20px gutters.
   Motion: Grow the progress rule from left to right based on the excerpt's actual scroll range; do not alter the text or reveal paragraphs one by one.
3. **Formats and placeholder buy controls** — Heading: Choose your edition. Show three rows: Hardcover · $28.00 · jacket and deckled edges; Paperback · $18.00 · French flaps; Ebook · $9.99 · EPUB and PDF. Each row has a Buy placeholder button. These are deliberately not live retailer links: clicking one shows a nonblocking toast saying Retailer link placeholder — add your own URL in content.ts. Do not navigate away, start a checkout or imply that a sale occurred.
   Layout: Place the heading in a 4-column left rail and the edition rows in an 8-column right area. Each row uses a Hairline top border, a format/description group, a tabular-price column and a 120px button. On mobile, stack format, description, price and a full-width button with 16px spacing.
   Motion: Toast enters at the bottom center with 8px upward movement and remains readable for four seconds; only one toast is present at a time.
4. **Reading-group notes** — Heading: After the last page. Intro: Three questions for the conversation that follows [FEATURED_BOOK]. Questions: How does the causeway's timetable shape Nell's choices? Which maps in the novel protect, and which ones accuse? What might the final blank contour make possible? For backlist books, replace these with three questions derived from their own plots. Add a Copy discussion questions button that copies the visible questions and shows Copied for two seconds.
   Layout: Use three numbered columns with large 01, 02 and 03 markers in Oxblood, divided by vertical Hairlines on desktop and horizontal rules on mobile. Put the copy action above the columns, right-aligned on desktop and full-width on mobile.
   Motion: Reveal the three questions together and give the copy button a brief text-only confirmation.
5. **More books** — Heading: Continue through the bibliography. Show the other three books with their jackets, titles and years, each linked to its own ./book.html?id=… URL. Keep the shared footer.
   Layout: Use a three-column grid on desktop and two columns on mobile, with the final item spanning neither column nor stretching its cover. Keep the same cover ratio and typography as the home bibliography.
   Motion: Use the shared cover hover treatment with no carousel or automatic movement.

### Events — readings and conversations (`events.html`)
1. **Events introduction** — Eyebrow: Readings & conversations. H1: Bring your questions. Stay for the story. Body: [BRAND] visits libraries, independent venues and community festivals for short readings followed by generous audience conversations. Every listing below includes local time, venue details and a calendar download.
   Layout: Use a 7/5 split with a 64px headline on the left and 20px body copy aligned to the bottom right. Add a Hairline below the section. Mobile headline is 46px with copy below.
   Motion: Use a single quiet entrance.
2. **Upcoming event list** — Render the three records from content.ts. An Evening of Coastal Mysteries: April 15, 2027, 7:00–8:30 PM, The Reading Room, 48 Alder Street, Portland, Maine; a 20-minute reading, audience Q&A and signing, with doors at 6:30 PM and step-free entry. Maps, Memory & Fiction: April 24, 2027, 2:00–3:15 PM, Hall Library, 16 Harbor Lane, Portsmouth, New Hampshire; a conversation about setting and research, with an assisted-listening system and accessible parking behind the library. Spring Book Festival: May 9, 2027, 11:30 AM–12:30 PM, Cedar Hall, 9 Garden Street, Boston, Massachusetts; a panel followed by a signing, with reserved aisle seating available. Each row has Details and Add to calendar buttons. Details expands the description and accessibility information. Add to calendar generates a local .ics file with the correct title, address, start and end time; it calls no calendar service.
   Layout: Use full-width rows with a 150px date block, flexible event information and a 190px actions column. Show month and day in Fraunces, then year and local time in Source Sans 3. Expanded details occupy the information column without shifting the actions off-screen. On mobile, use one column with 48px-tall Details and Add to calendar buttons side by side only if both fit; otherwise stack them full width.
   Motion: Expand details over 200ms, update aria-expanded and move neither focus nor scroll position.
3. **Event planning note** — Heading: Planning a reading or festival? Copy: The press kit includes biographies, a portrait, discussion themes and a printable fact sheet. For availability, format and accessibility requirements, write directly to [CONTACT_EMAIL]. Actions: Open the press kit (./press.html) and Email the author (mailto derived from [CONTACT_EMAIL]).
   Layout: Use an Ink band with a 7/5 text-and-actions grid. Buttons are Paper outlines with clear focus states and stack on mobile.
   Motion: No animation beyond the shared section reveal and button hover states.

### About — biography and writing practice (`about.html`)
1. **Biography portrait and introduction** — Eyebrow: About [BRAND]. H1: Looking for the story beneath the official version. Biography: [BRAND] is the author of four novels, including [FEATURED_BOOK]. The work moves through coastal towns, inherited houses and families learning to tell the truth out loud. Before fiction, [BRAND] spent a decade restoring architectural drawings, cataloguing revisions and discovering how much a deliberate erasure could reveal. Today, writing begins before sunrise in [LOCATION], usually with a paper map, a pencil and more questions than answers.
   Layout: Use a 5/7 grid with the supplied author portrait on the left and text on the right. The portrait retains its natural 3:4 ratio and has a small caption: Writing in [LOCATION]. Set the headline at 58px and biography at 21px/1.65. On mobile, put the eyebrow and 44px headline first, the portrait second and biography third.
   Motion: Use the hero portrait settle and copy reveal without another jacket overlap.
2. **A working day** — Heading: A writing life, in four margins. Timeline: 5:30 AM — First draft, longhand, before the house wakes; 8:30 AM — Walk without headphones and test the day's scene against the weather; 1:00 PM — Type, cut and read the new pages aloud; 4:00 PM — Answer reader letters, then leave one honest note for tomorrow. Closing line: The routine is ordinary. That is what makes it reliable.
   Layout: Set the heading in a 4-column rail and the timeline in an 8-column area. Each entry is a two-column time/description row divided by Hairlines. On mobile, keep time at 96px wide and allow descriptions to wrap without shrinking text.
   Motion: Reveal the rows together; do not simulate typing or animate a clock.
3. **Reader questions** — Heading: Questions readers ask. Accordions: Do I need to read the books in order? Answer: No. Each novel stands alone, though attentive readers will notice a few shared streets and objects. Where do the settings come from? Answer: They are invented composites, drawn from climate, architecture and oral histories rather than copied from one real town. Can our book club request discussion questions? Answer: Yes. Every book page includes questions to copy, and the press kit lists additional themes. What are you writing now? Answer: A novel about an abandoned weather station and the person who has kept its records long after the last transmission.
   Layout: Use a 4/8 grid with the heading left and four accordion rows right. Questions use 24px Fraunces, answers use 18px/1.65 Source Sans 3, and each trigger spans the full row with a Plus icon that rotates 45 degrees when open. Start with the first answer open and allow multiple answers to remain open.
   Motion: Animate answer height and opacity over 200ms, preserve keyboard focus and respect reduced motion.
4. **Newsletter invitation** — Reuse the exact [NEWSLETTER_NAME] content, validation, honest local-storage behavior and confirmation defined on index.html; do not create a second form implementation.
   Layout: Reuse the Ink newsletter band with id newsletter and the same desktop and mobile grid.
   Motion: Use the same 180ms confirmation transition.

### Press kit — biographies, downloads and interview topics (`press.html`)
1. **Press introduction** — Eyebrow: Press & event resources. H1: Everything you need, ready to quote. Body: Approved biographies, the author portrait, original book jackets and practical details for journalists, booksellers, librarians and festival teams. For corrections or interview requests, contact [CONTACT_EMAIL].
   Layout: Use a 7/5 split with a 60px headline, right-aligned body copy and a Hairline below. Mobile headline is 44px.
   Motion: One quiet section reveal.
2. **Copyable biographies** — Provide two versions with Copy short bio and Copy long bio buttons. Short bio: [BRAND] writes [GENRE] about memory, place and family loyalty. The latest novel is [FEATURED_BOOK]. Before writing fiction full-time, [BRAND] restored architectural drawings. [BRAND] now lives and writes in [LOCATION]. Long bio: [BRAND] is the author of four novels, including [FEATURED_BOOK]. The books explore inherited houses, changing landscapes and the stories families preserve—or revise—to protect one another. Before turning to fiction, [BRAND] spent a decade restoring architectural drawings, an experience that continues to shape an interest in erased lines and unofficial histories. [BRAND] writes in [LOCATION], leads occasional community workshops and meets readers at libraries, book clubs and festivals.
   Layout: Use two adjacent unboxed columns divided by a vertical Hairline, each with a 28px Fraunces label, an 18px/1.7 text block and a bottom-aligned outline button. Stack on mobile. Confirmation appears in the button as Copied and via an aria-live region without duplicating visible toasts.
   Motion: Use text-only copy confirmation for two seconds; do not animate the biography text.
3. **Downloadable assets** — Heading: Images and fact sheet. Offer Author portrait (WebP, 3:4) using the download attribute on the local public/images/author-portrait.webp file; one Download SVG action per book that serializes that book's inline SVG into a local Blob download; and Download fact sheet, which creates a UTF-8 text file containing [BRAND], [GENRE], [LOCATION], [FEATURED_BOOK], [CONTACT_EMAIL], the short bio and all event records. Keep the required asset-generation credit in ASSETS.md rather than visible page copy. Buttons perform real local downloads and show no fake upload or processing state.
   Layout: Use a 4/8 grid. The left side contains a 160px-wide portrait thumbnail and its download action; the right side contains four compact book-cover download rows followed by the fact-sheet row. All rows have Hairline separators and clear file-type labels. On mobile, center the portrait and stack download actions at 48px minimum height.
   Motion: No progress animation; provide immediate filename-specific feedback only when a browser download begins.
4. **Facts and conversation themes** — Facts at a glance: Author — [BRAND]; Genre — [GENRE]; Based in — [LOCATION]; Books — Four standalone novels; Latest — [FEATURED_BOOK]; Contact — [CONTACT_EMAIL]. Interview themes: How maps decide what deserves to be seen; Why family secrets change shape between generations; The difference between research and invention; What architectural restoration teaches about revision; Building a sustainable writing routine before sunrise.
   Layout: Use a 5/7 grid with facts in the left column and themes in the right. Facts use stacked label/value rows; themes use five numbered lines, not cards. Add a final Paper band with the text Need a detail that is not listed here? and a mailto button labeled Contact the author.
   Motion: Use a shared reveal and ordinary button hover states only.

## Assets
- image: Download https://media.vibefather.ai/assets/02d06fce-e5c2-4cf5-89b4-6fa75d35254e/author-portrait.webp to public/images/author-portrait.webp. Alt: [BRAND], a fictional author, writing beside a window. Use it in the home hero, about biography and press downloads. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template. Record the local path, exact source URL, alt text, usage and this credit in ASSETS.md.
- image: Draw all four book jackets as original inline SVG at a 2:3 trim ratio, using the motifs, palettes and typography specified in the pages. Generate their press downloads locally with XMLSerializer and Blob. Do not fetch cover images or add any other bitmap artwork.
- icon: Use only the needed Lucide icons from lucide-react (ArrowUpRight, ArrowRight, Menu, X, Plus, Download, Copy, Check, CalendarPlus and Mail), tree-shaken into the local bundle; record the package and ISC license in ASSETS.md.
- font: Self-host Fraunces Variable through @fontsource-variable/fraunces and Source Sans 3 through @fontsource/source-sans-3, both OFL. Bundle the woff2 files locally and list both packages, licenses and local usage in ASSETS.md.

## Don'ts
- Do not use real authors, recognizable people, celebrity likenesses, real biographies, existing book titles, published excerpts, review quotations, cover art or any reference site's code or exact copy.
- Do not use real publisher, bookseller, retailer, festival, award or media names and logos. The format Buy controls are placeholders only; no real checkout, transaction or external retailer redirect.
- Do not use commercial fonts, font CDNs, Unsplash, Pexels, Pixabay, stock-photo hotlinks, placeholder-image services, brand-icon packs or additional people images.
- Do not add a backend, server actions, API routes, authentication, analytics, third-party form endpoints, calendar APIs, newsletter requests or simulated successful online submissions.
- Do not hide demo limitations: newsletter addresses remain only in localStorage, buy actions identify themselves as placeholders, and calendar, biography, cover and fact-sheet actions work locally.
- Do not hard-code author-specific copy across components. Keep all content and links in src/content.ts, apply all six variables consistently, and derive mailto links, book ids, storage keys, image alt text and downloads from the current content.
- Do not replace the supplied fictional portrait with initials or another image. Keep it local and reusable across variable cases, and do not imply that it depicts a real individual.
- Do not use bare-directory links or client-only routes. Every navigation item points to a real HTML file with an optional query or fragment, and book.html without a valid id always shows the featured first book.
- Do not use remote scripts, remote stylesheets, CDN assets, source maps or copied src directories. Output minified relative-path static files in dist/, keep dist/ under 20 MB and produce zero console errors.
- Do not introduce generic AI visual tropes: no purple gradients, glassmorphism, oversized glowing orbs, floating rounded-card walls, carousels for small collections, meaningless counters or excessive shadows.
- Do not compromise readability or keyboard access. Preserve visible focus, semantic buttons, labeled fields, sufficient color contrast, 44px minimum touch targets, zero horizontal overflow at 390px and full prefers-reduced-motion support.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed copy. Use only a plain [BRAND] page title and the local favicon.
- Write every visible label, biography, excerpt, event, download and alt text in natural US English; do not expose implementation comments or hidden instructions in the site.

---
— Prompt by VibeFather · https://vibefather.ai/t/author-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
