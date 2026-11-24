# Hospital Website <sup>PRO</sup>

> Calm, high-contrast regional hospital portal with sample ER wait times, doctor directory, appointments, and patient portal preview.

<a href="https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/hospital-website/bac74a33-fde2-49bb-abca-d0e259eb59e3/webp.8f81715787.webp" width="100%" alt="Hospital Website — Modern Regional Hospital &amp; Care Portal built by GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A calm, accessible regional hospital website built around big readable typography, high contrast, and immediate clarity under stress. Features a clear top emergency banner with sample ER wait times, dedicated Department & Service pages, a filterable Find a Doctor directory (specialty, campus location, spoken language, accepting new patients) with full clinician profiles, campus Locations & Directions, a guided Appointment Request flow, Patient & Visitor practical information (parking, visiting hours, what to bring), an interactive mock Patient Portal preview (Lab Results, Care Messages, Billing Statements), a Health Library with plain-English wellness articles, Careers listings, and a Foundation Giving page—paired with sunlit architectural and clinical photography from one cohesive shoot.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | Corporate, Portal |
| Style | [Minimal](../../styles/minimal.md), [Clean](../../styles/clean.md), Modern |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 7 |
| Built with | [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hospital-website?case=bac74a33-fde2-49bb-abca-d0e259eb59e3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hospital-website/bac74a33-fde2-49bb-abca-d0e259eb59e3/shot_desktop.3809c7053e.webp" width="100%" alt="Hospital Website — Harborview Regional Medical, built by GPT-6.2 Sol in Codex"></a><br>
<b>Harborview Regional Medical</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/hospital-website?case=bac74a33-fde2-49bb-abca-d0e259eb59e3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[HOSPITAL_NAME]` | Hospital System Name | Meridian Valley Health |
| `[REGION_NAME]` | Service Region | Meridian Valley |
| `[PHONE_MAIN]` | Main Desk Phone | (555) 019-4400 |
| `[EMERGENCY_LINE]` | Emergency Guidance Banner | Dial 911 for emergencies · 24/7 Nurse Triage: (555) 019-4911 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A single-campus community clinic: set HOSPITAL_NAME and REGION_NAME, cut the three-campus wait strip to one, and rewrite the departments cards for your own services.
- A regional cancer center: keep the calm layout, swap the doctor directory filters for treatment type and consult language, and point appointment pre-fill at your intake team.
- A children's hospital: adjust the emergency banner copy for pediatric guidance, and rewrite the Health Library articles and visitor guide in family-friendly plain English.
- A rural health network: use the locations page for clinic sites and transit notes, and replace the careers listings with your open roles and foundation giving tiers.

## FAQ

### How do I change the hospital name, region and phone numbers in the template?
The Hospital Website template keeps four variables at the top of its prompt: HOSPITAL_NAME, REGION_NAME, PHONE_MAIN and EMERGENCY_LINE. Set them to your own hospital system, service region, main desk number and emergency banner copy, then ask your AI agent to rewrite every headline, paragraph and label that mentions the old values. The prompt asks for all copy in one content file, so the swap stays consistent across the home, departments, doctors, locations, appointments, portal and library pages.

### What does the sample ER wait time banner show and can I connect it to real hospital data?
The Hospital Website template shows a persistent top emergency banner with sample ER wait times for three regional campuses, plus a wait-time strip on the home page. The demo is a static build with no backend, so the numbers are labeled sample data. To show live figures you would replace those values with your own feed, but the template itself does not include a data connection and makes no medical claims.

### How does the Find a Doctor directory filter work for patients?
The Hospital Website template's Find a Doctor page filters a physician directory by specialty, campus location, spoken language, an accepting new patients toggle and keyword search. Each result opens a full clinician profile panel with a direct appointment pre-fill, so a patient can move from search to a request without retyping details. All profiles are fictional sample data, and you replace them with your own clinicians and specialties.

### Can I use the Hospital Website template for a clinic or a client project?
The Hospital Website template is a Pro template, so commercial and client use needs Pro. Pro members see the full prompt and get the source code of the demos. A single-campus clinic can use it too by setting HOSPITAL_NAME and REGION_NAME, trimming the three-campus wait-time strip and adjusting the departments list to your services. Free prompts and DESIGN.md files are for personal, non-commercial use only.

### What should I change first in the Hospital Website template?
Start with the four variables: HOSPITAL_NAME, REGION_NAME, PHONE_MAIN and EMERGENCY_LINE. Then replace the sample ER wait times, the fictional doctor profiles and the mock patient portal records with your own content or clearly labeled placeholders. Check the locations page for parking decks, visiting hours and transit directions, since those are the details stressed visitors look for first. Keep the sample-data transparency note until real data is in place.

### How do I build a hospital website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add hospital-website, replace [HOSPITAL_NAME], [REGION_NAME], [PHONE_MAIN] and [EMERGENCY_LINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Hospital Website demo?
The Harborview Regional Medical case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added.

### What tech stack and pages does the Hospital Website template use?
Hospital Website is a 7-page site built with Tailwind CSS, React and Typescript, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Hospital Website template free to use?
Hospital Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Hospital Website template work on mobile?
Yes. Every Hospital Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [Hospital Website on VibeFather](https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
