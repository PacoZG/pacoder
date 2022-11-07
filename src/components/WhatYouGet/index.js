import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import Skills from './Skills'
import Strenghts from './Strenghts'

const WhatYouGet = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
