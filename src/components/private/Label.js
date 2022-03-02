import React from 'react'
import Element from './Element'

const Label = ({ className, children, ...props }) => {
  return (
    <Element tagName="label" className={className} {...props}>
      {children}
    </Element>
  )
}

export default Label
