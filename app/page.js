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
      <Banner title={"Welcome to the home page"} phrase={"This is the main page of the website"} background={"bg-banner"} startNow={startNow} />
      <section
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99'
        ref={imgSectionRef}
      >
        <PhotoWithText img={img1} text={'Waves art'} />
        <PhotoWithText img={img2} text={'Rocks at the beach'} />
      </section>
      <section className='max-w-96 my-4 mx-auto p-4'>
        <Form />
      </section>
    </div>
  )
}
