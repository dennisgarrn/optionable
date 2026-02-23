import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_LOCALES } from '../utils/constants';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguageState] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('language');
            return saved || LANGUAGE_LOCALES.EN;
        }
        return LANGUAGE_LOCALES.EN;
    });

    const setLanguage = (newLanguage) => {
        setLanguageState(newLanguage);
        localStorage.setItem('language', newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const value = { language, setLanguage };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
