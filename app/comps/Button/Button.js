'use client'

import React from 'react'
import Image from 'next/image'
import style from './Button.module.css'
const Button = ({
  id,
  label,
  icon,
  onClick,
  isFixed,
  isHidden,
  withBackgroundColor,
  isMedium
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${style.button} ${isFixed ? style.isFixed : ''} ${
        isHidden ? style.isHidden : ''
      } ${withBackgroundColor ? style.withBackgroundColor : ''} ${
        isMedium ? style.isMedium : ''
      } ${'font-bold p-2 sm:p-2 md:p-3 lg:p-4 text-s md:text-lg lg:text-xl xxl:text-2xl rounded-xl text-black'} `}
    >
      {icon && <Image src={icon} width={20} height={20} alt='logo' />}
      {label}
    </button>
  )
}

export default Button
