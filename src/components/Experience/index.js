import React from 'react'
import { useTranslation } from 'react-i18next'
import WorkingExperience from './WorkingExperience'
import Div from '../private/Div'

const Experience = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <Div className="sticky-header rounded-t-xl">{t('stickers.experience')}</Div>
      <WorkingExperience />
    </Div>
  )
}

export default Experience
