# locmai-website

Personal site for Loc Mai — a single static page, no build step.

Live at [locmai27.github.io/locmai-website](https://locmai27.github.io/locmai-website/).

## Stack

Everything lives in `index.html`: markup, CSS, a small vanilla-JS block, and the
technology logos as inlined SVG `<symbol>` definitions. The only external request
is the Google Fonts stylesheet.

## Local development

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploying

GitHub Pages serves `main` from the repository root, so pushing to `main` publishes.
`.nojekyll` keeps Pages from running the files through Jekyll.

## Editing

- **Tech stack** — the `tech-rows` list and the two `marquee-group` rows in the
  `stack-toggle` section. Both reference the same `<symbol>` ids, so a logo is
  defined once and used in both places.
- **Projects** — `work-item` blocks. `data-tags` drives the filter buttons, so a new
  tag needs a matching `filter-btn`. The list pages after `PAGE_SIZE` items.
