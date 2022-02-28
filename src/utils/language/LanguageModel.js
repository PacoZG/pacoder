import i18n from 'i18next'
import localdb from '../../utils/localdb'

export let usersLanguage = localdb.getLanguage() ? localdb.getLanguage() : 'EN'

const defaultLanguage = window.navigator.userLanguage || window.navigator.language

if (!localdb.getLanguage() && defaultLanguage === 'es-ES') {
  i18n.changeLanguage('ES')
  localdb.setLanguage('ES')
  usersLanguage = 'EN'
}

export const handleUsersLanguage = () => {
  if (usersLanguage === 'EN') {
    i18n.changeLanguage('ES')
    localdb.setLanguage('ES')
    usersLanguage = 'ES'
  } else {
    i18n.changeLanguage('EN')
    localdb.setLanguage('EN')
    usersLanguage = 'EN'
  }
}
