import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, CheckCircle2, ExternalLink, MousePointerClick } from 'lucide-react';
import { BOOKING_ANCHOR, BOOKING_URLS, BookingKind, CAL_LINKS } from '../data/booking';

/* eslint-disable @typescript-eslint/no-explicit-any */
type CalApi = ((...args: unknown[]) => void) & { ns: Record<string, (...args: unknown[]) => void>; q?: unknown[]; loaded?: boolean };

/**
 * Cal.com's official loader snippet: defines window.Cal as a queue and loads
 * embed.js once. A plain iframe of the /embed page stays blank, because the page
 * waits for embed.js on the host page before it shows the calendar.
 */
function loadCal(): CalApi {
  const w = window as any;
  if (!w.Cal) {
    const push = (api: any, args: unknown) => api.q.push(args);
    w.Cal = function (...args: unknown[]) {
      const cal = w.Cal;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        document.head.appendChild(document.createElement('script')).src = 'https://app.cal.com/embed/embed.js';
        cal.loaded = true;
      }
      if (args[0] === 'init') {
        const api: any = function (...a: unknown[]) { push(api, a); };
        const namespace = args[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          push(cal.ns[namespace], args);
          push(cal, ['initNamespace', namespace]);
        } else push(cal, args);
        return;
      }
      push(cal, args);
    };
  }
  return w.Cal as CalApi;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Inline Cal.com calendar (official embed.js) in a gradient frame, with a link to open it in a new window. */
const BookingCalendar: React.FC<{ kind: BookingKind }> = ({ kind }) => {
  const { t } = useTranslation();
  const url = BOOKING_URLS[kind];
  const inlineRef = useRef<HTMLDivElement>(null);
  const elementId = `cal-inline-${kind}`;

  // Mount the inline calendar once the frame scrolls near the viewport.
  useEffect(() => {
    const el = inlineRef.current;
    if (!el) return;
    let done = false;
    const mount = () => {
      if (done || el.childElementCount > 0) return;
      done = true;
      const Cal = loadCal();
      Cal('init', kind, { origin: 'https://cal.com' });
      Cal.ns[kind]('inline', { elementOrSelector: `#${elementId}`, calLink: CAL_LINKS[kind], config: { layout: 'month_view', theme: 'light' } });
      Cal.ns[kind]('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' });
    };
    if (!('IntersectionObserver' in window)) return mount();
    const io = new IntersectionObserver(entries => entries.some(e => e.isIntersecting) && (mount(), io.disconnect()), { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, [kind, elementId]);

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
        <div ref={inlineRef} id={elementId} role="region" aria-label={t(`booking.${kind}.iframeTitle`)} className="min-h-[640px] w-full overflow-auto" />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-white/90 hover:text-white">
        {t('booking.openNewWindow')} <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default BookingCalendar;
