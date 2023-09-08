import React from 'react'
import LinkedInIcon from '../assets/linkedin.png'
import BehanceIcon from '../assets/behance.png'
import DribbbleIcon from '../assets/dribbble.png'

const Footer = () => {
    const footerIconData = [
        {
            icon : <img src={LinkedInIcon} alt="footer icon" />
        },
        {
            icon : <img src={BehanceIcon} alt="footer icon" />
        },
        {
            icon : <img src={DribbbleIcon} alt="footer icon" />
        },
    ]

  return (
    <div className='footer-container'>
      <div className='logo-social-container'>
        <div className='footer-logo'>
            LUZIRENE.
        </div>

        <div className='footer-social-container'>
            {
                (footerIconData.map((data, index) => {
                    return (
                        <div className='footer-social' key={index}>
                            {data.icon}
                        </div>
                    )
                }))
            }
        </div>
      </div>
      <div className='all-rights-reserved-container'>
        <h4>2023 <span>LUZIRENE.</span> all rights reserved.</h4>
      </div>
    </div>
  )
}

export default Footer
