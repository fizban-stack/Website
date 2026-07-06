export interface ResourceCategory {
  slug: string;
  title: string;
  description: string;
}

// Single source of truth for the resources section, mirroring how
// src/lib/categories.ts drives the stories nav.
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    slug: 'youtube',
    title: 'YouTube Channels',
    description: 'Channels I keep coming back to for methodology, walkthroughs, and research.',
  },
  {
    slug: 'blogs',
    title: 'Blogs',
    description: 'Research blogs and newsletters that consistently teach me something.',
  },
  {
    slug: 'podcasts',
    title: 'Podcasts',
    description: 'Shows I listen to for security news, stories, and technical deep dives.',
  },
  {
    slug: 'training',
    title: 'Training',
    description: 'Platforms and courses I use to build and sharpen security skills.',
  },
  {
    slug: 'vulnerable-labs',
    title: 'Vulnerable Labs',
    description: 'Intentionally vulnerable apps and lab environments for hands-on practice.',
  },
];

export function getResourceCategory(slug: string): ResourceCategory | undefined {
  return RESOURCE_CATEGORIES.find((category) => category.slug === slug);
}
