# Eyewear Store Website

> Clean eyewear shop with live filters, a frame-finder quiz, swatches and local exam booking.

<a href="https://vibefather.ai/templates/eyewear-store-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/eyewear-store-website/524accc2-1c40-41a6-a24f-7af7b92419f2/webp.6bfc1630f9.webp" width="100%" alt="Eyewear Store Website — Eyewear Shop with Frame Finder built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/eyewear-store-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a clean, fashion-forward storefront for an independent eyewear shop: an off-white paper ground, one bold accent — persimmon by default, cobalt by choice — and a refined sans set with generous tracking. The hero anchors the page with a large macro photograph of a frame on soft paper, the brand in tracked caps beside it, so the product is the first thing you see. It is built for opticians, sunglasses labels and small design shops that want a filtered catalog, a playful frame finder and appointment booking without running a backend. The frame grid filters live by shape, color and face width, re-flowing with a crisp layout animation; six frames carry the catalog and two more are named as in-store fittings. A three-question frame finder — face shape, style, material — ends in a recommended pair that links straight to its product page. Product pages are query-routed with colorway swatches, lens options and a price that updates as you choose; opened without a query, they show the first frame, never an empty state. An exam-booking section offers sample day chips and slots, saves the request locally and labels it honestly as a demo. Everything runs client-side on React, Tailwind and Motion, with fonts self-hosted through Fontsource and every photograph bundled with the project. Four variables — brand, city, accent and exam fee — rewrite the copy from one content file. Motion stays crisp: quick reveals, swatch crossfades, nothing slow, and a static page under prefers-reduced-motion. Six studio photographs on matching paper backgrounds ship with the template, all one imagined shoot.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md) |
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
<a href="https://vibefather.ai/templates/eyewear-store-website?case=524accc2-1c40-41a6-a24f-7af7b92419f2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/eyewear-store-website/524accc2-1c40-41a6-a24f-7af7b92419f2/shot_desktop.d145d9c1e8.webp" width="100%" alt="Eyewear Store Website — Boutique optical shop, built by GLM-5.3 in ZCode"></a><br>
<b>Boutique optical shop</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/eyewear-store-website?case=524accc2-1c40-41a6-a24f-7af7b92419f2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/eyewear-store-website?case=15331f25-45e2-4b17-8fb9-f11582e56437&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/eyewear-store-website/15331f25-45e2-4b17-8fb9-f11582e56437/shot_desktop.e448b15b39.webp" width="100%" alt="Eyewear Store Website — Coastal sunglasses shop, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coastal sunglasses shop</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/eyewear-store-website?case=15331f25-45e2-4b17-8fb9-f11582e56437&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Shop name | Alder & Iris |
| `[CITY]` | City | Hudson, New York |
| `[ACCENT]` | Accent color | persimmon |
| `[EXAM_FEE]` | Exam fee | $65 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add eyewear-store-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An optician with a physical practice: set BRAND and CITY, set EXAM_FEE to your real exam price, and rewrite the fitting note to mention your in-store adjustments.
- A coastal sunglasses label: choose cobalt as ACCENT, replace the frame catalog with your sunglass shapes and drop the exam section for a stockist list.
- A small design eyewear studio: keep the editorial paper look, swap the six photos for your own shoot and set the two in-store fittings to your newest arrivals.
- A mobile optician visiting offices: keep the frame finder, rewrite the hero sub to mention home and workplace visits, and point exam booking at your own calendar.

## FAQ

### How do the frame filters and the frame finder quiz work on the Eyewear Store Website template?
The Eyewear Store Website template filters its frame grid live by shape, color and face width, and the cards glide into place with a Motion layout animation instead of jumping. The three-question frame finder asks face shape, style and material, then ends with a recommended pair that links to its product page. Six frames carry the catalog and two more are named as in-store fittings.

### How do I change the brand name, city, exam fee and accent color on the Eyewear Store Website template?
The Eyewear Store Website template has four variables: BRAND, CITY, ACCENT and EXAM_FEE. Set ACCENT to persimmon or cobalt and the accent, hover and selected states follow. BRAND drives the wordmark, page titles and the local storage keys, CITY appears in the hero eyebrow, exam section and footer address, and EXAM_FEE is the price string for the twenty-minute exam.

### How does exam booking work on the Eyewear Store Website template without a backend?
Exam booking on the Eyewear Store Website template is a demo: sample day chips and time slots, saved in the browser locally and labeled honestly as a demo. Nothing is sent anywhere, so no appointment is confirmed. To take real bookings, point that section at your own scheduling tool or replace it with a form your team reads.

### Can I add more frames or a new colorway to the Eyewear Store Website template?
Yes. The Eyewear Store Website template keeps every frame in one content file: slug, name, shape, colorway, face width, price, image, alt text, a colorway list and a lens note. Add entries there and the grid, filters and product page pick them up. Product pages are query-routed, so a new frame needs its image added alongside the six bundled studio photographs.

### What should I change first on the Eyewear Store Website template, and what should I watch out for?
Start with the four variables and the copy in the content file, since the default text is written for Alder & Iris in Hudson, New York. Swap the bundled photographs for your own frames on paper backgrounds, keeping the macro feel and soft daylight. Watch the demo exam booking and the localStorage try-on list: both stay in the visitor's browser, so neither reaches your shop.

### How do I build an eyewear store website with AI?
Copy the prompt from this page or run npx vibefather add eyewear-store-website, replace [BRAND], [CITY], [ACCENT] and [EXAM_FEE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Eyewear Store Website demo?
The Boutique optical shop case was built by GLM-5.3 in ZCode; the Coastal sunglasses shop case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Eyewear Store Website template use?
Eyewear Store Website is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Eyewear Store Website template for a client or a business?
The Eyewear Store Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Eyewear Store Website template work on mobile?
Yes. Every Eyewear Store Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Eyewear Store Website on VibeFather](https://vibefather.ai/templates/eyewear-store-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
