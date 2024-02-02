'use client'
import React from 'react'
import Button from '../Button/Button'
import Menu from '../Menu/Menu'
import Link from 'next/link'
import style from './NavBar.module.css'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import burgerMenu from '../../../public/burger-menu.svg'
import { useState } from 'react'
import close from '../../../public/x-symbol.svg'
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] =useState(false);


  return (
    <nav className={style.navbar}>
      <Link href='/' className={style.logo}>
        <picture>
          <Image src={logo} width={46} height={46} alt='logo' />
        </picture>
      </Link>
     <Menu show={isMenuOpen}/> 
      <Button
        label={''}
        icon={isMenuOpen?close:burgerMenu}
        isFixed={isMenuOpen}
        isHidden={true}
        onClick={()=>{setMenuOpen(!isMenuOpen)}}
        backgroundColor={true}
      />
    </nav>
  )
}

export default NavBar
