import React from 'react'
import Element from './Element'

const P = ({ className, children, ...props }) => {
  return (
    <Element tagName="p" className={className} {...props}>
      {children}
    </Element>
  )
}

export default P
