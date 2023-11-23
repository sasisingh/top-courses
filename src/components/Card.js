import React from 'react'
import {FcLike} from "react-icons/fc";
import "../App.css"

const Card = ({courses}) => {
  return (
    <div className='card'>
      <img src={courses.image.url} className='image'/>
    
        <button className='likebtn'>
          <FcLike/> 
        </button>
        <div className='description'>
          <h4>{courses.title}</h4>
          <p>{courses.description}</p>
        </div>
       
    </div>
    
  )
}

export default Card
