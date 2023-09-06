import React from 'react'

const Header = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            LUZIRENE.
        </div>
        <div className='nav-items-container'>
            <ul className='nav-link-container'>
                <li><a href='#' className='nav-link-item'>Home</a></li>
                <li><a href='#' className='nav-link-item'>Projects</a></li>
                <li><a href='#' className='nav-link-item'>Tools</a></li>
                <li><a href='#' className='nav-link-item'>About Me</a></li>
            </ul>
        </div>
        <div className='contact-me-btn-container'>
            <button>Contact Me</button>
        </div>
    </div>
  )
}

export default Header
