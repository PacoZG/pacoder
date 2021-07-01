import React from 'react'

const StickyHeader = ({ text }) => {
  return (
    <div className="sticky z-40 top-0 text-gray-50 text-4xl text-center p-3 bg-gray-800 border-t-2 border-b-2 border-white ">
      {text}
    </div>
  )
}

export default StickyHeader
