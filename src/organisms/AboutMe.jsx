import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import AboutMeCards from '../molecules/AboutMeCards'
import PFP from '../assets/pfp.jpg'

const AboutMe = () => {
    const headerData = {
        sectionTextHeader : 'about me.'
    }

    const cardData = [
        {
            header : 'biography',
            content : 'This is a description of about me section. we are going to briefly describe this part of about me section.',
        },
        {
            header : 'contact',
            content : 'This is a description of about me section. we are going to briefly describe this part of about me section.',
        },
        {
            header : 'education',
            content : 'This is a description of about me section. we are going to briefly describe this part of about me section.',
        },
        {
            header : 'experience',
            content : 'This is a description of about me section. we are going to briefly describe this part of about me section.',
        },
    ]

  return (
    <div className='about-me-container'>
        <div className='about-me-header' id="about-me">
            <SectionHeader props={headerData}/>
        </div>

        <div className='about-me-content'>
            <div className='about-me-left-part'>
                <AboutMeCards props={cardData[0]} />
                <AboutMeCards props={cardData[1]} />
            </div>

            <div className='about-me-center-part'>
                <img src={PFP} alt="portfolio image" />
                <h1 className='about-img-txt-1'>w<span>eb</span></h1>
                <h1 className='about-img-txt-2'><span>develo</span>per</h1>
                <h1 className='about-img-txt-3'><span>cerami</span>c</h1>
                <h1 className='about-img-txt-4'>engi<span>neer</span></h1>
            </div>
            
            <div className='about-me-right-part'>
                <AboutMeCards props={cardData[2]} />
                <AboutMeCards props={cardData[3]} />
            </div>
        </div>
    </div>
  )
}

export default AboutMe
