import React from 'react'
import Image from 'next/image'
import style from './PhotoWithText.module.css'
const PhotoWithText = ({img,text}) => {
    
  return (
   
  
    <div className={style.img}><Image src={img} alt="Image1" width={400} height={400} /> 
        <p className={style.text}>{text}</p>
    </div>
 
  )
}

export default PhotoWithText