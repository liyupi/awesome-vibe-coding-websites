# Focus Timer & Habit Companion App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A serene warm-stone responsive mobile-first Pomodoro focus timer & daily micro-habit tracker PWA ([BRAND]) for [USER_NAME] with a [DAILY_FOCUS_GOAL] daily focus target. Mobile (<768px) uses a bottom 4-tab bar (Focus, Habits, Journal, Stats); desktop renders a side rail + dual-panel focus desk with dark mode toggle. No fake phone bezel.

- Audience: Knowledge workers, students, writers, and makers building calm daily focus and habit routines.
- Goal: Pair tactile distraction-free Pomodoro sprints with procedural ambient soundscapes and lightweight daily habit streaks.
- Tone: Serene, grounded, organic warm minimalism, zero hustle-culture noise.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Synthesize Soft Rain (bandpass filtered noise), Warm Brown Noise (integrated low-passed noise), Gentle Café Hum (warm harmonic room bed), and Completion Bell chime cleanly via Web Audio API in src/audio/ambientMixer.ts.
  - Persist daily habits, streaks, journal reflection notes, focus history minutes, and dark mode preference in localStorage.

## Variables
- [BRAND] — Focus app name (default: "HearthPace"). Fictional Pomodoro & habit PWA name
- [USER_NAME] — User display name (default: "Mina Sato"). Fictional profile greeting
- [DAILY_FOCUS_GOAL] — Daily focus target (default: "100 min"). Shown on stats and sidebar
- [DEFAULT_TASK] — Active sprint label (default: "Deep Architecture Spec"). Initial selected focus task
- [CALM_MOTTO] — Subtle studio subtitle (default: "Steady focus, gentle daily rituals."). Header tagline
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/focus-timer-habit-companion-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm Stone `#F5F3EF` — Serene daylight app canvas
- Paper White `#FFFFFF` — Elevated timer, mixer, and habit cards
- Deep Charcoal `#1C1917` — Primary display numerals, headings, and dark-mode background
- Terracotta `#D95D39` — Active Focus ring arc, primary Play CTA, and streak highlights
- Calm Sage `#4D7C6F` — Break timer mode, completed habit checks, and weekly chart bars
- Muted Pebble `#78716C` — Secondary labels, durations, and reflection timestamps

### Typography
- Warm editorial headings: Fraunces (OFL), weights 600/700
- Habits, journal reflections, and UI controls: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Countdown clock, durations, and focus totals: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Mobile (<768px) uses comfortable 16px horizontal padding with 84px clearance above the fixed 64px tab bar. Desktop (>=1024px) renders a full-height 236px left rail + balanced 2-column focus & habits/telemetry workspace.
- Radius: 20px for timer studio card, 14px for habit and mixer cards, 999px for mode pills and task chips.
- Motion: Smooth SVG circular countdown arc sweeping counterclockwise as seconds tick.
- Motion: Tactile sage check-off transition on daily micro-habits.
- Motion: Honors prefers-reduced-motion; all content visible immediately.
- Imagery: 100% crisp code-drawn calm visuals: animated SVG circular countdown ring, ambient sound channel meters, weekly focus-minutes SVG bar chart, 28-day sage consistency heatmap, and Lucide icons.

## Pages & Sections
### [BRAND] — Focus Timer & Habit Companion (`index.html`)
1. **Adaptive Mobile Bottom Tabs & Desktop Side Rail** — Mobile (<768px): calm [BRAND] header with dark mode switch + fixed bottom 4-tab bar (Focus, Habits, Journal, Stats). Desktop (>=768px): full-height side rail with [BRAND] emblem, [USER_NAME], 4 nav tabs, today's focus progress bar toward [DAILY_FOCUS_GOAL], and Light/Dark mode toggle.
   Layout: Full-viewport responsive warm stone PWA; zero fake phone frame.
2. **Focus Desk — SVG Countdown Ring, Ambient Sound Mixer & Quick Habits** — Left panel: mode switcher (25m Focus / 5m Short Break / 15m Long Break + custom +/- 5m controls), large animated SVG circular countdown ring, Play/Pause & Reset buttons, task label selector ('[DEFAULT_TASK]', 'Design Critique Prep', 'Inbox Zero', 'Reading Block'), and quick 1-line session reflection input. Right panel: built-in Web Audio Ambient Sound Mixer (independent sliders + mute toggles for Soft Rain, Warm Brown Noise, Gentle Café Hum, plus Test Bell button), Daily Micro-Habits check-off list with streak badges, and compact Weekly Focus Minutes bar chart so all signature elements shine on first load.
   Layout: Balanced dual-panel desk on desktop; clean stacked cards on mobile.
3. **Habits & Journal Views** — Habits tab shows 6 daily micro-habits (Morning Sunlight Walk, 100m Deep Focus, Hydrate 2L, Read 20 Pages, Screen-Free Dinner, Evening Stretch) with completion toggle, live streak counter, and Add Custom Habit input. Journal tab displays timestamped relative ('Just now', 'Earlier today', 'Yesterday') 1-line session reflections with quick add form.
   Layout: 2-column cards on desktop; single column on mobile.
4. **Stats View — Weekly Focus Minutes & 28-Day Heatmap** — Top 3 KPI cards (Focus Minutes Today, Weekly Deep Work, Habit Completion Rate), interactive 7-day SVG Focus Minutes bar chart, and 28-day Sage Consistency Heatmap persisted in localStorage.
   Layout: 2-column telemetry grid on desktop; stacked cards on mobile.

## Assets
- icon: Install lucide-react (ISC) for play/pause, rain/waves/coffee audio mixer, checkmarks, flame streaks, moon/sun theme, and tab icons.
- font: Self-host Fraunces, Plus Jakarta Sans, and JetBrains Mono via @fontsource packages (OFL).
- image: Circular countdown ring, weekly focus bar chart, and 28-day heatmap are drawn purely in SVG. Audio synthesized via Web Audio API.

## Don'ts
- No fake phone bezel or fixed narrow mobile container on desktop screens.
- No external MP3 audio streams, CDN scripts, Google Fonts, or source maps; always set base: './'.
- No calendar dates; use relative labels ('Today', 'Yesterday', '2 days ago').
- No real productivity brands or logos.
- No horizontal overflow on 390x844 mobile or 1440x900 desktop.
- No mention of VibeFather or competitors except optional [CREDIT].

---
— Prompt by VibeFather · https://vibefather.ai/t/focus-timer-habit-companion-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
