import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
 
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'pt'],
 
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
 
export default i18n;