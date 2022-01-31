import React from 'react'
import Element from './Element'

const Span = ({ className, children, ...props }) => {
  return (
    <Element tagName="span" className={className} {...props}>
      {children}
    </Element>
  )
}

export default Span
