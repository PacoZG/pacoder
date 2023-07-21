import { AtSymbolIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share'
import Contact from './Contact'
import A from './private/A'
import Div from './private/Div'
import P from './private/P'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Div className="relative flex justify-center inset-x-0 bottom-0 bg-blue-500 dark:bg-blue-900 border-0 transition duration-500 w-full">
      <Div className="flex justify-center w-full">
        {/* Web view */}
        <Div className="hidden sm:flex flex-row items-start justify-center sm-gap-8 md:gap-10 lg:gap-14 w-full sm:w-11/12 lg:w-10/12 ">
          <Contact />

          <Div className="flex flex-col items-center gap-6 pt-10">
            <Div className="flex flex-col items-center justify-center gap-4">
              <P className="text-center transition duration-500 text-gray-900 dark:text-gray-300  text-sm font-semibold">
                {t('Footer.developed-by')}
              </P>

              <A
                href="https://www.linkedin.com/in/francisco-zavala"
                target="blank"
                className="hover:text-gray-400 transition duration-500 text-gray-900 dark:text-gray-300  text-md"
              >
                <Div className="flex items-center gap-1">
                  <LinkedinIcon size={28} round={true} />

                  <P>{'Francisco Zavala'}</P>
                </Div>
              </A>
            </Div>

            <Div className="flex space-x-1 items-center">
              <AtSymbolIcon className="h-4 w-4  transition duration-500 text-gray-900 dark:text-gray-300" />

              <P className="transition duration-500 text-gray-900 dark:text-gray-300 space-y-2 md:space-y-0 ">
                contact@pacoderzavala.com
              </P>
            </Div>

            <Div className=" hidden sm:flex flex-col items-center space-y-2">
              <P className="text-center transition duration-500 text-gray-900 dark:text-gray-300 font-semibold">
                {t('Footer.share-cv')}
              </P>

              <Div className="flex items-center justify-between gap-4">
                <Div>
                  <FacebookShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                    <FacebookIcon size={28} round={true} />
                  </FacebookShareButton>
                </Div>

                <Div>
                  <LinkedinShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                    <LinkedinIcon size={28} round={true} />
                  </LinkedinShareButton>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        {/* Mobile view */}
        <Div className="sm:hidden flex flex-col items-center justify-around w-full pb-6">
          <Contact />

          <Div className="flex flex-col items-center gap-2 pt-6">
            <Div className="flex flex-col items-center md:items-start space-y-2">
              <P className="text-center transition duration-500 text-gray-900 dark:text-gray-300  text-sm font-semibold">
                {t('Footer.developed-by')}
              </P>

              <A
                href="https://www.linkedin.com/in/francisco-zavala"
                target="blank"
                className="hover:text-gray-400 transition duration-500 text-gray-900 dark:text-gray-300  text-md"
              >
                <Div className="flex items-center gap-1">
                  <LinkedinIcon size={28} round={true} />

                  <P>{'Francisco Zavala'}</P>
                </Div>
              </A>
            </Div>

            <Div className="flex items-center gap-1 ">
              <AtSymbolIcon className="h-4 w-4 transition duration-500 text-gray-900 dark:text-gray-300 " />

              <P className=" transition duration-500 text-gray-900 dark:text-gray-300  text-md space-y-2 md:space-y-0 ">
                contact@pacoderzavala.com
              </P>
            </Div>

            <P className="text-center transition duration-500 text-gray-900 dark:text-gray-300  text-sm font-semibold">
              {t('Footer.share-cv')}
            </P>

            <Div className="flex items-center justify-between gap-4">
              <Div>
                <FacebookShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <FacebookIcon size={28} round={true} />
                </FacebookShareButton>
              </Div>

              <Div>
                <LinkedinShareButton url={window.location.href} className=" font-medium focus-within:outline-none ">
                  <LinkedinIcon size={28} round={true} />
                </LinkedinShareButton>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer
