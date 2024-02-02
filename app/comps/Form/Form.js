import React from 'react'
import style from './Form.module.css'
const Form = () => {
  return (
    <form className={style.form}>
      <h2 className={'mb-2 font-bold text-2xl '}>This is my form</h2>
      <label htmlFor='name' className={'mb-3 text-1xl'}>
        Name:
      </label>
      <input
        type='text'
        id='name'
        name='name'
        required
        className={'p-2 mb-4 rounded-xl'}
      />

      <label htmlFor='email' className={'mb-3 text-1xl'}>
        Email:
      </label>
      <input
        type='email'
        id='email'
        name='email'
        required
        className={'p-2 mb-4 rounded-xl'}
      />

      <input
        type='submit'
        className={`${style.submitButton} rounded-xl text-1xl pt-1 pr-4 pl-4 pb-1 text-white bg-blue-700 hover:bg-blue-900`}
        name='submit'
      />
    </form>
  )
}

export default Form
