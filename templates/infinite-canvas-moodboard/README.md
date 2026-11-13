# Infinite Canvas Moodboard

> A studio table you can pan, zoom and rearrange: boards, notes and swatches that move like real paper.

<a href="https://vibefather.ai/templates/infinite-canvas-moodboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/infinite-canvas-moodboard/4e8dfefa-b5b5-4349-b33f-ecf48bd92886/webp.e11a6965a6.webp" width="100%" alt="Infinite Canvas Moodboard — Pannable Moodboard Canvas with Minimap built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/infinite-canvas-moodboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template is a single-screen moodboard tool for a creative studio. Instead of a scrolling page, the visitor lands on a large table already covered in five named boards of photographs, sticky notes and color swatches, and can start moving them right away. The table is a saturated green cutting mat with a fine dot grid, and the pieces on it look like paper: slightly rotated, overlapping, with soft layered shadows and strips of tape. Drag the table and it keeps gliding after you let go. Scroll or pinch and the zoom stays anchored under your cursor or fingers. Pick up a photo and it lifts on a deeper shadow; throw it and it slides, then settles with a small spring. Three controls hold the tool together. A board list with search moves the camera smoothly to fit any board, pulling back a little on long trips. A minimap shows every piece and a viewport rectangle you can drag or click. A tag rail sends all 36 pieces flying in staggered arcs into labeled groups, then returns each one to its exact spot. It suits art directors, interior and brand designers, studios presenting research to a client, and portfolio builders who want visitors to explore work rather than scroll past it. The camera is hand-written, with ordinary DOM under one transform and no canvas SDK. To adapt it, change the studio name, the project, the direction line, the five board names and the five tags, then have your agent rewrite the notes, captions and swatch names. The positions, sizes and images stay, so the table keeps its composition. You can also swap the sample images for your own research. It works on phones too, with one-finger panning, pinch zoom and a collapsed board drawer.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Agency](../../types/agency.md), [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + gsap + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/infinite-canvas-moodboard?case=4e8dfefa-b5b5-4349-b33f-ecf48bd92886&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/infinite-canvas-moodboard/4e8dfefa-b5b5-4349-b33f-ecf48bd92886/shot_desktop.70a45f0b69.webp" width="100%" alt="Infinite Canvas Moodboard — Coastal hotel rebrand, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Coastal hotel rebrand</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/infinite-canvas-moodboard?case=4e8dfefa-b5b5-4349-b33f-ecf48bd92886&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/infinite-canvas-moodboard?case=25f3132f-88da-4688-86b4-90b12906fb31&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/infinite-canvas-moodboard/25f3132f-88da-4688-86b4-90b12906fb31/shot_desktop.b13a37fe91.webp" width="100%" alt="Infinite Canvas Moodboard — Film production design, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Film production design</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/infinite-canvas-moodboard?case=25f3132f-88da-4688-86b4-90b12906fb31&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Quince Yard |
| `[PROJECT]` | Project on the table | Samphire Point Hotel |
| `[DIRECTION]` | Creative direction line | Salt, rope and low light: a hotel that feels like the tide just went out. |
| `[BOARDS]` | Five board names | Arrival, Rooms, Tide Bar, Print, Uniforms |
| `[TAGS]` | Five tag names | Texture, Light, Objects, Pattern, Color |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add infinite-canvas-moodboard` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An interior design studio: set BRAND to your practice, PROJECT to a current residence, rename the five boards to rooms, and rewrite the notes as material and lighting decisions.
- A brand agency pitching a rebrand: point PROJECT at the client, use the boards for logo, type, palette, packaging and photography, and let the tag rail group research by motif.
- A photographer's portfolio: replace the sample images with your own series, keep the paper mats and captions for titles and formats, and set DIRECTION to one line about your approach.
- A film production designer: set BOARDS to sets, props, palette, costumes and references, and rewrite the sticky notes as budget and sourcing remarks for the art department.

## FAQ

### How do I change the studio name, project and board names on the Infinite Canvas Moodboard?
The Infinite Canvas Moodboard template keeps its copy in one content file, and the five variables BRAND, PROJECT, DIRECTION, BOARDS and TAGS drive the whole table. Set BRAND to your studio, PROJECT to the job, DIRECTION to one sentence of creative direction, then list exactly five board names in order and five tag names. Ask your agent to rewrite every note, caption, swatch name and alt text to match, while leaving item positions, sizes, rotations and images untouched so the composition holds.

### What does the tag rail do on the Infinite Canvas Moodboard and can I rename the tags?
The tag rail sends all 36 pieces flying in staggered arcs into labeled groups, then returns each one to its exact spot. The five tags map to fixed slots: surfaces, atmosphere, things, repeating motifs and palette. You can rename TAGS to anything, but keep the slot meaning so the grouping still makes sense. Renaming Texture, Light, Objects, Pattern and Color to your own vocabulary works as long as the pieces assigned to each slot still fit that idea.

### Can I replace the sample photographs with my own research images?
Yes. The Infinite Canvas Moodboard template ships with 18 photographs on paper mats and references them from a public images folder using relative paths. Swap those files for your own studio research, keep the same file names or update the paths in the content file, and the mats, rotations and shadows stay as they are. Ask your agent to keep every image non-draggable and non-interactive so dragging the paper still works.

### How do visitors move around the Infinite Canvas Moodboard?
Visitors drag the green cutting mat to pan, with momentum that keeps gliding after release, and scroll or pinch to zoom with the point under the cursor or fingers staying fixed. A board list with search eases the camera to fit any of the five boards, a minimap shows every piece plus a draggable viewport rectangle, and the tag rail rearranges the whole table. On phones, one-finger panning and pinch zoom work, with the board list collapsed into a drawer.

### Is the Infinite Canvas Moodboard free to use and what do I get?
The Infinite Canvas Moodboard template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, so you can build and experiment with it yourself. Commercial or client work needs Pro, which also unlocks the full prompt and the source code of the demos. The live demos were built by Claude Opus 5.5 and Claude Sonnet 5.5 in Claude Code.

### How do I build an infinite canvas moodboard with AI?
Copy the prompt from this page or run npx vibefather add infinite-canvas-moodboard, replace [BRAND], [PROJECT], [DIRECTION] and [BOARDS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Infinite Canvas Moodboard demo?
The Coastal hotel rebrand case was built by Claude Opus 5.5 in Claude Code; the Film production design case was built by Claude Sonnet 5.5 in Claude Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Infinite Canvas Moodboard template use?
Infinite Canvas Moodboard is a single-page site built with Tailwind CSS, GSAP and React, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Infinite Canvas Moodboard template for a client or a business?
The Infinite Canvas Moodboard prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Infinite Canvas Moodboard template work on mobile?
Yes. Every Infinite Canvas Moodboard build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Infinite Canvas Moodboard on VibeFather](https://vibefather.ai/templates/infinite-canvas-moodboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
