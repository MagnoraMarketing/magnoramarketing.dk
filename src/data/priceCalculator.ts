// Configuration for the price calculator (src/components/PriceCalculator.tsx).
// Each variant is a list of steps; all visible text lives under
// priceCalculator.variants.<variant> in src/i18n/locales/{da,en,es}/priceCalculator.ts.
//
// The calculator is a lead tool: the visitor configures their needs, sees a
// locked (blurred) estimate and gets the actual price sent after submitting the
// contact form, which is pre-filled with their choices (see ContactPage).

export type CalculatorVariant = 'meetings' | 'telemarketing' | 'website' | 'ai';

export type CalculatorStep =
  | { id: string; kind: 'choice'; options: string[]; initial: string }
  | { id: string; kind: 'multi'; options: string[]; initial: string[] }
  | { id: string; kind: 'slider'; min: number; max: number; step: number; initial: number };

export type CalculatorValues = Record<string, string | string[] | number>;

/** Which contact-form topic an enquiry from each variant lands in. */
export const calculatorTopic = {
  meetings: 'Pris på Mødebooking / Telesalg',
  telemarketing: 'Pris på Mødebooking / Telesalg',
  website: 'Webudvikling',
  ai: 'AI-løsninger',
} as const;

const audience: CalculatorStep = { id: 'audience', kind: 'choice', options: ['smb', 'manager', 'csuite'], initial: 'manager' };
const period: CalculatorStep = { id: 'period', kind: 'choice', options: ['1', '3', '6', '12'], initial: '6' };

export const calculatorSteps: Record<CalculatorVariant, CalculatorStep[]> = {
  meetings: [
    { id: 'model', kind: 'choice', options: ['perMeeting', 'package'], initial: 'package' },
    { id: 'volume', kind: 'slider', min: 5, max: 60, step: 1, initial: 15 },
    audience,
    period,
  ],
  telemarketing: [
    { id: 'goal', kind: 'choice', options: ['meetings', 'sales', 'leads'], initial: 'meetings' },
    { id: 'volume', kind: 'slider', min: 20, max: 320, step: 10, initial: 80 },
    audience,
    period,
  ],
  website: [
    { id: 'type', kind: 'choice', options: ['landing', 'business', 'cms', 'webshop'], initial: 'business' },
    { id: 'volume', kind: 'slider', min: 1, max: 40, step: 1, initial: 8 },
    { id: 'design', kind: 'choice', options: ['template', 'custom'], initial: 'custom' },
    { id: 'features', kind: 'multi', options: ['seo', 'booking', 'multilingual', 'copy', 'integrations'], initial: ['seo'] },
  ],
  ai: [
    { id: 'solution', kind: 'choice', options: ['chatbot', 'reception', 'automation', 'integration'], initial: 'chatbot' },
    { id: 'volume', kind: 'slider', min: 100, max: 10000, step: 100, initial: 1000 },
    { id: 'integrations', kind: 'multi', options: ['crm', 'calendar', 'email', 'website', 'erp'], initial: ['website'] },
    { id: 'languages', kind: 'choice', options: ['one', 'two', 'many'], initial: 'two' },
  ],
};

export const calculatorVariants = Object.keys(calculatorSteps) as CalculatorVariant[];

export const initialValues = (variant: CalculatorVariant): CalculatorValues =>
  Object.fromEntries(calculatorSteps[variant].map(s => [s.id, s.initial]));

/** Steps hidden for the current choices (no binding period on pay-per-meeting). */
export const isStepHidden = (variant: CalculatorVariant, stepId: string, values: CalculatorValues) =>
  variant === 'meetings' && stepId === 'period' && values.model === 'perMeeting';

export interface CalculatorEstimate {
  /** Main figure: monthly price, or one-off price for websites. */
  main: number;
  /** Secondary figure: price per meeting / hour, or monthly running cost for AI. */
  secondary: number;
}

const roundTo = (n: number, step: number) => Math.round(n / step) * step;
const audienceFactor: Record<string, number> = { smb: 1, manager: 1.15, csuite: 1.35 };
const periodDiscount: Record<string, number> = { '1': 0, '3': 0.05, '6': 0.1, '12': 0.15 };

/**
 * Indicative estimate shown (blurred) in the calculator. The visitor gets the
 * actual price from us after the enquiry, so this only needs to move sensibly
 * with the inputs and stay within the market ranges quoted in the blog.
 */
export function estimate(variant: CalculatorVariant, v: CalculatorValues): CalculatorEstimate {
  const volume = Number(v.volume);
  const list = (key: string) => (Array.isArray(v[key]) ? (v[key] as string[]) : []);
  switch (variant) {
    case 'meetings': {
      const perMeeting = v.model === 'perMeeting';
      const volumeDiscount = volume >= 40 ? 0.1 : volume >= 20 ? 0.05 : 0;
      const discount = perMeeting ? 0 : periodDiscount[String(v.period)] ?? 0;
      const unit = roundTo((perMeeting ? 1400 : 1000) * (audienceFactor[String(v.audience)] ?? 1) * (1 - volumeDiscount) * (1 - discount), 5);
      return { main: unit * volume, secondary: unit };
    }
    case 'telemarketing': {
      const goal = { meetings: 1, sales: 1.08, leads: 0.92 }[String(v.goal)] ?? 1;
      const volumeDiscount = volume >= 240 ? 0.08 : volume >= 160 ? 0.05 : 0;
      const rate = roundTo(500 * goal * (1 + ((audienceFactor[String(v.audience)] ?? 1) - 1) / 2) * (1 - volumeDiscount) * (1 - (periodDiscount[String(v.period)] ?? 0)), 5);
      return { main: rate * volume, secondary: rate };
    }
    case 'website': {
      const base = { landing: 6000, business: 12000, cms: 22000, webshop: 35000 }[String(v.type)] ?? 12000;
      const total = base + volume * 750 + (v.design === 'custom' ? 8000 : 0) + list('features').length * 3500;
      return { main: roundTo(total, 500), secondary: roundTo(total / 24, 50) };
    }
    case 'ai': {
      const setup = { chatbot: 8000, reception: 5000, automation: 15000, integration: 25000 }[String(v.solution)] ?? 8000;
      const monthly = { chatbot: 999, reception: 1500, automation: 2500, integration: 3500 }[String(v.solution)] ?? 999;
      const languages = { one: 1, two: 1.1, many: 1.25 }[String(v.languages)] ?? 1;
      return {
        main: roundTo((setup + list('integrations').length * 4000) * languages, 500),
        secondary: roundTo((monthly + (volume / 1000) * 250) * languages, 50),
      };
    }
  }
}

/** Serialises the visitor's choices for the link to the contact form. */
export function toSearchParams(variant: CalculatorVariant, values: CalculatorValues) {
  const params = new URLSearchParams({ beregner: variant });
  for (const step of calculatorSteps[variant]) {
    if (isStepHidden(variant, step.id, values)) continue;
    const value = values[step.id];
    params.set(step.id, Array.isArray(value) ? value.join(',') : String(value));
  }
  return params.toString();
}

/** Reads and validates choices from the contact page URL; null when absent or invalid. */
export function fromSearchParams(search: URLSearchParams): { variant: CalculatorVariant; values: CalculatorValues } | null {
  const variant = search.get('beregner') as CalculatorVariant | null;
  if (!variant || !calculatorVariants.includes(variant)) return null;
  const values: CalculatorValues = {};
  for (const step of calculatorSteps[variant]) {
    const raw = search.get(step.id);
    if (raw === null) continue;
    if (step.kind === 'slider') {
      const n = Number(raw);
      if (Number.isFinite(n)) values[step.id] = Math.min(step.max, Math.max(step.min, Math.round(n)));
    } else if (step.kind === 'multi') {
      values[step.id] = raw.split(',').filter(o => step.options.includes(o));
    } else if (step.options.includes(raw)) {
      values[step.id] = raw;
    }
  }
  return { variant, values };
}

/** Company name and phone typed into the calculator, handed to the contact form. */
export interface CalculatorLead {
  company: string;
  phone: string;
}

const LEAD_KEY = 'magnora.calculatorLead';

// sessionStorage keeps the phone number out of the URL; it can be unavailable
// (private mode, blocked storage), in which case the visitor simply types it again.
export function saveCalculatorLead(lead: CalculatorLead) {
  try {
    sessionStorage.setItem(LEAD_KEY, JSON.stringify(lead));
  } catch {
    /* storage unavailable */
  }
}

export function readCalculatorLead(): CalculatorLead | null {
  try {
    const lead = JSON.parse(sessionStorage.getItem(LEAD_KEY) ?? 'null');
    return lead && typeof lead.company === 'string' && typeof lead.phone === 'string' ? lead : null;
  } catch {
    return null;
  }
}
