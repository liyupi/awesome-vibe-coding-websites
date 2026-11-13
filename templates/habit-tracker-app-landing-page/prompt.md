# Habit Tracker App Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page landing site for Dewly, an invented mobile habit-tracking app. Light and airy on a cream background with soft drifting pastel gradient blobs. The signature pieces: a phone mockup drawn entirely in CSS that stays sticky while its screen cross-fades between four in-app views as the visitor scrolls through the features, and an interactive streak calendar visitors can tap to see their streak, longest streak and completion ring update live. Also: a habit-chip marquee, testimonials with code-drawn initial avatars, Free / Plus pricing with a monthly-yearly switch, an FAQ and a download card with code-drawn download buttons.

- Audience: Busy people who keep restarting their routines and want a tracker that feels kind rather than strict.
- Goal: Get the visitor to download the app. Every primary button leads to the download section, and the interactive demos show how the app feels before they install it.
- Tone: Warm, encouraging and lightly playful. Short sentences, no guilt and no hustle language. Feels like a friend who remembers things for you.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react 18 (MIT), react-dom 18 (MIT), motion (import from motion/react) (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/plus-jakarta-sans (OFL-1.1), tailwindcss 3.4 + postcss + autoprefixer (dev) (MIT), vite 5 + @vitejs/plugin-react (dev) (MIT), typescript (dev) (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with the Vite react-ts template; package.json scripts: dev = vite, build = tsc -b && vite build, preview = vite preview.
  - vite.config.ts: plugins [react()], base: './', build: { sourcemap: false, outDir: 'dist' }.
  - tailwind.config.ts: content ['./index.html', './src/**/*.{ts,tsx}']; extend colors with every token from Design > Colors using the names cream, ink, muted, line, peach, lilac, mint, butter, violet, violet-deep, coral, frame; extend fontFamily display: ['Fraunces Variable', 'Georgia', 'serif'] and sans: ['Plus Jakarta Sans Variable', 'system-ui', 'sans-serif'].
  - Define keyframes in tailwind.config.ts: drift (translate 0,0 → 40px,-30px → -30px,20px → 0,0 over 22s ease-in-out infinite), float (translateY 0 → -8px → 0 over 6s ease-in-out infinite), marquee (translateX 0 → -50% over 40s linear infinite) and marquee-reverse (translateX -50% → 0 over 40s linear infinite); expose them as animate-drift, animate-float, animate-marquee and animate-marquee-reverse.
  - In src/index.css add a @media (prefers-reduced-motion: reduce) block that sets animation: none on .animate-drift, .animate-float, .animate-marquee and .animate-marquee-reverse, and sets html { scroll-behavior: auto }. Otherwise html { scroll-behavior: smooth } with scroll-padding-top: 88px.
  - Import '@fontsource-variable/fraunces' and '@fontsource-variable/plus-jakarta-sans' at the top of src/main.tsx. Body uses font-sans, text-ink and bg-cream.
  - All copy, habit lists, calendar seed data, testimonials, prices and FAQ live in src/content.ts, keyed by section. Components only read from it.
  - Components in src/components/: Nav, Hero, PhoneFrame, screens/TodayScreen, screens/StreakScreen, screens/WeekScreen, screens/RemindersScreen, HabitMarquee, FeatureScroll, StreakDemo, Testimonials, Pricing, Faq, DownloadCta, Footer, Logo, DownloadButtons, BackgroundBlobs.
  - PhoneFrame takes a width prop (300 on desktop, 240 on mobile) and scales all inner dimensions proportionally with a CSS transform or a scale factor, keeping a 300:620 aspect ratio.
  - Use useReducedMotion() from motion/react in every component with JS-driven motion. When it returns true, skip entrance and float animations and swap screens instantly.
  - index.html: <title>Dewly — Tiny habits, kept gently</title> (brand from [BRAND]) and <link rel="icon" href="./favicon.svg" type="image/svg+xml">; put favicon.svg (the Logo mark) in public/.

## Variables
- [BRAND] — App name (default: "Dewly"). Short, invented, one word. Used in the nav wordmark, the title and the copy.
- [APP_PURPOSE] — What the app does, in one line (default: "a gentle habit tracker that celebrates small daily wins"). Drives the hero subhead, the feature copy and the in-phone screens.
- [AUDIENCE] — Who it is for (default: "busy people who keep restarting their routines"). Shapes the testimonials (roles), the FAQ and the tone of the reminders.
- [HABIT_EXAMPLES] — Four example items tracked in the app (default: "Drink water, Read 10 pages, Stretch, Walk outside"). Exactly four, comma-separated. They fill the Today screen, the first four marquee chips and the first three streak-demo chips. Pick a fitting Lucide icon for each.
- [PLUS_PRICE] — Paid plan price (default: "$4.99 a month or $35.99 a year"). Monthly and yearly prices. Compute the per-month yearly price and the savings percentage from them, rounded to whole percent.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/habit-tracker-app-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/habit-tracker-app-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/habit-tracker-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
