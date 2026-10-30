import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertCircle, ArrowRight, Building2, Calculator, Check, CheckCircle2, Loader2, Phone, Sparkles } from 'lucide-react';
import {
  CalculatorStep,
  CalculatorValues,
  CalculatorVariant,
  calculatorSteps,
  calculatorTopic,
  estimate,
  initialValues,
  isStepHidden,
  saveCalculatorLead,
  toSearchParams,
} from '../data/priceCalculator';
import { WEB3FORMS_ACCESS_KEY } from './ContactForm';

const K = 'priceCalculator';
// Steps whose texts are shared by several variants (priceCalculator.shared.<id>).
const SHARED_STEPS = ['audience', 'period'];

/** Labels for steps and chosen values – also used to pre-fill the contact form. */
export const useCalculatorText = () => {
  const { t } = useTranslation();
  const stepKey = (variant: CalculatorVariant, id: string) =>
    SHARED_STEPS.includes(id) ? `${K}.shared.${id}` : `${K}.variants.${variant}.steps.${id}`;
  const stepLabel = (variant: CalculatorVariant, id: string) => t(`${stepKey(variant, id)}.label`);
  const optionTitle = (variant: CalculatorVariant, id: string, option: string) => t(`${stepKey(variant, id)}.options.${option}.title`);
  const valueText = (variant: CalculatorVariant, step: CalculatorStep, value: CalculatorValues[string] | undefined) => {
    if (step.kind === 'slider') return t(`${stepKey(variant, step.id)}.value`, { count: Number(value ?? step.initial) });
    if (step.kind === 'multi') {
      const chosen = Array.isArray(value) ? value : [];
      return chosen.length ? chosen.map(o => optionTitle(variant, step.id, o)).join(', ') : t(`${K}.noneSelected`);
    }
    return optionTitle(variant, step.id, String(value ?? step.initial));
  };
  return { stepKey, stepLabel, optionTitle, valueText };
};

/**
 * Sends a calculator lead (company, phone and choices) to mail@magnoramarketing.dk
 * via our own /api/contact, falling back to Web3Forms like the contact form does.
 */
async function sendCalculatorLead(fields: { topic: string; company: string; phone: string; source: string; message: string }) {
  const body = new FormData();
  body.append('kind', 'lead');
  Object.entries(fields).forEach(([k, v]) => body.append(k, v));
  const viaApi = await fetch('/api/contact', { method: 'POST', headers: { Accept: 'application/json' }, body })
    .then(async res => res.ok && Boolean((await res.json().catch(() => ({}))).success))
    .catch(() => false);
  if (viaApi) return true;
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nyt lead fra prisberegneren – ${fields.company} (${fields.phone})`,
      from_name: 'magnoramarketing.dk',
      'Emne': fields.topic,
      'Virksomhed': fields.company,
      'Telefon': fields.phone,
      'Sendt fra side': fields.source,
      'Besked': fields.message,
    }),
  });
  return Boolean((await res.json()).success);
}

interface PriceCalculatorProps {
  /** Calculators to offer; several are shown as tabs. */
  variants: CalculatorVariant[];
  /** Section background – dark (default) or light, to fit between neighbouring sections. */
  tone?: 'dark' | 'light';
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({ variants, tone = 'dark' }) => {
  const { t, i18n } = useTranslation();
  const { stepKey, stepLabel, valueText } = useCalculatorText();
  const { pathname } = useLocation();
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [variant, setVariant] = useState<CalculatorVariant>(variants[0]);
  const [allValues, setAllValues] = useState(() =>
    Object.fromEntries(variants.map(v => [v, initialValues(v)])) as Record<CalculatorVariant, CalculatorValues>
  );
  const values = allValues[variant];
  const steps = calculatorSteps[variant].filter(s => !isStepHidden(variant, s.id, values));

  const setValue = (id: string, value: CalculatorValues[string]) =>
    setAllValues(prev => ({ ...prev, [variant]: { ...prev[variant], [id]: value } }));
  const toggleMulti = (id: string, option: string) => {
    const current = Array.isArray(values[id]) ? (values[id] as string[]) : [];
    setValue(id, current.includes(option) ? current.filter(o => o !== option) : [...current, option]);
  };

  // "Få pris" sends the lead (company, phone, choices) straight to our inbox, so
  // we can call back with the price. The e-mail is always written in Danish and
  // includes the indicative estimate, which the visitor never sees.
  const getPrice = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phone.replace(/\D/g, '').length < 8) {
      setPhoneError(true);
      return;
    }
    const da = i18n.getFixedT('da');
    const daStepLabel = (id: string) => da(SHARED_STEPS.includes(id) ? `${K}.shared.${id}.label` : `${K}.variants.${variant}.steps.${id}.label`);
    const daValue = (step: CalculatorStep) => {
      const base = SHARED_STEPS.includes(step.id) ? `${K}.shared.${step.id}` : `${K}.variants.${variant}.steps.${step.id}`;
      const value = values[step.id];
      if (step.kind === 'slider') return da(`${base}.value`, { count: Number(value) });
      if (step.kind === 'multi') return (Array.isArray(value) ? value : []).map(o => da(`${base}.options.${o}.title`)).join(', ') || da(`${K}.noneSelected`);
      return da(`${base}.options.${String(value)}.title`);
    };
    const kr = (n: number) => da(`${K}.currency`, { value: new Intl.NumberFormat('da-DK').format(n) });
    const result = estimate(variant, values);
    const message = [
      da(`${K}.lead.email.intro`, { calculator: da(`${K}.variants.${variant}.tab`) }),
      '',
      ...steps.map(step => `• ${daStepLabel(step.id)}: ${daValue(step)}`),
      '',
      da(`${K}.lead.email.estimate`),
      `• ${da(`${K}.variants.${variant}.mainLabel`)}: ${kr(result.main)}`,
      `• ${da(`${K}.variants.${variant}.secondaryLabel`)}: ${kr(result.secondary)}`,
    ].join('\n');

    saveCalculatorLead({ company: company.trim(), phone: phone.trim() });
    setStatus('sending');
    const ok = await sendCalculatorLead({
      topic: calculatorTopic[variant],
      company: company.trim(),
      phone: phone.trim(),
      source: `${da(`${K}.sourceLabel`)} – ${pathname}`,
      message,
    }).catch(() => false);
    setStatus(ok ? 'sent' : 'error');
  };

  const dark = tone === 'dark';
  const V = `${K}.variants.${variant}`;
  const trust = t(`${K}.trust`, { returnObjects: true }) as string[];

  return (
    <section id="prisberegner" className={`relative overflow-hidden py-20 ${dark ? 'bg-slate-950' : 'bg-gradient-to-b from-slate-50 to-blue-50/60'}`}>
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl" />
        </div>
      )}

      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${dark ? 'bg-white/10 text-blue-200 ring-1 ring-white/15' : 'bg-blue-100 text-blue-700'}`}>
            <Calculator size={14} /> {t(`${K}.badge`)}
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{t(`${V}.title`)}</h2>
          <p className={`mt-3 text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{t(`${V}.subtitle`)}</p>
        </div>

        {variants.length > 1 && (
          <div role="tablist" aria-label={t(`${K}.tabsLabel`)} className={`mx-auto mb-8 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-2xl p-1.5 ${dark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-white shadow-sm ring-1 ring-slate-200'}`}>
            {variants.map(v => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={v === variant}
                onClick={() => setVariant(v)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  v === variant
                    ? dark ? 'bg-white text-slate-900 shadow' : 'bg-blue-600 text-white shadow'
                    : dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                {t(`${K}.variants.${v}.tab`)}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-5 items-start">
          {/* Inputs */}
          <div className="lg:col-span-3 rounded-3xl bg-white p-6 md:p-8 shadow-2xl shadow-blue-950/10 ring-1 ring-slate-200/70 space-y-8">
            {steps.map((step, index) => (
              <fieldset key={`${variant}-${step.id}`}>
                <legend className="mb-3 flex w-full items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-base font-bold text-slate-900">{stepLabel(variant, step.id)}</span>
                  {step.kind === 'multi' && <span className="ml-auto text-xs font-medium text-slate-400">{t(`${K}.multiHint`)}</span>}
                </legend>

                {step.kind === 'slider' && (
                  <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                    <div className="mb-4 flex items-baseline justify-between gap-4">
                      <span className="text-sm text-slate-500">{t(`${stepKey(variant, step.id)}.hint`)}</span>
                      <span className="text-2xl font-extrabold text-blue-700 tabular-nums whitespace-nowrap">{valueText(variant, step, values[step.id])}</span>
                    </div>
                    <input
                      type="range"
                      min={step.min}
                      max={step.max}
                      step={step.step}
                      value={Number(values[step.id])}
                      onChange={e => setValue(step.id, Number(e.target.value))}
                      aria-label={stepLabel(variant, step.id)}
                      className="calc-range w-full"
                      style={{ '--fill': `${((Number(values[step.id]) - step.min) / (step.max - step.min)) * 100}%` } as React.CSSProperties}
                    />
                    <div className="mt-2 flex justify-between text-xs font-medium text-slate-400 tabular-nums">
                      <span>{step.min}</span><span>{step.max}</span>
                    </div>
                  </div>
                )}

                {step.kind === 'choice' && (
                  <div className={`grid gap-2.5 ${step.id === 'period' ? 'grid-cols-2 sm:grid-cols-4' : step.options.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                    {step.options.map(option => {
                      const active = values[step.id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setValue(step.id, option)}
                          className={`relative rounded-2xl border p-4 text-left transition-all ${
                            active ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600 shadow-md shadow-blue-600/10' : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                          }`}
                        >
                          {active && (
                            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={12} strokeWidth={3} /></span>
                          )}
                          <span className={`block pr-6 text-sm font-bold ${active ? 'text-blue-800' : 'text-slate-800'}`}>{t(`${stepKey(variant, step.id)}.options.${option}.title`)}</span>
                          <span className="mt-1 block text-xs leading-snug text-slate-500">{t(`${stepKey(variant, step.id)}.options.${option}.desc`)}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {step.kind === 'multi' && (
                  <div className="flex flex-wrap gap-2.5">
                    {step.options.map(option => {
                      const active = Array.isArray(values[step.id]) && (values[step.id] as string[]).includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleMulti(step.id, option)}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                            active ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300'
                          }`}
                        >
                          <span className={`flex h-4 w-4 items-center justify-center rounded-full ${active ? 'bg-white text-blue-600' : 'border border-slate-300'}`}>
                            {active && <Check size={10} strokeWidth={3.5} />}
                          </span>
                          {t(`${stepKey(variant, step.id)}.options.${option}.title`)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </fieldset>
            ))}
          </div>

          {/* Result: chosen options + company/phone form that sends the lead */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 md:p-7 text-white shadow-2xl shadow-indigo-900/30">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
              <Sparkles size={16} /> {t(`${K}.resultHeading`)}
            </div>

            <dl className="mt-4 divide-y divide-white/15 rounded-2xl bg-white/10 px-4 ring-1 ring-white/15">
              {steps.map(step => (
                <div key={step.id} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-blue-100">{stepLabel(variant, step.id)}</dt>
                  <dd className="text-right font-semibold">{valueText(variant, step, values[step.id])}</dd>
                </div>
              ))}
            </dl>

            {status === 'sent' ? (
              <div className="mt-5 rounded-2xl bg-white p-6 text-center text-slate-800 shadow-xl" role="status">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 size={26} className="text-emerald-600" />
                </span>
                <p className="text-lg font-extrabold text-slate-900">{t(`${K}.lead.successTitle`)}</p>
                <p className="mt-2 text-sm text-slate-600">{t(`${K}.lead.successText`, { company: company.trim(), phone: phone.trim() })}</p>
                <Link
                  to={`/kontakt?${toSearchParams(variant, values)}#kontaktformular`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  {t(`${K}.lead.moreDetails`)} <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
            <>
            <p className="mt-5 text-sm leading-relaxed text-blue-50">{t(`${K}.lockedText`)}</p>

            <form onSubmit={getPrice} className="mt-5 space-y-3">
              <p className="text-sm font-bold">{t(`${K}.lead.heading`)}</p>
              <label className="block">
                <span className="sr-only">{t(`${K}.lead.company`)}</span>
                <span className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-slate-800 ring-2 ring-transparent focus-within:ring-blue-300">
                  <Building2 size={17} className="flex-shrink-0 text-indigo-500" />
                  <input
                    name="company"
                    required
                    autoComplete="organization"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder={t(`${K}.lead.company`)}
                    className="w-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none"
                  />
                </span>
              </label>
              <label className="block">
                <span className="sr-only">{t(`${K}.lead.phone`)}</span>
                <span className={`flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-slate-800 ring-2 focus-within:ring-blue-300 ${phoneError ? 'ring-rose-400' : 'ring-transparent'}`}>
                  <Phone size={17} className="flex-shrink-0 text-indigo-500" />
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={phone}
                    onChange={e => { setPhone(e.target.value); setPhoneError(false); }}
                    placeholder={t(`${K}.lead.phone`)}
                    aria-invalid={phoneError}
                    className="w-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none"
                  />
                </span>
                {phoneError && <span className="mt-1 block text-xs font-semibold text-rose-100">{t(`${K}.lead.phoneInvalid`)}</span>}
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-extrabold text-indigo-700 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <><Loader2 size={18} className="animate-spin" /> {t(`${K}.lead.sending`)}</>
                ) : (
                  <>{t(`${K}.cta`)} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></>
                )}
              </button>
              {status === 'error' && (
                <p className="flex items-start gap-2 rounded-xl bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                  <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${K}.lead.error`) }} />
                </p>
              )}
            </form>
            </>
            )}

            <ul className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {trust.map(item => (
                <li key={item} className="flex items-center gap-1.5 text-xs font-medium text-blue-50">
                  <CheckCircle2 size={14} className="flex-shrink-0 text-emerald-300" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-blue-100/80">{t(`${K}.vatNote`)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
