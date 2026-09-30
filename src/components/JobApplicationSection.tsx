import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { jobListings } from '../data/jobListings';

/** Application form (with CV upload) shown on every job page. */
const JobApplicationSection: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const job = jobListings.find(j => j.path === pathname);
  return (
    <section id="ansoeg" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{t('contactForm.jobApplication.heading')}</h2>
          <p className="text-slate-600">{t('contactForm.jobApplication.text')}</p>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
          <ContactForm presetTopic="Job henvendelse" sourceLabel={`Jobside: ${job?.title ?? pathname}`} />
        </div>
      </div>
    </section>
  );
};

export default JobApplicationSection;
