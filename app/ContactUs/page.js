import React from 'react'
import Banner from '../comps/Banner/Banner'

const page = () => {
  return (
    <div>
      <Banner
        title={'Welcome to the ContactUs page'}
        phrase={'From this page you can contactUs'}
        background={'bg-contactUs'}
        startNow={''}
      />
    </div>
  )
}

export default page
