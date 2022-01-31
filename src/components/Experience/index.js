import React from 'react'
import { useTranslation } from 'react-i18next'
import StickyHeader from '../StickyHeader'
import WorkingExperience from './WorkingExperience'
import Div from '../private/Div'

const Experience = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <StickyHeader text={t('stickers.experience')} theme="sticky-header rounded-t-xl" />
      <WorkingExperience />
    </Div>
  )
}

export default Experience
