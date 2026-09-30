import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, ChevronRight, Clock, RefreshCw } from 'lucide-react';
import {
  BlogPostEntry,
  blogCategoryOrder,
  getBlogPost,
  getBlogPostByPath,
  latestPosts,
  postsForService,
} from '../data/blog';

// Shared building blocks for every blog article (both the BlogArticle template and
// the older hand-built article pages). They look the post up from the current URL
// in src/data/blogPosts.json, so every article gets identical breadcrumbs, byline,
// author box and related-article links in the pre-rendered HTML.

const useCurrentPost = () => getBlogPostByPath(useLocation().pathname);

const useCategoryLabel = () => {
  const { t } = useTranslation();
  const categories = t('blogPage.categories', { returnObjects: true }) as Array<{ label: string }>;
  return (post: BlogPostEntry) => categories[blogCategoryOrder.indexOf(post.category)]?.label ?? '';
};

const useFormatDate = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'en' ? 'en-GB' : i18n.language === 'es' ? 'es-ES' : 'da-DK';
  return (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
};

/** Visible breadcrumb trail for the dark article header. */
export const BlogBreadcrumbs: React.FC = () => {
  const { t } = useTranslation();
  const post = useCurrentPost();
  const categoryLabel = useCategoryLabel();
  if (!post) return null;
  return (
    <nav aria-label={t('blogArticle.breadcrumbLabel')} className="mb-5 text-sm text-blue-100/80">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link to="/" className="hover:text-white">{t('blogArticle.breadcrumbHome')}</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li><Link to="/blog" className="hover:text-white">{t('blogArticle.breadcrumbBlog')}</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li><Link to={`/blog#${post.category}`} className="hover:text-white">{categoryLabel(post)}</Link></li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li aria-current="page" className="text-white/90 line-clamp-1">{post.title}</li>
      </ol>
    </nav>
  );
};

/** Byline: author, publish date, update date and reading time. */
export const BlogPostMeta: React.FC = () => {
  const { t } = useTranslation();
  const post = useCurrentPost();
  const formatDate = useFormatDate();
  if (!post) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-blue-100/80 text-sm">
      <Link to="/om-os" rel="author" className="hover:text-white">{t('blogArticle.authorName')}</Link>
      <span className="flex items-center gap-2">
        <Calendar size={15} /> {t('blogArticle.published')} <time dateTime={post.date}>{formatDate(post.date)}</time>
      </span>
      {post.modified && post.modified !== post.date && (
        <span className="flex items-center gap-2">
          <RefreshCw size={15} /> {t('blogArticle.updated')} <time dateTime={post.modified}>{formatDate(post.modified)}</time>
        </span>
      )}
      <span className="flex items-center gap-2"><Clock size={15} /> {t('blogArticle.readTime', { count: post.readMin })}</span>
    </div>
  );
};

const PostLinkCard: React.FC<{ post: BlogPostEntry }> = ({ post }) => {
  const { t } = useTranslation();
  const categoryLabel = useCategoryLabel();
  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
      <span className="text-xs font-semibold text-blue-700">{categoryLabel(post)}</span>
      <h3 className="text-base font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-blue-700">{post.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{post.description}</p>
      <span className="text-sm text-blue-600 font-medium inline-flex items-center gap-1">
        {t('blogArticle.readArticle')} <ArrowRight size={14} />
      </span>
    </Link>
  );
};

/**
 * End-of-article block: author box (E-E-A-T), related articles and the service
 * pages the article supports. Rendered before the closing CTA on every post.
 */
export const BlogPostFooter: React.FC = () => {
  const { t } = useTranslation();
  const post = useCurrentPost();
  if (!post) return null;
  const related = post.related.map(getBlogPost).filter((p): p is BlogPostEntry => Boolean(p));
  const serviceLabels = t('blogArticle.services', { returnObjects: true }) as Record<string, string>;

  return (
    <aside className="max-w-4xl mx-auto px-4 pb-16">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{t('blogArticle.authorHeading')}</p>
        <p className="text-lg font-bold text-slate-900 mb-2">{t('blogArticle.authorName')}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('blogArticle.authorBio')}</p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link to="/om-os" className="text-blue-600 hover:underline">{t('blogArticle.authorAbout')}</Link>
          <Link to="/kontakt" className="text-blue-600 hover:underline">{t('blogArticle.authorContact')}</Link>
        </div>
      </div>

      {post.services.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t('blogArticle.servicesHeading')}</h2>
          <ul className="flex flex-wrap gap-3">
            {post.services.map(path => (
              <li key={path}>
                <Link to={path} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
                  {serviceLabels[path] ?? path} <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t('blogArticle.relatedHeading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(p => <PostLinkCard key={p.slug} post={p} />)}
          </div>
        </div>
      )}
    </aside>
  );
};

/** Blog articles supporting a service page ("Artikler om emnet"). */
export const ServiceArticles: React.FC<{ servicePath: string; limit?: number }> = ({ servicePath, limit = 6 }) => {
  const { t } = useTranslation();
  const posts = postsForService(servicePath, limit);
  if (posts.length === 0) return null;
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('blogArticle.serviceArticlesHeading')}</h2>
          <Link to="/blog" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline">
            {t('blogArticle.allArticles')} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => <PostLinkCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
};

/** Newest posts, for the homepage. */
export const LatestArticles: React.FC<{ limit?: number }> = ({ limit = 6 }) => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t('blogArticle.latestHeading')}</h2>
            <p className="text-gray-600">{t('blogArticle.latestSubtitle')}</p>
          </div>
          <Link to="/blog" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline">
            {t('blogArticle.allArticles')} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts(limit).map(p => <PostLinkCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
};
