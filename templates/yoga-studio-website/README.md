# Yoga Studio Website

> Calm two-page yoga site with teacher portraits, a filterable weekly schedule, membership tiers and a booking modal.

<a href="https://vibefather.ai/templates/yoga-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/yoga-studio-website/79fd69b8-6438-4026-aef5-4872c68a7b8f/webp.f0d1a5b334.webp" width="100%" alt="Yoga Studio Website — Calm Yoga Studio Site built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/yoga-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for a neighborhood yoga studio: a home page with the practice styles, an intro offer, teacher bios, membership comparison and a first-timer FAQ, and a schedule page with the full weekly class grid filterable by level and style. The default content follows an invented studio in Boulder teaching vinyasa, yin and restorative classes, but the structure suits any studio or movement space: change the brand, city, street, practice styles and founding year and every section still reads true. The home page opens on an airy photograph of the empty studio in morning light, then moves through three practice-style cards, a warm intro-offer band, four teacher cards with AI-generated teaching portraits (fictional people users swap for their own staff photos), specialties and a one-line philosophy each, a three-tier membership comparison that shows the per-class math, and a plain-spoken FAQ. The schedule page lays the week out as day columns with class cards (time, name, level pill, duration, teacher), filter chips for level and style, and a booking modal that confirms in the browser with a saved spot card — no backend, nothing submitted. The palette is warm sand and shell with deep green-grey text and a single dusty clay accent; Marcellus sets the headlines in a calm Roman serif and Mulish the body, both self-hosted. To adapt it, swap the variables and rewrite the copy in one content file; classes, teachers, tiers and hours all read from it.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/yoga-studio-website?case=79fd69b8-6438-4026-aef5-4872c68a7b8f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/yoga-studio-website/79fd69b8-6438-4026-aef5-4872c68a7b8f/shot_desktop.7df7928071.webp" width="100%" alt="Yoga Studio Website — Neighborhood yoga in Boulder, built by GLM-5.3 in ZCode"></a><br>
<b>Neighborhood yoga in Boulder</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/yoga-studio-website?case=79fd69b8-6438-4026-aef5-4872c68a7b8f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/yoga-studio-website?case=bb062395-d5bd-4c4c-ac71-7ca1530df14a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/yoga-studio-website/bb062395-d5bd-4c4c-ac71-7ca1530df14a/shot_desktop.c3bbdc6e70.webp" width="100%" alt="Yoga Studio Website — Boutique yoga in Savannah, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Boutique yoga in Savannah</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/yoga-studio-website?case=bb062395-d5bd-4c4c-ac71-7ca1530df14a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Stillwater Yoga |
| `[CITY]` | City | Boulder, Colorado |
| `[STREET]` | Street | Linden Court |
| `[PRACTICE]` | Practice styles | Vinyasa, Yin and Restorative |
| `[FOUNDED]` | Year opened | 2018 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add yoga-studio-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A pilates or barre studio: set PRACTICE to your three class formats, rename the practice cards and swap the teacher specialties to match your instructors.
- A meditation and breathwork space: keep the calm sand palette, rewrite the intro offer for a first-session pass and replace the schedule classes with sits and breath sessions.
- A single teacher building a personal practice site: set BRAND to your name, trim the teacher cards to one and point the membership tiers at class packs.
- A wellness collective sharing a room: set CITY and STREET to the space, list each resident teacher in the teacher cards and filter the week by their styles.

## FAQ

### How do I change the studio name, city and street on the Yoga Studio Website template?
The Yoga Studio Website template reads its identity from five variables: BRAND, CITY, STREET, FOUNDED and PRACTICE. Set BRAND to your studio name, CITY to your town, STREET to your street, FOUNDED to your opening year and PRACTICE to exactly three comma-separated styles. The wordmark, page titles, hero eyebrow, address line, email and saved-spot storage keys all follow from those values.

### How does the class booking work if there is no backend?
Booking on the Yoga Studio Website template confirms entirely in the browser. A visitor picks a class in the weekly grid, opens the booking modal, enters a name and gets a saved spot card. The confirmed spot is stored in local storage under a key prefixed with the studio's brand slug, so it survives a reload on that device. Nothing is sent to a server, so you would connect your own booking or payment system to take real reservations.

### What does the weekly schedule page include and how do visitors filter it?
The schedule page of the Yoga Studio Website template shows the full week as day columns of class cards, each with time, class name, level pill, duration and teacher. Filter chips narrow the grid by level and by practice style, and a class card opens the booking modal. The default content sets three practice styles and twenty weekly classes, which you rewrite in the content file.

### What sections are on the home page of the Yoga Studio Website template?
The Yoga Studio Website template's home page moves through an airy hero photograph of the empty studio, three practice-style cards, an intro-offer band, four teacher cards with portraits, specialties and a one-line philosophy, a three-tier membership comparison showing the per-class math, and a first-timer FAQ. A header, footer and mobile menu wrap both pages, and a studio open indicator reads from the hours table.

### Is the Yoga Studio Website template free, and what do I get with Pro?
The Yoga Studio Website template is free. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, so you can build and run the site for yourself. Commercial use, client work and the demo source code need Pro. Pro templates show the brief, stack and variables publicly, and the full prompt is available to Pro members.

### How do I build a yoga studio website with AI?
Copy the prompt from this page or run npx vibefather add yoga-studio-website, replace [BRAND], [CITY], [STREET] and [PRACTICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Yoga Studio Website demo?
The Neighborhood yoga in Boulder case was built by GLM-5.3 in ZCode; the Boutique yoga in Savannah case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Yoga Studio Website template use?
Yoga Studio Website is a 2-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Yoga Studio Website template for a client or a business?
The Yoga Studio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Yoga Studio Website template work on mobile?
Yes. Every Yoga Studio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Yoga Studio Website on VibeFather](https://vibefather.ai/templates/yoga-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
