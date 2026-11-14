# Boxing and Strength Gym Website

> Gritty two-page gym site with a filterable class timetable, pricing toggle and free-trial booking form.

<a href="https://vibefather.ai/templates/boxing-and-strength-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/boxing-and-strength-gym-website/334702f0-0981-4390-9b1a-60e47104f5c3/webp.fa13e32140.webp" width="100%" alt="Boxing and Strength Gym Website — Boxing Gym Website with Class Timetable built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/boxing-and-strength-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for a small boxing and strength gym that wants to look like a real place with sweat on the floor. The home page opens on a full-bleed photo of heavy bags in a warehouse gym with a huge condensed headline, then moves through six class types with intensity meters, a strip of today's sessions, membership pricing, coaches, member results, a free-trial booking form and a beginner FAQ. The second page is the full weekly timetable: 34 sessions in a days-by-times grid on desktop and day tabs on mobile, filterable by class type and level, with a slide-in drawer for every class showing the coach, capacity, what to bring and a button that books it as a trial.

It suits boxing clubs, kickboxing and Muay Thai gyms, strength studios and any small fitness business that runs a class schedule and sells memberships. The palette is near-black and concrete grey with one blood-orange accent, used for buttons, active filters and the diagonal tape-stripe dividers. Photos of gloves, ropes, rings and kettlebells get the same grainy duotone grade so the set feels shot in one building, and coaches appear as bold monograms instead of portraits.

The interactive pieces are the ones that are hard to get right in a static site: filters that sync to the URL, a focus-trapped drawer, a monthly / 10-class pack toggle that rolls the prices and recalculates the cost per class, and a trial form with inline validation that ends in a ticket-style confirmation. Everything runs client-side, with no backend.

To adapt it, change the gym name, discipline, city and audience. The prompt keeps all classes, sessions, prices and copy in one content file, so the builder rewrites them for your gym while the layout, motion and grade stay the same.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Dark](../../styles/dark.md) |
| Effects | Text Animation, Marquee, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/boxing-and-strength-gym-website?case=334702f0-0981-4390-9b1a-60e47104f5c3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/boxing-and-strength-gym-website/334702f0-0981-4390-9b1a-60e47104f5c3/shot_desktop.5491103041.webp" width="100%" alt="Boxing and Strength Gym Website — Boxing and strength gym, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Boxing and strength gym</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/boxing-and-strength-gym-website?case=334702f0-0981-4390-9b1a-60e47104f5c3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/boxing-and-strength-gym-website?case=6ab01a75-3c61-48a3-b60a-d3b532f16e53&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/boxing-and-strength-gym-website/6ab01a75-3c61-48a3-b60a-d3b532f16e53/shot_desktop.c125ac4f14.webp" width="100%" alt="Boxing and Strength Gym Website — Muay Thai gym, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Muay Thai gym</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/boxing-and-strength-gym-website?case=6ab01a75-3c61-48a3-b60a-d3b532f16e53&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Gym name | Cinderblock Boxing Club |
| `[DISCIPLINE]` | What the gym teaches | boxing and strength training |
| `[CITY]` | City | Oakland, California |
| `[AUDIENCE]` | Who trains there | busy adults, from first-timers to amateur fighters |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add boxing-and-strength-gym-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A Muay Thai gym: set [DISCIPLINE] to Muay Thai, rewrite the six class types for clinch, pad work and sparring, and keep the 34-session timetable grid.
- A strength and conditioning studio: set [BRAND] to your studio, swap the class cards for barbell, kettlebell and conditioning blocks, and adjust the intensity meters.
- A kickboxing club for beginners: set [AUDIENCE] to nervous first-timers, rewrite the beginner FAQ and trial form reassurance, and keep the free-trial booking path.
- A personal trainer running small group sessions: use [DISCIPLINE] for your method, replace the coach monograms with your own team, and link the pricing toggle to your pack sizes.

## FAQ

### How do I change the class types and weekly schedule to match my own gym?
The Boxing and Strength Gym Website template keeps every class, session, price and line of copy in one content file. You set [DISCIPLINE] and rewrite the six class types with their descriptions and intensity levels, then replace the 34 sessions in the weekly timetable with your own days, times, coaches and capacities. The layout, motion and photo grade stay as they are.

### How does the filterable timetable work for members booking a class?
The timetable page shows the full week as a days-by-times grid on desktop and as day tabs on mobile. Members filter by class type and level, and those filters sync to the URL so a filtered view can be shared. Tapping a session opens a slide-in drawer with the coach, capacity, what to bring and a button that books it as a free trial.

### Can the monthly and 10-class pack pricing toggle handle my own membership prices?
Yes. The Boxing and Strength Gym Website template includes a pricing section with a monthly versus 10-class pack toggle that rolls the prices and recalculates the cost per class. You replace the plan names, prices and currency in the content file to fit your gym, and the toggle does the per-class math for visitors.

### Where do free-trial bookings go if the site has no backend?
Trial bookings stay client-side. The free-trial form validates each field inline and ends in a ticket-style confirmation on the page, and it can pre-fill the class or plan from the URL when someone arrives from a timetable drawer or pricing card. Because the Boxing and Strength Gym Website template has no backend, you connect the form to your own booking or email tool to receive the requests.

### What should I change first when adapting the template to my gym?
Start with the four variables: [BRAND] for the gym name, [DISCIPLINE] for what you teach, [CITY] for the location and [AUDIENCE] for who trains there. Those four drive the hero, class types, coach specialities, results, quotes and FAQ answers. After that, replace the eight photos with your own building and check the trial form and timetable on a phone.

### How do I build a boxing and strength gym website with AI?
Copy the prompt from this page or run npx vibefather add boxing-and-strength-gym-website, replace [BRAND], [DISCIPLINE], [CITY] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Boxing and Strength Gym Website demo?
The Boxing and strength gym case was built by Claude Opus 5.5 in Cursor; the Muay Thai gym case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Boxing and Strength Gym Website template use?
Boxing and Strength Gym Website is a 2-page site built with React, Motion and Tailwind CSS, with text animation, marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Boxing and Strength Gym Website template for a client or a business?
The Boxing and Strength Gym Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Boxing and Strength Gym Website template work on mobile?
Yes. Every Boxing and Strength Gym Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Boxing and Strength Gym Website on VibeFather](https://vibefather.ai/templates/boxing-and-strength-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
