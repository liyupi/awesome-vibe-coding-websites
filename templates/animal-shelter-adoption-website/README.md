# Animal Shelter Adoption Website

> Two-page shelter site with a filterable adoptable-pets grid, pet stories, an adoption application and donate/volunteer sections.

<a href="https://vibefather.ai/templates/animal-shelter-adoption-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/animal-shelter-adoption-website/bc973b02-01c5-424f-9fca-29ab7fb8f54b/webp.5de29e9926.webp" width="100%" alt="Animal Shelter Adoption Website — Animal Shelter with Pet Grid built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/animal-shelter-adoption-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for an animal shelter: a home page with the mission over a sunlit kennel-free photograph, a twelve-pet adoptable grid filterable by species, age and size with a live count; donate tiers with plain what-it-buys copy, four volunteer roles, and a sample-labeled statistics strip. Pet detail pages (query-driven, first pet when opened without one) tell each animal's story with traits and 'good with' notes and an adoption application that preselects the pet and confirms client-side. The default content follows an invented no-kill shelter, but the structure suits any rescue or adoption nonprofit: change the name, city and pet roster and every story, tier and role still reads true. The look is warm shelter honest: soft cream and warm gray, a friendly green primary, one tangerine accent, Quicksand's rounded display over Nunito Sans, pet cards with big photos, and paw and heart details drawn in SVG. All pets, staff and statistics are invented, with stats carrying a sample label and donate buttons clearly demo. Photography is one consistent generated set of animal portraits and shelter corners — no people. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/animal-shelter-adoption-website?case=bc973b02-01c5-424f-9fca-29ab7fb8f54b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/animal-shelter-adoption-website/bc973b02-01c5-424f-9fca-29ab7fb8f54b/shot_desktop.dd33bdcdf4.webp" width="100%" alt="Animal Shelter Adoption Website — No-kill shelter adoption, built by GLM-5.3 in ZCode"></a><br>
<b>No-kill shelter adoption</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/animal-shelter-adoption-website?case=bc973b02-01c5-424f-9fca-29ab7fb8f54b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/animal-shelter-adoption-website?case=3cffce88-073c-469e-9e30-933bbd9f251a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/animal-shelter-adoption-website/3cffce88-073c-469e-9e30-933bbd9f251a/shot_desktop.fa45e86a38.webp" width="100%" alt="Animal Shelter Adoption Website — Cat rescue adoption, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cat rescue adoption</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/animal-shelter-adoption-website?case=3cffce88-073c-469e-9e30-933bbd9f251a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[SHELTER]` | Shelter name | Second Snout Shelter |
| `[CITY]` | City | Madison, Wisconsin |
| `[PETS]` | Pets count | 12 |
| `[FOCUS]` | Focus | dogs and cats |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add animal-shelter-adoption-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A cat-only rescue: set FOCUS to cats, trim the roster to cats and kittens, and keep the species filter but rename its options to match your intake.
- A foster-based dog rescue: rewrite the four volunteer roles as foster, transport, event and home-check roles with real time commitments.
- A senior-pet sanctuary: keep the grid but add age and medical notes to each pet story so older animals get honest, detailed descriptions.
- A small-town shelter with one paid staffer: set SHELTER and CITY, replace the statistics with your own sample-labeled figures, and point donate tiers at your donation page.

## FAQ

### How do I filter the adoptable pets by species, age and size on the Animal Shelter Adoption Website?
The Animal Shelter Adoption Website uses filter chips above a twelve-pet grid. Visitors pick a species, an age band and a size, and the grid narrows with a live count of matching animals. The filters run in the browser through the filter logic in the template, so nothing reloads. To change the options, edit the pet roster and filter settings in the single content file.

### Can I change the shelter name, city and number of adoptable pets in the Animal Shelter Adoption Website?
Yes. The Animal Shelter Adoption Website is driven by four variables: SHELTER for the name, CITY for the location, PETS for the adoptable count and FOCUS for the animals the shelter takes. Set them in the prompt and rewrite the copy in the content file. The default roster holds twelve pets, so keep the count between eight and twenty and adjust the roster proportionally.

### How does the adoption application work on the Animal Shelter Adoption Website?
The Animal Shelter Adoption Website includes an application form on each pet page that preselects the pet the visitor opened. It asks for name, email, home, experience and a note, saves progress in the browser and shows a confirmation client-side. Nothing is submitted or charged anywhere, so you need to connect the form to your own inbox or form service before going live.

### What do I need to change before publishing the Animal Shelter Adoption Website for a real rescue?
Replace every invented item first: the shelter name, city, pet roster, staff names and the statistics, which carry a sample label. Rewrite the donate tiers so each one says what the money buys, and set the volunteer roles with real time commitments. The donate buttons are demo only, so point them at your own donation page. Then review the copy for tone and accuracy.

### Is the Animal Shelter Adoption Website free to use for a nonprofit rescue?
The Animal Shelter Adoption Website is a free template. Its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. A rescue that wants to publish it or a freelancer building it for a client needs Pro, which also unlocks the full prompt and the demo source code. Every site is in English.

### How do I build an animal shelter adoption website with AI?
Copy the prompt from this page or run npx vibefather add animal-shelter-adoption-website, replace [SHELTER], [CITY], [PETS] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Animal Shelter Adoption Website demo?
The No-kill shelter adoption case was built by GLM-5.3 in ZCode; the Cat rescue adoption case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Animal Shelter Adoption Website template use?
Animal Shelter Adoption Website is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Animal Shelter Adoption Website template for a client or a business?
The Animal Shelter Adoption Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Animal Shelter Adoption Website template work on mobile?
Yes. Every Animal Shelter Adoption Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Animal Shelter Adoption Website on VibeFather](https://vibefather.ai/templates/animal-shelter-adoption-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
