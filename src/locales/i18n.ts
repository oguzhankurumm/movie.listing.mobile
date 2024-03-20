import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';

import { DEFAULT_LANGUAGE, languageDetector } from './localesHelpers';
import englishTranslation from './en.json';

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    nonExplicitSupportedLngs: true,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: true,
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        translation: englishTranslation,
      },
    },
  });

export default i18next;
