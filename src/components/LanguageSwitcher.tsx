import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const flags: Record<string, string> = { da: '🇩🇰', en: '🇬🇧', es: '🇪🇸' };
const langs = ['da', 'en', 'es'] as const;

interface Props {
  compact?: boolean;
}

const LanguageSwitcher: React.FC<Props> = ({ compact = false }) => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = langs.includes(i18n.language as typeof langs[number]) ? i18n.language : 'da';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const change = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {langs.map(l => (
          <button
            key={l}
            onClick={() => change(l)}
            className={`text-xs px-2 py-1 rounded-md font-medium transition-colors ${
              current === l ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {flags[l]} {l.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
      >
        <span>{flags[current]}</span>
        <span className="hidden sm:inline">{t(`language.${current}`)}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
          {langs.map(l => (
            <button
              key={l}
              onClick={() => change(l)}
              className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors mx-1 ${
                current === l ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
              }`}
              style={{ width: 'calc(100% - 8px)' }}
            >
              <span>{flags[l]}</span>
              <span>{t(`language.${l}`)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
