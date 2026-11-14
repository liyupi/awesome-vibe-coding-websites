# Solar System 3D Explainer <sup>PRO</sup>

> Fly through a 3D solar system, flip to true scale and watch the planets vanish into the dark.

<a href="https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/solar-system-3d-explainer/11049830-8ae2-40ca-a87d-b6af68c8820b/webp.1457bd9164.webp" width="100%" alt="Solar System 3D Explainer — 3D Solar System Explainer with Scroll Tour built by Claude Opus 5.5, Claude Sonnet 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template is a full-screen 3D explainer of the Solar System that runs in the browser with no server. The scene is the first thing a visitor sees: the Sun, eight planets with surfaces drawn entirely in code, thin orbit lines and a quiet starfield, with a slim instrument bar along the bottom and one warm solar accent on deep-space black.

Its signature moment is a scale switch. In readable scale the planets are large enough to study. Flip to true scale and distances and sizes animate to their real proportions until every planet shrinks below one pixel, while a live readout shows how wide Earth is on screen. Visitors can also click any planet to fly to it and read its key numbers, drag a time slider from paused to more than two years per second, or start a nine-stop scroll tour from the Sun to Neptune with a scripted camera move at each stop. The tour ends by revealing the true scale, followed by a table for pacing out the whole system on a real street with a beach ball and some seeds.

It suits science teachers, museums, planetariums, science publishers and developers who want an ambitious three.js showcase. The numbers, captions and surface recipes all live in one content file, so you can point it at another star system, such as a set of exoplanets around a small red star, and keep the same look. Change the variables for the brand, system, bodies and audience, and your coding agent restates the real figures. Touch controls, a bottom sheet on phones, a capped pixel ratio and a reduced-motion path that swaps flights for cuts are part of the spec, and no image files are needed.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, 3D / WebGL, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + three.js + Tailwind CSS 3.4 + three + gsap + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=11049830-8ae2-40ca-a87d-b6af68c8820b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/solar-system-3d-explainer/11049830-8ae2-40ca-a87d-b6af68c8820b/shot_desktop.72d6d6d017.webp" width="100%" alt="Solar System 3D Explainer — The Solar System, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>The Solar System</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=11049830-8ae2-40ca-a87d-b6af68c8820b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=248f7a6f-7d72-46f6-bf19-a842a2442f20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/solar-system-3d-explainer/248f7a6f-7d72-46f6-bf19-a842a2442f20/shot_desktop.f66964e52f.webp" width="100%" alt="Solar System 3D Explainer — A red dwarf's seven planets, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>A red dwarf's seven planets</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=248f7a6f-7d72-46f6-bf19-a842a2442f20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=90fb5510-12de-4417-8ec4-9cb119db17d9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/solar-system-3d-explainer/90fb5510-12de-4417-8ec4-9cb119db17d9/shot_desktop.90dc4ecc64.webp" width="100%" alt="Solar System 3D Explainer — The Solar System, built by Gemini 4 Carbon in Cursor"></a><br>
<b>The Solar System</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/solar-system-3d-explainer?case=90fb5510-12de-4417-8ec4-9cb119db17d9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publisher or project name | Fernhill Almanac |
| `[SYSTEM]` | The system being explained | the Solar System |
| `[CENTER_BODY]` | The body at the center | the Sun |
| `[BODIES]` | Orbiting bodies, inner to outer | Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune |
| `[HOME_BODY]` | The body used for the live pixel readout | Earth |
| `[AUDIENCE]` | Who it is for | middle school classrooms and curious adults |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A science museum kiosk: set BRAND to your institution, keep SYSTEM as the Solar System, and set AUDIENCE to gallery visitors so the tour and scale switch read at a glance.
- An exoplanet explainer: set SYSTEM to a red dwarf and BODIES to its known planets, then update CENTER_BODY and HOME_BODY and let your agent restate the real figures.
- A classroom teaching aid: set AUDIENCE to your year group, keep the nine-stop tour for lessons, and use the street table to pace the model out in the school hall.
- A science publisher feature: set BRAND to your masthead, choose HOME_BODY for the live pixel readout, and rewrite the captions and chips for your readership.

## FAQ

### How does the true-scale switch in the Solar System 3D Explainer work?
The Solar System 3D Explainer has a scale switch that animates distances and sizes from a readable scale, where planets are large enough to study, to their real proportions. In true scale every planet shrinks below one pixel, and a live readout shows how many pixels wide Earth is on screen. The tour ends by revealing true scale, followed by a table for pacing out the system on a real street.

### Can I use the Solar System 3D Explainer to show a different star system or exoplanets?
Yes. The Solar System 3D Explainer keeps all numbers, captions and surface recipes in one content file, so you can point it at another star system, such as a set of exoplanets around a small red star, and keep the same look. Set the variables for the brand, system, bodies and audience, and your coding agent restates the real published figures in the same fields.

### What do the variables BRAND, SYSTEM, BODIES, AUDIENCE, HOME_BODY and CENTER_BODY change?
In the Solar System 3D Explainer, BRAND sets the publisher name, SYSTEM names the star system being explained, CENTER_BODY is the body at the center, BODIES lists the orbiting bodies inner to outer, HOME_BODY is the body used for the live pixel readout, and AUDIENCE describes who the site is for. Change these and your coding agent rewrites every headline, paragraph and label to match.

### How do I adapt the Solar System 3D Explainer for a museum or planetarium?
The Solar System 3D Explainer suits museums and planetariums as a kiosk or projected explainer. Set BRAND to your institution, keep SYSTEM as the Solar System or swap in your own, and set AUDIENCE to your visitors. The nine-stop scroll tour from the Sun to Neptune with scripted camera moves works well on a large screen, and the scale switch gives a short memorable moment for a gallery floor.

### What do I need to change first in the Solar System 3D Explainer, and what should I watch out for?
Start with the variables: set BRAND, SYSTEM, BODIES, AUDIENCE, HOME_BODY and CENTER_BODY, then check that the facts, readable-scale table and street table have been restated for your system. The Solar System 3D Explainer needs WebGL; if the browser has no WebGL2 support, the template shows a fallback instead of the scene, so test on the devices your audience uses and confirm the bottom sheet and touch controls on phones.

### How do I build a solar system 3D explainer with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add solar-system-3d-explainer, replace [BRAND], [SYSTEM], [CENTER_BODY] and [BODIES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Solar System 3D Explainer demo?
The The Solar System case was built by Claude Opus 5.5 in Claude Code; the A red dwarf's seven planets case was built by Claude Sonnet 5.5 in Claude Code; the The Solar System case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Solar System 3D Explainer template use?
Solar System 3D Explainer is a single-page site built with GSAP, Three.js and Tailwind CSS, with scroll animation, 3d / webgl and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Solar System 3D Explainer template free to use?
Solar System 3D Explainer is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Solar System 3D Explainer template work on mobile?
Yes. Every Solar System 3D Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Solar System 3D Explainer on VibeFather](https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
