import React from 'react'

const WorkingCompany = ({ experience }) => {
  return (
    <div key={experience.company} className="bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-11/12 lg:w-2/3">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between ">
          <h1 className="text-2xl">{experience.company}</h1>
          <div className="text-md">{experience.period}</div>
        </div>
        <div className="text-gray-900 pb-1 font-bold">{experience.position}</div>
      </div>
      <p className="text-gray-300 border-t-2 border-gray-300 pt-1 text-justify">{experience.responsabilities}</p>
    </div>
  )
}

export default WorkingCompany
