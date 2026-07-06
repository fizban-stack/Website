import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Every blog-style write-up lives here, organized on disk as
// src/content/stories/<category>/<subcategory>/<slug>.md
// The category and subcategory are derived from the folder path at read time
// (see src/lib/stories.ts) so they never have to be repeated in frontmatter.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// The About page is split into one markdown file per section so each part
// can be edited independently while still being pulled into a single page.
const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

// One intro per top-level section (homelab.md, cyber.md); the filename is
// matched against the category slug from src/lib/categories.ts.
const categoryIntros = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/category-intros' }),
  schema: z.object({
    title: z.string(),
  }),
});

// Simple structured data (not prose), so it lives in YAML rather than markdown.
const contactLinks = defineCollection({
  loader: file('./src/content/contact/links.yaml'),
  schema: z.object({
    label: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

// Favorite external resources, organized on disk as
// src/content/resources/<category>/<slug>.md, category one of
// youtube/blogs/podcasts (see src/lib/resources.ts). The main resources page
// only lists title + link so it stays browsable; each entry also gets its
// own detail page with the write-up below.
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    description: z.string(),
    website: z.string().url(),
    github: z.string().url().optional(),
    labType: z.string().optional(),
    rssFeed: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { stories, about, categoryIntros, contactLinks, resources };
