# Family Medical Clinic Website

> A warm, calm family clinic site with a filterable provider directory and same-day appointment requests.

<a href="https://vibefather.ai/templates/family-medical-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/family-medical-clinic-website/6afea008-4e7d-4a0f-90bd-397eb60b87ae/webp.ca7dbfad27.webp" width="100%" alt="Family Medical Clinic Website — Family Clinic Site with Provider Directory built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/family-medical-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Family Medical Clinic Website is a single-page site for a primary care practice, in clinical teal, soft coral and cream with rounded friendly type — designed to feel like a well-run front desk instead of a phone tree. The working parts are the things families actually need: a provider directory filterable by specialty, language and whether they're accepting new patients, an appointment request with visit type and time-slot chips that completes inline, a searchable accepted-insurance list (invented plans, never real payers), a what-to-bring checklist, a walk-in wait-time card with sample data honestly labeled, and two locations with full hours. Photography shows a bright waiting room and exam rooms — light, plants, wood — with generated portraits for each provider. The template never makes medical claims or treatment promises: it sells access, people and process, and carries a clear in-emergency note. It suits family practices, pediatric offices and community clinics, and adapts to dental or specialty clinics by re-pointing the services list. Five variables swap clinic name, city, medical director, phone and years; providers, plans and reviews are invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/family-medical-clinic-website?case=6afea008-4e7d-4a0f-90bd-397eb60b87ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/family-medical-clinic-website/6afea008-4e7d-4a0f-90bd-397eb60b87ae/shot_desktop.da0ef08c26.webp" width="100%" alt="Family Medical Clinic Website — Family clinic, Meadowbrook, built by GLM-5.3 in ZCode"></a><br>
<b>Family clinic, Meadowbrook</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/family-medical-clinic-website?case=6afea008-4e7d-4a0f-90bd-397eb60b87ae&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/family-medical-clinic-website?case=1d7d72a6-48a2-4117-b3a4-c3b1452bdfeb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/family-medical-clinic-website/1d7d72a6-48a2-4117-b3a4-c3b1452bdfeb/shot_desktop.6b33acc310.webp" width="100%" alt="Family Medical Clinic Website — Family practice, Northport, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Family practice, Northport</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/family-medical-clinic-website?case=1d7d72a6-48a2-4117-b3a4-c3b1452bdfeb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Clinic name | Bramble Hill Family Clinic |
| `[CITY]` | City | Meadowbrook |
| `[FOUNDER]` | Medical director | Dr. Alana Reyes |
| `[PHONE]` | Phone | (555) 491-2200 |
| `[EXPERIENCE]` | Years open | 15 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add family-medical-clinic-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A pediatric practice: set [BRAND] and [CITY], make the lead pediatrician the first provider card, and rewrite visit types for well-child checks and sick visits.
- A community health clinic: keep the two-location hours and walk-in wait card, swap the insurance plans for the sliding-scale and public plans you accept.
- A dental office: re-point the services list to cleanings, fillings and urgent care, and change the what-to-bring checklist to insurance card and prior X-rays.
- A solo family doctor opening a first office: set [FOUNDER] to your own name, reduce the provider directory to one card, and use the same-day sick visit form as your main call to action.

## FAQ

### How do I add a wine club signup to a winery website built with AI?
The Family Medical Clinic Website template is not the place for a wine club form; its inline request form is built for appointment requests with visit type, provider and time-slot chips. A winery site needs a different template with a mailing-list or membership section. If you are adapting this clinic template to a winery, you would repoint the services list and replace the appointment form with a signup block, but no wine club component is included.

### How does the provider directory filter by insurance, language and new patients?
The Family Medical Clinic Website template includes a provider directory with specialty chips (All, Family medicine, Pediatrics, Women's health), language chips (All, English, Spanish) and an accepting-new-patients toggle. Filtering is instant and cards crossfade. A provider not accepting patients shows a muted panel-full state with a waitlist note instead of the request button. The insurance list is separate: seven invented plans filtered by a search input, with a no-match message telling visitors to call the front desk.

### What do I change first to make this clinic template my own practice?
Start with the five variables: clinic name, city, medical director, phone and years open. The Family Medical Clinic Website template uses those in the hero, locations, insurance copy and the first provider card, so changing them updates the page's identity. Then replace the invented providers, insurance plans and reviews with your real ones, and rewrite the services list for your specialties. The what-to-bring checklist and appointment form keep working as you edit.

### Is the appointment request form connected to a real booking calendar?
No. The Family Medical Clinic Website template's appointment request is a demo form: visit type, optional provider, day-part and slot chips are static samples, not a live calendar. Submitting validates required fields inline and shows a success card saying the front desk calls to confirm, while the request is stored in the visitor's browser only. To take real bookings you would connect the form to your own scheduling or email service.

### Can I adapt this clinic website for a dental office or a pediatric practice?
Yes. The Family Medical Clinic Website template is built for family practices, pediatric offices and community clinics, and the prompt notes it adapts to dental or specialty clinics by re-pointing the services list. For a pediatric practice, set the medical director variable to your lead pediatrician and adjust the specialty chips. For dental, rewrite the services and visit types to match cleanings, checkups and urgent visits, and update the what-to-bring checklist.

### How do I build a family medical clinic website with AI?
Copy the prompt from this page or run npx vibefather add family-medical-clinic-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Family Medical Clinic Website demo?
The Family clinic, Meadowbrook case was built by GLM-5.3 in ZCode; the Family practice, Northport case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Family Medical Clinic Website template use?
Family Medical Clinic Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Family Medical Clinic Website template for a client or a business?
The Family Medical Clinic Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Family Medical Clinic Website template work on mobile?
Yes. Every Family Medical Clinic Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Family Medical Clinic Website on VibeFather](https://vibefather.ai/templates/family-medical-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
