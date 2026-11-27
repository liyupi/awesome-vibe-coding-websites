# Podcast & Audio Player App <sup>PRO</sup>

> Midnight plum responsive podcast PWA with Web Audio playback, chapters, and drag queue.

<a href="https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/podcast-audio-player-app/2779ba9b-a795-4625-9ea9-9ba42d66f46c/webp.86adba4a07.webp" width="100%" alt="Podcast &amp; Audio Player App — Dark Mobile-First Podcast Player PWA built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Podcast & Audio Player App is a responsive mobile-first audio listening PWA crafted for independent podcast networks, audio essayists, and listener apps. On mobile screens under 768px it behaves like a native audio app with a bottom four-tab bar covering Listen Now, Library, Discover, and Queue, paired with a persistent bottom mini-player and an expandable full-screen Now Playing sheet. On tablets and desktops it expands cleanly into a left navigation sidebar, wide show workspace, and persistent live Up Next queue rail without any artificial phone frame. The player ships with genuinely playable Web Audio API synthesized demo segments—an ambient intro pad and a warm talk-rhythm pulse—so play/pause, scrubbing, -15s/+30s skip buttons, 0.75x–2.0x speed presets, volume control, and sleep timer countdowns work completely offline. Six cohesive stylized 3D podcast cover artworks anchor the shows across a rich midnight plum (#120F1D) and elevated violet (#1C172B) surface system accented with warm lilac (#A78BFA) and coral pink (#F472B6). Subscriptions, episode bookmarks, queue ordering, and playback preferences persist in localStorage. Swap the brand, listener name, featured show, and default playback speed in src/content.ts to tailor the player to any audio catalog.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Mobile App](../../types/mobile-app.md) |
| Style | [Aurora](../../styles/aurora.md), [Dark](../../styles/dark.md), [Editorial](../../styles/editorial.md) |
| Effects | Drag & Physics, Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-audio-player-app?case=2779ba9b-a795-4625-9ea9-9ba42d66f46c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/podcast-audio-player-app/2779ba9b-a795-4625-9ea9-9ba42d66f46c/shot_desktop.f5b3cf10a3.webp" width="100%" alt="Podcast &amp; Audio Player App — Indie design &amp; tech podcast network, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Indie design &amp; tech podcast network</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/podcast-audio-player-app?case=2779ba9b-a795-4625-9ea9-9ba42d66f46c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/podcast-audio-player-app?case=b5d82b80-cb7a-41b3-9cb4-85cfc6ca36ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/podcast-audio-player-app/b5d82b80-cb7a-41b3-9cb4-85cfc6ca36ae/shot_desktop.32b9396cad.webp" width="100%" alt="Podcast &amp; Audio Player App — Nocturne soundscapes &amp; audio essays, built by GLM-5.4 in ZCode"></a><br>
<b>Nocturne soundscapes &amp; audio essays</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/podcast-audio-player-app?case=b5d82b80-cb7a-41b3-9cb4-85cfc6ca36ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Podcast app name | LoomCast |
| `[LISTENER_NAME]` | Listener display name | Nora Quinn |
| `[FEATURED_SHOW]` | Featured hero podcast | Signal & Craft |
| `[DEFAULT_SPEED]` | Default playback speed | 1.0x |
| `[QUEUE_TAGLINE]` | App subtitle | Independent voices on design, cities & sound |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An independent podcast network: set the brand and queue tagline, make your flagship show the featured hero, and swap the six covers for your own artwork.
- An audio essayist: keep the warm midnight-plum palette, rename the tabs around your essays, and set the default speed to your preferred listening pace.
- A listener companion for a music label: point the featured show at your release series and use the Discover tab for label playlists and artist interviews.
- A creator portfolio for a sound designer: replace episodes with case studies, keep the synthesized demo playback, and use the library for clips and reels.

## FAQ

### Does the Podcast & Audio Player App template actually play audio, or is it just a visual mockup?
The Podcast & Audio Player App template plays real audio through the Web Audio API, synthesized in the browser rather than loaded from files. Play and pause, scrubbing, minus 15 and plus 30 second skips, speed presets from 0.75x to 2.0x, volume and the sleep timer all work offline. The demo segments are an ambient intro pad and a warm talk-rhythm pulse, so you can test the whole player before connecting your own catalog.

### How do I change the podcast name, listener greeting and featured show in the player?
The Podcast & Audio Player App template keeps its copy in one content file, so you set the brand name, listener name, featured show, default playback speed and queue tagline in a single place. Rewrite the headlines, paragraphs and labels in the same tone and length, then replace the six cover artworks with your own show art. Everything else, including the layout, colors and motion, stays as designed.

### Can I use the Podcast & Audio Player App for a client podcast network or a commercial launch?
The Podcast & Audio Player App template is a Pro template, so commercial and client work needs Pro. Pro members get the full prompt and the source code of the demos, while the brief, stack and variables are public. Free templates on VibeFather cover personal, non-commercial use only, and every DESIGN.md is free under CC BY-NC 4.0.

### What is the drag queue and how does the Up Next panel work on desktop?
The Podcast & Audio Player App template includes a queue where you reorder upcoming episodes by dragging, and the order persists in the browser between visits. On tablets and desktops the queue appears as a persistent Up Next rail beside the wide show workspace, while on phones the same queue lives in its own tab behind a bottom mini-player. Subscriptions, bookmarks and playback preferences are also saved locally.

### Which AI coding tools can build this podcast player from the prompt?
The published prompt has been used to build live demos of the Podcast & Audio Player App template with Gemini 4 Neon in Antigravity, for an indie design and tech podcast network, and with GLM-5.4 in ZCode, for a soundscapes and audio essays catalog. You can run the same prompt in Claude Code, Codex, Cursor, Windsurf, GitHub Copilot or Gemini CLI. The VibeFather model comparison pages show how the demos differ.

### How do I build a podcast & audio player app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add podcast-audio-player-app, replace [BRAND], [LISTENER_NAME], [FEATURED_SHOW] and [DEFAULT_SPEED] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Podcast & Audio Player App demo?
The Indie design & tech podcast network case was built by Gemini 4 Neon in Antigravity; the Nocturne soundscapes & audio essays case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Podcast & Audio Player App template use?
Podcast & Audio Player App is a single-page site built with React and Tailwind CSS, with drag & physics, page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Podcast & Audio Player App template free to use?
Podcast & Audio Player App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Podcast & Audio Player App template work on mobile?
Yes. Every Podcast & Audio Player App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Podcast & Audio Player App on VibeFather](https://vibefather.ai/templates/podcast-audio-player-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
