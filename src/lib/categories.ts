export interface Subcategory {
  slug: string;
  title: string;
  description: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

// Single source of truth for the site's two story sections. The sidebar nav,
// the homelab/cyber landing pages, and the subcategory listing pages are all
// generated from this list instead of being hand-written per page.
export const CATEGORIES: Category[] = [
  {
    slug: 'homelab',
    title: 'Homelab',
    description: 'Servers, networking, and automation projects running at home.',
    subcategories: [
      {
        slug: 'hardware',
        title: 'Hardware',
        description: 'Servers, networking gear, and everything with a power cable.',
      },
      {
        slug: 'infrastructure',
        title: 'Infrastructure',
        description: 'Virtualization, storage, networking, and the services tying it together.',
      },
      {
        slug: 'family',
        title: 'Family',
        description: 'Keeping the homelab useful, safe, and invisible to the rest of the household.',
      },
      {
        slug: 'tools',
        title: 'Tools',
        description: 'Software and utilities that make running a homelab easier.',
      },
      {
        slug: 'self-hosted',
        title: 'Self-Hosted',
        description: 'The self-hosted apps running in the lab — what each one does and why it earned its spot.',
      },
    ],
  },
  {
    slug: 'cyber',
    title: 'Cyber',
    description: 'Security work, labs, and projects.',
    subcategories: [
      {
        slug: 'work-experience',
        title: 'Work Experience',
        description: 'Lessons and notes from professional security work.',
      },
      {
        slug: 'cyber-labs',
        title: 'Cyber Labs',
        description: 'Write-ups from CTFs, home labs, and hands-on practice environments.',
      },
      {
        slug: 'projects',
        title: 'Projects',
        description: 'Security tooling and projects built from scratch.',
      },
      {
        slug: 'tool-walkthroughs',
        title: 'Tool Walkthroughs',
        description: 'Practical guides to the tools used day to day.',
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  return getCategory(categorySlug)?.subcategories.find((sub) => sub.slug === subcategorySlug);
}
