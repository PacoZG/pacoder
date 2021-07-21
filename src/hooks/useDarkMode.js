import { useEffect, useState } from 'react'
import localdb from '../utils/localdb'
export default function useDarkMode() {
  const usersTheme = localdb.getTheme() ? localdb.getTheme() : 'light'
  const [theme, setTheme] = useState(usersTheme)
  const colorTheme = theme === 'light' ? 'dark' : 'light'
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])
  return [colorTheme, setTheme]
}
