import React from 'react'
import { useTranslation } from 'react-i18next'
import { FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton } from 'react-share'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="relative inset-x-0 bottom-0 z-30 p-4 pt-3 pb-3 bg-gray-800">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-2 md:space-y-0 md:p-2">
        <div className="flex flex-col items-center  md:items-start space-y-2">
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 ">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-gray-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-200 text-sm">Myllärintanhua 6 J 35</p>
            </div>
            <p className="text-gray-200 text-sm md:pl-4">00920, Helsinki</p>
          </div>
          <div className="flex space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-200 text-sm space-y-2 md:space-y-0 ">0449 888032</p>
          </div>
          <div className="flex space-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <p className="text-gray-200 text-sm space-y-2 md:space-y-0 ">pako.zavala@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-200 text-xs font-semibold">{t('Footer.share-cv')}</p>
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
          <p className="text-sm text-gray-200">{t('Footer.developed-by')}</p>
          <a
            href="https://www.linkedin.com/in/francisco-zavala"
            target="blank"
            className="hover:text-gray-400 text-gray-200 text-sm"
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
