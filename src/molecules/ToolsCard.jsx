import React from 'react'

const ToolsCard = ({props}) => {
    const { iconImage, toolCardTitle } = props;

  return (
    <div className='tools-card'>
        {iconImage}
        <h4>{toolCardTitle}</h4>
    </div>
  )
}

export default ToolsCard
