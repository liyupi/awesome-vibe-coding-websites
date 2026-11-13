# Travel Agency Tour Packages Website <sup>PRO</sup>

> Three-page tour operator site with filterable packages, day-by-day itineraries, drawn route maps and booking requests.

<a href="https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/travel-agency-tour-packages-website/0bb729a5-85a9-4861-8f86-26b62ca59552/webp.bbe1902d95.webp" width="100%" alt="Travel Agency Tour Packages Website — Tour Operator Site with Itineraries built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A three-page website for a small-group tour operator: a home page with the promise and featured trips, a tour listing with working filters for region, length, price band and style, and a tour detail page with a day-by-day itinerary accordion, a drawn route map, inclusions and exclusions, and a booking request form that confirms client-side. The default content follows an invented operator running trips across Norway, Scotland and the Alps, but the structure suits any destination set: change the brand, destinations, founding year and group maximum and every tour, filter and itinerary still reads true. The listing keeps a live count as filters combine; the detail page opens from the listing's query and shows the first tour when opened directly, never an error. The look is wide-open travel editorial: off-white paper, deep sea-blue ink, one coral accent, Lora headlines over Public Sans, big landscape photography and stamp-and-ticket motifs drawn in SVG. Photography shows fjords, highlands, passes, villages and harbors — no faces anywhere. To adapt it, swap the variables and rewrite the copy in one content file; tours, days, prices and departures all read from it.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Agency](../../types/agency.md) |
| Style | [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 3 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/travel-agency-tour-packages-website?case=0bb729a5-85a9-4861-8f86-26b62ca59552&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/travel-agency-tour-packages-website/0bb729a5-85a9-4861-8f86-26b62ca59552/shot_desktop.6ed0ac2903.webp" width="100%" alt="Travel Agency Tour Packages Website — Nordic and Highland tours, built by GLM-5.3 in ZCode"></a><br>
<b>Nordic and Highland tours</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/travel-agency-tour-packages-website?case=0bb729a5-85a9-4861-8f86-26b62ca59552&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/travel-agency-tour-packages-website?case=28519468-e7f7-4ae9-b373-0113902ab56a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/travel-agency-tour-packages-website/28519468-e7f7-4ae9-b373-0113902ab56a/shot_desktop.3f7f52d082.webp" width="100%" alt="Travel Agency Tour Packages Website — Iberian and Moroccan tours, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Iberian and Moroccan tours</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/travel-agency-tour-packages-website?case=28519468-e7f7-4ae9-b373-0113902ab56a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Operator name | Northbound Trails |
| `[DESTINATIONS]` | Destinations | Norway, Scotland and the Alps |
| `[FOUNDED]` | Year founded | 2013 |
| `[GROUP_MAX]` | Group maximum | 12 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A walking-tour company: set [DESTINATIONS] to your trail regions, [GROUP_MAX] to your walking group cap, and rewrite each day's itinerary with distances and ascent instead of ferry crossings.
- A food and wine tour operator: keep the filter rail but relabel style to tasting, cooking or market, and swap the route map stops for vineyards and producers in your content file.
- A solo guide running photo expeditions: set [BRAND] to your name and [GROUP_MAX] to six, then change the why-us strip and testimonials to speak to photographers rather than general travelers.
- A cycling holiday specialist: point the day-by-day accordion at ride stages with mileage and climb, and replace the included and excluded lists with bike hire, luggage transfer and support van details.

## FAQ

### How do the tour filters work on the Travel Agency Tour Packages Website template?
The tour listing page on the Travel Agency Tour Packages Website template combines four filters: region, length, price band and style. They narrow the results together rather than one at a time, and a live count updates as you combine them. The regions come from your DESTINATIONS variable, so changing it to your own three regions rewires the region picker and every tour assignment without touching the filter logic.

### How do I change the tours, prices and departures in the Travel Agency Tour Packages Website template?
Every tour, day, price and departure in the Travel Agency Tour Packages Website template reads from one content file. Rewrite that file with your own trips and the listing, detail page, itinerary accordion, route map and booking form all follow. The four variables BRAND, FOUNDED, GROUP_MAX and DESTINATIONS sit at the top and flow into the wordmark, footer, group cap and region filter.

### What happens when someone submits the booking request form on the Travel Agency Tour Packages Website template?
The booking request form on the Travel Agency Tour Packages Website template confirms in the browser and shows a reference built from your brand initials. Nothing is sent anywhere because the template has no backend. To receive real requests, connect the form to your own email service or booking tool, keeping the departure select, travelers stepper and reference card as they are.

### Who is the Travel Agency Tour Packages Website template designed for?
The Travel Agency Tour Packages Website template suits small-group tour operators and travel agencies that want a three-page site with filterable packages, day-by-day itineraries, drawn route maps and booking requests. The default content follows an invented operator running trips across Norway, Scotland and the Alps for groups capped at twelve, but the structure fits any destination set once you change the variables and rewrite the copy.

### Can I use the Travel Agency Tour Packages Website template for a client's travel business?
Commercial and client use of the Travel Agency Tour Packages Website template needs Pro. The template is a Pro one: its brief, stack and variables are public, and Pro members get the full prompt plus the source code of the demos. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0.

### How do I build a travel agency tour packages website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add travel-agency-tour-packages-website, replace [BRAND], [DESTINATIONS], [FOUNDED] and [GROUP_MAX] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Travel Agency Tour Packages Website demo?
The Nordic and Highland tours case was built by GLM-5.3 in ZCode; the Iberian and Moroccan tours case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Travel Agency Tour Packages Website template use?
Travel Agency Tour Packages Website is a 3-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Travel Agency Tour Packages Website template free to use?
Travel Agency Tour Packages Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Travel Agency Tour Packages Website template work on mobile?
Yes. Every Travel Agency Tour Packages Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Travel Agency Tour Packages Website on VibeFather](https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
