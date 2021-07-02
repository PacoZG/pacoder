import React from 'react'

const Skills = () => {
  return (
    <div className="p-16 bg-green-100">
      <div className="flex flex-col justify-center space-x-28 border-double border-b-8 border-gray-300 pb-12">
        <div className="flex items-center justify-center space-x-28 pb-12">
          <div className="flex flex-col items-center ">
            <img
              className="skill-logo bg-yellow-200  p-2 "
              src="https://img.icons8.com/nolan/96/javascript.png"
              alt="JS"
            />
            <p className="text-yellow-500">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-gray-600 p-2  "
              src="https://img.icons8.com/officel/80/000000/react.png"
              alt="React"
            />
            <p className="text-blue-300">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-white p-3 "
              src="https://img.icons8.com/color/96/000000/redux.png"
              alt="React"
            />
            <p className="text-purple-800">Redux</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-white p-2 "
              src="https://img.icons8.com/nolan/96/react-native.png"
              alt="React"
            />
            <p className="text-pink-800">React-Native</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-gray-300 p-2 "
              src="https://img.icons8.com/color/96/000000/mongodb.png"
              alt="React"
            />
            <p className="text-green-400">MongoDB</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-24">
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-gray-200 p-2 "
              src="https://img.icons8.com/color/48/000000/graphql.png"
              alt="React"
            />
            <p className="text-pink-500">GraphQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo bg-green-400 p-2  "
              src="https://img.icons8.com/color/96/000000/nodejs.png"
              alt="React"
            />
            <p className="text-black">Node</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="skill-logo p-3 "
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
              alt="React"
            />
            <p className="text-blue-300">Tailwindcss</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly pt-10">
        <p className="relative px-4 text-lg uppercase flex-shrink-0">
          <span className="spinner"></span>
          Ability to multitask
        </p>
        <p className="relative px-4 text-lg uppercase flex-shrink-0">
          <span className="spinner"></span>
          Engaged and focused
        </p>
        <p className="relative px-4 text-lg uppercase flex-shrink-0">
          <span className="spinner"></span>
          Mother tongue: Spanish
        </p>
        <p className="relative px-4 text-lg uppercase flex-shrink-0">
          <span className="spinner"></span>
          Proficiency in English
        </p>
      </div>
    </div>
  )
}

export default Skills
