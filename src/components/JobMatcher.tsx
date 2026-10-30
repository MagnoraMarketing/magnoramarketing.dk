import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, ArrowRight, Briefcase, Check, CheckCircle2, Loader2, Mail, Phone, Send, Sparkles, User } from 'lucide-react';
import { jobListings } from '../data/jobListings';
import { sendEnquiry } from '../data/sendEnquiry';

const K = 'jobMatcher';
const HOURS = { min: 5, max: 40, step: 5, initial: 15 };
const EXPERIENCE = ['none', 'some', 'experienced', 'expert'] as const;
// Every job we offer except the general remote page itself, plus "open to suggestions".
const JOBS = [...jobListings.filter(j => j.key !== 'remoteWork').map(j => j.key), 'open'];

type Action = 'salary' | 'apply';

/**
 * "Find your job" picker for /jobs/arbejd-hjemmefra. The visitor picks a job,
 * weekly hours and experience, adds name, phone and e-mail, and either asks to
 * see opportunities and pay or applies straight away. Both send the details to
 * mail@magnoramarketing.dk as a lead.
 */
const JobMatcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [job, setJob] = useState('open');
  const [hours, setHours] = useState(HOURS.initial);
  const [experience, setExperience] = useState<(typeof EXPERIENCE)[number]>('some');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [sent, setSent] = useState<Action | null>(null);

  const jobTitle = (key: string, tt = t) => (key === 'open' ? tt(`${K}.openJob`) : tt(`jobListings.${key}.title`));

  const submit = async (action: Action) => {
    if (phone.replace(/\D/g, '').length < 8) {
      setPhoneError(true);
      return;
    }
    // The e-mail to us is always in Danish, whatever language the visitor uses.
    const da = i18n.getFixedT('da');
    const actionLabel = da(`${K}.actions.${action}`);
    setStatus('sending');
    const ok = await sendEnquiry({
      topic: 'Job henvendelse',
      subject: `Job-lead (${actionLabel}) – ${name.trim()} (${phone.trim()})`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      source: `${da(`${K}.sourceLabel`)} – ${actionLabel}`,
      message: [
        da(`${K}.email.intro`, { action: actionLabel }),
        '',
        `• ${da(`${K}.job.label`)}: ${jobTitle(job, da)}`,
        `• ${da(`${K}.hours.label`)}: ${da(`${K}.hours.value`, { count: hours })}`,
        `• ${da(`${K}.experience.label`)}: ${da(`${K}.experience.options.${experience}.title`)}`,
      ].join('\n'),
    }).catch(() => false);
    setStatus(ok ? 'idle' : 'error');
    if (ok) setSent(action);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    submit(submitter?.value === 'apply' ? 'apply' : 'salary');
  };

  const fill = ((hours - HOURS.min) / (HOURS.max - HOURS.min)) * 100;
  const input = 'w-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none';
  const field = 'flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-slate-800 ring-2 ring-transparent focus-within:ring-blue-300';

  return (
    <section id="find-job" className="relative overflow-hidden bg-slate-950 py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-200 ring-1 ring-white/15">
            <Briefcase size={14} /> {t(`${K}.badge`)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{t(`${K}.title`)}</h2>
          <p className="mt-3 text-lg text-slate-300">{t(`${K}.subtitle`)}</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-5">
          <div className="space-y-8 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200/70 md:p-8 lg:col-span-3">
            <fieldset>
              <legend className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">1</span>
                <span className="text-base font-bold text-slate-900">{t(`${K}.job.label`)}</span>
              </legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {JOBS.map(key => {
                  const active = job === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setJob(key)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                        active ? 'border-blue-600 bg-blue-50 text-blue-800 ring-1 ring-blue-600' : 'border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      {jobTitle(key)}
                      {active && <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={12} strokeWidth={3} /></span>}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">2</span>
                <span className="text-base font-bold text-slate-900">{t(`${K}.hours.label`)}</span>
              </legend>
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <span className="text-sm text-slate-500">{t(`${K}.hours.hint`)}</span>
                  <span className="whitespace-nowrap text-2xl font-extrabold tabular-nums text-blue-700">{t(`${K}.hours.value`, { count: hours })}</span>
                </div>
                <input
                  type="range"
                  min={HOURS.min}
                  max={HOURS.max}
                  step={HOURS.step}
                  value={hours}
                  onChange={e => setHours(Number(e.target.value))}
                  aria-label={t(`${K}.hours.label`)}
                  className="calc-range w-full"
                  style={{ '--fill': `${fill}%` } as React.CSSProperties}
                />
                <div className="mt-2 flex justify-between text-xs font-medium tabular-nums text-slate-400">
                  <span>{HOURS.min}</span><span>{HOURS.max}</span>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">3</span>
                <span className="text-base font-bold text-slate-900">{t(`${K}.experience.label`)}</span>
              </legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {EXPERIENCE.map(option => {
                  const active = experience === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setExperience(option)}
                      className={`relative rounded-2xl border p-4 text-left transition-all ${
                        active ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10 ring-1 ring-blue-600' : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      {active && <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={12} strokeWidth={3} /></span>}
                      <span className={`block pr-6 text-sm font-bold ${active ? 'text-blue-800' : 'text-slate-800'}`}>{t(`${K}.experience.options.${option}.title`)}</span>
                      <span className="mt-1 block text-xs leading-snug text-slate-500">{t(`${K}.experience.options.${option}.desc`)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 p-6 text-white shadow-2xl shadow-indigo-900/30 md:p-7 lg:sticky lg:top-28 lg:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
              <Sparkles size={16} /> {t(`${K}.resultHeading`)}
            </div>
            <dl className="mt-4 divide-y divide-white/15 rounded-2xl bg-white/10 px-4 ring-1 ring-white/15">
              {[
                [t(`${K}.job.label`), jobTitle(job)],
                [t(`${K}.hours.label`), t(`${K}.hours.value`, { count: hours })],
                [t(`${K}.experience.label`), t(`${K}.experience.options.${experience}.title`)],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-blue-100">{label}</dt>
                  <dd className="text-right font-semibold">{value}</dd>
                </div>
              ))}
            </dl>

            {sent ? (
              <div className="mt-5 rounded-2xl bg-white p-6 text-center text-slate-800 shadow-xl" role="status">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 size={26} className="text-emerald-600" />
                </span>
                <p className="text-lg font-extrabold text-slate-900">{t(`${K}.success.${sent}.title`)}</p>
                <p className="mt-2 text-sm text-slate-600">{t(`${K}.success.${sent}.text`, { name: name.trim().split(' ')[0], phone: phone.trim() })}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <p className="text-sm leading-relaxed text-blue-50">{t(`${K}.formIntro`)}</p>
                <label className="block">
                  <span className="sr-only">{t(`${K}.fields.name`)}</span>
                  <span className={field}>
                    <User size={17} className="flex-shrink-0 text-indigo-500" />
                    <input name="name" required autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder={t(`${K}.fields.name`)} className={input} />
                  </span>
                </label>
                <label className="block">
                  <span className="sr-only">{t(`${K}.fields.phone`)}</span>
                  <span className={`${field} ${phoneError ? '!ring-rose-400' : ''}`}>
                    <Phone size={17} className="flex-shrink-0 text-indigo-500" />
                    <input name="phone" type="tel" required autoComplete="tel" value={phone} onChange={e => { setPhone(e.target.value); setPhoneError(false); }} placeholder={t(`${K}.fields.phone`)} aria-invalid={phoneError} className={input} />
                  </span>
                  {phoneError && <span className="mt-1 block text-xs font-semibold text-rose-100">{t(`${K}.phoneInvalid`)}</span>}
                </label>
                <label className="block">
                  <span className="sr-only">{t(`${K}.fields.email`)}</span>
                  <span className={field}>
                    <Mail size={17} className="flex-shrink-0 text-indigo-500" />
                    <input name="email" type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t(`${K}.fields.email`)} className={input} />
                  </span>
                </label>
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <button
                    type="submit"
                    value="salary"
                    disabled={status === 'sending'}
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-extrabold text-indigo-700 shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {status === 'sending' ? <Loader2 size={17} className="animate-spin" /> : null}
                    {t(`${K}.actions.salary`)} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    type="submit"
                    value="apply"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-extrabold text-emerald-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-emerald-300 disabled:opacity-70"
                  >
                    {t(`${K}.actions.apply`)} <Send size={16} />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="flex items-start gap-2 rounded-xl bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                    <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: t(`${K}.error`) }} />
                  </p>
                )}
                <p className="text-[11px] text-blue-100/80">{t(`${K}.gdpr`)}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatcher;
