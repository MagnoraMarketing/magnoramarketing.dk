import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { jobListings } from '../data/jobListings';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isDigitalDropdownOpen, setIsDigitalDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
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
    { path: '/digital/webudvikling', title: 'Webudvikling' },
    { path: '/digital/api-saas', title: 'API & SaaS' },
    { path: '/digital/hjemmesider', title: 'Hjemmesider' },
    { path: '/digital/ai-integration', title: 'AI Integration' },
    { path: '/digital/ai-widget', title: '✦ AI Widget' },
    { path: '/digital/ai-reception', title: '✦ AI Receptionist' }
  ];

  const partnerOptions = [
    { path: '/samarbejdspartner', title: 'Bliv samarbejdspartner' },
    { path: '/priser', title: 'Priser & Pakker' },
    { path: '/hvorfor-os', title: 'Hvorfor Magnora Marketing?' },
    { path: '/modebooking-priser', title: 'Mødebooking' },
    { path: '/leadgenerering', title: 'Leadgenerering' }
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
                    <Link key={job.path} to={job.path} className={dropdownItemClass}>{job.title}</Link>
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

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white border-t border-slate-100 flex flex-col px-4 py-4 gap-1">
          <NavLink to="/" className={navLinkClass} end onClick={toggleMenu}>{t('nav.home')}</NavLink>
          <NavLink to="/ydelser" className={navLinkClass} onClick={toggleMenu}>{t('nav.services')}</NavLink>
          <div className="py-2 px-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('nav.digital')}</div>
            {digitalServices.map((s) => (
              <Link key={s.path} to={s.path} className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg" onClick={toggleMenu}>{s.title}</Link>
            ))}
          </div>
          <div className="py-2 px-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('nav.jobSeekers')}</div>
            {jobListings.map((job) => (
              <Link key={job.path} to={job.path} className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg" onClick={toggleMenu}>{job.title}</Link>
            ))}
            <Link to="/freelance-telemarketing" className="block py-2 px-2 text-sm font-semibold text-blue-600" onClick={toggleMenu}>{t('nav.allJobs')}</Link>
          </div>
          <div className="py-2 px-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('nav.collaboration')}</div>
            {partnerOptions.map((o) => (
              <Link key={o.path} to={o.path} className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg" onClick={toggleMenu}>{o.title}</Link>
            ))}
          </div>
          <NavLink to="/om-os" className={navLinkClass} onClick={toggleMenu}>{t('nav.about')}</NavLink>
          <NavLink to="/blog" className={navLinkClass} onClick={toggleMenu}>{t('nav.blog')}</NavLink>
          <NavLink to="/kontakt" className={navLinkClass} onClick={toggleMenu}>{t('nav.contact')}</NavLink>
          <Link to="/kontakt" className="mt-2 btn btn-primary text-center" onClick={toggleMenu}>{t('nav.cta')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
