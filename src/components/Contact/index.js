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
    disabled,
    showModal,
    fullName,
    email,
    message,
    siteKey,
    // siteKeyTest,
  } = ContactModel()

  return (
    <Div className="page-layout transform duration-75 ">
      <Form onSubmit={handleSendEmail}>
        <Div className="flex flex-col items-center justify-center p-5 md:p-20 gap-5 bg-gray-500 dark:bg-gray-900 transition duration-500 bg-opacity-70 dark:bg-opacity-70 rounded-xl">
          <Input className={'email-input'} placeholder={t('contact.name')} {...fullName.params} required name="name" />
          <Input
            className={'email-input'}
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            {...email.params}
            required
            name="email"
          />
          <Label className="text-gray-300">
            {message.params.value.length > 49 ? (
              <span className="text-lg text-gray-300 pl-2 transform duration-150">{`${t('contact.characters')}${
                message.params.value.length
              }/500 max`}</span>
            ) : (
              <span className="text-lg text-red-400 pl-2 transform duration-150">{`${t('contact.characters')} ${
                message.params.value.length
              }/50 min`}</span>
            )}
          </Label>
          <TextArea
            className={'email-input h-52'}
            placeholder={t('contact.message')}
            {...message.params}
            required
            name="message"
          />
          <Button
            disabled={disabled}
            className={
              disabled
                ? 'transition duration-700 inline-flex justify-center py-2 px-4 w-40 border-0 shadow-sm font-extralight rounded-md bg-black opacity-20 text-lg text-red-400'
                : 'transition duration-700 inline-flex justify-center py-2 px-4 w-40 border shadow-sm font-semibold rounded-md bg-black opacity-75 text-lg text-white hover:bg-gray-700 focus-within:outline-none'
            }
            type="submit"
          >
            {t('contact.send')}
          </Button>
          <Div className={'flex flex-col gap-3 md:flex-row'}>
            <ReCAPTCHA sitekey={siteKey} onChange={handleVerifyCaptcha} />
            <P
              className={
                showModal
                  ? 'transition duration-900 inline-flex justify-center p-2 border shadow-sm rounded-md bg-black bg-opacity-50 text-center text-xxl text-white hover:bg-gray-700 focus-within:outline-none w-full'
                  : 'hidden '
              }
            >
              {t('contact.message-sent')}
            </P>
          </Div>
        </Div>
      </Form>
    </Div>
  )
}

export default Contact
