import React from 'react'
import { useTranslation } from 'react-i18next'
import './experience-style.css'

const WorkingCompany = ({ experience, link }) => {
  const { t } = useTranslation()

  return (
    <div
      key={experience.company}
      className="flex flex-col justify-center gap-4 bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 xl:w-2/3 md:h-56"
    >
      <div className="">
        <div className="flex flex-col ">
          <h1 className="text-2xl">
            {link && (
              <div className="relative">
                <a tool-tip-msg={t('experience.tool-tip-msg')} alt="company" href={link} target="blank">
                  {experience.company}
                </a>
              </div>
            )}
            {!link && experience.company}
          </h1>
          <div className="text-md">{experience.period}</div>
        </div>
        <div className="text-gray-900 pb-1 font-bold">{experience.position}</div>
      </div>
      <p className="text-gray-300 border-t-2 border-gray-300 pt-3 text-justify">{experience.responsabilities}</p>
    </div>
  )
}

export default WorkingCompany
