import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Linkedin, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Zap size={14} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Magnora Marketing</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61559179262196"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/nexusmarketing-dk"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: t('footer.links.home') },
                { to: '/ydelser', label: t('footer.links.services') },
                { to: '/jobs/arbejd-hjemmefra', label: t('footer.links.sellers') },
                { to: '/samarbejdspartner', label: t('footer.links.partner') },
                { to: '/priser', label: t('footer.links.pricing') },
                { to: '/om-os', label: t('footer.links.about') },
                { to: '/kontakt', label: t('footer.links.contact') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/ydelser', label: t('footer.links.telemarketing') },
                { to: '/modebooking-priser', label: t('footer.links.meetingBooking') },
                { to: '/leadgenerering', label: t('footer.links.leadGeneration') },
                { to: '/digital/webudvikling', label: t('footer.links.webDevelopment') },
                { to: '/digital/ai-integration', label: t('footer.links.aiIntegration') },
                { to: '/hvorfor-os', label: t('footer.links.salesOutsourcing') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-1">Magnora Marketing</p>
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-400 text-sm">Calle Purisima 5<br />46540 El Puig, Valencia</p>
                </div>
              </div>
              <a href="mailto:mail@magnoramarketing.dk" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                <Mail size={15} className="text-blue-500 flex-shrink-0" />
                mail@magnoramarketing.dk
              </a>
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-500 mb-2">{t('language.da')} / {t('language.en')} / {t('language.es')}</p>
                <LanguageSwitcher compact />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Magnora Marketing. {t('footer.rights')}</p>
          <p>CVR · {t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
