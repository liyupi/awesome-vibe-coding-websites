# Architecture Firm Portfolio <sup>PRO</sup>

> Architecture practice site with studio photographs, a filterable project index, project pages with drawn SVG plans, awards and contact.

<a href="https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/architecture-firm-portfolio/c1a00070-1046-476e-83b6-0ffe310ea343/webp.821e2fbbd4.webp" width="100%" alt="Architecture Firm Portfolio — Architecture Portfolio with Plans built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A four-page website for an architecture practice: a home page with one large hero project and a three-project tease; a project index of twelve works filterable by typology (housing, cultural, education, retrofit) with a live count; project detail pages (query-driven, first project when opened without one) carrying large photographs, a facts block (location, area, span, status) and a floor plan drawn in SVG with room labels; a studio page with the practice's story, its approach in three points, people as initials cards, an awards strip and a contact block with a client-side inquiry line. The default content follows an invented seven-person practice, but the structure suits any architecture or interior practice: change the practice name, city and approach and every project, plan and award still reads true. The typographic system feels like a drawing set — numbered sections, hairline rules, uppercase labels — in pale concrete gray with near-black ink and one rust accent, Archivo wide-caps display over IBM Plex Sans. All twelve project photographs come from one consistent generated shoot: concrete, wood and light, no people. To adapt it, swap the variables and rewrite the copy in one content file; projects, plans and awards all read from it.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md) |
| Style | [Minimal](../../styles/minimal.md), [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 4 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/architecture-firm-portfolio?case=c1a00070-1046-476e-83b6-0ffe310ea343&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/architecture-firm-portfolio/c1a00070-1046-476e-83b6-0ffe310ea343/shot_desktop.514934600e.webp" width="100%" alt="Architecture Firm Portfolio — Seven-person architecture practice, built by GLM-5.3 in ZCode"></a><br>
<b>Seven-person architecture practice</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/architecture-firm-portfolio?case=c1a00070-1046-476e-83b6-0ffe310ea343&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/architecture-firm-portfolio?case=67943fdd-a9ae-4fcf-a72b-b152158ac07a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/architecture-firm-portfolio/67943fdd-a9ae-4fcf-a72b-b152158ac07a/shot_desktop.4697621ec9.webp" width="100%" alt="Architecture Firm Portfolio — Landscape architecture practice, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Landscape architecture practice</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/architecture-firm-portfolio?case=67943fdd-a9ae-4fcf-a72b-b152158ac07a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[PRACTICE]` | Practice name | Cardinal & Grid |
| `[CITY]` | City | Montreal, Quebec |
| `[APPROACH]` | Approach | long-life buildings from short-list materials |
| `[TYPOLOGIES]` | Typologies | Housing, cultural, education and retrofit |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An interior design studio: set PRACTICE and CITY to your studio, rename TYPOLOGIES to residential, hospitality and workplace, and rewrite the studio story around interiors.
- A landscape architecture practice: keep the project index but swap the drawn floor plans for site plans and set APPROACH to planting and water strategy.
- A young two-person practice: trim the people cards to two initials, replace the awards strip with competition shortlists, and keep the twelve-project index as a growing record.
- A developer-facing studio: keep the facts block and inquiry card, but rewrite the home hero and approach strip to lead with feasibility and delivery experience.

## FAQ

### How do I change the practice name, city and approach in the Architecture Firm Portfolio template?
The Architecture Firm Portfolio template keeps every string in one content file, so you edit the PRACTICE, CITY, APPROACH and TYPOLOGIES variables there and the wordmark, page titles, footer, email address, studio story and project facts all follow. Set the practice name, city and approach phrase first, then rewrite the headlines and paragraphs to match your own practice.

### How does the filterable project index work on the Architecture Firm Portfolio template?
The Architecture Firm Portfolio template lists twelve works and filters them by the four typologies you set in TYPOLOGIES, such as housing, cultural, education and retrofit. A live count updates as visitors narrow the list, and an empty state appears when nothing matches. To adapt the index, change the typology names and the project entries in the content file so each project carries the right tag.

### Where do the floor plans on the project pages come from?
Each project page in the Architecture Firm Portfolio template carries a floor plan drawn in SVG with room labels, alongside a facts block for location, area, span and status. The plans are drawn per project rather than uploaded as images, so you edit the labels and shapes in the content file. If you would rather show a scanned plan, replace the drawing with an image and keep the facts block.

### How does the inquiry form work on the Architecture Firm Portfolio template?
The inquiry block on the Architecture Firm Portfolio template is client-side only: it records the name, email, typology interest and note in the browser and shows a sent state, but nothing is submitted anywhere. To receive real inquiries, connect the form to your own email service or point visitors to the studio email address shown in the footer and contact block.

### Can I use the Architecture Firm Portfolio template for an interior design or landscape studio?
The Architecture Firm Portfolio template suits any architecture, interior or landscape practice because the structure is typology-driven, not building-specific. One live demo already applies it to a landscape architecture practice. Change the practice name, city and approach, rename the typologies to your own work, and rewrite the studio story, people cards and awards so every project, plan and fact reads true.

### How do I build an architecture firm portfolio with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add architecture-firm-portfolio, replace [PRACTICE], [CITY], [APPROACH] and [TYPOLOGIES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Architecture Firm Portfolio demo?
The Seven-person architecture practice case was built by GLM-5.3 in ZCode; the Landscape architecture practice case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Architecture Firm Portfolio template use?
Architecture Firm Portfolio is a 4-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Architecture Firm Portfolio template free to use?
Architecture Firm Portfolio is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Architecture Firm Portfolio template work on mobile?
Yes. Every Architecture Firm Portfolio build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Architecture Firm Portfolio on VibeFather](https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
