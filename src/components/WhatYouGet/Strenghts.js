import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Transition } from '@headlessui/react'
import { ReactComponent as Arrow } from '../../utils/assets/arrow.svg'

const Strenghts = () => {
  const { t } = useTranslation()
  const [stgr1, setStgr1] = useState(false)
  const [stgr2, setStgr2] = useState(false)
  const [stgr3, setStgr3] = useState(false)
  const [stgr4, setStgr4] = useState(false)
  return (
    <div className="bg-gray-300 dark:bg-gray-900 flex flex-col items-center p-4 md:py-10 lg:py-20 transition duration-500 rounded-b-xl">
      <div className="w-full sm:w-11/12 lg:w-2/3 text-center">
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <button className="flex items-center justify-between w-full" onClick={() => setStgr1(!stgr1)}>
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2 w-full ">{t('strengths.strength1')}</p>
            <div className={stgr1 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <Arrow />
            </div>
          </button>
          <Transition
            show={stgr1}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="text-gray-300 text-left border-t-2 border-gray-300 pt-2">
              {t('strengths.line1_1')}{' '}
              <a
                className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
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
          <button className="flex items-center justify-between w-full" onClick={() => setStgr2(!stgr2)}>
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2 w-full ">{t('strengths.strength2')}</p>
            <div className={stgr2 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <Arrow />
            </div>
          </button>
          <Transition
            show={stgr2}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className=" text-gray-300 text-left border-t-2 border-gray-300 pt-2 w-full ">{t('strengths.line2')}</p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <button className="flex items-center justify-between w-full" onClick={() => setStgr3(!stgr3)}>
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2">{t('strengths.strength3')}</p>
            <div className={stgr3 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <Arrow />
            </div>
          </button>
          <Transition
            show={stgr3}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-gray-300 text-left border-t-2 border-gray-300 pt-2 w-full ">{t('strengths.line3')}</p>
          </Transition>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-500 mb-3">
          <button className="flex items-center justify-between w-full" onClick={() => setStgr4(!stgr4)}>
            <p className="text-2xl text-gray-900 text-left cursor-pointer pb-2">
              HIGH <span className="border-2 border-yellow-300 p-1">5</span> TEST
            </p>
            <div className={stgr4 ? 'transition duration-300 transform rotate-90 ' : 'transition duration-300'}>
              <Arrow />
            </div>
          </button>
          <Transition
            show={stgr4}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-gray-300 text-left border-t-2 border-gray-300 pt-2">
              {t('strengths.line4_1')}
              <a
                className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
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
