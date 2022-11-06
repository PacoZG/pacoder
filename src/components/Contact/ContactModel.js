import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useField } from '../../hooks/InputHooks'
import localdb from '../../utils/localdb'

export const ContactModel = () => {
  const [disabled, setDisabled] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const fullName = useField('text')
  const email = useField('email')
  const message = useField('text')
  const siteKey = process.env.REACT_APP_SITE_KEY
  const theme = localdb.getTheme()

  const handleVerifyCaptcha = () => {
    setDisabled(!disabled)
  }

  const handleSendEmail = event => {
    event.preventDefault()
    if (emailInputValidation() && fullName.params.value.length >= 4 && message.params.value.length >= 50) {
      emailjs.sendForm('service_3y9qqi9', 'template_rruy7ci', event.target, 'ayNQSJVuw3mKwJnpn').then(
        result => {
          console.log(result.text)
          setShowModal(true)
        },
        error => {
          console.log(error.text)
        }
      )
      fullName.reset()
      email.reset()
      message.reset()
      setTimeout(() => {
        setShowModal(false)
      }, 15000)
    }
  }

  const emailInputValidation = () => {
    const emailPattern =
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (emailPattern.test(email.params.value) && email.params.value.length > 10) {
      return true
    }
    return false
  }

  return {
    handleSendEmail,
    emailInputValidation,
    handleVerifyCaptcha,
    disabled,
    setDisabled,
    showModal,
    setShowModal,
    fullName,
    email,
    message,
    siteKey,
    theme,
  }
}
