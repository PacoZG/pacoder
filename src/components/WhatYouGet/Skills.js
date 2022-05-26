import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Cypress } from '../../utils/assets/cypress.svg'
import { ReactComponent as Typescript } from '../../utils/assets/typescript.svg'
import { ReactComponent as AWSLogo } from '../../utils/assets/aws-logo.svg'
import { ReactComponent as DockerLogo } from '../../utils/assets/docker.svg'
import { ReactComponent as CSSLogo } from '../../utils/assets/css.svg'
import { ReactComponent as ReduxLogo } from '../../utils/assets/redux.svg'
import { ReactComponent as JavaLogo } from '../../utils/assets/java.svg'
import Tailwind from '../../utils/assets/tailwind-css.png'
import Div from '../private/Div'
import Img from '../private/Img'
import P from '../private/P'
import Span from '../private/Span'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <Div className="flex flex-col items-center lg:gap-8 justify-center p-8 md:p-16 bg-gray-500 dark:bg-gray-900 transition duration-500 bg-opacity-70 dark:bg-opacity-70">
      <Div className="flex flex-col justify-center  border-double border-b-8 border-gray-700 dark:border-gray-500 pt-0 p-12 lg:w-full">
        <Div className="hidden md:flex flex-col space-y-9">
          <Div className="flex items-center justify-evenly gap-16">
            <Div className="flex flex-col items-center ">
              <Img className="skill-logo " src="https://img.icons8.com/nolan/96/javascript.png" alt="JS" />
              <P className="text-black dark:text-yellow-500 transition duration-500">Javascript</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img
                className="skill-logo h-20 w-20 mb-3"
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />
              <P className="text-black dark:text-blue-300 transition duration-500">React</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img className="skill-logo " src="https://img.icons8.com/color/48/000000/graphql.png" alt="React" />
              <P className="text-black dark:text-pink-500 transition duration-500">GraphQL</P>
            </Div>
            <Div className="flex flex-col items-center">
              <ReduxLogo className="skill-logo mb-3" />
              <P className="text-black dark:text-purple-400 transition duration-500 -mt-4">Redux</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img className="skill-logo" src="https://img.icons8.com/nolan/96/react-native.png" alt="React" />
              <P className="text-black dark:text-pink-700 transition duration-500">React-Native</P>
            </Div>
          </Div>
          <Div className="flex items-center justify-evenly gap-16">
            <Div className="flex flex-col items-center ">
              <Typescript className=" skill-logo rounded-sm h-16 w-16 m-2 " />
              <P className="text-black dark:text-yellow-500 transition duration-500 mt-3">Typescript</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img className="skill-logo  mb-2" src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML" />
              <P className="text-black dark:text-purple-400 transition duration-500">HTML</P>
            </Div>
            <Div className="flex flex-col items-center">
              <CSSLogo className="skill-logo  mb-3" />
              <P className="text-black dark:text-purple-400 transition duration-500">CSS</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img className="skill-logo" src="https://img.icons8.com/color/96/000000/mongodb.png" alt="React" />
              <P className="text-black dark:text-green-400 transition duration-500">MongoDB</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Img
                className="skill-logo  bg-green-400 p-3 "
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="React"
              />
              <P className="text-black dark:text-green-400 transition duration-500">Node</P>
            </Div>
          </Div>
          <Div className="flex items-center justify-evenly gap-16">
            <JavaLogo className="skill-logo h-36" />

            <Div className="flex flex-col items-center">
              <Img className="skill-logo h-16 mb-5" src={Tailwind} alt="tailwind-logo" />
              <P className="text-black dark:text-blue-300 transition duration-500">Tailwindcss</P>
            </Div>
            <Div className="flex flex-col items-center">
              <Cypress className="skill-logo h-20 " />
              <P className="text-black dark:text-gray-50 transition duration-500">Cypress.io</P>
            </Div>
            <Div className="flex flex-col items-center">
              <AWSLogo className="skill-logo  p-3 bg-white" />
              <P className=" text-center text-yellow-800 dark:text-yellow-500 transition duration-500">Junior</P>
            </Div>
            <Div className="flex flex-col items-center">
              <DockerLogo className="skill-logo  p-3 bg-gray-50 bg-opacity-10" />
              <P className=" text-center text-blue-700 transition duration-500">Docker</P>
            </Div>
          </Div>
        </Div>

        <Div className="md:hidden block">
          <Div className="flex flex-col items-center space-y-4 sm:space-y-8 md:space-y-12">
            <Div className="flex items-center justify-evenly space-x-12">
              <Div className="flex flex-col items-center ">
                <Img className="skill-logo p-2 " src="https://img.icons8.com/nolan/96/javascript.png" alt="JS" />
                <P className="text-sm text-black dark:text-yellow-500 transition duration-500">Javascript</P>
              </Div>
              <Div className="flex flex-col items-center">
                <Img className="skill-logo p-2 " src="https://img.icons8.com/officel/80/000000/react.png" alt="React" />
                <P className="text-sm text-black dark:text-blue-300 transition duration-500">React</P>
              </Div>
              <Div className="flex flex-col items-center">
                <ReduxLogo className="skill-logo " />
                <P className="text-sm text-black dark:text-purple-700 transition duration-500">Redux</P>
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <Div className="flex flex-col items-center">
                <Img className="skill-logo  " src="https://img.icons8.com/nolan/96/react-native.png" alt="React" />
                <P className="text-sm text-black text-center dark:text-pink-800 transition duration-500">
                  React-Native
                </P>
              </Div>
              <Div className="flex flex-col items-center">
                <Img className="skill-logo " src="https://img.icons8.com/color/96/000000/mongodb.png" alt="React" />
                <P className="text-sm text-black dark:text-green-400 transition duration-500">MongoDB</P>
              </Div>
              <Div className="flex flex-col items-center">
                <Img className="skill-logo " src="https://img.icons8.com/color/48/000000/graphql.png" alt="React" />
                <P className="text-sm text-black dark:text-pink-500 transition duration-500">GraphQL</P>
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <Div className="flex flex-col items-center">
                <Img
                  className="skill-logo bg-green-400 p-2 md:h-24 "
                  src="https://img.icons8.com/color/96/000000/nodejs.png"
                  alt="React"
                />
                <P className="text-sm text-black dark:text-green-400 transition duration-500">Node</P>
              </Div>
              <Div className="flex flex-col items-center">
                <Img className="skill-logo h-12  mb-2" alt="tailwind-logo" src={Tailwind} />
                <P className="text-sm text-black dark:text-blue-300 transition duration-500">Tailwindcss</P>
              </Div>
              <Div className="flex flex-col items-center">
                <Cypress className="skill-logo" />
                <P className="text-sm text-black dark:text-gray-300 transition duration-500">Cypress.io</P>
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <Div className="flex flex-col items-center">
                <Typescript className="skill-logo h-14 w-14 my-2 rounded-sm " />
                <P className="text-sm text-black dark:text-green-400 transition duration-500">Typescript</P>
              </Div>
              <Div className="flex flex-col items-center">
                <AWSLogo className="skill-logo p-3 my-2 bg-white" />
                <P className=" text-center text-yellow-400 transition duration-500">Junior</P>
              </Div>
              <Div className="flex flex-col items-center">
                <DockerLogo className="skill-logo p-2 my-2 bg-gray-50 bg-opacity-10" />
                <P className=" text-center text-blue-700 transition duration-500 w-16">Docker</P>
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <JavaLogo className="skill-logo h-28 " />

              <Div className="flex flex-col items-center">
                <Img className="skill-logo " src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML" />

                <P className=" text-center text-yellow-800 transition duration-500">HTML</P>
              </Div>
              <Div className="flex flex-col items-center">
                <CSSLogo className="skill-logo bg-transparent p-1" />
                <P className=" text-center text-blue-700 transition duration-500 w-16">CSS</P>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="flex flex-col xl:flex-row items-center space-y-5 xl:space-y-0 p-6 pl-12">
        <Div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 w-full">
          <Div className="relative flex items-center justify-evenly space-x-7 w-full md:w-max">
            <Span className="spinner"></Span>
            <P className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 w-full transition duration-500">
              {t('skills.multitask')}
            </P>
          </Div>
          <Div className="relative flex items-center justify-evenly space-x-7 w-full md:w-max">
            <Span className="spinner"></Span>
            <P className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 w-full transition duration-500">
              {t('skills.engaged')}
            </P>
          </Div>
        </Div>
        <Div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 w-full">
          <Div className="relative flex items-center justify-evenly space-x-7 w-full md:w-max">
            <Span className="spinner"></Span>
            <P className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 transition duration-500">
              {t('skills.lang1')}
            </P>
          </Div>
          <Div className="relative flex items-center justify-evenly space-x-7 w-full md:w-max">
            <Span className="spinner"></Span>
            <P className="md:px-5 my-2 text-black dark:text-gray-300 text-center text-xs sm:text-sm uppercase p-2 transition duration-500">
              {t('skills.lang2')}
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Skills
