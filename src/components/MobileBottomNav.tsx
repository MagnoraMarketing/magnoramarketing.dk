import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Briefcase, Laptop, MessageCircle, Users, Tag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  path: string;
  labelKey: string;
  icon: LucideIcon;
}

// Left side: job seekers. Right side: partners. Contact sits in the middle.
const leftItems: NavItem[] = [
  { path: '/freelance-telemarketing', labelKey: 'bottomNav.jobs', icon: Briefcase },
  { path: '/jobs/arbejd-hjemmefra', labelKey: 'bottomNav.remote', icon: Laptop },
];

const rightItems: NavItem[] = [
  { path: '/samarbejdspartner', labelKey: 'bottomNav.partner', icon: Users },
  { path: '/priser', labelKey: 'bottomNav.pricing', icon: Tag },
];

const MobileBottomNav: React.FC = () => {
  const { t } = useTranslation();

  const itemClass = ({ isActive }: { isActive: boolean }) =>
    `flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`;

  const renderItem = ({ path, labelKey, icon: Icon }: NavItem) => (
    <NavLink key={path} to={path} className={itemClass}>
      <Icon size={22} strokeWidth={1.8} />
      <span className="leading-none">{t(labelKey)}</span>
    </NavLink>
  );

  return (
    <nav
      aria-label={t('bottomNav.aria')}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(15,23,42,0.06)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-stretch h-16">
        {leftItems.map(renderItem)}

        <NavLink
          to="/kontakt"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-end gap-1 pb-2 text-[11px] font-semibold ${
              isActive ? 'text-blue-600' : 'text-slate-700'
            }`
          }
        >
          <span className="-mt-7 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/40 ring-4 ring-white">
            <MessageCircle size={24} />
          </span>
          <span className="leading-none">{t('bottomNav.contact')}</span>
        </NavLink>

        {rightItems.map(renderItem)}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
