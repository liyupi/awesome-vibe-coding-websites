# Music Audio Visualizer

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a reactive Three.js 3D music audio visualizer titled [BRAND] featuring a built-in synthesized Web Audio demo track ([TRACK_TITLE], starting on click) plus optional live Microphone input (with graceful permission handling). Render five distinct audio-reactive Three.js scenes with real AnalyserNode FFT beat and onset detection: (1) Neon Tunnel, (2) Wireframe Terrain, (3) Particle Galaxy, (4) Pulsing Rings, and (5) Liquid Chrome Sphere. Provide Auto Scene-Switch on drops, a Frequency Band Mixer (Bass, Mid, High gain sliders + live level bars), four switchable color themes defaulting to [DEFAULT_THEME] (Midnight #0B0820, Magenta #FF2E88, Electric Cyan #29E3FF), Fullscreen toggle, one-click PNG Screenshot download, and a Keyboard Shortcut Sheet modal (`Space` Play/Pause, `1–5` Scenes, `A` Auto-Drop, `T` Theme, `S` Screenshot, `F` Fullscreen, `?` Shortcuts). Before any sound plays, render a lush, glowing still 3D Neon Tunnel scene immediately on frame one with a clear Play Demo Track button.

- Audience: Musicians, VJs, creative coders, and electronic music fans looking for a browser-native visual performance deck.
- Goal: Deliver an instant luminous 3D visual anchor on frame one, then respond explosively and smoothly to synthesized or live microphone audio at 60fps.
- Tone: Electric midnight stage-visual precision—minimal translucent HUD chrome letting neon 3D geometry command the entire viewport.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600) in src/main.tsx.
  - Build the procedural Web Audio API 124 BPM electronic synth sequencer, optional microphone stream connector, FFT Bass/Mid/High analyzer, and beat/onset detector in src/audio/audioEngine.ts.
  - Build all 5 reactive Three.js 3D scenes (Neon Tunnel, Wireframe Terrain, Particle Galaxy, Pulsing Rings, Liquid Chrome Sphere) in src/sim/visualizerEngine.ts with preserveDrawingBuffer: true (for instant frame-1 beauty and crisp PNG screenshot capture) and capped DPR (1.5 mobile / 2 desktop).
  - Keep scene metadata, 4 color theme palettes, keyboard shortcuts, and brand variables in src/data/visualizerData.ts.

## Variables
- [BRAND] — Visualizer Brand Name (default: "SynapseWave"). Audio visualizer deck title
- [TRACK_TITLE] — Demo Track Title (default: "Midnight Pulse · 124 BPM Synth"). Label for the built-in procedural Web Audio synth track
- [DEFAULT_THEME] — Default Color Theme (default: "Midnight Neon"). Initial color palette name
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/music-audio-visualizer in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Midnight Stage `#0B0820` — Deep violet-midnight 3D stage background
- Electric Magenta `#FF2E88` — Primary neon rings, bass flash, and Play CTA
- Laser Cyan `#29E3FF` — Secondary wireframe, mid/high frequency shimmer, and active indicators
- Frost Glass `#161233` — Translucent stage HUD pills and mixer drawer
- Pure Chalk `#F8FAFC` — Crisp high-contrast typography and shortcut badges

### Typography
- Brand Wordmark & Scene Titles: Space Grotesk (OFL), weights 600/700
- Controls & Shortcut Descriptions: Inter (OFL), weights 400/500/600
- BPM, Frequency Gains & Key Caps: JetBrains Mono (OFL), weights 500/600

### Layout & motion
- Spacing: Full-bleed 100dvh Three.js stage with compact translucent top telemetry/utility bar, centered lower Play pill before sound starts, collapsible Frequency Band Mixer card, and crisp 5-scene bottom dock fitting 1440×900 and 390×844 with zero overflow.
- Radius: 14px frosted midnight HUD cards; full-pill scene switcher and Play CTA.
- Motion: Lush glowing Neon Tunnel rendered synchronously on frame one before audio plays.
- Motion: Real-time 60fps geometry deformation, tunnel thrust, galaxy radial expansion, and liquid-chrome displacement driven by live Bass/Mid/High FFT bands.
- Motion: Automatic scene switching on rhythmic energy drops when Auto-Drop is enabled.
- Motion: Respect prefers-reduced-motion by softening camera sway and pulse amplitude while keeping audio meters and scene switching active.
- Imagery: 100% procedural Three.js neon 3D geometry, glowing particles, and metallic shaders—zero external media files.

## Pages & Sections
### [BRAND] · Reactive 3D Music Audio Visualizer (`#/visualizer`)
1. **Full-Bleed 3D Reactive Stage & Stage Control Deck** — Full-viewport Three.js stage opening synchronously on a luminous Neon Tunnel frame in Midnight (#0B0820), Magenta (#FF2E88), and Cyan (#29E3FF). Top translucent bar shows [BRAND], active track/mic status (`[TRACK_TITLE]`), live 3-band Bass/Mid/High mini meter, Beat Pulse LED, Auto-Switch on Drops toggle, Theme switcher (`Midnight Neon`, `Solar Flare`, `Emerald Cyber`, `Liquid Gold`), Frequency Mixer toggle, PNG Screenshot capture button, Fullscreen toggle, and Keyboard Shortcut Sheet (`?`) button. Before playback starts, a crisp central Play Demo Track + Use Microphone launch pill invites immediate audio interaction without obscuring the 3D scene. Bottom floating dock switches instantly across all 5 scenes (`1 Neon Tunnel`, `2 Wireframe Terrain`, `3 Particle Galaxy`, `4 Pulsing Rings`, `5 Liquid Chrome`) with subtle credit link.
   Layout: Full-viewport `h-dvh` stage with zero scrollbars and zero horizontal overflow on 1440×900 desktop and 390×844 mobile.
   Motion: 60fps beat-reactive Three.js visuals synced to Web Audio FFT.

## Assets


## Don'ts
- Never load external MP3/audio files, external 3D models, or CDN fonts.
- Never show a blank dark screen before playback starts—render a lush, glowing 3D Neon Tunnel on frame one.
- Never autoplay audio without a user click (comply with browser autoplay policy).
- Never print calendar dates or 4-digit years anywhere in the HUD.
- Never allow horizontal overflow on 390×844 mobile or clip elements with clip-path.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-audio-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
