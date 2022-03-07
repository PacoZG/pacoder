import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useField } from '../../hooks/InputHooks'

export const ContactModel = () => {
  const [disabled, setDisabled] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const fullName = useField('text')
  const email = useField('email')
  const message = useField('text')
  const siteKey = '6Ld6fKYeAAAAAG4F6BreaLvyHeUL-tVtib6oU1Ej'
  const siteKeyTest = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

  const handleVerifyCaptcha = () => {
    setDisabled(!disabled)
  }

  const handleSendEmail = event => {
    event.preventDefault()
    debugger
    if (
      fullName.params.value.length >= 4 &&
      email.params.value.length > 11 &&
      message.params.value.length >= 50
    ) {
      emailjs
        .sendForm('service_3y9qqi9', 'template_rruy7ci', event.target, 'ayNQSJVuw3mKwJnpn')
        .then(
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

  return {
    handleSendEmail,
    handleVerifyCaptcha,
    disabled,
    setDisabled,
    showModal,
    setShowModal,
    fullName,
    email,
    message,
    siteKey,
    siteKeyTest,
  }
}
