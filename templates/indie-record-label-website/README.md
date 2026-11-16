# Indie Record Label Website

> Riso-poster record label site with generative sleeves, a tour feed, and a local vinyl variant shop.

<a href="https://vibefather.ai/templates/indie-record-label-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/indie-record-label-website/9e1665bf-5972-4167-83d1-8065aa0d01bb/webp.d0dda0aeaa.webp" width="100%" alt="Indie Record Label Website — Record Label with Vinyl Shop built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/indie-record-label-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Indie Record Label Website is a loud, print-textured site for an invented independent label, drawn entirely in code. The first screen anchors on an oversized vinyl record rendered in SVG, spinning slowly beside a heavy poster wordmark printed with hot-coral and deep-violet misregistration, all on an ink-black and cream-paper palette with a generated risograph grain overlay. Covers are the signature: every release sleeve is seeded generative art, two-color geometry in coral and violet that overlaps with multiply blending, so the catalog never repeats and never touches a photograph.

The structure carries a real label's weight: an eight-release catalog grid where hovering a sleeve tilts it and slides the vinyl halfway out, a five-artist roster of poster cards with query-routed artist pages, a tour feed written as season labels with honest TBA rows, and a vinyl shop with standard black, limited-color, and deluxe variants behind a cart drawer. The cart is local-only, persists in the browser, and says plainly that nothing is charged.

This template suits record labels, tape and zine imprints, music collectives, and any loud brand that wants poster energy without stock photography. Swap the sound, the city, and the manifesto line to retune the voice; artists, releases, tour rows, and products are records in one content file, and the seeded cover generator adapts to any catalog length.

Everything visual — sleeves, vinyl, stamps, grain, the misregistered type — is SVG and CSS, so the build stays light and deterministic. The stack is Vite, React, Tailwind, and Motion with self-hosted Anton, Space Grotesk, and Space Mono. No backend, no payments, no dates anywhere on the page, and no real artists, venues, or pressing plants in the copy.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Brutalist](../../styles/brutalist.md) |
| Effects | Generative / Canvas, Marquee, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 3 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/indie-record-label-website?case=9e1665bf-5972-4167-83d1-8065aa0d01bb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/indie-record-label-website/9e1665bf-5972-4167-83d1-8065aa0d01bb/shot_desktop.c1da66a7b5.webp" width="100%" alt="Indie Record Label Website — Static Bloom Records, built by GLM-5.3 in ZCode"></a><br>
<b>Static Bloom Records</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/indie-record-label-website?case=9e1665bf-5972-4167-83d1-8065aa0d01bb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/indie-record-label-website?case=9cc06e66-5b1b-4824-93cb-48d5e4915589&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/indie-record-label-website/9cc06e66-5b1b-4824-93cb-48d5e4915589/shot_desktop.51d76f6580.webp" width="100%" alt="Indie Record Label Website — Modern jazz label, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Modern jazz label</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/indie-record-label-website?case=9cc06e66-5b1b-4824-93cb-48d5e4915589&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Label name | Static Bloom Records |
| `[GENRE]` | Sound | noise-pop, dubbed-out techno and tape loops |
| `[CITY]` | City | Milhaven |
| `[PRESS_LINE]` | Manifesto line | Cut loud, pressed heavy, packaged by hand. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add indie-record-label-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A tape and zine imprint: set BRAND to your imprint, swap the eight releases for your cassette runs and rewrite the pressing notes to describe your dubbing and hand-folding.
- A city music collective: set CITY and GENRE to your scene, replace the five-artist roster with your members and turn the tour feed rows into your own showcase nights.
- A noise or experimental label: keep the riso palette, rewrite PRESS_LINE as your creed, and seed the cover generator with new numbers so every sleeve reads as your catalog.
- A record shop with a label arm: set BRAND to the shop, keep the vinyl variant shop and cart drawer, and rewrite the catalog grid to feature your own in-house pressings.

## FAQ

### How do the generative record sleeves in the Indie Record Label Website template work?
The Indie Record Label Website template draws every release sleeve in code from a numeric seed. Each seed picks six to nine shapes from circles, rings, half-discs, bars, quarter-arcs, dot grids and triangles, filled only in hot coral, deep violet or ink, with overlapping areas multiplied so the colors mix. The same seed always produces the same cover, and the catalog number sits in Space Mono in one corner.

### What can I change in the Indie Record Label Website template to make it my own label?
The Indie Record Label Website template exposes four variables: BRAND for the label name, GENRE for the sound, CITY for where the label lives, and PRESS_LINE for the manifesto line. The wordmark, logomark initials, vinyl label and cart key all derive from BRAND. Artists, releases, tour rows, shop products and pressing notes are records in one content file, so you rewrite those to match your catalog.

### Does the vinyl shop in the Indie Record Label Website template take real payments?
No. The Indie Record Label Website template runs a local-only cart: line items with mini generative sleeves, quantity controls, a subtotal and an honest demo line saying nothing is charged. The cart persists in the browser under a key derived from BRAND, and restored data is validated. There is no backend, no payment provider and no real pressing plant or artist in the copy.

### How do the artist pages work in the Indie Record Label Website template?
The Indie Record Label Website template builds a five-artist roster as poster cards, and each card links to an artist page routed by a query parameter. The page reads the artist from the URL, matches it against the roster slugs, and falls back to the first artist rather than showing a not-found state. Every internal link is a plain file name, so the static build works without a router.

### Is the Indie Record Label Website template free to use, and what do I get with Pro?
The Indie Record Label Website template is a free template. Its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives you the full prompt and the source code of the demos. The brief, stack and variables are shown publicly on the template page.

### How do I build an indie record label website with AI?
Copy the prompt from this page or run npx vibefather add indie-record-label-website, replace [BRAND], [GENRE], [CITY] and [PRESS_LINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Indie Record Label Website demo?
The Static Bloom Records case was built by GLM-5.3 in ZCode; the Modern jazz label case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Indie Record Label Website template use?
Indie Record Label Website is a 3-page site built with Tailwind CSS, Motion and React, with generative / canvas, marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Indie Record Label Website template for a client or a business?
The Indie Record Label Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Indie Record Label Website template work on mobile?
Yes. Every Indie Record Label Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Indie Record Label Website on VibeFather](https://vibefather.ai/templates/indie-record-label-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
