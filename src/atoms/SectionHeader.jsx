import React from 'react'

const SectionHeader = ({props}) => {
    const { sectionTextHeader } = props

  return (
    <div className='section-header'>
        <h1>{sectionTextHeader}</h1>
    </div>
  )
}

export default SectionHeader
