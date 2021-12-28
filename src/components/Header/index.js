import React, { useEffect } from 'react'
import i18n from 'i18next'
import './header-style.css'
import { useTranslation } from 'react-i18next'
import localdb from '../../utils/localdb'
import { Link } from 'react-router-dom'
import { EmailIcon, LinkedinIcon, WhatsappIcon } from 'react-share'
import { ReactComponent as GitHub } from '../../utils/assets/github.svg'
import { ReactComponent as MenuIcon } from '../../utils/assets/menu-icon.svg'
import { ReactComponent as XIcon } from '../../utils/assets/x-icon.svg'
import Toggle from '../Toggle'

const Header = () => {
  const usersLanguage = localdb.getLanguage()
  const { t } = useTranslation()
  useEffect(() => {
    var language = window.navigator.userLanguage || window.navigator.language
    if (!usersLanguage && language === 'es-ES') {
      i18n.changeLanguage('ES')
      localdb.setLanguage('ES')
    }
  }, [usersLanguage])

  const handleLanguage = () => {
    if (usersLanguage === 'EN') {
      i18n.changeLanguage('ES')
      localdb.setLanguage('ES')
    } else {
      i18n.changeLanguage('EN')
      localdb.setLanguage('EN')
    }
  }
  return (
    <div className="fixed z-10 w-screen bg-transparent transition duration-500">
      <div className="header-style relative lg:hidden flex flex-row items-center justify-center mx-3 m-2">
        <div className="flex justify-center w-full">
          <Toggle />
        </div>
        <div className="flex items-center space-x-2 md:space-x-6 p-2">
          <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
            <LinkedinIcon size={31} borderRadius={10} />
          </a>
          <a href="https://github.com/PacoZG" target="blank">
            <GitHub className="bg-gray-300 h-8 w-8 rounded-md" />
          </a>
          <a
            href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
            target="blank"
          >
            <WhatsappIcon size={31} borderRadius={10} />
          </a>
          <a href="mailto:pako.zavala@gmail.com" target="blank">
            <EmailIcon size={31} borderRadius={10} />
          </a>
        </div>
        <div className="flex justify-center w-full">
          <button className="mobile-lang-text-style" onClick={() => handleLanguage()}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </button>
        </div>
        <div className="header-style link-menu">
          <div className="flex items-center h-12 w-9 ">
            <MenuIcon className=" text-gray-200 border-r border-gray-300 p-1 h-7 w-7" />
          </div>
          <div className="mobile-link-group">
            <Link className="mobile-link" to="/intro">
              {t('Header.presentation')}
            </Link>
            <Link className="mobile-link" to="/skills_strenghts">
              {t('Header.skills')}
            </Link>
            <Link className="mobile-link" to="/experience">
              {t('Header.experience')}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="header-style flex flex-row items-center justify-evenly p-1 shadow-2xl  mr-14 ml-10 m-2">
          <Toggle />
          <div className="flex items-center space-x-1 md:space-x-6 p-2">
            <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
              <LinkedinIcon size={46} round={false} borderRadius={10} />
            </a>
            <a href="https://github.com/PacoZG" target="blank">
              <GitHub className="bg-gray-300  h-11 w-11 rounded-md" />
            </a>
            <a
              href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
              target="blank"
            >
              <WhatsappIcon size={46} borderRadius={10} />
            </a>
            <a href="mailto:pako.zavala@gmail.com" target="blank">
              <EmailIcon size={46} borderRadius={10} />
            </a>
          </div>
          <button className="pc-lang-text-style" onClick={() => handleLanguage()}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </button>
          <div className="header-style web-link-menu">
            <div className="icon-container">
              <MenuIcon className="menu-icon" />
              <XIcon className="x-icon" />
            </div>
            <div className="link-group">
              <Link className="link" to="/intro">
                {t('Header.presentation')}
              </Link>
              <Link className="link" to="/skills_strenghts">
                {t('Header.skills')}
              </Link>
              <Link className="link" to="/experience">
                {t('Header.experience')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
