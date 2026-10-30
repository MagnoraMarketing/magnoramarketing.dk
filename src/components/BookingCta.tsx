import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { BOOKING_ANCHOR, BOOKING_URLS, BookingKind } from '../data/booking';

interface BookingCtaProps {
  kind: BookingKind;
  /** True on pages with the embedded BookingCalendar: scroll down to it instead of leaving the site. */
  inPage?: boolean;
}

/** Banner inviting visitors to book a call – job pages ("job") or collaboration pages ("business"). */
const BookingCta: React.FC<BookingCtaProps> = ({ kind, inPage = true }) => {
  const { t } = useTranslation();
  const linkProps = inPage ? { href: `#${BOOKING_ANCHOR}` } : { href: BOOKING_URLS[kind], target: '_blank', rel: 'noopener noreferrer' };
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-7 text-white shadow-xl shadow-indigo-900/20 md:flex-row md:items-center md:p-9">
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15"><CalendarDays size={28} /></span>
          <div className="flex-1">
            <h2 className="text-xl font-bold leading-snug text-white md:text-2xl">{t(`booking.${kind}.cta.heading`)}</h2>
            <p className="mt-2 text-blue-50">{t(`booking.${kind}.cta.text`)}</p>
          </div>
          <a
            {...linkProps}
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-4 font-extrabold text-indigo-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t('booking.button')} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCta;
