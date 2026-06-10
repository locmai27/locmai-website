# Personal Website Design Spec

**Author:** Vu Thanh Loc (Loc) Mai  
**Date:** 2026-06-09  
**Status:** Approved  
**Project:** `locmai-website`

---

## 1. Purpose & Goals

### Primary purpose
When someone lands on the site, they should take away: **"This is who Loc is as a whole person"** — engineer, writer, community member, and more — not just a job application.

### Audience
- **Recruiters & hiring managers** — need to scan projects quickly (30-second test)
- **Academic / research contacts** — need depth on research work (RISE Lab, ACM publication)

### Success criteria
- Homepage communicates personality + technical credibility within one scroll
- Project case studies are deep enough for engineers and professors
- Writing section is readable and easy to add posts to (MDX in repo)
- Site grows over time without redesign (stub routes for future sections)

---

## 2. Content Dimensions

All dimensions are in scope long-term. MVP prioritizes the bold items.

| Dimension | MVP | Post-MVP |
|---|---|---|
| Career & projects | ✓ Featured + case studies | Expand project library |
| Personal intro & story | ✓ Homepage hero + /about | — |
| Writing / blog | ✓ Index + MDX pipeline | Regular publishing |
| Life updates (/now) | Stub | Full page |
| Interests & hobbies | Stub | Full page |
| Community & volunteering | Stub | Full page |
| Creative work | Mentioned on /about | Dedicated section |

---

## 3. Information Architecture

**Approach:** B — Editorial multi-page (recommended and approved)

### Launch routes (MVP)

| Route | Purpose |
|---|---|
| `/` | Intro hero + 3 featured projects + 2 recent writing previews |
| `/about` | Photo, story, values, education, experience highlights, contact CTA |
| `/projects` | Grid of all 4 project case studies |
| `/projects/[slug]` | Individual project case study |
| `/writing` | Reverse-chronological blog index |
| `/writing/[slug]` | Individual MDX blog post |

### Stub routes (nav visible, minimal content)

| Route | Purpose |
|---|---|
| `/now` | Seasonal focus — "what I'm doing right now" |
| `/interests` | Books, hobbies, fun stuff |
| `/community` | TA, GDSC, QWeb leadership |

### Global chrome
- **Nav:** Loc · About · Projects · Writing · Now
- **Footer:** GitHub · LinkedIn · Email · Resume PDF download

---

## 4. Homepage Layout

### Above the fold
- Left-weighted intro: name ("Loc Mai"), one-line tagline, 2–3 sentence hook
- Optional small photo (rounded, not a giant hero image)

### Mid-page — two columns (stack on mobile)
- **Left (~60%):** 3 featured project cards — title, one-line summary, tech tags, link to case study
- **Right (~40%):** "Recent writing" — 2 post previews (title, date, excerpt)

### Below
- Short "Elsewhere" strip: GitHub · LinkedIn · Email · Resume PDF

### Featured projects (MVP)
1. **SlideFlow** — QHacks 2025 "Best Use of AI" winner
2. **Elastic Cloud Storage** — AWS serverless architecture
3. **RISE Lab Research** — GitHub Actions cache optimization (ACM publication)

Fourth case study on `/projects`: **Flight Booking Platform**

---

## 5. Page Templates

### About
1. Story (who you are beyond the resume)
2. Values / interests snapshot
3. Education & awards (Queen's, Dean's List, International Admission Awards)
4. Experience highlights (Research, TA, GDSC, QWeb)
5. Contact CTA

### Project case study
1. Problem / context
2. Role & stack
3. What you built (with screenshots if available)
4. Results / metrics
5. Links (GitHub, demo, paper)

### Writing
- Index: reverse-chronological from MDX frontmatter
- Post: clean prose, max ~680px reading width

### Stub pages
- Title + 1–2 sentences + "More coming soon"

---

## 6. Content Model (MDX Frontmatter)

### Projects (`content/projects/*.mdx`)
```yaml
title: string
date: YYYY-MM-DD
summary: string
tags: string[]
featured: boolean
links:
  github: string | null
  demo: string | null
  paper: string | null
```

### Writing (`content/writing/*.mdx`)
```yaml
title: string
date: YYYY-MM-DD
summary: string
tags: string[]
```

---

## 7. Visual System

**Vibe:** Warm & personal + editorial structure

### Color tokens
| Token | Light | Dark |
|---|---|---|
| Background | `#FAF9F7` | `#1A1918` |
| Text primary | near-black | warm off-white |
| Text secondary | warm gray | muted gray |
| Accent | `#2A7B7B` (muted teal) | same, adjusted for contrast |

### Typography
- **Headings & long prose:** Source Serif 4
- **UI, nav, metadata:** Inter

### Layout principles
- Generous whitespace (80–120px section gaps on desktop)
- Typography-led, not image-heavy
- One accent color per page — links, hover states, highlights
- No gradients, no generic "AI portfolio" aesthetic

---

## 8. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | MDX files in repo |
| Deployment | Vercel |
| CMS | None for MVP |

### Repo structure
```
app/              → routes (App Router)
components/       → layout, cards, prose renderer
content/
  projects/       → *.mdx case studies
  writing/        → *.mdx blog posts
lib/              → MDX parsing, content helpers
public/           → images, resume PDF
docs/superpowers/specs/  → design & planning docs
```

---

## 9. Implementation & Commit Strategy

User requested **frequent commits after every meaningful chunk**:

1. Scaffold + git init + README
2. Layout shell (nav, footer, fonts, color tokens)
3. Homepage
4. About page
5. Projects index
6. Project case study template + SlideFlow
7. Remaining case studies (one commit each)
8. Writing index + MDX pipeline
9. First blog post(s)
10. Stub pages (/now, /interests, /community)
11. Polish, SEO metadata, deploy config

---

## 10. Out of Scope (MVP)

- Headless CMS integration
- Contact form backend (mailto link is fine)
- Analytics
- Dark/light mode toggle (implement dark tokens but single default is OK for MVP)
- Project tag filtering
- Creative gallery / interests full pages
- Comments on blog posts

---

## 11. Open Items (Post-MVP)

- Custom domain configuration
- `/now` page content and update cadence
- Photography / creative work section
- Blog post topics and publishing schedule
- OG images for social sharing
