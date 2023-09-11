import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import EmailIcon from '../assets/email.png'
import ContactIcon from '../assets/contact.png'
import AddressIcon from '../assets/location.png'
import Button from '../atoms/Button'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

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

        <form className='contact-me-form' ref={form} onSubmit={sendEmail}>
           <input type="text" placeholder='Name' required name="from_name" />
           <input type="text" placeholder='Email' required name="from_email" />
           <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required ></textarea>
           <Button props={buttonData} />
        </form>
      </div>
    </div>
  )
}

export default ContactMe
