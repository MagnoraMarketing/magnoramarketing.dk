// Cal.com events for booking a call. "job" is for job seekers (job pages only),
// "business" for companies interested in a collaboration.
export type BookingKind = 'job' | 'business';

export const BOOKING_URLS: Record<BookingKind, string> = {
  job: 'https://cal.com/magnora-marketing-30zqdm/book-m%C3%B8de-omkring-job-magnoramarketing.dk',
  business: 'https://cal.com/magnora-marketing-30zqdm/book-m%C3%B8de-magnoramarketing.dk',
};

/** Anchor of the embedded calendar (BookingCalendar), used by BookingCta to scroll to it. */
export const BOOKING_ANCHOR = 'book-moede';
