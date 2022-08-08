import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import H from '../private/H'
import P from '../private/P'
import A from '../private/A'
import './experience-style.css'

const WorkingCompany = ({ experience, link }) => {
  const { t } = useTranslation()

  return (
    <Div
      key={experience.company}
      className="flex flex-col justify-center gap-4 bg-gray-500 border-2 border-gray-300 rounded-lg p-4 mb-2 w-full sm:w-11/12 xl:w-2/3 md:h-56"
    >
      <Div className="">
        <Div className="flex flex-col ">
          <H className="text-2xl">
            {link && (
              <Div className="relative">
                <A experience-tool-tip-msg={t('experience.tool-tip-msg')} alt="company" href={link} target="blank">
                  {experience.company}
                </A>
              </Div>
            )}
            {!link && experience.company}
          </H>
          <Div className="text-md">{experience.period}</Div>
        </Div>
        <Div className="text-gray-900 pb-1 font-bold">{experience.position}</Div>
      </Div>
      <P className="text-gray-300 border-t-2 border-gray-300 pt-3 text-justify">{experience.responsabilities}</P>
    </Div>
  )
}

export default WorkingCompany
