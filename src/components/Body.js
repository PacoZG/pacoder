import React from 'react'
import Presentation from './Presentation'
import StickyHeader from './StickyHeader'
import Skills from './Skills'
import Strenghts from './Strenghts'
import Education from './Education'
import Experience from './Experience'

const Body = () => {
  return (
    <div className="relative">
      <StickyHeader text="Who I am" />
      <Presentation />
      <StickyHeader text="My Skills" />
      <Skills />
      <StickyHeader text="My Strenghts" />
      <Strenghts />
      <StickyHeader text="Education" />
      <Education />
      <StickyHeader text="Work Experience" />
      <Experience />
    </div>
  )
}

export default Body
