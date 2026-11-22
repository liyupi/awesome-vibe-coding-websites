# Movie Promo Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build the official promotional website for fictional near-future night-train mystery feature film [FILM_TITLE] directed by [DIRECTOR_NAME] and presented by [STUDIO_NAME] (Tagline: '[TAGLINE]'). Color palette: deep night teal (#0E2A33), warm sodium orange (#FF8C3A), cool silver (#CFD6DC), and near-black (#080B0E). Open immediately on a full-bleed cinematic trailer-like hero animating seamlessly across 4 consistently graded 16:9 night-train stills with gentle parallax zoom, warm sodium anamorphic light leaks, and rhythmic title cards (with Play/Pause Sequence, Still Selector, and Skip-to-Synopsis controls, never hiding frame 1). Include structured sections reachable via sticky top navigation: (1) Synopsis & Director's Note (runtime 118 min, 2.39:1 Anamorphic, Dolby Atmos); (2) Cast & Crew billing block with character & craft roles; (3) Stills Gallery opening an interactive fullscreen Lightbox with prev/next keyboard & button controls; (4) Original Score Preview Player synthesizing 3 original atmospheric noir/sci-fi cues directly via Web Audio API ('01 · Platform Rain', '02 · Carriage Four Signal', '03 · Sodium Horizon') with Play/Pause, live animated frequency bars, and volume/mute; (5) International Theatrical Release Schedule by country/territory (strictly NO 4-digit calendar dates — use 'Opening Wave I / Wave II / Wave III' and cinema formats like '70mm & Large Format'); (6) 'Find Showtimes' interactive local demo form accepting a city/ZIP and screening format (70mm / Large Format / Standard) to list fictional nearby theaters & evening screening times; (7) One-click Press Kit Download generating a clean downloadable production dossier (.txt). Bundle all 4 cohesive night-train cinema WebP stills locally under public/images/ (actors strictly from behind, in silhouette, or far away; zero close-up faces and zero text in images).

- Audience: Filmgoers, cinema festival curators, press editors, and entertainment studios.
- Goal: Create immediate theatrical intrigue and nocturnal atmosphere while making showtimes, soundtrack previews, stills, and press materials effortless to explore.
- Tone: Atmospheric neo-noir cinema—disciplined widescreen framing, crisp silver-screen billing typography, zero clutter.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/cinzel (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/cinzel (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Bundle all 4 generated widescreen night-train cinema WebP stills in public/images/ and document them in ASSETS.md.
  - Implement pure browser Web Audio API synthesis for the 3 soundtrack cues in src/audio/scoreSynth.ts with clean start/stop teardown.

## Variables
- [FILM_TITLE] — Feature Film Title (default: "THE NIGHT MERIDIAN"). Title of the fictional near-future night-train mystery film
- [DIRECTOR_NAME] — Director Name (default: "Elena Lindstrom"). Fictional writer-director name
- [STUDIO_NAME] — Production Studio (default: "Solstice Filmworks"). Fictional independent film studio
- [TAGLINE] — Official Film Tagline (default: "Every border crossed erases one passenger's memory."). Atmospheric one-line tagline displayed on the hero
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/movie-promo-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Near-Black Theater `#080B0E` — Primary widescreen backdrop
- Night Teal `#0E2A33` — Atmospheric shadows, cards, and nocturnal steel tint
- Sodium Orange `#FF8C3A` — Anamorphic light leaks, ticket CTAs, and active cue accents
- Anamorphic Silver `#CFD6DC` — Primary crisp silver-screen typography and hairline frames

### Typography
- Film Title & Title Cards: Cinzel (OFL), weights 500/600/700
- Synopsis, Cast & Showtimes: Inter (OFL), weights 400/500/600
- Timecodes, Cue Lengths & Specs: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-bleed widescreen trailer hero followed by disciplined letterboxed sections with dark teal framing and generous breathing room.
- Radius: 14px cinema frames with subtle silver hairlines.
- Motion: Gentle Ken Burns parallax drift and warm sodium light-leak sweep cycling smoothly across the 4 stills in the hero trailer sequence (respecting prefers-reduced-motion).
- Motion: Live animated equalizer bars synced to the active Web Audio soundtrack cue.
- Motion: Smooth fullscreen Lightbox inspection for every film still.
- Imagery: Four widescreen 16:9 cinema stills from one nocturnal shoot graded identically in night teal (#0E2A33) and warm sodium orange (#FF8C3A): rain-slicked platform silhouette, empty sleeper corridor, steaming bridge viaduct at midnight, and dimly lit observation lounge—zero close-up faces, zero text.

## Pages & Sections
### [FILM_TITLE] · Official Film Site (`#/film`)
1. **Trailer-Style Animated Multi-Still Hero** — Immediate widescreen cinema frame of [FILM_TITLE] cycling across 4 stills with parallax, warm sodium light leaks, and title-card captions, paired with Play/Pause Sequence, Still Selector dots, Watch Showtimes CTA, and Listen to Score shortcut.
   Layout: Full-bleed theatrical hero (min-h-[640px] desktop, clean stacked mobile).
   Motion: Smooth crossfade, subtle scale drift, and anamorphic light-leak sheen.
2. **Synopsis, Cast & Crew, Stills Lightbox & Web Audio Score** — Official synopsis & director's statement, classic theatrical Cast & Crew billing grid, 4-still gallery opening a fullscreen Lightbox, and a 3-track Web Audio synthesized soundtrack preview player.
   Layout: Centered 1152px cinematic sections on #080B0E and #0E2A33 surfaces.
   Motion: Live Web Audio synthesizer cues with animated level meters.
3. **International Release Schedule, Find Showtimes & Press Kit** — Territory release waves table (no 4-digit calendar dates), interactive local 'Find Showtimes' city/ZIP + format lookup form returning sample cinema listings, and one-click downloadable Press Kit dossier.
   Layout: Two-column showtimes & release schedule above clean press kit download bar.
   Motion: Instant client-side showtimes lookup and Blob press-kit export.

## Assets
- image: Download https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-platform.webp to public/images/still-platform.webp. Alt: 'Silhouette of a lone traveler standing in rain on a misty night-train platform lit by sodium orange lamps and night teal haze'. Usage: 'Hero Frame 1 and Gallery Still 1'. Credit: Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-corridor.webp to public/images/still-corridor.webp. Alt: 'Atmospheric narrow sleeper-train corridor at night with warm sodium wall sconces and deep teal shadows, distant figure walking away'. Usage: 'Hero Frame 2 and Gallery Still 2'. Credit: Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-viaduct.webp to public/images/still-viaduct.webp. Alt: 'Sleek futuristic night train crossing a foggy stone mountain viaduct with glowing amber carriage windows against night teal mist'. Usage: 'Hero Frame 3 and Gallery Still 3'. Credit: Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-lounge.webp to public/images/still-lounge.webp. Alt: 'Moody near-future train observation lounge at night with rain-streaked panoramic glass, warm amber table lamps, and lone passenger seen from behind'. Usage: 'Hero Frame 4 and Gallery Still 4'. Credit: Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- font: Install @fontsource/cinzel, @fontsource/inter, and @fontsource/jetbrains-mono via npm.

## Don'ts
- Never show close-up faces or embedded titles/letters inside any generated film still.
- Never include 4-digit calendar years or specific calendar dates in release schedules or credits.
- Never rely on external audio or video streaming URLs — synthesize soundtrack previews directly in Web Audio API.

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-promo-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
