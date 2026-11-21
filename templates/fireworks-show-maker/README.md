# Fireworks Show Maker

> Compose, preview, and share a luminous fireworks show above an original city skyline.

<a href="https://vibefather.ai/templates/fireworks-show-maker?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/fireworks-show-maker/dc008a9a-7ae1-4a33-ae48-819de7e743e8/webp.af79390b70.webp" width="100%" alt="Fireworks Show Maker — Interactive Fireworks Timeline and Canvas built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/fireworks-show-maker?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Fireworks Show Maker is a single-page creative tool for composing a small pyrotechnic performance in the browser. It is designed for creators, event concepts, classroom demonstrations, and anyone who enjoys an interactive canvas rather than a static gallery. An original waterfront skyline, glowing particles, and reflected light make the editor feel like a complete scene from the first screen.

The workflow stays compact: choose a shell, give it one of six named colors, place it on three timeline tracks, then adjust its burst position and timing. Peony, ring, willow, comet, and crackle shells have distinct geometry and movement. The starter show provides a useful sequence to edit, while drag controls, keyboard nudges, duplication, deletion, and a scrubbable playhead make the timeline practical rather than decorative.

Playback uses a seeded Canvas 2D simulation with gravity, drag, fading trails, and water reflections. Web Audio supplies synthesized launches, bursts, and crackles after a user gesture, so the project needs no sound downloads or external services. A share action stores the show in the URL hash and copies a reproducible link; nothing is uploaded and no account is required.

The default content follows a fictional harbor celebration. Variables can change the studio name, show title, skyline name, audience, and duration for a lakeside gathering, festival finale, or another invented setting. The layout adapts to touch screens with a compact canvas, horizontally scrollable timeline, and bottom-sheet inspector. Reduced-motion behavior, keyboard alternatives, capped particle counts, and local assets keep the static build approachable and self-contained for first-time visitors and experienced timeline editors alike.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Generative / Canvas, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Vanilla CSS + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/fireworks-show-maker?case=dc008a9a-7ae1-4a33-ae48-819de7e743e8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fireworks-show-maker/dc008a9a-7ae1-4a33-ae48-819de7e743e8/shot_desktop.39d36b7dc2.webp" width="100%" alt="Fireworks Show Maker — Harbor celebration, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Harbor celebration</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/fireworks-show-maker?case=dc008a9a-7ae1-4a33-ae48-819de7e743e8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/fireworks-show-maker?case=7925ddcf-6884-4b63-89a0-623ef3818dee&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/fireworks-show-maker/7925ddcf-6884-4b63-89a0-623ef3818dee/shot_desktop.04b6b54455.webp" width="100%" alt="Fireworks Show Maker — Lakeside solstice, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Lakeside solstice</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/fireworks-show-maker?case=7925ddcf-6884-4b63-89a0-623ef3818dee&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio or project name | Nightloom Studio |
| `[SHOW_TITLE]` | Show title | Harbor Afterglow |
| `[CITY_NAME]` | Fictional skyline name | Port Aurelia |
| `[AUDIENCE]` | Audience | celebration designers and creative coders |
| `[SHOW_DURATION]` | Show duration in seconds | 24 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add fireworks-show-maker` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A wedding planner: set BRAND to the studio, SHOW_TITLE to the couple's names and CITY_NAME to the venue's invented harbor, then retime the starter show to the reception finale.
- A classroom teacher: write AUDIENCE for students, shorten SHOW_DURATION to fit a lesson, and use the shell library to demonstrate timing, color and burst position.
- A festival organizer: name the skyline after your fictional festival grounds, raise SHOW_DURATION for a longer finale, and share the URL hash link as the public preview.
- A creative coding workshop: keep the default studio name, point AUDIENCE at first-time coders, and let participants duplicate and reorder events on the three timeline tracks.

## FAQ

### How do I change the city skyline and show title in the Fireworks Show Maker?
The Fireworks Show Maker template keeps its content in one editable file, so you set CITY_NAME to your invented waterfront place and SHOW_TITLE to the celebration name, then rewrite the header, document title and helper copy to match. The skyline itself is drawn in code as an original cluster of towers, antennas and warm windows, so you adjust the scene there rather than swapping in a photograph.

### Can I share a fireworks show I composed without hosting a server or making an account?
Yes. The Fireworks Show Maker stores the whole show as versioned data in the URL hash and the Share show button copies a reproducible link. Nothing is uploaded and no account is needed, and the seeded simulation means the recipient sees the same shell geometry and timing when they open the link.

### What shell types and colors can I use in the Fireworks Show Maker?
The Fireworks Show Maker offers five shells: Peony for an even radial bloom, Ring for a halo with an inner echo, Willow for long falling golden trails, Comet for five staggered mini-blooms, and Crackle. Each shell takes one of six named colors, and its burst position and timing are set on three timeline tracks with drag controls, keyboard nudges and a scrubbable playhead.

### Is the Fireworks Show Maker free to use and what does Pro add?
The Fireworks Show Maker is a free template, so its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives Pro members the full prompt and the source code of the demos. The live page shows the brief, stack and variables publicly either way.

### Does the fireworks show make sound, and how do I keep it accessible?
The Fireworks Show Maker synthesizes launches, bursts and crackles with Web Audio after an explicit user gesture, so there are no audio files to download. For accessibility it respects reduced-motion by skipping autoplay and showing a static tableau, offers keyboard alternatives to dragging, caps particle counts, and keeps all assets local in a static build.

### How do I build a fireworks show maker with AI?
Copy the prompt from this page or run npx vibefather add fireworks-show-maker, replace [BRAND], [SHOW_TITLE], [CITY_NAME] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Fireworks Show Maker demo?
The Harbor celebration case was built by Kimi K3.1 Pro in Kimi Code; the Lakeside solstice case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Fireworks Show Maker template use?
Fireworks Show Maker is a single-page site built with React, with drag & physics, generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Fireworks Show Maker template for a client or a business?
The Fireworks Show Maker prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Fireworks Show Maker template work on mobile?
Yes. Every Fireworks Show Maker build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Fireworks Show Maker on VibeFather](https://vibefather.ai/templates/fireworks-show-maker?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
