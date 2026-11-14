# Aquarium Exhibits and Tickets Website

> A deep-blue aquarium site with drifting caustic light, zone exhibits, a feeding schedule and timed tickets.

<a href="https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/aquarium-exhibits-and-tickets-website/a3c685dd-942c-441a-8b0a-e40f60119f35/webp.632ac8be26.webp" width="100%" alt="Aquarium Exhibits and Tickets Website — Deep-Blue Aquarium with Timed Tickets built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a one-page website for a city aquarium, run on a dark, deep-blue canvas: exhibits organized into five color-coded zones, animal residents shown as portrait cards, a weekly feeding-and-talks schedule, a timed-entry picker and three quiet membership tiers. The default content is an invented harbor aquarium with four spotlight animals, from a moon jellyfish hero portrait to an aging sea turtle, a drawn SVG floor map of the zones, and visit details on an invented wharf. The look is midnight-navy water under slowly drifting caustic light patterns drawn entirely in CSS and SVG, with one bioluminescent cyan accent for links, chips and ticket states. Headlines sit in a calm, wide sans with mono type reserved for times, depths and zone numbers, and every animal photograph is a single subject lit by one spotlight from above, like a portrait. The timed-ticket picker uses weekday chips and sample time slots with availability states, saves the choice to the browser, and says plainly that it is a sample with no booking behind it. The template suits aquariums, zoos, butterfly houses, botanical gardens and any visit-based attraction selling timed entry and memberships. It is a Vite + React + Tailwind build with Motion for calm, staggered reveals; fonts self-host through Fontsource, and images download into the project so the build stays fully local. To adapt it, change the brand, city, mascot animal and ticket price variables, swap the six photographs for your own animals, and rewrite zones, residents and schedule in one content file; the caustics, map and picker carry over unchanged.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Glass](../../styles/glass.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?case=a3c685dd-942c-441a-8b0a-e40f60119f35&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/aquarium-exhibits-and-tickets-website/a3c685dd-942c-441a-8b0a-e40f60119f35/shot_desktop.09eae3cdfd.webp" width="100%" alt="Aquarium Exhibits and Tickets Website — Lumen Bay Aquarium, built by GLM-5.3 in ZCode"></a><br>
<b>Lumen Bay Aquarium</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?case=a3c685dd-942c-441a-8b0a-e40f60119f35&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?case=db4224ba-c0c5-4847-bfc0-512b94c9ee23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/aquarium-exhibits-and-tickets-website/db4224ba-c0c5-4847-bfc0-512b94c9ee23/shot_desktop.cd4855ded9.webp" width="100%" alt="Aquarium Exhibits and Tickets Website — Butterfly conservatory, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Butterfly conservatory</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?case=db4224ba-c0c5-4847-bfc0-512b94c9ee23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Aquarium name | Lumen Bay Aquarium |
| `[CITY]` | City / harbor | Port Meridian |
| `[HERO_ANIMAL]` | Hero resident | Aurelia, the moon jelly |
| `[TICKET_PRICE]` | Adult ticket | $24 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add aquarium-exhibits-and-tickets-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A butterfly conservatory: set BRAND and CITY to your house, swap the jellyfish hero for a butterfly portrait, and rename the five zones to glasshouse habitats with their own colors.
- A small city zoo: keep the timed-entry picker, replace the residents with your animals and rewrite the feeding schedule as keeper talks and feeding times.
- A botanical garden: set HERO_ANIMAL to a signature plant or bloom, relabel zones as garden rooms, and turn the membership tiers into annual garden passes.
- A science center or nature museum: use the drawn floor map for your halls, swap the schedule for daily demonstrations, and set TICKET_PRICE to your adult admission.

## FAQ

### How do I change the aquarium name, city and ticket price in the Aquarium Exhibits and Tickets Website template?
The Aquarium Exhibits and Tickets Website template exposes four variables: BRAND, CITY, HERO_ANIMAL and TICKET_PRICE. Set BRAND to your aquarium name, CITY to your harbor or city, HERO_ANIMAL to the resident you want in the headline and hero portrait, and TICKET_PRICE to your adult timed-entry price. The brand also drives the wordmark, footer and the browser storage key for the saved ticket pick.

### How does the timed-entry ticket picker work if there is no booking system behind it?
The timed-entry picker in the Aquarium Exhibits and Tickets Website template shows weekday chips and sample time slots with availability states, then saves your chosen slot in the browser under a key built from the brand name. The page says plainly that it is a sample with no booking behind it. To take real reservations, keep the picker layout and connect the chosen slot to your own ticketing or booking service.

### What does the floor map and the five zones section include?
The Aquarium Exhibits and Tickets Website template draws an SVG floor map with five numbered blocks: Shallow Reef, Drifting Gardens, Kelp Cathedral, Twilight Depths and Shore Pools, plus an entrance arrow. Clicking a block scrolls to its card. Each zone card carries its own color, depth tag and one-line description, and the matching map block fills in when the card crosses mid-viewport.

### Can the Aquarium Exhibits and Tickets Website template be used for a zoo, butterfly house or botanical garden?
Yes. The Aquarium Exhibits and Tickets Website template suits any visit-based attraction selling timed entry and memberships, including zoos, butterfly houses and botanical gardens. Rename the five zones, swap the four resident portrait cards for your animals or plants, rewrite the feeding-and-talks schedule as your daily talks, and set the brand and city variables. The caustics, floor map and ticket picker carry over unchanged.

### How do I swap the six animal photographs and the resident cards for my own?
The Aquarium Exhibits and Tickets Website template ships with six generated underwater images, each showing one animal lit by a single spotlight from above. Replace them with your own photographs in the same 3:4 and card crops, then edit the residents section in the content file: name, species line, fact and the zone pill. Keep one subject per frame on dark water so the portrait treatment stays consistent.

### How do I build an aquarium exhibits and tickets website with AI?
Copy the prompt from this page or run npx vibefather add aquarium-exhibits-and-tickets-website, replace [BRAND], [CITY], [HERO_ANIMAL] and [TICKET_PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Aquarium Exhibits and Tickets Website demo?
The Lumen Bay Aquarium case was built by GLM-5.3 in ZCode; the Butterfly conservatory case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Aquarium Exhibits and Tickets Website template use?
Aquarium Exhibits and Tickets Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Aquarium Exhibits and Tickets Website template for a client or a business?
The Aquarium Exhibits and Tickets Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Aquarium Exhibits and Tickets Website template work on mobile?
Yes. Every Aquarium Exhibits and Tickets Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Aquarium Exhibits and Tickets Website on VibeFather](https://vibefather.ai/templates/aquarium-exhibits-and-tickets-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
