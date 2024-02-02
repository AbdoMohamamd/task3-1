import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import Twitter from '../../../public/twitter.jpg'
import Facebook from '../../../public/facebook.png'
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerLogoContainer}>
        {' '}
        <Link href='/'>
          <Image
            src={Logo}
            className={style.footerLogo}
            width={40}
            height={40}
            alt='Footer Logo'
          />
        </Link>
      </div>
      <div className={style.footerMenu}>
       
        <Link href='/'>Home</Link>
        <Link href='/'>About Us</Link>
        <Link href='/'>Contact Us</Link>
      </div>

      <div className={style.socialMedia}>
        <Link href='/' target='_blank' className={style.socialMediaIcons}>
          <Image src={Facebook} width={20} height={20} />
        </Link>
        <Link href='/' target='_blank' className={style.socialMediaIcons}>
          <Image src={Twitter} alt='Twitter' width={20} height={20} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
