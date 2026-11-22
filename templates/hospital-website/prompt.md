# Hospital Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a calm, high-contrast regional hospital website for [HOSPITAL_NAME] serving the [REGION_NAME] (Main Desk: [PHONE_MAIN]; Emergency Banner: [EMERGENCY_LINE]). Use warm white surfaces (#FCFBF8) with hospital blue (#1356A8), calming mint (#3CC2A0), coral accent (#FF6F59), and big, high-contrast typography. Include a persistent top Emergency Banner showing sample ER wait times across three regional campuses and hash-routed navigation synced bidirectionally with window.location.hash across: (1) #/home — Sunlit atrium architectural hero, quick care actions (Find a Doctor, Request Appointment, ER Wait Times, Patient Portal), featured Departments, campus ER wait-time strip, and sample-data transparency note; (2) #/departments — Interactive department cards opening detailed service views (Cardiology, Orthopedics, Maternity & Family, Diagnostic Imaging, Neurology, Urgent & Primary Care); (3) #/doctors — Filterable physician directory (Specialty, Campus Location, Spoken Language, Accepting New Patients toggle, keyword search) opening full fictional clinician profile panels with direct appointment pre-fill; (4) #/locations — Three regional hospital & clinic campuses with sample ER wait times, parking decks, transit directions, and Patient & Visitor Guide (visiting hours, parking rates, what to bring); (5) #/appointments — Step-by-step Appointment Request flow with instant sample confirmation ticket; (6) #/portal — Interactive Mock Patient Portal Preview featuring tabbed sample Lab Results, Care Team Messages (with reply composer), and Billing Statements; (7) #/library — Health Library articles with topic filter and full article reader modal/view, plus Careers open roles and Foundation Giving impact tiers. Clearly label all wait times, portal records, and profiles as sample data with zero medical claims and zero calendar dates.

- Audience: Patients, families, visitors, referring clinicians, job applicants, and community donors.
- Goal: Deliver instant calm and wayfinding for stressed visitors—putting emergency wait times, doctor search, campus parking, and appointment booking within one click.
- Tone: Reassuring, transparent, modern civic healthcare—plain English, generous spacing, high contrast.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (500, 600, 700) and @fontsource/inter (400, 500, 600) in src/main.tsx.
  - Bundle all 4 generated WebP architectural/clinical hospital photos locally under public/images/ and reference via ./images/*.webp.
  - Sync active route (#/home, #/departments, #/doctors, #/locations, #/appointments, #/portal, #/library, #/careers, #/giving) bidirectionally with window.location.hash.

## Variables
- [HOSPITAL_NAME] — Hospital System Name (default: "Meridian Valley Health"). Fictional regional hospital network name
- [REGION_NAME] — Service Region (default: "Meridian Valley"). Fictional valley or bay region served
- [PHONE_MAIN] — Main Desk Phone (default: "(555) 019-4400"). Sample non-working 555 telephone number
- [EMERGENCY_LINE] — Emergency Guidance Banner (default: "Dial 911 for emergencies · 24/7 Nurse Triage: (555) 019-4911"). Top emergency banner copy
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/hospital-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/hospital-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
