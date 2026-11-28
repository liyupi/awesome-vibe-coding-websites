# Generative Art Studio Website

> A studio site where every background is seeded code, with a live gallery and a framed print shop.

<a href="https://vibefather.ai/templates/generative-art-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/generative-art-studio-website/d631edcf-3aa2-4f7e-8f19-fcd427ae2a11/webp.e68635b4db.webp" width="100%" alt="Generative Art Studio Website — Seeded Generative Art Studio with Print Shop built by GLM-5.4, Gemini 4 Carbon, Claude Opus 5.5, GPT-6 Astra and Claude Sonnet 5.5"></a>

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
| Effects | Scroll Animation, Generative / Canvas, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Plain CSS + react, + simplex-noise + lucide-react |
| Pages | 3 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor, <img src="https://vibefather.ai/icons/tools/claude.svg" width="13" height="13" alt=""> [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex, <img src="https://vibefather.ai/icons/tools/claude.svg" width="13" height="13" alt=""> [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=d631edcf-3aa2-4f7e-8f19-fcd427ae2a11&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/d631edcf-3aa2-4f7e-8f19-fcd427ae2a11/shot_desktop.84e4a19b3c.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by GLM-5.4 in ZCode"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=d631edcf-3aa2-4f7e-8f19-fcd427ae2a11&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=77e9fef4-713f-4300-bba7-1aabddee72a1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/77e9fef4-713f-4300-bba7-1aabddee72a1/shot_desktop.a401f75c10.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Carbon in Cursor · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=77e9fef4-713f-4300-bba7-1aabddee72a1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=c62e2ed1-320b-4330-9f53-58767ac3e94f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/c62e2ed1-320b-4330-9f53-58767ac3e94f/shot_desktop.3e5ee4bbb1.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/claude.svg" width="12" height="12" alt="">&nbsp;Claude Opus 5.5 in Claude Code · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=c62e2ed1-320b-4330-9f53-58767ac3e94f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c/shot_desktop.1d23e419e9.webp" width="100%" alt="Generative Art Studio Website — Generative print studio, built by GPT-6 Astra in Codex"></a><br>
<b>Generative print studio</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6 Astra in Codex · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=83a8bf8a-4fe1-43c8-95c9-8e0cf0bc697c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/generative-art-studio-website?case=e117b707-74cc-413a-95cd-e47f396f7eae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/generative-art-studio-website/e117b707-74cc-413a-95cd-e47f396f7eae/shot_desktop.3514950824.webp" width="100%" alt="Generative Art Studio Website — Imaginary terrain maps, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Imaginary terrain maps</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/claude.svg" width="12" height="12" alt="">&nbsp;Claude Sonnet 5.5 in Cursor · <a href="https://vibefather.ai/templates/generative-art-studio-website?case=e117b707-74cc-413a-95cd-e47f396f7eae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A creative coder selling plotter drawings: set BRAND and ARTIST to your studio, make PRACTICE pen-plotted line work, and swap the shop PRODUCT for a signed plotter sheet.
- A map artist: keep the terrain case, set PRODUCT to a framed contour map, and replace the gallery titles and prices with your own imaginary places.
- A design studio portfolio: set BRAND to the studio, drop the cart link from the top bar, and use the gallery pieces as case study covers.
- A print shop for a single series: set PRODUCT to one print size, edit the content file to list only that series, and point the cart at your mailing list.

## FAQ

### How does the seed work on the Generative Art Studio Website and can I share a specific artwork?
The Generative Art Studio Website draws every section background from one global seed, a single number you can type into the seed dock or replace with the regenerate button. The same seed always returns the same picture, and it travels in the URL hash, so copying the link gives someone the exact artwork you were looking at. Pressing R regenerates the seed when focus is not inside an input.

### Can I sell prints directly from the Generative Art Studio Website without a server or payment backend?
The Generative Art Studio Website includes a print shop that draws the chosen seed inside CSS frames on a code-drawn wall, with size, frame and wall color selectors and live prices. The cart is stored in the browser under a key derived from the brand name, so no server is involved. Orders are not processed by the template itself; you connect the cart to your own checkout or email.

### What can I change first in the Generative Art Studio Website template to make it my own studio?
Start with the five variables: set BRAND to your studio name, ARTIST to your name, CITY to your city, PRACTICE to what you make and PRODUCT to what the shop sells. Then edit the single content file for piece titles, prices and FAQ answers. The layout, palettes and canvas effects stay as they are, and the brand slug updates the email address, cart storage key and PNG file names.

### Is the Generative Art Studio Website template free, and what does Pro include?
The Generative Art Studio Website is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives Pro members the full prompt for Pro templates and the source code of the demos. You can add it with the command npx vibefather add generative-art-studio-website.

### Which AI coding tools built the Generative Art Studio Website demos and can I rebuild it in another model?
The live demos of the Generative Art Studio Website were built by Claude Opus 5.5 in Claude Code, Claude Sonnet 5.5 and Gemini 4 Carbon in Cursor, GPT-6 Astra in Codex, and GLM-5.4 in ZCode. The published prompt and DESIGN.md are written so any capable AI coding agent can follow them. The comparison pages on VibeFather show the demos side by side.

### How do I build a generative art studio website with AI?
Copy the prompt from this page or run npx vibefather add generative-art-studio-website, replace [BRAND], [ARTIST], [CITY] and [PRACTICE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Generative Art Studio Website demo?
The Generative print studio case was built by GLM-5.4 in ZCode; the Generative print studio case was built by Gemini 4 Carbon in Cursor; the Generative print studio case was built by Claude Opus 5.5 in Claude Code; the Generative print studio case was built by GPT-6 Astra in Codex; the Imaginary terrain maps case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Generative Art Studio Website template use?
Generative Art Studio Website is a 3-page site built with React, with scroll animation, generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Generative Art Studio Website template for a client or a business?
The Generative Art Studio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Generative Art Studio Website template work on mobile?
Yes. Every Generative Art Studio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Generative Art Studio Website on VibeFather](https://vibefather.ai/templates/generative-art-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
