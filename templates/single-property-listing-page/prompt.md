# Single Property Listing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original, single-page listing website for [PROPERTY_NAME], a [PROPERTY_TYPE] at [PROPERTY_LOCATION], presented by [BRAND] and listed at [PRICE]. Combine an immersive five-image property gallery, exact buying facts, an original interactive SVG floor plan, a schematic local guide, a live mortgage estimate, open-house RSVP, and direct agent contact. The site must feel like a complete, operating listing while remaining entirely static and honest about local-only form behavior.

- Audience: Independent real estate agents, boutique brokerages, property marketers, and individual sellers who need a polished dedicated site for one residential listing; visitors are prospective buyers comparing a visit against other homes.
- Goal: Help a buyer understand the home visually, assess practical costs and location, select an open-house session, and contact [AGENT_NAME] without navigating away to a listing portal.
- Tone: Quietly luxurious, precise, warm, and trustworthy. Use concrete property details and plain explanations rather than sales pressure, superlatives, or generic lifestyle claims. All site copy, labels, sample data, and alt text are US English.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL), @fontsource-variable/manrope (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Configure Vite with base: './' and build.sourcemap: false; npm run build must emit only the production site to dist/.
  - Define the listed palette, Cormorant Garamond display font, Manrope body font, spacing, and keyframes in the Tailwind configuration and global CSS; self-host fonts through the two Fontsource packages.
  - Keep every headline, paragraph, property fact, room, amenity, gallery caption, calculator default, open-house option, and contact detail in src/content.ts, populated from the six variables; when values change, rewrite all dependent copy and derived values instead of leaving default-only wording.
  - Use React state for the gallery, lightbox, mobile menu, floor-plan selection, calculator, FAQ, RSVP, and inquiry preview. Use only localStorage for the explicitly labeled on-device RSVP draft; no network persistence.
  - Create the floor plan and neighborhood schematic as original inline SVG with semantic React controls; use Lucide icons through the npm package rather than drawn brand marks or external SVG files.
  - Use responsive layouts and accessible controls at 1440×900 and 390×844, including visible focus states, keyboard gallery and lightbox operation, labeled inputs, and a reduced-motion path.

## Variables
- [BRAND] — Agency brand (default: "Juniper & Vale"). Invented boutique agency name used in the header, contact details, and footer.
- [PROPERTY_NAME] — Property name (default: "Alder House"). Short invented name for the individual home.
- [PROPERTY_LOCATION] — Property location (default: "18 Willow Lane, Austin, Texas"). Fictional street address with city and state; rewrite neighborhood details to suit it.
- [PRICE] — Listing price (default: "$1,285,000"). Asking price and initial mortgage-calculator property value.
- [PROPERTY_TYPE] — Property type (default: "Single-story courtyard home"). Short descriptive residential category used in the facts and introduction.
- [AGENT_NAME] — Listing agent (default: "Elena Marlow"). Fictional listing agent used in the bio, RSVP, and inquiry actions.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/single-property-listing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Chalk `#F4F1EA` — Primary page background and calm negative space
- Paper `#FFFEFA` — Form, room-detail, and calculator surfaces
- Ink `#1C2420` — Primary text and dark footer background
- Moss `#354A3D` — Primary buttons, selected hotspots, and key accents
- Limestone `#D8D1C4` — Hairline borders, floor-plan walls, and inactive tracks
- Clay `#A65338` — Small status accents and error states, never large fills

### Typography
- Display headlines, property name, and large price: Cormorant Garamond (OFL), weights 400/500/600
- Body, navigation, forms, facts, and controls: Manrope Variable (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base grid, a 12-column content grid capped at 1320px, 64px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep reading measures near 62 characters and fact labels compact.
- Radius: Use crisp 2px corners on buttons, inputs, and image frames; 999px only for the gallery counter and small status pills. Avoid a page of rounded cards and heavy shadows.
- Motion: Crossfade hero photographs over 700ms with a subtle 1.02-to-1 scale settle; advance every 6 seconds, pause on hover or focus, and stop autoplay when prefers-reduced-motion is set.
- Motion: Reveal major section headings and media once with Motion whileInView, 24px upward travel, 600ms duration, and 80ms stagger; content remains visible without animation and reduced motion removes transforms.
- Motion: Animate floor-plan selection and room details with a 180ms fill and opacity change; never delay the actual selected state while waiting for animation.
- Motion: Give buttons, gallery controls, accordion rows, and navigation links 160ms color or underline feedback with no springy movement or scroll-jacking.
- Imagery: Use the six generated, locally stored images as one coherent editorial shoot of the same invented contemporary pale-brick courtyard property: warm afternoon daylight, white oak, limestone, olive planting, restrained natural color, and realistic architectural proportions. Five property photographs anchor the hero, gallery, and room details; one fictional agent portrait appears only in the contact section. The hero never uses the portrait. Draw the floor plan, neighborhood map, icons, and chart in code.

## Pages & Sections
### [PROPERTY_NAME] · [BRAND] (`index.html`)
1. **Header and full-screen gallery** — Fixed header shows [BRAND] as a simple text wordmark, anchors for Residence, Floor Plan, Neighborhood, and Estimate, plus a Book a Tour button to #open-house. The hero eyebrow is Just listed · [PROPERTY_TYPE]. H1 is [PROPERTY_NAME], followed by [PROPERTY_LOCATION], [PRICE], and 4 beds · 3 baths · 2,680 sq ft. Primary CTA Explore the Residence goes to #residence; secondary CTA View Open House goes to #open-house. Use all five property images as slides with concise room captions, a 01 / 05 counter, previous and next buttons, and five labeled thumbnail dots. A mobile menu exposes the same anchors without covering gallery controls.
   Layout: Hero fills 100svh with a 720px desktop minimum and 680px mobile minimum. Photography is full bleed with object-fit: cover and a restrained bottom-to-top dark gradient for readable white copy. Place headline and CTAs in the lower-left content grid, gallery controls lower-right, and a slim For sale status at the upper-left below the header. Header begins transparent over photography and gains a Chalk background, Ink text, and hairline border after 24px scroll.
   Motion: Autoplay and crossfade the five slides as specified; arrows and thumbnail dots update immediately, keyboard left and right work when the gallery has focus, and the header background change is 180ms.
2. **Key facts** — Create a scannable facts ledger with Offered at [PRICE], 4 bedrooms, 3 bathrooms, 2,680 sq ft interior, 0.31-acre lot, and Built 2019. Add a short line: [PROPERTY_TYPE] with a private courtyard, two-car garage, and no HOA. Use exact labels rather than icons alone.
   Layout: A six-column strip directly below the hero with Limestone vertical dividers on desktop and a two-column grid with horizontal dividers on mobile. Price occupies the first wider column; numerals use Cormorant Garamond 40px and labels use Manrope 12px uppercase with letter spacing.
   Motion: Reveal the ledger once as a group; no count-up animation.
3. **Residence story** — Section eyebrow The Residence. Default headline: Light, privacy, and room to breathe. Default body: At [PROPERTY_NAME], pale brick, white oak, and deep-set windows soften the line between indoors and out. The main living spaces gather around a planted courtyard, giving every day a quiet center. A second paragraph explains that the kitchen has a 10-foot limestone island, the primary suite opens to a private garden, and a flexible fourth bedroom works as a study. Add six specific amenities: white-oak floors, custom limestone island, zoned HVAC, built-in storage, two-car garage, and drought-tolerant landscaping.
   Layout: Two-column editorial opening with the headline spanning five columns and body spanning four. Below, use living-room.webp across eight columns and a compact amenities list across four with a small floor-plan teaser link. Keep generous white space rather than putting the copy in a floating card.
   Motion: Heading, image, and amenities reveal in that order; a very subtle image scale settle is optional and disabled for reduced motion.
4. **Editorial gallery** — Headline: Every room, considered. Show living-room.webp, kitchen.webp, primary-bedroom.webp, and courtyard.webp with the captions Living room · courtyard aspect, Kitchen · 10-foot limestone island, Primary suite · garden access, and Courtyard · evening shade. Every image button opens an accessible lightbox containing all five property photos, captions, counter, previous and next controls, and Close; Escape closes and focus returns to the originating thumbnail.
   Layout: Use an asymmetric 12-column mosaic: one wide 7-column image, one tall 5-column image, then two balanced 6-column images. On mobile use a single column with consistent 4:3 crops and no horizontal carousel. Lightbox is a full-screen Ink overlay with a centered contained image and controls outside the image bounds.
   Motion: Lightbox fades in over 180ms and slide changes crossfade over 250ms; trap focus while open, prevent background scroll, and honor reduced motion.
5. **Interactive floor plan** — Headline: Walk the plan before you visit. Build an original, dimensioned inline SVG for the described single-story home, not a traced plan. Include Living Room 22 × 18 ft, Kitchen 16 × 14 ft, Primary Suite 15 × 13 ft, Bedroom Two 12 × 11 ft, Bedroom Three 12 × 11 ft, Bedroom Four / Study 11 × 10 ft, three bathrooms, entry, two-car garage, and Courtyard 20 × 16 ft. Selecting a room updates an adjacent detail panel with its dimensions, one concrete finish note, and a related property image where available. Default selection is Living Room with white-oak floors and a courtyard-facing glass wall; Kitchen has a 10-foot limestone island; Primary Suite has garden access and a walk-in closet. Provide the same room choices as a semantic button list for screen readers and mobile users.
   Layout: Section background Paper. Desktop places the SVG in eight columns and a sticky room-detail panel in four; mobile stacks a legible 4:3 plan above the room buttons and detail panel. Use 2px Ink walls, Limestone fills, room labels inside the SVG, and Moss selected fills with accessible contrast. Add a small north arrow and the label Illustrative plan · not to scale.
   Motion: Selected rooms gain a Moss fill and a small dot pulse once; detail text crossfades for 180ms. Keyboard focus is visible and selection never depends on hover.
6. **Neighborhood guide** — Eyebrow Around [PROPERTY_NAME]; headline: Daily essentials, a little closer. For the default Austin listing, invent and list Juniper Coffee · 4-minute walk, Alder Grove Market · 6-minute walk, Willow Creek Trail · 8-minute bike ride, and Eastside Arts Park · 5-minute drive. Add a short paragraph about quiet residential streets, morning coffee, and access to everyday shopping without inventing school ratings or investment claims. Rewrite place names and travel notes when [PROPERTY_LOCATION] changes.
   Layout: Pair a five-column amenity ledger with a seven-column original schematic SVG map. The map uses abstract local streets, one Moss property pin, four numbered amenity pins, and a small legend; it is not a geographic or navigation service. Selecting an amenity in the ledger highlights its pin and description.
   Motion: Amenity selection uses a 160ms pin fill and underline change. Do not load map tiles or animate street paths continuously.
7. **Mortgage estimator** — Headline: Plan the monthly picture. Initialize home price from [PRICE], down payment to 20%, interest rate to 6.25%, loan term to 30 years, annual property-tax rate to 1.6%, and annual homeowners insurance to $2,400. Provide synchronized numeric and range controls for down payment and rate, a 15 / 20 / 30-year term select, and editable tax and insurance values. Calculate principal and interest with the standard fixed-rate amortization formula, then add monthly tax and insurance for the total. Show a labeled breakdown for principal and interest, property tax, and insurance, plus loan amount and down-payment dollars. Always display: Illustrative estimate only, not a loan offer. Excludes PMI, HOA dues, and other costs.
   Layout: Use a Paper section with a five-column control panel and seven-column result panel. The result includes one large monthly total, three ledger rows, and an accessible CSS conic-gradient or SVG donut whose segments match the breakdown. Mobile stacks controls before the result and keeps inputs at least 44px tall. All updates happen locally without API requests.
   Motion: Numbers and chart update immediately on valid input; use only a subtle 120ms highlight on the changed total. Handle zero, blank, and invalid values with inline messages rather than NaN or broken charts.
8. **Open-house RSVP** — Section id open-house. Eyebrow See it in person; headline: Choose your open house. Offer Saturday · 1:00–3:00 PM, Sunday · 11:00 AM–1:00 PM, and Private tour · request a time. The RSVP form asks for session, name, email, and party size from 1 to 4, with inline validation. On submit, save a clearly labeled RSVP draft to localStorage and show: Your RSVP draft is saved on this device. Email [AGENT_NAME] to confirm your visit. Provide an Email to Confirm button that opens a prefilled mailto draft and a Start Over action that clears the local draft; never claim the request was sent. Include direct phone and email alternatives.
   Layout: A Moss section with white text contains three compact session choices on the left and a Paper form panel on the right. On mobile stack session choices horizontally scroll-free, then the form. Preserve entered values after refresh through the local draft and expose status messages through an aria-live region.
   Motion: Session selection and validation feedback use immediate color changes; the confirmation fades in over 180ms with no confetti or false success animation.
9. **Agent contact** — Use agent-portrait.webp beside the eyebrow Your Listing Agent, H2 [AGENT_NAME], and role Principal Broker · [BRAND]. Default bio: Elena combines careful property presentation with clear, practical guidance from first tour to final offer. She knows the craftsmanship and small details that make [PROPERTY_NAME] easy to call home. Rewrite the bio for another agent value. Display a fictional .example email derived from [BRAND], default hello@juniperandvale.example, and the fictional phone (512) 555-0147 with Call and Email actions. Add a short inquiry form for name, email, and message; submit opens a local preview with Copy Inquiry and Email Agent actions rather than sending anything.
   Layout: Use a 12-column grid with a 4-column 3:4 portrait, 3-column agent details, and 5-column inquiry form. Keep the portrait natural and uncropped at the face on mobile. The inquiry preview replaces the form only after valid input and includes an Edit action.
   Motion: Copy Inquiry changes its label to Copied for 1.5 seconds and announces the state politely; no other decorative motion.
10. **Property notes and footer** — Add four accessible accordion questions: What is included with the home? answer that kitchen appliances, laundry machines, and fitted window shades are included; Is there an HOA? answer No HOA dues for this listing; Can I arrange a private tour? answer Yes, select Private tour or contact [AGENT_NAME] directly; How accurate is the mortgage estimate? answer that it is illustrative and buyers should confirm taxes, insurance, and financing with their providers. Footer repeats [BRAND], [PROPERTY_NAME], [PRICE], the anchor navigation, direct agent contact, and the small line Independent fictional listing presentation. Include the optional [CREDIT] link unobtrusively.
   Layout: FAQ rows span the center eight columns with hairline dividers and a plus icon that rotates when expanded. Footer is Ink with Chalk text, a three-column desktop layout and stacked mobile layout. Only one FAQ needs to be open at a time, but all answers remain available to keyboard users.
   Motion: Accordion height and opacity animate over 180ms without hiding content from assistive technology; reduced motion makes expansion immediate.

## Assets
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/hero-exterior.webp to public/images/hero-exterior.webp; alt: Pale brick courtyard home framed by olive trees in warm afternoon light; use as hero slide 1 and the exterior lightbox frame. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/living-room.webp to public/images/living-room.webp; alt: White-oak living room opening onto a planted courtyard; use as hero slide 2, the residence image, gallery image, and Living Room detail. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/kitchen.webp to public/images/kitchen.webp; alt: Warm contemporary kitchen with a long limestone island; use as hero slide 3, gallery image, and Kitchen detail. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/primary-bedroom.webp to public/images/primary-bedroom.webp; alt: Calm primary bedroom with white-oak joinery and garden doors; use as hero slide 4, gallery image, and Primary Suite detail. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/courtyard.webp to public/images/courtyard.webp; alt: Private limestone courtyard with olive trees and soft afternoon shadows; use as hero slide 5 and a gallery image. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/ebbe606a-6b91-4d3d-9356-a59b9b089526/agent-portrait.webp to public/images/agent-portrait.webp; alt: Fictional listing agent standing inside a bright contemporary home; use only in the agent contact section. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: Use lucide-react for arrows, gallery controls, menu, close, phone, mail, check, copy, and plus icons; no brand icons. The package is installed locally and listed under ISC.
- font: Self-host Cormorant Garamond and Manrope Variable with @fontsource/cormorant-garamond and @fontsource-variable/manrope, both OFL; list the installed font files and packages in ASSETS.md.
- image: Create the floor plan, neighborhood schematic, property pin, amenity pins, and mortgage chart directly as original inline SVG or CSS; no external map tiles, chart images, or placeholder services. Record all six generated images, Lucide, and Fontsource packages in ASSETS.md with their source or generation credit and license.

## Don'ts
- Do not add a backend, serverless functions, API routes, database, authentication, analytics, third-party APIs, map tiles, geocoding, or any network form submission.
- Do not claim an RSVP or inquiry was sent; keep the RSVP draft on-device and use explicit copy or mailto actions for contact.
- Do not present mortgage results as a quote, financial advice, affordability decision, or loan offer; retain the illustrative-estimate disclaimer and input validation.
- Do not use real agency brands, real agent identities, real listing copy, real property addresses, recognizable properties or landmarks, copyrighted listing photographs, logos, or branded iconography.
- Do not use commercial fonts, fonts.googleapis.com, fonts.gstatic.com, Adobe Fonts, icon CDNs, stock-photo services, hotlinked assets, placeholder-image services, or assets with restrictive licenses.
- Do not use the agent portrait in the hero, recognizable real people, celebrity likenesses, or initials in place of the supplied fictional agent portrait.
- Do not copy or trace an existing architectural plan; draw the specified original SVG and label it illustrative and not to scale.
- Do not hard-code default-only copy outside src/content.ts; regenerate property names, location-specific copy, contact details, prices, and all derived values when variables change.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemap work, keyword-stuffed headings, or heading-hierarchy instructions; a plain title and favicon are sufficient.
- Do not mention VibeFather inside the site except the optional [CREDIT] footer link, and do not add dates, market claims, school ratings, or investment-return promises.
- Do not use bare-directory links, broken anchors, absolute built-asset paths, CDN scripts or styles, source maps, or copy src/ into dist/; keep dist/ under 20 MB and use Vite base './'.
- Do not hide essential content behind animation, autoplay under reduced motion, scroll-jack, rely on hover for room selection, or ship console errors at 1440×900 or 390×844.

---
— Prompt by VibeFather · https://vibefather.ai/t/single-property-listing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
