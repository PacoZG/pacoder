import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'
import { useField } from '../../hooks/InputHooks'
import Button from '../private/Button'
import Div from '../private/Div'
import Form from '../private/Form'
import Input from '../private/Input'
import P from '../private/P'
import TextArea from '../private/TextArea'

const Contact = () => {
  const { t } = useTranslation()
  const [disabled, setDisabled] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const fullName = useField('text')
  const email = useField('email')
  const message = useField('text')

  const handleVerifyCaptcha = () => {
    setDisabled(!disabled)
  }

  const handleSendEmail = e => {
    e.preventDefault()
    if (fullName.params.value.length >= 4 && email.params.value.length > 11 && message.params.value.length >= 50) {
      emailjs.sendForm('service_3y9qqi9', 'template_rruy7ci', e.target, 'ayNQSJVuw3mKwJnpn').then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
      setShowModal(!showModal)
      fullName.reset()
      email.reset()
      message.reset()
    }
  }

  return (
    <Div className="page-layout">
      <Form onSubmit={handleSendEmail}>
        <Div className={'flex flex-col p-5 md:p-28 gap-5'}>
          <Input placeholder={t('contact.name')} className={'email-input'} {...fullName.params} required name="name" />
          <Input placeholder="Email" className={'email-input'} {...email.params} required name="email" />
          <TextArea
            placeholder={t('contact.message')}
            className={'email-input'}
            {...message.params}
            required
            name="message"
          />
          <Button
            disabled={disabled}
            className={
              'transition duration-500 inline-flex justify-center py-2 px-4 border shadow-sm font-medium rounded-md bg-black bg-opacity-50 text-sm text-white hover:bg-gray-700 focus-within:outline-none'
            }
            type="submit"
          >
            {t('contact.send')}
          </Button>
          <Div className={'flex flex-col gap-3 md:flex-row'}>
            <ReCAPTCHA sitekey={'6Ld6fKYeAAAAAG4F6BreaLvyHeUL-tVtib6oU1Ej'} onChange={handleVerifyCaptcha} />
            <P
              className={
                showModal
                  ? 'transition duration-900 inline-flex justify-center p-2 border shadow-sm rounded-md bg-black bg-opacity-50 text-xxl text-white hover:bg-gray-700 focus-within:outline-none w-full'
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
