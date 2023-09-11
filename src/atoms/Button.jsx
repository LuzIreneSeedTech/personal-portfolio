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
      <button onClick={handleClick} type='
      submit' value='Send'>{buttonLabel}</button>
    </div>
  )
}

export default Button
