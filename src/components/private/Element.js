import React from 'react'

const Element = ({ className, tagName, tag: Tag = tagName, children, ...props }) => {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  )
}

export default Element
