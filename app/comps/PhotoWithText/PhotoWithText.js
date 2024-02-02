import React from 'react'
import Image from 'next/image'
import style from './PhotoWithText.module.css'
const PhotoWithText = ({img,text}) => {
    
  return (
   
  
    <div className={`${style.img} mb-2  `}><Image  className={'rounded-xl'} src={img} alt="Image1" width={350} height={350} /> 
        <p className={`${style.text} p-2 font-bold`}>{text}</p>
    </div>
 
  )
}

export default PhotoWithText