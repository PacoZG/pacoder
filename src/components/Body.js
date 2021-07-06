import React from 'react'
import { useTranslation } from 'react-i18next'
import Presentation from './Presentation'
import StickyHeader from './StickyHeader'
import Skills from './Skills'
import Strenghts from './Strenghts'
import Education from './Education'
import Experience from './Experience'

const Body = () => {
  const { t } = useTranslation()
  return (
    <div className="relative">
      <StickyHeader text={t('stickers.who')} />
      <Presentation />
      <StickyHeader text={t('stickers.skills')} />
      <Skills />
      <StickyHeader text={t('stickers.strengths')} />
      <Strenghts />
      <StickyHeader text={t('stickers.education')} />
      <Education />
      <StickyHeader text={t('stickers.experience')} />
      <Experience />
    </div>
  )
}

export default Body
