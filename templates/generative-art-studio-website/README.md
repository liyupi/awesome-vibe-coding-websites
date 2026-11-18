# Generative Art Studio Website

> A studio site where every background is seeded code, with a live gallery and a framed print shop.

<a href="https://vibefather.ai/templates/generative-art-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/generative-art-studio-website/c62e2ed1-320b-4330-9f53-58767ac3e94f/webp.b0573e73a0.webp" width="100%" alt="Generative Art Studio Website — Seeded Generative Art Studio with Print Shop built by Claude Opus 5.5, Claude Sonnet 5.5, Gemini 4 Carbon and GPT-6 Astra"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/generative-art-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a three-page website for a studio that makes art with code and sells it as prints. Every section sits on its own full-bleed canvas, drawn live in the browser from a single number. A visitor can type a seed or press regenerate, and flow fields, circle packing, noise contours and recursive subdivision all redraw across the site. The same seed always returns the same picture, and it travels in the URL, so a link to a page is also a link to an artwork.

It suits generative artists, creative coders and small print sellers who want the site itself to show what they do. The gallery renders 24 pieces from fixed seeds and opens each one to a large view with its seed, palette and parameters. The shop draws the chosen seed inside CSS frames on a code-drawn wall, with size, frame and wall color selectors, live prices and a cart stored in the browser.

The color comes from six committed palettes that rotate by seed and section: ink violet with coral and acid yellow, ultramarine, deep reef teal, and a full coral ground. Thin technical panels in a mono face sit over the art with solid backing, so text stays readable on any output. Strokes draw progressively on regenerate and on scroll, and visitors who prefer reduced motion get the finished frame.

To adapt it, change the brand, artist, city, practice and product, then edit one content file for piece titles, prices and FAQ answers. The second case turns the same engine into a shop for maps of imaginary terrain. You can also add an algorithm by writing one more module with the same render interface, or replace the palette list. Nothing needs a server, and no stored artwork ships with the build.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [Portfolio](../../types/portfolio.md), [E-commerce](../../types/ecommerce.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Plain CSS + react, + simplex-noise + lucide-react |
| Pages | 3 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor, [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=c62e2ed1-320b-4330-9f53-58767ac3e94f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/c62e2ed1-320b-4330-9f53-58767ac3e94f/shot_desktop.3e5ee4bbb1.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=c62e2ed1-320b-4330-9f53-58767ac3e94f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=e117b707-74cc-413a-95cd-e47f396f7eae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/e117b707-74cc-413a-95cd-e47f396f7eae/shot_desktop.3514950824.webp" width="100%" alt="Generative Art Studio Website — Imaginary terrain maps, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Imaginary terrain maps</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=e117b707-74cc-413a-95cd-e47f396f7eae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=77e9fef4-713f-4300-bba7-1aabddee72a1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/77e9fef4-713f-4300-bba7-1aabddee72a1/shot_desktop.a401f75c10.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=77e9fef4-713f-4300-bba7-1aabddee72a1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c/shot_desktop.1d23e419e9.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by GPT-6 Astra in Codex"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <b>GPT-6 Astra</b> in Codex · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Quillfield |
| `[ARTIST]` | Artist name | Tove Adeyemi |
| `[CITY]` | Studio city | Rotterdam |
| `[PRACTICE]` | What the studio makes | seeded generative prints drawn by pen plotter and pigment printer |
| `[PRODUCT]` | What the shop sells | archival pigment print |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add generative-art-studio-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo creative coder: set BRAND and ARTIST to your own name, PRACTICE to the algorithms you write, and keep the seed dock as the first thing visitors touch.
- An imaginary map seller: use the second case, set PRODUCT to a terrain map print, and retitle the gallery pieces around regions and elevations.
- A design studio selling editioned prints: set BRAND to the studio, PRACTICE to your print line, and adjust piece titles and prices in the content file.
- A workshop teacher: set PRACTICE to teaching code-based drawing, and rewrite the FAQ answers to cover sessions, materials and how seeds are shared.

## FAQ

### How does the seed system work on the Generative Art Studio Website template?
The Generative Art Studio Website template draws every section background from one number. A visitor types a seed or presses regenerate, and the flow fields, circle packing, noise contours and subdivision all redraw. The same seed always returns the same picture, and the seed travels in the URL, so a shared link opens the exact artwork. A missing or invalid seed falls back to the default 4417.

### Can I sell prints directly from the Generative Art Studio Website template?
The Generative Art Studio Website template includes a Print Shop page that draws the chosen seed inside CSS frames on a code-drawn wall. Visitors pick a size, frame and wall color, see live prices and add the piece to a cart stored in the browser. The shop sells one product type, set by the PRODUCT variable, so it suits a single print line rather than a full catalog.

### How do I change the studio name, artist and city on this template?
The Generative Art Studio Website template exposes five variables: BRAND, ARTIST, CITY, PRACTICE and PRODUCT. Set them to your studio name, your name, your city, what you make and what the shop sells. Then rewrite the copy in the single content file, which holds piece titles, prices and FAQ answers, so the wording matches your practice rather than the defaults.

### What do visitors see in the gallery on the Generative Art Studio Website template?
The gallery page of the Generative Art Studio Website template renders 24 pieces from fixed seeds as thumbnails. Opening a piece shows a large view with its seed, palette and parameters, and the seed can be carried into the shop. Thumbnails render through a single queue and are cached, so the gallery, overlay, shop and cart reuse the same drawn results.

### Can I add my own drawing algorithm to the Generative Art Studio Website template?
Yes. The Generative Art Studio Website template runs four algorithms: flow field, circle packing, noise contours and recursive subdivision. You add another by writing one module that follows the same render interface, then exposing it in the shop and gallery. You can also replace the six committed palettes, which rotate by seed and section, to change the color of every canvas at once.

### How do I build a generative art studio website with AI?
Copy the prompt from this page or run npx vibefather add generative-art-studio-website, replace [BRAND], [ARTIST], [CITY] and [PRACTICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Generative Art Studio Website demo?
The Generative print studio case was built by Claude Opus 5.5 in Claude Code; the Imaginary terrain maps case was built by Claude Sonnet 5.5 in Cursor; the Generative print studio case was built by Gemini 4 Carbon in Cursor; the Generative print studio case was built by GPT-6 Astra in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Generative Art Studio Website template use?
Generative Art Studio Website is a 3-page site built with React, with generative / canvas, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Generative Art Studio Website template for a client or a business?
The Generative Art Studio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Generative Art Studio Website template work on mobile?
Yes. Every Generative Art Studio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Generative Art Studio Website on VibeFather](https://vibefather.ai/templates/generative-art-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
