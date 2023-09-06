import React from 'react'

const Button = ({props}) => {

    const { buttonLabel, buttonDestination } = props;

  return (
   <button>{buttonLabel}</button>
  )
}

export default Button
