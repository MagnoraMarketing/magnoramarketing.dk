// Sends a short enquiry or lead (price calculator, job matcher) to
// mail@magnoramarketing.dk via our own /api/contact, falling back to Web3Forms
// the same way the contact form does when the endpoint is unavailable.
import { WEB3FORMS_ACCESS_KEY } from '../components/ContactForm';

export interface Enquiry {
  /** "lead" lets /api/contact accept company + phone without name/e-mail. */
  kind?: 'lead';
  topic: string;
  subject: string;
  name?: string;
  email?: string;
  company?: string;
  phone: string;
  source: string;
  message: string;
}

export async function sendEnquiry({ subject, ...fields }: Enquiry): Promise<boolean> {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => v && body.append(k, v));
  const viaApi = await fetch('/api/contact', { method: 'POST', headers: { Accept: 'application/json' }, body })
    .then(async res => res.ok && Boolean((await res.json().catch(() => ({}))).success))
    .catch(() => false);
  if (viaApi) return true;
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: 'magnoramarketing.dk',
      'Emne': fields.topic,
      'Navn': fields.name || '—',
      'E-mail': fields.email || '—',
      'Virksomhed': fields.company || '—',
      'Telefon': fields.phone,
      'Sendt fra side': fields.source,
      'Besked': fields.message,
    }),
  });
  return Boolean((await res.json()).success);
}
