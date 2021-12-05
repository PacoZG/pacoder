import React from 'react'
import { useTranslation } from 'react-i18next'
import StickyHeader from '../StickyHeader'
import Education from './Education'
import WhoIAm from './WhoIAm'

const Presentation = () => {
  const { t } = useTranslation()
  return (
    <div className="page-layout">
      <StickyHeader text={t('stickers.who')} theme="sticky-header rounded-t-xl" />
      <WhoIAm />
      <StickyHeader text={t('stickers.education')} theme="sticky-header" />
      <Education />
    </div>
  )
}

export default Presentation
