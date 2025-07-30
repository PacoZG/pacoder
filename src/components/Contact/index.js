import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Spinner } from '../../utils/assets/spinner.svg'
import Button from '../private/Button'
import Div from '../private/Div'
import Form from '../private/Form'
import Input from '../private/Input'
import Label from '../private/Label'
import P from '../private/P'
import TextArea from '../private/TextArea'
import { ContactModel } from './ContactModel' // Assuming ContactModel is in the same directory

const Contact = () => {
  const { t } = useTranslation()
  const {
    handleSendEmail,
    handleVerifyCaptcha,
    emailInputValidation,
    buttonIsDisabled,
    showModal,
    sending,
    fullName,
    email,
    message,
    siteKey,
    theme,
  } = ContactModel()

  return (
    // Outer container for the contact form, matching the width of other sections
    // This Div is nested inside the Footer, so its background should be transparent
    <Div className="transform duration-500 pt-2 p-8 sm:p-4 pb-0 w-full sm:w-3/5 lg:w-8/12">
      <Form onSubmit={handleSendEmail}>
        {/* Form content wrapper - now acts as a distinct "card" */}
        <Div className="flex flex-col items-center justify-center gap-6 p-3 sm:p-5 md:p-7 bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg transition duration-500">
          {/* Name and Email Inputs */}
          <Div className="relative flex flex-col sm:flex-row justify-between items-center gap-6 w-full">
            <Input
              className="contact-input-style" // Replaced repetitive class with a custom class
              placeholder={t('contact.name')}
              {...fullName.params}
              required
              name="name"
            />
            <Div className="relative flex flex-col w-full">
              <Input
                className="contact-input-style" // Replaced repetitive class with a custom class
                placeholder="Email"
                {...email.params}
                required
                name="email"
              />
              {emailInputValidation() ? null : (
                <Label className="absolute -bottom-6 left-2 text-sm text-red-700 dark:text-red-400 font-medium">
                  {email.params.value.length > 0 && t('contact.invalid-email')}
                </Label>
              )}
            </Div>
          </Div>

          <TextArea
            className="contact-input-style h-24 resize-y" // Replaced repetitive class, added resize-y
            placeholder={t('contact.message')}
            {...message.params}
            required
            name="message"
            maxLength="500"
            minLength="50"
          />

          <Div className="flex flex-col ml:flex-row ml:items-center justify-evenly ml:justify-between w-full">
            <Div className="flex justify-end pt-1 w-full ml:w-auto ml:justify-start">
              {/* Adjusted alignment for character count */}
              {showModal ? (
                <P className="text-sm ml:text-md lg:text-base text-center text-green-700 dark:text-green-400 transform duration-500 font-semibold">
                  {/* Adjusted color */}
                  {'Thanks / Kiitos / Gracias'}
                </P>
              ) : (
                <Label className="text-gray-600 dark:text-gray-400 text-sm ml:text-md lg:text-base text-center sm:text-left">
                  {/* Adjusted color */}
                  {message.params.value.length > 49 ? (
                    <span className="text-green-700 dark:text-green-400 font-semibold">{`${t(
                      'contact.characters'
                    )}${message.params.value.length}/500 max`}</span>
                  ) : (
                    message.params.value.length > 0 && ( // Show from first character
                      <span className="text-red-700 dark:text-red-400 font-medium">{`${t(
                        // Changed to red for min length
                        'contact.characters'
                      )} ${message.params.value.length}/50 min`}</span>
                    )
                  )}
                </Label>
              )}
            </Div>

            <Div className="flex flex-col xl:flex-row items-center justify-center ml:justify-end mt-4 md:mt-0">
              <Div className="flex justify-center w-48 xs:w-full m-0">
                <ReCAPTCHA
                  className="scale-75 sm:scale-75 md:scale-80" // Adjusted scale for better visibility
                  sitekey={siteKey}
                  onChange={handleVerifyCaptcha}
                  theme={theme}
                />
              </Div>

              <Div className="flex flex-col items-center ">
                {!showModal ? (
                  <Button
                    disabled={buttonIsDisabled()}
                    className={
                      !buttonIsDisabled() || sending === true
                        ? 'contact-send-button-enabled'
                        : 'contact-send-button-disabled'
                    }
                    type="submit"
                  >
                    {!sending ? (
                      t('contact.send')
                    ) : (
                      <Div className="flex flex-row items-center gap-3">
                        <Spinner className="animate-spin h-5 w-5 text-current" />
                        <Label>{t('contact.sending')}</Label>
                      </Div>
                    )}
                  </Button>
                ) : (
                  <Div className="contact-sent-message-display">
                    {/* New class for sent message display */}
                    {t('contact.sent')}
                  </Div>
                )}
              </Div>
            </Div>
          </Div>
        </Div>
      </Form>

      {showModal && (
        <Div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <Div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-2xl text-center max-w-sm w-full">
            <P className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">{t('contact.sent')}!</P>
            <P className="text-lg text-gray-800 dark:text-gray-200">{t('contact.message-sent')}</P>
          </Div>
        </Div>
      )}
    </Div>
  )
}

export default Contact
