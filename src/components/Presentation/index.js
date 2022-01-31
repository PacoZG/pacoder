import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import StickyHeader from '../StickyHeader'
import Education from './Education'
import WhoIAm from './WhoIAm'

const Presentation = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <StickyHeader text={t('stickers.who')} theme="sticky-header rounded-t-xl" />
      <WhoIAm />
      <StickyHeader text={t('stickers.education')} theme="sticky-header" />
      <Education />
    </Div>
  )
}

export default Presentation
