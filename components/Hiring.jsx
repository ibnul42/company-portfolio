import React from 'react'

export default function Hiring() {
  return (
    <div className='py-10 w-full max-w-[1440px] mx-auto'>
      <div className="bg-gradient-to-tr from-[#F1F1F5] to-[#E4ECF7] py-10 px-8 grid grid-cols-12">
        <div className="col-span-7">
            <p className='text-3xl font-bold'>Hire the best developers and designers around!</p>
        </div>
        <div className="col-span-5 flex items-center justify-center">
            <button className='px-6 py-3 rounded-md bg-gradient-to-bl hover:scale-[1.02] transition-all from-[#FFC656] to-[#F16063] text-white font-semibold inline-block'>Hire Top Developers</button>
        </div>
      </div>
    </div>
  )
}
