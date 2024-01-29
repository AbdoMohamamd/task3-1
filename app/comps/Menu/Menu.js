'use client'
import Button from '../Button/Button'
import React from 'react'
import Logo from 'E:/ceohub/task3-1/public/burger-menu.svg'

const Menu = () => {
  return (
    <Button id={'button'}  icon={Logo} onClick={()=>{console.log(1)} }/>
  )
}

export default Menu