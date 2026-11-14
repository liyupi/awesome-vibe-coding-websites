# Freelancer Marketplace Homepage

> A warm, people-first marketplace with talent search, category filters, and a guided project brief.

<a href="https://vibefather.ai/templates/freelancer-marketplace-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/freelancer-marketplace-homepage/5ffef769-18f0-44f5-a7b8-8cc75f349418/webp.95cf652da7.webp" width="100%" alt="Freelancer Marketplace Homepage — Freelancer Marketplace with Talent Search built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/freelancer-marketplace-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Freelancer Marketplace Homepage is a people-led directory for an invented two-sided services marketplace. It is designed for teams that need a clear way to discover independent talent and for freelancers who want their skills, rates, and working style presented with care. The default content focuses on creative and technical services, while the alternate values turn the same structure into a marketplace for event professionals.

The visual direction combines warm paper tones, deep green typography, coral details, and documentary-style portraits. A spacious editorial hero puts a working search form beside a collaborative studio photograph, followed by category chips and an asymmetric collection of featured profiles. Profile cards keep portraits, specialties, sample ratings, locations, and hourly rates easy to scan. Dedicated category, profile, and project-posting pages make the concept feel like a complete product rather than a single promotional screen.

The interactions are useful without a backend. Search and category links carry query parameters into a filterable results page, visitors can sort and narrow the sample directory, and each profile opens with a sensible default when no ID is supplied. The four-step project form validates each stage, saves a draft locally, preselects a freelancer when supplied in the URL, and finishes with copy and download actions instead of pretending to submit anything.

Adapt the brand, market focus, audience, headline, and location through five variables. All profiles, categories, portfolio pieces, FAQs, and form options live in one content file so they can be rewritten together. The six coordinated generated images provide a consistent editorial shoot, while Lucide icons, self-hosted fonts, responsive layouts, and reduced-motion support keep the implementation practical as a static build.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Landing Page](../../types/landing-page.md), [Directory](../../types/directory.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 4 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/freelancer-marketplace-homepage?case=5ffef769-18f0-44f5-a7b8-8cc75f349418&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/freelancer-marketplace-homepage/5ffef769-18f0-44f5-a7b8-8cc75f349418/shot_desktop.4b1b7e6df1.webp" width="100%" alt="Freelancer Marketplace Homepage — Creative talent marketplace, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Creative talent marketplace</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/freelancer-marketplace-homepage?case=5ffef769-18f0-44f5-a7b8-8cc75f349418&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/freelancer-marketplace-homepage?case=93f1909b-c7ec-4d42-8b7e-92686638369d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/freelancer-marketplace-homepage/93f1909b-c7ec-4d42-8b7e-92686638369d/shot_desktop.aa462ff332.webp" width="100%" alt="Freelancer Marketplace Homepage — Event talent marketplace, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Event talent marketplace</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/freelancer-marketplace-homepage?case=93f1909b-c7ec-4d42-8b7e-92686638369d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Marketplace name | Workkind |
| `[MARKET_FOCUS]` | Talent market | independent creative and technical talent |
| `[AUDIENCE]` | Two-sided audience | small teams and independent specialists |
| `[HERO_HEADLINE]` | Homepage headline | Good work starts with the right people. |
| `[LOCATION]` | Home location | Portland, Oregon |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add freelancer-marketplace-homepage` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An event staffing directory: set MARKET_FOCUS to event professionals, swap the categories for catering, photography, and AV, and rewrite the profiles with crew specialties and day rates.
- A regional design collective: set LOCATION to your city, replace the sample profiles with member studios, and point the project form at a brief your coordinators review.
- A startup hiring board for contract specialists: set AUDIENCE to founders and operators, keep the talent search, and rewrite the categories around engineering, design, and operations roles.
- A photography agency roster: change MARKET_FOCUS to photographers and retouchers, edit the portfolio items to real shoots, and use the profile pages for each photographer's working style.

## FAQ

### How do the search form and category filters work on the Freelancer Marketplace Homepage without a backend?
The Freelancer Marketplace Homepage passes search terms, category choices, and sort order as URL query parameters into a filterable talent results page, so every view can be linked and reloaded. Visitors narrow the sample directory by category chips, sort the profiles, and open any profile directly. All of it runs in the browser from one content file, so no server or database is involved.

### What does the four-step post-a-project form actually do when someone finishes it?
The four-step project form on the Freelancer Marketplace Homepage validates each stage, saves a draft in the browser, and preselects a freelancer when one is supplied in the URL. At the end it offers copy and download actions for the finished brief. It does not submit anything to a server, so the template never pretends a project has been posted.

### How do I change the marketplace from creative talent to a different industry, like event professionals?
Set MARKET_FOCUS and AUDIENCE to your niche, then rewrite the categories, profiles, portfolio pieces, FAQs, and form options in the single content file so they match. The Freelancer Marketplace Homepage derives every view from BRAND, MARKET_FOCUS, AUDIENCE, HERO_HEADLINE, and LOCATION. The event talent marketplace demo shows the same structure serving a different industry.

### What do I need to change first to make the Freelancer Marketplace Homepage look and sound like my own brand?
Start with the five variables: BRAND, AUDIENCE, LOCATION, MARKET_FOCUS, and HERO_HEADLINE. Then rewrite the sample profiles, categories, and FAQs in the content file, since the default people and ratings are invented placeholders. The six coordinated images set the documentary editorial mood, so replace them with portraits and studio photography that match your own marketplace before sharing the site.

### Is the Freelancer Marketplace Homepage free, and can I use it commercially?
The Freelancer Marketplace Homepage is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client work needs Pro, which also gives access to the full prompt and the source code of the demos. The brief, stack, and variables are shown publicly on the template page.

### How do I build a freelancer marketplace homepage with AI?
Copy the prompt from this page or run npx vibefather add freelancer-marketplace-homepage, replace [BRAND], [MARKET_FOCUS], [AUDIENCE] and [HERO_HEADLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Freelancer Marketplace Homepage demo?
The Creative talent marketplace case was built by Kimi K3.1 Pro in Kimi Code; the Event talent marketplace case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Freelancer Marketplace Homepage template use?
Freelancer Marketplace Homepage is a 4-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Freelancer Marketplace Homepage template for a client or a business?
The Freelancer Marketplace Homepage prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Freelancer Marketplace Homepage template work on mobile?
Yes. Every Freelancer Marketplace Homepage build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Freelancer Marketplace Homepage on VibeFather](https://vibefather.ai/templates/freelancer-marketplace-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
