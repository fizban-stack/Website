import { getCollection, type CollectionEntry } from 'astro:content';
import { getSubcategory } from './categories';

export type Story = CollectionEntry<'stories'>;

export interface StoryImage {
  src: string;
  alt: string;
}

export interface ParsedStoryId {
  category: string;
  subcategory: string;
  slug: string;
}

// Stories are filed on disk as <category>/<subcategory>/<slug>.md, and the
// content loader turns that path into the entry's id. Reading it back out
// keeps category/subcategory from having to be duplicated in frontmatter.
export function parseStoryId(id: string): ParsedStoryId {
  const [category, subcategory, ...rest] = id.split('/');
  return { category, subcategory, slug: rest.join('/') };
}

export function storyHref(story: Story): string {
  return `/stories/${story.id}/`;
}

// Markdown image syntax: ![alt](src). Used to find the first image embedded
// in a story's body when no image is set explicitly in frontmatter.
const INLINE_IMAGE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/;

// Stories can specify an explicit `image`/`imageAlt` in frontmatter to
// override the default. Otherwise, the first image embedded in the body is
// used, falling back to a generic per-subcategory illustration.
export function getStoryImage(story: Story): StoryImage {
  if (story.data.image) {
    return { src: story.data.image, alt: story.data.imageAlt ?? story.data.title };
  }

  const inline = story.body?.match(INLINE_IMAGE);
  if (inline) {
    return { src: inline[2], alt: story.data.imageAlt ?? (inline[1] || story.data.title) };
  }

  const { category, subcategory } = parseStoryId(story.id);
  const subcategoryTitle = getSubcategory(category, subcategory)?.title ?? subcategory;
  return {
    src: `/images/stories/${subcategory}.svg`,
    alt: story.data.imageAlt ?? `${subcategoryTitle} illustration`,
  };
}

export async function getPublishedStories(): Promise<Story[]> {
  const entries = await getCollection('stories', ({ data }) => !(import.meta.env.PROD && data.draft));
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getStoriesFor(categorySlug: string, subcategorySlug?: string): Promise<Story[]> {
  const stories = await getPublishedStories();
  return stories.filter((story) => {
    const parsed = parseStoryId(story.id);
    if (parsed.category !== categorySlug) return false;
    return subcategorySlug ? parsed.subcategory === subcategorySlug : true;
  });
}
