'use client'

import React from 'react'
import Image from 'next/image'
import style from '../Button/Button.module.css'
const Button = ({ id, label, icon, onClick }) => {
  return (
    <button id={id} onClick={onClick} className={style.closeMenuBtn}>
      {label}
      <Image src={icon} width={23} height={23} alt='logo' />
    </button>
  )
}

export default Button
