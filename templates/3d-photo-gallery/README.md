# 3D Photo Gallery

> An endless 3D corridor of framed photographs you walk through, with rooms, a lightbox and full credits.

<a href="https://vibefather.ai/templates/3d-photo-gallery?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/3d-photo-gallery/bb1823f3-6052-4734-9df0-39a226355199/webp.3135fe0a9c.webp" width="100%" alt="3D Photo Gallery — Infinite 3D Photo Gallery with Lightbox built by Claude Opus 5.5, Claude Sonnet 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/3d-photo-gallery?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Endless Hall is a one-page online exhibition built with three.js. Twenty-four framed photographs hang along a dark corridor that wraps around itself, so visitors can scroll, drag or swipe in either direction and never reach a wall. The works are split into four named rooms, each introduced by a large italic title floating in the fog, and a slim heads-up frame keeps track of the current room, the work number and progress through the loop. Clicking a photograph flies the camera up to it and opens a letterboxed detail view with the full title, maker, date, process, collection and license, plus a link to the source record. A separate lightbox shows the image at full size with click-to-zoom and keyboard paging, and an Index panel jumps straight to any work. The default case is a small archive of nineteenth-century photography, and every image is a real CC0 photograph from a museum open-access collection, downloaded into the project and credited in ASSETS.md. It suits photographers with a finished series, small museums and archives, print shops, and anyone who wants a collection to feel like a place rather than a grid. Design details: near-black fog, warm off-white type, Cormorant Garamond italics for titles, IBM Plex Mono for labels, film grain, a vignette, drifting dust, planes that bend slightly with speed, and a custom ring cursor. Motion calms down fully under reduced-motion settings, and browsers without WebGL get a clean catalogue page instead. To adapt it, change the name, exhibition title, room names and visiting line, then replace the 24 photographs and their captions in one content file; the corridor, rooms and detail view rebuild from that data.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Cursor Effects, 3D / WebGL |
| Stack | Vite 5 + TypeScript + three.js + Plain CSS, custom properties + three |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-photo-gallery?case=bb1823f3-6052-4734-9df0-39a226355199&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-photo-gallery/bb1823f3-6052-4734-9df0-39a226355199/shot_desktop.353744dcc5.webp" width="100%" alt="3D Photo Gallery — Photography archive exhibition, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Photography archive exhibition</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/3d-photo-gallery?case=bb1823f3-6052-4734-9df0-39a226355199&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-photo-gallery?case=3acaa987-5182-4c2f-aa45-ceb89403a5de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-photo-gallery/3acaa987-5182-4c2f-aa45-ceb89403a5de/shot_desktop.025b5c2cd1.webp" width="100%" alt="3D Photo Gallery — Landscape print shop, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Landscape print shop</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/3d-photo-gallery?case=3acaa987-5182-4c2f-aa45-ceb89403a5de&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/3d-photo-gallery?case=dc09a434-d7f5-413a-b789-1f40dd8a8342&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/3d-photo-gallery/dc09a434-d7f5-413a-b789-1f40dd8a8342/shot_desktop.7e114b16c7.webp" width="100%" alt="3D Photo Gallery — Photography archive exhibition, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Photography archive exhibition</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/3d-photo-gallery?case=dc09a434-d7f5-413a-b789-1f40dd8a8342&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Archive, museum or studio name | Halvard Archive |
| `[EXHIBITION]` | Exhibition or collection title | First Light |
| `[COLLECTION_NOTE]` | One-line description of the collection | Early photographs of water, stone, leaf and sky, 1841–1900 |
| `[ROOMS]` | Four room names, in walking order | Tide, Stone, Leaf, Sky |
| `[VISIT_LINE]` | Practical line: address, hours or price | Reading room: 9 Cinder Wharf, Port Aldery · Thu–Sun 11:00–17:00 · Free entry |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add 3d-photo-gallery` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A regional museum: set BRAND to the institution, ROOMS to four periods in your collection and VISIT_LINE to your opening hours and ticket price, then load your own digitised works.
- A landscape print shop: use the four rooms for series such as coast, forest, field and mountain, and put your studio address and order line in VISIT_LINE.
- A photographer with a finished series: set EXHIBITION to the series title, split the 24 frames into four chapters in ROOMS and write COLLECTION_NOTE as the one-line statement.
- A university special collection: name the archive in BRAND, use ROOMS for donor or subject groupings and keep the license field filled for each digitised item.

## FAQ

### How do I replace the 24 photographs and captions in the 3D Photo Gallery?
The 3D Photo Gallery template keeps all 24 photographs and every caption field in one content file. Put your own images in the photos folder using the same file names, then edit each work's title, maker, date, process, collection and license in that file. The corridor, the four rooms, the detail view and the Index panel all rebuild from that data, so you never touch the scene code.

### What does the 3D Photo Gallery include besides the walkable corridor?
The 3D Photo Gallery template includes an endless corridor of 24 framed photographs, four named rooms with large italic titles, a heads-up frame showing the current room, work number and progress, a click-to-open detail view with full caption, credit and license, a lightbox with zoom and keyboard paging, an Index panel, an About panel and a catalogue fallback for browsers without WebGL. Every image is downloaded into the project and credited.

### How do I set up the rooms and exhibition title for my own collection?
The 3D Photo Gallery template exposes five variables: BRAND, EXHIBITION, ROOMS, VISIT_LINE and COLLECTION_NOTE. Set ROOMS to exactly four single words in walking order; works 01 to 06 hang in the first room, 07 to 12 in the second, 13 to 18 in the third and 19 to 24 in the fourth. VISIT_LINE carries your address, hours or entry price, and COLLECTION_NOTE describes the collection in one line.

### What happens if a visitor's browser cannot run WebGL or reduced motion is on?
The 3D Photo Gallery template serves a clean catalogue page when WebGL is unavailable, so every work stays browsable as a still list. When a visitor has reduced motion enabled, the corridor drops inertia and momentum, planes stop bending, the field-of-view kick is removed, grain and dust hold still, and camera flights become short crossfades instead of movement through space.

### What should I change first to turn the 3D Photo Gallery into my own exhibition?
Start with BRAND and EXHIBITION so the loader, wordmark and page title carry your name, then set the four ROOMS names and the VISIT_LINE. After that, swap the 24 photographs and their captions in the content file. The template ships with a small archive of nineteenth-century CC0 photography as a working example, so replace those images and their credits before publishing.

### How do I build a 3D photo gallery with AI?
Copy the prompt from this page or run npx vibefather add 3d-photo-gallery, replace [BRAND], [EXHIBITION], [COLLECTION_NOTE] and [ROOMS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the 3D Photo Gallery demo?
The Photography archive exhibition case was built by Claude Opus 5.5 in Cursor; the Landscape print shop case was built by Claude Sonnet 5.5 in Cursor; the Photography archive exhibition case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the 3D Photo Gallery template use?
3D Photo Gallery is a single-page site built with Plain HTML and Three.js, with drag & physics, cursor effects and 3d / webgl. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the 3D Photo Gallery template for a client or a business?
The 3D Photo Gallery prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the 3D Photo Gallery template work on mobile?
Yes. Every 3D Photo Gallery build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Nocturne — an endless 3D corridor gallery (Opus 5.5 showcase by @ohmiler)](https://ohmiler.github.io/opus-5.5/infinite-gallery/) by @ohmiler
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [3D Photo Gallery on VibeFather](https://vibefather.ai/templates/3d-photo-gallery?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
