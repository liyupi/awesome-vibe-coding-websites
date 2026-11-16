# Ocean Depth Scroll Explainer <sup>PRO</sup>

> A scroll-driven dive from the sunlit surface to the abyss, with a live depth gauge and glowing creatures.

<a href="https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/ocean-depth-scroll-explainer/d9722129-d76c-4c97-8194-fe9508ceece6/webp.af9205b79a.webp" width="100%" alt="Ocean Depth Scroll Explainer — Scroll-Driven Ocean Depth Explainer Page built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Fathom is a long-scroll explainer in which every pixel of scrolling takes the reader deeper into the ocean. The page starts at the waterline with a pale sky and a moving surface, then the reader dives: the background shifts continuously from bright cyan through twilight blue and midnight navy to almost black, while a fixed depth gauge on the right counts metres, names the current zone and shows the light level, pressure and temperature. Each zone gets the same amount of scroll, so the thin sunlit layer and the deep abyss both have room to breathe. Short two-line chapters in a soft serif, with an italic second line and a small mono label, fade in and out on alternating sides. In the shallower zones, six real public-domain photographs from NOAA slide past as framed plates and lose their colour as the water darkens. Deeper down, everything is drawn in code on a canvas: drifting marine snow, light shafts that vanish after the first two hundred metres, pulsing jellyfish, a school of lanternfish that scatters from the cursor and an anglerfish whose lure brightens when you come close. At the bottom, a single glowing organism waits on the seafloor; press and hold to make it flare. It suits science centres, aquariums, museum exhibits, teachers and science writers, and any subject that comes in layers. The default case is a small ocean science centre with four zones down to 6,000 metres. To adapt it, change the brand, the dive title, the subject, the visit line and the list of zones with their depth ranges; the gauge, colour stops, chapters and creature positions are all computed from that list, and every line of copy lives in one content file.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, Scroll Animation, Cursor Effects |
| Stack | Vite 5 + vanilla TypeScript + Plain CSS, custom properties + gsap + lenis |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ocean-depth-scroll-explainer?case=d9722129-d76c-4c97-8194-fe9508ceece6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ocean-depth-scroll-explainer/d9722129-d76c-4c97-8194-fe9508ceece6/shot_desktop.893040a1f1.webp" width="100%" alt="Ocean Depth Scroll Explainer — Ocean science centre, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Ocean science centre</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/ocean-depth-scroll-explainer?case=d9722129-d76c-4c97-8194-fe9508ceece6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/ocean-depth-scroll-explainer?case=f3fd4504-41a5-4d04-a723-ce41dc19f44e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/ocean-depth-scroll-explainer/f3fd4504-41a5-4d04-a723-ce41dc19f44e/shot_desktop.b1e196139d.webp" width="100%" alt="Ocean Depth Scroll Explainer — Trench expedition film, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Trench expedition film</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/ocean-depth-scroll-explainer?case=f3fd4504-41a5-4d04-a723-ce41dc19f44e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Organisation or project name | Tidewell Ocean Lab |
| `[TITLE]` | Title of the dive | Six Thousand Metres |
| `[SUBJECT]` | What the reader descends through | the open ocean |
| `[ZONES]` | Zones with depth ranges in metres, top to bottom | Sunlight 0–200, Twilight 200–1000, Midnight 1000–4000, Abyss 4000–6000 |
| `[VISIT_LINE]` | Practical line: place, hours, price | Deep Room, 14 Brinewater Quay, Port Halden · Tue–Sun 10:00–17:30 · Adults $14, under-16s free |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A science centre: set BRAND to your institution, rewrite ZONES for your exhibit depths and point VISIT_LINE at your address, opening hours and ticket price.
- A school geography teacher: set SUBJECT to the atmosphere or ocean layers, shorten ZONES to three and replace the chapters with lesson facts for ages 9 to 14.
- A documentary filmmaker: set TITLE to your expedition name and SUBJECT to a trench, then swap the NOAA plates for stills from your dive footage.
- A museum exhibit designer: keep the four default zones, set BRAND to the gallery and change VISIT_LINE to the room, floor and opening times visitors need.

## FAQ

### How do I change the ocean zones and depth ranges in the Ocean Depth Scroll Explainer?
The Ocean Depth Scroll Explainer template reads its zones from the ZONES variable, a comma-separated list of names and depth ranges in metres. Edit that list to between three and six contiguous zones starting at 0, and the depth gauge, colour stops, chapter pacing and creature positions all recompute from it. Each zone needs two chapters written to match.

### Can I use the Ocean Depth Scroll Explainer for a subject other than the ocean?
The Ocean Depth Scroll Explainer template is built for any subject that comes in layers, so you can point it at the atmosphere, rock strata or another descent. Change the SUBJECT phrase, the TITLE and the ZONES list, then rewrite every chapter and label for the new subject. The scroll mechanics, canvas creatures and gauge stay as designed.

### What do I need to change first in the Ocean Depth Scroll Explainer template?
Start with the five variables: BRAND, TITLE, ZONES, SUBJECT and VISIT_LINE. All copy lives in one content file, so swap the brand name, the dive title, the zone list, the subject phrase and the practical visit line there. Then rewrite the two chapters per zone and the framed photograph captions to match your organisation and audience.

### Do I need a backend or photo library to run the Ocean Depth Scroll Explainer?
No backend is needed. The Ocean Depth Scroll Explainer template builds to static files and has no server code, external APIs or audio. It ships with six public-domain NOAA photographs used as framed plates in the first three zones, and you can replace them with your own images using the same file names.

### Can I use the Ocean Depth Scroll Explainer template for a client project?
The Ocean Depth Scroll Explainer template is a Pro template, so commercial and client use requires Pro. Pro members see the full prompt and get the source code of the demos; the brief, stack and variables are public. Free prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### How do I build an ocean depth scroll explainer with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add ocean-depth-scroll-explainer, replace [BRAND], [TITLE], [SUBJECT] and [ZONES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Ocean Depth Scroll Explainer demo?
The Ocean science centre case was built by Claude Opus 5.5 in Cursor; the Trench expedition film case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Ocean Depth Scroll Explainer template use?
Ocean Depth Scroll Explainer is a single-page site built with GSAP and Plain HTML, with generative / canvas, scroll animation and cursor effects. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Ocean Depth Scroll Explainer template free to use?
Ocean Depth Scroll Explainer is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Ocean Depth Scroll Explainer template work on mobile?
Yes. Every Ocean Depth Scroll Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

## Credits

- Inspired by [Descent — an interactive scroll journey from the ocean surface to the abyss](https://ohmiler.github.io/opus-5.5/underwater-journey/) by @ohmiler
- Everything in the demos — code, copy and imagery — was generated for VibeFather; nothing was copied from the source of inspiration.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Ocean Depth Scroll Explainer on VibeFather](https://vibefather.ai/templates/ocean-depth-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
