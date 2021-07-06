import React from 'react'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-green-100 flex flex-col items-center p-4 ">
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className=" pb-1 font-bold">
          {t('education.line1')}
          <a
            className="text-indigo-600 hover:text-red-800 hover:underline"
            href="https://fullstackopen.com/en/"
            target="blank"
          >
            {t('education.line2')}
          </a>
        </h1>
        <p className=" border-t-2 border-gray-700 pt-1 text-justify">{t('education.line3')}</p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3 text-justify">
        <h1 className=" pb-1 font-bold">{t('education.line4')}</h1>
        <p className=" border-t-2 border-gray-700 pt-1">{t('education.line5')}</p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 md:w-2/3">
        <h1 className="pb-1 font-bold">{t('education.line6')}</h1>
        <p className="border-t-2 border-gray-700 pt-1">Universidad Politécnica de Cartagena</p>
      </div>
    </div>
  )
}

export default Education
