import { getLocale } from './getLocale';

// Date formatters
export const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(getLocale(), {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    });
};

export const formatDateShort = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(getLocale(), {
        month: 'short',
        day: 'numeric'
    });
};

// Currency formatter
export const formatCurrency = (val) => {
    return new Intl.NumberFormat(getLocale(), {
        style: 'currency',
        currency: 'USD'
    }).format(val);
};

// Percentage formatter
export const formatPercent = (val) => {
    return new Intl.NumberFormat(getLocale(), {
        style: 'percent',
        minimumFractionDigits: 2
    }).format(val / 100);
};
