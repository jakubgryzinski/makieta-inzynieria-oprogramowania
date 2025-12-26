import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../locales/pl.json';

i18n.use(initReactI18next).init({
  resources: {
    pl: translations
  },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: { escapeValue: false }
});

export default i18n;
