# Tattoo Studio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a complete static multi-page website for [BRAND], an invented tattoo studio in [CITY] specializing in [STUDIO_FOCUS] for [AUDIENCE]. Use the default copy below verbatim with the default values. When variables change, rewrite all artist bios, style tags, flash titles, prices, testimonials, address details, and calls to action to fit the new values while preserving the design. Keep every string, artist record, flash design record, price, policy, and FAQ in src/content.ts.

- Audience: Adults comparing tattoo artists, first-time clients who need clear guidance, and returning collectors looking for a particular style or available flash design.
- Goal: Help visitors choose an artist or flash design, understand session pricing and policies, prepare a useful consultation request, and find trustworthy aftercare instructions.
- Tone: Quietly confident, craft-led, direct, inclusive, and reassuring. Avoid biker clichés, aggressive language, mystical pseudo-spirituality, and exaggerated claims.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: Motion 12 for React (MIT), Lucide React (ISC)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create real index.html, artists.html, artist.html, flash.html, consult.html, and aftercare.html entry files, each mounting its page-specific React entry; configure all six as Rollup inputs.
  - Set vite.config.ts base to './' and build.sourcemap to false; use relative asset URLs throughout and keep the production output below 20 MB.
  - Configure Tailwind with the exact color tokens and font families below; put global rules, selection color, focus states, and keyframes in src/index.css.
  - Centralize all editable copy and sample data in src/content.ts; share Header, Footer, Button, SectionHeading, StyleTag, FlashCard, and Reveal components across pages.
  - Read artist.html and flash query parameters with URLSearchParams; no router or server is needed, and an absent or unknown artist id must render the first artist.
  - Self-host Cormorant Garamond and Manrope with the specified Fontsource packages and weight-specific imports; do not use a font CDN.
  - Use Motion for React reveals, filter layout changes, modal transitions, and mobile navigation; call useReducedMotion and provide nonanimated equivalents.
  - Use lucide-react for interface icons only; create a simple original favicon from two intersecting line segments, not a copied studio mark.

## Variables
- [BRAND] — Studio name (default: "Duskhaven Tattoo"). An invented two- or three-word studio name; use it in the header, footer, page titles, and consultation confirmation.
- [CITY] — Studio city (default: "Portland, Oregon"). City and state or region; adapt the invented street address and local references when changed.
- [STUDIO_FOCUS] — Studio specialties (default: "ornamental blackwork, fine-line botanicals, and small illustrative pieces"). A concise list of tattoo styles; rewrite artist tags, flash categories, and portfolio descriptions to match.
- [AUDIENCE] — Ideal clients (default: "adults seeking thoughtful custom tattoos and collaborative artist-led design"). The client group the copy should welcome and guide.
- [BOOKING_DEPOSIT] — Booking deposit (default: "$150"). Currency and amount; reuse consistently in consultation, policy, and FAQ copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/tattoo-studio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ink `#0C0B0B` — Primary page background and dark text on light panels
- Soot `#161313` — Cards, navigation background, and alternating sections
- Bone `#E9E0D2` — Primary headings, body text on dark, and reversed panels
- Ash `#A79C90` — Secondary copy, metadata, and inactive controls
- Oxblood `#963B40` — Primary buttons, active filters, focus rings, and small accents
- Umber Line `#3A302D` — Borders, dividers, input outlines, and SVG grid details
- Parchment `#D8CBB8` — Occasional light editorial section background with Ink text

### Typography
- Display and editorial headings: Cormorant Garamond (OFL), weights 500/600
- Body, navigation, forms, and labels: Manrope (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8 px base scale. Content max-width is 1440 px with 64 px desktop and 20 px mobile page gutters. Use a 12-column grid with 24 px gutters. Section padding is 112–136 px desktop and 64–80 px mobile. Header height is 80 px. Display headlines use clamp(64px, 8vw, 124px) at 0.88 line-height; page titles use clamp(52px, 6vw, 88px); body copy is 16–18 px at 1.65 line-height.
- Radius: Mostly crisp editorial edges: 2 px on cards, images, inputs, and buttons; 999 px only for style tags and small status pills. No soft floating cards or large bubbly corners.
- Motion: Reveal the homepage hero photograph with a bottom-to-top clip-path over 1000 ms, then fade the headline lines upward by 24 px with a 90 ms stagger.
- Motion: Reveal section headings and content rows once at 15% viewport entry using 28 px upward travel, 650 ms duration, and 80 ms child stagger; never replay on upward scrolling.
- Motion: On artist and flash cards, scale imagery to 1.035 over 450 ms, shift the arrow icon 4 px right, and draw the title underline from left to right.
- Motion: Animate flash filter changes with a 220 ms opacity and 12 px scale transition; preserve grid stability and announce result counts to screen readers.
- Motion: Use 180–240 ms fade-and-slide transitions for the mobile menu, flash dialog, accordion answers, and consultation steps; no scroll-jacking or custom cursor.
- Motion: When prefers-reduced-motion is enabled, remove parallax, clip reveals, smooth scrolling, layout animation, and large transforms; show all content immediately.
- Imagery: Use six coherent AI-generated documentary photographs: one wide studio interior for the homepage, three distinct fictional artist portraits, one workstation detail, and one aftercare scene. All use charcoal, warm bone, and oxblood tones, low-key tungsten practicals, soft side light, and subtle 35 mm film grain. Never generate words, logos, equipment brands, or recognizable real people. Flash artwork is separate original black-line SVG drawn in code from simple geometric paths on warm parchment grids: nine small motifs in three sheets, with consistent 2 px strokes, no fills except Ink, and no tracing or external tattoo images.

## Pages & Sections
### Home (`index.html`)
1. **Shared header and footer** — Header brand is [BRAND]. Desktop navigation is Artists (./artists.html), Flash (./flash.html), Aftercare (./aftercare.html), and a solid Oxblood Start a consultation button (./consult.html). The header begins transparent over the hero, becomes 92% Ink with a bottom Umber Line after 24 px scroll, and has a full-screen mobile menu. Footer copy: '214 Bellwether Avenue, [CITY]' with the street on one line and city variable substituted on the next; 'Tuesday–Saturday, 11:00–19:00'; 'Consultations by appointment · 18+ only'. Include the same file-name navigation, an accessible email link hello@duskhaventattoo.example for the default brand, and the optional [CREDIT] link. Rewrite the email domain and address when BRAND or CITY changes.
   Layout: Fixed 80 px header with a wide wordmark left, compact 13 px uppercase navigation right, and a 44 px minimum mobile menu target. Footer is a 12-column grid: brand and address span 5, hours span 3, navigation spans 2, and credit spans 2, all above a thin top rule.
   Motion: Background and border transition over 220 ms. Mobile links enter with a 40 ms stagger; reduced motion shows the menu immediately.
2. **Cinematic hero** — Eyebrow: '[CITY] · CUSTOM TATTOOING'. Headline exactly: 'A mark with a life of its own.' Supporting copy: 'Thoughtful tattoos shaped around your story, your placement, and the way you move.' Primary CTA: 'Start a consultation'; secondary CTA: 'Meet the artists'. Bottom metadata: 'Custom work', 'Flash available', '18+ only'. Use hero-studio.webp as the dominant first-screen visual, not a tight face image.
   Layout: Hero fills calc(100svh - 0px) with a minimum height of 720 px on desktop. The photograph is absolute and full-bleed with a left-to-right Ink gradient from 96% to 18% and a subtle bottom gradient. Content sits left on columns 1–7, vertically centered; CTAs sit below the copy with 12 px gap. Metadata forms a three-item row at the bottom left. On mobile use a 74 svh image-backed hero, 56 px headline, reduced overlay opacity, and stacked full-width CTAs.
   Motion: Photograph clip reveal and headline stagger as specified in Design. Add only 3% slow image scale on desktop scroll; disable on mobile and reduced motion.
3. **Studio introduction and facts** — Heading: 'The idea comes first. The ink follows.' Body: '[BRAND] is a private tattoo studio for [AUDIENCE]. We specialize in [STUDIO_FOCUS], with unhurried consultations and original designs drawn for the person wearing them.' Facts: '3 resident artists', '$180 studio minimum', '7–14 days typical design lead time'.
   Layout: Two-column editorial block on Bone text over Ink: heading spans columns 1–7 and body spans 8–12. The facts form a three-column ruled row below, with large Cormorant numerals and small uppercase labels.
   Motion: Heading and body reveal together; facts draw their top rules from left to right with a 120 ms stagger.
4. **Resident artist preview** — Section label: 'RESIDENT ARTISTS'. Heading: 'Find your hand.' Cards: Mara Voss — Ornamental, Blackwork, Dotwork; Theo Bennett — Fine line, Botanical, Illustrative; Inez Park — Abstract, Bold blackwork, Miniature. Each links to ./artist.html?id=mara, ./artist.html?id=theo, and ./artist.html?id=inez. Link below grid: 'Compare all artists'.
   Layout: Three equal portrait cards with 3:4 images, name in 36 px Cormorant, style tags below, and no enclosing heavy card background. Offset the middle card by 48 px on desktop while keeping the row aligned at its text baseline; remove the offset on mobile.
   Motion: Cards reveal in sequence and use the specified image zoom and underline hover.
5. **Flash library preview** — Label: 'READY TO WEAR'. Heading: 'Small designs. Original lines.' Body: 'A rotating set of one-off pieces, drawn in-house and tattooed once.' Show four examples: Moth Orbit, Split Thorn, Fern Study, and Orbit Signet, with style, approximate dimensions, and prices from the shared flash records. CTA: 'Browse all flash'.
   Layout: A four-column parchment-toned grid with original SVG motifs centered on subtle registration-cross backgrounds. Each tile is 4:5 with a bottom metadata row outside the art area. On mobile use a two-column grid with 12 px gaps.
   Motion: SVG paths draw in once using stroke-dashoffset over 700 ms when visible; skip path animation for reduced motion.
6. **Consultation process** — Heading: 'From first thought to final session.' Four steps: 01 Tell us the idea — 'Share placement, size, references, and the artist you have in mind.' 02 Shape the design — 'Your artist confirms scope, timing, and a quote before drawing.' 03 Reserve the session — 'A [BOOKING_DEPOSIT] deposit is credited to your final session.' 04 Heal with guidance — 'Leave with written aftercare and a direct route to follow-up questions.'
   Layout: Parchment background with Ink text. Heading occupies the left four columns; the four steps occupy the right eight as horizontal ruled rows, each with a small numeral, strong title, and concise body. Mobile collapses to one column.
   Motion: Rows reveal sequentially; no pinned scrolling.
7. **Studio visit and client note** — Use studio-detail.webp. Visit heading: 'A quiet room for focused work.' Copy: 'Private stations, unhurried appointments, and time to check placement before the session begins.' Address: '214 Bellwether Avenue, [CITY]'. Hours: 'Tuesday–Saturday, 11:00–19:00'. Quote: 'Mara turned a loose idea into something that felt like it had always belonged on my arm.' Attribution: 'Rowan K. · ornamental forearm piece', an invented client. CTA: 'Plan your consultation'.
   Layout: Full-width two-column composition: workstation photograph spans seven columns with 4:3 crop; visit copy and quote span five on Soot. Address and hours sit in a compact ruled definition list above the quote.
   Motion: Image wipes in from the right while text fades upward; no autoplay media.
8. **Care and policy strip** — Two linked panels: 'Healing, step by step' — 'Bandage timing, washing, moisturizing, and what to avoid.' linking ./aftercare.html; 'Deposits without surprises' — 'What your [BOOKING_DEPOSIT] reserves, rescheduling windows, and design revisions.' linking ./consult.html#deposit. Final banner copy: 'Ready when the idea feels right.' CTA: 'Tell us what you’re imagining'.
   Layout: Two equal bordered panels with large Cormorant headings and ArrowUpRight icons, followed by a full-width Oxblood banner with Ink or Bone text chosen for accessible contrast. Stack panels on mobile.
   Motion: Panel arrows move 4 px on hover; final banner reveals with a simple opacity transition.

### Artists (`artists.html`)
1. **Artist directory introduction** — Eyebrow: 'THREE ARTISTS · THREE APPROACHES'. Heading: 'Choose the work, then the hand.' Body: 'Every artist at [BRAND] works across a distinct set of styles. Filter by what you are looking for, or bring us the beginning of an idea.' Filters: All, Ornamental, Blackwork, Fine line, Botanical, Illustrative, Abstract, Miniature.
   Layout: Large title on the left eight columns and body on the right four. Filter chips sit below a full-width rule, horizontally scrollable on mobile with visible focus states.
   Motion: Title and filters reveal with 60 ms stagger.
2. **Filterable artist grid** — Mara Voss: 'Ornamental compositions that follow the body', specialties Ornamental, Blackwork, Dotwork, session minimum $220. Theo Bennett: 'Fine-line studies of plants and small natural forms', specialties Fine line, Botanical, Illustrative, session minimum $180. Inez Park: 'Compact abstractions with a bold, economical line', specialties Abstract, Bold blackwork, Miniature, session minimum $180. Use the matching generated portrait for each and link to the artist detail query URLs.
   Layout: Three-column grid of large 3:4 portrait cards with 32 px gaps. Beneath each image show name, one-line approach, style tags, session minimum, and 'View profile'. Filtering hides nonmatching cards without leaving blank columns; show a live result count. Mobile uses one column and 20 px image gutters.
   Motion: Animate filtering with 220 ms opacity and layout transitions; portraits use the shared hover treatment.
3. **Artist guidance CTA** — Heading: 'Not sure who fits?' Body: 'Choose “No preference” in the consultation form. We will route your idea to the artist whose work best matches the subject, placement, and scale.' CTA: 'Start with your idea'.
   Layout: Parchment strip with heading left, body and button right, separated by a vertical rule on desktop.
   Motion: Simple shared section reveal.

### Artist profile (`artist.html`)
1. **Query-driven profile hero** — Read id=mara, id=theo, or id=inez; with no id or an unknown id, show Mara Voss rather than an empty or not-found state. Default Mara copy: eyebrow 'RESIDENT ARTIST · ORNAMENTAL BLACKWORK'; name 'Mara Voss'; introduction 'I build rhythmic, ornamental pieces around the body’s natural lines, from quiet wrist bands to full shoulder compositions.' Facts: 'Session minimum $220', 'Custom and flash', 'Booking by consultation'. Theo and Inez use their shared records and corresponding portraits, approaches, and minimums.
   Layout: Two-column 7:5 split below the shared header. Portrait fills the left seven columns at 4:5 crop; right side has a small back link to ./artists.html, large Cormorant name, introduction, style tags, facts list, and 'Consult with Mara' button linking ./consult.html?artist=mara. Mobile stacks text after a 3:4 portrait.
   Motion: Portrait clip reveal and profile text stagger; switching query state never introduces a loading screen.
2. **Approach and working details** — Heading for Mara: 'Ornament with room to breathe.' Body: 'Mara works in measured lines and repeated forms, using negative space to keep detailed pieces readable. A consultation covers placement, symmetry, and how the composition will move with you.' Good-fit list: 'Forearm and shoulder compositions', 'Dotwork and geometric ornament', 'Cover-up assessments after an in-person consult'. Process note: 'One focused revision is included before the session; substantial changes may require a new quote.' Adapt this section for Theo or Inez from their content records.
   Layout: Soot section with a sticky small section label on the left three columns and a readable 65-character text column on the right seven. Good-fit items form three ruled rows below.
   Motion: Text rows reveal once; sticky behavior is disabled on mobile.
3. **Selected original flash** — Show three SVG pieces belonging to the selected artist. For Mara use Moth Orbit (5 × 7 in, $420), Split Thorn (3 × 6 in, $320), and Orbit Signet (2.5 × 2.5 in, $220). Each links to ./flash.html?design=<slug> and opens the corresponding design dialog on the flash page.
   Layout: Three equal 1:1 parchment art panels with centered original SVG, followed by title, size, and price in a compact metadata row. Keep line art bold enough to remain readable on mobile.
   Motion: Sequential stroke drawing on first entry; card hover only shifts the arrow.
4. **Booking strip and next artist** — Copy: 'Have a placement in mind?' CTA: 'Request a consultation with Mara'. Secondary link: 'Next artist: Theo Bennett'. Update names and targets from the active record.
   Layout: Full-width ruled band with text left, consultation button center-right, and next-artist text link far right. Stack at mobile widths.
   Motion: Simple opacity reveal.

### Flash library (`flash.html`)
1. **Flash introduction** — Eyebrow: 'ORIGINAL DESIGNS · TATTOOED ONCE'. Heading: 'Choose a line to make your own.' Body: 'Each piece is drawn by a resident artist and retired after it is claimed. Dimensions are starting points; final scale and placement are confirmed together.' Note: 'All artwork on this demo is original SVG drawn in code.'
   Layout: Editorial page heading with a nine-column title and three-column note. A small parchment design index card sits at the bottom right showing '9 designs · 3 artists'.
   Motion: Heading reveal and one restrained line-drawing accent.
2. **Filters and nine-design gallery** — Provide style filters All, Ornamental, Fine line, Botanical, Abstract, Miniature; artist filters All artists, Mara, Theo, Inez; and a Sort control for Featured, Price low to high, and Size small to large. Mara designs: Moth Orbit — ornamental, 5 × 7 in, $420; Split Thorn — ornamental, 3 × 6 in, $320; Orbit Signet — miniature, 2.5 × 2.5 in, $220. Theo designs: Fern Study — botanical, 3 × 5 in, $280; Mothwing Sketch — fine line, 4 × 4 in, $300; Seed Arc — botanical, 2 × 4 in, $240. Inez designs: Folded Sun — abstract, 3 × 3 in, $240; Twin Current — abstract, 2 × 5 in, $260; Small Ritual — miniature, 1.5 × 2 in, $180. Create every motif from new SVG path data; no external illustrations.
   Layout: Two rows of compact filter controls above a live count. Gallery is a three-column grid with 4:5 parchment art areas, thin Ink borders, and metadata below. Active filter is Oxblood with Bone text. Mobile uses two columns, collapses secondary filters into a disclosure, and keeps labels at least 12 px.
   Motion: Use shared 220 ms filter transitions. Preserve keyboard focus and do not animate individual SVGs while filtering.
3. **Design detail dialog** — Clicking a card opens an accessible modal with enlarged SVG, title, artist, style, dimensions, price, and two suggested placements. Example for Moth Orbit: 'Suggested placement: outer forearm or upper arm'. Button: 'Request this design', linking ./consult.html?flash=moth-orbit&artist=mara. Opening flash.html?design=moth-orbit directly opens the same dialog; unknown design ids show the full gallery without an error.
   Layout: Centered dialog max-width 920 px with a 3:2 split: large parchment art left, details right. Use a dark scrim, visible close button, Escape support, focus trap, and focus return. Mobile uses a bottom sheet with art above details.
   Motion: Scrim fades over 180 ms and dialog rises 16 px over 220 ms; reduced motion uses instant display.
4. **Custom design note** — Heading: 'Nothing here is quite it?' Body: 'Flash is a starting point, not a limitation. Ask for a custom piece in the consultation form and include the subject, placement, approximate size, and any references you have.' CTA: 'Start a custom request'.
   Layout: Soot two-column band with a large heading left and body plus button right.
   Motion: Shared section reveal.

### Consultation (`consult.html`)
1. **Consultation introduction** — Eyebrow: 'START WITH THE DETAILS'. Heading: 'Tell us what you’re imagining.' Body: 'A few useful details help us match the right artist, estimate session time, and reply with next steps. No artwork needs to be final at this stage.' Side note: 'Completing this demo form stores a draft in your browser only. It does not send a request or take payment.'
   Layout: Title and body left eight columns, small bordered privacy note right four. On mobile the note follows the introduction before the form.
   Motion: Shared heading reveal.
2. **Three-step consultation form** — Step 1 Artist and idea: artist select (No preference, Mara, Theo, Inez), Custom or Flash radio, style select, design idea textarea requiring 40–1200 characters; preselect from artist and flash query parameters. Step 2 Body and budget: placement select (Forearm, Upper arm, Shoulder, Back, Chest, Thigh, Calf, Ankle, Other), approximate width and height number inputs in inches with a live size summary, Black and grey or Color radio, budget select ($180–350, $350–600, $600–1000, $1000+, Not sure), preferred weekday checkboxes. Step 3 Contact and review: name, email, optional pronouns, additional notes, required confirmation 'I am 18 or older', and a review summary of every prior answer. Save valid partial input to localStorage on each step and provide Edit buttons. Final button: 'Save consultation request'. Success heading: 'Your request is saved on this device.' Success body: 'This static demo has not transmitted your details. In a production site, the studio would review the request before offering a session time.' Include a Start another request button that clears the draft.
   Layout: Two-column workspace: left three columns contain numbered step navigation and contact expectations; right eight columns contain one Soot form panel with 28 px padding and 12 px field gaps. Inputs are 52 px high with Ink backgrounds, Umber Line borders, and clear error text. Progress reads 'Step 1 of 3' and uses three short bars, not a spinner. Mobile uses one column, sticky bottom Continue button, and no horizontal overflow.
   Motion: Steps slide 16 px and fade over 200 ms; errors appear without layout jumps. Success uses a simple check icon scale only when motion is allowed.
3. **Booking deposit policy** — Set id='deposit'. Heading: 'A clear reservation, before the drawing begins.' Use [BOOKING_DEPOSIT] everywhere; default copy: 'A $150 booking deposit reserves your session and is credited to the final session total.' Policy rows: 'Deposits are nonrefundable once a session is reserved.' 'Reschedule once with at least 72 hours’ notice and keep the same deposit.' 'Less than 72 hours’ notice requires a new deposit.' 'One focused design revision is included; a new concept or major size change may require a new quote and deposit.' 'No payment is collected in this static demo.'
   Layout: Parchment section with Ink text, heading left four columns and five ruled policy rows right eight. Highlight the deposit amount in 48 px Cormorant above the rows.
   Motion: Rows reveal sequentially with no accordion hiding essential policy text.
4. **Booking FAQ** — Accordion questions and answers: 'Do I need a consultation for flash?' — 'Yes. It confirms fit, placement, and timing, but it is usually shorter than a custom consult.' 'What is the studio minimum?' — 'The default studio minimum is $180; each artist’s minimum appears on their profile.' 'Can I bring someone?' — 'One support person is welcome, but the working station stays limited to the artist and client.' 'Will I see the design before my session?' — 'Your artist shares the design with enough time for the included revision; exact timing is confirmed with your quote.' 'Do you tattoo minors with permission?' — 'No. All clients must be 18 or older with valid government-issued identification.' 'Is the deposit a separate fee?' — 'No. The [BOOKING_DEPOSIT] deposit is credited to the final session total under the policy above.'
   Layout: Heading on the left four columns and accordion on the right eight. Each question is a full-width ruled button with Plus icon and answer max-width 65 characters.
   Motion: Accordion height and opacity animate over 200 ms; allow multiple items open and respect reduced motion.

### Aftercare guide (`aftercare.html`)
1. **Aftercare hero** — Eyebrow: 'AFTER YOUR SESSION'. Heading: 'Good healing is part of the work.' Body: 'Follow the instructions from your artist, keep the area clean, and give the tattoo time. This general guide supports—not replaces—the directions given for your specific session.' CTA: 'Read the healing steps'; secondary link: 'Ask the studio a question' to ./consult.html. Use aftercare-hands.webp.
   Layout: A 5:7 split with copy left and 4:3 documentary aftercare photograph right, all below the shared header with generous top space. Mobile puts the photograph immediately after the headline and before the body.
   Motion: Photograph and text use the standard first-screen reveal; no autoplay or looping effects.
2. **Healing timeline** — Heading: 'A simple routine, stage by stage.' Stage 1 'First 24 hours' — 'Wash your hands before touching the area. Remove the bandage only when your artist’s instructions say to, then wash gently with lukewarm water and mild unscented soap.' Stage 2 'Days 2–5' — 'Pat dry with a clean towel and apply a very thin layer of the aftercare product recommended by your artist. Do not over-moisturize.' Stage 3 'Weeks 2–4' — 'Light flaking and itching can occur. Do not pick or scratch; continue gentle cleaning and let flakes lift naturally.' Stage 4 'After the surface settles' — 'Protect the tattoo from prolonged sun exposure and use broad-spectrum sunscreen once fully healed.'
   Layout: Four-column timeline on Parchment with Ink text, connected by a thin top rule and numbered nodes. Each stage has a small time label, Cormorant title, and readable body. Mobile turns it into a vertical timeline.
   Motion: The timeline rule draws across as the four nodes reveal; reduced motion shows the completed line.
3. **Do, avoid, and warning signs** — Do list: 'Keep clothing clean and loose around the area', 'Use clean hands and fresh towels', 'Contact your artist if you are unsure about a product'. Avoid list: 'Soaking in baths, pools, lakes, or hot tubs until healed', 'Picking flakes or scratching', 'Direct sun and tanning during healing'. Warning heading: 'When to seek medical care'. Warning copy: 'Contact a qualified healthcare professional for spreading redness, increasing pain or swelling, unusual discharge, fever, or any symptom that concerns you. The studio cannot diagnose or treat an infection.'
   Layout: Two equal bordered Do and Avoid columns followed by a full-width Oxblood-outlined warning panel. Use Check, X, and CircleAlert Lucide icons at 18 px, never color alone to convey meaning.
   Motion: Simple staggered reveal; warning panel does not pulse or flash.
4. **Aftercare FAQ and closing CTA** — Questions: 'Can I work out?' — 'Avoid workouts that stretch, soak, or rub the area until your artist says it is ready.' 'Why does the tattoo look cloudy?' — 'A temporary dull or cloudy appearance can occur while the surface settles; follow your artist’s guidance rather than adding extra product.' 'When can I shave?' — 'Wait until the surface is fully healed and there is no flaking or tenderness.' 'What if I react to a bandage or product?' — 'Stop using it and contact the studio; seek medical advice for a significant reaction.' Closing copy: 'Something does not look or feel right?' CTA: 'Send a follow-up question' to ./consult.html. Small note: 'This demo does not transmit messages.'
   Layout: Two-column FAQ accordion followed by a compact Soot CTA band. Keep the warning and medical disclaimer visible regardless of accordion state.
   Motion: Shared accordion and CTA transitions with reduced-motion support.

## Assets
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/hero-studio.webp to public/images/hero-studio.webp. Alt: 'A quiet tattoo studio with charcoal walls, private workstations, and warm task lighting'. Use as the full-bleed homepage hero and optionally a narrow visit banner. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record path, URL, author, and license in ASSETS.md.
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-mara.webp to public/images/artist-mara.webp. Alt: 'Fictional tattoo artist Mara Voss standing beside her workstation in warm studio light'. Use on artist cards and Mara's profile. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record in ASSETS.md.
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-theo.webp to public/images/artist-theo.webp. Alt: 'Fictional tattoo artist Theo Bennett seated near a drawing table in warm studio light'. Use on artist cards and Theo's profile. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record in ASSETS.md.
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/artist-inez.webp to public/images/artist-inez.webp. Alt: 'Fictional tattoo artist Inez Park in a charcoal studio with soft side lighting'. Use on artist cards and Inez's profile. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record in ASSETS.md.
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/studio-detail.webp to public/images/studio-detail.webp. Alt: 'An unbranded tattoo workstation with wrapped equipment, drawing tools, and a dark leather chair'. Use in the homepage visit section and consultation sidebar if needed. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record in ASSETS.md.
- image: Download https://media.vibefather.ai/assets/526d4e34-f7e1-4746-ba77-ba7603fab3a7/aftercare-hands.webp to public/images/aftercare-hands.webp. Alt: 'Gloved hands gently checking a clean protective bandage on a client’s forearm'. Use as the aftercare page hero. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record in ASSETS.md.
- icon: Use locally bundled lucide-react icons (ISC) for ArrowUpRight, ArrowRight, Menu, X, Plus, Check, CircleAlert, and form controls. Draw all nine tattoo flash motifs as original inline SVG in src/content.ts or src/components/FlashArt.tsx; never import tattoo artwork. List Lucide in ASSETS.md.
- font: Install @fontsource/cormorant-garamond and self-host only weights 500 and 600 for display text. License OFL; list package, font author, and license in ASSETS.md.
- font: Install @fontsource/manrope and self-host only weights 400, 500, 600, and 700 for body and interface text. License OFL; list package, font author, and license in ASSETS.md.

## Don'ts
- Do not use any backend, server code, API routes, database, authentication, analytics, third-party form service, real payment flow, or network submission. Consultation drafts and success state are localStorage-only and the UI must say that nothing was transmitted.
- Do not hotlink images, fonts, scripts, icons, or other assets and do not use CDN tags or third-party APIs. Download the six specified generated images into public/images and bundle all dependencies locally.
- Do not use Unsplash, Pexels, Pixabay, Google Images, placeholder-image services, CC BY-NC or CC BY-SA assets, recognizable logos, branded equipment, or real people's likenesses.
- Do not copy an existing studio's name, logo, slogan, copy, artist biography, testimonial, policies, tattoo flash, signature illustration, or distinctive iconography. Keep the invented brand and create every SVG motif from new path data.
- Do not load commercial fonts or use Google Fonts CDN. Self-host only the specified Cormorant Garamond and Manrope Fontsource packages and retain their OFL credits in ASSETS.md.
- Do not change the fixed Vite, React, TypeScript, Tailwind, Motion, and Lucide stack. Do not add a router, component library, animation framework, or other dependency.
- Do not produce source maps, copy src into dist, exceed 20 MB, use absolute deployment-root asset paths, or omit Vite base './'. The production build must be minified static files in dist/.
- Do not link internal navigation to bare directories. Use explicit ./ file names. artist.html without a valid id must show Mara, and an unknown flash design must show the gallery rather than an error.
- Do not use scroll-jacking, autoplay audio or video, custom cursors, flashing warnings, excessive parallax, or animation that hides content. Respect prefers-reduced-motion across every page and interaction.
- Do not make medical claims, present aftercare as a diagnosis, encourage tattooing minors, or imply that a consultation has actually been sent or a deposit paid.
- Do not allow console errors, broken query links, inaccessible modals, keyboard focus loss, horizontal overflow, or unreadable contrast. Verify all pages at 1440×900 and 390×844 with keyboard and touch-sized controls.
- Do not put readable text or logos inside generated photographs, use a tight face close-up as the homepage hero, or replace the three fictional artist portraits with initials-only cards.

---
— Prompt by VibeFather · https://vibefather.ai/t/tattoo-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
