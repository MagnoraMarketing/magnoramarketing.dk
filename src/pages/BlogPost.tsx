import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, Share2, ArrowLeft, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Array<{ slug: string; title: string; image: string }>>([]);

  useEffect(() => {
    // In a real application, you would fetch the blog post data from an API
    // Here we're using mock data for demonstration purposes

    // Simulate fetching the blog post
    setTimeout(() => {
      // Mock blog post data
      const mockPost: BlogPostData = {
        slug: slug || '',
        title: t('blogPost.mock.title'),
        excerpt: t('blogPost.mock.excerpt'),
        content: t('blogPost.mock.content'),
        category: t('blogPost.mock.category'),
        date: '15. august 2023',
        author: t('blogPost.mock.author'),
        authorRole: t('blogPost.mock.authorRole'),
        authorImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: t('blogPost.mock.tags', { returnObjects: true }) as string[],
      };

      setPost(mockPost);

      // Mock related posts
      const mockRelated = t('blogPost.mock.relatedPosts', { returnObjects: true }) as { title: string }[];
      setRelatedPosts([
        {
          slug: 'mødebooking-best-practices',
          title: mockRelated[0].title,
          image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          slug: 'outsourcing-telemarketing-fordele',
          title: mockRelated[1].title,
          image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          slug: 'digital-omstilling-telemarketing',
          title: mockRelated[2].title,
          image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]);

      // Update document title for SEO
      document.title = `${mockPost.title} | Magnora Marketing Blog`;
    }, 300);

    // Scroll to top on page load or slug change
    window.scrollTo(0, 0);
  }, [slug, t]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">{t('blogPost.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {post && (
        <SEO
          title={`${post.title} | Magnora Marketing Blog`}
          description={post.excerpt}
          canonical={`/blog/${post.slug}`}
        />
      )}
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft size={16} className="mr-2" /> {t('blogPost.backToBlog')}
            </Link>
          </div>

          {/* Blog Post Header */}
          <header className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wide">
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center text-gray-600 space-x-4 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Blog Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="border-t border-b border-gray-200 py-6 mb-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 size={20} className="text-gray-600 mr-3" />
                    <span className="text-gray-700 font-medium">{t('blogPost.share')}</span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="bg-gray-50 rounded-lg p-6 mb-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">{post.authorRole}</p>
                    <p className="text-gray-700">
                      {t('blogPost.authorBio')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{t('blogPost.relatedArticles')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={index}
                      to={`/blog/${relatedPost.slug}`}
                      className="card p-0 overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Box - Telemarketing Services */}
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">{t('blogPost.sidebarCta.title')}</h3>
                <p className="mb-6 text-sm">
                  {t('blogPost.sidebarCta.body')}
                </p>
                <div className="space-y-3">
                  <Link to="/samarbejdspartner" className="block w-full bg-white text-blue-600 text-center py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm">
                    {t('blogPost.sidebarCta.partnerButton')}
                  </Link>
                  <Link to="/priser" className="block w-full bg-blue-700 text-white text-center py-3 rounded-md font-medium hover:bg-blue-800 transition-colors text-sm">
                    {t('blogPost.sidebarCta.pricingButton')}
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-3">{t('blogPost.newsletter.title')}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t('blogPost.newsletter.body')}
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder={t('blogPost.newsletter.placeholder')}
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    {t('blogPost.newsletter.button')}
                  </button>
                </form>
              </div>

              {/* Freelancer Callout */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">{t('blogPost.freelancer.title')}</h3>
                <p className="text-green-700 mb-4 text-sm">
                  {t('blogPost.freelancer.body')}
                </p>
                <div className="space-y-2">
                  <Link to="/jobs/arbejd-hjemmefra" className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm">
                    {t('blogPost.freelancer.workFromHome')} <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/freelance-telemarketing" className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm">
                    {t('blogPost.freelancer.allPositions')} <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <CTASection
        title={t('blogPost.cta.title')}
        subtitle={t('blogPost.cta.subtitle')}
        primaryText={t('blogPost.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPost.cta.secondaryText')}
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPost;
