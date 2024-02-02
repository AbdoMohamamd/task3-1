'use client'
import React from 'react'
import style from './Banner.module.css'
import Button from '../Button/Button'
const Banner = ({startNow}) => {

  return (
    <section className={style.banner}>
      <h1>Welcome to Task1 in next.js</h1>
      <p>This is my first task using next.js</p>
      <Button label={'Start Now'} onClick={startNow} isMedium={true} />
    </section>
  )
}

export default Banner
