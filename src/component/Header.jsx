import React, { useState } from 'react'
import "../App.css"
function Header() {
  const [selectImage, setSelectImage] = useState([])
  const handleChange = (e) => {
    const selectFile = URL.createObjectURL(e.target.value)
    setSelectImage([selectFile, ...selectImage])
  }


  return (
    <div className='container-fluid bg-light'>
      <div className='row'>
        <div className='col-sm-8'>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                Image Gallery
              </a>
            </div>
          </nav>
        </div>
        <div className='col-sm-4'>
          <input type="file" onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default Header
