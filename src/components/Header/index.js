import { MenuIcon, XIcon } from '@heroicons/react/solid'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { EmailIcon, LinkedinIcon, WhatsappIcon } from 'react-share'
import { ReactComponent as GitHub } from '../../utils/assets/github.svg'
import { handleUsersLanguage, usersLanguage } from '../../utils/language/LanguageModel'
import A from '../private/A'
import Button from '../private/Button'
import Div from '../private/Div'
import Toggle from '../Toggle'
import './header-style.css'

const Header = () => {
  const { t } = useTranslation()

  return (
    <Div className="fixed z-10 w-screen bg-transparent transition duration-500">
      <Div className="header-style relative lg:hidden flex flex-row items-center justify-center mx-3 m-2">
        <Div className="flex justify-center w-full">
          <Toggle />
        </Div>
        <Div className="flex items-center space-x-2 md:space-x-6 p-2">
          <A href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
            <LinkedinIcon size={31} borderRadius={10} />
          </A>
          <A href="https://github.com/PacoZG" target="blank">
            <GitHub className="bg-gray-300 h-8 w-8 rounded-md" />
          </A>
          <A
            href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
            target="blank"
          >
            <WhatsappIcon size={31} borderRadius={10} />
          </A>
          <Link to="/cv/contact">
            <EmailIcon size={31} borderRadius={10} />
          </Link>
        </Div>
        <Div className="flex justify-center w-full">
          <Button className="mobile-lang-text-style" onClick={() => handleUsersLanguage()}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </Button>
        </Div>
        <Div className="header-style link-menu">
          <Div className="flex items-center h-12 w-9 ">
            <MenuIcon className=" text-gray-200 border-r border-gray-300 p-1 h-6 w-6" />
          </Div>
          <Div className="mobile-link-group">
            <Link className="mobile-link" to="/cv/presentation">
              {t('Header.presentation')}
            </Link>
            <Link className="mobile-link" to="/cv/skills_strenghts">
              {t('Header.skills')}
            </Link>
            <Link className="mobile-link" to="/cv/experience">
              {t('Header.experience')}
            </Link>
            <Link className="mobile-link" to="/cv/contact">
              {t('Header.contact')}
            </Link>
          </Div>
        </Div>
      </Div>
      <Div className="hidden lg:block">
        <Div className="header-style flex flex-row items-center justify-evenly p-1 shadow-2xl  mr-14 ml-10 m-2">
          <Toggle />
          <Div className="flex items-center space-x-1 md:space-x-6 p-2">
            <A href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
              <LinkedinIcon size={46} round={false} borderRadius={10} />
            </A>
            <A href="https://github.com/PacoZG">
              <GitHub className="bg-gray-300  h-11 w-11 rounded-md" />
            </A>
            <A
              href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
              target="blank"
            >
              <WhatsappIcon size={46} borderRadius={10} />
            </A>
            <Link to="/cv/contact">
              <EmailIcon size={46} borderRadius={10} />
            </Link>
          </Div>
          <Button className="pc-lang-text-style" onClick={() => handleUsersLanguage()}>
            {usersLanguage === 'EN' ? 'ESP' : 'ENG'}
          </Button>
          <Div className="header-style web-link-menu">
            <Div className="icon-container">
              <MenuIcon className="menu-icon" />
              <XIcon className="x-icon" />
            </Div>
            <Div className="pc-link-group">
              <Link className="link" to="/cv/presentation">
                {t('Header.presentation')}
              </Link>
              <Link className="link" to="/cv/skills_strenghts">
                {t('Header.skills')}
              </Link>
              <Link className="link" to="/cv/experience">
                {t('Header.experience')}
              </Link>
              <Link className="link" to="/cv/contact">
                {t('Header.contact')}
              </Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Header
