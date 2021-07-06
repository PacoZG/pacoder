import React from 'react'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-green-100 flex flex-col items-center p-4">
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className=" pb-1 font-bold">
          Hotel Kämp - <span className="font-normal">SEPT 2015 - AUG 2020</span>
        </h1>
        <p className=" border-t-2 border-gray-700 pt-1 text-justify">{t('experience.line1')}</p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className="pb-1 font-bold">
          {t('experience.line2')} <span className="font-normal  text-justify">{t('experience.line3')}</span>
        </h1>
        <p className="border-t-2 border-gray-700 pt-1">{t('experience.line4')}</p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 md:w-2/3">
        <h1 className="pb-1 font-bold">
          {t('experience.line5')} <span className="font-normal">{t('experience.line6')}</span>
        </h1>
        <p className="border-t-2 border-gray-700 pt-1  text-justify">{t('experience.line7')}</p>
      </div>
    </div>
  )
}

export default Experience
