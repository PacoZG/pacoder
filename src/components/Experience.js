import React from 'react'

const Experience = () => {
  return (
    <div className="bg-green-100 flex flex-col items-center p-4">
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className=" pb-1 font-bold">
          Hotel Kämp - <span className="font-normal">SEPT 2015 - AUG 2020</span>
        </h1>
        <p className=" border-t-2 border-gray-700 pt-1">
          Responsible for the duties and maintenance of the room service department along with the guests wishes and
          needs at the restaurant and guests rooms
        </p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 mb-2 md:w-2/3">
        <h1 className="pb-1 font-bold">
          Customer service{' '}
          <span className="font-normal">in several positions and departments - JAN 2007 - AUG 2020 </span>
        </h1>
        <p className="border-t-2 border-gray-700 pt-1">Waiter supervisor, cook, dish washer</p>
      </div>
      <div className="border-2 border-gray-800 rounded-lg p-4 md:w-2/3">
        <h1 className="pb-1 font-bold">
          Professional drummer <span className="font-normal">as a group leader and teacher - JAN 2010 - AUG 2010 </span>
        </h1>
        <p className="border-t-2 border-gray-700 pt-1">
          Worked as a drummer and group leader in several bands and teaching drums as a side job
        </p>
      </div>
    </div>
  )
}

export default Experience
