---
name: "Music Streaming App with Lyrics"
colors:
  night_plum: "#17121D"
  panel_plum: "#241B2C"
  raised_plum: "#30233A"
  warm_ivory: "#FFF4E8"
  muted_lilac: "#B8A9BC"
  apricot: "#FFB08A"
  dusty_coral: "#D97971"
  soft_mint: "#A7C7B5"
  plum_line: "#493A51"
typography:
  featured_playlist_page_headings_active_lyric_lines_and_editorial_playlist_titles: { family: "Fraunces Variable", weights: [500, 600, 700] }
  navigation_track_rows_comments_buttons_forms_and_general_body_copy: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
  timestamps_durations_chart_ranks_sample_play_counts_and_compact_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base scale. The desktop shell has a 216px fixed sidebar, a minmax(0,1fr) main column, 32px main gutters, and an 88px fixed mini player. Main content has a 1320px maximum width within its available column. Page headers use 32px top and 24px bottom spacing; playlist cards use 18px padding and track rows 12px. Now Playing uses 32px stage padding and a 48px column gap. Mobile uses 16px gutters, a 72px mini player above 62px bottom navigation, 150px combined bottom clearance, and at least 44px pointer targets."
radius: "Use 24px for the featured playlist and now-playing stage, 18px for playlist cards and the queue drawer, 14px for standard panels and cover frames, 10px for buttons and inputs, and full rounding only for compact chips, icon buttons, and the vinyl. Use one-pixel Plum Line borders and restrained 0 20px 60px rgba(10,6,14,0.32) shadows only on drawers and the now-playing stage."
---

# Music Streaming App with Lyrics — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night Plum** `#17121D` — Overall app canvas, deepest vinyl background, and dark text on Apricot buttons
- **Panel Plum** `#241B2C` — Sidebar, playlist surfaces, chart panels, mini player, and comment composer
- **Raised Plum** `#30233A` — Hover rows, active navigation, drawer sections, and lyric-line background
- **Warm Ivory** `#FFF4E8` — Primary headings, active lyrics, song titles, and high-contrast icons
- **Muted Lilac** `#B8A9BC` — Secondary copy, inactive lyrics, metadata, and inactive controls
- **Apricot** `#FFB08A` — Play controls, active lyric accent, seek fill, chart highlight, and focus ring
- **Dusty Coral** `#D97971` — Liked states, small editorial markers, and secondary cover-art echoes
- **Soft Mint** `#A7C7B5` — Saved states, successful local actions, and queue status details
- **Plum Line** `#493A51` — One-pixel borders, table dividers, input outlines, and progress tracks

## Typography
- **Featured playlist, page headings, active lyric lines, and editorial playlist titles** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Navigation, track rows, comments, buttons, forms, and general body copy** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Timestamps, durations, chart ranks, sample play counts, and compact labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. The desktop shell has a 216px fixed sidebar, a minmax(0,1fr) main column, 32px main gutters, and an 88px fixed mini player. Main content has a 1320px maximum width within its available column. Page headers use 32px top and 24px bottom spacing; playlist cards use 18px padding and track rows 12px. Now Playing uses 32px stage padding and a 48px column gap. Mobile uses 16px gutters, a 72px mini player above 62px bottom navigation, 150px combined bottom clearance, and at least 44px pointer targets.
- Radius: Use 24px for the featured playlist and now-playing stage, 18px for playlist cards and the queue drawer, 14px for standard panels and cover frames, 10px for buttons and inputs, and full rounding only for compact chips, icon buttons, and the vinyl. Use one-pixel Plum Line borders and restrained 0 20px 60px rgba(10,6,14,0.32) shadows only on drawers and the now-playing stage.

## Motion
- Route changes fade and settle the main content upward 6px over 180ms while the sidebar, mini player, bottom navigation, and current audio remain untouched. Move focus to the new page heading without resetting playback.
- The vinyl rotates once every 3.2 seconds only while audio is playing and motion is allowed. The cover label rotates with the disc; pausing freezes the current angle rather than snapping back.
- The active lyric changes color, opacity, and a 3px Apricot side rule over 160ms. The lyric viewport scrolls the active line to its center over 240ms; seeking or switching tracks updates immediately before any effect.
- Play, like, follow, queue-add, and volume controls give 120–180ms color or scale feedback without layout shift. New local comments enter with a 160ms fade and comment-like counts update once per visitor.
- The queue drawer enters from the right over 220ms with a fading scrim. Reordered rows use Motion layout transitions of 180ms; removed rows collapse without delaying the underlying queue state.
- Toasts remain for 1800ms and never cover the mini player. No autoplay, audio visualization unrelated to the actual track, bouncing music notes, continuous ambient particles, or scroll-jacking.
- Under prefers-reduced-motion: reduce, stop vinyl rotation, remove route travel, smooth lyric scrolling, drawer travel, and row interpolation while preserving instant active-line, playback, queue, and comment feedback.

## Imagery
Use exactly six local generated square album-cover illustrations in one coherent mixed-media style: layered translucent paper, brushed gouache, deep plum ground, apricot and dusty coral forms, restrained lilac and powder-blue accents, soft upper-left editorial light, fine analog grain, and bold full-bleed abstract compositions. No text, letters, numbers, logos, watermarks, people, faces, hands, recognizable characters, branded objects, famous landmarks, or existing album-cover layouts. The featured playlist combines four covers in a large two-by-two collage; the current cover fills the center label of a code-drawn vinyl with fine concentric grooves. Use original inline SVG for the service's open-oval-and-seed mark and favicon, plus generic Lucide icons for controls. Listener avatars are small original two-tone geometric SVG busts, never real portraits or initials-only identity placeholders.

## Tone
Intimate, editorial, precise, and quietly nocturnal. Write lyrics and listener comments as original English snippets with concrete images and restrained emotion. Keep utility labels direct and disclose sample data and local-only behavior without turning the interface into a disclaimer wall. Avoid music-platform clichés, fake popularity claims, and empty superlatives.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-streaming-app-with-lyrics · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
