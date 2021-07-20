import React from 'react'
import i18n from 'i18next'
import { EmailIcon, LinkedinIcon, WhatsappIcon } from 'react-share'
import { ReactComponent as GitHub } from '../utils/assets/github.svg'

const Header = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-row items-center justify-evenly">
        <button
          className="text-white text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
          onClick={() => i18n.changeLanguage('EN')}
        >
          ENG
        </button>

        <div className="flex items-center space-x-1 md:space-x-6 p-2">
          <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/PacoZG" target="blank">
            <GitHub />
          </a>
          <a
            href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
            target="blank"
          >
            <WhatsappIcon />
          </a>
          <a href="mailto:pako.zavala@gmail.com" target="blank">
            <EmailIcon size={64} />
          </a>
        </div>
        <button
          className="text-white text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-blue-300 duration-700 ease-in-out"
          onClick={() => i18n.changeLanguage('ES')}
        >
          ESP
        </button>
      </div>
    </div>
  )
}

export default Header
