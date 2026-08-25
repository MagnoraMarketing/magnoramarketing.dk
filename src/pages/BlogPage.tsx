import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Phone, Globe, Cpu, TrendingUp, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface Post { slug: string; title: string; description: string; date: string; }

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  badgeColor: string;
  posts: Post[];
}

interface TranslatedPost { title: string; description: string; }
interface TranslatedCategory { label: string; posts: TranslatedPost[]; }
interface FAQItem { question: string; answer: string; }

const categoryMeta: Array<{ id: string; icon: React.ReactNode; color: string; badgeColor: string; slugs: Array<{ slug: string; date: string }> }> = [
  {
    id: 'samarbejde',
    icon: <HeartHandshake size={22} />,
    color: 'from-blue-600 to-indigo-800',
    badgeColor: 'bg-blue-100 text-blue-700',
    slugs: [
      { slug: 'hvorfor-samarbejde-magnora', date: '2026-07-01' },
      { slug: 'ideudvikling-med-magnora', date: '2026-07-02' },
      { slug: 'fra-ide-til-salg', date: '2026-07-03' },
      { slug: 'moedebooking-partner-magnora', date: '2026-07-04' },
      { slug: 'outsource-moedebooking-fordele', date: '2026-07-05' },
      { slug: 'telesalg-partner-magnora', date: '2026-07-06' },
      { slug: 'b2b-telesalg-samarbejde', date: '2026-07-07' },
      { slug: 'vaekstpartner-ide-moedebooking-telesalg', date: '2026-07-08' },
      { slug: 'saadan-foregaar-samarbejdet', date: '2026-07-09' },
      { slug: 'hvorfor-outsource-salg-og-moedebooking', date: '2026-07-10' },
    ],
  },
  {
    id: 'telesalg',
    icon: <Phone size={22} />,
    color: 'from-blue-700 to-blue-900',
    badgeColor: 'bg-blue-100 text-blue-700',
    slugs: [
      { slug: 'telesalg-2026', date: '2026-03-05' },
      { slug: 'modebooking-2026', date: '2026-02-20' },
      { slug: 'outbound-sales-2026', date: '2026-03-20' },
      { slug: 'hvorfor-magnora-telesalg', date: '2026-05-20' },
      { slug: 'hvorfor-magnora-moedebooking', date: '2026-05-25' },
      { slug: 'outsourcing-telesalg-2026', date: '2026-06-01' },
      { slug: 'moedebooking-scripts-2026', date: '2026-06-10' },
      { slug: 'cold-calling-vs-inbound', date: '2026-06-29' },
      { slug: 'b2b-salg-strategi-2026', date: '2026-06-05' },
      { slug: 'leadgenerering-strategier-2026', date: '2026-06-15' },
      { slug: 'hvad-er-bant-2026', date: '2026-06-20' },
      { slug: 'vaekst-partner-guide', date: '2026-06-23' },
      { slug: 'startup-til-vaekst-2026', date: '2026-06-26' },
    ],
  },
  {
    id: 'webudvikling',
    icon: <Globe size={22} />,
    color: 'from-indigo-700 to-indigo-900',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    slugs: [
      { slug: 'hvorfor-magnora-webudvikling', date: '2026-04-25' },
      { slug: 'hjemmeside-til-vaekst-2026', date: '2026-05-05' },
      { slug: 'websitekonvertering-tips', date: '2026-05-15' },
      { slug: 'saas-loesninger-2026', date: '2026-01-15' },
      { slug: 'hvorfor-saas-2026', date: '2026-04-01' },
      { slug: 'saas-vs-on-premise', date: '2026-04-05' },
      { slug: 'bedste-saas-tools-2026', date: '2026-04-10' },
      { slug: 'saas-integration-2026', date: '2026-04-15' },
      { slug: 'saas-security-gdpr', date: '2026-04-20' },
    ],
  },
  {
    id: 'ai',
    icon: <Cpu size={22} />,
    color: 'from-violet-700 to-violet-900',
    badgeColor: 'bg-violet-100 text-violet-700',
    slugs: [
      { slug: '100-bud-ai-opgaveloesning', date: '2026-07-26' },
      { slug: 'bliv-ai-konsulent-karriere', date: '2026-07-25' },
      { slug: 'bedste-ai-loesninger-smv', date: '2026-07-24' },
      { slug: 'ai-salg-moedebooking-fremtid', date: '2026-07-22' },
      { slug: 'hvorfor-ai-nu-2026', date: '2026-07-20' },
      { slug: 'ai-reception-telefonassistent', date: '2026-07-18' },
      { slug: 'generativ-ai-forretningsvaerdi', date: '2026-07-16' },
      { slug: 'ai-kundeservice-doegnet-rundt', date: '2026-07-15' },
      { slug: 'ai-sparer-tid-virksomhed', date: '2026-07-14' },
      { slug: 'ai-agenter-automatisering-2026', date: '2026-07-13' },
      { slug: 'fremtidens-ai-loesninger-2026', date: '2026-07-12' },
      { slug: 'hvorfor-magnora-ai-integration', date: '2026-05-01' },
      { slug: 'ai-automation-2026', date: '2026-02-01' },
      { slug: 'ai-integration-roi-2026', date: '2026-05-10' },
    ],
  },
];

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  const translatedCategories = t('blogPage.categories', { returnObjects: true }) as TranslatedCategory[];
  const faqItems = t('blogPage.faq', { returnObjects: true }) as FAQItem[];

  const categories: Category[] = categoryMeta.map((meta, i) => ({
    id: meta.id,
    icon: meta.icon,
    color: meta.color,
    badgeColor: meta.badgeColor,
    label: translatedCategories[i].label,
    posts: meta.slugs.map((s, j) => ({
      slug: s.slug,
      date: s.date,
      title: translatedCategories[i].posts[j].title,
      description: translatedCategories[i].posts[j].description,
    })),
  }));

  const PostCard = ({ post, badgeLabel, badgeColor }: { post: Post; badgeLabel: string; badgeColor: string }) => (
    <Link to={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>{badgeLabel}</span>
        <h3 className="text-lg font-bold mt-4 mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
          <span className="text-blue-600 font-medium flex items-center gap-1">Læs mere <ArrowRight size={14} /></span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <SEO
        title="Blog | Magnora Marketing – Indsigt om B2B Salg, Mødebooking og Vækst"
        description="Magnora Marketing's blog med praktiske guides, tips og trends inden for B2B salg, mødebooking, telemarketing, leadgenerering og digital vækst for erhvervsvirksomheder."
        canonical="/blog"
        keywords="Magnora Marketing blog, B2B salg tips, mødebooking guide, telemarketing artikler, salgsstrategi 2026"
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Magnora Marketing Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Praktisk viden og konkrete råd om B2B salg, mødebooking, webudvikling og AI-integration.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="py-16 odd:bg-white even:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${cat.color} text-white px-5 py-2.5 rounded-full mb-8`}>
              {cat.icon}
              <h2 className="text-lg font-bold">{cat.label}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.posts.map((post, i) => (
                <PostCard key={i} post={post} badgeLabel={cat.label} badgeColor={cat.badgeColor} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <FAQSection faqs={t('blogPage.faq', { returnObjects: true }) as { question: string; answer: string }[]} />
      <CTASection
        title={t('blogPage.cta.title')}
        subtitle={t('blogPage.cta.subtitle')}
        primaryText={t('blogPage.cta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('blogPage.cta.secondaryText')}
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default BlogPage;
