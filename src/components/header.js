import React from 'react'
import i18n from 'i18next'
import { EmailIcon, LinkedinIcon, WhatsappIcon } from 'react-share'

const Header = () => {
  return (
    <div className="bg-red-300">
      <div className="flex flex-row items-center justify-evenly">
        <button
          className="text-green-700 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-700 ease-in-out"
          onClick={() => i18n.changeLanguage('EN')}
        >
          ENG
        </button>

        <div className="flex items-center space-x-1 md:space-x-6 p-2">
          <a href="https://www.linkedin.com/in/francisco-zavala/" target="blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/PacoZG" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
          <a
            href="https://wa.me/358449888032?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
            target="blank"
          >
            <WhatsappIcon />
          </a>
          <a href="mailto:pako.zavala@gmail.com" target="blank">
            <EmailIcon size={64} />
          </a>
        </div>
        <button
          className="text-green-700 text-2xl font-bold transition transform hover:-translate-y-1 hover:scale-110 hover:text-indigo-700 duration-700 ease-in-out"
          onClick={() => i18n.changeLanguage('ES')}
        >
          ESP
        </button>
      </div>
    </div>
  )
}

export default Header
