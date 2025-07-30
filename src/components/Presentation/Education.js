import React from 'react'
import { useTranslation } from 'react-i18next'
import A from '../private/A'
import Div from '../private/Div'
import H from '../private/H'
import P from '../private/P'

const Education = () => {
  const { t } = useTranslation()
  return (
    // Outer wrapper: Centers the content, no background here
    <Div className="flex flex-col items-center p-4 md:py-10 lg:py-20">
      {/* Inner content container: This Div now gets the background, opacity, and width constraints */}
      <Div className="bg-gray-600 dark:bg-gray-900 flex flex-col items-center w-full sm:w-11/12 lg:w-2/3 transition duration-500 rounded-xl bg-opacity-70 dark:bg-opacity-70 p-4">
        {/* Education Entry 1: DevOps with Kubernetes */}
        <Div className="education-card bg-gray-300 dark:bg-gray-800">
          <H className="education-card-title">
            <A
              className="education-link"
              href="https://devopswithkubernetes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('education.line12')}
            </A>
          </H>
          <P className="education-card-description">{t('education.line11')}</P>
        </Div>

        {/* Education Entry 2: DevOps with Docker */}
        <Div className="education-card bg-gray-300 dark:bg-gray-800">
          <H className="education-card-title">
            <A
              className="education-link"
              href="https://devopswithdocker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('education.line10')}
            </A>
          </H>
          <P className="education-card-description">{t('education.line9')}</P>
        </Div>

        {/* Education Entry 3: Full Stack Open */}
        <Div className="education-card bg-gray-300 dark:bg-gray-800">
          <H className="education-card-title">
            <A
              className="education-link"
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('education.line8')}
            </A>
          </H>
          <P className="education-card-description">{t('education.line7')}</P>
        </Div>

        {/* Education Entry 4: Aalto University */}
        <Div className="education-card bg-gray-300 dark:bg-gray-800">
          <H className="education-card-title">{t('education.line6')}</H>
          <P className="education-card-description">{t('education.line5')}</P>
          <A
            education-tool-tip-msg={t('education.tool-tip-msg')}
            className="education-link-secondary"
            href="https://www.aalto.fi/en/school-of-electrical-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('education.line4')}
          </A>
        </Div>

        {/* Education Entry 5: Technical University of Cartagena */}
        <Div className="education-card bg-gray-300 dark:bg-gray-800">
          <H className="education-card-title">{t('education.line3')}</H>
          <P className="education-card-description">{t('education.line2')}</P>
          <A
            education-tool-tip-msg={t('education.tool-tip-msg')}
            className="education-link-secondary"
            href="http://www.upct.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('education.line1')}
          </A>
        </Div>
      </Div>
    </Div>
  )
}

export default Education
