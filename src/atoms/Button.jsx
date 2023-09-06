import React from 'react'

const Button = ({props}) => {

    const { buttonLabel, buttonDestination } = props;

  return (
    <div className='main-button'>
      <button>{buttonLabel}</button>
    </div>
  )
}

export default Button
