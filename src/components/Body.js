import React from 'react'
import Div from './private/Div'
// import { useTranslation } from 'react-i18next'
// import Presentation from './Presentation'
// import StickyHeader from './StickyHeader'
// import Skills from './WhatYouGet/Skills'
// import Strenghts from './WhatYouGet/Strenghts'
// import Education from './Presentation/Education'
// import WorkingExperience from './Experience/WorkingExperience'

const Body = () => {
  // const { t } = useTranslation()

  return (
    <Div className="page-layout">
      {/* <StickyHeader text={t('stickers.who')} />
      <Presentation />
      <StickyHeader text={t('stickers.skills')} />
      <Skills />
      <StickyHeader text={t('stickers.strengths')} />
      <Strenghts />
      <StickyHeader text={t('stickers.education')} />
      <Education />
      <StickyHeader text={t('stickers.experience')} />
      <WorkingExperience /> */}
      <h1 className="text-gray-300 text-3xl text-center">This should be something else</h1>
    </Div>
  )
}

export default Body
