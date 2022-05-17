import React from 'react'
import { useTranslation } from 'react-i18next'
import Skills from './Skills'
import Strenghts from './Strenghts'
import Div from '../private/Div'

const WhatYouGet = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <Div className="sticky-header rounded-t-xl">{t('stickers.skills')}</Div>
      <Skills />
      <Div className="sticky-header">{t('stickers.strengths')}</Div>
      <Strenghts />
    </Div>
  )
}

export default WhatYouGet
