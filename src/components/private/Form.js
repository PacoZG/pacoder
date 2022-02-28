import React from 'react'
import Element from './Element'

const H = ({ className, children, ...props }) => {
  return (
    <Element tagName="form" className={className} {...props}>
      {children}
    </Element>
  )
}

export default H
