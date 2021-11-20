import React from 'react'

const WorkingCompany = ({ experience }) => {
  return (
    <div key={experience.company} className="bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full  md:w-2/3">
      <div className="text-gray-900 pb-1 font-bold">
        <div className="flex justify-between ">
          <h1 className="font-normal">{experience.company}</h1>
          <div className="font-normal">{experience.period}</div>
        </div>
        <div className="">{experience.position}</div>
      </div>
      <p className="text-gray-300 border-t-2 border-gray-300 pt-1 text-justify">{experience.responsabilities}</p>
    </div>
  )
}

export default WorkingCompany
