import React from 'react'
import CountUp from 'react-countup';

const numbersData = [
    {
        label: "Happy Clients",
        count: 4000
    },
    {
        label: "Happy Clients",
        count: 4000
    },
    {
        label: "Happy Clients",
        count: 4000
    },
   
]
export default function Numbers() {
    
  return (
    <div>



<div style={{backgroundColor: "#010f13"}} className=" py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className='text-white text-4xl font-bold text-center pt-6'>Numbers</h1>
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
 
        <div className="flex my-8 flex-col pb-4 items-center">
          <CountUp start={0} end="4000" duration={3} separator="," >
            {({ countUpRef }) => (
              <div className="text-white font-bold text-5xl" ref={countUpRef} />
            )}
          </CountUp>
          <div className="text-white mt-4 font-medium text-xl">hjkh</div>
        </div>

        <div className="flex my-8 flex-col pb-4 items-center">
          <CountUp start={0} end="4000" duration={3} separator=",">
            {({ countUpRef }) => (
              <div className="text-white font-bold text-5xl" ref={countUpRef} />
            )}
          </CountUp>
          <div className="text-white mt-4 font-medium text-xl">khkjh</div>
        </div>

        <div className="flex my-8 flex-col pb-4 items-center">
          <CountUp start={0} end="4000" duration={3} separator=",">
            {({ countUpRef }) => (
              <div className="text-white font-bold text-5xl" ref={countUpRef} />
            )}
          </CountUp>
          <div className="text-white mt-4 font-medium text-xl">Sman</div>
        </div>
    </div>
  </div>
</div>

    </div>
  )
}
