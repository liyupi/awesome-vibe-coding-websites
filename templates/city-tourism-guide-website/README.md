# City Tourism Guide Website

> A sun-bright city guide with color-block categories, day itineraries, and a browser-saved trip shortlist.

<a href="https://vibefather.ai/templates/city-tourism-guide-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/city-tourism-guide-website/75d52f3e-f439-466d-8b12-bbcb66b90e20/webp.acda313b63.webp" width="100%" alt="City Tourism Guide Website — City Guide with Trip Planner built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/city-tourism-guide-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

City Tourism Guide Website is a magazine-bright destination guide for a fictional coastal city. It suits tourism marketers, city magazines, and travel creators who want a guide that reads like a print feature and works like a tool. The first screen is anchored by a colorful street photograph under a giant editorial headline, with warm paper tones below and bold coral, teal and sunflower-yellow blocks dividing the city into moods: eat, see, do and relax. Each block carries a photo and five opinionated stops, and every stop can be saved with one tap. The page continues with an illustrated neighborhood map drawn as hand-inked SVG beside four area cards, ready-made one, two and three-day itineraries with numbered stops, and a season-labeled events marquee. A trip-planner shortlist docks to the bottom of the screen and opens a drawer that groups saved stops by category; everything persists in the browser through localStorage and says so plainly. Visually the template pairs chunky Fraunces headlines with Karla text on warm paper, sharp color blocks, and one consistent sunny photographic grade across six generated photos. Motion is restrained: scroll reveals, a pausable marquee, and small plus-to-check pops. Adaptation happens through four variables — city name, what it is known for, who visits, and the signature seasonal event — with all copy kept in one content file. The alternate case reworks the same layout for a surf town, showing how the structure survives a different city and audience. No real dates appear anywhere: events carry season labels only, keeping the guide evergreen.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Marquee, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/city-tourism-guide-website?case=75d52f3e-f439-466d-8b12-bbcb66b90e20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/city-tourism-guide-website/75d52f3e-f439-466d-8b12-bbcb66b90e20/shot_desktop.38eba24f3e.webp" width="100%" alt="City Tourism Guide Website — Coastal city guide, built by GLM-5.3 in ZCode"></a><br>
<b>Coastal city guide</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/city-tourism-guide-website?case=75d52f3e-f439-466d-8b12-bbcb66b90e20&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/city-tourism-guide-website?case=2d52b8ce-7c52-4b72-95d7-d1840e01eba3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/city-tourism-guide-website/2d52b8ce-7c52-4b72-95d7-d1840e01eba3/shot_desktop.7cc033c94a.webp" width="100%" alt="City Tourism Guide Website — Surf-town city guide, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Surf-town city guide</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/city-tourism-guide-website?case=2d52b8ce-7c52-4b72-95d7-d1840e01eba3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | City name | Solmara |
| `[KNOWN_FOR]` | Known for | citrus groves, fishing piers and a lighthouse point |
| `[AUDIENCE]` | Who visits | weekend wanderers, food lovers and young families |
| `[SIGNATURE_EVENT]` | Signature event | Marigold Lantern Regatta |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add city-tourism-guide-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A regional tourism board: set BRAND to your destination, rewrite KNOWN_FOR and AUDIENCE, and replace the six photos with local street, market and landmark shots.
- A city magazine: keep the editorial Fraunces headlines, swap the four color blocks to your city's districts, and use the itineraries section for weekend features.
- A surf-town guide: follow the alternate demo, set KNOWN_FOR to breaks and tides, and rewrite the Do block around lessons, board hire and dawn sessions.
- A travel creator's city hub: set BRAND to the city you cover, rewrite the stops in your own voice, and point the footer link to your newsletter.

## FAQ

### How does the trip shortlist on the City Tourism Guide Website work, and does it need a login?
The City Tourism Guide Website saves stops in the visitor's own browser through localStorage, so no account or backend is needed. Tapping the Plus button on any stop flips it to a Check and adds it to a shortlist that docks at the bottom of the screen. The drawer groups saved stops by category, and the header Shortlist pill appears with a coral count badge once the first stop is saved.

### What are the four variables I need to change to make this city guide my own?
The City Tourism Guide Website adapts through four variables: BRAND for the city name, KNOWN_FOR for what the city is famous for, AUDIENCE for who visits, and SIGNATURE_EVENT for the headline seasonal event. All copy lives in one content file, so rewriting those values and the stops, neighborhoods, itineraries and events in that file rewrites the whole guide without touching the layout.

### How do I add a wine club signup or mailing list form to a city guide built with this template?
The City Tourism Guide Website has no backend or form handling, so a signup form is something you add rather than configure. Place it in the footer or below the itineraries, style it with the Cream card surface and 4px input radius, and point it at your own mailing list service. The events marquee and shortlist drawer show where a secondary call to action fits without breaking the magazine rhythm.

### Can I change the color-coded Eat, See, Do and Relax blocks to match my city's brand colors?
The City Tourism Guide Website defines its palette as tokens: Paper, Cream, Ink, Coral, Teal and Sunflower. The Eat block uses Coral, See uses Teal, Do uses Sunflower and Relax uses Ink with Cream text. Changing those tokens in the Tailwind configuration recolors the blocks, marquee band, itinerary number circles and map dots together, so the guide stays consistent.

### What should I change first after generating the City Tourism Guide Website, and what should I watch out for?
Start with the four variables and the content file, since every headline, stop, neighborhood, itinerary and event is written for the default coastal city. Replace the six photos with your own warm-grade street, market, lighthouse, harbor, cove and plaza shots, and keep events as season labels rather than dates so the guide stays evergreen. Check the shortlist drawer and mobile menu after your edits.

### How do I build a city tourism guide website with AI?
Copy the prompt from this page or run npx vibefather add city-tourism-guide-website, replace [BRAND], [KNOWN_FOR], [AUDIENCE] and [SIGNATURE_EVENT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the City Tourism Guide Website demo?
The Coastal city guide case was built by GLM-5.3 in ZCode; the Surf-town city guide case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the City Tourism Guide Website template use?
City Tourism Guide Website is a single-page site built with React, Motion and Tailwind CSS, with marquee, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the City Tourism Guide Website template for a client or a business?
The City Tourism Guide Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the City Tourism Guide Website template work on mobile?
Yes. Every City Tourism Guide Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [City Tourism Guide Website on VibeFather](https://vibefather.ai/templates/city-tourism-guide-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
