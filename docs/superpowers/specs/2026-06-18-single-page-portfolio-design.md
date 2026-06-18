# Single-Page Portfolio Design

**Author:** Vu Thanh Loc (Loc) Mai  
**Date:** 2026-06-18  
**Status:** Approved  
**Project:** `locmai-website`  
**Supersedes (partial):** Homepage layout and nav IA from `2026-06-09-personal-website-design.md` — multi-page editorial model deferred for v1 recruiter scan.

---

## 1. Purpose & Goals

### Problem
The current multi-page site spreads recruiter-relevant signal across `/`, `/about`, and `/projects`. Visitors must click and read to assemble the story. The goal is a **30-second scan**: expertise, proof of work, and contact — without hunting.

### Primary audience
- **Recruiters & hiring managers** — fast scan, low effort

### Success criteria
- A recruiter understands **who Loc is**, **what he specializes in**, and **what he has shipped** within one scroll (or one nav jump)
- No placeholder project detail pages; project rows link to **GitHub repos**
- Copy is **brief, comprehensive, and impressive** — not narrative-heavy
- Depth (case studies, writing, clubs) is **out of scope for v1** on the one-pager

---

## 2. Information Architecture

### v1 routes

| Route | Behavior |
|-------|----------|
| `/` | Single scroll page — all v1 content |
| `/about` | Redirect to `/#about` |
| `/projects` | Redirect to `/#projects` |
| `/writing` | Redirect to `/` |
| `/projects/[slug]` | Remove; redirect to project GitHub URL from profile data |
| `/now`, `/interests`, `/community` | Redirect to `/` |

### Navigation (sticky header)

Anchor links with smooth scroll:

`About` · `Expertise` · `Experience` · `Projects` · `Contact`

Each maps to `/#about`, `/#expertise`, `/#experience`, `/#projects`, `/#contact`.

Footer retains GitHub · LinkedIn · Email · Resume PDF.

---

## 3. Page Sections (top → bottom)

### `#about` — Personal info

| Element | Content rule |
|---------|----------------|
| Name | Loc Mai |
| Tagline | ≤ 10 words (e.g. "Computing student · builder · AI & infra") |
| Intro | ≤ 2 sentences; who you are — **no QWeb, no club activities** |
| Credibility line | Queen's Computing (Honours) · GPA 4.26 |

### `#expertise` — Main focus

| Element | Content rule |
|---------|----------------|
| Headline | One phrase (e.g. "AI agents for CI/CD & observability") |
| Skill pills | 6–8 max: LangChain, LangGraph, Kubernetes, Prometheus, Grafana, Python, CI/CD, etc. |

Purpose: recruiter sees niche in **~3 seconds**.

### `#experience` — Key roles

**2–3 compact cards**, one line each. No QWeb, no GDSC, no clubs.

1. **Ericsson** — CloudRAN Integration & Test Co-op · LLM agents (LangChain/LangGraph) for CI/CD failure analysis; etc.
2. **RISE Lab** — GitHub Actions cache research across 282 repos · ACM publication
3. **TA** (optional) — Data Structures & Computer Architecture · Queen's

### `#projects` — Brief list

Each row:

- **Title**
- **One impressive line** (≤ 15 words, outcome-focused)
- **External link** → GitHub (demo URL if available)

All four projects remain in the list. **No case-study pages** in v1.

Example row format:

> **SlideFlow** — QHacks "Best Use of AI" · real-time slide generation → GitHub

### `#contact`

GitHub · LinkedIn · Email · Resume PDF (`/resume.pdf`)

---

## 4. Copy Rules

| Rule | Limit |
|------|-------|
| Tagline | ≤ 10 words |
| Personal intro | ≤ 2 sentences |
| Experience line | ≤ 20 words |
| Project line | ≤ 15 words |
| Section subtitles | None — section headings only |

**Tone:** outcome + technology, not storytelling.

- Avoid: "I grew into software through hackathons..."
- Prefer: "LLM agents that triage CI/CD failures at Ericsson"

---

## 5. Visual Layout

- **Max content width:** `max-w-3xl` (centered)
- **Section spacing:** ~80px (`mt-20` / `space-y-20`) between sections
- **Experience & projects:** bordered cards or rows (consistent with existing `bg-surface` + `border-stone-200/80` tokens)
- **Expertise:** pill tags using accent color
- **Remove from homepage v1:** two-column featured/writing layout, project tag grids, section descriptive subtitles

Existing design tokens from `globals.css` unchanged:

- Background `#FAF9F7`, accent `#2A7B7B`, Source Serif 4 + Inter

---

## 6. Data Model

New file: `lib/profile.ts`

```ts
type Experience = { org: string; role: string; line: string };
type Project = { title: string; line: string; github: string; demo?: string };
type Profile = {
  name: string;
  tagline: string;
  intro: string;
  education: string;
  expertiseHeadline: string;
  expertisePills: string[];
  experience: Experience[];
  projects: Project[];
  contact: { github: string; linkedin: string; email: string; resume: string };
};
```

Markdown case studies in `content/projects/` remain in the repo but are **not linked** from the one-pager in v1.

---

## 7. Component Changes

| File | Change |
|------|--------|
| `app/page.tsx` | Render all 5 sections from `lib/profile.ts` |
| `components/Header.tsx` | Anchor nav (`/#section`) instead of route links |
| `components/Footer.tsx` | Unchanged or add `#contact` anchor |
| `app/about/page.tsx` | Replace with redirect to `/#about` |
| `app/projects/page.tsx` | Replace with redirect to `/#projects` |
| `app/projects/[slug]/page.tsx` | Remove; per-slug redirect to GitHub from profile data |
| `app/writing/*` | Redirect to `/` |
| Stub pages | Redirect to `/` |

Optional small section components (if `page.tsx` grows):

- `components/sections/AboutSection.tsx`
- `components/sections/ExpertiseSection.tsx`
- etc.

---

## 8. Out of Scope (v1)

- Project case-study pages (`/projects/[slug]` content)
- Writing section on one-pager
- QWeb, GDSC, club activities on one-pager
- `/now`, `/interests`, `/community` content
- Photo on `#about` (can add post-v1)
- Dark mode
- `@tailwindcss/typography` / markdown prose on homepage

---

## 9. Testing Checklist

- [ ] `/` renders all 5 sections with correct anchor IDs
- [ ] Sticky nav scrolls to each section (smooth)
- [ ] Project rows open GitHub in new tab
- [ ] `/about`, `/projects` redirect to correct anchors
- [ ] `/projects/[slug]` redirects to GitHub URLs
- [ ] Mobile: sections stack, nav wraps, readable without horizontal scroll
- [ ] Resume link serves `public/resume.pdf`
- [ ] Copy within word limits in Section 4

---

## 10. Future (post-v1)

- Restore case-study pages for selected projects
- Writing section or `/writing` route
- Expand `#experience` with dates
- Replace Ericsson "etc." with dashboard/KPI parser line when copy is finalized
- Optional Visual Companion mockup for layout iteration
