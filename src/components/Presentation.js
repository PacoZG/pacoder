import React from 'react'
import { useTranslation } from 'react-i18next'

const Presentation = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center bg-gradient-to-l from-yellow-900 to-gray-500 p-10 w-screen">
      <div className="flex flex-col items-center md:pl-20">
        <img
          className=" w-2/3 h-2/3 md:h-max md:w-max border-4 border-black rounded-xl"
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1625155266/CV%20Pics/kxcpai1mniycdxszmgbq.jpg"
          alt="profile"
        />
      </div>
      <div className="p-10 md:pt-16">
        <h1 className="text-2xl text-gray-50 text-right">
          {t('Presentation.line0')}
          <span className="text-green-500 text-right">FRANCISCO ZAVALA GONZALEZ</span>
        </h1>
        <p className="text-gray-50 text-right">Junior Full Stack Developer</p>
        <p className="text-lg text-gray-50 text-right">{t('Presentation.line1')}</p>
        <p className="text-lg text-gray-50 text-right">{t('Presentation.line2')}</p>
      </div>
    </div>
  )
}

export default Presentation
