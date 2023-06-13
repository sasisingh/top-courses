import React from 'react'

function Header({ handleChange }) {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-vO0w83uCiRbMZ2-_uyJAP01ELjFCnSXIA&usqp=CAU" alt="" width="30" height="24" class="d-inline-block align-text-top" />
          <b> Image Gallery</b>
        </a>
        <ul className='nav navbar-nav navbar-right'>
          <lable className="label">
            <input type="file" className='input-file' onChange={handleChange}></input>
          </lable>
        </ul>
      </div>
    </nav>
  )
}

export default Header
