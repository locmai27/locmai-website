# locmai-website

Personal website for Loc Mai — whole-person identity site built with Next.js.

## Status

MVP scaffold in progress. See [design spec](docs/superpowers/specs/2026-06-09-personal-website-design.md).

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS v4
- Markdown content in `content/` (author in Cursor/VS Code)
- Deploy target: Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- Projects: `content/projects/*.md`
- Writing: `content/writing/*.md`

Add your resume PDF to `public/resume.pdf` for the footer download link.

## Commit workflow

This repo is intended to be committed in small chunks:

1. Design spec
2. Scaffold + config
3. Layout shell
4. Homepage + About
5. Projects
6. Writing
7. Stub pages
