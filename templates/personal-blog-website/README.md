# Personal Blog Website

> A typography-first Markdown personal blog with reading themes, auto TOC, footnotes, pull quotes, and 12 seeded essays.

<a href="https://vibefather.ai/templates/personal-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/personal-blog-website/20aab8fd-b9ef-4201-af69-0f086f3dfe42/webp.f18a4d5428.webp" width="100%" alt="Personal Blog Website — Typography-First Personal Markdown Blog Site built by GPT-6.2 Sol and Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/personal-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Personal Blog Website is a calm, reader-first literary journal and developer notebook built around timeless serif typography and plain Markdown files. Seeded with 12 essays on craft, train travel, and small software, every post lives as a real Markdown file with front matter inside the project so writers can drop in their own work with zero CMS lock-in. The home screen opens with a crisp editorial intro, a featured essay spotlight anchored by an original linocut-style SVG figure, and the latest writings. Clicking into any essay reveals a complete long-form reading environment: estimated reading time, a scroll-tracking reading progress bar, an automatic table of contents, highlighted code blocks with one-click copy, clickable inline footnotes, captioned SVG figures, pull quotes, multi-part series navigation, and related essays. Dedicated hash routes provide a searchable archive filtered by tag and volume, individual tag collections, an About page, and a Now page, alongside a local RSS feed inspector and browser-saved newsletter subscription form. Readers can switch instantly between Warm Paper (#FBF8F1), Charcoal Dark, and Sepia themes and adjust body font size (Small, Medium, Large) with preferences persisted in localStorage. Paired with Newsreader serif, Inter UI labels, JetBrains Mono code, deep ink (#1B1B1B), and a tomato editorial accent (#E5533D), the template adapts gracefully across desktop and 390px phones.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Personal Site](../../types/personal.md), [Blog](../../types/blog.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 6 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex, <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-blog-website?case=20aab8fd-b9ef-4201-af69-0f086f3dfe42&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-blog-website/20aab8fd-b9ef-4201-af69-0f086f3dfe42/shot_desktop.d20042b4b9.webp" width="100%" alt="Personal Blog Website — Type &amp; cycling notebook, built by GPT-6.2 Sol in Codex"></a><br>
<b>Type &amp; cycling notebook</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Sol in Codex · <a href="https://vibefather.ai/templates/personal-blog-website?case=20aab8fd-b9ef-4201-af69-0f086f3dfe42&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-blog-website?case=5cf741d3-443c-4b19-85b8-a2351d79e9f0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-blog-website/5cf741d3-443c-4b19-85b8-a2351d79e9f0/shot_desktop.b22e916e7a.webp" width="100%" alt="Personal Blog Website — Craft &amp; small-software journal, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Craft &amp; small-software journal</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/personal-blog-website?case=5cf741d3-443c-4b19-85b8-a2351d79e9f0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publication Title | Fieldwork & Fold |
| `[AUTHOR_NAME]` | Writer Name | Clara Lindqvist |
| `[LOCATION]` | Writer City | Gothenburg, Sweden |
| `[BIO_LINE]` | Short Author Intro | Writer-developer crafting small local-first software, riding slow night trains, and documenting bookbinding workshops. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add personal-blog-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A working developer: set BRAND and AUTHOR_NAME to your own, keep the code blocks and footnotes, and rewrite the 12 seeded essays as build notes on your projects.
- A travel writer: keep the serif reading layout, replace the seeded train essay with trip dispatches, and use the tag pills for regions instead of craft topics.
- A design studio owner: set BIO_LINE to the studio's point of view, swap the About colophon for your team, and turn the Now page into current client work.
- A newsletter author: point the local sign-up card copy at your dispatch rhythm and use the archive and tag collections as the public index of past issues.

## FAQ

### How do I add my own essays to the Personal Blog Website template?
The Personal Blog Website template stores every post as a real Markdown file with YAML front matter inside the project, so you write your essay in Markdown and add fields like slug, title, volume, issueNum, readingMins, tags, series and excerpt. The 12 seeded essays are replaced by your own files, and no CMS or database sits between you and the writing.

### Is there a free personal blog website template I can build with AI?
Yes. The Personal Blog Website template is free, and its published prompt plus the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. You can build the full blog with an AI coding agent, including the Markdown essays, reading themes, archive and RSS preview. Commercial or client work needs Pro, which also brings the demo source code.

### Can readers change the reading theme and font size on the blog?
Readers of the Personal Blog Website template can switch between Warm Paper, Charcoal Dark and Sepia themes and set body text to Small, Medium or Large. Their choices are saved in the browser with localStorage, so the preference holds across visits. The essay column is set to a 68-character measure and the controls respect reduced-motion settings.

### What does the essay reader include besides the text?
Each essay in the Personal Blog Website template opens with an estimated reading time, a scroll-tracking progress bar and an automatic table of contents that follows you down the page. Long-form posts also get syntax-tinted code blocks with one-click copy, clickable inline footnotes, captioned SVG figures, pull quotes, multi-part series links and a related essays strip.

### How do I change the writer name, publication title and city in the template?
The Personal Blog Website prompt uses four variables: BRAND for the masthead title, AUTHOR_NAME for the writer, LOCATION for the city shown on the About and Now pages, and BIO_LINE for the one-sentence intro. Set those before you generate, then rewrite the sample headlines, captions and essay copy so they match your own voice and subjects.

### How do I build a personal blog website with AI?
Copy the prompt from this page or run npx vibefather add personal-blog-website, replace [BRAND], [AUTHOR_NAME], [LOCATION] and [BIO_LINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Personal Blog Website demo?
The Type & cycling notebook case was built by GPT-6.2 Sol in Codex; the Craft & small-software journal case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Personal Blog Website template use?
Personal Blog Website is a 6-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Personal Blog Website template for a client or a business?
The Personal Blog Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Personal Blog Website template work on mobile?
Yes. Every Personal Blog Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Personal Blog Website on VibeFather](https://vibefather.ai/templates/personal-blog-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
