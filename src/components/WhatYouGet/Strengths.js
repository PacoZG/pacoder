import { Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline' // Use 24/outline for consistency
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import A from '../private/A'
import Button from '../private/Button'
import Div from '../private/Div'
import P from '../private/P'
import Span from '../private/Span'

const Strengths = () => {
  // Corrected typo: Strenghts -> Strengths
  const { t } = useTranslation()
  const [stgr1, setStgr1] = useState(false)
  const [stgr2, setStgr2] = useState(false)
  const [stgr3, setStgr3] = useState(false)
  const [stgr4, setStgr4] = useState(false)

  return (
    // Main container for strengths section - applying same base styles as education section background
    <Div className="bg-gray-400 dark:bg-gray-900 flex flex-col items-center p-4 md:py-10 lg:py-20 transition duration-500 rounded-b-xl bg-opacity-70 dark:bg-opacity-70">
      <Div className="w-full sm:w-11/12 lg:w-2/3">
        {/* Centering container for accordion */}
        {/* Accordion Item 1: Committed and Perseverant */}
        <Div className="accordion-card">
          <Button className="flex items-center justify-between w-full p-0" onClick={() => setStgr1(!stgr1)}>
            {/* Removed padding from button to control with inner div */}
            <P className="accordion-title">{t('strengths.strength1')}</P>
            <Div className={stgr1 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" /> {/* Icon color adjusted */}
            </Div>
          </Button>
          <Transition
            show={stgr1}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Div className="accordion-content">
              {t('strengths.line1_1')}
              <A
                className="accordion-link"
                href="https://fullstackopen.com/en/"
                target="_blank"
                rel="noopener noreferrer" // Added security attributes
              >
                {t('strengths.line1_2')}
              </A>
              {t('strengths.line1_3')}
            </Div>
          </Transition>
        </Div>
        {/* Accordion Item 2: Customer Service Oriented */}
        <Div className="accordion-card">
          <Button className="flex items-center justify-between w-full p-0" onClick={() => setStgr2(!stgr2)}>
            <P className="accordion-title">{t('strengths.strength2')}</P>
            <Div className={stgr2 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </Div>
          </Button>
          <Transition
            show={stgr2}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <P className="accordion-content">{t('strengths.line2')}</P>
          </Transition>
        </Div>
        {/* Accordion Item 3: Teaching Experience */}
        <Div className="accordion-card">
          <Button className="flex items-center justify-between w-full p-0" onClick={() => setStgr3(!stgr3)}>
            <P className="accordion-title">{t('strengths.strength3')}</P>
            <Div className={stgr3 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </Div>
          </Button>
          <Transition
            show={stgr3}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <P className="accordion-content">{t('strengths.line3')}</P>
          </Transition>
        </Div>
        {/* Accordion Item 4: HIGH 5 TEST */}
        <Div className="accordion-card">
          <Button className="flex items-center justify-between w-full p-0" onClick={() => setStgr4(!stgr4)}>
            <P className="accordion-title">
              HIGH <Span className="border-2 border-yellow-300 p-1 rounded-md">5</Span> TEST
            </P>
            {/* Adjusted Span styling to match theme */}
            <Div className={stgr4 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </Div>
          </Button>
          <Transition
            show={stgr4}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <P className="accordion-content">
              {t('strengths.line4_1')}
              <A
                className="accordion-link"
                href="https://test.high5test.com/test/7d00f98d-6f29-4022-8d7f-33b23b454cd6"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('strengths.line4_2')}
              </A>
              {t('strengths.line4_3')}
            </P>
          </Transition>
        </Div>
      </Div>
    </Div>
  )
}

export default Strengths
