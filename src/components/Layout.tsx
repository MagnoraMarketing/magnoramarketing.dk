import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
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
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={handleAcceptCookies} />
      )}
    </div>
  );
};

export default Layout;