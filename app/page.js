'use client'
import Banner from './comps/Banner/Banner'
import PhotoWithText from './comps/PhotoWithText/PhotoWithText'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import { useRef } from 'react'
import Form from './comps/Form/Form'
export default function Home () {
  let cards = [
    <PhotoWithText img={img1} text={'Waves art'} key={1} />,
    <PhotoWithText img={img2} text={'Rocks at the beach'} key={2} />
  ]
  const imgSectionRef = useRef(null)

  return (
    <div>
      <Banner
        title={'Welcome to the home page'}
        phrase={'This is the main page of the website'}
        background={'bg-banner'}
        sectionRef={imgSectionRef}
      />
      <section
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99'
        ref={imgSectionRef}
      >
        {cards}
      </section>
      <section className='max-w-96 my-4 mx-auto p-4'>
        <Form title={'This is my form'} />
      </section>
    </div>
  )
}
