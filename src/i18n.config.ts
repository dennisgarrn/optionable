import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/locales/en.json';
import de from './i18n/locales/de.json';
import { LANGUAGE_LOCALES } from './utils/constants';

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
const initialLanguage = savedLanguage || LANGUAGE_LOCALES.EN;

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        lng: initialLanguage,
        fallbackLng: LANGUAGE_LOCALES.EN,
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;