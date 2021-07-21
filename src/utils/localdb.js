const setTheme = theme => {
  localStorage.setItem('usersTheme', JSON.stringify(theme))
}

const getTheme = () => {
  return JSON.parse(localStorage.getItem('usersTheme'))
}

const setLanguage = lang => {
  localStorage.setItem('usersLanguage', JSON.stringify(lang))
}

const getLanguage = () => {
  return JSON.parse(localStorage.getItem('usersLanguage'))
}

module.exports = { setTheme, getTheme, setLanguage, getLanguage }
