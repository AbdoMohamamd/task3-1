import React from 'react'
import Banner from '../comps/Banner/Banner'
import Form from '../comps/Form/Form'
import InterestList from '../comps/InterestList/InterestList'

const page = () => {
  return (
    <div>
      <Banner
        title={'Welcome to the ContactUs page'}
        phrase={'From this page you can contactUs'}
        background={'bg-contactUs'}
        startNow={''}
      />
      <section className='max-w-96 my-4 mx-auto p-4'>
        <Form title="Contact" />
      </section>
      <section>
        <InterestList />
      </section>
    </div>
  )
}

export default page
