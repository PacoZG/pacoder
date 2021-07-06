import React from 'react'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <div className="p-8 md:p-16 bg-green-100">
      <div className="flex flex-col justify-center md:space-x-28 border-double border-b-8 border-gray-300 pb-12">
        <div className="hidden md:flex flex-col">
          <div className="flex items-center justify-center space-x-28 pb-12">
            <div className="flex flex-col items-center ">
              <img
                className="skill-logo bg-yellow-200  p-2 "
                src="https://img.icons8.com/nolan/96/javascript.png"
                alt="JS"
              />
              <p className="text-yellow-500">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-600 p-2  "
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />
              <p className="text-blue-300">React</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-3 "
                src="https://img.icons8.com/color/96/000000/redux.png"
                alt="React"
              />
              <p className="text-purple-800">Redux</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-2 "
                src="https://img.icons8.com/nolan/96/react-native.png"
                alt="React"
              />
              <p className="text-pink-800">React-Native</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-300 p-2 "
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="React"
              />
              <p className="text-green-400">MongoDB</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-24">
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-200 p-2 "
                src="https://img.icons8.com/color/48/000000/graphql.png"
                alt="React"
              />
              <p className="text-pink-500">GraphQL</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-green-400 p-2  "
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="React"
              />
              <p className="text-black">Node</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo p-3 "
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
                alt="React"
              />
              <p className="text-blue-300">Tailwindcss</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo"
                src="https://pics.freeicons.io/uploads/icons/png/3556671901536211770-512.png"
                alt="Cypress.io"
              />
              <p className="text-gray-700">Cypress.io</p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col space-y-8">
          <div className="flex flex-row justify-evenly space-x-5">
            <div className="flex flex-col items-center ">
              <img
                className="skill-logo bg-yellow-200  p-2 "
                src="https://img.icons8.com/nolan/96/javascript.png"
                alt="JS"
              />
              <p className="text-yellow-500">Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-600 p-2  "
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />
              <p className="text-blue-300">React</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-3 "
                src="https://img.icons8.com/color/96/000000/redux.png"
                alt="Redux"
              />
              <p className="text-purple-800">Redux</p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly space-x-5">
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-white p-2 "
                src="https://img.icons8.com/nolan/96/react-native.png"
                alt="React"
              />
              <p className="text-pink-800">React-Native</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-300 p-2 "
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="React"
              />
              <p className="text-green-400">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-gray-200 p-2 "
                src="https://img.icons8.com/color/48/000000/graphql.png"
                alt="React"
              />
              <p className="text-pink-500">GraphQL</p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly space-x-5">
            <div className="flex flex-col items-center">
              <img
                className="skill-logo bg-green-400 p-2  "
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="React"
              />
              <p className="text-black">Node</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo p-3 "
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
                alt="React"
              />
              <p className="text-blue-300">Tailwindcss</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="skill-logo"
                src="https://pics.freeicons.io/uploads/icons/png/3556671901536211770-512.png"
                alt="Cypress.io"
              />
              <p className="text-gray-700">Cypress.io</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-0 text-center md:space-y-5 md:items-center md:justify-evenly pt-8 pl-4 md:pl-0 ">
        <div className="md:flex md:items-center space-x-4">
          <p className="relative md:px-5 my-2 text-sm uppercase flex-shrink-0 p-3">
            <span className="spinner"></span>
            {t('skills.multitask')}
          </p>
          <p className="relative md:px-5 my-2 text-sm uppercase flex-shrink-0 p-3">
            <span className="spinner"></span>
            {t('skills.engaged')}
          </p>
        </div>
        <div className="md:flex md:items-center space-x-4">
          <p className="relative md:px-5 my-2 text-sm uppercase flex-shrink-0 p-3">
            <span className="spinner"></span>
            {t('skills.lang1')}
          </p>
          <p className="relative md:px-5 my-2 text-sm uppercase flex-shrink-0 p-3">
            <span className="spinner"></span>
            {t('skills.lang2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
