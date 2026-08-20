import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Briefcase, CalendarCheck, Code, Sparkles, MessageSquare, Loader2, Paperclip, X } from 'lucide-react';
import { jobListings } from '../data/jobListings';

const WEB3FORMS_ACCESS_KEY = 'd8d905cb-7893-4172-85f2-bcc211e5bb97';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB – Web3Forms' attachment limit

export const FORM_TOPICS = [
  { value: 'Job henvendelse', label: 'Job henvendelse', icon: Briefcase },
  { value: 'Pris på Mødebooking / Telesalg', label: 'Mødebooking / Telesalg', icon: CalendarCheck },
  { value: 'Webudvikling', label: 'Webudvikling', icon: Code },
  { value: 'AI-løsninger', label: 'AI-løsninger', icon: Sparkles },
  { value: 'Andet', label: 'Andet', icon: MessageSquare },
] as const;

export type FormTopic = (typeof FORM_TOPICS)[number]['value'];

/** Per-topic copy so the message field and upload prompt match what the visitor picked. */
const TOPIC_CONTENT: Record<FormTopic, { messageLabel: string; messagePlaceholder: string; fileLabel: string; fileHint: string }> = {
  'Job henvendelse': {
    messageLabel: 'Om dig',
    messagePlaceholder: 'Fortæl kort om dig selv, din erfaring og hvilken stilling der har din interesse…',
    fileLabel: 'CV / ansøgning (valgfrit)',
    fileHint: 'Upload dit CV eller en kort ansøgning, så får vi et bedre indtryk af dig. PDF, Word eller billede – maks. 5 MB.',
  },
  'Pris på Mødebooking / Telesalg': {
    messageLabel: 'Besked',
    messagePlaceholder: 'Fortæl kort om din virksomhed, hvem I gerne vil i kontakt med, og hvad I gerne vil opnå…',
    fileLabel: 'Opgavebeskrivelse / brief (valgfrit)',
    fileHint: 'Har du en brief, målgruppebeskrivelse eller andet materiale, må du gerne vedhæfte det. Maks. 5 MB.',
  },
  Webudvikling: {
    messageLabel: 'Besked',
    messagePlaceholder: 'Beskriv opgaven: hvilken type hjemmeside/webshop, ønskede funktioner og tidshorisont…',
    fileLabel: 'Opgavebeskrivelse (valgfrit)',
    fileHint: 'Upload en opgavebeskrivelse, wireframe eller inspiration, hvis du har det. Maks. 5 MB.',
  },
  'AI-løsninger': {
    messageLabel: 'Besked',
    messagePlaceholder: 'Beskriv opgaven eller formålet: hvilken proces skal automatiseres, og hvad skal AI-løsningen kunne løse for jer?',
    fileLabel: 'Opgavebeskrivelse (valgfrit)',
    fileHint: 'Upload gerne en opgavebeskrivelse eller kravspecifikation. Maks. 5 MB.',
  },
  Andet: {
    messageLabel: 'Besked',
    messagePlaceholder: 'Fortæl os, hvad din henvendelse handler om…',
    fileLabel: 'Vedhæft dokument (valgfrit)',
    fileHint: 'Har du et relevant dokument, må du gerne vedhæfte det her. Maks. 5 MB.',
  },
};

interface ContactFormProps {
  /** Pre-selected topic. When set, the topic selector is hidden and the form is scoped to this topic. */
  presetTopic?: FormTopic;
  /** Extra context appended to the email subject, e.g. the page the form was submitted from. */
  sourceLabel?: string;
  /** Renders a smaller, low-key version of the form for placement inside content pages. */
  compact?: boolean;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors';

const fileInputClass =
  'w-full border border-dashed border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-600 bg-slate-50 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-xs file:font-semibold hover:file:bg-blue-700 file:cursor-pointer cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40';

const ContactForm: React.FC<ContactFormProps> = ({ presetTopic, sourceLabel, compact }) => {
  const [topic, setTopic] = useState<FormTopic>(presetTopic ?? 'Pris på Mødebooking / Telesalg');
  const [status, setStatus] = useState<Status>('idle');
  const [fileError, setFileError] = useState('');
  const [fileName, setFileName] = useState('');

  const isJob = topic === 'Job henvendelse';
  const content = TOPIC_CONTENT[topic];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName('');
      setFileError('');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError('Filen er for stor – maks. 5 MB. Vælg en mindre fil, eller nævn den i din besked.');
      e.target.value = '';
      setFileName('');
      return;
    }
    setFileError('');
    setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = new FormData(form);

    // Honeypot: bots fill the hidden field; silently drop those submissions.
    if (raw.get('botcheck')) return;

    const file = raw.get('cv_file');
    if (file instanceof File && file.size > MAX_FILE_SIZE) {
      setFileError('Filen er for stor – maks. 5 MB. Vælg en mindre fil, eller nævn den i din besked.');
      return;
    }

    setStatus('sending');

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `Ny henvendelse: ${topic} – fra ${raw.get('name')}${sourceLabel ? ` (${sourceLabel})` : ''}`);
    payload.append('from_name', 'magnoramarketing.dk');
    payload.append('Type henvendelse', topic);
    payload.append('Navn', String(raw.get('name') || ''));
    payload.append('E-mail', String(raw.get('email') || ''));
    payload.append('Telefon', String(raw.get('phone') || '—'));
    payload.append('Virksomhed', String(raw.get('company') || '—'));
    if (isJob) {
      payload.append('Ønsket stilling', String(raw.get('job_title') || 'Ikke angivet'));
    }
    payload.append('Besked', String(raw.get('message') || ''));
    if (sourceLabel) payload.append('Sendt fra side', sourceLabel);
    if (file instanceof File && file.size > 0) {
      payload.append('attachment', file);
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
        setFileName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-white rounded-2xl border border-green-100 shadow-sm text-center ${compact ? 'p-6' : 'p-10'}`}>
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
    <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-5'}>
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
        {isJob ? (
          <div>
            <label htmlFor="cf-job-title" className="block text-sm font-semibold text-slate-700 mb-1.5">Hvilken stilling har din interesse?</label>
            <select id="cf-job-title" name="job_title" defaultValue="" className={inputClass}>
              <option value="">Vælg stilling (valgfrit)</option>
              {jobListings.map((job) => (
                <option key={job.path} value={job.title}>{job.title}</option>
              ))}
              <option value="Anden stilling / ved ikke endnu">Anden stilling / ved ikke endnu</option>
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor="cf-company" className="block text-sm font-semibold text-slate-700 mb-1.5">Virksomhed *</label>
            <input id="cf-company" name="company" type="text" required placeholder="Din virksomhed" className={inputClass} />
          </div>
        )}
      </div>

      {isJob && (
        <div>
          <label htmlFor="cf-company-job" className="block text-sm font-semibold text-slate-700 mb-1.5">Virksomhed</label>
          <input id="cf-company-job" name="company" type="text" placeholder="Valgfrit" className={inputClass} />
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-slate-700 mb-1.5">{content.messageLabel} *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={compact ? 4 : 5}
          placeholder={content.messagePlaceholder}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-file" className="block text-sm font-semibold text-slate-700 mb-1.5">{content.fileLabel}</label>
        <div className="relative">
          <input
            id="cf-file"
            name="cv_file"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className={fileInputClass}
          />
        </div>
        {fileName && !fileError && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
            <Paperclip size={12} /> {fileName}
          </p>
        )}
        {fileError ? (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600"><X size={12} /> {fileError}</p>
        ) : (
          <p className="mt-1.5 text-xs text-slate-400">{content.fileHint}</p>
        )}
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

      {!compact && (
        <p className="text-xs text-slate-400">
          Vi behandler dine oplysninger fortroligt og i overensstemmelse med GDPR. Du hører fra os inden for én hverdag.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
