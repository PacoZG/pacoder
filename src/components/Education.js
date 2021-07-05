import React from 'react'

const Education = () => {
  return (
    <div className="bg-green-100 flex flex-col items-center p-4 ">
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className=" pb-1 font-bold">
          Full Stack Open Course (online){' '}
          <a
            className="text-indigo-600 hover:text-red-800 hover:underline"
            href="https://fullstackopen.com/en/"
            target="blank"
          >
            Course Material
          </a>
        </h1>
        <p className=" border-t-2 border-gray-700 pt-1">
          Completed between AUG 2020 - JULY 2021, written and taught by professors from the University of Helsinki. The
          course is an introduction to modern web development with JavaScript, React, RESTful and GraphQL web services
          implemented with Node.js and also has parts on TypeScript, React Native and Continuous integration.
        </p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className=" pb-1 font-bold">Comminucation Engineering</h1>
        <p className=" border-t-2 border-gray-700 pt-1">
          Master Courses as a Erasmus Exchange Student 2014-2015 @Aalto University – School of Electrical Engineering
        </p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 md:w-2/3">
        <h1 className="pb-1 font-bold">4th Course of Telecommunications Engineering</h1>
        <p className="border-t-2 border-gray-700 pt-1">Universidad Politécnica de Cartagena</p>
      </div>
    </div>
  )
}

export default Education
