'use client'
import Menu from '../app/comps/Menu/Menu'
import NavBar from './comps/NavBar/NavBar'
import Button from './comps/Button/Button'
import Banner from './comps/Banner/Banner'
import PhotoWithText from './comps/PhotoWithText/PhotoWithText'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import { useRef } from 'react'
import Form from './comps/Form/Form'
export default function Home () {
  const imgSectionRef = useRef(null)
  const startNow = () => {
    imgSectionRef.current.scrollIntoView({
      behavior: 'smooth'
    })
 
  }
  return (
    <div>
      <Banner startNow={startNow} />
      <section className='img-section' ref={imgSectionRef}>
        <PhotoWithText img={img1} text={'Waves art'} />
        <PhotoWithText img={img2} text={'Rocks at the beach'} />
      </section>
      <section className='form-section'><Form/></section>
    </div>
  )
}
