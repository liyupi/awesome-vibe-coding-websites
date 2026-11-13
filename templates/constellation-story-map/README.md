# Constellation Story Map

> Drag through an illustrated night, trace old myths, and connect a constellation of your own.

<a href="https://vibefather.ai/templates/constellation-story-map?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/constellation-story-map/474c16c5-a9cf-4409-9d3e-befcbae59603/webp.02eedd5f69.webp" width="100%" alt="Constellation Story Map — Interactive Constellation Map with Myths built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/constellation-story-map?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Constellation Story Map is a single-page night-sky toy that combines an explorable canvas, short myth retellings, and a small constellation maker. Visitors drag to pan across a deterministic star field, choose a pattern from the sky or story index, and watch its lines draw into place. Each selection opens a concise original story beside a simplified diagram and a plain-language note about the pattern.

The visual direction resembles a contemporary celestial atlas: deep indigo ink, parchment typography, fine antique-gold geometry, and quiet coordinate marks. Newsreader headlines and Manrope controls keep the interface editorial but usable. The canvas is the first-screen focus, with constellation stories and controls arranged around it rather than hidden beneath a marketing hero. A fixed-year date slider changes the illustrative sky without pretending to provide a live astronomical forecast.

In Create mode, visitors connect up to eight bright maker stars, name the result, undo points, and save a small personal collection in local storage. Mouse, touch, and keyboard-equivalent controls are all specified, along with reduced-motion behavior and bounded canvas rendering.

This template suits educators, creators, designers, and developers building a playful learning experience, a digital field guide, or an interactive storytelling project. Variables cover the brand, collection title, headline, audience, six-constellation set, and story themes. The alternate case uses a new set of classical figures to demonstrate a full content change. All default stories, pattern data, labels, guide text, and seasonal chapter copy live in one content file for straightforward adaptation. Everything is rendered locally with React, Canvas 2D, SVG, and bundled fonts and icons. No astronomy API, account, backend, analytics, external images, or runtime asset service is needed.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Generative / Canvas, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Vanilla CSS with custom properties + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/constellation-story-map?case=474c16c5-a9cf-4409-9d3e-befcbae59603&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/constellation-story-map/474c16c5-a9cf-4409-9d3e-befcbae59603/shot_desktop.69d41d47e7.webp" width="100%" alt="Constellation Story Map — Lantern Sky Myths, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Lantern Sky Myths</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/constellation-story-map?case=474c16c5-a9cf-4409-9d3e-befcbae59603&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/constellation-story-map?case=dfe9bea3-4ac1-4a6d-adc7-997df4fbb01e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/constellation-story-map/dfe9bea3-4ac1-4a6d-adc7-997df4fbb01e/shot_desktop.47f30a5268.webp" width="100%" alt="Constellation Story Map — Wayfarer Sky Legends, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Wayfarer Sky Legends</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/constellation-story-map?case=dfe9bea3-4ac1-4a6d-adc7-997df4fbb01e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Atlas brand | Asterwyn |
| `[COLLECTION_NAME]` | Sky collection name | The Lantern Sky |
| `[HEADLINE]` | Welcome headline | Find the stories between the stars. |
| `[AUDIENCE]` | Audience | curious stargazers and families reading together |
| `[CONSTELLATION_SET]` | Six constellation names | Lyra, Cygnus, Cassiopeia, Orion, Ursa Major, Corona Borealis |
| `[STORY_LENS]` | Story themes | wonder, courage, and connection |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add constellation-story-map` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A planetarium outreach team: set BRAND to your venue, point CONSTELLATION_SET at the figures in your seasonal show, and use STORY_LENS for family-friendly retellings.
- A literature teacher: set AUDIENCE to students, choose six myth-linked constellations, and use COLLECTION_NAME for the unit so saved creations match the lesson.
- A children's museum: raise the headline to a playful invitation, keep the maker stars and Create mode, and write short stories for young first-time visitors.
- An indie game studio: set BRAND to the game world, rename the six figures to in-world legends, and use STORY_LENS for lore that ties to the release.

## FAQ

### How do I change the six constellations and their myths in the Constellation Story Map?
The Constellation Story Map reads its six constellations from CONSTELLATION_SET as a comma-separated list, paired with matching geometry records kept in the same order. To swap them, replace the names in CONSTELLATION_SET and rewrite the epithet, story and note for each position in the content file. The alternate case in the template swaps in a new set of classical figures to show a full content change.

### Can visitors save their own constellation in the Constellation Story Map?
Yes. Create mode in the Constellation Story Map lets a visitor connect up to eight bright maker stars, name the result, undo points and save it. Saved creations live in local storage under a key derived from the brand, capped at six items with Load and Delete controls. Only the name and maker-star ids are stored, so nothing leaves the browser.

### What does the date slider in the Constellation Story Map actually do?
The date control in the Constellation Story Map rotates the background star field and atlas arcs by up to 18 degrees and shifts them vertically by up to 55 world units across a fixed illustrative year. It is a decorative transformation, not an astronomical forecast, and the template labels it as illustrative. A native date input and a matching range slider control the same value.

### Is the Constellation Story Map usable without a mouse or with reduced motion enabled?
The Constellation Story Map provides keyboard-equivalent DOM controls for every canvas action: six constellation buttons, zoom and reset buttons, native date inputs and a labeled maker-star select in Create mode. Panning and hit testing work with touch and pointer input. When reduced motion is on, constellation traces appear completed immediately and date changes apply without interpolation.

### Which variables should I edit first in the Constellation Story Map template?
Start with BRAND, AUDIENCE, HEADLINE and COLLECTION_NAME in the Constellation Story Map, since the introduction, help text, storage key and document title all derive from them. Then set STORY_LENS to steer the tone of the six retellings and CONSTELLATION_SET to name the figures. All visible strings and pattern data sit in one content file.

### How do I build a constellation story map with AI?
Copy the prompt from this page or run npx vibefather add constellation-story-map, replace [BRAND], [COLLECTION_NAME], [HEADLINE] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Constellation Story Map demo?
The Lantern Sky Myths case was built by Kimi K3.1 Pro in Kimi Code; the Wayfarer Sky Legends case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Constellation Story Map template use?
Constellation Story Map is a single-page site built with React, with drag & physics, generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Constellation Story Map template for a client or a business?
The Constellation Story Map prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Constellation Story Map template work on mobile?
Yes. Every Constellation Story Map build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Constellation Story Map on VibeFather](https://vibefather.ai/templates/constellation-story-map?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
