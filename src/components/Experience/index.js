import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import WorkingExperience from './WorkingExperience'

const Experience = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Div className="page-layout">
      <Div className="sticky-header rounded-t-xl">{t('stickers.experience')}</Div>
      <WorkingExperience />
    </Div>
  )
}

export default Experience
