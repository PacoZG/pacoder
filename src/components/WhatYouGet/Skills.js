import { LightBulbIcon, PuzzleIcon, TranslateIcon } from '@heroicons/react/solid'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as AWSLogo } from '../../utils/assets/aws-logo.svg'
import { ReactComponent as CSSLogo } from '../../utils/assets/css.svg'
import { ReactComponent as Cypress } from '../../utils/assets/cypress.svg'
import { ReactComponent as DockerLogo } from '../../utils/assets/docker.svg'
import { ReactComponent as JavaLogo } from '../../utils/assets/java.svg'
import { ReactComponent as ReduxLogo } from '../../utils/assets/redux.svg'
import { ReactComponent as SQLLogo } from '../../utils/assets/sql.svg'
import Tailwind from '../../utils/assets/tailwind-css.png'
import { ReactComponent as Typescript } from '../../utils/assets/typescript.svg'
import A from '../private/A'
import Div from '../private/Div'
import Img from '../private/Img'
import P from '../private/P'
import './skill-style.css'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <Div className="flex flex-col items-center lg:gap-8 justify-center py-3 px-0 sm:py-6 sm:px-2 bg-gray-500 dark:bg-gray-900 transition duration-500 bg-opacity-70 dark:bg-opacity-70">
      <Div className="flex flex-col justify-center  border-double border-b-2 border-gray-700 dark:border-gray-500 pt-0 p-2 lg:w-full transition duration-500">
        <Div className="hidden md:flex flex-col space-y-9">
          <Div className="flex items-center justify-evenly gap-10">
            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <Img className="skill-logo " src="https://img.icons8.com/nolan/96/javascript.png" alt="JS" />

              <P className="text-gray-200 dark:text-yellow-500 transition duration-500">Javascript</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <Img
                className="skill-logo h-20 w-20 mb-3 -z-20"
                src="https://img.icons8.com/officel/80/000000/react.png"
                alt="React"
              />

              <P className="text-gray-200 dark:text-blue-300 transition duration-500">React</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <ReduxLogo className="skill-logo mb-3" />

              <P className="text-gray-200 dark:text-purple-400 transition duration-500 -mt-4">Redux</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/ak5pcxrhwyigv9z0nqql.png"
              target="blank"
            >
              <Img className="skill-logo -z-20 " src="https://img.icons8.com/color/48/000000/graphql.png" alt="React" />

              <P className="text-gray-200 dark:text-pink-500 transition duration-500">GraphQL</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117641/ffbedqhkfwmbaitpjrwx.png"
              target="blank"
            >
              <Img className="skill-logo" src="https://img.icons8.com/nolan/96/react-native.png" alt="React" />

              <P className="text-gray-200 dark:text-pink-700 transition duration-500">React-Native</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png"
              target="blank"
            >
              <Typescript className=" skill-logo rounded-sm h-16 w-16 mb-0 mt-5" />

              <P className="text-gray-200 dark:text-yellow-500 transition duration-500 mt-3">Typescript</P>
            </A>
          </Div>

          <Div className="flex items-center justify-evenly gap-20">
            <Div className="flex flex-col items-center">
              <Img className="skill-logo  mb-2" src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML" />

              <P className="text-gray-200 dark:text-purple-400 transition duration-500">HTML</P>
            </Div>

            <Div className="flex flex-col items-center">
              <CSSLogo className="skill-logo  mb-3" />

              <P className="text-gray-200 dark:text-purple-400 transition duration-500">CSS</P>
            </Div>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <Img className="skill-logo -z-20" src="https://img.icons8.com/color/96/000000/mongodb.png" alt="React" />

              <P className="text-gray-200 dark:text-green-400 transition duration-500">MongoDB</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <Img
                className="skill-logo bg-green-400 p-3 -z-20"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="React"
              />
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png"
              target="blank"
            >
              <SQLLogo className="skill-logo h-32 w-16 -mb-3 -mt-3 -z-20" />
            </A>
          </Div>

          <Div className="flex items-center justify-evenly gap-16">
            <Div className="flex flex-col items-center">
              <JavaLogo className="skill-logo h-36" />

              <Div className="flex gap-2 ">
                <A
                  skill-tool-tip-msg="Java Programming I"
                  className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
                  href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118753/rtibuwlmtzmdtr35u2gw.png"
                  target="blank"
                >
                  Cert I
                </A>

                <A
                  skill-tool-tip-msg="Java Programming II"
                  className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
                  href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118770/v7jfhsjvhla0pyw1p1dr.png"
                  target="blank"
                >
                  Cert II
                </A>
              </Div>
            </Div>

            <Div className="flex flex-col items-center">
              <Img className="skill-logo h-16 mb-3" src={Tailwind} alt="tailwind-logo" />

              <P className="text-gray-200 dark:text-blue-300 transition duration-500">Tailwindcss</P>
            </Div>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
              target="blank"
            >
              <Cypress className="skill-logo h-20 -z-20 " />

              <P className="text-gray-200 dark:text-gray-50 transition duration-500">Cypress.io</P>
            </A>

            <A
              skill-tool-tip-msg={t('skills.click-for-certificate')}
              className="flex flex-col items-center"
              href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png"
              target="blank"
            >
              <DockerLogo className="skill-logo  p-3 bg-transparent bg-opacity-10" />

              <P className=" text-center text-gray-200 dark:text-blue-700 transition duration-500">Docker</P>
            </A>

            <Div className="flex flex-col items-center">
              <AWSLogo className="skill-logo  p-3 bg-white" />
            </Div>
          </Div>
        </Div>

        <Div className="md:hidden block">
          <Div className="flex flex-col items-center space-y-3 sm:space-y-8 md:space-y-12">
            <Div className="flex items-center justify-evenly space-x-12">
              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <Img className="skill-logo p-2 " src="https://img.icons8.com/nolan/96/javascript.png" alt="JS" />

                <P className="text-sm text-gray-200 dark:text-yellow-500 transition duration-500">Javascript</P>
              </A>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <Img className="skill-logo p-2 " src="https://img.icons8.com/officel/80/000000/react.png" alt="React" />

                <P className="text-sm text-gray-200 dark:text-blue-300 transition duration-500">React</P>
              </A>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <ReduxLogo className="skill-logo " />

                <P className="text-sm text-gray-200 dark:text-purple-700 transition duration-500">Redux</P>
              </A>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117641/ffbedqhkfwmbaitpjrwx.png"
                target="blank"
              >
                <Img className="skill-logo  " src="https://img.icons8.com/nolan/96/react-native.png" alt="React" />

                <P className="text-sm text-gray-200 text-center dark:text-pink-800 transition duration-500">
                  React-Native
                </P>
              </A>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <Img className="skill-logo " src="https://img.icons8.com/color/96/000000/mongodb.png" alt="React" />

                <P className="text-sm text-gray-200 dark:text-green-400 transition duration-500">MongoDB</P>
              </A>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/ak5pcxrhwyigv9z0nqql.png"
                target="blank"
              >
                <Img className="skill-logo " src="https://img.icons8.com/color/48/000000/graphql.png" alt="React" />

                <P className="text-sm text-gray-200 dark:text-pink-500 transition duration-500">GraphQL</P>
              </A>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <Img
                  className="skill-logo text-gray-200 bg-green-400 p-2 md:h-24 "
                  src="https://img.icons8.com/color/96/000000/nodejs.png"
                  alt="React"
                />
              </A>

              <Div className="flex flex-col items-center">
                <Img className="skill-logo h-12  mb-2" alt="tailwind-logo" src={Tailwind} />

                <P className="text-sm text-gray-200 dark:text-blue-300 transition duration-500">Tailwindcss</P>
              </Div>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
                target="blank"
              >
                <Cypress className="skill-logo" />

                <P className="text-sm text-gray-200 dark:text-gray-300 transition duration-500">Cypress.io</P>
              </A>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png"
                target="blank"
              >
                <Typescript className="skill-logo h-14 w-14 my-2 rounded-sm " />

                <P className="text-sm text-gray-200 dark:text-green-400 transition duration-500">Typescript</P>
              </A>

              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png"
                target="blank"
              >
                <DockerLogo className="skill-logo my-2 bg-opacity-10" />

                <P className=" text-center text-gray-200 dark:text-blue-700 transition duration-500 w-16">Docker</P>
              </A>

              <Div className="flex flex-col items-center">
                <AWSLogo className="skill-logo p-3 my-2 bg-white" />
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <A
                className="flex flex-col items-center"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png"
                target="blank"
              >
                <SQLLogo className="skill-logo h-24 w-12 -mb-3 -mt-3" />
              </A>

              <Div className="flex flex-col items-center">
                <Img className="skill-logo " src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML" />

                <P className=" text-center text-gray-200 dark:text-yellow-800 transition duration-500">HTML</P>
              </Div>

              <Div className="flex flex-col items-center">
                <CSSLogo className="skill-logo bg-transparent p-1" />

                <P className=" text-center text-gray-200 dark:text-blue-700 transition duration-500 w-16">CSS</P>
              </Div>
            </Div>

            <Div className="flex items-center justify-evenly space-x-12">
              <Div className="flex flex-col items-center">
                <JavaLogo className="skill-logo h-28" />

                <Div className="flex gap-3 ">
                  <A
                    skill-tool-tip-msg="Java Programming I"
                    className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
                    href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118753/rtibuwlmtzmdtr35u2gw.png"
                    target="blank"
                  >
                    Cert I
                  </A>

                  <A
                    skill-tool-tip-msg="Java Programming II"
                    className="text-gray-300 underline transition duration-200 hover:text-indigo-600"
                    href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118770/v7jfhsjvhla0pyw1p1dr.png"
                    target="blank"
                  >
                    Cert II
                  </A>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>

        <P className="text-center pt-4 text-gray-200 dark:text-gray-300 text-xs sm:text-sm uppercase transition duration-500">
          {t('skills.info-click')}
        </P>
      </Div>

      <Div className="flex flex-col md:flex-row justify-center md:w-full gap-2 sm:gap-4 md:gap-16 xl:gap-10 pt-5">
        <Div className="flex flex-col xl:flex-row gap-2 sm:gap-4 md:gap-6 xl:gap-10  ">
          <Div className="flex items-center gap-4 md:gap-0">
            <PuzzleIcon className="w-5 h-5 text-gray-200 dark:text-gray-300 " />

            <P className="md:px-5 text-gray-200 dark:text-gray-300 text-xs sm:text-sm uppercase transition duration-500">
              {t('skills.multitask')}
            </P>
          </Div>

          <Div className="flex items-center gap-4 md:gap-0">
            <LightBulbIcon className="w-5 h-5 text-gray-200 dark:text-gray-300 " />

            <P className="md:px-5 text-gray-200 dark:text-gray-300 text-xs sm:text-sm uppercase transition duration-500">
              {t('skills.engaged')}
            </P>
          </Div>
        </Div>

        <Div className="flex flex-col xl:flex-row gap-2 sm:gap-4 md:gap-6 xl:gap-10  ">
          <Div className="flex items-center gap-4 md:gap-0">
            <TranslateIcon className="w-5 h-5 text-gray-200 dark:text-gray-300 " />

            <P className="md:px-5 text-gray-200 dark:text-gray-300 text-xs sm:text-sm uppercase transition duration-500">
              {t('skills.lang1')}
            </P>
          </Div>

          <Div className="flex items-center gap-4 md:gap-0">
            <TranslateIcon className="w-5 h-5 text-gray-200 dark:text-gray-300 " />

            <P className="md:px-5 text-gray-200 dark:text-gray-300 text-xs sm:text-sm uppercase transition duration-500">
              {t('skills.lang2')}
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Skills
