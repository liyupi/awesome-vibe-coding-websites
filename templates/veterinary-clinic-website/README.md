# Veterinary Clinic Website

> Friendly two-page vet clinic site with the vets' working portraits, services, emergency info, care tips and a client-side new-patient form.

<a href="https://vibefather.ai/templates/veterinary-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/veterinary-clinic-website/d9fc7b2d-538b-4d0f-ae87-ece8aebd9ddc/webp.13c785c66f.webp" width="100%" alt="Veterinary Clinic Website — Vet Clinic Site with Booking built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/veterinary-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for a veterinary clinic: a home page with warm animal photography, an unmissable-but-calm emergency band, six services in plain words, three vet profiles with AI-generated working portraits (fictional people users swap for their own staff photos), specialties and bedside-manner quotes, and four evergreen care tips; and a visit page with hours and an open-now indicator, a drawn mini-map, detailed out-of-hours guidance and a new-patient form (pet name, species, age, reason, owner contact) that confirms client-side and saves in the browser. The default content follows an invented clinic in Asheville, but the structure suits any small animal practice: change the name, city, phone and founding year and every section still reads true. The look is friendly clinical calm: warm white with a deep teal primary and a honey accent, Comfortaa's rounded display over Albert Sans, cards with soft corners, paw and heart details drawn in SVG. Photography shows animals and hands-off clinic spaces — no human faces — and care tips stay evergreen with no medical advice. To adapt it, swap the variables and rewrite the copy in one content file; services, vets, tips and hours all read from it.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/veterinary-clinic-website?case=d9fc7b2d-538b-4d0f-ae87-ece8aebd9ddc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/veterinary-clinic-website/d9fc7b2d-538b-4d0f-ae87-ece8aebd9ddc/shot_desktop.291d03c3c0.webp" width="100%" alt="Veterinary Clinic Website — Small animal clinic, built by GLM-5.3 in ZCode"></a><br>
<b>Small animal clinic</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/veterinary-clinic-website?case=d9fc7b2d-538b-4d0f-ae87-ece8aebd9ddc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/veterinary-clinic-website?case=8e84fd01-4c76-4650-81e2-ad27314a0c60&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/veterinary-clinic-website/8e84fd01-4c76-4650-81e2-ad27314a0c60/shot_desktop.46d75a9aaf.webp" width="100%" alt="Veterinary Clinic Website — Animal hospital in Savannah, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Animal hospital in Savannah</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/veterinary-clinic-website?case=8e84fd01-4c76-4650-81e2-ad27314a0c60&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Clinic name | Pinebrook Animal Clinic |
| `[CITY]` | City | Asheville, North Carolina |
| `[PHONE]` | Phone | (828) 555-0143 |
| `[FOUNDED]` | Year opened | 2009 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add veterinary-clinic-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo mobile vet: set BRAND to your practice name, trim the six services to home visits and vaccinations, and point the emergency band at your direct mobile line.
- A cat-only clinic: keep the two-page structure, rewrite the services and care tips for feline care, and replace the three vet portraits with your own team photos.
- An animal rescue or shelter: swap the new-patient form labels for an adoption enquiry, and use the care tips section for preparing a home for a new pet.
- A rural mixed practice: set CITY to your district, add large-animal services alongside the small-animal ones, and extend the out-of-hours guidance with your on-call rota.

## FAQ

### How do I change the clinic name, city, phone number and founding year on the Veterinary Clinic Website template?
The Veterinary Clinic Website template reads everything from one content file. Set BRAND to your clinic name, CITY to your town, PHONE to your main line and FOUNDED to your opening year, then rewrite the headlines and paragraphs that mention them so the copy stays true. The wordmark, page titles, footer, email address and saved form data all follow the brand value automatically.

### What does the new-patient form on the Veterinary Clinic Website template actually do with the details?
The new-patient form collects pet name, species, age, reason for the visit, owner name and owner phone, then confirms in the browser and saves the draft locally. Nothing is submitted anywhere, so the Veterinary Clinic Website template has no inbox and no booking system behind it. To receive real requests, connect the form to your own email service or practice management tool.

### How does the open-now indicator and the emergency band work on the Veterinary Clinic Website template?
The open-now indicator compares your hours table against the visitor's clock and shows whether the clinic is open. The emergency band sits on the home page with a coral outline, a pulse dot and your main phone number as a tel: link, and the visit page adds out-of-hours guidance with a second number. Both numbers come from the content file, so set them to your real lines.

### Can I replace the AI-generated vet portraits with photos of my own team?
Yes. The three vet profiles use AI-generated working portraits of fictional people, and the Veterinary Clinic Website template expects you to swap them for photos of your own staff. Replace the image files and update each vet's name, specialty and quote in the content file. The layout keeps the same circular avatar and card, so any portrait with a similar crop will fit.

### Is the Veterinary Clinic Website template free, and what do I get with Pro?
The Veterinary Clinic Website template is free, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also unlocks the full prompt and the source code of the demos. The page shows the brief, stack and variables publicly either way.

### How do I build a veterinary clinic website with AI?
Copy the prompt from this page or run npx vibefather add veterinary-clinic-website, replace [BRAND], [CITY], [PHONE] and [FOUNDED] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Veterinary Clinic Website demo?
The Small animal clinic case was built by GLM-5.3 in ZCode; the Animal hospital in Savannah case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Veterinary Clinic Website template use?
Veterinary Clinic Website is a 2-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Veterinary Clinic Website template for a client or a business?
The Veterinary Clinic Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Veterinary Clinic Website template work on mobile?
Yes. Every Veterinary Clinic Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Veterinary Clinic Website on VibeFather](https://vibefather.ai/templates/veterinary-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
