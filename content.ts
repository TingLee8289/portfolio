import { Locale, PortfolioContent } from './types';
import { zhContent } from './content.zh';
import { enContent } from './content.en';

export const CONTENT: Record<Locale, PortfolioContent> = {
  zh: zhContent,
  en: enContent,
};
