import React from 'react'
import Div from './private/Div'

const StickyHeader = ({ text, theme }) => {
  return <Div className={theme}>{text}</Div>
}

export default StickyHeader
