import React from 'react'

const Hero = ({title, subtitle}) => {
  return (
    <div className='w-full h-80 text-white bg-indigo-700 flex flex-col justify-center items-center gap-4'>
        <div className='text-8xl font-semibold' >{title}</div>
        <div className='text-3xl font-normal'>{subtitle}</div>
    </div>
  )
}

export default Hero;