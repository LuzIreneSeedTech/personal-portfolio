import React from 'react'

const Button = ({props, ...rest}) => {

    const { buttonLabel, buttonDestination } = props;

    const handleClick = () => {
      if(rest.onClick) {
        rest.onClick(buttonLabel)
      }
    }

  return (
    <div className='main-button'>
      <button onClick={handleClick}>{buttonLabel}</button>
    </div>
  )
}

export default Button
