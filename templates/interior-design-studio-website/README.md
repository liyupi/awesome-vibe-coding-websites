# Interior Design Studio Website

> Interior studio site with draggable before/after sliders, services, a five-step process, gallery of four rooms and a consultation form.

<a href="https://vibefather.ai/templates/interior-design-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/interior-design-studio-website/06740e7f-e14f-4a49-a3fc-0dea0da94798/webp.06014a2bbc.webp" width="100%" alt="Interior Design Studio Website — Interior Studio with Before/After built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interior-design-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page site for an interior design studio: a finished-room hero, two draggable before/after sliders on signature rooms (arrow keys work too), three services with plain deliverables, a five-step process timeline from listen to style, a four-room gallery with scope and one line each, a materials palette strip drawn in CSS swatches, and a consultation request form (room, budget band, timeline, contact) that confirms client-side. The default content follows an invented two-woman studio, but the structure suits any design practice — staging, landscape, renovation: change the studio name, city, style words and services and every section still reads true. The before/after slider is hand-rolled: a centered handle, pointer drag, keyboard arrows and ARIA labeling, with both images generated in matched pairs so the reveal is believable. The look is warm modern editorial: greige and bone surfaces, espresso ink, one bronze accent, Fraunces headlines over Albert Sans, with full-width photography and unhurried reveals. To adapt it, swap the variables and rewrite the copy in one content file; projects, services and process all read from it.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Portfolio](../../types/portfolio.md) |
| Style | [Editorial](../../styles/editorial.md), [Luxury](../../styles/luxury.md) |
| Effects | Drag & Physics, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interior-design-studio-website?case=06740e7f-e14f-4a49-a3fc-0dea0da94798&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interior-design-studio-website/06740e7f-e14f-4a49-a3fc-0dea0da94798/shot_desktop.114b5341a6.webp" width="100%" alt="Interior Design Studio Website — Residential design studio, built by GLM-5.3 in ZCode"></a><br>
<b>Residential design studio</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/interior-design-studio-website?case=06740e7f-e14f-4a49-a3fc-0dea0da94798&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interior-design-studio-website?case=e267fc4d-035c-40ac-aff4-c26848a85227&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interior-design-studio-website/e267fc4d-035c-40ac-aff4-c26848a85227/shot_desktop.542ad50b7e.webp" width="100%" alt="Interior Design Studio Website — Hospitality design studio, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Hospitality design studio</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/interior-design-studio-website?case=e267fc4d-035c-40ac-aff4-c26848a85227&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[STUDIO]` | Studio name | Fieldhouse & Vale |
| `[CITY]` | City | Portland, Oregon |
| `[STYLE_WORDS]` | Style words | warm, quiet and collected |
| `[SCOPES]` | Scope of work | whole homes and single rooms |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add interior-design-studio-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A home staging company: set STUDIO and CITY to your business, swap the four gallery rooms for staged listings and change the services to consultations, styling and install days.
- A landscape design practice: rewrite STYLE_WORDS for outdoor rooms, replace the materials strip with hardscape and planting swatches, and use the before/after sliders for garden transformations.
- A small hospitality design studio: set SCOPES to inns and restaurants, rewrite the four projects as dining rooms and lobbies, and point the consultation form's room options at commercial spaces.
- A solo interior designer: set STUDIO to your own name, trim the services to your offer, and rewrite the five process steps in your voice while keeping the timeline layout.

## FAQ

### How do the before/after sliders on the Interior Design Studio Website template work?
The Interior Design Studio Website template hand-rolls two draggable before/after sliders on signature rooms. A centered handle with a circular grip moves with the pointer, and the before image is clipped so dragging right reveals more of the after shot. Arrow keys step the reveal by 5 percent, Home and End snap to the ends, and each slider is labeled for screen readers. Both images are generated in matched pairs so the reveal looks believable.

### What does the consultation form on the Interior Design Studio Website template ask for?
The consultation form on the Interior Design Studio Website template asks for room, budget band, timeline, name, email and a short note. It confirms client-side with a sent card and keeps answers in browser storage, so nothing is submitted anywhere. To receive real requests, point the form at your own mailing list or form service. The room options follow the SCOPES variable, so they change with the work you take on.

### How do I change the studio name, city and style words on the Interior Design Studio Website template?
Set STUDIO, CITY, STYLE_WORDS and SCOPES in the content file, then rewrite the headlines, captions and project lines to match. The Interior Design Studio Website template reads the wordmark, page title, footer, email address, hero line, materials caption, services intro and gallery from those values, so every section stays consistent. Keep the same tone and length when you rewrite, and replace the room photos with your own before/after pairs.

### What sections are included in the Interior Design Studio Website template?
The Interior Design Studio Website template is one page with a finished-room hero, two before/after sliders, three services with deliverables, a five-step process timeline, a four-room gallery with scope and one line each, a materials palette strip drawn in CSS swatches, and a consultation form. A footer closes the page. Every section reads from one content file, so projects, services and process can be swapped without touching the layout.

### Can I use the Interior Design Studio Website template for a landscape or staging business?
Yes. The Interior Design Studio Website template suits any design practice, including staging, landscape and renovation work. Change the studio name, city, style words and scopes, then rewrite the services, the five process steps and the four gallery rooms for your projects. The before/after sliders work for any transformation, and the consultation form's room options follow the scopes you set.

### How do I build an interior design studio website with AI?
Copy the prompt from this page or run npx vibefather add interior-design-studio-website, replace [STUDIO], [CITY], [STYLE_WORDS] and [SCOPES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interior Design Studio Website demo?
The Residential design studio case was built by GLM-5.3 in ZCode; the Hospitality design studio case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Interior Design Studio Website template use?
Interior Design Studio Website is a single-page site built with Tailwind CSS, Motion and React, with drag & physics, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Interior Design Studio Website template for a client or a business?
The Interior Design Studio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Interior Design Studio Website template work on mobile?
Yes. Every Interior Design Studio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Interior Design Studio Website on VibeFather](https://vibefather.ai/templates/interior-design-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
