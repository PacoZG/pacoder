import React from 'react'
import { useTranslation } from 'react-i18next'
import StickyHeader from '../StickyHeader'
import Skills from './Skills'
import Strenghts from './Strenghts'
import Div from '../private/Div'

const WhatYouGet = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <StickyHeader text={t('stickers.skills')} theme="sticky-header rounded-t-xl" />
      <Skills />
      <StickyHeader text={t('stickers.strengths')} theme="sticky-header" />
      <Strenghts />
    </Div>
  )
}

export default WhatYouGet
