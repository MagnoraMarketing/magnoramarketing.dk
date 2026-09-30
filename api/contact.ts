// Vercel Function: POST /api/contact
//
// Receives the contact form (multipart/form-data, optional file in "attachment")
// and emails it to the company inbox via Resend, with the file as a real
// attachment. Required Vercel env var: RESEND_API_KEY. Optional: CONTACT_TO
// (default mail@magnoramarketing.dk) and CONTACT_FROM (default Resend's
// onboarding sender, which may only deliver to the Resend account's own
// address until magnoramarketing.dk is verified as a domain in Resend).
//
// When RESEND_API_KEY is missing the function answers 503 and the browser falls
// back to Web3Forms, so the form keeps working before the key is configured.

declare const process: { env: Record<string, string | undefined> };
declare const Buffer: { from(data: ArrayBuffer): { toString(encoding: 'base64'): string } };

// Vercel rejects request bodies above 4.5 MB, so files are capped at 4 MB.
const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'odt', 'rtf', 'txt', 'png', 'jpg', 'jpeg'];
const FIELDS: Array<[string, string]> = [
  ['topic', 'Emne'],
  ['name', 'Navn'],
  ['email', 'E-mail'],
  ['phone', 'Telefon'],
  ['company', 'Virksomhed'],
  ['source', 'Sendt fra side'],
  ['attachment_type', 'Vedhæftet fil'],
  ['message', 'Besked'],
];

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const str = (v: FormDataEntryValue | null, max = 5000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return json(503, { success: false, reason: 'not_configured' });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { success: false, reason: 'bad_request' });
  }

  // Honeypot: bots fill the hidden field. Pretend success so they move on.
  if (str(form.get('botcheck'))) return json(200, { success: true });

  const values: Record<string, string> = {};
  for (const [key] of FIELDS) values[key] = str(form.get(key), key === 'message' ? 10000 : 300);
  if (!values.name || !values.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return json(400, { success: false, reason: 'missing_fields' });
  }

  const attachments: Array<{ filename: string; content: string }> = [];
  const file = form.get('attachment');
  if (file && typeof file !== 'string' && file.size > 0) {
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED_EXTENSIONS.includes(ext)) return json(400, { success: false, reason: 'file_type' });
    if (file.size > MAX_FILE_SIZE) return json(413, { success: false, reason: 'file_size' });
    const filename = file.name.replace(/[^\w.\- ()æøåÆØÅ]/g, '_').slice(0, 120) || `vedhaeftning.${ext}`;
    attachments.push({ filename, content: Buffer.from(await file.arrayBuffer()).toString('base64') });
    values.attachment_type = `${values.attachment_type || 'Fil'}: ${filename}`;
  } else {
    values.attachment_type = '';
  }

  const rows = FIELDS.filter(([key]) => values[key]).map(([key, label]) => [label, values[key]]);
  const html =
    `<h2 style="font-family:sans-serif">Ny henvendelse fra magnoramarketing.dk</h2>` +
    `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">` +
    rows
      .map(([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;font-weight:bold">${escapeHtml(label)}</td>` +
        `<td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
      .join('') +
    `</table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Magnora Marketing <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO || 'mail@magnoramarketing.dk'],
      reply_to: values.email,
      subject: `${values.topic || 'Henvendelse'} – ${values.name}${values.source ? ` (${values.source})` : ''}`,
      html,
      text,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text().catch(() => ''));
    return json(502, { success: false, reason: 'send_failed' });
  }
  return json(200, { success: true });
}
