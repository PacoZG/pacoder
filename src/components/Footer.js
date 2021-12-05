import React from 'react'
import { useTranslation } from 'react-i18next'
import { FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton } from 'react-share'
import { ReactComponent as Address } from '../utils/assets/address.svg'
import { ReactComponent as Email } from '../utils/assets/email.svg'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="relative inset-x-0 bottom-0 p-4 pt-3 pb-3 bg-blue-1000 border-t border-black dark:border-gray-200 transition duration-500">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-2 md:space-y-0 md:p-2">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 ">
            <div className="flex items-center space-x-1">
              <Address className="h-3 w-3 text-gray-300" />
              <p className="text-gray-300 text-sm md:pl-1">00920, Helsinki</p>
            </div>
          </div>
          <div className="flex space-x-1 items-center">
            <Email className="h-4 w-4 text-gray-300" />
            <p className="text-gray-300 text-sm space-y-2 md:space-y-0 ">pako.zavala@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-300 text-xs font-semibold">{t('Footer.share-cv')}</p>
            <div className="flex items-center justify-between space-x-4">
              <div>
                <FacebookShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
              </div>
              <div>
                <p className="text-white text-base pb-1">{' & '}</p>
              </div>
              <div>
                <LinkedinShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <LinkedinIcon size={24} round={true} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="text-sm text-gray-300">{t('Footer.developed-by')}</p>
          <a
            href="https://www.linkedin.com/in/francisco-zavala"
            target="blank"
            className="hover:text-gray-400 text-gray-300 text-sm"
          >
            <div className="flex items-center space-x-1">
              <LinkedinIcon size={28} round={true} />
              <p>{' Francisco Zavala'}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
