import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'
import Button from '../private/Button'
import Div from '../private/Div'
import Form from '../private/Form'
import Input from '../private/Input'
import Label from '../private/Label'
import P from '../private/P'
import TextArea from '../private/TextArea'
import { ContactModel } from './ContactModel'

const Contact = () => {
  const { t } = useTranslation()
  const {
    handleSendEmail,
    handleVerifyCaptcha,
    emailInputValidation,
    disabled,
    showModal,
    fullName,
    email,
    message,
    siteKey,
    theme,
  } = ContactModel()

  return (
    <Div className="transform duration-500 pt-2 p-8 sm:p-4 pb-0 w-full sm:w-4/5 md:w-3/4 ">
      <Form onSubmit={handleSendEmail}>
        <Div className="flex flex-col items-center justify-center gap-6 transition duration-500  bg-opacity-70 dark:bg-opacity-70 rounded-xl">
          <Div className="relative flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
            <Input
              className={
                'bg-opacity-10 bg-white rounded-md h-10 sm:h-12 w-full p-2 text-gray-800 dark:text-gray-400 text-md md:text-lg block border border-opacity-10 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent shadow-sm border-gray-100 placeholder-gray-700 dark:placeholder-gray-400 placeholder-opacity-50 dark:placeholder-opacity-50 dark:duration-500 transition duration-500 '
              }
              placeholder={t('contact.name')}
              {...fullName.params}
              required
              name="name"
            />
            <Div className="relative flex flex-col w-full">
              <Input
                className={
                  'bg-opacity-10 bg-white rounded-md h-10 sm:h-12  p-2 text-gray-800 dark:text-gray-400 text-md md:text-lg block border border-opacity-10 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent shadow-sm border-gray-100 placeholder-gray-700 dark:placeholder-gray-400 placeholder-opacity-50 dark:placeholder-opacity-50 dark:duration-500 transition duration-500 '
                }
                placeholder="Email"
                {...email.params}
                required
                name="email"
              />
              {emailInputValidation() ? null : (
                <Label className="absolute -bottom-5 left-2 text-sm text-red-900 dark:text-red-300">
                  {email.params.value.length > 11 && t('contact.invalid-email')}
                </Label>
              )}
            </Div>
          </Div>

          <TextArea
            className={
              'bg-opacity-10 bg-white rounded-md h-24 w-full p-2 text-gray-800 dark:text-gray-400 text-md md:text-lg block border border-opacity-10 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent shadow-sm border-gray-100 placeholder-gray-700 dark:placeholder-gray-400 placeholder-opacity-50 dark:placeholder-opacity-50 dark:duration-500 transition duration-500 '
            }
            placeholder={t('contact.message')}
            {...message.params}
            required
            name="message"
          />
          <P
            className={
              showModal
                ? 'absolute transition duration-500  inline-flex justify-center items-center p-2 shadow-sm rounded-md bg-black bg-opacity-90 text-center text-xxl text-white hover:bg-gray-700 focus-within:outline-none w-10/12 h-32 top-28 sm:top-20'
                : 'hidden '
            }
          >
            {t('contact.message-sent')}
          </P>
        </Div>

        <Div className="flex flex-col md:flex-row items-center">
          <Div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <Div className="w-full xxs:w-28 xs:w-32 flex justify-center sm:justify-between pt-2 xs:pt-0">
              {showModal ? (
                <P className="text-md text-green-800 dark:text-green-300 transform duration-500 w-40">
                  {'Thanks / Kiitos / Gracias'}
                </P>
              ) : (
                <Label className="text-gray-300 text-center">
                  {message.params.value.length > 49 ? (
                    <span className="text-md lg:text-base sm:w-60 text-green-800 dark:text-green-300 transform duration-500 ">{`${t(
                      'contact.characters'
                    )}${message.params.value.length}/500 max`}</span>
                  ) : (
                    <span className="text-md lg:text-base sm:w-60 text-red-900 dark:text-red-300 transform duration-500 ">{`${t(
                      'contact.characters'
                    )} ${message.params.value.length}/50 min`}</span>
                  )}
                </Label>
              )}
            </Div>

            <Div className="flex justify-center sm:block w-56">
              <ReCAPTCHA
                className="scale-65 sm:scale-55"
                sitekey={siteKey}
                onChange={handleVerifyCaptcha}
                theme={theme}
              />
            </Div>
          </Div>

          <Div className="flex flex-col items-center ">
            <Button
              disabled={disabled}
              className={
                disabled
                  ? 'transition duration-500  inline-flex justify-center py-2 px-4 w-48 shadow-sm font-extralight rounded-md bg-black opacity-20 text-lg text-gray-300'
                  : 'transition duration-500  inline-flex justify-center py-2 px-4 w-48 shadow-sm font-semibold rounded-md bg-blue-1000 hover:bg-opacity-75  opacity-75 text-lg text-green-600 focus-within:outline-none'
              }
              type="submit"
            >
              {t('contact.send')}
            </Button>
          </Div>
        </Div>
      </Form>
    </Div>
  )
}

export default Contact
