import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    const navigateToContact = () => {
        setTimeout(() => {
            const contactMeSection = document.getElementById('contact-me');

            if (contactMeSection) {
                contactMeSection.scrollIntoView({ behavior : 'smooth' })
            }
        }, 100)
    }

    const logoToHome = () => {
        setTimeout(() => {
            const homeSection = document.getElementById('home');
            
            if (homeSection) {
                homeSection.scrollIntoView({ behavior : 'smooth' })
            }
        }, 100)
    }

  return (
    <div className='nav-container'>
        <div className='logo-container' onClick={logoToHome}>
            LUZIRENE.
        </div>
        <div className='nav-items-container'>
            <ul className='nav-link-container'>
                <BrowserRouter>
                    <li><HashLink smooth to='#home' className='nav-link-item'>Home</HashLink></li>
                    <li><HashLink smooth to='#projects' className='nav-link-item'>Projects</HashLink></li>
                    <li><HashLink smooth to='#tools' className='nav-link-item'>Tools</HashLink></li>
                    <li><HashLink smooth to='#about-me' className='nav-link-item'>About Me</HashLink></li>
                </BrowserRouter>
            </ul>
        </div>
        <div className='contact-me-btn-container'>
            <button onClick={navigateToContact}>Contact Me</button>
        </div>
    </div>
  )
}

export default Header
