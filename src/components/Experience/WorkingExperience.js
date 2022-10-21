import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import WorkingCompany from './WorkingCompany'

const WorkingExperience = () => {
  const { t } = useTranslation()

  const getWorkingCompany = num => {
    const experience = {
      company: t(`experience.company${num}`),
      period: t(`experience.period${num}`),
      position: t(`experience.position${num}`),
      responsabilities: t(`experience.responsabilities${num}`),
    }
    return experience
  }

  return (
    <Div className=" flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-900 rounded-b-xl p-4 py-10 md:py-14 lg:py-16 transition duration-500 bg-opacity-70 dark:bg-opacity-70 min-h-auto">
      <WorkingCompany experience={getWorkingCompany(4)} link="https://houston-inc.com/" />
      <WorkingCompany experience={getWorkingCompany(3)} link="https://www.hotelkamp.com/en/" />
      <WorkingCompany experience={getWorkingCompany(2)} />
      <WorkingCompany experience={getWorkingCompany(1)} />
    </Div>
  )
}

export default WorkingExperience
