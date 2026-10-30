import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarCheck, Eye, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Phone } from 'lucide-react';

interface TextItem {
  title: string;
  desc: string;
}

interface MockRow {
  title: string;
  meta: string;
  status: string;
}

interface MockStat {
  value: string;
  label: string;
}

// Skærmbilleder af DM-ringesystemet. Læg billederne i public/dm-system/ og tilføj
// stien her – rækkefølgen matcher alt-teksterne i dmSystem.screenshots (da/en/es).
// Så længe listen er tom, vises en illustration af appen i stedet.
const SCREENSHOTS: string[] = [];

const featureIcons = [
  <CalendarCheck size={22} className="text-blue-600" />,
  <Eye size={22} className="text-blue-600" />,
  <MessageSquare size={22} className="text-blue-600" />,
  <TrendingUp size={22} className="text-blue-600" />,
];

const statusColors = [
  'bg-emerald-50 text-emerald-700 border-emerald-200',
  'bg-blue-50 text-blue-700 border-blue-200',
  'bg-amber-50 text-amber-700 border-amber-200',
  'bg-slate-50 text-slate-600 border-slate-200',
];

const AppMock: React.FC = () => {
  const { t } = useTranslation();
  const tabs = t('dmSystem.mock.tabs', { returnObjects: true }) as string[];
  const rows = t('dmSystem.mock.rows', { returnObjects: true }) as MockRow[];
  const stats = t('dmSystem.mock.stats', { returnObjects: true }) as MockStat[];

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" aria-hidden="true">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-semibold tracking-wide text-white/80 truncate">{t('dmSystem.mock.appName')}</span>
      </div>
      <div className="flex gap-1 px-4 pt-4 border-b border-slate-100">
        {tabs.map((tab, i) => (
          <span
            key={i}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg ${i === 0 ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'text-slate-500'}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="p-4 space-y-2.5">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">{row.title}</p>
              <p className="text-xs text-slate-500 truncate">{row.meta}</p>
            </div>
            <span className={`flex-shrink-0 px-2.5 py-1 text-[11px] font-semibold rounded-full border ${statusColors[i % statusColors.length]}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl bg-blue-600 text-white p-3">
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-[11px] text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border-t border-emerald-100 text-emerald-700 text-xs font-semibold">
        <CalendarCheck size={14} /> {t('dmSystem.mock.synced')}
      </div>
    </div>
  );
};

const Screenshots: React.FC = () => {
  const { t } = useTranslation();
  const alts = t('dmSystem.screenshots', { returnObjects: true }) as string[];

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {SCREENSHOTS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alts[i] ?? alts[0]}
            loading="lazy"
            className="w-full rounded-2xl shadow-xl border border-slate-200"
          />
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">{t('dmSystem.screenshotsNote')}</p>
    </div>
  );
};

const DmSystemSection: React.FC = () => {
  const { t } = useTranslation();
  const features = t('dmSystem.features', { returnObjects: true }) as TextItem[];
  const usps = t('dmSystem.usps', { returnObjects: true }) as string[];

  return (
    <section id="dm-system" className="section bg-gradient-to-b from-white to-blue-50/60">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-label inline-flex items-center gap-2">
            <Phone size={14} /> {t('dmSystem.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('dmSystem.title')}</h2>
          <p className="text-lg text-slate-600">{t('dmSystem.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                    {featureIcons[i]}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2.5 mb-8">
              {usps.map((usp, i) => (
                <li key={i} className="flex items-center gap-2.5 font-semibold text-slate-800">
                  <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" /> {usp}
                </li>
              ))}
            </ul>
            <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
              {t('dmSystem.cta')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div>{SCREENSHOTS.length > 0 ? <Screenshots /> : <AppMock />}</div>
        </div>
      </div>
    </section>
  );
};

export default DmSystemSection;
