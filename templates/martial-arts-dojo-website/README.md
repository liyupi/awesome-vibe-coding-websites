# Martial Arts Dojo Website

> A disciplined black-and-crimson dojo site with an animating belt path, day-filterable schedule and family pricing.

<a href="https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/martial-arts-dojo-website/43189e21-937a-40dc-a178-ea658034cd26/webp.e4a75d1dc3.webp" width="100%" alt="Martial Arts Dojo Website — Martial Arts School Site with Belt Path built by GLM-5.3"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Martial Arts Dojo Website is a single-page site for a martial arts school, in ink black, crimson and rice-paper white with brush-stroke accents drawn in code — the discipline itself is the design. The signature piece is the belt progression path: a drawn path from white to black belt that fills as you scroll, each rank with its typical time and requirements. Around it: three program tracks (kids, teens, adults) written for the buyer, a schedule table filterable by day and program, instructor bios with plain-uniform portraits, family membership pricing with the household math, a free trial booking that completes inline, and a calm anti-bullying section for parents covering posture, voice, when to walk and when to tell an adult. Photos are moody training-hall shots with students from behind in plain uniforms — no close-up faces, no lineage emblems. It suits karate, taekwondo and grappling schools of any size. Five variables swap school name, town, head instructor, phone and years; every rank time, price and review is invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Dark](../../styles/dark.md), [Bold](../../styles/bold.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=43189e21-937a-40dc-a178-ea658034cd26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/martial-arts-dojo-website/43189e21-937a-40dc-a178-ea658034cd26/shot_desktop.203ae16b17.webp" width="100%" alt="Martial Arts Dojo Website — Karate dojo, Eastgate, built by GLM-5.3 in ZCode"></a><br>
<b>Karate dojo, Eastgate</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/martial-arts-dojo-website?case=43189e21-937a-40dc-a178-ea658034cd26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A family karate school: set [BRAND] to your dojo name, rewrite the six rank times to your grading syllabus and point the family pricing at your real household rates.
- A grappling or jiu-jitsu academy: keep the belt path but rename the ranks to your stripe system and swap the kids and teens programs for beginner and competition tracks.
- A taekwondo studio run by one instructor: set [FOUNDER] and [EXPERIENCE] in the hero, trim the second instructor bio and lead the free trial with the anti-bullying section for parents.
- A youth confidence program inside a larger gym: keep the anti-bullying points and free trial form, replace the adult program with an after-school track and set the schedule to weekday afternoons.

## FAQ

### How does the belt progression path work on the Martial Arts Dojo Website?
The Martial Arts Dojo Website draws a single SVG path that climbs left to right across the belt section, with six ranks from white to black. Each node is a wrapped-belt glyph in its own color, and the crimson stroke fills as you scroll, with each rank card fading in as the stroke reaches it. Every rank lists typical months and requirements, with a footnote that the times are typical, not promises.

### How do I change the schedule and program filters to match my dojo's classes?
The Martial Arts Dojo Website keeps the whole weekly schedule in one content file as rows of day, time, program and level. Edit those entries to your real classes, then adjust the day chips and program chips (Kids, Teens, Adults, Family) to match what you teach. Matching cells highlight in crimson while the rest dim rather than hide, so the week stays legible. The filter choice is remembered in the browser.

### What does the free trial booking on the Martial Arts Dojo Website actually do?
The free trial form completes inline on the page: a visitor picks a program and a time, submits, and sees a success check that pops in. The booking is saved in the visitor's own browser under a name derived from your school name, and there is no backend or email service, so you still confirm trials by phone. The form is the shortest step on the page by design.

### Can the Martial Arts Dojo Website be used for taekwondo or grappling schools, not just karate?
The Martial Arts Dojo Website suits karate, taekwondo and grappling schools of any size. The six-rank belt path, the three program tracks (kids, teens, adults) and the family pricing are written as sample data, so a grappling school can rewrite the ranks and program names in the content file. The calm, respectful tone and the anti-bullying section for parents carry over to any discipline.

### What should I change first after adding the Martial Arts Dojo Website template?
Set the five variables first: school name, town, head instructor, phone and years teaching. That swaps the hero, schedule and footer copy and the phone link. Then rewrite the sample data: the six rank times and requirements, the weekly schedule, the family prices and the reviews are all invented. Finally replace the moody training-hall photos and the two instructor portraits with your own plain-uniform shots.

### How do I build a martial arts dojo website with AI?
Copy the prompt from this page or run npx vibefather add martial-arts-dojo-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Martial Arts Dojo Website demo?
The Karate dojo, Eastgate case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Martial Arts Dojo Website template use?
Martial Arts Dojo Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Martial Arts Dojo Website template for a client or a business?
The Martial Arts Dojo Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Martial Arts Dojo Website template work on mobile?
Yes. Every Martial Arts Dojo Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Martial Arts Dojo Website on VibeFather](https://vibefather.ai/templates/martial-arts-dojo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
