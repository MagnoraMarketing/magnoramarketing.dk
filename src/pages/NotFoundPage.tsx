import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('notFound.seoTitle')} description={t('notFound.seoDescription')} noindex />
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-blue-600 font-semibold mb-2">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('notFound.title')}</h1>
          <p className="text-lg text-gray-600 mb-8">{t('notFound.message')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              {t('notFound.home')}
            </Link>
            <Link to="/blog" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              {t('notFound.blog')}
            </Link>
            <Link to="/kontakt" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              {t('notFound.contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
