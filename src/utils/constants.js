// API Configuration
export const API_URL = '/api';

// App Version
export const APP_VERSION = '0.13.0';

// Pagination (default fallback — configurable via Settings)
export const TRADES_PER_PAGE = 5;

// Language Locales
export const LANGUAGE_LOCALES = {
    EN: 'en',
    DE: 'de',
};

// Mapping of i18n language codes to JavaScript locale strings
export const LOCALE_MAP = {
    en: 'en-US',
    de: 'de-DE',
};

// Status values
export const STATUS = {
    OPEN: 'Open',
    EXPIRED: 'Expired',
    ASSIGNED: 'Assigned',
    CLOSED: 'Closed',
    ROLLED: 'Rolled'
};

// Trade types
export const TRADE_TYPE = {
    CSP: 'CSP',
    CC: 'CC'
};

// Status filter options
export const STATUS_FILTERS = {
    ALL: 'all',
    OPEN: 'open',
    CLOSED: 'closed'
};

// Fund transaction types
export const FUND_TRANSACTION_TYPES = [
    { value: 'deposit', label: 'Deposit' },
    { value: 'withdrawal', label: 'Withdrawal' },
    { value: 'dividend', label: 'Dividend' },
    { value: 'interest', label: 'Interest' },
    { value: 'fee', label: 'Fee' },
];

// App tabs
export const TABS = {
    OPTIONS: 'options',
    PORTFOLIO: 'portfolio'
};
