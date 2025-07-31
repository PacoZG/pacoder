import { AtSymbolIcon } from '@heroicons/react/24/outline' // Using 24/outline for consistency
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share'
import Contact from '../Contact'
import Div from '../private/Div'
import P from '../private/P'
import A from '../private/A'

const Footer = () => {
  const { t } = useTranslation()
  return (
    // Main footer container: Apply consistent background colors and shadow
    <Div
      className="relative flex justify-center inset-x-0 bottom-0 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 transition duration-500 w-full shadow-lg py-8 md:py-10"
      id="contact-form"
    >
      {/* Central content wrapper, consistent with page content width */}
      <Div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly w-full sm:w-11/12 lg:w-9/12 gap-8 md:gap-10 lg:gap-14">
        {/* Contact Form (assuming this is rendered by the Contact component) */}
        {/* If Contact component internally adapts for mobile/desktop, it's fine */}
        <Contact />

        {/* Developer Info & Share Section */}
        {/* Consolidated into one block with responsive classes */}
        <Div className="flex flex-col items-center sm:items-start gap-6 pt-6 sm:pt-0 text-center sm:text-left">
          <Div className="flex flex-col items-center sm:items-start gap-2">
            <P className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase">
              {t('Footer.developed-by')}
            </P>

            <A
              href="https://www.linkedin.com/in/francisco-zavala"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-lg flex items-center gap-2"
            >
              <LinkedinIcon size={24} round={true} />

              <P className="text-gray-700 dark:text-gray-400 text-lg">Francisco Zavala</P>
            </A>
          </Div>

          {/* Email Contact */}
          <Div className="flex items-center gap-2">
            <AtSymbolIcon className="h-5 w-5 text-blue-600 dark:text-blue-300" />

            <P className="text-gray-700 dark:text-gray-300 text-lg">contact@pacoderzavala.com</P>
          </Div>

          {/* Share My Website */}
          <Div className="flex flex-col items-center sm:items-start gap-3 mt-4">
            <P className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase">{t('Footer.share-cv')}</P>

            <Div className="flex items-center justify-center gap-4">
              <FacebookShareButton url={window.location.href} className="focus-within:outline-none">
                <FacebookIcon size={28} round={true} />
              </FacebookShareButton>

              <LinkedinShareButton url={window.location.href} className="focus-within:outline-none">
                <LinkedinIcon size={28} round={true} />
              </LinkedinShareButton>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Footer
