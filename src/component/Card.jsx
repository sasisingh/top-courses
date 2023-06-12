import React, { useState } from "react"
const [selectImage,setSelectImage]=useState([])
function Card() {
  return (
    <div className='conatiner'>
      <div className='row'>
        {
          selectImage && selectImage.map((selectImage) => {
            <div className='col-sm-3'>
              <img src={selectImage} alt="Picture" height="200px" width="200px" />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Card
