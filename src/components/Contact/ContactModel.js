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
    if (fullName.params.value.length >= 4 && email.params.value.length > 11 && message.params.value.length >= 50) {
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
    theme,
  }
}
