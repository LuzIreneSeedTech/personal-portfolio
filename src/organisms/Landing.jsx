import React from 'react'
import Button from '../atoms/Button'
import PFP from '../assets/pfp.jpg'

const Landing = () => {

    const buttonData = {
        buttonLabel : 'view projects',
    }

  return (
    <div className='landing-page-container'>
      <div className='landing-page-content'>
        <div className='landing-header-text'>
            <h1 className='header-text-1'>web</h1>
            <h1 className='header-text-2'>developer</h1>
        </div>

        <p className='landing-short-intro'>This website is a fictional company that develops an app that provides features and services for its users.</p>

        <div className='landing-page-button'>
            <Button props={buttonData}/>
        </div>
      </div>

      <div className='landing-page-img'>
        <img src={PFP} alt="portfolio image" />
        <h1 className='img-text-1'>l<span>uz</span></h1>
        <h1 className='img-text-2'><span>ire</span>ne</h1>
      </div>
    </div>
  )
}

export default Landing
