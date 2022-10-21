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
    <Div className="flex justify-center bg-gray-400 dark:bg-gray-900 p-3 md:p-10 w-full transition duration-500 bg-opacity-70 dark:bg-opacity-70">
      <Div className="flex flex-col items-center sm:flex-row justify-center sm:w-11/12 lg:w-9/12 ">
        <Img
          className=" h-96 sm:h-80 md:h-96 lg:w-80 border-0 rounded-lg transition duration-500 "
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/q_auto/v1653152856/CV%20Pics/idyfixrp3nzidjjezeuc.jpg"
          alt="profile"
        />
        <Div className="p-10 md:p-12 md:pr-0 md:pt-8 w-full lg:w-3/4">
          <H className="text-2xl text-black dark:text-gray-300 text-right transition duration-500">
            {t('Presentation.line0')}
            <Span className="text-blue-800 dark:text-blue-300 text-right text-2xl transition duration-500">
              FRANCISCO ZAVALA GONZALEZ
            </Span>
          </H>
          <P className="text-black dark:text-gray-300 text-right text-xl transition duration-500">
            Full Stack Developer
          </P>{' '}
          <br />
          <P className="text-lg text-black dark:text-gray-300 text-right transition duration-500">
            {t('Presentation.line1')}
          </P>
          <P className="text-lg text-black dark:text-gray-300 text-right transition duration-500">
            {t('Presentation.line2')}
          </P>
        </Div>
      </Div>
    </Div>
  )
}

export default WhoIAm
