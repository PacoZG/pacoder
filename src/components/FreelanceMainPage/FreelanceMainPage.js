import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layers, Cloud, Code, Settings, Handshake, CheckCircle, FileText, Server, Globe, ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FreelanceMainPage = () => {
  const { t } = useTranslation()
  const [showArrow, setShowArrow] = useState(false)

  const handleCtaClick = () => {
    setShowArrow(true)
  }

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: t('freelance.services.simple_sites.title'),
      description: t('freelance.services.simple_sites.description'),
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: t('freelance.services.full_stack_apps.title'),
      description: t('freelance.services.full_stack_apps.description'),
    },
    {
      icon: <Cloud className="h-10 w-10 text-white" />,
      title: t('freelance.services.devops.title'),
      description: t('freelance.services.devops.description'),
    },
    {
      icon: <Settings className="h-10 w-10 text-white" />,
      title: t('freelance.services.maintenance.title'),
      description: t('freelance.services.maintenance.description'),
    },
  ]

  const processSteps = [
    {
      icon: <Handshake className="h-10 w-10 text-blue-500 dark:text-blue-300" />,
      title: t('freelance.process.discovery.title'),
      description: t('freelance.process.discovery.description'),
    },
    {
      icon: <Code className="h-10 w-10 text-blue-500 dark:text-blue-300" />,
      title: t('freelance.process.development.title'),
      description: t('freelance.process.development.description'),
    },
    {
      icon: <Cloud className="h-10 w-10 text-blue-500 dark:text-blue-300" />,
      title: t('freelance.process.deployment.title'),
      description: t('freelance.process.deployment.description'),
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blue-500 dark:text-blue-300" />,
      title: t('freelance.process.support.title'),
      description: t('freelance.process.support.description'),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center">
        <img
          src="https://placehold.co/1920x1080/4F46E5/ffffff?text=Professional+Coding+Environment"
          alt="Professional Coding Environment"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 z-10"></div>

        <div className="relative z-20 max-w-4xl px-4 py-8 rounded-xl bg-gray-600 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t('freelance.hero.headline')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">{t('freelance.hero.subheadline')}</p>
          <a
            href="#contact-form"
            className="mt-8 inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition duration-300"
            onClick={handleCtaClick}
          >
            {t('freelance.hero.button')}
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 flex justify-center">
        <div className="w-full sm:w-11/12 lg:w-9/12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{t('freelance.services.headline')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-300 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center"
              >
                <div className="flex items-center justify-center p-4 rounded-full bg-blue-600 mb-4 mx-auto w-20 h-20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Process Section */}
      <div className="py-20 bg-gray-300 dark:bg-gray-800 flex justify-center">
        <div className="w-full sm:w-11/12 lg:w-9/12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{t('freelance.process.headline')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-gray-400 dark:border-gray-700 shadow-md text-center"
              >
                <div className="flex items-center justify-center mb-4 mx-auto">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-20 flex justify-center flex-col items-center relative">
        <div className="w-full sm:w-11/12 lg:w-9/12 px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{t('freelance.cta.headline')}</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-400">{t('freelance.cta.subheadline')}</p>
          <a
            href="#contact-form"
            className="mt-8 inline-block px-10 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition duration-300"
            onClick={handleCtaClick}
          >
            {t('freelance.cta.button')}
          </a>
        </div>
        {showArrow && (
          <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-10 w-10 text-blue-600 dark:text-blue-300" />
          </div>
        )}
      </div>
    </div>
  )
}

export default FreelanceMainPage
