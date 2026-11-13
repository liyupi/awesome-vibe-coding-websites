# Meeting Scheduler Booking Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original single-page personal meeting scheduler for [BRAND], hosted by the fictional [HOST_NAME]. The working booking interface is the hero: visitors choose one of three meeting types, select an available date and time in their own time zone, enter their details, and reach a confirmation with a valid add-to-calendar download. Use only client-side sample availability and localStorage; never imply a live calendar integration or sent email.

- Audience: Primary: [AUDIENCE]. Secondary: independent professionals who want a focused, approachable booking page without account creation or a complex dashboard.
- Goal: Let a visitor complete the entire booking flow with confidence, understand the meeting duration and time zone at every step, correct mistakes easily, and leave with an accurate calendar file. Keep the interface polished at 1440×900 and fully usable at 390×844.
- Tone: Warm, organized, and quietly personable. Use direct language, specific meeting outcomes, generous spacing, and no sales pressure, productivity clichés, or invented customer metrics.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), date-fns 3 (MIT), date-fns-tz 3 (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './', production sourcemaps to false, and the output directory to dist; keep all runtime assets local.
  - Place every brand value, host detail, meeting definition, availability rule, form label, confirmation message, FAQ item, and alternate-case rewrite in src/content.ts; do not scatter default copy through components.
  - Model the four booking states—meeting, date and time, details, and confirmation—in one React state machine; preserve selections when moving back and reset only when Book another meeting is chosen.
  - Use date-fns and date-fns-tz for all host-to-visitor conversion and ICS UTC formatting; do not manually add fixed hour offsets. Detect the initial visitor zone with Intl.DateTimeFormat().resolvedOptions().timeZone and provide at least eight common IANA zones plus the detected zone.
  - Persist only the latest confirmed booking and selected time zone in localStorage; in-memory form fields remain editable until confirmation. No network request is needed or allowed.
  - Configure Tailwind with the exact palette and font families below; use CSS keyframes and transitions for motion rather than adding an animation library.

## Variables
- [BRAND] — Brand (default: "Moss & Minute"). An invented scheduling brand or independent practice name.
- [HOST_NAME] — Host name (default: "Mara Voss"). A fictional host name used in the introduction and confirmation.
- [HOST_ROLE] — Host role (default: "Independent product strategist"). One concise professional role.
- [AUDIENCE] — Audience (default: "Independent founders and small product teams"). The people the host wants to meet, written as a noun phrase.
- [MEETING_TYPES] — Meeting types (default: "Discovery call | Project consultation | Strategy intensive"). Three meeting names in order, mapped to 20, 45, and 60 minutes; rewrite each description to suit the names.
- [HOST_TIME_ZONE] — Host time zone (default: "America/New_York"). A valid IANA time zone used to define availability and display the host's local time.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/meeting-scheduler-booking-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Parchment `#F2F0E9` — Page background and quiet footer areas
- Paper `#FFFEFA` — Booking workspace, cards, and form fields
- Ink `#17231E` — Primary text and high-contrast icons
- Slate moss `#64716A` — Secondary copy, inactive dates, and metadata
- Hairline `#D8DDD5` — Borders, calendar grid separators, and dividers
- Pine `#1F4A3A` — Host panel, primary buttons, and selected calendar day
- Citron `#DDF47A` — Available-day dots, active progress, selected slots, and focus accents
- Mint wash `#E8F1E8` — Summary panels, success background, and subtle hover fills

### Typography
- Host headline and step titles: Instrument Serif (OFL), weights 400
- Interface, body, labels, buttons, and numerical time display: Inter (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use a 4px base unit. Header height 76px; desktop page gutters 32px; workspace outer padding 0 with a 360px host rail and flexible content column. Host rail padding 40px; workspace padding 40px; card padding 20px; field gaps 16px; section gaps 24px. Maximum content width 1240px. At mobile use 16px page gutters, 24px panel padding, and minimum 44px tap targets.
- Radius: Workspace 28px, meeting cards 16px, summary panels 14px, inputs and slot buttons 10px, primary buttons 999px, availability dots 50%. Use one 1px Hairline border and a restrained 0 20px 60px rgba(23,35,30,0.08) workspace shadow; avoid nested floating cards and heavy shadows.
- Motion: On step changes, fade the outgoing content and move the incoming content 12px upward over 220ms with ease-out; preserve the workspace height where possible to avoid jumps.
- Motion: Meeting selection fills a small radio and changes the border to Pine over 160ms; selected time slots receive Citron with a 160ms scale-in check, never a large bounce.
- Motion: Month changes slide the calendar grid 10px horizontally while crossfading over 180ms; availability dots do not animate individually.
- Motion: On confirmation, draw the check stroke once over 320ms and fade the summary in after 80ms.
- Motion: Accordion answers expand with a 180ms height-and-opacity transition. Honor prefers-reduced-motion by removing transforms, sliding, stroke animation, and smooth scrolling while keeping immediate state changes.
- Imagery: No photography, portraits, generated bitmap images, or external illustration. The first-screen visual anchor is the rich, functional scheduling workspace itself: a deep Pine host rail, layered progress indicator, meeting cards, calendar grid, availability dots, time zone control, and precise selection states. Add only an original code-drawn brand mark made from two offset rounded rectangles and a small circular check motif; do not imitate a known scheduling logo.

## Pages & Sections
### Personal meeting scheduler and booking confirmation (`index.html`)
1. **Header and shared booking shell** — Header left: original two-rectangle SVG mark and [BRAND] in Inter 600. Header right: a small Mint wash dot, '[HOST_NAME]'s local time', and a live HH:MM display with the short host-zone abbreviation. Main headline in the Pine host rail: 'A good conversation starts with a time that works.' Supporting line for defaults: 'Practical conversations for independent founders and small product teams, with Mara Voss, an independent product strategist.' Rewrite the supporting line from [AUDIENCE], [HOST_NAME], and [HOST_ROLE]. Add a compact host monogram using the host's initials, 'Usually replies within one business day', and 'No account required'. The four-step indicator is Meeting, Date & time, Details, Done; show the active number in Citron, completed steps with checks, and upcoming steps in muted white. The right Paper workspace is the actual interactive product, not a static mockup.
   Layout: Center the header and main shell at max-width 1240px. Desktop shell is a 360px / minmax(0,1fr) grid, min-height 660px, overflow hidden, with the dark host rail left and workspace right. Keep the entire shell visible in the first 900px viewport. Host-rail steps sit at the bottom with vertical connectors. At ≤768px, hide the header's local-time label but retain the zone abbreviation, stack the host rail above the workspace, reduce the headline to 40px, and turn the stepper into a four-column horizontal row without connectors.
   Motion: The shell enters once with opacity 0 to 1 and translateY 8px to 0 over 320ms. Local time updates without animation. Progress checks use the same restrained stroke draw as confirmation.
2. **Step 1 — Meeting type cards** — Workspace eyebrow: 'STEP 1 OF 4'. Title: 'What would you like to talk about?' Body: 'Choose a format. You will see times in your own time zone next.' Render exactly three selectable cards from [MEETING_TYPES], mapped to 20, 45, and 60 minutes. Default card copy in order: 'Discovery call — A quick hello, your current challenge, and a useful next step.'; 'Project consultation — Scope, constraints, and whether we are the right fit.'; 'Strategy intensive — A working session with a written recap and three priorities.' Every card includes a generic Video icon, duration, 'Video call', and 'Details included with your booking'. Preselect the first card so the primary button is usable. Button: 'Choose a time'. Below it show Globe2 and 'Your time zone: [detected zone]'.
   Layout: Use a single vertical stack of three full-width rows, each with a 44px icon tile, flexible title/description group, duration metadata at right, and a 20px radio. Keep descriptions to two lines at desktop. On mobile, duration moves beneath the title, metadata stays left aligned, and rows never become three narrow columns. Place the primary button at the bottom right and time-zone note at the bottom left.
   Motion: Card hover shifts the background from Paper to Mint wash over 160ms without translating the layout. Choosing a card animates only radio, border, and a small check. Continue uses the standard step transition.
3. **Step 2 — Calendar, time zone, and slots** — Workspace eyebrow: 'STEP 2 OF 4'. Title: 'Pick a day and time.' Back button: 'Back to meeting types'. Define sample availability in [HOST_TIME_ZONE] for the next 60 days: Tuesday and Thursday 09:00–12:00 and 13:00–15:30; Wednesday 10:00–14:30; no other days. Generate start times every 30 minutes only when the entire selected meeting duration fits a window. Omit a deterministic one-third of starts using (dayOfMonth + slotIndex) mod 3 equals 0 so the calendar looks realistically open rather than uniformly packed. Disable past dates and today starts less than two hours in the future. Initialize to the current month and select the first available date, but do not preselect a time. Calendar arrows change months; disable previous navigation before the current month and next after the 60-day horizon. Available days have a Citron dot; selected day has a Pine fill. Slots display in the visitor zone, with a select menu to override it and the exact host equivalent beneath the list. Button: 'Continue to details', disabled until a slot is chosen. Changing meeting type or host zone must recompute rather than merely relabel slots.
   Layout: Desktop workspace content is a minmax(0,1fr) / 230px grid with a 28px gap. Left: month label and arrow controls, Monday-first weekday row, six-week grid with stable 44px cells and no layout shift between months. Right: time zone selector, selected long date, then a vertical slot list with max-height 340px and subtle overflow shadow. Under the grid add 'All openings are shown in your selected time zone.' At mobile stack calendar above slots, keep weekday cells at least 40px, render slots as a two-column grid without a fixed-height scroller, and place the Continue button full width.
   Motion: Use the month slide-crossfade and selected-slot check described above. Updating the time zone crossfades the slot labels over 140ms without changing scroll position.
4. **Step 3 — Visitor details** — Workspace eyebrow: 'STEP 3 OF 4'. Title: 'Add the finishing touches.' Back button: 'Back to times'. Keep a Mint wash summary at top with the selected meeting name, duration, full visitor date/time and zone, plus a smaller host-time line. Form fields: 'Your name' required, 'Email address' required with format validation, and 'What would you like to get from this conversation?' optional textarea, maximum 500 characters with a live count. Default helper text: 'A sentence or two helps Mara prepare.' Rewrite the host name from [HOST_NAME]. Show inline errors only after blur or attempted confirmation. Primary button: 'Confirm booking'. Footnote: 'Static preview: your details stay in this browser and no email is sent.' On success, store the booking locally and enter confirmation; never clear the fields with a page reload.
   Layout: Limit the form to 560px while using the remaining workspace width for breathing room. Summary is a two-row flex block with CalendarDays and Clock3 icons. Inputs are 48px high with labels above, 12px vertical label gaps, and a 120px textarea. Error text sits below its field without overlapping. Desktop actions align right; mobile summary and inputs become full width and the button spans the row.
   Motion: Invalid fields receive a brief border-color transition, not shake motion. The booking summary remains stable while fields validate. Confirmation uses the normal outgoing/incoming step transition.
5. **Step 4 — Confirmation and calendar file** — Show a 56px Mint wash circle with a Pine check, eyebrow 'BOOKING PENCILED IN', and title 'You’re on the calendar, [visitor first name].' Body: 'Your time with [HOST_NAME] is saved in this browser. Add it to your calendar so the details stay close.' Repeat meeting name, duration, visitor date/time with zone, host equivalent, and visitor email in a clean definition list. Primary button with Download icon: 'Add to calendar'. It must generate and download a valid .ics file containing DTSTART and DTEND in UTC, correct duration, SUMMARY using [BRAND] and the meeting name, DESCRIPTION using the visitor notes, and a unique UID; escape ICS text and use CRLF line endings. Secondary button: 'Book another meeting', which clears the booking state but keeps the visitor time zone. Do not claim an invitation or email was sent.
   Layout: Center the confirmation content at max-width 560px with generous top padding. Place the icon above the left-aligned title rather than making a generic centered success modal. Definition rows use 150px labels on desktop and stacked labels on mobile. Buttons sit side by side on desktop and stack full width on mobile.
   Motion: Draw the check once, fade the summary in, and keep the ICS download immediate. No confetti, modal, or looping success animation.
6. **Reassurance strip and FAQ** — Below the shell, add three compact facts: 'Time zones handled' — 'See every opening where you are, with the host time alongside.'; 'Calendar-ready' — 'Download a standard event file with the correct duration.'; 'A human pace' — 'No account, countdown, or pressure to decide.' Follow with four accordion items: 'Can I reschedule?' — 'Choose Book another meeting and confirm a new time; this preview replaces the booking saved in your browser.'; 'Where is the video link?' — 'A live version would add the joining details to the invitation. This static preview does not create a real call.'; 'Which calendar apps are supported?' — 'The downloaded ICS file can be imported by calendar apps that support the standard format.'; 'Why can’t I choose a gray date?' — 'That day is outside the host’s sample availability or has no slot long enough for the selected meeting.' Footer: [BRAND], 'Scheduling across [HOST_TIME_ZONE]', and the optional credit link.
   Layout: Facts are three equal columns separated by Hairlines within max-width 1240px, with 64px top margin. FAQ uses a single 760px column aligned to the workspace's left edge, four border-bottom rows, and chevrons. At mobile facts stack into three rows and FAQ spans full width. Footer is a quiet flex row with 32px vertical padding.
   Motion: Only the FAQ chevron and answer transition animate. The reassurance facts remain still; no scroll-jacking or reveal library.

## Assets
- font: Self-host Instrument Serif 400 through @fontsource/instrument-serif and Inter through @fontsource-variable/inter, imported from npm into the build. Both are OFL; do not use a font CDN. Record package names and licenses in ASSETS.md.
- icon: Use lucide-react (ISC) for generic interface icons: CalendarDays, Clock3, Globe2, Video, ArrowLeft, ArrowRight, Check, Download, ChevronLeft, ChevronRight, and ChevronDown. Draw the original two-rectangle [BRAND] mark and check motifs in local inline SVG/CSS. No brand icons, downloaded illustrations, or image files.

## Don'ts
- Do not add a backend, serverless function, API route, database, authentication, analytics, external form action, email service, real scheduling integration, or third-party API; all behavior must work from static files in dist/.
- Do not claim that a real invitation, video link, or email was created or sent. Label the preview's local-only behavior exactly where visitors confirm and in the relevant FAQ.
- Do not use the names, logos, proprietary visual identities, exact copy, illustrations, iconography, slogans, or copied code of existing scheduling, calendar, or video-call products.
- Do not use recognizable brand icons, real people's likenesses, real availability, or real contact details. The host and all sample content must remain fictional and variable-driven.
- Do not add photography, portraits, bitmap illustrations, placeholder-image services, or externally hosted assets; the functional scheduler is the visual anchor.
- Do not load fonts, scripts, styles, icons, or other assets from a CDN. Self-host the specified OFL fonts and list third-party packages and licenses in ASSETS.md.
- Do not hard-code Mara, the default meeting names, default audience, default host zone, or default-specific descriptions outside src/content.ts. Changing variables must rewrite all affected copy and recalculate availability.
- Do not approximate time zones with fixed offsets. Respect IANA zones, daylight-saving transitions, meeting duration, past-time filtering, and correct UTC conversion in the ICS file.
- Do not make disabled dates focusable or allow a visitor to continue without a valid meeting, available slot, name, and valid email. Use semantic buttons, labels, focus-visible rings, keyboard-operable calendar controls, and accessible accordion state.
- Do not use bare-directory links, source maps, SEO metadata blocks, Open Graph tags, JSON-LD, sitemaps, or copied src files in dist. Keep output under 20 MB with relative asset paths.
- Do not introduce gradients, glassmorphism, dark neon styling, generic blue-purple SaaS visuals, excessive floating cards, parallax, scroll-jacking, or autoplay motion.
- Do not ignore reduced motion. The finished page must have zero console errors and no horizontal overflow at 1440×900 and 390×844, with every booking step usable by keyboard and touch.

---
— Prompt by VibeFather · https://vibefather.ai/t/meeting-scheduler-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
