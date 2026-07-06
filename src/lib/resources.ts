import { getCollection, type CollectionEntry } from 'astro:content';
import { getResourceCategory } from './resource-categories';

export type Resource = CollectionEntry<'resources'>;

export interface ParsedResourceId {
  category: string;
  slug: string;
}

// Resources are filed on disk as <category>/<slug>.md, and the content
// loader turns that path into the entry's id.
export function parseResourceId(id: string): ParsedResourceId {
  const [category, ...rest] = id.split('/');
  return { category, slug: rest.join('/') };
}

export function resourceHref(resource: Resource): string {
  return `/resources/${resource.id}/`;
}

export interface ResourceImage {
  src: string;
  alt: string;
}

// Resources can specify an explicit `image`/`imageAlt` in frontmatter,
// otherwise they fall back to a generic per-category illustration.
export function getResourceImage(resource: Resource): ResourceImage {
  if (resource.data.image) {
    return { src: resource.data.image, alt: resource.data.imageAlt ?? resource.data.title };
  }

  const { category } = parseResourceId(resource.id);
  const categoryTitle = getResourceCategory(category)?.title ?? category;
  return {
    src: `/images/resources/${category}.svg`,
    alt: resource.data.imageAlt ?? `${categoryTitle} illustration`,
  };
}

export async function getResources(): Promise<Resource[]> {
  const entries = await getCollection('resources');
  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getResourcesFor(categorySlug: string): Promise<Resource[]> {
  const resources = await getResources();
  return resources.filter((resource) => parseResourceId(resource.id).category === categorySlug);
}
