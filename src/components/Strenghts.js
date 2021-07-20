import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Transition } from '@headlessui/react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'

const Strenghts = () => {
  const { t } = useTranslation()
  const [stgr1, setStgr1] = useState(false)
  const [stgr2, setStgr2] = useState(false)
  const [stgr3, setStgr3] = useState(false)
  const [stgr4, setStgr4] = useState(false)
  return (
    <div className="bg-gray-900 flex flex-col items-center p-4">
      <div className="md:w-2/3 text-center">
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2" onClick={() => setStgr1(!stgr1)}>
              {t('strengths.strength1')}
            </p>
            <div className={stgr1 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <Arrow />
            </div>
          </div>
          <Transition
            show={stgr1}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <div className="text-gray-900 text-left border-t-2 border-gray-300 pt-2">
              {t('strengths.line1_1')}{' '}
              <a
                className="text-gray-900 underline transition duration-200 hover:text-indigo-600"
                href="https://fullstackopen.com/en/"
                alt="course"
              >
                {t('strengths.line1_2')}
              </a>{' '}
              {t('strengths.line1_3')}
            </div>
          </Transition>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2" onClick={() => setStgr2(!stgr2)}>
              {t('strengths.strength2')}
            </p>
            <div className={stgr2 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <Arrow />
            </div>
          </div>
          <Transition
            show={stgr2}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className=" text-gray-900 text-left border-t-2 border-gray-300 pt-2">{t('strengths.line2')}</p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2" onClick={() => setStgr3(!stgr3)}>
              {t('strengths.strength3')}
            </p>
            <div className={stgr3 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <Arrow />
            </div>
          </div>
          <Transition
            show={stgr3}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className="text-gray-900 text-left border-t-2 border-gray-300 pt-2">{t('strengths.line3')}</p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2" onClick={() => setStgr4(!stgr4)}>
              HIGH <span className="border-2 border-yellow-300 p-1">5</span> TEST
            </p>
            <div className={stgr4 ? 'transition duration-500 transform rotate-90 ' : 'transition duration-500'}>
              <Arrow />
            </div>
          </div>
          <Transition
            show={stgr4}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-700"
            leaveTo="opacity-0"
          >
            <p className="text-gray-900 text-left border-t-2 border-gray-300 pt-2">
              {t('strengths.line4_1')}
              <a
                className="text-gray-900 underline transition duration-200 hover:text-indigo-600"
                href="https://high5test.com/test/result-your-friend/MTUwMTU5Mg==/"
                target="blank"
              >
                {t('strengths.line4_2')}
              </a>
              {t('strengths.line4_3')}
            </p>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Strenghts
