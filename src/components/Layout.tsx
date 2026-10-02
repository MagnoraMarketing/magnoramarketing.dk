import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import TrialWidget from './TrialWidget';
import MobileBottomNav from './MobileBottomNav';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Pilot-period widget targets businesses looking to collaborate, not job seekers or the contact page
const TRIAL_WIDGET_PATHS = [
  '/', '/samarbejdspartner', '/ydelser', '/priser', '/hvorfor-os', '/modebooking-priser', '/leadgenerering',
  // Blog posts in the "Samarbejde & Vækst" category
  '/blog/hvorfor-samarbejde-magnora',
  '/blog/ideudvikling-med-magnora',
  '/blog/fra-ide-til-salg',
  '/blog/moedebooking-partner-magnora',
  '/blog/outsource-moedebooking-fordele',
  '/blog/telesalg-partner-magnora',
  '/blog/b2b-telesalg-samarbejde',
  '/blog/vaekstpartner-ide-moedebooking-telesalg',
  '/blog/saadan-foregaar-samarbejdet',
  '/blog/hvorfor-outsource-salg-og-moedebooking',
];
const showTrialWidgetOn = (pathname: string) => {
  const path = pathname.replace(/\/+$/, '') || '/';
  return TRIAL_WIDGET_PATHS.includes(path) || path.startsWith('/digital/');
};

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  
  useEffect(() => {
    const hasCookieConsent = localStorage.getItem('cookieConsent');
    if (!hasCookieConsent) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      {showTrialWidgetOn(pathname) && <TrialWidget liftForCookieBanner={showCookieConsent} />}
      {showCookieConsent && (
        <CookieConsent onAccept={handleAcceptCookies} />
      )}
    </div>
  );
};

export default Layout;