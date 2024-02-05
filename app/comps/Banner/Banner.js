'use client'
import React from 'react'
import Button from '../Button/Button'
const Banner = ({ startNow }) => {
  return (
    <section
      className={'mb-4 flex flex-col h-screen justify-center bg-banner bg-cover  bg-center text-center bg-no-repeat'}
    >
      <h1 className='text-4xl  font-bold text-white  helvetica-bold justify-center '>
        Welcome to Task1 in next.js
      </h1>
      <p className='text-2xl    text-white mb-2'>
        This is my first task using next.js
      </p>
      <Button
        label={'Start Now'}
        onClick={startNow}
        isMedium={true}
       
      />
    </section>
  )
}

export default Banner
