import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import Skills from './Skills'
import Strengths from './Strengths' // Corrected typo: Strenghts -> Strengths

const WhatYouGet = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    // Ensure page-layout has the correct background defined in index.css
    // and remove bg-gray-400 from here if it was present as it's for Presentation/Education sections
    <Div className="page-layout">
      {/* Apply py for spacing above sticky header, similar to Presentation.js */}
      <Div className="flex justify-center w-full py-8">
        <Div className="sticky-header rounded-t-xl">{t('stickers.skills')}</Div>
      </Div>
      <Skills />
      <Div className="flex justify-center w-full py-8">
        <Div className="sticky-header">{t('stickers.strengths')}</Div>
      </Div>
      <Strengths />
    </Div>
  )
}

export default WhatYouGet
