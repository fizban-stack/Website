# Website

James Wells' personal site — homelab and cyber security write-ups, built with
[Astro](https://astro.build). Static output, markdown content, plain CSS and
JS. No client-side framework.

## Structure

```
src/
  content/
    stories/<category>/<subcategory>/*.md   the write-ups (Homelab/Cyber)
    about/*.md                              About page sections
    category-intros/{homelab,cyber}.md      intro text for the two landing pages
    contact/links.yaml                      contact links (structured data, not prose)
  content.config.ts                         collection schemas
  lib/
    categories.ts                           single source of truth for nav + section structure
    stories.ts                              helpers for reading/sorting/filtering stories
  layouts/BaseLayout.astro                  page shell (head, sidebar, footer)
  components/                               Sidebar, PostCard, SubcategoryBlock, CategoryLanding, StoryOfDay
  styles/                                   global.css + one file per concern (sidebar, cards, hero)
  scripts/                                  sidebar.js, story-of-day.js
  pages/
    index.astro                             home: story of the day + 9 most recent posts
    about.astro
    contact.astro
    [category]/index.astro                  homelab/cyber landing pages (shared template)
    [category]/[subcategory].astro          the 8 subcategory listing pages (shared template)
    stories/[...id].astro                   individual story pages
```

Adding a new write-up just means dropping a markdown file in the right
`src/content/stories/<category>/<subcategory>/` folder — the homepage, the
category landing page, the subcategory page, and the nav all update
automatically. Frontmatter fields: `title`, `description` (used as the two
sentence card blurb), `pubDate`, `image`, `imageAlt`, and optional `draft:
true` to hide it from production builds.

The nav's categories/subcategories, and the "Story of the Day" logic, are
defined once (`src/lib/categories.ts`, `src/components/StoryOfDay.astro`) and
reused everywhere rather than repeated per page.

"Story of the Day" is picked client-side (`src/scripts/story-of-day.js`) using
the calendar date as a seed, so it changes daily even though the site is
static and isn't rebuilt every day.

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321`. `npm run build` builds to `./dist/`, and
`npm run preview` serves that build locally.

## Before publishing

A few placeholders need your real information:

- `src/content/contact/links.yaml` — the GitHub/LinkedIn URLs are placeholders.
- `src/content/about/*.md` — replace the prompt text in each section.
- `src/content/category-intros/{homelab,cyber}.md` — replace with your own story.
- `public/images/profile/profile.svg` and `public/images/stories/*.svg` — swap
  for real photos/images (any format works; update the `image:` path in each
  story's frontmatter to match).
- `astro.config.mjs` — set `site` to your real domain once it's live.

The 24 stories under `src/content/stories/` are placeholder samples showing
how the system works — replace or delete them once you have real content.

## Publishing to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
to GitHub Pages on every push to `main` using the official
[`withastro/action`](https://github.com/withastro/action).

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. Since you're using a custom domain: add a `public/CNAME` file containing
   your domain (e.g. `example.com`), set that same domain in the repo's
   **Pages** settings, and update `site` in `astro.config.mjs` to match. DNS
   should point the domain at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. Push to `main` — the Actions tab will show the build and deploy.
