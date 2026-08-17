import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Briefcase, CalendarCheck, Code, Sparkles, MessageSquare, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = 'd8d905cb-7893-4172-85f2-bcc211e5bb97';

export const FORM_TOPICS = [
  { value: 'Job henvendelse', label: 'Job henvendelse', icon: Briefcase },
  { value: 'Pris på Mødebooking / Telesalg', label: 'Mødebooking / Telesalg', icon: CalendarCheck },
  { value: 'Webudvikling', label: 'Webudvikling', icon: Code },
  { value: 'AI-løsninger', label: 'AI-løsninger', icon: Sparkles },
  { value: 'Andet', label: 'Andet', icon: MessageSquare },
] as const;

export type FormTopic = (typeof FORM_TOPICS)[number]['value'];

interface ContactFormProps {
  /** Pre-selected topic. When set, the topic selector is hidden and the form is scoped to this topic. */
  presetTopic?: FormTopic;
  /** Extra context appended to the email subject, e.g. the page the form was submitted from. */
  sourceLabel?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors';

const ContactForm: React.FC<ContactFormProps> = ({ presetTopic, sourceLabel }) => {
  const [topic, setTopic] = useState<FormTopic>(presetTopic ?? 'Pris på Mødebooking / Telesalg');
  const [status, setStatus] = useState<Status>('idle');

  const isJob = topic === 'Job henvendelse';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill the hidden field; silently drop those submissions.
    if (data.get('botcheck')) return;

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${topic} – ${data.get('name')}${sourceLabel ? ` (${sourceLabel})` : ''}`,
          from_name: 'magnoramarketing.dk',
          'Emne': topic,
          'Navn': data.get('name'),
          'E-mail': data.get('email'),
          'Telefon': data.get('phone') || '—',
          'Virksomhed': data.get('company') || '—',
          'Besked': data.get('message'),
          ...(sourceLabel ? { 'Sendt fra side': sourceLabel } : {}),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Tak for din henvendelse!</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
          Vi har modtaget din besked og vender tilbage inden for én hverdag på den e-mail, du har oplyst.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
        >
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot – hidden from humans */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* Topic selector (hidden when preset) */}
      {!presetTopic && (
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2.5">Hvad drejer din henvendelse sig om? *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FORM_TOPICS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTopic(value)}
                aria-pressed={topic === value}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${
                  topic === value
                    ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} className={topic === value ? 'text-blue-600' : 'text-slate-400'} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Navn *</label>
          <input id="cf-name" name="name" type="text" required placeholder="Dit fulde navn" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-slate-700 mb-1.5">E-mail *</label>
          <input id="cf-email" name="email" type="email" required placeholder="din@email.dk" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Telefon</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="+45 12 34 56 78" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Virksomhed{isJob ? '' : ' *'}
          </label>
          <input id="cf-company" name="company" type="text" required={!isJob} placeholder={isJob ? 'Valgfrit' : 'Din virksomhed'} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Besked *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={
            isJob
              ? 'Fortæl kort om dig selv, din erfaring og hvilken type opgaver du søger…'
              : 'Fortæl kort om din virksomhed, dine behov og hvad du gerne vil opnå…'
          }
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>Noget gik galt – din besked blev ikke sendt. Prøv igen, eller skriv direkte til <a href="mailto:mail@magnoramarketing.dk" className="underline font-semibold">mail@magnoramarketing.dk</a>.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 size={16} className="animate-spin" /> Sender…</>
        ) : (
          <>Send henvendelse <Send size={16} /></>
        )}
      </button>

      <p className="text-xs text-slate-400">
        Vi behandler dine oplysninger fortroligt og i overensstemmelse med GDPR. Du hører fra os inden for én hverdag.
      </p>
    </form>
  );
};

export default ContactForm;
