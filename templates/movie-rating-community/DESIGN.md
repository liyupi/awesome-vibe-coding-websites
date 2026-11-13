---
name: "Movie Rating Community"
colors:
  canvas: "#F3F0E8"
  paper: "#FFFDF7"
  ink: "#17262E"
  secondary_ink: "#667178"
  hairline: "#D7D2C5"
  coral: "#C85F49"
  ochre: "#D49A3A"
  sage: "#83927D"
  night_blue: "#203943"
  mist: "#E8E5DC"
  focus_teal: "#236B70"
typography:
  wordmark_home_h1_page_titles_film_titles_and_large_editorial_quotations: { family: "Instrument Serif", weights: [400] }
  body_copy_review_text_buttons_navigation_filters_form_fields_and_profile_summaries: { family: "DM Sans", weights: [400, 500, 600, 700] }
  rank_numbers_years_runtimes_rating_values_vote_counts_chart_ticks_and_filter_counts: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit. The shared content width is min(1440px, calc(100vw - 96px)) on desktop with 48px side gutters, 24px card gaps, 32px between major groups, and 72px between home sections. Header height is 72px. Page title blocks use 36px top and 28px bottom padding. Film cards use 12px internal padding; review cards 24px; filter rows 16px. At 390×844 use 20px gutters, 48px section spacing, 16px card padding, 12px gaps, and a 60px header. H1 uses clamp(44px, 5vw, 72px) at 0.98 line height on desktop and 42px at 1.0 on mobile; page titles are 48px desktop and 38px mobile. All touch targets are at least 44×44px and no layout causes horizontal page overflow."
radius: "Use 2px for rank badges and tiny labels, 6px for buttons and inputs, 10px for film and review cards, 16px for the featured-film composition and large dashboard panels, and fully round shapes only for avatar initials, status dots, and compact icon buttons. Favor hairlines and flat color over floating glass or heavy shadows."
---

# Movie Rating Community — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E8` — Main page background and generous editorial margins.
- **Paper** `#FFFDF7` — Review cards, filters, dialogs, and raised content surfaces.
- **Ink** `#17262E` — Primary text, dark navigation band, and primary button fill.
- **Secondary Ink** `#667178` — Metadata, helper text, and inactive navigation; never use below readable contrast.
- **Hairline** `#D7D2C5` — Dividers, table rules, input borders, and chart tracks.
- **Coral** `#C85F49` — Editorial accents, active underlines, selected chips, and key links; pair with Paper for large text only where contrast passes.
- **Ochre** `#D49A3A` — Star ratings, rank markers, and small data highlights with Ink text on filled controls.
- **Sage** `#83927D` — Watched states, taste bars, and quiet secondary data.
- **Night Blue** `#203943` — Featured-film panel and dark footer surfaces.
- **Mist** `#E8E5DC` — Hover fills, selected neutral filters, and subtle chart backgrounds.
- **Focus Teal** `#236B70` — Visible keyboard focus outline and accessible interactive emphasis.

## Typography
- **Wordmark, home H1, page titles, film titles, and large editorial quotations** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Body copy, review text, buttons, navigation, filters, form fields, and profile summaries** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Rank numbers, years, runtimes, rating values, vote counts, chart ticks, and filter counts** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. The shared content width is min(1440px, calc(100vw - 96px)) on desktop with 48px side gutters, 24px card gaps, 32px between major groups, and 72px between home sections. Header height is 72px. Page title blocks use 36px top and 28px bottom padding. Film cards use 12px internal padding; review cards 24px; filter rows 16px. At 390×844 use 20px gutters, 48px section spacing, 16px card padding, 12px gaps, and a 60px header. H1 uses clamp(44px, 5vw, 72px) at 0.98 line height on desktop and 42px at 1.0 on mobile; page titles are 48px desktop and 38px mobile. All touch targets are at least 44×44px and no layout causes horizontal page overflow.
- Radius: Use 2px for rank badges and tiny labels, 6px for buttons and inputs, 10px for film and review cards, 16px for the featured-film composition and large dashboard panels, and fully round shapes only for avatar initials, status dots, and compact icon buttons. Favor hairlines and flat color over floating glass or heavy shadows.

## Motion
- Render the featured film, posters, core metrics, and first reviews immediately; no splash screen, autoplay carousel, loading skeleton, or blocking intro animation.
- Route changes use a 160ms opacity fade with at most 6px upward movement and scroll to the top unless preserving a deliberate back-navigation position. Reduced-motion mode removes translation and makes transitions immediate.
- Film-card hover lifts the whole card by 3px and scales only its artwork to 1.025 over 180ms; title color changes to Coral. Touch devices retain visible labels and actions without depending on hover.
- Rating bars animate from their current width to the new width over 240ms after a personal rating changes. Helpful votes and list buttons give immediate text/state feedback plus a 160ms highlight, without layout shift.
- Filter result changes crossfade over 140ms and announce the result count through a polite live region. Dialogs and the mobile menu use 160ms opacity with 8px vertical movement, focus trapping, Escape close, and focus return.
- Use IntersectionObserver only for subtle 12px section reveals below the first screen. Under prefers-reduced-motion, reveal all content immediately, stop chart animation, remove hover movement, and preserve every state change.

## Imagery
Use six original wordless cinematic gouache-and-screen-print poster illustrations as the high-craft visual system for the featured catalog: The Cartographer's Dream, The Night Orchard, Static Between Stars, A Room for August, Salt on the Projectionist's Hands, and The Clockwork Heron. They share warm ivory, inky navy, muted coral, ochre, dusty sage, matte grain, and soft diffuse theatrical light. Display film titles and ratings as HTML outside the artwork; never ask the image generator for lettering. For the other 94 films, create deterministic original SVG posters from each film's slug using the same palette and distinct geometric scene recipes keyed by genre—horizons for drama, orbital arcs for science fiction, windows for mystery, intersecting paths for romance, offset circles for comedy, topographic lines for adventure, organic shapes for animation, frames for documentary, shadows for horror, and converging lines for thriller. These are authored posters, not gray placeholders. No real people, recognizable actors, existing film imagery, logos, text embedded in images, or recognizable landmarks. Lucide supplies familiar interface icons only.

## Tone
Literate, warm, opinionated, and unhurried: an independent film journal translated into a precise community app. Use exact film details and memorable review copy, not hype, awards language, engagement bait, streaming claims, or calls to sign up.

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-rating-community · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
