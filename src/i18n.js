import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './utils/language/en/translations.json'
import translationES from './utils/language/es/translations.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      EN: {
        translation: translationEN,
      },
      ES: {
        translation: translationES,
      },
    },
  })

export default i18n
