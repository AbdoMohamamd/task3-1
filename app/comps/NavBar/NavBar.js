'use client'
import React from 'react'
import Menu from '../Menu/Menu'
import Link from 'next/link'
import style from './NavBar.module.css'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { useState } from 'react'
import { useRef } from 'react'

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const iconRef = useRef(null)
 
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Link
          href='/'
          className={`${
            style.logo
          } ${'m-2 rounded-full bg-white hover:bg-gray-300 p-1'}`}
        >
          <Image
            src={logo}
            width={46}
            height={46}
            alt='logo'
            loading={'eager'}
          />
        </Link>
        <Menu show={isMenuOpen} />
        {/* <Button
          label={''}
          icon={isMenuOpen ? close : burgerMenu}
          isFixed={isMenuOpen}
          isHidden={true}
          onClick={() => {
            setMenuOpen(!isMenuOpen)
          }}
          backgroundColor={true}
        /> */}
        <div
          className={style.icon}
          onClick={() => {
            setMenuOpen(!isMenuOpen)
            iconRef.current.classList.toggle(style.change)
          }}
          ref={iconRef}
        >
          <div className={style.bar1} ></div>
          <div className={style.bar2} ></div>
          <div className={style.bar3} ></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
