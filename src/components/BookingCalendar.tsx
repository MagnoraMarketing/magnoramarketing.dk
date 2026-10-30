import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarDays, CheckCircle2, ExternalLink, Loader2, MousePointerClick } from 'lucide-react';
import { BOOKING_ANCHOR, BOOKING_URLS, BookingKind, CAL_LINKS } from '../data/booking';

const BRAND = '#4f46e5'; // indigo-600

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
      // Match the site: indigo brand colour, no Cal.com event details (our own header explains it).
      Cal.ns[kind]('ui', {
        theme: 'light',
        hideEventTypeDetails: true,
        layout: 'month_view',
        styles: { branding: { brandColor: BRAND } },
        cssVarsPerTheme: { light: { 'cal-brand': BRAND, 'cal-brand-emphasis': '#4338ca', 'cal-brand-text': '#ffffff' } },
      });
    };
    if (!('IntersectionObserver' in window)) return mount();
    const io = new IntersectionObserver(entries => entries.some(e => e.isIntersecting) && (mount(), io.disconnect()), { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, [kind, elementId]);

  return (
    <div id={BOOKING_ANCHOR} className="scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-indigo-950/10 ring-1 ring-slate-200/70">
      {/* Header in the site's dark navy style */}
      <div className="surface-dark flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15"><CalendarDays size={22} /></span>
          <div>
            <h3 className="text-xl font-bold text-white">{t(`booking.${kind}.heading`)}</h3>
            <p className="mt-1 max-w-lg text-sm text-blue-100/90">{t(`booking.${kind}.text`)}</p>
          </div>
        </div>
        <ul className="flex flex-shrink-0 flex-wrap gap-2 text-xs font-semibold md:flex-col">
          <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10"><CheckCircle2 size={13} className="text-emerald-300" /> {t('booking.free')}</li>
          <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10"><MousePointerClick size={13} className="text-blue-200" /> {t('booking.pickTime')}</li>
        </ul>
      </div>

      {/* Calendar: Cal.com renders over the loading hint once it is ready */}
      <div className="relative min-h-[520px] p-2 md:p-4">
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-slate-400">
          <Loader2 size={16} className="animate-spin" /> {t('booking.loading')}
        </div>
        <div ref={inlineRef} id={elementId} role="region" aria-label={t(`booking.${kind}.iframeTitle`)} className="relative z-10 w-full" />
      </div>

      <div className="flex justify-center border-t border-slate-100 bg-slate-50/70 px-6 py-3">
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
          {t('booking.openNewWindow')} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default BookingCalendar;
