import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import Education from './Education'
import WhoIAm from './WhoIAm'

const Presentation = () => {
  const { t } = useTranslation()
  return (
    <Div className="page-layout">
      <Div className="sticky-header rounded-t-xl">{t('stickers.who')}</Div>
      <WhoIAm />
      <Div className="sticky-header">{t('stickers.education')} </Div>
      <Education />
    </Div>
  )
}

export default Presentation
