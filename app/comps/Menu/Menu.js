'use client'
import Button from '../Button/Button'
import React from 'react'
import Close from '../../../public/x-symbol.svg'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from "../Menu/Menu.module.css"

const Menu = () => {
  return (
   <ul className={style.menu} id="menu">
            <ul>
               <li> <Button icon={Close} label={""} onClick={()=>{console.log(1)}} /></li>
                            <li><Link href="/" className={style.logo}>
                                <picture><Image src={logo} width={70} height={50} alt="logo" /></picture>
                            </Link>
        
                        </li>

            </ul>

            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Profile</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Login</Link></li>
        </ul> 
   )      }
   
  

export default Menu