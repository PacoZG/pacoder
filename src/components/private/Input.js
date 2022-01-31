import React from 'react'
import Element from './Element'

const Input = ({ className, children, ...props }) => {
  return (
    <Element tagName="input" className={className} {...props}>
      {children}
    </Element>
  )
}

export default Input
