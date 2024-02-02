import React from 'react'
import style from './Form.module.css' 
const Form = () => {
  return (
    <form className={style.form}>
                <label htmlFor="name" >Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>


                <input type='submit' className={style.submitButton} name='submit' />
            </form>
  )
}

export default Form