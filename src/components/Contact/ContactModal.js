import emailjs from '@emailjs/browser'
import { useField } from '../../hooks/InputHooks'

export default class ContactModel {
  constructor(handleVerifyCaptcha, handleSendEmail) {
    this.disabled = true
    this.showModal = false
    this.siteKey = ''
    this.fullName = new useField('text')
    this.email = new useField('email')
    this.message = new useField('text')
  }

  setDisabled = () => {
    this.disabled = !this.disabled
  }

  setShowModal = () => {
    this.showModal = !this.showModal
  }

  handleVerifyCaptcha = () => {
    this.setDisabled()
  }

  // console.log({ siteKey })

  handleSendEmail = e => {
    e.preventDefault()
    if (
      this.fullName.params.value.length >= 4 &&
      this.email.params.value.length > 11 &&
      this.message.params.value.length >= 50
    ) {
      emailjs.sendForm('service_3y9qqi9', 'template_rruy7ci', e.target, 'ayNQSJVuw3mKwJnpn').then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
      this.setShowModal()
      this.fullName.reset()
      this.email.reset()
      this.message.reset()
    }
  }
}
