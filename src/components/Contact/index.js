import emailjs from '@emailjs/browser'
import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'
import { useField } from '../../hooks/InputHooks'
import variableService from '../../services/variables'
import { ReactComponent as Spiner } from '../../utils/assets/spiner.svg'
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
  const [siteKey, setSiteKey] = useState(null)
  const fullName = useField('text')
  const email = useField('email')
  const message = useField('text')

  const getKey = async () => {
    const key = await variableService.getSiteKey()
    setSiteKey('6Ld6fKYeAAAAAG4F6BreaLvyHeUL-tVtib6oU1Ej')
  }

  useEffect(() => {
    getKey()
  }, [setSiteKey])

  const handleVerifyCaptcha = () => {
    setDisabled(!disabled)
  }

  console.log({ siteKey })

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

  if (!siteKey) {
    return (
      <Div className="justify-center items-center flex outline-none bg-gray-400 min-h-screen">
        <Div className="flex flex-row space-x-1">
          <Spiner />
          <P className="pr-2 font-semibold text-gray-200">{t('loading')}</P>
        </Div>
      </Div>
    )
  }

  return (
    <Div className="page-layout lg:pt-40">
      <Form onSubmit={handleSendEmail}>
        <Div className={'flex flex-col p-5 md:p-28 gap-5'}>
          <Input placeholder={t('contact.name')} className={'email-input'} {...fullName.params} required name="name" />
          <Input placeholder="Email" className={'email-input'} {...email.params} required name="email" />
          <TextArea
            placeholder={t('contact.message')}
            className={'email-input h-52'}
            {...message.params}
            required
            name="message"
          />
          <Button
            disabled={disabled}
            className={
              disabled
                ? 'transition duration-700 inline-flex justify-center py-2 px-4 border-0 shadow-sm font-extralight rounded-md bg-black opacity-20 text-lg text-red-400'
                : 'transition duration-700 inline-flex justify-center py-2 px-4 border shadow-sm font-semibold rounded-md bg-black opacity-75 text-lg text-white hover:bg-gray-700 focus-within:outline-none'
            }
            type="submit"
          >
            {t('contact.send')}
          </Button>
          <Div className={'flex flex-col gap-3 md:flex-row'}>
            {siteKey && <ReCAPTCHA sitekey={siteKey} onChange={handleVerifyCaptcha} />}
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
