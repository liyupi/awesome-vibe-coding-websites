# Recipe Blog Website

> Kitchen-editorial recipe blog with course and diet filters, a live servings scaler, ingredient checklist, step timers and a print view.

<a href="https://vibefather.ai/templates/recipe-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/recipe-blog-website/74802fd1-44b5-48bf-8d4d-2c7eb759a848/webp.483d8bb91b.webp" width="100%" alt="Recipe Blog Website — Recipe Blog with Servings Scaler built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/recipe-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A two-page recipe blog: a home with a lead recipe card over a filterable grid (course and diet chips) of five recipe cards carrying times, difficulty and diet tags; and recipe pages (?r=<slug>, first recipe without one) with a hero photo, a servings scaler that recalculates every ingredient live, an ingredient checklist that persists per recipe, a step-by-step method where each step can run its own timer (start/pause, done state), a print view that outputs a clean one-page recipe sheet, an about-the-cook block with an AI-generated fictional portrait, and a subscribe line (client-side, honest). The default blog is written by an invented home cook, but the structure suits any food blog. The look is kitchen editorial: warm cream ground, ink serif headlines, one tomato-red accent, generous photography. Five editorial food photographs and the cook's portrait anchor the cards. All copy lives in one typed file; swapping the variables rewrites the blog. No dates from the real clock.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Blog](../../types/blog.md) |
| Style | [Editorial](../../styles/editorial.md), [Warm](../../styles/warm.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/recipe-blog-website?case=74802fd1-44b5-48bf-8d4d-2c7eb759a848&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/recipe-blog-website/74802fd1-44b5-48bf-8d4d-2c7eb759a848/shot_desktop.785d5e8dcc.webp" width="100%" alt="Recipe Blog Website — Weeknight home cooking blog, built by GLM-5.3 in ZCode"></a><br>
<b>Weeknight home cooking blog</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/recipe-blog-website?case=74802fd1-44b5-48bf-8d4d-2c7eb759a848&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/recipe-blog-website?case=66133727-6936-4cb2-b968-0ae074b54993&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/recipe-blog-website/66133727-6936-4cb2-b968-0ae074b54993/shot_desktop.be9b8a4130.webp" width="100%" alt="Recipe Blog Website — Sourdough baking blog, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Sourdough baking blog</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/recipe-blog-website?case=66133727-6936-4cb2-b968-0ae074b54993&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[COOK]` | Cook name | June Halloran |
| `[ANGLE]` | Blog angle | weeknight cooking that survives a Tuesday |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add recipe-blog-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A sourdough baking blog: set COOK to the baker and ANGLE to slow fermentation, then rewrite the five recipes as loaves with long step timers.
- A meal-prep creator: keep the course and diet filters, swap recipes for weekly prep plans and use the ingredient checklist as a shopping list.
- A small cooking school: name the instructor in COOK, point the subscribe line at class announcements and let each recipe page double as a printable handout.
- A family recipe archive: use a grandparent as COOK, angle it on handed-down dishes, and replace the fictional portrait with a real photo.

## FAQ

### How does the servings scaler work on the Recipe Blog Website template?
The Recipe Blog Website template puts a stepper on every recipe page with a range of 1 to 12 servings. Moving it up or down recalculates each ingredient quantity live, using sensible rounding so you get whole grams, half spoons and whole eggs instead of fractions like 0.87 of an egg. Countable items round up, and the count briefly highlights when that happens.

### Can I change the cook name and blog angle to my own food blog?
Yes. The Recipe Blog Website template is driven by two variables: COOK, the cook's name used in the wordmark, about block, footer and email address, and ANGLE, one lowercase phrase naming what the blog is about. Swapping them rewrites the hero line, the about-the-cook block and each recipe's story to match. All copy sits in one typed content file.

### What does the print view on a recipe page include?
The Recipe Blog Website template includes a print button in the recipe header that opens the browser print dialog. The print stylesheet hides the header, filters, timers, servings stepper and footer, then outputs one clean sheet with the title, a meta line, ingredients in two columns and numbered steps, with 15mm page margins. It is meant for a single sheet on the fridge.

### How do the per-step timers and ingredient checklist work?
On a Recipe Blog Website template recipe page, any method step with a time shows a chip you click to start a countdown with pause and reset; at zero it switches to a done state. Ingredient rows have checkboxes that stay ticked per recipe in the browser between visits. Nothing is sent to a server, so both are local to that device.

### Is the Recipe Blog Website template free to use?
The Recipe Blog Website template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial work, client projects and the demo source code need Pro. The live demos were built by GLM-5.3 in ZCode and DeepSeek V4.1 Flash in DeepSeek Harness, and you can run it with npx vibefather add recipe-blog-website.

### How do I build a recipe blog website with AI?
Copy the prompt from this page or run npx vibefather add recipe-blog-website, replace [COOK] and [ANGLE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Recipe Blog Website demo?
The Weeknight home cooking blog case was built by GLM-5.3 in ZCode; the Sourdough baking blog case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Recipe Blog Website template use?
Recipe Blog Website is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Recipe Blog Website template for a client or a business?
The Recipe Blog Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Recipe Blog Website template work on mobile?
Yes. Every Recipe Blog Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Recipe Blog Website on VibeFather](https://vibefather.ai/templates/recipe-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
