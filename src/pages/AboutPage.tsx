import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Award, CheckCircle, ArrowRight, Building, Globe, CalendarCheck, Phone, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

interface ValueItem {
  title: string;
  description: string;
}

interface DeliverableItem {
  title: string;
  description: string;
}

interface IndustryItem {
  name: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const valueIcons = [
    <Users className="w-12 h-12 text-blue-600" />,
    <Award className="w-12 h-12 text-blue-600" />,
    <CheckCircle className="w-12 h-12 text-blue-600" />,
  ];
  const values = (t('about.values.items', { returnObjects: true }) as ValueItem[]).map((value, index) => ({
    ...value,
    icon: valueIcons[index],
  }));

  const deliverableIcons = [
    <Globe className="w-12 h-12 text-blue-600" />,
    <CalendarCheck className="w-12 h-12 text-blue-600" />,
    <Phone className="w-12 h-12 text-blue-600" />,
    <Sparkles className="w-12 h-12 text-blue-600" />,
  ];
  const deliverableLinks = ['/digital/hjemmesider', '/modebooking-priser', '/ydelser', '/digital/ai-integration'];
  const deliverables = (t('about.deliverables.items', { returnObjects: true }) as DeliverableItem[]).map((item, index) => ({
    ...item,
    icon: deliverableIcons[index],
    link: deliverableLinks[index],
  }));

  const industries = t('about.industriesSection.items', { returnObjects: true }) as IndustryItem[];
  const faqs = t('about.faqs', { returnObjects: true }) as FaqItem[];
  const info1List = t('about.info1.list', { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t('about.seo.title')}
        description={t('about.seo.description')}
        canonical="/om-os"
        keywords={t('about.seo.keywords')}
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="section-label">{t('about.deliverables.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.deliverables.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('about.deliverables.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <span className="inline-flex items-center text-blue-600 font-semibold mt-5">
                  {t('about.deliverables.readMore')} <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.story.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.story.p2')}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.story.p3')}
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt={t('about.story.imageAlt')}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.values.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('about.values.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{t('about.approach.title')}</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4">
                  {t('about.approach.p1')}
                </p>
                <p className="text-gray-600 mb-4">
                  {t('about.approach.p2')}
                </p>
                <p className="text-gray-600 mb-4">
                  {t('about.approach.p3')}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.industriesSection.title')}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('about.industriesSection.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('about.ctaBanner.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('about.ctaBanner.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('about.ctaBanner.buttonText')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('about.info1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('about.info1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('about.info1.p2')}
            </p>
            <ul className="space-y-2">
              {info1List.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('about.info2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('about.info2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('about.info2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection
        title={t('about.finalCta.title')}
        subtitle={t('about.finalCta.subtitle')}
        primaryText={t('about.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('about.finalCta.secondaryText')}
        secondaryLink="/ydelser"
      />
    </>
  );
};

export default AboutPage;
