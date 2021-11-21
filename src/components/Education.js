import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-gray-300 dark:bg-gray-900 flex flex-col items-center p-4 transition duration-300">
      <div className="bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3">
        <h1 className="text-gray-900 pb-1 font-bold border-b-2 border-gray-300">
          {t('education.line1')}
          <a
            className="text-gray-900 underline transition duration-200 hover:text-indigo-600"
            href="https://fullstackopen.com/en/"
            target="blank"
          >
            {t('education.line2')}
          </a>
        </h1>
        <p className="text-gray-300 pt-1 text-justify">{t('education.line3')}</p>
      </div>
      <div className="bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 lg:w-2/3 text-justify">
        <h1 className="text-gray-900 pb-1 font-bold border-b-2 border-gray-300">{t('education.line4')}</h1>
        <p className="text-gray-300  pt-1">{t('education.line5')}</p>
        <p className="text-gray-300  pt-1">{t('education.line6')}</p>
      </div>
      <div className="bg-gray-500 text-gray-900 border-2 border-gray-300 rounded-lg p-4 w-full sm:w-11/12 lg:w-2/3">
        <h1 className="text-gray-900 pb-1 font-bold border-b-2 border-gray-300">{t('education.line7')}</h1>
        <p className="text-gray-300 pt-1">{t('education.line8')}</p>
        <p className="text-gray-300 pt-1">{t('education.line9')}</p>
      </div>
    </div>
  )
}

export default Education
