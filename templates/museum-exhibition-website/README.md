# Museum Exhibition Website

> A gallery-white exhibition site with an oversized serif, zoomable object photography and timed tickets.

<a href="https://vibefather.ai/templates/museum-exhibition-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/museum-exhibition-website/ce571849-a3db-4422-9146-7a5cb24b01f6/webp.7c7ceeca68.webp" width="100%" alt="Museum Exhibition Website — Gallery-White Museum with Object Zoom built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/museum-exhibition-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a gallery-white exhibition website for a museum show: one striking object photograph as the hero, an oversized serif title, and a calm stack of information underneath. The default content is an invented exhibition about timekeeping before the clock, with six studio-photographed artifacts — a bronze spiral water clock, a notched tide bowl, a black-sand glass, a knotted counting cord — each shown on a neutral gray backdrop with soft museum light. Object highlights open an inline inspection view: the image zooms and pans with local CSS transforms, dragged directly with the pointer, with zoom controls and a reset; nothing loads from an image service. Around the objects sit a quiet visit block with an hours table and directions, a timed-ticket picker using weekday chips and sample slots that saves locally and says so, a four-event sample programme and a small shop teaser with code-drawn product cards. The look is warm white, near-black ink, hairline rules and a single museum blue accent; display type is a characterful serif at editorial scale, body text a neutral sans, with mono for times and labels. The template suits museums, galleries, archives, design fairs and touring exhibitions that sell timed entry. It is a Vite + React + Tailwind build with Motion for unhurried reveals; fonts self-host through Fontsource and images download into the project so the build stays fully local. To adapt it, change the museum, city, show name and ticket price variables, swap the object photographs, and rewrite the object captions and events in one content file; the zoom viewer, picker and calendar carry over unchanged.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Drag & Physics, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/museum-exhibition-website?case=ce571849-a3db-4422-9146-7a5cb24b01f6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/museum-exhibition-website/ce571849-a3db-4422-9146-7a5cb24b01f6/shot_desktop.740c383d8b.webp" width="100%" alt="Museum Exhibition Website — Measure of Days, built by GLM-5.3 in ZCode"></a><br>
<b>Measure of Days</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/museum-exhibition-website?case=ce571849-a3db-4422-9146-7a5cb24b01f6&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/museum-exhibition-website?case=9f199789-f2cc-472f-8764-d8f4bf9fa9fe&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/museum-exhibition-website/9f199789-f2cc-472f-8764-d8f4bf9fa9fe/shot_desktop.46e0edb2fd.webp" width="100%" alt="Museum Exhibition Website — Quiet horology museum, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Quiet horology museum</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/museum-exhibition-website?case=9f199789-f2cc-472f-8764-d8f4bf9fa9fe&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Museum name | The Meridian House |
| `[CITY]` | City | Ashport |
| `[SHOW_NAME]` | Exhibition title | Measure of Days |
| `[TICKET_PRICE]` | Adult ticket | $18 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add museum-exhibition-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A photography gallery: set BRAND and CITY to your space, replace the six artifact photographs with prints from the current show, and rewrite each caption with the photographer, process and year.
- A design fair: keep the timed-ticket picker, set SHOW_NAME to the fair, and turn the four-event programme into talks and preview slots with times in the mono labels.
- A local history archive: swap the timekeeping objects for documents and tools from your collection, and use the visit block for reading-room hours and directions.
- A touring exhibition: set BRAND to the touring organiser, list each stop in the events programme, and point the directions copy at each venue's address.

## FAQ

### How does the object zoom work on the Museum Exhibition Website template?
Each artifact photograph sits in a fixed frame and opens an inline inspection view when clicked. The image scales from 1 to 3 and pans with the pointer, with plus, minus and reset buttons and Escape to return to normal. The zoom uses local CSS transforms, so nothing loads from an image service and the build stays fully local.

### What do I need to change to turn the Museum Exhibition Website template into my own show?
Change the four variables first: BRAND sets the museum name and wordmark, CITY sets the eyebrow and address, SHOW_NAME becomes the oversized serif headline, and TICKET_PRICE drives the picker and total line. Then swap the six artifact photographs and rewrite the object captions, events, hours and shop items in the single content file. The zoom viewer, ticket picker and programme carry over unchanged.

### How does the timed-ticket picker on the Museum Exhibition Website template save a visit?
The picker uses weekday chips and sample time slots, then shows a confirmation panel with the adult price from TICKET_PRICE. The chosen slot is saved in the browser under a key built from your museum name and the page states that it is stored locally. There is no backend, so the pick is a saved preference rather than a paid booking.

### Is the Museum Exhibition Website template free, and can I adapt it for a real gallery?
The Museum Exhibition Website template is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, and commercial or client work needs Pro. Pro also gives the full prompt and source code of the demos. The page is a single landing page in English, so a real gallery would adapt the copy and photographs rather than add new pages.

### Can I use the Museum Exhibition Website template for a design fair or a touring exhibition instead of a museum?
Yes. The Museum Exhibition Website template is built for any venue that sells timed entry, including galleries, archives, design fairs and touring shows. Set BRAND and CITY to the organiser and location, put the fair or tour name in SHOW_NAME, and rewrite the object captions and four-event programme for the exhibitors or stops on the tour.

### How do I build a museum exhibition website with AI?
Copy the prompt from this page or run npx vibefather add museum-exhibition-website, replace [BRAND], [CITY], [SHOW_NAME] and [TICKET_PRICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Museum Exhibition Website demo?
The Measure of Days case was built by GLM-5.3 in ZCode; the Quiet horology museum case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Museum Exhibition Website template use?
Museum Exhibition Website is a single-page site built with React, Motion and Tailwind CSS, with drag & physics and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Museum Exhibition Website template for a client or a business?
The Museum Exhibition Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Museum Exhibition Website template work on mobile?
Yes. Every Museum Exhibition Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Museum Exhibition Website on VibeFather](https://vibefather.ai/templates/museum-exhibition-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
