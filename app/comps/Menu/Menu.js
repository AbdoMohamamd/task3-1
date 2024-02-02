'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../Menu/Menu.module.css'
const Menu = ({ show }) => {
  return (
    <ul className={`${style.menu} ${show ? style.showMenu : ''}`}>
      <li>
        <ul>
          <li>
            <Link href='/' className={style.logo}>
              <picture>
                <Image
                  src={logo}
                  width={46}
                  height={46}
                  alt='logo'
                  loading={'eager'}
                />
              </picture>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/'>Profile</Link>
      </li>
      <li>
        <Link href='/'>About Us</Link>
      </li>
      <li>
        <Link href='/'>Contact Us</Link>
      </li>
      <li>
        <Link href='/'>Login</Link>
      </li>
    </ul>
  )
}

export default Menu
