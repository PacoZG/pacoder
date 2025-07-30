import React from 'react'
import { useTranslation } from 'react-i18next'
import Div from '../private/Div'
import H from '../private/H'
import P from '../private/P'
import A from '../private/A'
import './experience-style.css' // Ensure this path is correct

const WorkingCompany = ({ experience, link }) => {
  const { t } = useTranslation()

  // Helper function to safely get and process responsibilities
  const getProcessedResponsibilities = responsibilitiesContent => {
    if (typeof responsibilitiesContent === 'string') {
      // Split the string by newline characters
      // Filter out empty strings that might result from extra newlines
      const lines = responsibilitiesContent.split('\n').filter(line => line.trim() !== '')
      return (
        <ul className="list-disc list-inside space-y-1">
          {lines.map((item, index) => (
            // Apply text color directly to li for robustness
            <li key={index} className="text-gray-700 dark:text-gray-400">
              {item.trim()} {/* Trim whitespace for clean rendering */}
            </li>
          ))}
        </ul>
      )
    }
    // Fallback if responsibilitiesContent is not a string (e.g., undefined, null, or old array format)
    // You might want to handle an empty state more gracefully here if needed.
    return <P className="text-gray-700 dark:text-gray-400">{responsibilitiesContent}</P>
  }

  return (
    <Div key={experience.company} className="experience-card">
      <Div className="flex flex-col">
        <Div className="flex flex-col">
          <H className="experience-card-title">
            {link && (
              <A
                experience-tool-tip-msg={t('experience.tool-tip-msg')}
                className="experience-card-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </A>
            )}
            {!link && experience.company}
          </H>
          <Div className="experience-card-period">{experience.period}</Div>
        </Div>
        <Div className="experience-card-position">{experience.position}</Div>
      </Div>
      {/* Render the responsibilities using the helper function */}
      <Div className="experience-card-responsibilities">
        {getProcessedResponsibilities(experience.responsabilities)}
      </Div>
    </Div>
  )
}

export default WorkingCompany
