import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, PiggyBank, Award, Users, CheckCircle, ArrowRight, Home, Star } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { jobListings } from '../data/jobListings';

interface BenefitItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FreelancersPage: React.FC = () => {
  const { t } = useTranslation();

  const benefitIcons = [
    <Clock size={40} className="text-blue-600" />,
    <PiggyBank size={40} className="text-blue-600" />,
    <Users size={40} className="text-blue-600" />,
    <Award size={40} className="text-blue-600" />,
  ];
  const benefits = t('freelancers.benefits.items', { returnObjects: true }) as BenefitItem[];

  const workFromHomeIcons = [
    <Home className="w-12 h-12 text-blue-600" />,
    <Clock className="w-12 h-12 text-blue-600" />,
    <PiggyBank className="w-12 h-12 text-blue-600" />,
  ];
  const workFromHomeBenefits = t('freelancers.workFromHome.benefits', { returnObjects: true }) as BenefitItem[];
  const checklist = t('freelancers.workFromHome.checklist', { returnObjects: true }) as string[];

  const infoList = t('freelancers.info.section1.list', { returnObjects: true }) as string[];
  const faqItems = t('freelancers.faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <>
      <SEO
        title={t('freelancers.seo.title')}
        description={t('freelancers.seo.description')}
        canonical="/freelance-telemarketing"
        keywords={t('freelancers.seo.keywords')}
      />

      <HeroSection
        title={t('freelancers.hero.title')}
        subtitle={t('freelancers.hero.subtitle')}
        ctaText={t('freelancers.hero.cta')}
        ctaLink="#stillinger"
        secondaryCtaText={t('freelancers.hero.secondaryCta')}
        secondaryCtaLink="/kontakt"
        backgroundImage="/heroes/hero-jobs.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('freelancers.benefits.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('freelancers.benefits.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{benefitIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('freelancers.workFromHome.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('freelancers.workFromHome.intro')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {workFromHomeBenefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="flex justify-center mb-3">{workFromHomeIcons[index]}</div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/heroes/hero-jobs.jpg"
                alt={t('freelancers.workFromHome.imageAlt')}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="stillinger" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('freelancers.jobs.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('freelancers.jobs.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <Link key={index} to={job.path} className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <Star className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">{t('freelancers.jobs.badge')}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                <span className="text-blue-600 font-medium text-sm inline-flex items-center">
                  {t('freelancers.jobs.readMore')} <ArrowRight size={14} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('freelancers.midCta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('freelancers.midCta.subtitle')}
          </p>
          <Link to="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('freelancers.midCta.cta')} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('freelancers.info.section1.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('freelancers.info.section1.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('freelancers.info.section1.p2')}
            </p>
            <ul className="space-y-2">
              {infoList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><span className="text-blue-600 font-bold mt-1">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('freelancers.info.section2.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('freelancers.info.section2.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('freelancers.info.section2.p2')}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqItems} />
      <CTASection
        title={t('freelancers.finalCta.title')}
        subtitle={t('freelancers.finalCta.subtitle')}
        primaryText={t('freelancers.finalCta.primaryText')}
        primaryLink="/kontakt"
        secondaryText={t('freelancers.finalCta.secondaryText')}
        secondaryLink="/jobs/arbejd-hjemmefra"
      />
    </>
  );
};

export default FreelancersPage;
