import { LightBulbIcon, PuzzlePieceIcon, LanguageIcon } from '@heroicons/react/24/outline'
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
    <Div className="flex flex-col items-center p-4 md:py-10 lg:py-20">
      <Div className="bg-gray-600 dark:bg-gray-900 flex flex-col items-center w-full sm:w-11/12 lg:w-2/3 transition duration-500 rounded-xl bg-opacity-70 dark:bg-opacity-70 p-4">
        <Div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-2 md:gap-4 lg:gap-6 py-5 w-full border-b-2 border-gray-300 dark:border-gray-700">
          {/* Javascript */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/nolan/96/javascript.png"
              alt="Javascript Logo"
            />
            <P className="skill-text dark:text-yellow-400">Javascript</P>
          </A>

          {/* React */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/officel/80/000000/react.png"
              alt="React Logo"
            />
            <P className="skill-text dark:text-blue-300">React</P>
          </A>

          {/* Redux */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReduxLogo className="skill-logo" />
            <P className="skill-text dark:text-purple-400">Redux</P>
          </A>

          {/* GraphQL */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/ak5pcxrhwyigv9z0nqql.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/48/000000/graphql.png"
              alt="GraphQL Logo"
            />
            <P className="skill-text dark:text-pink-500">GraphQL</P>
          </A>

          {/* React-Native */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117641/ffbedqhkfwmbaitpjrwx.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/nolan/96/react-native.png"
              alt="React-Native Logo"
            />
            <P className="skill-text dark:text-pink-700">React-Native</P>
          </A>

          {/* Typescript - CHANGED SOURCE */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/48/typescript.png"
              alt="TypeScript Logo"
            />
            <P className="skill-text dark:text-blue-500">Typescript</P>
          </A>

          {/* HTML */}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/344/html-5--v1.png"
              alt="HTML Logo"
            />
            <P className="skill-text dark:text-orange-500">HTML</P>
          </Div>

          {/* CSS */}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <CSSLogo className="skill-logo" />
            <P className="skill-text dark:text-blue-600">CSS</P>
          </Div>

          {/* MongoDB */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/96/000000/mongodb.png"
              alt="MongoDB Logo"
            />
            <P className="skill-text dark:text-green-400">MongoDB</P>
          </A>

          {/* Node.js */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo bg-green-400 p-3 object-contain"
              src="https://img.icons8.com/color/96/000000/nodejs.png"
              alt="Node.js Logo"
            />
            <P className="skill-text dark:text-lime-500">Node.js</P>
          </A>

          {/* SQL */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res-cloudinary-com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SQLLogo className="skill-logo" />
            <P className="skill-text dark:text-blue-400">SQL</P>
          </A>

          {/* Java */}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <JavaLogo className="skill-logo" />
            <Div className="flex gap-2 text-xs sm:text-sm pt-1">
              <A
                skill-tool-tip-msg="Java Programming I"
                className="skill-cert-link"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118753/rtibuwlmtzmdtr35u2gw.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cert I
              </A>
              <A
                skill-tool-tip-msg="Java Programming II"
                className="skill-cert-link"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118770/v7jfhsjvhla0pyw1p1dr.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cert II
              </A>
            </Div>
          </Div>

          {/* Tailwind CSS */}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Img className="skill-logo object-contain" src={Tailwind} alt="Tailwind CSS Logo" />
            <P className="skill-text dark:text-cyan-400">Tailwindcss</P>
          </Div>

          {/* Cypress.io */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cypress className="skill-logo" />
            <P className="skill-text dark:text-gray-200">Cypress.io</P>
          </A>

          {/* Docker */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockerLogo className="skill-logo bg-transparent" />
            <P className="skill-text dark:text-blue-500">Docker</P>
          </A>

          {/* Kubernetes */}
          {/*<A*/}
          {/*  skill-tool-tip-msg={t('skills.click-for-certificate')}*/}
          {/*  className="skill-card bg-gray-300 dark:bg-gray-800"*/}
          {/*  href=""*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <Img*/}
          {/*    className="skill-logo object-contain"*/}
          {/*    src="https://img.icons8.com/color/96/000000/kubernetes.png"*/}
          {/*    alt="Kubernetes Logo"*/}
          {/*  />*/}
          {/*  <P className="skill-text dark:text-blue-500">Kubernetes</P>*/}
          {/*</A>*/}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Img
              className="skill-logo"
              src="https://img.icons8.com/color/96/000000/kubernetes.png"
              alt="Kubernetes Logo"
            />
            <P className="skill-text dark:text-blue-500">Kubernetes</P>
          </Div>

          {/* AWS - CHANGED SOURCE */}
          <Div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Img className="skill-logo" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="AWS Logo" />
            <P className="skill-text dark:text-orange-400">AWS</P>
          </Div>

          {/* Datadog */}
          <A
            skill-tool-tip-msg={t('skills.click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://datadog.docebosaas.com/share/v1/gamification/assigned_badge/942dde0a-211f-4e54-b9ea-fe148117eec0/shared?lang=en&t=1689281055089"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              className="skill-logo"
              src="https://cdn5.dcbstatic.com/files/d/a/datadog_docebosaas_com/assets/badges/original/6149e0bf43bb02e0d6e207efd297a00ce5ac4443.png"
              alt="Datadog Logo"
            />
            <P className="skill-text dark:text-green-500">Datadog</P>
          </A>
        </Div>

        <P className="text-center pt-4 text-gray-700 dark:text-gray-400 text-xs sm:text-sm uppercase transition duration-500 w-full sm:w-11/12 lg:w-2/3">
          {t('skills.info-click')}
        </P>
      </Div>

      {/* Strengths/Languages Section */}
      <Div className="flex flex-col md:flex-row justify-center md:w-full gap-4 sm:gap-6 md:gap-10 xl:gap-12 pt-8 w-full sm:w-11/12 lg:w-2/3">
        {/* Multitask & Engaged */}
        <Div className="flex flex-col xl:flex-row gap-4 sm:gap-6 md:gap-8 xl:gap-10">
          <Div className="flex items-center gap-4 py-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
            <PuzzlePieceIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 " />
            <P className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500">
              {t('skills.multitask')}
            </P>
          </Div>
          <Div className="flex items-center gap-4 py-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
            <LightBulbIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 " />
            <P className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500">
              {t('skills.engaged')}
            </P>
          </Div>
        </Div>

        {/* Languages */}
        <Div className="flex flex-col xl:flex-row gap-4 sm:gap-6 md:gap-8 xl:gap-10">
          <Div className="flex items-center gap-4 py-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
            <LanguageIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 " />
            <P className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500">
              {t('skills.lang1')}
            </P>
          </Div>
          <Div className="flex items-center gap-4 py-2 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
            <LanguageIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 " />
            <P className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500">
              {t('skills.lang2')}
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default Skills
