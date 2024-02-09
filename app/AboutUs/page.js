'use client'
import React,{useRef} from 'react'
import Banner from '../comps/Banner/Banner'
import PhotoWithText from '../comps/PhotoWithText/PhotoWithText'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'

const Page = () => {
const imgSectionRef =useRef(null);
  let cards = [
    <PhotoWithText img={img1} text={'Waves art'} key={1} />,
    <PhotoWithText img={img2} text={'Rocks at the beach'} key={2} />
  ]
  return (
    <div>
      {' '}
      <Banner
        title={'Welcome to the AboutUs page'}
        phrase={'Here are some information aboutUs'}
        background={'bg-aboutUs'}
        sectionRef={imgSectionRef}
      />
      <section
        className='w-56 block mt-0 mb-0 mx-auto text-center md:flex md:justify-center md:w-99'
         ref={imgSectionRef}
      >
        {cards}
      </section>
    
    </div>
  )
}

export default Page
