import i18n from '../i18n.config';
import { LOCALE_MAP } from './constants';

export const getLocale = () => LOCALE_MAP[i18n.language] ?? LOCALE_MAP.en;
