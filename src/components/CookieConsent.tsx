import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p>
            Vi bruger cookies for at give dig den bedste oplevelse på vores hjemmeside. 
            Ved at fortsætte accepterer du vores brug af cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
          >
            Acceptér
          </button>
          <a
            href="/cookies"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium"
          >
            Læs mere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;