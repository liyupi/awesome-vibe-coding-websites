# Koi Pond Web Toy

> A code-drawn koi pond with four seasons, night mode, touch ripples and a 25-minute focus timer.

<a href="https://vibefather.ai/templates/koi-pond-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/koi-pond-web-toy/8efc33b2-f202-41e2-95ec-7e2b006fab13/webp.f61ec1b8a7.webp" width="100%" alt="Koi Pond Web Toy — Interactive Koi Pond Canvas Toy with Seasons built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/koi-pond-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Koi Pond Web Toy is a single full-screen scene: a garden pond seen from directly above, drawn entirely in code with a small WebGL water shader and Canvas 2D on top. There are no image, video or audio files in the build. Koi swim with a spine-chain body wave, translucent fins and a glide-and-kick rhythm, light caustics crawl across the pond floor, and lily pads, stepping stones and the vermilion rail of a wooden bridge frame the water. The palette is fixed and easy to remember: ink-teal water, vermilion fish, cream type and gold light.

It suits developers and creators who want a shareable canvas demo, a calm page to keep open on a second monitor, or a starting point for their own generative scene. Four seasons cross-fade into each other (spring petals, summer lotus and dragonflies, autumn ginkgo, winter ice and snow), and night mode adds fireflies and wobbling lantern reflections on top of any of them. Three gestures do three distinct things: tap for ripples, press and hold to scatter food and watch the school gather, drag to draw a current the fish follow. A rain toggle seeds the surface with drops, a generative pentatonic soundtrack is synthesized in the browser once you turn it on, and focus mode hides the interface and runs a 25-minute timer that ends on a soft chime.

To adapt it, change the name, tagline, opening season, number of koi and session length through the variables. All copy lives in one content file and every scene parameter sits in a handful of small TypeScript modules, so swapping the fish roster or the seasonal dressing is a contained edit. Quality scales down on phones by capping pixel ratio and thinning fish and particles, and reduced-motion settings calm the whole pond. The default pond is called Emberfin, an invented name.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Generative / Canvas, Micro-interactions |
| Stack | Vite 5 + TypeScript, no UI framework + Vanilla CSS + lucide-static |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/koi-pond-web-toy?case=8efc33b2-f202-41e2-95ec-7e2b006fab13&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/koi-pond-web-toy/8efc33b2-f202-41e2-95ec-7e2b006fab13/shot_desktop.a3b20c2211.webp" width="100%" alt="Koi Pond Web Toy — Summer night study pond, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Summer night study pond</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/koi-pond-web-toy?case=8efc33b2-f202-41e2-95ec-7e2b006fab13&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Name of the pond | Emberfin |
| `[TAGLINE]` | One line under the title | A small pond for long thoughts. |
| `[START_SEASON]` | Season the pond opens in | autumn |
| `[START_NIGHT]` | Open in night mode | off |
| `[KOI_COUNT]` | Number of koi on a desktop screen | 9 |
| `[FOCUS_MINUTES]` | Length of a focus session in minutes | 25 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add koi-pond-web-toy` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A meditation or breathwork teacher: set BRAND to the studio name, raise FOCUS_MINUTES to match a longer session, and open in spring with night off for a lighter first impression.
- A developer building a portfolio piece: keep KOI_COUNT near the default, start in autumn, and use the linkable season and night parameters to show every state in one case study.
- A calm landing page for a small studio: put the studio name in BRAND, write a short TAGLINE, and let focus mode hide the dock so visitors see only the pond.
- A classroom or library screen: set START_NIGHT to on, shorten FOCUS_MINUTES to a single lesson block, and leave the gesture hints visible for first-time visitors.

## FAQ

### What can I actually do in the Koi Pond Web Toy besides watch the fish?
The Koi Pond Web Toy responds to three gestures: tap the water for ripples, press and hold to scatter food so the school gathers, and drag to draw a current the koi follow. On top of that you can switch between spring, summer, autumn and winter, toggle night mode and rain, turn on a generative pentatonic soundtrack, and start a focus session that hides the interface.

### Is the Koi Pond Web Toy free to use, and what does Pro add?
The Koi Pond Web Toy prompt and its DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, and Pro members also get the full prompt and the source code of the live demos. The page shows the brief, stack and variables publicly either way.

### How do I change the name, the opening season or the number of koi in the pond?
Set the BRAND, TAGLINE, START_SEASON, START_NIGHT, KOI_COUNT and FOCUS_MINUTES variables before you hand the prompt to an agent. KOI_COUNT takes a whole number from 4 to 16 on desktop, and FOCUS_MINUTES takes 1 to 90. Phones and slower devices automatically show fewer fish and thinner particles.

### Can I link someone straight to the pond in winter at night?
Yes. The Koi Pond Web Toy reads three optional query parameters on load: season (spring, summer, autumn or winter), night (1 or 0) and rain (1 or 0). Those override the START_SEASON and START_NIGHT variables, so any combination of season, night and rain is a linkable state you can share or bookmark.

### Does the Koi Pond Web Toy need image, video or audio files to run?
No. The Koi Pond Web Toy draws the whole scene in code with a small WebGL water shader and Canvas 2D on top, so there are no image, video or audio files in the build. The pentatonic soundtrack is synthesized in the browser once you turn it on, and the only asset is a hand-written favicon.

### How do I build a koi pond web toy with AI?
Copy the prompt from this page or run npx vibefather add koi-pond-web-toy, replace [BRAND], [TAGLINE], [START_SEASON] and [START_NIGHT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Koi Pond Web Toy demo?
The Summer night study pond case was built by Claude Opus 5.5 in Claude Code. Each build used the published prompt with nothing added.

### What tech stack and pages does the Koi Pond Web Toy template use?
Koi Pond Web Toy is a single-page site built with Plain HTML, with drag & physics, generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Koi Pond Web Toy template for a client or a business?
The Koi Pond Web Toy prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Koi Pond Web Toy template work on mobile?
Yes. Every Koi Pond Web Toy build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Code-drawn koi pond web toy with switchable seasons, night mode and a focus timer](https://www.24vids.com/video/never-seen-a-model-this-powerfulclaude-fable-5-just-helped-me-build-this-whole-p-tw-2072648308846370897) by @ann_nnng
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Koi Pond Web Toy on VibeFather](https://vibefather.ai/templates/koi-pond-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
