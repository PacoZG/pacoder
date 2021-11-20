import React from 'react'
import { useTranslation } from 'react-i18next'
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
    <div className="bg-gray-300 dark:bg-gray-900  flex flex-col items-center p-4 transition duration-300">
      <WorkingCompany experience={getWorkingCompany(4)} />
      <WorkingCompany experience={getWorkingCompany(3)} />
      <WorkingCompany experience={getWorkingCompany(2)} />
      <WorkingCompany experience={getWorkingCompany(1)} />
    </div>
  )
}

export default WorkingExperience
