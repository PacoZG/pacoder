import React from 'react'
import { useTranslation } from 'react-i18next'
import { FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton } from 'react-share'
import { LocationMarkerIcon, AtSymbolIcon } from '@heroicons/react/solid'
import Div from './private/Div'
import A from './private/A'
import P from './private/P'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Div className="relative inset-x-0 bottom-0 p-4 pt-3 pb-3 bg-blue-1000 border-t border-black dark:border-gray-200 transition duration-500">
      <Div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-2 md:space-y-0 md:p-2">
        <Div className="flex flex-col items-center md:items-start space-y-2">
          <Div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 ">
            <Div className="flex items-center space-x-1">
              <LocationMarkerIcon className="h-3 w-3 text-gray-300" />
              <P className="text-gray-300 text-sm md:pl-1">Helsinki, Finland</P>
            </Div>
          </Div>
          <Div className="flex space-x-1 items-center">
            <AtSymbolIcon className="h-4 w-4 text-gray-300" />
            <P className="text-gray-300 text-sm space-y-2 md:space-y-0 ">contact@pacoderzavala.com</P>
          </Div>
        </Div>
        <Div>
          <Div className="flex flex-col items-center space-y-2">
            <P className="text-center text-gray-300 text-xs font-semibold">{t('Footer.share-cv')}</P>
            <Div className="flex items-center justify-between gap-4">
              <Div>
                <FacebookShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
              </Div>
              <Div>
                <LinkedinShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <LinkedinIcon size={24} round={true} />
                </LinkedinShareButton>
              </Div>
            </Div>
          </Div>
        </Div>

        <Div className="flex flex-col items-center md:items-start space-y-1">
          <P className="text-sm text-gray-300">{t('Footer.developed-by')}</P>
          <A
            href="https://www.linkedin.com/in/francisco-zavala"
            target="blank"
            className="hover:text-gray-400 text-gray-300 text-sm"
          >
            <Div className="flex items-center space-x-1">
              <LinkedinIcon size={28} round={true} />
              <P>{'Francisco Zavala'}</P>
            </Div>
          </A>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer
