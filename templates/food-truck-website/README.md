# Food Truck Website

> A sunlit food truck site with a weekly location map, today's menu, and a simple catering request.

<a href="https://vibefather.ai/templates/food-truck-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/food-truck-website/f0a156d0-f605-45dd-acea-b1437bee0527/webp.e2a9d432be.webp" width="100%" alt="Food Truck Website — Food Truck Website with Weekly Schedule built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/food-truck-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Food Truck Website is a single-page template for mobile food businesses that need to make their changing whereabouts as clear as their menu. It suits taco trucks, sandwich trailers, and other small teams that rotate between markets, office districts, and private events. The design combines sun-washed editorial photography, bold Bricolage Grotesque headings, warm paper tones, and an original illustrated neighborhood map. A large truck photograph and next-stop card establish the business immediately, while a daily-special banner gives returning visitors a quick reason to scan the menu.

The central feature is a seven-day schedule connected to the map. Visitors can select a day to highlight its stop, hours, and address without loading a mapping service. The menu balances three photographed dishes with compact text rows, clear prices, and dietary labels. A story section adds the people and rituals behind the truck, and catering content explains two service formats with realistic starting prices. The inquiry form checks details in the browser, prepares a summary, and opens an email draft; it never pretends that a request was transmitted.

The defaults present Ember & Route, an invented Sonoran street-food truck in Tucson, with a second set of values for a New Mexican taco truck in Santa Fe. Six variables control the brand, cuisine, city, signature dish, catering address, and social handle. All schedule entries, dishes, copy, image references, and links are centralized so another operator can adapt the site coherently. React, Tailwind CSS, Motion, and Lucide support a responsive static build, restrained reveals, accessible day selection, and reduced-motion preferences. Six coordinated generated photographs keep the food and truck imagery specific to the invented brand.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Landing Page](../../types/landing-page.md), [Restaurant](../../types/restaurant.md) |
| Style | [Hand-drawn](../../styles/hand-drawn.md), [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/food-truck-website?case=f0a156d0-f605-45dd-acea-b1437bee0527&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/food-truck-website/f0a156d0-f605-45dd-acea-b1437bee0527/shot_desktop.5a2ebd7b37.webp" width="100%" alt="Food Truck Website — Sonoran taco truck, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Sonoran taco truck</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/food-truck-website?case=f0a156d0-f605-45dd-acea-b1437bee0527&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/food-truck-website?case=9e9f180b-7cb9-478c-91d3-5b3369ee8a68&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/food-truck-website/9e9f180b-7cb9-478c-91d3-5b3369ee8a68/shot_desktop.bab083ff25.webp" width="100%" alt="Food Truck Website — Santa Fe taco truck, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Santa Fe taco truck</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/food-truck-website?case=9e9f180b-7cb9-478c-91d3-5b3369ee8a68&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Food truck name | Ember & Route |
| `[CUISINE]` | Cuisine description | Sonoran street food |
| `[CITY]` | Service city | Tucson, Arizona |
| `[SIGNATURE_DISH]` | Signature dish | Mesquite chicken taco |
| `[CATERING_EMAIL]` | Catering email | hola@emberandroute.example |
| `[SOCIAL_HANDLE]` | Social handle | @emberandroute |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add food-truck-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A coffee cart rota: set BRAND and CITY to your cart, change CUISINE to specialty coffee, and rewrite the seven-day schedule for office parks and markets.
- A weekend barbecue trailer: swap SIGNATURE_DISH for your brisket plate, rewrite the menu rows and prices, and point CATERING_EMAIL at your booking inbox.
- A dessert van for private parties: keep the catering section, reword the two service formats for birthdays and weddings, and update SOCIAL_HANDLE to your account.
- A new taco truck in another city: change CITY, redraw the SVG neighborhood labels and addresses, and rewrite the story section around your own team.

## FAQ

### How does the weekly location map on the Food Truck Website work?
The Food Truck Website template pairs a seven-day schedule with an original inline SVG neighborhood map. Visitors select a day and the matching pin grows while the stop name, hours and address crossfade into view. The map is drawn locally with six numbered pins and neighborhood labels, so no mapping service, geolocation or address lookup loads and the page stays fast on a phone.

### What can I change with the Food Truck Website variables?
Six variables drive the Food Truck Website: CITY, BRAND, CUISINE, SOCIAL_HANDLE, CATERING_EMAIL and SIGNATURE_DISH. Changing them rewrites the brand wordmark, eyebrow, story copy, daily-special banner and first menu card. All schedule entries, dishes, prices, image paths and links sit in one content file, so you can swap neighborhoods and addresses for your city without touching the layout.

### Does the catering form on the Food Truck Website actually send requests?
No. The catering form on the Food Truck Website validates details in the browser, prepares a summary and offers an Open email draft link addressed to your CATERING_EMAIL. It never transmits the request or claims to. A host fills in the form, checks the summary, then sends the email from their own account, so you receive a complete inquiry without any backend.

### Is the Food Truck Website template free to use?
The Food Truck Website prompt and its DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also unlocks the full prompt and the demo source code. The brief, stack and six variables are shown publicly on the template page either way.

### Which AI tools built the Food Truck Website live demos?
Two demos of the Food Truck Website were built from the same published prompt: a Sonoran taco truck made with Kimi K3.1 Pro in Kimi Code, and a Santa Fe taco truck made with DeepSeek V4.1 Flash in DeepSeek Harness. You can run the prompt in Claude Code, Codex, Cursor, Windsurf or Gemini CLI and compare the results on the model comparison pages.

### How do I build a food truck website with AI?
Copy the prompt from this page or run npx vibefather add food-truck-website, replace [BRAND], [CUISINE], [CITY] and [SIGNATURE_DISH] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Food Truck Website demo?
The Sonoran taco truck case was built by Kimi K3.1 Pro in Kimi Code; the Santa Fe taco truck case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Food Truck Website template use?
Food Truck Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Food Truck Website template for a client or a business?
The Food Truck Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Food Truck Website template work on mobile?
Yes. Every Food Truck Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Food Truck Website on VibeFather](https://vibefather.ai/templates/food-truck-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
