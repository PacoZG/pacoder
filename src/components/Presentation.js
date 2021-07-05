import React from 'react'

const Presentation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-gradient-to-l from-yellow-900 to-gray-500 p-10">
      <div className="md:pl-20">
        <img
          className="h-max w-max border-4 border-black rounded-xl"
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1625155266/CV%20Pics/kxcpai1mniycdxszmgbq.jpg"
          alt="profile"
        />
      </div>
      <div className="p-10 md:pt-16">
        <h1 className="text-2xl text-gray-50 text-right">
          {"I'M "}
          <span className="text-green-500 text-right">FRANCISCO ZAVALA GONZALEZ</span>
        </h1>
        <p className="text-gray-50 text-right">Junior Full Stack Developer</p>
        <p className="text-lg text-gray-50 text-right">
          I am Mexican, I have been living in Finland since September 2014
        </p>
        <p className="text-lg text-gray-50 text-right">
          I started my studies in Communication Engineering in Spain, then some master courses taken in Aalto University
          as an exchanged Erasmus student in 2014
        </p>
      </div>
    </div>
  )
}

export default Presentation
