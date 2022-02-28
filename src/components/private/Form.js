import React from 'react'
import Element from './Element'

const Form = ({ className, children, ...props }) => {
  return (
    <Element tagName="form" className={className} {...props}>
      {children}
    </Element>
  )
}

export default Form
