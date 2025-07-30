import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import Education from './Education'
import WhoIAm from './WhoIAm'
import H from '../private/H'

const Presentation = () => {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    // Main page background from index.css - now gray-200 for light mode
    <Div className="page-layout bg-gray-200 dark:bg-gray-900 transition duration-500">
      <Div className="flex justify-center w-full py-8">
        <H className="sticky-header rounded-t-xl">{t('stickers.who')}</H>
      </Div>

      <WhoIAm />

      <Div className="flex justify-center w-full py-8">
        <H className="sticky-header">{t('stickers.education')}</H>
      </Div>

      <Education />
    </Div>
  )
}

export default Presentation
