# Podcast & Audio Player App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A rich midnight-plum responsive mobile-first podcast & audio listening PWA ([BRAND]) for [LISTENER_NAME], featuring [FEATURED_SHOW] and real synthesized Web Audio demo playback. Mobile (<768px) uses a 4-tab bottom bar (Listen Now, Library, Discover, Queue) + persistent bottom mini-player + expandable Now Playing sheet; desktop adapts into a left sidebar + content canvas + persistent Up Next queue panel. No fake phone frame.

- Audience: Podcast listeners, audio storytellers, and independent media teams launching a web-based listening companion across phones and desktops.
- Goal: Deliver genuine interactive audio playback, chapter jumping, queue reordering, and show discovery with zero external audio files or backend dependencies.
- Tone: Warm, nocturnal, tactile, studio-crafted editorial audio.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Download all 6 cohesive stylized podcast cover WebP artworks into public/images/ and reference via ./images/...
  - Implement a clean Web Audio API synthesizer engine in src/audio/synthEngine.ts producing gentle ambient chords + rhythmic studio pulse envelopes that respond to play/pause, scrubbing, playback speed (0.75x-2.0x), and volume with graceful AudioContext resume on click.
  - Persist subscriptions, episode bookmarks, queue order, playback speed, and sleep timer preferences in localStorage.

## Variables
- [BRAND] — Podcast app name (default: "LoomCast"). Fictional podcast PWA name
- [LISTENER_NAME] — Listener display name (default: "Nora Quinn"). Fictional listener profile greeting
- [FEATURED_SHOW] — Featured hero podcast (default: "Signal & Craft"). Flagship show highlighted in Listen Now
- [DEFAULT_SPEED] — Default playback speed (default: "1.0x"). Initial playback speed label
- [QUEUE_TAGLINE] — App subtitle (default: "Independent voices on design, cities & sound"). Short editorial tagline in header
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/podcast-audio-player-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/podcast-audio-player-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
