// Title + description for every blog post, keyed by slug. Danish comes straight
// from src/data/blogPosts.json (the source of truth); en/es must translate every
// slug in that file (enforced by scripts/check-i18n.mjs).
import posts from '../../../data/blogPosts.json';

export default Object.fromEntries(
  posts.map(p => [p.slug, { title: p.title, description: p.description }]),
) as Record<string, { title: string; description: string }>;
