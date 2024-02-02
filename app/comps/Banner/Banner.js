'use client'
import React from 'react'
import style from './Banner.module.css'
import Button from '../Button/Button'
const Banner = ({ startNow }) => {
  return (
    <section className={`${style.banner} ${'mb-4 '}`}>
      <h1 className='text-4xl  font-bold text-white  helvetica-bold '>
        Welcome to Task1 in next.js
      </h1>
      <p className='text-2xl    text-white mb-2'>
        This is my first task using next.js
      </p>
      <Button
        label={'Start Now'}
        onClick={startNow}
        isMedium={true}
        withBackgroundColor={true}
      />
    </section>
  )
}

export default Banner
