# Birthday Party Invitation Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original single-page birthday invitation for [BRAND], with a large code-drawn party-table diorama, animated confetti, a date-driven countdown, practical event details, gift ideas, an illustrated map placeholder, and a local-only RSVP.

- Audience: Friends and family invited to [HONOREE]'s celebration, using either a desktop or a phone; the template is for anyone creating a personal birthday invitation.
- Goal: Make the occasion feel immediate and joyful, keep every practical detail easy to scan, and let guests record an attendance response and party size without any network request.
- Tone: Warm, playful, inclusive, and lightly cheeky, like a beautifully printed invitation from a thoughtful friend; keep directions direct and never pressure guests to bring gifts.

## Stack
- Framework: Vite 6 + TypeScript
- Styling: Vanilla CSS
- Libraries: @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite's vanilla TypeScript template with index.html, src/main.ts, src/content.ts, and src/styles.css; keep the implementation framework-free.
  - Set the package.json build script to tsc && vite build, set base: './' in vite.config.ts, and set build.sourcemap to false.
  - Import @fontsource-variable/fraunces and @fontsource-variable/dm-sans in src/main.ts so both fonts are bundled locally; use only the weights listed in Design.
  - Put every event value, headline, paragraph, label, schedule item, gift suggestion, map label, and link in src/content.ts, keyed by section.
  - Implement confetti on one canvas and all icons, the map, the favicon, and the party diorama as original inline SVG or CSS; add no runtime packages.
  - Use semantic HTML and small TypeScript modules for the countdown, confetti, scroll reveals, clipboard action, calendar download, and RSVP state.

## Variables
- [BRAND] — Invitation name (default: "Maya's Garden Disco"). A short, invented name for the celebration.
- [HONOREE] — Birthday honoree (default: "Maya"). Use a fictional first name for the default event.
- [PARTY_DATE] — Party start date and time (default: "2027-06-20T16:00:00-07:00"). ISO 8601 date-time with a numeric timezone offset; derive the display date, countdown, schedule, and reply deadline from it.
- [VENUE] — Venue and address (default: "The Sunroom · 18 Willow Lane, Portland, Oregon"). Use an invented venue and street address, never a real person's home address.
- [PARTY_THEME] — Party theme (default: "Garden disco"). A concise activity or visual theme that can guide the rewritten copy.
- [GIFT_NOTE] — Gift preference (default: "A favorite book, a small plant, or a handwritten note"). Keep gifts optional and adapt the three suggestion cards to this note.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/birthday-party-invitation-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Party Paper `#FFF7E8` — Main page background and light text on dark plum surfaces
- Plum Ink `#2E2140` — Body copy, outlines, primary buttons, and countdown background
- Confetti Coral `#FF6B6B` — Cake details, selected ticket, pin, and decorative accents; never small body text on paper
- Marigold `#FFC83D` — Countdown digits, secondary buttons, stars, and highlight shapes
- Lilac Wrapper `#B9A7FF` — Gift panels, map blocks, balloons, and alternating decorative surfaces
- Mint Scoop `#8BD9B6` — Success states, foliage, schedule markers, and one detail ticket

### Typography
- Display and countdown numerals: Fraunces Variable (OFL), weights 700/800/900
- Body, labels, buttons, and form controls: DM Sans Variable (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base unit, a 1200px maximum content width, 32px desktop page gutters, and 20px mobile gutters. Section padding is 104px desktop and 64px mobile. Keep text measures between 48 and 62 characters and card gaps at 24px.
- Radius: Use 28px for major cards, 16px for inputs and small panels, and fully rounded pills for buttons and labels. Add 2px plum outlines, ticket perforations, and a few hand-cut SVG silhouettes rather than making every surface a rounded rectangle.
- Motion: Run one lightweight confetti canvas only inside the hero: about 70 rectangles, circles, and short ribbons on desktop and 36 on mobile, with an initial cake-top burst followed by slow downward drift; pause when the hero is offscreen or the tab is hidden.
- Motion: Reveal the hero copy with a 600ms upward fade in two short stages, then float the SVG balloons by no more than 8px over alternating 4.8s and 5.6s cycles.
- Motion: Use IntersectionObserver for one-time section reveals of 16px vertical travel and 450ms opacity; content remains visible when JavaScript is unavailable.
- Motion: Give countdown digits a brief 120ms vertical tick only when their value changes, and give buttons, gift cards, and the map pin short 160ms hover or focus responses.
- Motion: Emit one small 24-piece confetti burst after a valid attending RSVP; do not autoplay sound, flash, scroll-jack, or attach motion to pointer movement.
- Motion: Under prefers-reduced-motion, disable all drifting, bobbing, reveals, digit ticks, and bursts; render a static confetti arrangement and keep countdown text updates functional.
- Imagery: Use no photographs or downloaded illustrations. The first screen's visual anchor is a large original inline SVG and CSS party-table diorama: an oval table viewed at a slight angle, a three-tier coral and cream cake, five lit candles, three wrapped gifts, six balloons, paper streamers, and small abstract flowers. Layer simple geometric shapes, subtle paper-grain patterns, and plum outlines for depth. No faces, people, characters, logos, or recognizable branded objects. Repeat the same visual language in the gift icons and not-to-scale map.

## Pages & Sections
### Birthday invitation (`index.html`)
1. **Invitation header** — Show a small original cake-slice mark and [BRAND] as the wordmark. Include anchor links labeled 'The plan', 'Gifts', and 'Find us', plus a plum pill button labeled 'RSVP' that moves to the form. Use a plain document title containing [BRAND] and an original cake-slice SVG favicon.
   Layout: Place an 80px-high non-sticky header inside the 1200px container with the wordmark left and navigation right. At 390px, use two rows: wordmark and RSVP first, then the three text links in an evenly spaced second row; do not hide navigation behind a hamburger.
   Motion: The RSVP button lifts 2px on hover or focus; no entrance animation.
2. **Confetti invitation hero** — Use the eyebrow '[PARTY_THEME] · YOU’RE INVITED'. Default headline: 'It’s Maya’s birthday. Let’s make it loud.' Replace Maya with [HONOREE] and rewrite the line naturally when the values change. Default support copy: 'An afternoon of garden games, cake, and dancing as the sun goes down. Bring your brightest shirt and your best moves.' Primary CTA: 'RSVP by June 13', derived as seven days before PARTY_DATE; secondary CTA: 'See the party plan'. Add the compact line 'Sunday, June 20 · 4–9 PM · The Sunroom', all derived from PARTY_DATE and VENUE. Fill the other half with the party-table diorama described in Imagery.
   Layout: Use a 12-column grid with copy spanning 5 columns and the diorama spanning 7. The hero is at least calc(100svh - 80px), with 64px top and 80px bottom padding. Set the headline in Fraunces 900 at clamp(56px, 6.2vw, 92px) with 0.94 line-height. Put both CTAs in one row and the event line below. On mobile, stack copy above a 340px-high diorama, use a 48px headline, and stack the CTAs full width. Keep the diorama large and visible within the first mobile screen rather than replacing it with a flat color block.
   Motion: Layer the confetti canvas above the background but below readable text and controls. Animate the headline, support copy, and CTAs once; balloons bob gently while the cake remains stable.
3. **Live countdown ribbon** — Label the strip 'COUNTING DOWN TO [BRAND]' and show Days, Hours, Minutes, and Seconds calculated from PARTY_DATE in the supplied timezone offset. Below the units, show the full localized start date and time. During the five-hour party window replace the numbers with 'The party is happening now'; afterward show 'What a night — thanks for celebrating.' Never show negative values.
   Layout: Use a full-bleed plum strip with a 1200px inner grid: label and date on the left, four equal countdown cells on the right. Use marigold Fraunces 800 numerals with tabular figures and small uppercase paper-colored labels. On mobile, center the heading above a four-column grid with narrow 8px gaps and digits no larger than 36px.
   Motion: Update once per second and apply only the short digit tick; reduced-motion mode updates text without transforms.
4. **Party detail tickets** — Heading: 'The need-to-knows'. Use three tickets. Date: 'Sunday, June 20', '4:00–9:00 PM', and 'Reply by June 13'. Place: 'The Sunroom', '18 Willow Lane, Portland, Oregon', and 'Look for the coral door'. Dress: 'Garden glam', 'Bright colors welcome', and 'Wear shoes made for dancing'. Derive all dates, times, and venue text from the variables; rewrite the theme-specific dress line for a new PARTY_THEME.
   Layout: Place the heading and a short wavy SVG underline above three equal cards. Give each card a punched-ticket edge with two small circular cutouts, a 2px plum outline, and a distinct coral, mint, or lilac surface. Rotate the outer cards by at most 1 degree on desktop only. Stack the cards at 16px gaps on mobile and keep all values left aligned.
   Motion: Reveal as a group; on hover or focus, each ticket straightens and rises 3px without shifting surrounding content.
5. **Party schedule** — Eyebrow: 'THE PARTY PLAN'. Heading: 'A little structure. Plenty of room to dance.' Use four default stops: '4:00 PM — Lemonade and hellos. Find your name tag and grab something cold.'; '5:00 PM — Garden games. Teams are optional; ridiculous victory dances are not.'; '6:30 PM — Cake and a sunset toast. Gather around the long table.'; '7:30 PM — Disco under the string lights. The playlist is open for requests.' Derive these times as offsets from PARTY_DATE and rewrite activities for PARTY_THEME.
   Layout: Use an asymmetric two-column layout: a sticky-on-desktop heading in 4 columns and a vertical timeline in 8 columns. Each stop has a marigold circular time marker, a bold time, and one sentence, separated by a 2px dotted plum line. Remove sticky behavior and stack the heading above the timeline on mobile.
   Motion: Reveal timeline stops in order with a 70ms stagger; no scroll-driven pinning or scrubbing.
6. **Gift ideas** — Heading: 'Bring a story, not a shopping bag.' Intro: 'No gifts are expected. If you would like to bring something, Maya’s short list is: [GIFT_NOTE].' Replace Maya with HONOREE. Default cards: 'A well-loved paperback — Add a note on the inside cover.'; 'A little green thing — A herb, succulent, or cutting for the kitchen window.'; 'A note for future Maya — Share a memory she can reread next year.' Adapt all three cards when GIFT_NOTE or HONOREE changes. Add no stores, prices, affiliate links, or purchase buttons.
   Layout: Put the heading and intro in a narrow left rail, with three stacked horizontal gift notes to the right. Each note has an original 72px SVG gift, book, plant, or envelope illustration, a bold title, and one sentence; alternate paper and lilac backgrounds. On mobile, keep the notes full width with the illustration above the text.
   Motion: A gift-note icon tilts up to 4 degrees on hover or keyboard focus; reveal the notes together.
7. **Illustrated venue map** — Heading: 'Meet at the coral door.' Show the full VENUE as selectable text. Default arrival notes: 'Street parking is available along Willow Lane. A bike rack sits by the side gate; come straight through the coral door when you arrive.' Add a button labeled 'Copy address' with a two-second 'Copied' success state and a selectable-text fallback if clipboard access fails. Label the drawing 'ILLUSTRATED MAP · NOT TO SCALE'. It is a location placeholder, not a live map or a claim of geographic accuracy.
   Layout: Use a two-column card with the map taking 7 columns and the address and arrival notes taking 5. Draw three curved plum roads, mint park blocks, lilac buildings, tiny abstract trees, and one coral pin labeled with the venue name using inline SVG. Rename street labels when VENUE changes. Stack the map above the text on mobile and keep the address button at least 48px tall.
   Motion: The pin makes one gentle 6px hop when the section enters; clipboard feedback fades without moving the layout.
8. **Browser-only RSVP** — Heading: 'Save your spot on the dance floor.' Supporting copy: 'Tell us who’s coming and whether anyone is joining you.' Form fields: attendance radio choices 'Yes, I’m in' and 'Can’t make it'; required 'Your name'; required 'Email address'; a guest-count stepper labeled 'Party size, including you' with minus and plus buttons and a range of 1–4; optional 'Dietary notes or a song request'. Show 'Demo RSVP: saved only in this browser. Nothing is sent.' beside the submit button 'Save my RSVP'. Validate name and email inline, disable the stepper and set party size to 0 for non-attendance, and never make a network request. On attending submission, show 'Your RSVP is saved, [name]!' with the party-size summary, 'Update RSVP', and 'Add to calendar'. On non-attendance, show 'Thanks for letting us know. You’ll be missed.' Persist the response in localStorage, preload it on return, and generate the calendar file locally from PARTY_DATE with a five-hour duration.
   Layout: Use a large plum section with a paper-colored RSVP card offset over a coral abstract shape. Split the card into a 5-column invitation message and 7-column form on desktop. Use 16px-radius inputs, visible labels, strong focus rings, 48px minimum controls, and inline errors tied with aria-describedby. The stepper is one horizontal control with the number centered. Replace the form in place with the confirmation panel and a mint success marker. Stack everything on mobile without horizontal overflow.
   Motion: Highlight the selected attendance pill, animate the guest number with a 120ms tick, and fire the small success burst only for an attending response; reveal all confirmation text immediately in reduced-motion mode.
9. **Invitation footer** — Repeat [BRAND], then show 'Come as you are. Leave with cake.' and 'Questions? Ask the friend who sent you this invitation.' Include a text link labeled 'Back to the top' and the optional CREDIT footer link; do not invent contact details or social accounts.
   Layout: Finish with a scalloped SVG top edge, a compact three-column row for event name, closing line, and links, and 40px vertical padding. Stack and left align the same content on mobile.
   Motion: No footer animation.

## Assets
- image: No raster images or downloaded artwork. Create the hero diorama, confetti, gift illustrations, scalloped divider, and not-to-scale map as original inline SVG, CSS, and canvas geometry using the listed palette; no image manifest or remote image URL is needed.
- icon: Draw the simple cake-slice favicon, calendar, pin, gift, arrow, plus, and minus icons as original inline SVG strokes and shapes. Do not import a branded icon set or copy another invitation's icons.
- font: Self-host Fraunces Variable through @fontsource-variable/fraunces, importing only the required weights. In ASSETS.md record the bundled font path, source https://github.com/undercasetype/Fraunces, Undercase Type as author, and OFL-1.1.
- font: Self-host DM Sans Variable through @fontsource-variable/dm-sans, importing only the required weights. In ASSETS.md record the bundled font path, source https://github.com/googlefonts/dm-fonts, DM Sans Project Authors as author, and OFL-1.1.

## Don'ts
- Do not add a backend, server code, API routes, database, authentication, external form endpoint, third-party API, analytics, or live map embed. RSVP persistence and calendar generation must remain entirely in the browser, and the UI must never claim that a response was transmitted.
- Do not hotlink or load remote scripts, styles, fonts, icons, images, maps, or placeholder-image services. Bundle all assets locally and use relative paths with Vite base './'.
- Do not copy another invitation's code, copy, illustrations, icons, layout details, or slogans. Do not use logos, licensed characters, mascots, recognizable people's likenesses, real personal addresses, or real contact details.
- Do not use commercial fonts, restricted component-library source, or any dependency outside the stated permissive licenses; use only the two listed self-hosted font families.
- Do not replace the hero with typography on a flat background or a generic stock birthday photo; preserve the large original party-table diorama and layered confetti.
- Do not hard-code Maya, the default venue, or the default date in runtime logic. Read content from src/content.ts and derive the visible date, countdown, five-hour schedule, and seven-day reply deadline from PARTY_DATE.
- Do not add pages, bare-directory links, dead buttons, shopping links, or external direction services. Keep the single index.html and working same-page anchors.
- Do not add meta descriptions, Open Graph tags, JSON-LD, sitemaps, keyword-stuffed text, or other SEO work; use only the plain title and favicon requested.
- Do not emit source maps, copy src into dist, exceed 20MB in dist, or introduce a framework or animation library.
- Do not use scroll-jacking, autoplay audio, flashing effects, or continuous motion under prefers-reduced-motion. Keep all controls keyboard and touch accessible with visible focus states.
- Do not allow clipped text, overlapping confetti controls, or horizontal overflow at 1440×900 or 390×844; the finished static build must produce zero console errors.

---
— Prompt by VibeFather · https://vibefather.ai/t/birthday-party-invitation-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
