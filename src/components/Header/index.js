import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LinkedinIcon, WhatsappIcon } from 'react-share'
import { ReactComponent as GitHub } from '../../utils/assets/github.svg'
import { handleUsersLanguage, usersLanguage } from '../../utils/language/LanguageModel'
import A from '../private/A'
import Button from '../private/Button'
import Div from '../private/Div'
import Toggle from '../Toggle'
import './header-style.css'
import { Home } from 'lucide-react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'

const Header = () => {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Div className="fixed z-50 w-screen bg-gray-100 dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition duration-500 shadow-md">
      {/* Mobile Header */}
      <Div className="md:hidden flex items-center justify-between px-4 py-2">
        {/* Home Icon instead of Name */}
        <Link to="/" className="p-2 text-blue-700 dark:text-blue-400">
          <Home className="h-7 w-7" />
        </Link>

        <Div className="flex items-center gap-4">
          <Toggle />

          <Button className="mobile-lang-text-style" onClick={handleUsersLanguage}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </Button>

          <Button onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7 text-gray-800 dark:text-blue-200" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-gray-800 dark:text-blue-200" />
            )}
          </Button>
        </Div>

        {/* Mobile Menu Content (conditionally rendered and animated) */}
        {isMobileMenuOpen && (
          <Div className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 shadow-lg flex flex-col items-center py-4 space-y-3 animation-slide-down">
            <Link className="mobile-nav-link" to="/cv/presentation" onClick={toggleMobileMenu}>
              {t('Header.presentation')}
            </Link>

            <Link className="mobile-nav-link" to="/cv/skills_strenghts" onClick={toggleMobileMenu}>
              {t('Header.skills')}
            </Link>

            <Link className="mobile-nav-link" to="/cv/experience" onClick={toggleMobileMenu}>
              {t('Header.experience')}
            </Link>

            <Div className="flex items-center gap-4 pt-3 border-t border-gray-300 dark:border-gray-700 w-3/4 justify-center">
              <A href="https://www.linkedin.com/in/francisco-zavala/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={31} borderRadius={10} />
              </A>

              <A href="https://github.com/PacoZG" target="_blank" rel="noopener noreferrer">
                <GitHub className="bg-gray-300 h-8 w-8 rounded-full dark:bg-gray-700" />
              </A>

              <A
                href="https://wa.me/358449888032?text=I%20would%20love%20to%20contact%20you%20for%20a%20possible%20interview."
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon size={31} borderRadius={10} />
              </A>
            </Div>
          </Div>
        )}
      </Div>

      {/* Desktop Header */}
      <Div className="hidden md:flex items-center justify-between px-8 py-3">
        <Div className="flex items-center gap-2">
          {/* Home Icon instead of Name */}
          <Link to="/" className="p-2 text-blue-700 dark:text-blue-400">
            <Home className="h-8 w-8" />
          </Link>
          <Toggle />
        </Div>

        <Div className="flex items-center gap-2 lg:gap-12">
          <Link className="desktop-nav-link" to="/cv/presentation">
            {t('Header.presentation')}
          </Link>

          <Link className="desktop-nav-link" to="/cv/skills_strenghts">
            {t('Header.skills')}
          </Link>

          <Link className="desktop-nav-link" to="/cv/experience">
            {t('Header.experience')}
          </Link>
        </Div>

        <Div className="flex items-center gap-4">
          <A href="https://www.linkedin.com/in/francisco-zavala/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={30} borderRadius={10} />
          </A>

          <A href="https://github.com/PacoZG" target="_blank" rel="noopener noreferrer">
            <GitHub className="bg-gray-300 h-8 w-8 rounded-full" />
          </A>

          <A
            href="https://wa.me/358449888032?text=I%20would%20love%20to%20contact%20you%20for%20a%20possible%20interview."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={30} borderRadius={10} />
          </A>

          <Button className="pc-lang-text-style" onClick={handleUsersLanguage}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </Button>
        </Div>
      </Div>
    </Div>
  )
}

export default Header
