import React from 'react'

const StickyHeader = ({ text }) => {
  return (
    <div className="sticky z-40 top-0 text-gray-300 text-4xl text-center p-3 bg-blue-1000 border-t-2 border-b-2 border-gray-300">
      {text}
    </div>
  )
}

export default StickyHeader
