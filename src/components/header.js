import React, { useState } from 'react'
import i18n from 'i18next'
import localdb from '../utils/localdb'
import { EmailIcon, LinkedinIcon, WhatsappIcon } from 'react-share'
import { ReactComponent as GitHub } from '../utils/assets/github.svg'
import Toggle from './Toggle'

const Header = () => {
  const usersLanguage = localdb.getLanguage() ? localdb.getLanguage() : 'EN'
  const [language, setLanguage] = useState(usersLanguage)

  const handleLanguage = lang => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    localdb.setLanguage(lang)
  }
  return (
    <div className="bg-gray-300 dark:bg-gray-900 transition duration-300">
      <div className="md:hidden flex flex-row items-center justify-center">
        <div className="flex justify-center w-full">
          <Toggle />
        </div>
        <div className="flex items-center space-x-2 md:space-x-6 p-2">
          <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
            <LinkedinIcon size={36} borderRadius={10} />
          </a>
          <a href="https://github.com/PacoZG" target="blank">
            <GitHub className="bg-gray-300 h-9 w-9 rounded-md" />
          </a>
          <a
            href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
            target="blank"
          >
            <WhatsappIcon size={36} borderRadius={10} />
          </a>
          <a href="mailto:pako.zavala@gmail.com" target="blank">
            <EmailIcon size={36} borderRadius={10} />
          </a>
        </div>
        <div className="flex justify-center w-full">
          {language === 'ES' ? (
            <button
              className="text-gray-700 dark:text-gray-300 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
              onClick={() => handleLanguage('EN')}
            >
              ENG
            </button>
          ) : (
            <button
              className="text-gray-700 dark:text-gray-300 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
              onClick={() => handleLanguage('ES')}
            >
              ESP
            </button>
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row items-center justify-evenly">
          <Toggle />

          <div className="flex items-center space-x-1 md:space-x-6 p-2">
            <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
              <LinkedinIcon round={false} borderRadius={10} />
            </a>
            <a href="https://github.com/PacoZG" target="blank">
              <GitHub className="bg-gray-300 rounded-md" />
            </a>
            <a
              href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
              target="blank"
            >
              <WhatsappIcon borderRadius={10} />
            </a>
            <a href="mailto:pako.zavala@gmail.com" target="blank">
              <EmailIcon size={64} borderRadius={10} />
            </a>
          </div>
          <div>
            {language === 'ES' ? (
              <button
                className="text-gray-700 dark:text-gray-300 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
                onClick={() => handleLanguage('EN')}
              >
                ENG
              </button>
            ) : (
              <button
                className="text-gray-700 dark:text-gray-300 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
                onClick={() => handleLanguage('ES')}
              >
                ESP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
