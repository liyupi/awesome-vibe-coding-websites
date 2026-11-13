# Pet Grooming and Boarding Website

> A cheerful grooming and boarding site with a size-and-coat price picker and a stay calculator that does the math.

<a href="https://vibefather.ai/templates/pet-grooming-and-boarding-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/pet-grooming-and-boarding-website/e45d8739-cc6f-404e-8056-9887a37ccfac/webp.f2351a2b55.webp" width="100%" alt="Pet Grooming and Boarding Website — Pet Grooming Site with Stay Calculator built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/pet-grooming-and-boarding-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Pet Grooming and Boarding Website is a single-page site for a pet salon and boarding house, in bubblegum pink, sky blue and sunshine on white — cheerful but composed, with photography of freshly groomed, anatomically right dogs and cats carrying the color. Two working tools serve the questions every owner asks: a grooming price picker (pet type, size, coat type → visible price and duration from one table) and a boarding stay calculator (nights, suite tier, add-ons like group playtime or a going-home bath → total with line items). A day-in-the-life schedule strip sells the boarding day better than claims, vaccination requirements sit up front as a tidy checklist, and a pet profile form saved in the browser makes rebooking one tap. Booking completes inline with the profile attached. It suits groomers, boarding kennels, doggy daycares and cat-only salons. Five variables swap business name, town, owner, phone and years; every price, suite and review is invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pet-grooming-and-boarding-website?case=e45d8739-cc6f-404e-8056-9887a37ccfac&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pet-grooming-and-boarding-website/e45d8739-cc6f-404e-8056-9887a37ccfac/shot_desktop.027f88a279.webp" width="100%" alt="Pet Grooming and Boarding Website — Grooming salon, Maplewood, built by GLM-5.3 in ZCode"></a><br>
<b>Grooming salon, Maplewood</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/pet-grooming-and-boarding-website?case=e45d8739-cc6f-404e-8056-9887a37ccfac&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/pet-grooming-and-boarding-website?case=58ee5dab-a826-42e1-8a77-28937ee0b9c2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/pet-grooming-and-boarding-website/58ee5dab-a826-42e1-8a77-28937ee0b9c2/shot_desktop.96222c22a5.webp" width="100%" alt="Pet Grooming and Boarding Website — Cat lounge, Fairview, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Cat lounge, Fairview</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/pet-grooming-and-boarding-website?case=58ee5dab-a826-42e1-8a77-28937ee0b9c2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Business name | Biscuit & Bubbles Salon |
| `[CITY]` | City | Maplewood |
| `[FOUNDER]` | Owner | Nell Faraday |
| `[PHONE]` | Phone | (555) 719-4420 |
| `[EXPERIENCE]` | Years | 11 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add pet-grooming-and-boarding-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A cat-only salon: set [BRAND] and [CITY], keep Cat as the only species, drop dog sizes and Matted-plus, and rename boarding suites as cat condos with window perches.
- A doggy daycare: keep the stay calculator, rename suites as play areas, price Group playtime per day, and make Daycare day the default booking option.
- A mobile groomer: set [BRAND] to your van name, replace the boarding section with a service-area list, and keep the grooming price picker and pet profile for repeat clients.
- A boarding kennel: set [BRAND] and [FOUNDER], rewrite the day-in-the-life schedule around your feeding and walk times, and list your own vaccination requirements up front.

## FAQ

### How does the grooming price picker work on the Pet Grooming and Boarding Website?
The Pet Grooming and Boarding Website price picker asks for pet type, size and coat type, then shows a price and a duration pulled from one visible table. Dog sizes run Small, Medium and Large across Smooth, Double, Curly and Matted-plus coats, and cats are a single size with Smooth, Double and Curly coats. Matted-plus adds 30 minutes, and a footnote says matted coats get a kindness check before a firm quote.

### How does the boarding stay calculator add up nights, suites and add-ons?
The Pet Grooming and Boarding Website stay calculator multiplies nights by the suite rate, then adds day-based add-ons per night and flat add-ons once. Suites are Cozy Den, Run Suite and Villa with window, and add-ons are Group playtime, One-on-one walk, Going-home bath and Bedtime story session. The total appears with line items such as nights times suite, each add-on and the final figure, and inputs are saved in the browser.

### What does the pet profile form save and how does it speed up rebooking?
The Pet Grooming and Boarding Website pet profile form saves pet name, species, size, coat and a quirks note in the browser. After the first save, the booking form shows a chip like Booking for: Biscuit · Medium · curly with an X to detach it and an Edit profile link. That makes a second booking a few taps, and the profile stays on the same device between visits.

### Which parts of the Pet Grooming and Boarding Website template are sample data I need to replace?
Every price, suite, add-on rate, review and schedule entry in the Pet Grooming and Boarding Website template is invented sample data. The five variables swap business name, town, owner, phone and years, but the grooming matrix, boarding rates, day-in-the-life schedule, vaccination checklist and reviews live in the content file and need rewriting for your salon. Keep the layout and tone, and replace the numbers with your own.

### Can a cat-only salon or a doggy daycare use the Pet Grooming and Boarding Website template?
The Pet Grooming and Boarding Website template suits cat-only salons and doggy daycares as well as mixed groomers and boarding kennels. A cat-only salon sets the species chips to Cat, trims the dog size and Matted-plus options from the price table, and rewrites the boarding suites as cat condos. A daycare keeps the stay calculator, renames suites as play areas and uses the Daycare day booking option.

### How do I build a pet grooming and boarding website with AI?
Copy the prompt from this page or run npx vibefather add pet-grooming-and-boarding-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Pet Grooming and Boarding Website demo?
The Grooming salon, Maplewood case was built by GLM-5.3 in ZCode; the Cat lounge, Fairview case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Pet Grooming and Boarding Website template use?
Pet Grooming and Boarding Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Pet Grooming and Boarding Website template for a client or a business?
The Pet Grooming and Boarding Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Pet Grooming and Boarding Website template work on mobile?
Yes. Every Pet Grooming and Boarding Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Pet Grooming and Boarding Website on VibeFather](https://vibefather.ai/templates/pet-grooming-and-boarding-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
