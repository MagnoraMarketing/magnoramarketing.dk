import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, X } from 'lucide-react';

const STORAGE_KEY = 'trialWidgetMinimized';

interface TrialWidgetProps {
  liftForCookieBanner?: boolean;
}

const TrialWidget: React.FC<TrialWidgetProps> = ({ liftForCookieBanner }) => {
  const { t } = useTranslation();
  const [minimized, setMinimized] = useState(true);

  useEffect(() => {
    setMinimized(localStorage.getItem(STORAGE_KEY) !== 'false');
  }, []);

  const setState = (value: boolean) => {
    setMinimized(value);
    localStorage.setItem(STORAGE_KEY, String(value));
  };

  const position = liftForCookieBanner ? 'bottom-24 right-4 sm:right-6' : 'bottom-6 right-6';

  if (minimized) {
    return (
      <button
        onClick={() => setState(false)}
        aria-label={t('trialWidget.expandAria')}
        className={`fixed ${position} z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:scale-105 transition-transform`}
      >
        <Sparkles size={22} />
      </button>
    );
  }

  return (
    <div className={`fixed ${position} z-40 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden`}>
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-4 flex items-start justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <Sparkles size={18} />
          {t('trialWidget.title')}
        </div>
        <button
          onClick={() => setState(true)}
          aria-label={t('trialWidget.minimizeAria')}
          className="text-white/80 hover:text-white -mt-1 -mr-1 p-1"
        >
          <X size={18} />
        </button>
      </div>
      <div className="p-5">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{t('trialWidget.message')}</p>
        <Link to="/kontakt" className="btn btn-primary text-sm px-4 py-2 w-full text-center block">
          {t('trialWidget.ctaText')}
        </Link>
      </div>
    </div>
  );
};

export default TrialWidget;
