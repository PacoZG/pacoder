import React from 'react'
import Element from './Element'

const TextArea = ({ className, children, ...props }) => {
  return (
    <Element tagName="textarea" className={className} {...props}>
      {children}
    </Element>
  )
}

export default TextArea
