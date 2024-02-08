'use client'
import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
const InterestList = () => {
  const [selectedOption, setSelectedOption] = useState('option1')
  const handleRadioChange = event => {
    setSelectedOption(event.target.value)
   
  }
  return (
    <div className='flex flex-col items-center'>
      <h2 className={'mb-2 font-bold text-2xl  text-center'}>
        Choose your Interest
      </h2>
      <ul>
        <li>
          <input
            className='m-3'
            type='radio'
            id={'option1'}
            name={'options'}
            value={'option1'}
            checked={selectedOption === 'option1'}
            onChange={handleRadioChange}
          />
          <label htmlFor={'option1'}>{'Creativity and arts'}</label>
        </li>
        <li>
          <input
            className='m-3'
            type='radio'
            id={'option2'}
            name={'options'}
            value={'option2'}
            checked={selectedOption === 'option2'}
            onChange={handleRadioChange}
          />
          <label htmlFor={'option2'}>{'Sports and fitness'}</label>
        </li>
        <li>
          {' '}
          <input
            className='m-3'
            type='radio'
            id={'option3'}
            name={'options'}
            value={'option3'}
            checked={selectedOption === 'option3'}
            onChange={handleRadioChange}
          />
          <label htmlFor={'option3'}>{'Technology and Coding'}</label>
        </li>
        <li>
          {' '}
          <input
            className='m-3'
            type='radio'
            id={'option4'}
            name={'options'}
            value={'option4'}
            checked={selectedOption === 'option4'}
            onChange={handleRadioChange}
          />
          <label htmlFor={'option4'}>{'Traveling and Exploring'}</label>
        </li>
      </ul>
      <Button label="Choose" className="bg-blue-400"/>
    </div>
  )
}

export default InterestList
