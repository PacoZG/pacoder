import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translations.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  en: ['translationsEN'],
  defaultEN: 'translationsEN',
  debug: false,
  resources: {
    en: {
      translation: translationEN,
    },
  },
})

export default i18n
