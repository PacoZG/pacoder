import React from 'react'
import { useTranslation } from 'react-i18next'
import './education-style.css'
import A from '../private/A'
import Div from '../private/Div'
import H from '../private/H'
import P from '../private/P'

const Education = () => {
  const { t } = useTranslation()
  return (
    <Div className="bg-gray-400 dark:bg-gray-900 flex flex-col items-center p-4 md:py-10 lg:py-20 transition duration-500 rounded-b-xl bg-opacity-70 dark:bg-opacity-70">
      <Div className="flex flex-col justify-center bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3 sm:h-44 md:h-40 xl:h-36">
        <H className=" md:text-xl text-gray-900 pb-1 font-bold border-b-2 border-gray-300">
          <A
            className="text-gray-900 underline transition duration-200 hover:text-indigo-600 hover:no-underline"
            href="https://devopswithkubernetes.com/"
            target="blank"
          >
            {t('education.line12')}
          </A>
        </H>
        <P className="text-gray-300 pt-3 text-justify">{t('education.line11')}</P>
      </Div>
      <Div className="flex flex-col justify-center bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3 sm:h-44 md:h-40 xl:h-36">
        <H className=" md:text-xl text-gray-900 pb-1 font-bold border-b-2 border-gray-300">
          <A
            className="text-gray-900 underline transition duration-200 hover:text-indigo-600 hover:no-underline"
            href="https://devopswithdocker.com/"
            target="blank"
          >
            {t('education.line10')}
          </A>
        </H>
        <P className="text-gray-300 pt-3 text-justify">{t('education.line9')}</P>
      </Div>
      <Div className="flex flex-col justify-center bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3 sm:h-60 md:h-56 xl:h-48">
        <H className=" md:text-xl text-gray-900 pb-1 font-bold border-b-2 border-gray-300">
          <A
            className="text-gray-900 underline transition duration-200 hover:text-indigo-600 hover:no-underline"
            href="https://fullstackopen.com/en/"
            target="blank"
          >
            {t('education.line8')}
          </A>
        </H>
        <P className="text-gray-300 pt-3 text-justify">{t('education.line7')}</P>
      </Div>
      <Div className="flex flex-col justify-center bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3 md:h-36 text-justify">
        <H className=" md:text-xl text-gray-900 pb-1 font-bold border-b-2 border-gray-300">{t('education.line6')}</H>
        <P className="text-gray-300  pt-3">{t('education.line5')}</P>
        <A
          education-tool-tip-msg={t('education.tool-tip-msg')}
          className="text-gray-300  pt-1 underline hover:no-underline transition duration-500"
          href="https://www.aalto.fi/en/school-of-electrical-engineering"
          target="blank"
        >
          {t('education.line4')}
        </A>
      </Div>
      <Div className="flex flex-col justify-center bg-gray-500 text-gray-900 border-2 border-gray-300 rounded-lg p-4 w-full sm:w-11/12 lg:w-2/3 md:h-36">
        <H className=" md:text-xl text-gray-900 pb-1 font-bold border-b-2 border-gray-300">{t('education.line3')}</H>
        <P className="text-gray-300 pt-3">{t('education.line2')}</P>
        <A
          education-tool-tip-msg={t('education.tool-tip-msg')}
          className="text-gray-300 pt-1 underline hover:no-underline transition duration-500"
          href="http://www.upct.es"
          target="blank"
        >
          {t('education.line1')}
        </A>
      </Div>
    </Div>
  )
}

export default Education
