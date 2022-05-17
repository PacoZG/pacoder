import React from 'react'
import Div from './private/Div'
import H from './private/H'
// import { useTranslation } from 'react-i18next'

const Body = () => {
  // const { t } = useTranslation()

  return (
    <Div className="page-layout">
      <H className="text-gray-300 text-3xl text-center">This should be something else</H>
    </Div>
  )
}

export default Body
