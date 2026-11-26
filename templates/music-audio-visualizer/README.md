# Music Audio Visualizer

> Reactive Three.js 3D audio visualizer with built-in Web Audio synth track, mic input, 5 beat-reactive scenes, band mixer, and PNG capture.

<a href="https://vibefather.ai/templates/music-audio-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/music-audio-visualizer/815af05d-90d7-46d6-86c8-24c1b04f88de/webp.cf4f29fefb.webp" width="100%" alt="Music Audio Visualizer — Reactive 3D WebGL Music Audio Visualizer built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/music-audio-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Transform sound into luminous Three.js geometry right in the browser. Start the built-in procedural 124 BPM Web Audio synth track with one click—or switch to live microphone input—to drive five reactive 3D scenes: Neon Tunnel, Wireframe Terrain, Particle Galaxy, Pulsing Rings, and Liquid Chrome Sphere. Features real FFT beat and onset detection, Auto Scene-Switch on energy drops, an interactive Bass / Mid / High Frequency Band Mixer with live level meters, four neon color themes (default Midnight #0B0820 with Magenta #FF2E88 and Cyan #29E3FF), Fullscreen mode, one-click PNG screenshot download, and a Keyboard Shortcut Sheet.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [App Landing](../../types/app-landing.md), [Interactive Toy](../../types/toy.md) |
| Style | [Aurora](../../styles/aurora.md), [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Generative / Canvas, 3D / WebGL, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + three + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/music-audio-visualizer?case=815af05d-90d7-46d6-86c8-24c1b04f88de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/music-audio-visualizer/815af05d-90d7-46d6-86c8-24c1b04f88de/shot_desktop.ad4bf2a8b9.webp" width="100%" alt="Music Audio Visualizer — SynapseWave (Midnight Neon), built by Gemini 4 Neon in Antigravity"></a><br>
<b>SynapseWave (Midnight Neon)</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/music-audio-visualizer?case=815af05d-90d7-46d6-86c8-24c1b04f88de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/music-audio-visualizer?case=6b44b8bd-118d-4a64-8bb3-681074957785&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/music-audio-visualizer/6b44b8bd-118d-4a64-8bb3-681074957785/shot_desktop.1fdc846c12.webp" width="100%" alt="Music Audio Visualizer — ChromaBeat (Solar Pulse), built by GPT-6.2 Sol in Codex"></a><br>
<b>ChromaBeat (Solar Pulse)</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Sol in Codex · <a href="https://vibefather.ai/templates/music-audio-visualizer?case=6b44b8bd-118d-4a64-8bb3-681074957785&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Visualizer Brand Name | SynapseWave |
| `[TRACK_TITLE]` | Demo Track Title | Midnight Pulse · 124 BPM Synth |
| `[DEFAULT_THEME]` | Default Color Theme | Midnight Neon |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add music-audio-visualizer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An electronic music producer: set [BRAND] to your artist name, [TRACK_TITLE] to your latest release, and use the PNG capture to export stills for social posts.
- A VJ or live visual performer: keep the Frequency Band Mixer open, set [DEFAULT_THEME] to match the venue lighting, and run microphone input from the room feed.
- A creative coding portfolio: set [BRAND] to your studio, describe the five scenes in the top status line, and link the dock credit area to your project write-up.
- A club night or listening party: set [BRAND] to the event name and [TRACK_TITLE] to the headline set, then leave Auto-Drop on so scenes change with the music.

## FAQ

### How do I add my own music to the Music Audio Visualizer instead of the built-in synth track?
The Music Audio Visualizer template ships with a procedural 124 BPM Web Audio synth track and a live microphone input, and it deliberately loads no external audio files. To play your own track, the audio engine needs a new source connected into the same Web Audio analyser that drives the five Three.js scenes. Change the audio source in the engine, keep the FFT band split, and the Neon Tunnel, Particle Galaxy and other scenes react to your music unchanged.

### What are the five 3D scenes in the Music Audio Visualizer template?
The Music Audio Visualizer renders five audio-reactive Three.js scenes: Neon Tunnel, Wireframe Terrain, Particle Galaxy, Pulsing Rings and Liquid Chrome Sphere. Each scene responds to Bass, Mid and High frequency bands from real FFT analysis, and you switch between them with the bottom dock or the number keys 1 to 5. Auto Scene-Switch on energy drops can move between scenes for you when Auto-Drop is enabled.

### Can I change the colors and brand name on the Music Audio Visualizer?
The Music Audio Visualizer uses three variables: BRAND sets the wordmark and deck title, TRACK_TITLE labels the built-in synth track, and DEFAULT_THEME picks the starting palette from Midnight Neon, Solar Flare, Emerald Cyber or Liquid Gold. The theme switcher in the top bar lets viewers cycle all four at runtime. The default Midnight palette pairs a deep violet-midnight stage with Electric Magenta and Laser Cyan.

### Does the Music Audio Visualizer need a microphone or can it run without one?
The Music Audio Visualizer runs fully without a microphone. The Play Demo Track button starts the built-in procedural Web Audio synth track, which drives every scene through the analyser. Microphone input is optional and requested only when a visitor chooses it, with graceful permission handling if access is denied. Audio only starts after a click, so browsers never block playback and nothing plays on page load.

### Can I save a still image from the Music Audio Visualizer?
Yes. The Music Audio Visualizer includes a one-click PNG Screenshot button in the top bar, and the Three.js renderer keeps its drawing buffer so the captured frame matches what is on screen. The S key triggers the same capture. The Keyboard Shortcut Sheet, opened with the question mark key, lists Space for play and pause, 1 to 5 for scenes, A for Auto-Drop, T for theme, S for screenshot and F for fullscreen.

### How do I build a music audio visualizer with AI?
Copy the prompt from this page or run npx vibefather add music-audio-visualizer, replace [BRAND], [TRACK_TITLE] and [DEFAULT_THEME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Music Audio Visualizer demo?
The SynapseWave (Midnight Neon) case was built by Gemini 4 Neon in Antigravity; the ChromaBeat (Solar Pulse) case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Music Audio Visualizer template use?
Music Audio Visualizer is a single-page site built with React, Tailwind CSS and Three.js, with generative / canvas, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Music Audio Visualizer template for a client or a business?
The Music Audio Visualizer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Music Audio Visualizer template work on mobile?
Yes. Every Music Audio Visualizer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Music Audio Visualizer on VibeFather](https://vibefather.ai/templates/music-audio-visualizer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
