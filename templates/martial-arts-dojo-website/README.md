# Martial Arts Dojo Website

> A disciplined black-and-crimson dojo site with an animating belt path, day-filterable schedule and family pricing.

<a href="https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/martial-arts-dojo-website/43189e21-937a-40dc-a178-ea658034cd26/webp.e4a75d1dc3.webp" width="100%" alt="Martial Arts Dojo Website — Martial Arts School Site with Belt Path built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Martial Arts Dojo Website is a single-page site for a martial arts school, in ink black, crimson and rice-paper white with brush-stroke accents drawn in code — the discipline itself is the design. The signature piece is the belt progression path: a drawn path from white to black belt that fills as you scroll, each rank with its typical time and requirements. Around it: three program tracks (kids, teens, adults) written for the buyer, a schedule table filterable by day and program, instructor bios with plain-uniform portraits, family membership pricing with the household math, a free trial booking that completes inline, and a calm anti-bullying section for parents covering posture, voice, when to walk and when to tell an adult. Photos are moody training-hall shots with students from behind in plain uniforms — no close-up faces, no lineage emblems. It suits karate, taekwondo and grappling schools of any size. Five variables swap school name, town, head instructor, phone and years; every rank time, price and review is invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Dark](../../styles/dark.md), [Bold](../../styles/bold.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=43189e21-937a-40dc-a178-ea658034cd26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/martial-arts-dojo-website/43189e21-937a-40dc-a178-ea658034cd26/shot_desktop.203ae16b17.webp" width="100%" alt="Martial Arts Dojo Website — Karate dojo, Eastgate, built by GLM-5.3 in ZCode"></a><br>
<b>Karate dojo, Eastgate</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=43189e21-937a-40dc-a178-ea658034cd26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=b41d8ff0-1a7d-4c34-b297-f8d9db0226dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/martial-arts-dojo-website/b41d8ff0-1a7d-4c34-b297-f8d9db0226dc/shot_desktop.ffa1c04d02.webp" width="100%" alt="Martial Arts Dojo Website — Grappling academy, Southbank, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Grappling academy, Southbank</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=b41d8ff0-1a7d-4c34-b297-f8d9db0226dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | School name | Blackpine Martial Academy |
| `[CITY]` | City | Eastgate |
| `[FOUNDER]` | Head instructor | Marcus Ito |
| `[PHONE]` | Phone | (555) 913-7742 |
| `[EXPERIENCE]` | Years teaching | 18 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add martial-arts-dojo-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A grappling academy: keep the belt path but rename the ranks to stripes and belts, and re-point the Kids, Teens and Adults programs to gi and no-gi classes.
- A taekwondo school for families: set [BRAND] and [CITY], then rewrite the family pricing section around your household rates and sibling discounts.
- A karate club run by one instructor: set [FOUNDER] and [EXPERIENCE] in the hero, drop the second bio card and keep the anti-bullying section for parents.
- A kids' confidence program: lead with the anti-bullying points, shorten the schedule to after-school slots and make the free trial form the first call to action.

## FAQ

### How do I change the belt ranks and timings on the Martial Arts Dojo Website?
The Martial Arts Dojo Website ships with six ranks on the belt path — white, yellow, green, blue, brown and black — each with a typical time range and a short requirement line, all held in the content file. Open that file and rewrite the rank names, months and requirements for your art; the scroll fill and card reveals follow automatically. The template describes these as typical times, not promises.

### Can I make the class schedule filter by day and program for my own school?
Yes. The schedule on the Martial Arts Dojo Website is a data-driven table with time slots as rows and Monday to Saturday as columns, plus day chips and program chips (All, Kids, Teens, Adults, Family). Edit the schedule entries in the content file to match your real classes, and the filters, crimson highlights and dimmed cells update without touching the layout.

### What do I need to change first after downloading the Martial Arts Dojo Website?
Set the five variables first: [BRAND] for the school name, [CITY] for the town, [FOUNDER] for the head instructor, [PHONE] for the school line and [EXPERIENCE] for years teaching. Then replace the sample rank timings, family prices and reviews, which are invented, with your own. The trial booking form, schedule filters and footer all derive from those values.

### Is the Martial Arts Dojo Website free, and what do I get with Pro?
The Martial Arts Dojo Website is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives you the full prompt where a template shows only the brief, plus the source code of the demos. Two live demos built by GLM-5.3 in ZCode and Kimi K3.1 Pro in Kimi Code show the result.

### How does the free trial booking work on the Martial Arts Dojo Website?
The free trial section is the shortest step on the page: a short form that completes inline with a success check that pops as confirmation. The booking is saved to browser storage under a key derived from the school name, so a returning visitor sees their entry restored. There is no backend, so connect the form to your own booking system or inbox before going live.

### How do I build a martial arts dojo website with AI?
Copy the prompt from this page or run npx vibefather add martial-arts-dojo-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Martial Arts Dojo Website demo?
The Karate dojo, Eastgate case was built by GLM-5.3 in ZCode; the Grappling academy, Southbank case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Martial Arts Dojo Website template use?
Martial Arts Dojo Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Martial Arts Dojo Website template for a client or a business?
The Martial Arts Dojo Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Martial Arts Dojo Website template work on mobile?
Yes. Every Martial Arts Dojo Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Martial Arts Dojo Website on VibeFather](https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
