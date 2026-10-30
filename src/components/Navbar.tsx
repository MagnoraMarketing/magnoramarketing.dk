import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { jobListings } from '../data/jobListings';
import { blogCategoryOrder } from '../data/blog';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isDigitalDropdownOpen, setIsDigitalDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const closeAllDropdowns = () => {
    setIsJobsDropdownOpen(false);
    setIsDigitalDropdownOpen(false);
    setIsPartnerDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeAllDropdowns();
    setIsMenuOpen(false);
    setOpenMobileSection(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Opening one mobile section closes the others; tapping an open one closes it.
  const toggleMobileSection = (id: string) => setOpenMobileSection(current => (current === id ? null : id));
  const toggleJobsDropdown = () => { setIsJobsDropdownOpen(v => !v); setIsDigitalDropdownOpen(false); setIsPartnerDropdownOpen(false); };
  const toggleDigitalDropdown = () => { setIsDigitalDropdownOpen(v => !v); setIsJobsDropdownOpen(false); setIsPartnerDropdownOpen(false); };
  const togglePartnerDropdown = () => { setIsPartnerDropdownOpen(v => !v); setIsJobsDropdownOpen(false); setIsDigitalDropdownOpen(false); };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
      isActive
        ? 'text-blue-600 bg-blue-50'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const dropdownItemClass = 'block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors';

  const digitalServices = [
    { path: '/digital/webudvikling', title: t('nav.digitalServices.webDevelopment') },
    { path: '/digital/api-saas', title: t('nav.digitalServices.apiSaas') },
    { path: '/digital/hjemmesider', title: t('nav.digitalServices.websites') },
    { path: '/digital/ai-integration', title: t('nav.digitalServices.aiIntegration') },
    { path: '/digital/ai-widget', title: t('nav.digitalServices.aiWidget') },
    { path: '/digital/ai-reception', title: t('nav.digitalServices.aiReception') },
    { path: '/digital/spiludvikling', title: t('nav.digitalServices.gameDevelopment') }
  ];

  const partnerOptions = [
    { path: '/samarbejdspartner', title: t('nav.partnerOptions.becomePartner') },
    { path: '/priser', title: t('nav.partnerOptions.pricing') },
    { path: '/prisberegner', title: t('nav.partnerOptions.priceCalculator') },
    { path: '/hvorfor-os', title: t('nav.partnerOptions.whyUs') },
    { path: '/modebooking-priser', title: t('nav.partnerOptions.meetingBooking') },
    { path: '/leadgenerering', title: t('nav.partnerOptions.leadGeneration') }
  ];

  const blogCategories = t('blogPage.categories', { returnObjects: true }) as Array<{ label: string }>;

  type MobileLink = { to: string; title: string; highlight?: boolean };
  const mobileSections: Array<{ id: string; title: string; links: MobileLink[] }> = [
    {
      id: 'services',
      title: t('nav.services'),
      links: [
        { to: '/ydelser', title: t('nav.allServices'), highlight: true },
        { to: '/modebooking-priser', title: t('footer.links.meetingBooking') },
        { to: '/leadgenerering', title: t('footer.links.leadGeneration') },
        { to: '/hvorfor-os', title: t('footer.links.salesOutsourcing') },
      ],
    },
    {
      id: 'digital',
      title: t('nav.digital'),
      links: digitalServices.map((s) => ({ to: s.path, title: s.title })),
    },
    {
      id: 'jobs',
      title: t('nav.jobSeekers'),
      links: [
        ...jobListings.map((job) => ({ to: job.path, title: t(`jobListings.${job.key}.title`) })),
        { to: '/freelance-telemarketing', title: t('nav.allJobs'), highlight: true },
      ],
    },
    {
      id: 'partner',
      title: t('nav.collaboration'),
      links: partnerOptions.map((o) => ({ to: o.path, title: o.title })),
    },
    {
      id: 'blog',
      title: t('nav.blog'),
      links: [
        { to: '/blog', title: t('nav.allArticles'), highlight: true },
        ...blogCategoryOrder.map((id, i) => ({ to: `/blog#${id}`, title: blogCategories[i]?.label ?? '' })),
      ],
    },
  ];

  const dropdownClass = 'absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 px-2 z-50';

  return (
    <header
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 ${
        isScrolled ? 'shadow-sm py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <Phone size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Magnora Marketing
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>{t('nav.home')}</NavLink>
            <NavLink to="/ydelser" className={navLinkClass}>{t('nav.services')}</NavLink>

            {/* Digital dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1 text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={toggleDigitalDropdown}
              >
                {t('nav.digital')} <ChevronDown size={14} className={`transition-transform ${isDigitalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDigitalDropdownOpen && (
                <div className={dropdownClass}>
                  {digitalServices.map((s) => (
                    <Link key={s.path} to={s.path} className={dropdownItemClass}>{s.title}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Jobs dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1 text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={toggleJobsDropdown}
              >
                {t('nav.jobSeekers')} <ChevronDown size={14} className={`transition-transform ${isJobsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isJobsDropdownOpen && (
                <div className={dropdownClass}>
                  {jobListings.map((job) => (
                    <Link key={job.path} to={job.path} className={dropdownItemClass}>{t(`jobListings.${job.key}.title`)}</Link>
                  ))}
                  <div className="my-1 border-t border-slate-100" />
                  <Link to="/freelance-telemarketing" className={`${dropdownItemClass} font-semibold text-blue-600`}>{t('nav.allJobs')}</Link>
                </div>
              )}
            </div>

            {/* Samarbejde dropdown */}
            <div className="relative">
              <button
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1 text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={togglePartnerDropdown}
              >
                {t('nav.collaboration')} <ChevronDown size={14} className={`transition-transform ${isPartnerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPartnerDropdownOpen && (
                <div className={dropdownClass}>
                  {partnerOptions.map((o) => (
                    <Link key={o.path} to={o.path} className={dropdownItemClass}>{o.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/om-os" className={navLinkClass}>{t('nav.about')}</NavLink>
            <NavLink to="/blog" className={navLinkClass}>{t('nav.blog')}</NavLink>
            <NavLink to="/kontakt" className={navLinkClass}>{t('nav.contact')}</NavLink>

            <LanguageSwitcher />

            <Link to="/kontakt" className="ml-2 btn btn-primary text-sm px-5 py-2.5">
              {t('nav.cta')}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              className="p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu – accordion: one section open at a time */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="bg-white border-t border-slate-100 flex flex-col px-4 py-4 gap-1">
          <NavLink to="/" className={navLinkClass} end onClick={toggleMenu}>{t('nav.home')}</NavLink>
          {mobileSections.map((section) => {
            const isOpen = openMobileSection === section.id;
            return (
              <div key={section.id} className="border-b border-slate-100 last:border-b-0">
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isOpen ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
                  onClick={() => toggleMobileSection(section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-section-${section.id}`}
                >
                  {section.title}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={`mobile-section-${section.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-4 pr-2 pb-2 pt-1 flex flex-col">
                    {section.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block py-2 px-2 text-sm rounded-lg hover:text-blue-600 hover:bg-slate-50 ${link.highlight ? 'font-semibold text-blue-600' : 'text-slate-600'}`}
                        onClick={toggleMenu}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <NavLink to="/om-os" className={navLinkClass} onClick={toggleMenu}>{t('nav.about')}</NavLink>
          <NavLink to="/kontakt" className={navLinkClass} onClick={toggleMenu}>{t('nav.contact')}</NavLink>
          <Link to="/kontakt" className="mt-2 btn btn-primary text-center" onClick={toggleMenu}>{t('nav.cta')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
