import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import H from '../private/H'
import Img from '../private/Img'
import P from '../private/P'
import Span from '../private/Span'

const WhoIAm = () => {
  const { t } = useTranslation()
  return (
    <Div className="flex justify-center bg-gray-400 dark:bg-gray-900 p-3 md:p-10 lg:pl-40 lg:pr-36 w-full transition duration-500 bg-opacity-70 dark:bg-opacity-70">
      <Div className="flex flex-col items-center sm:flex-row justify-center sm:w-11/12 lg:w-9/12 gap-8 sm:gap-12">
        <Img
          className="h-96 sm:h-80 md:h-96 lg:w-80 border-0 rounded-lg shadow-lg transition duration-500 object-cover"
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/q_auto/v1653152856/CV%20Pics/idyfixrp3nzidjjezeuc.jpg"
          alt="Profile of Francisco Zavala Gonzalez"
        />
        {/* Force text-left for all breakpoints, including lg and xl */}
        <Div className="p-4 md:p-6 w-full lg:w-3/4 text-left lg:text-left xl:text-left">
          <H className="text-3xl text-black dark:text-gray-300 transition duration-500 mb-2 font-extrabold">
            {t('Presentation.line0')}
            <Span className="text-blue-800 dark:text-blue-300 ml-2">FRANCISCO ZAVALA GONZALEZ</Span>
          </H>
          <P className="text-xl text-black dark:text-gray-300 transition duration-500 mb-4">Full Stack Developer</P>
          <P className="text-lg text-black dark:text-gray-300 transition duration-500 mb-2 leading-relaxed">
            {t('Presentation.line1')}
          </P>
          <P className="text-lg text-black dark:text-gray-300 transition duration-500 leading-relaxed">
            {t('Presentation.line2')}
          </P>
        </Div>
      </Div>
    </Div>
  )
}

export default WhoIAm
