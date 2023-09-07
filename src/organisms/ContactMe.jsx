import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import EmailIcon from '../assets/email.png'
import ContactIcon from '../assets/contact.png'
import AddressIcon from '../assets/location.png'
import Button from '../atoms/Button'

const ContactMe = () => {
    const headerData = {
        sectionTextHeader : 'contact me.'
    }

    const buttonData = {
        buttonLabel : 'submit',
    }

    const contactInfoData = [
        {
            contactIcon : <img src={EmailIcon} alt="email icon" />,
            contactText : 'cortezluzirene@gmail.com'
        },
        {
            contactIcon : <img src={ContactIcon} alt="email icon" />,
            contactText : '+6391234567890'
        },
        {
            contactIcon : <img src={AddressIcon} alt="email icon" />,
            contactText : 'Cebu, philipines'
        },
    ]

  return (
    <div className='contact-me-container'>
      <div className='contact-me-header'>
        <SectionHeader props={headerData} />
      </div>

      <div className='contact-me-content'>
        <div className='contact-info-container'>
            <h3>say hi!</h3>
            {
                (contactInfoData.map((data, index) => {
                    return (
                        <div className='contact-info'>
                            <div className='contact-info-icon'>{data.contactIcon}</div>
                            <p>{data.contactText}</p>
                        </div>
                    )
                }))
            }
        </div>

        <div className='contact-me-form'>
           <input type="text" placeholder='Name' />
           <input type="text" placeholder='Email' />
           <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
           <Button props={buttonData} />
        </div>
      </div>
    </div>
  )
}

export default ContactMe
