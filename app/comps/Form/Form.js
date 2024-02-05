import React from 'react'
import style from './Form.module.css'
const Form = () => {
  return (
    <form className={'flex flex-col items-center' }>
      <h2 className={'mb-2 font-bold text-2xl  text-center'}>This is my form</h2>
      <label htmlFor='name' className={'mb-3 text-1xl w-full'}>
        Name:
      </label>
      <input
        type='text'
        id='name'
        name='name'
        required
        className={'p-2 mb-4 rounded-xl w-full border border-gray-400 border-solid' }
      />

      <label htmlFor='email' className={'mb-3 text-1xl w-full'}>
        Email:
      </label>
      <input
        type='email'
        id='email'
        name='email'
        required
        className={'p-2 mb-4 rounded-xl w-full border border-gray-400 border-solid' }
      />

      <input
        type='submit'
        className={' rounded-xl text-1xl pt-1 pr-4 pl-4 pb-1 text-white bg-blue-700 hover:bg-blue-900 mw-w-auto transition-bg duration-500 ease-in-out cursor-pointer border-none'}
        name='submit'
      />
    </form>
  )
}

export default Form
