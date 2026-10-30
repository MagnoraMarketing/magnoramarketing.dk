// Cal.com events for booking a call. "job" is for job seekers (job pages only),
// "business" for companies interested in a collaboration.
export type BookingKind = 'job' | 'business';

/** Cal.com "calLink" (user/event) for the inline embed. */
export const CAL_LINKS: Record<BookingKind, string> = {
  job: 'magnora-marketing-30zqdm/book-møde-omkring-job-magnoramarketing.dk',
  business: 'magnora-marketing-30zqdm/book-møde-magnoramarketing.dk',
};

/** Public booking page, for the "open in a new window" link and pages without the embed. */
export const BOOKING_URLS: Record<BookingKind, string> = {
  job: `https://cal.com/${encodeURI(CAL_LINKS.job)}`,
  business: `https://cal.com/${encodeURI(CAL_LINKS.business)}`,
};

/** Anchor of the embedded calendar (BookingCalendar), used by BookingCta to scroll to it. */
export const BOOKING_ANCHOR = 'book-moede';
