import React from 'react'
import { useTranslation } from 'react-i18next'
import StickyHeader from '../StickyHeader'
import WorkingExperience from './WorkingExperience'

const Experience = () => {
  const { t } = useTranslation()
  return (
    <div className="page-layout">
      <StickyHeader text={t('stickers.experience')} theme="sticky-header rounded-t-xl" />
      <WorkingExperience />
    </div>
  )
}

export default Experience
