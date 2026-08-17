import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import da from './locales/da';
import en from './locales/en';
import es from './locales/es';

const isBrowser = typeof window !== 'undefined';

// Language detection relies on browser APIs (localStorage/navigator), so it is
// only enabled in the browser. During static pre-rendering (Node) we default to
// Danish, which is the canonical language we want indexed.
if (isBrowser) {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      da: { translation: da },
      en: { translation: en },
      es: { translation: es },
    },
    lng: isBrowser ? undefined : 'da',
    fallbackLng: 'da',
    supportedLngs: ['da', 'en', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
