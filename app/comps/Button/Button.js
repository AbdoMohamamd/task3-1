'use client'

import React from 'react'
import Image from 'next/image'

const Button = ({
  label,
  icon,
  onClick,
  isFixed,
  isHidden,

  isMedium
}) => {
  return (
    <button
      onClick={onClick}
      className={
        'font-bold p-2 sm:p-2 md:p-3 lg:p-4 text-s md:text-lg lg:text-xl xxl:text-2xl rounded-xl text-black cursor-pointer border-none bg-white hover:bg-gray-500 transition-bg duration-500 ease-in-out  mx-auto min-w-0'
      }
    >
      {icon && <Image src={icon} width={20} height={20} alt='logo' />}
      {label}
    </button>
  )
}

export default Button
