# Interactive 3D Globe Travel Journal <sup>PRO</sup>

> A travel writer's journal where routes arc across a dotted 3D globe as readers scroll from stop to stop.

<a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/interactive-3d-globe-travel-journal/4ffb6fa3-d2a0-4889-ac20-7d5a52ffd676/webp.5ace2f5df8.webp" width="100%" alt="Interactive 3D Globe Travel Journal — 3D Globe Travel Blog with Scroll Routes built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page travel journal built around a dotted 3D globe that follows the reader. The writer's trip is stored as six stops in one content file; as each journal entry scrolls past, the globe turns to that city, a warm amber route arcs in from the previous stop with a small light running at its tip, and the city pin starts to pulse. Click any pin, or the link under an entry, and a photo story card opens with a large film-grain photograph, the place name, its coordinates, a short story and buttons to step to the next or previous city. The look is a night atlas: deep ink-navy, a globe made of soft off-white land dots, one amber accent for every route and pin, and a day/night line that drifts slowly across the globe with faint city lights on the dark side. Headlines use an editorial serif with italics, body text a quiet sans, and coordinates and trip days a small mono. A stats strip works out countries, cities and great-circle kilometers from the route data, and a legend filters the arcs by leg of the trip. On phones, and for readers who prefer reduced motion, three.js is never loaded. A flat dotted map in SVG takes its place, with the same arcs drawing in as entries scroll into view, so the page stays light and readable. It suits travel writers, photographers, expedition teams, slow-travel newsletters and anyone telling a story that moves from place to place. To adapt it, change the journal name, the writer, the journey and the focus of the writing, then replace the six stops, coordinates, photos and stories in the content file. The globe, arcs, stats and map rebuild from that data, and nothing else needs to change.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Personal Site](../../types/personal.md), [Blog](../../types/blog.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Tailwind CSS 3.4 + three + gsap + lenis |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=4ffb6fa3-d2a0-4889-ac20-7d5a52ffd676&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-3d-globe-travel-journal/4ffb6fa3-d2a0-4889-ac20-7d5a52ffd676/shot_desktop.3fb91b783a.webp" width="100%" alt="Interactive 3D Globe Travel Journal — Overland travel writer, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Overland travel writer</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=4ffb6fa3-d2a0-4889-ac20-7d5a52ffd676&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=922e71e4-b46c-4789-ab0c-3c8a5b8f211e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-3d-globe-travel-journal/922e71e4-b46c-4789-ab0c-3c8a5b8f211e/shot_desktop.7f7d24c258.webp" width="100%" alt="Interactive 3D Globe Travel Journal — Pacific sailing journal, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Pacific sailing journal</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=922e71e4-b46c-4789-ab0c-3c8a5b8f211e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=153af059-3fb3-4f8d-886c-c32838a89e77&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-3d-globe-travel-journal/153af059-3fb3-4f8d-886c-c32838a89e77/shot_desktop.40a8fab5fb.webp" width="100%" alt="Interactive 3D Globe Travel Journal — Overland travel writer, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Overland travel writer</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/interactive-3d-globe-travel-journal?case=153af059-3fb3-4f8d-886c-c32838a89e77&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Journal name | Slow Meridian |
| `[WRITER]` | Writer's name | Noor Halvorsen |
| `[JOURNEY]` | The journey | eleven months overland from Lisbon to Hanoi |
| `[FOCUS]` | What the writing is about | night trains, market kitchens and the people who keep them running |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo travel photographer: set the journal name and writer to your own, swap the six stops for your shoot locations and replace each story with the frame you made there.
- An expedition team: use the journey phrase for your route and season, keep the stats strip for countries and kilometers, and rewrite each stop as a field dispatch from the team.
- A slow-travel newsletter: point the signup section at your mailing list, set the focus to your beat, and let the globe arcs show readers the trip your letters follow.
- A sailing or overland journal: change the journey to your crossing, replace the six stops with harbors or border towns, and keep the amber route arcs as the spine of the story.

## FAQ

### How do I change the six stops, cities and coordinates in the Interactive 3D Globe Travel Journal?
The Interactive 3D Globe Travel Journal keeps the whole trip in one content file: journal name, writer, journey, focus, and every stop with its city, coordinates, photo and story. Replace the six stops and their real coordinates there, and the globe, amber arcs, stats strip and flat map all rebuild from that data. Nothing in the layout or motion needs editing.

### Can I use the Interactive 3D Globe Travel Journal for a client's travel brand or a paid newsletter?
Commercial and client work with the Interactive 3D Globe Travel Journal needs Pro. Pro templates show the brief, stack and variables publicly and give Pro members the full prompt plus the source code of the demos. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0.

### What happens to the 3D globe on phones and for readers who prefer reduced motion?
The Interactive 3D Globe Travel Journal never loads three.js on phones or when a reader has reduced motion turned on. A flat dotted map in SVG takes its place, drawing the same amber route arcs as entries scroll into view, so the page stays light and readable. The page also swaps between the globe and the flat map if those settings change while it is open.

### How does the Interactive 3D Globe Travel Journal turn scrolling into a journey?
As each journal entry scrolls past, the globe in the Interactive 3D Globe Travel Journal turns to that city, a warm amber route arcs in from the previous stop with a small light running at its tip, and the city pin pulses. A day/night line drifts slowly across the globe. Clicking a pin or the link under an entry opens a photo story card with the place name, coordinates and a short story.

### What do I need to change first to make the Interactive 3D Globe Travel Journal my own?
Start with the four variables: the journal name, the writer's name, the journey as one lowercase phrase such as the duration, mode and start and end points, and the focus of the writing. Then replace the six stops, coordinates, photos and stories in the content file, and rewrite the hero, about and signup copy to match your voice.

### How do I build an interactive 3D globe travel journal with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add interactive-3d-globe-travel-journal, replace [BRAND], [WRITER], [JOURNEY] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interactive 3D Globe Travel Journal demo?
The Overland travel writer case was built by Claude Opus 5.5 in Cursor; the Pacific sailing journal case was built by Claude Sonnet 5.5 in Cursor; the Overland travel writer case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Interactive 3D Globe Travel Journal template use?
Interactive 3D Globe Travel Journal is a single-page site built with GSAP, Three.js and Tailwind CSS, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Interactive 3D Globe Travel Journal template free to use?
Interactive 3D Globe Travel Journal is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Interactive 3D Globe Travel Journal template work on mobile?
Yes. Every Interactive 3D Globe Travel Journal build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Interactive 3D Globe Travel Journal on VibeFather](https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
