import React from 'react';
import { useTranslation } from 'react-i18next';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p>
            {t('cookieConsent.message')}
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
          >
            {t('cookieConsent.accept')}
          </button>
          <a
            href="/cookies"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium"
          >
            {t('cookieConsent.readMore')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;