import React from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, CheckCircle2, ExternalLink, MousePointerClick } from 'lucide-react';
import { BOOKING_ANCHOR, BOOKING_URLS, BookingKind } from '../data/booking';

/** Embedded Cal.com calendar in a gradient frame, with a link to open it in a new window. */
const BookingCalendar: React.FC<{ kind: BookingKind }> = ({ kind }) => {
  const { t } = useTranslation();
  const url = BOOKING_URLS[kind];
  return (
    <div id={BOOKING_ANCHOR} className="scroll-mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1.5 shadow-xl shadow-indigo-900/20">
      <div className="px-5 pb-5 pt-6 text-center text-white md:px-8">
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><CalendarDays size={24} /></span>
        <h3 className="text-2xl font-bold text-white">{t(`booking.${kind}.heading`)}</h3>
        <p className="mx-auto mt-2 max-w-xl text-blue-50">{t(`booking.${kind}.text`)}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5"><CheckCircle2 size={13} /> {t('booking.free')}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5"><MousePointerClick size={13} /> {t('booking.pickTime')}</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-[1.25rem] bg-white">
        <iframe
          src={`${url}/embed?layout=month_view&theme=light`}
          title={t(`booking.${kind}.iframeTitle`)}
          loading="lazy"
          className="block h-[720px] w-full border-0 md:h-[640px]"
        />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white/90 hover:text-white">
        {t('booking.openNewWindow')} <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default BookingCalendar;
