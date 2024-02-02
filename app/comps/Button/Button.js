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
      }`}
    >
      {icon && <Image src={icon} width={20} height={20} alt='logo' />}
      {label}
    </button>
  )
}

export default Button
