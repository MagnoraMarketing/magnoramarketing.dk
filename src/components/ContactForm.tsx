import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle, Briefcase, CalendarCheck, Code, Sparkles, MessageSquare, Loader2, Paperclip, X } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = 'd8d905cb-7893-4172-85f2-bcc211e5bb97';

// Optional CV / project-description upload, sent to Web3Forms as a multipart
// attachment. Attachments need a Web3Forms Pro plan; if Web3Forms rejects the
// file, the enquiry is re-sent without it so no lead is ever lost.
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'odt', 'rtf', 'txt', 'png', 'jpg', 'jpeg'];
const FILE_ACCEPT = ALLOWED_EXTENSIONS.map(ext => `.${ext}`).join(',');

const validateFile = (file: File): 'tooLarge' | 'wrongType' | null => {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (!ALLOWED_EXTENSIONS.includes(ext)) return 'wrongType';
  if (file.size > MAX_FILE_SIZE) return 'tooLarge';
  return null;
};

export const FORM_TOPICS = [
  { value: 'Job henvendelse', labelKey: 'contactForm.topics.job', icon: Briefcase },
  { value: 'Pris på Mødebooking / Telesalg', labelKey: 'contactForm.topics.meetingBooking', icon: CalendarCheck },
  { value: 'Webudvikling', labelKey: 'contactForm.topics.webDevelopment', icon: Code },
  { value: 'AI-løsninger', labelKey: 'contactForm.topics.aiSolutions', icon: Sparkles },
  { value: 'Andet', labelKey: 'contactForm.topics.other', icon: MessageSquare },
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
  const { t } = useTranslation();
  const [topic, setTopic] = useState<FormTopic>(presetTopic ?? 'Pris på Mødebooking / Telesalg');
  const [status, setStatus] = useState<Status>('idle');
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState<'tooLarge' | 'wrongType' | null>(null);
  const [fileNotAttached, setFileNotAttached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isJob = topic === 'Job henvendelse';

  const clearFile = () => {
    if (fileInputRef.current) fileInputRef.current.value = '';
    setFileName('');
    setFileError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return clearFile();
    const problem = validateFile(file);
    if (problem) {
      e.target.value = '';
      setFileName('');
      setFileError(problem);
      return;
    }
    setFileError(null);
    setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill the hidden field; silently drop those submissions.
    if (data.get('botcheck')) return;

    const file = data.get('attachment');
    const hasFile = file instanceof File && file.size > 0;
    if (hasFile && validateFile(file)) return;

    const fields: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `${topic} – ${data.get('name')}${sourceLabel ? ` (${sourceLabel})` : ''}`,
      from_name: 'magnoramarketing.dk',
      'Emne': topic,
      'Navn': String(data.get('name') ?? ''),
      'E-mail': String(data.get('email') ?? ''),
      'Telefon': String(data.get('phone') || '—'),
      'Virksomhed': String(data.get('company') || '—'),
      'Besked': String(data.get('message') ?? ''),
      ...(sourceLabel ? { 'Sendt fra side': sourceLabel } : {}),
    };

    const sendJson = async (body: Record<string, string>) => {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      return Boolean((await res.json()).success);
    };

    const sendWithFile = async (attachment: File) => {
      const body = new FormData();
      Object.entries(fields).forEach(([k, v]) => body.append(k, v));
      body.append('attachment', attachment, attachment.name);
      // No Content-Type header: the browser sets the multipart boundary.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });
      return Boolean((await res.json()).success);
    };

    setStatus('sending');
    setFileNotAttached(false);
    try {
      let ok: boolean;
      let attached = true;
      if (hasFile) {
        ok = await sendWithFile(file).catch(() => false);
        if (!ok) {
          // Attachment rejected (e.g. plan limits): deliver the enquiry anyway.
          attached = false;
          ok = await sendJson({ ...fields, 'Vedhæftet fil': `${file.name} – kunne ikke vedhæftes, bed afsenderen sende den på mail` });
        }
      } else {
        ok = await sendJson(fields);
      }
      if (ok) {
        setFileNotAttached(!attached);
        setStatus('success');
        form.reset();
        clearFile();
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
        <h3 className="text-xl font-bold text-slate-800 mb-2">{t('contactForm.success.title')}</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
          {t('contactForm.success.body')}
        </p>
        {fileNotAttached && (
          <p
            className="text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-sm max-w-sm mx-auto mb-6"
            dangerouslySetInnerHTML={{ __html: t('contactForm.file.notAttached') }}
          />
        )}
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
        >
          {t('contactForm.success.newRequest')}
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
          <label className="block text-sm font-semibold text-slate-700 mb-2.5">{t('contactForm.topicQuestion')}</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FORM_TOPICS.map(({ value, labelKey, icon: Icon }) => (
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
                {t(labelKey)}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contactForm.fields.name')}</label>
          <input id="cf-name" name="name" type="text" required placeholder={t('contactForm.placeholders.name')} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contactForm.fields.email')}</label>
          <input id="cf-email" name="email" type="email" required placeholder={t('contactForm.placeholders.email')} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contactForm.fields.phone')}</label>
          <input id="cf-phone" name="phone" type="tel" placeholder={t('contactForm.placeholders.phone')} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-company" className="block text-sm font-semibold text-slate-700 mb-1.5">
            {isJob ? t('contactForm.fields.companyOptional') : t('contactForm.fields.companyRequired')}
          </label>
          <input id="cf-company" name="company" type="text" required={!isJob} placeholder={isJob ? t('contactForm.placeholders.companyOptional') : t('contactForm.placeholders.companyRequired')} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-semibold text-slate-700 mb-1.5">{t('contactForm.fields.message')}</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={
            isJob
              ? t('contactForm.placeholders.messageJob')
              : t('contactForm.placeholders.messageDefault')
          }
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-attachment" className="block text-sm font-semibold text-slate-700 mb-1.5">
          {isJob ? t('contactForm.file.labelJob') : t('contactForm.file.labelProject')}
        </label>
        <div className="flex items-center gap-3 border border-dashed border-slate-300 rounded-xl px-4 py-3 bg-slate-50">
          <Paperclip size={18} className="text-slate-400 flex-shrink-0" />
          <input
            ref={fileInputRef}
            id="cf-attachment"
            name="attachment"
            type="file"
            accept={FILE_ACCEPT}
            onChange={handleFileChange}
            aria-describedby="cf-attachment-hint"
            className="min-w-0 flex-1 text-sm text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-xs file:font-semibold hover:file:bg-blue-700 file:cursor-pointer cursor-pointer"
          />
          {fileName && (
            <button type="button" onClick={clearFile} aria-label={t('contactForm.file.remove')} className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white">
              <X size={16} />
            </button>
          )}
        </div>
        <p id="cf-attachment-hint" className={`text-xs mt-1.5 ${fileError ? 'text-red-600' : 'text-slate-400'}`}>
          {fileError ? t(`contactForm.file.${fileError}`) : isJob ? t('contactForm.file.hintJob') : t('contactForm.file.hintProject')}
        </p>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: t('contactForm.error') }} />
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <><Loader2 size={16} className="animate-spin" /> {t('contactForm.submit.sending')}</>
        ) : (
          <>{t('contactForm.submit.send')} <Send size={16} /></>
        )}
      </button>

      <p className="text-xs text-slate-400">
        {t('contactForm.gdprNote')}
      </p>
    </form>
  );
};

export default ContactForm;
