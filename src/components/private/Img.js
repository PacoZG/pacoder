import React from 'react'
import Element from './Element'

const Img = ({ className, children, ...props }) => {
  return (
    <Element tagName="img" className={className} {...props}>
      {children}
    </Element>
  )
}

export default Img
