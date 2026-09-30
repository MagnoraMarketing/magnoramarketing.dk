// Central blog registry. src/data/blogPosts.json is the single source of truth for
// blog post metadata: it drives the article breadcrumbs, byline, related-article
// links, BlogPosting structured data, the pre-render route list and sitemap.xml.
// To publish a new post: add its route in src/App.tsx and one entry to blogPosts.json.
import posts from './blogPosts.json';

export type BlogCategoryId = 'samarbejde' | 'telesalg' | 'webudvikling' | 'ai';

export interface BlogPostEntry {
  slug: string;
  category: BlogCategoryId;
  /** Publish date, YYYY-MM-DD. */
  date: string;
  /** Last substantial content update, YYYY-MM-DD. Omit when never updated. */
  modified?: string;
  /** The article's H1 – used as link text and schema headline. */
  title: string;
  description: string;
  readMin: number;
  /** Slugs of closely related posts (shown as "Relaterede artikler"). */
  related: string[];
  /** Service / pillar pages the post supports. */
  services: string[];
}

export const blogPosts = posts as BlogPostEntry[];

const bySlug = new Map(blogPosts.map(p => [p.slug, p]));

export const getBlogPost = (slug: string) => bySlug.get(slug);

/** Look up a post from a canonical path such as "/blog/ai-automation-2026". */
export const getBlogPostByPath = (pathname?: string) => {
  const m = pathname?.match(/^\/blog\/([^/?#]+)\/?$/);
  return m ? bySlug.get(m[1]) : undefined;
};

/** Order of the categories on /blog (matches blogPage.categories in the locales). */
export const blogCategoryOrder: BlogCategoryId[] = ['samarbejde', 'telesalg', 'webudvikling', 'ai'];

export const blogCategoryImage: Record<BlogCategoryId, string> = {
  samarbejde: '/heroes/hero-partner.jpg',
  telesalg: '/heroes/hero-telesalg.jpg',
  webudvikling: '/heroes/hero-webdev.jpg',
  ai: '/heroes/hero-ai.jpg',
};

/** Posts that list the given service page, newest first. */
export const postsForService = (servicePath: string, limit = 6) =>
  blogPosts
    .filter(p => p.services.includes(servicePath))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);

/** Newest posts, taken round-robin across categories so every topic hub is represented. */
export const latestPosts = (limit = 6) => {
  const queues = blogCategoryOrder.map(c =>
    blogPosts.filter(p => p.category === c).sort((a, b) => b.date.localeCompare(a.date))
  );
  const picked: BlogPostEntry[] = [];
  while (picked.length < limit && queues.some(q => q.length)) {
    for (const q of queues) if (q.length && picked.length < limit) picked.push(q.shift()!);
  }
  return picked;
};
