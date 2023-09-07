import React from 'react'
import SectionHeader from '../atoms/SectionHeader'
import Icon from '../atoms/Icon'

const AboutMeCards = ({props}) => {
    const { header, content, image } = props;

  return (
    <div className='about-me-card'>
      <Icon props={image} />

      <div className='about-me-card-header'>
        {header}
      </div>

      <div className='about-me-card-content'>
        {content}
      </div>
    </div>
  )
}

export default AboutMeCards
