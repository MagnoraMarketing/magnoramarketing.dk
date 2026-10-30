import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarDays, CheckCircle2, ExternalLink, MousePointerClick } from 'lucide-react';
import ContactForm from './ContactForm';
import { jobListings } from '../data/jobListings';

// Cal.com event for a short call about the job (team: Magnora Marketing).
const CAL_LINK = 'magnora-marketing-30zqdm/book-m%C3%B8de-omkring-job-magnoramarketing.dk';
const CAL_URL = `https://cal.com/${CAL_LINK}`;

/** Application form (with CV upload) and a booking calendar, shown on every job page. */
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
          <ContactForm presetTopic="Job henvendelse" sourceLabel={`Jobside: ${job ? t(`jobListings.${job.key}.title`, { lng: 'da' }) : pathname}`} />
        </div>

        {/* Booking calendar: for candidates who would rather talk first */}
        <div id="book-moede" className="mt-14 scroll-mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1.5 shadow-xl shadow-indigo-900/20">
          <div className="px-5 pb-5 pt-6 text-center text-white md:px-8">
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><CalendarDays size={24} /></span>
            <h3 className="text-2xl font-bold text-white">{t('contactForm.jobApplication.calendar.heading')}</h3>
            <p className="mx-auto mt-2 max-w-xl text-blue-50">{t('contactForm.jobApplication.calendar.text')}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5"><CheckCircle2 size={13} /> {t('contactForm.jobApplication.calendar.free')}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5"><MousePointerClick size={13} /> {t('contactForm.jobApplication.calendar.pickTime')}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] bg-white">
            <iframe
              src={`${CAL_URL}/embed?layout=month_view&theme=light`}
              title={t('contactForm.jobApplication.calendar.iframeTitle')}
              loading="lazy"
              className="block h-[720px] w-full border-0 md:h-[640px]"
            />
          </div>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white/90 hover:text-white"
          >
            {t('contactForm.jobApplication.calendar.openNewWindow')} <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobApplicationSection;
