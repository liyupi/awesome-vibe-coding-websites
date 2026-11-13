# Drone Services Company Website

> A crisp drone-services site with full-bleed aerial photography and a draggable before/after mapping slider.

<a href="https://vibefather.ai/templates/drone-services-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/drone-services-company-website/6ef97bed-5043-4da4-89da-33af55ce2f35/webp.1290c1d649.webp" width="100%" alt="Drone Services Company Website — Drone Services Site with Map Slider built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/drone-services-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a crisp, white-on-aerial services site for a drone company, built with React, Tailwind CSS and Motion. The first screen is one sweeping top-down photograph — coast, farmland or city grid — with the headline set white into the lower third and mono telemetry chips (altitude, ground resolution, wind) pinned under the header. The photo drifts on a subtle parallax as you scroll. Services follow as three photo cards — inspection, mapping and filming — each with deliverable chips like ORTHOMOSAIC or THERMAL PAIRS and a sample day rate. The centerpiece interaction is the before/after mapping slider: one aerial scene with a draggable divider, where the survey side is generated live in canvas from the raw image — desaturated pass, survey grid, contour lines and orange flight waypoints drawn on top with a seeded, deterministic algorithm — and the caption stays honest that it is a sample pair processed in the browser.

An industries row with invented proof numbers, a six-shot aerial gallery with mono captions, a three-step flight-day strip and a client-side quote form close the page. It suits drone operators, surveyors, photographers and any field-services business whose portfolio is the pitch; swap the photos and the copy carries over to roofing inspection, environmental monitoring or construction progress work.

To adapt it, change the brand, the service region, the audience and the day rate; every headline, project caption and proof line rewrites from those values while the layout, slider and gallery stay. The palette is white and slate over cool sky blues with one signal-orange accent reserved for CTAs, the slider handle and waypoint markers. All six photographs share one flight's light — clear mid-morning, crisp shadows — so the page reads as one operator's book.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Agency](../../types/agency.md), [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Swiss](../../styles/swiss.md) |
| Effects | Parallax, Drag & Physics |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/drone-services-company-website?case=6ef97bed-5043-4da4-89da-33af55ce2f35&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/drone-services-company-website/6ef97bed-5043-4da4-89da-33af55ce2f35/shot_desktop.45a4d961b2.webp" width="100%" alt="Drone Services Company Website — Aerial survey company, built by GLM-5.3 in ZCode"></a><br>
<b>Aerial survey company</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/drone-services-company-website?case=6ef97bed-5043-4da4-89da-33af55ce2f35&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/drone-services-company-website?case=2b6afae9-21d4-4402-82a4-4ef03a8c3fc9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/drone-services-company-website/2b6afae9-21d4-4402-82a4-4ef03a8c3fc9/shot_desktop.8c91e743d0.webp" width="100%" alt="Drone Services Company Website — Mountain West surveyor, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Mountain West surveyor</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/drone-services-company-website?case=2b6afae9-21d4-4402-82a4-4ef03a8c3fc9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Ternbay |
| `[SERVICE_REGION]` | Service region | the Pacific Northwest |
| `[AUDIENCE]` | Client type | civil engineering firms, county surveyors and film crews |
| `[DAY_RATE]` | Starting day rate | $640 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add drone-services-company-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A roofing inspection crew: set BRAND and SERVICE_REGION to your coverage area, rewrite the three service cards for storm damage and roof surveys, and swap the gallery for your own roof aerials.
- An environmental monitoring consultancy: keep the mapping slider, change AUDIENCE to land trusts and agencies, and relabel the deliverable chips for thermal pairs and vegetation indices.
- A construction progress firm: set DAY_RATE to your monthly monitoring rate, rewrite the flight-day strip around scheduled site passes, and caption the gallery with project stages.
- A solo drone photographer: set BRAND to your name, change the service region to your city, and replace the survey proof lines with filming and real-estate caption work.

## FAQ

### How does the before/after mapping slider on the Drone Services Company Website work?
The Drone Services Company Website template places a canvas layer over one aerial photograph and draws the survey side live in the browser with a seeded algorithm: a desaturated pass, a survey grid, contour lines and orange flight waypoints. You drag or use the keyboard to move the divider between the raw photo and the processed view. The caption states it is a sample pair, so the page never claims a real dataset.

### What do I need to change first to make the drone services template my own company?
Start with the four variables on the Drone Services Company Website template: set BRAND to your company name, SERVICE_REGION to where you fly, AUDIENCE to the clients you want and DAY_RATE to your starting flight-day price. Every headline, industries proof line, gallery caption and quote-form label rewrites from those values, while the layout, slider and gallery stay as they are.

### Can I use the drone services template for roofing inspections or environmental monitoring instead of survey work?
Yes. The Drone Services Company Website template is built for any field-services business whose portfolio is the pitch. Swap the six aerial photographs and rewrite the service cards, deliverable chips and project captions for roofing inspection, construction progress or environmental monitoring, and the hero, slider and gallery structure carry over without layout changes.

### Is the Drone Services Company Website template free to use?
The Drone Services Company Website template is free for personal, non-commercial use, and its prompt and DESIGN.md are published under CC BY-NC 4.0. Commercial work, client projects and the source code of the demos need Pro. Pro members also see the full prompt, while the brief, stack and variables stay public on the page.

### Where does the quote form on the drone services site send enquiries?
The quote form on the Drone Services Company Website template is client-side only. The site is static with no backend and no external APIs, so the form collects a project brief in the browser and does not deliver email on its own. Connect it to your own form endpoint or mailing list before you use the page to take real enquiries.

### How do I build a drone services company website with AI?
Copy the prompt from this page or run npx vibefather add drone-services-company-website, replace [BRAND], [SERVICE_REGION], [AUDIENCE] and [DAY_RATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Drone Services Company Website demo?
The Aerial survey company case was built by GLM-5.3 in ZCode; the Mountain West surveyor case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Drone Services Company Website template use?
Drone Services Company Website is a single-page site built with Tailwind CSS, Motion and React, with parallax and drag & physics. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Drone Services Company Website template for a client or a business?
The Drone Services Company Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Drone Services Company Website template work on mobile?
Yes. Every Drone Services Company Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Drone Services Company Website on VibeFather](https://vibefather.ai/templates/drone-services-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
